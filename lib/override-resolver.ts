// lib/override-resolver.ts
// Usado en /recuperar cuando el alumno carga su plan.
// Fetch anónimo — no requiere autenticación.

import type { Seccion, Question } from "@/lib/types"

const SUPABASE_URL      = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// ── Tipo del payload en el link de recuperación ───────────────
export interface RecoveryLesson {
  categoryId:  string
  lessonId:    string
  overrideId?: string   // opcional — si está, muestra la versión del maestro
}

// ── Fetch de un override público por ID ───────────────────────
// El alumno llama esto sin ningún JWT.
// La RLS de Supabase solo devuelve el registro si is_public = true.

export async function fetchPublicOverride(overrideId: string): Promise<{
  title:     string | null
  secciones: Seccion[]
  questions: Question[]
} | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null

  try {
    const url = `${SUPABASE_URL}/rest/v1/lesson_overrides?id=eq.${overrideId}&is_public=eq.true&select=title,secciones,questions`

    const res = await fetch(url, {
      headers: {
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Accept":        "application/json",
      },
      // No cachear — siempre mostrar la versión más reciente del maestro
      cache: "no-store",
    })

    if (!res.ok) return null

    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) return null

    return {
      title:     data[0].title     ?? null,
      secciones: data[0].secciones ?? [],
      questions: data[0].questions ?? [],
    }
  } catch {
    return null
  }
}

// ── Helpers de codificación del link ─────────────────────────
// El payload viaja como Base64 en el query param ?data=xxx
// igual que el sistema actual. Solo agregamos overrideId.

export function encodeRecoveryPayload(lessons: RecoveryLesson[]): string {
  return btoa(unescape(encodeURIComponent(JSON.stringify(lessons))))
}

export function decodeRecoveryPayload(data: string): RecoveryLesson[] {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(data))))
  } catch {
    return []
  }
}