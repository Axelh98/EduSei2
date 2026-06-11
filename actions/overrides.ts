// app/actions/overrides.ts
"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient, getUser } from "@/lib/supabase-server"
import type { Seccion, Question } from "@/lib/types"

// ── Tipos ─────────────────────────────────────────────────────

export interface LessonOverride {
  id:          string
  author_id:   string
  category_id: string
  lesson_id:   string
  title:       string | null
  secciones:   Seccion[]
  questions:   Question[]
  is_public:   boolean
  created_at:  string
  updated_at:  string
  profiles?:   { full_name: string }
}

// ── Helper: parse seguro de JSON desde FormData ───────────────
// Devuelve null si el JSON está malformado, para que la acción
// pueda abortar con un error legible en vez de tirar una excepción
// (y, peor, pisar contenido existente con un array vacío).
function safeParseArray<T>(raw: FormDataEntryValue | null): T[] | null {
  if (raw === null || raw === "") return []
  if (typeof raw !== "string") return null
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as T[]) : null
  } catch {
    return null
  }
}

// ── Obtener overrides del maestro actual ──────────────────────
export async function getMyOverrides(): Promise<LessonOverride[]> {
  const user = await getUser()
  if (!user) return []

  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from("lesson_overrides")
    .select("*")
    .eq("author_id", user.id)
    .order("updated_at", { ascending: false })

  if (error) return []
  return data as LessonOverride[]
}

// ── Obtener overrides públicos de otros maestros ──────────────
export async function getPublicOverrides(
  categoryId?: string,
  lessonId?: string
): Promise<LessonOverride[]> {
  const user = await getUser()
  const supabase = await createServerSupabaseClient()

  let query = supabase
    .from("lesson_overrides")
    .select("*, profiles(full_name)")
    .eq("is_public", true)

  // Excluir los propios si está logueado
  if (user) query = query.neq("author_id", user.id)
  if (categoryId) query = query.eq("category_id", categoryId)
  if (lessonId)   query = query.eq("lesson_id", lessonId)

  const { data, error } = await query.order("updated_at", { ascending: false })
  if (error) return []
  return data as LessonOverride[]
}

// ── Obtener un override por ID (para el editor) ───────────────
export async function getOverrideById(id: string): Promise<LessonOverride | null> {
  const user = await getUser()
  if (!user) return null

  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from("lesson_overrides")
    .select("*")
    .eq("id", id)
    .eq("author_id", user.id) // solo el propio autor
    .single()

  if (error) return null
  return data as LessonOverride
}

// ── Crear nuevo override ──────────────────────────────────────
export async function createOverride(formData: FormData) {
  const user = await getUser()
  if (!user) return { error: "No autenticado." }

  const categoryId = formData.get("category_id") as string
  const lessonId   = formData.get("lesson_id")   as string
  const title      = formData.get("title")        as string | null
  const secciones  = safeParseArray<Seccion>(formData.get("secciones"))
  const questions  = safeParseArray<Question>(formData.get("questions"))
  const isPublic   = formData.get("is_public") === "true"

  if (!categoryId || !lessonId) return { error: "Faltan datos obligatorios." }
  if (secciones === null || questions === null) {
    return { error: "El contenido llegó con un formato inválido. Probá guardar de nuevo." }
  }

  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from("lesson_overrides")
    .insert({
      author_id:   user.id,
      category_id: categoryId,
      lesson_id:   lessonId,
      title:       title || null,
      secciones,
      questions,
      is_public:   isPublic,
    })
    .select()
    .single()

  if (error) return { error: "No se pudo crear la versión." }

  revalidatePath("/editor")
  return { success: true, id: data.id }
}

// ── Actualizar override existente ─────────────────────────────
export async function updateOverride(id: string, formData: FormData) {
  const user = await getUser()
  if (!user) return { error: "No autenticado." }

  const title     = formData.get("title")     as string | null
  const secciones = safeParseArray<Seccion>(formData.get("secciones"))
  const questions = safeParseArray<Question>(formData.get("questions"))
  const isPublic  = formData.get("is_public") === "true"

  if (secciones === null || questions === null) {
    return { error: "El contenido llegó con un formato inválido. No se guardó nada para no pisar tu versión." }
  }

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("lesson_overrides")
    .update({ title: title || null, secciones, questions, is_public: isPublic })
    .eq("id", id)
    .eq("author_id", user.id) // RLS extra a nivel JS

  if (error) return { error: "No se pudo actualizar la versión." }

  revalidatePath("/editor")
  revalidatePath(`/editor/${id}`)
  return { success: true }
}

// ── Cambiar visibilidad (toggle rápido desde la tarjeta) ──────
export async function toggleOverrideVisibility(id: string) {
  const user = await getUser()
  if (!user) return { error: "No autenticado." }

  const supabase = await createServerSupabaseClient()

  const { data: current, error: fetchError } = await supabase
    .from("lesson_overrides")
    .select("is_public")
    .eq("id", id)
    .eq("author_id", user.id)
    .single()

  if (fetchError || !current) return { error: "No se encontró la versión." }

  const { error } = await supabase
    .from("lesson_overrides")
    .update({ is_public: !current.is_public })
    .eq("id", id)
    .eq("author_id", user.id)

  if (error) return { error: "No se pudo cambiar la visibilidad." }

  revalidatePath("/editor")
  return { success: true, is_public: !current.is_public }
}

// ── Eliminar override ─────────────────────────────────────────
export async function deleteOverride(id: string) {
  const user = await getUser()
  if (!user) return { error: "No autenticado." }

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase
    .from("lesson_overrides")
    .delete()
    .eq("id", id)
    .eq("author_id", user.id)

  if (error) return { error: "No se pudo eliminar." }

  revalidatePath("/editor")
  return { success: true }
}

// ── Fetch anónimo: el alumno carga un override por ID ─────────
export async function fetchPublicOverride(
  overrideId: string
): Promise<LessonOverride | null> {
  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from("lesson_overrides")
    .select("*")
    .eq("id", overrideId)
    .eq("is_public", true)
    .single()

  if (error) return null
  return data as LessonOverride
}

// ── Duplicar override (de un colega público, o uno propio) ────
export async function duplicateOverride(
  sourceId: string
): Promise<{ id: string } | { error: string }> {
  const user = await getUser()
  if (!user) return { error: "No autenticado." }

  const supabase = await createServerSupabaseClient()

  // 1. Leer el original: debe ser público O ser del propio usuario
  //    (así un maestro puede crear una variante de su propia versión)
  const { data: source, error: fetchError } = await supabase
    .from("lesson_overrides")
    .select("*")
    .eq("id", sourceId)
    .or(`is_public.eq.true,author_id.eq.${user.id}`)
    .single()

  if (fetchError || !source) return { error: "No se encontró la versión original." }

  // 2. Insertar como versión nueva del usuario actual
  const { data: created, error: insertError } = await supabase
    .from("lesson_overrides")
    .insert({
      author_id:   user.id,
      category_id: source.category_id,
      lesson_id:   source.lesson_id,
      title:       source.title ? `Copia de ${source.title}` : "Copia de versión",
      secciones:   source.secciones,
      questions:   source.questions,
      is_public:   false, // siempre empieza privada
    })
    .select("id")
    .single()

  if (insertError || !created) return { error: "No se pudo duplicar la versión." }

  revalidatePath("/editor")
  return { id: created.id }
}