// actions/usuarios.ts
// Server actions para admin: crear usuarios, asignar rol, asignar supervisores,
// invitar por email. Usa supabase-admin (service_role) cuando hace falta.

"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient, getUser, getProfile } from "@/lib/supabase-server"

// ── Tipos ─────────────────────────────────────────────────────

export type UserRole =
  | "admin"
  | "director_area"
  | "director_regional"
  | "coordinador"
  | "supervisor"
  | "maestro"
  | "estudiante"

export interface Profile {
  id:         string
  full_name:  string | null
  role:       UserRole
  email?:     string | null
  created_at: string
}

export interface RoleAssignment {
  id:            string
  user_id:       string
  supervisor_id: string
  created_at:    string
  user?:         { full_name: string | null; role: UserRole }
  supervisor?:   { full_name: string | null; role: UserRole }
}

// ── Helper: verificar permisos de admin ───────────────────────

async function assertAdminOrAreaDirector() {
  const profile = await getProfile()
  if (!profile) throw new Error("No autenticado")
  if (profile.role !== "admin" && profile.role !== "director_area") {
    throw new Error("Sin permisos")
  }
  return profile
}

// ── Listar usuarios visibles ──────────────────────────────────
// Para admin y director_area: todos. Para el resto: solo descendientes.

export async function getUsuariosVisibles(filters?: {
  search?: string
  role?:   UserRole | "all"
}): Promise<Profile[]> {
  const supabase = await createServerSupabaseClient()
  const user = await getUser()
  if (!user) return []

  let query = supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200)

  if (filters?.role && filters.role !== "all") {
    query = query.eq("role", filters.role)
  }
  if (filters?.search) {
    query = query.ilike("full_name", `%${filters.search}%`)
  }

  // RLS se encarga del scoping por jerarquía
  const { data } = await query
  return (data as Profile[]) ?? []
}

// ── Crear usuario desde cero ──────────────────────────────────
// Requiere service_role para crear el auth.user. Usamos un cliente admin.

export async function crearUsuario(formData: FormData) {
  await assertAdminOrAreaDirector()

  const email     = String(formData.get("email") ?? "").trim().toLowerCase()
  const fullName  = String(formData.get("full_name") ?? "").trim()
  const password  = String(formData.get("password") ?? "")
  const role      = String(formData.get("role") ?? "estudiante") as UserRole
  const supervisorId = String(formData.get("supervisor_id") ?? "").trim() || null

  if (!email || !fullName) {
    return { error: "Email y nombre son obligatorios" }
  }
  if (password && password.length < 6) {
    return { error: "La contraseña debe tener al menos 6 caracteres" }
  }

  // Importamos dinámicamente para evitar bundlear service_role en código cliente
  const { createAdminClient } = await import("@/lib/supabase-admin")
  const admin = createAdminClient()

  // 1. Crear auth user
  const { data: created, error: authError } = await admin.auth.admin.createUser({
    email,
    password: password || undefined,
    email_confirm: !!password,                       // si tiene pass, lo confirmamos
    user_metadata: { full_name: fullName },
  })

  if (authError || !created.user) {
    return { error: `No se pudo crear el usuario: ${authError?.message ?? ""}` }
  }

  // 2. Crear/actualizar profile
  const { error: profileError } = await admin
    .from("profiles")
    .upsert({ id: created.user.id, full_name: fullName, role })

  if (profileError) {
    return { error: "Usuario creado pero falló el perfil" }
  }

  // 3. Asignar supervisor si corresponde
  if (supervisorId) {
    await admin
      .from("role_assignments")
      .insert({ user_id: created.user.id, supervisor_id: supervisorId })
  }

  // 4. Si no se le dio contraseña, enviarle un magic link para que defina la suya
  if (!password) {
    await admin.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/` },
    })
  }

  revalidatePath("/admin/usuarios")
  return { success: "Usuario creado" }
}

// ── Invitar por email (sin contraseña) ────────────────────────

export async function invitarUsuario(formData: FormData) {
  await assertAdminOrAreaDirector()

  const email    = String(formData.get("email") ?? "").trim().toLowerCase()
  const fullName = String(formData.get("full_name") ?? "").trim()
  const role     = String(formData.get("role") ?? "estudiante") as UserRole

  if (!email || !fullName) {
    return { error: "Email y nombre son obligatorios" }
  }

  const { createAdminClient } = await import("@/lib/supabase-admin")
  const admin = createAdminClient()

  const { data, error } = await admin.auth.admin.inviteUserByEmail(email, {
    data: { full_name: fullName, pending_role: role },
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/`,
  })

  if (error || !data.user) {
    return { error: `No se pudo invitar: ${error?.message ?? ""}` }
  }

  await admin
    .from("profiles")
    .upsert({ id: data.user.id, full_name: fullName, role })

  revalidatePath("/admin/usuarios")
  return { success: `Invitación enviada a ${email}` }
}

// ── Cambiar rol ───────────────────────────────────────────────

export async function cambiarRol(userId: string, newRole: UserRole) {
  await assertAdminOrAreaDirector()

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("profiles")
    .update({ role: newRole })
    .eq("id", userId)

  if (error) return { error: "No se pudo cambiar el rol" }

  revalidatePath("/admin/usuarios")
  return { success: "Rol actualizado" }
}

// ── Asignar supervisor ────────────────────────────────────────

export async function asignarSupervisor(userId: string, supervisorId: string) {
  await assertAdminOrAreaDirector()

  if (userId === supervisorId) {
    return { error: "Un usuario no puede ser supervisor de sí mismo" }
  }

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("role_assignments")
    .insert({ user_id: userId, supervisor_id: supervisorId })

  if (error) {
    if (error.code === "23505") return { error: "Ya estaba asignado a ese supervisor" }
    return { error: "No se pudo asignar el supervisor" }
  }

  revalidatePath(`/admin/usuarios/${userId}`)
  return { success: "Supervisor asignado" }
}

export async function quitarSupervisor(assignmentId: string, userId: string) {
  await assertAdminOrAreaDirector()

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("role_assignments")
    .delete()
    .eq("id", assignmentId)

  if (error) return { error: "No se pudo quitar la asignación" }

  revalidatePath(`/admin/usuarios/${userId}`)
  return { success: "Asignación eliminada" }
}

// ── Detalle de un usuario ─────────────────────────────────────

export async function getUsuario(id: string): Promise<Profile | null> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single()
  return (data as Profile) ?? null
}

export async function getSupervisoresDe(userId: string): Promise<RoleAssignment[]> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase
    .from("role_assignments")
    .select("*, supervisor:profiles!supervisor_id(full_name, role)")
    .eq("user_id", userId)

  return (data as RoleAssignment[]) ?? []
}
