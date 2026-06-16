// actions/clases.ts
"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient, getUser } from "@/lib/supabase-server"

// ── Tipos ─────────────────────────────────────────────────────

export interface Clase {
  id:           string
  teacher_id:   string
  name:         string
  course_type:  string
  category_id:  string | null
  schedule:     string | null
  period:       string | null
  invite_code:  string
  created_at:   string
}

export interface ClassMember {
  id:          string
  class_id:    string
  user_id:     string | null
  email:       string | null
  class_role:  "student" | "presidente" | "secretario"
  status:      "pending" | "active" | "removed"
  joined_at:   string
  profile?: {
    full_name: string
  } | null
}

// ── Listar mis clases (maestro) ───────────────────────────────

export async function getMisClases(): Promise<Clase[]> {
  const supabase = await createServerSupabaseClient()
  const user = await getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from("classes")
    .select("*")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false })

  if (error || !data) return []
  return data as Clase[]
}

// ── Detalle de una clase ──────────────────────────────────────

export async function getClase(id: string): Promise<Clase | null> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase
    .from("classes")
    .select("*")
    .eq("id", id)
    .single()
  return (data as Clase) ?? null
}

// ── Miembros de una clase ─────────────────────────────────────

export async function getMiembros(classId: string): Promise<ClassMember[]> {
  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from("class_members")
    .select("*, profile:profiles(full_name)")
    .eq("class_id", classId)
    .neq("status", "removed")
    .order("joined_at", { ascending: false })

  if (error || !data) return []
  return data as ClassMember[]
}

// ── Crear clase ───────────────────────────────────────────────
// Devuelve { id } en éxito para que el cliente haga el redirect.
// NO llamamos redirect() acá adentro — tira una excepción que
// startTransition() del cliente no propaga correctamente.

export async function crearClase(formData: FormData) {
  const user = await getUser()
  if (!user) {
    console.log("[crearClase] Error: usuario no autenticado")
    return { error: "No autenticado" }
  }

  const name        = String(formData.get("name") ?? "").trim()
  const course_type = String(formData.get("course_type") ?? "").trim()
  const category_id = String(formData.get("category_id") ?? "").trim() || null
  const schedule    = String(formData.get("schedule") ?? "").trim() || null
  const period      = String(formData.get("period") ?? "").trim() || null

  console.log("[crearClase] Datos recibidos:", { name, course_type, category_id, schedule, period })
  console.log("[crearClase] teacher_id:", user.id)

  if (!name || !course_type) {
    return { error: "Faltan el nombre y el curso" }
  }

  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from("classes")
    .insert({ teacher_id: user.id, name, course_type, category_id, schedule, period })
    .select("id")
    .single()

  if (error) {
    console.log("[crearClase] Error de Supabase:", error.code, error.message, error.details)
    return { error: `No se pudo crear la clase: ${error.message}` }
  }

  if (!data) {
    console.log("[crearClase] Sin data y sin error — probablemente RLS bloqueó el insert")
    return { error: "RLS bloqueó el insert. Revisá las policies de la tabla 'classes'." }
  }

  console.log("[crearClase] Clase creada con id:", data.id)
  revalidatePath("/maestro/clases")
  return { id: data.id }
}

// ── Editar clase ──────────────────────────────────────────────

export async function actualizarClase(id: string, formData: FormData) {
  const supabase = await createServerSupabaseClient()

  const updates: Record<string, string | null> = {
    name:        String(formData.get("name") ?? "").trim(),
    course_type: String(formData.get("course_type") ?? "").trim(),
    category_id: String(formData.get("category_id") ?? "").trim() || null,
    schedule:    String(formData.get("schedule") ?? "").trim() || null,
    period:      String(formData.get("period") ?? "").trim() || null,
  }

  if (!updates.name || !updates.course_type) {
    return { error: "Nombre y curso son obligatorios" }
  }

  const { error } = await supabase.from("classes").update(updates).eq("id", id)
  if (error) return { error: "No se pudo guardar" }

  revalidatePath(`/maestro/clases/${id}`)
  return { success: "Clase actualizada" }
}

// ── Regenerar código de invitación ────────────────────────────

export async function regenerarCodigo(id: string) {
  const supabase = await createServerSupabaseClient()
  const nuevo = Math.random().toString(36).slice(2, 10)

  const { error } = await supabase
    .from("classes")
    .update({ invite_code: nuevo })
    .eq("id", id)

  if (error) return { error: "No se pudo regenerar el código" }

  revalidatePath(`/maestro/clases/${id}`)
  return { success: "Código regenerado", code: nuevo }
}

// ── Pre-cargar emails ─────────────────────────────────────────

export async function precargarEmails(classId: string, emailsRaw: string) {
  const supabase = await createServerSupabaseClient()
  const emails = emailsRaw
    .split(/[\s,;]+/)
    .map(e => e.trim().toLowerCase())
    .filter(e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))

  if (emails.length === 0) {
    return { error: "No se encontraron emails válidos" }
  }

  const rows = emails.map(email => ({
    class_id:   classId,
    email,
    user_id:    null,
    status:     "pending" as const,
    class_role: "student" as const,
  }))

  const { error } = await supabase
    .from("class_members")
    .upsert(rows, { onConflict: "class_id,email", ignoreDuplicates: true })

  if (error) return { error: "No se pudieron cargar los emails" }

  revalidatePath(`/maestro/clases/${classId}`)
  return { success: `${emails.length} email(s) precargados` }
}

// ── Cambiar rol en clase ──────────────────────────────────────

export async function cambiarRolDeClase(
  memberId: string,
  newRole: "student" | "presidente" | "secretario",
  classId: string,
) {
  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("class_members")
    .update({ class_role: newRole })
    .eq("id", memberId)

  if (error) return { error: "No se pudo cambiar el rol" }

  revalidatePath(`/maestro/clases/${classId}`)
  return { success: "Rol actualizado" }
}

// ── Quitar miembro (soft delete) ──────────────────────────────

export async function quitarMiembro(memberId: string, classId: string) {
  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("class_members")
    .update({ status: "removed" })
    .eq("id", memberId)

  if (error) return { error: "No se pudo quitar al miembro" }

  revalidatePath(`/maestro/clases/${classId}`)
  return { success: "Miembro quitado" }
}
