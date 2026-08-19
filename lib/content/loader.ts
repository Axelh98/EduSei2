// lib/content/loader.ts
//
// Punto de entrada ÚNICO para leer el contenido de una lección
// (secciones de repaso + preguntas).
//
// Cada lección vive en lib/content/<categoryId>/<lessonId>.json y se carga
// con su propio import(), así que una petición solo trae la lección pedida.
//
// ⚠️ SOLO SERVIDOR. Desde un componente "use client" hay que usar la server
// action loadLessonForEditor de actions/lesson-content.ts.

import { cache } from "react"
import type { Seccion, Question } from "@/lib/types"
import { CONTENT_MAP } from "./generated-map"
import { normalizeLessonFile } from "./normalize"

export interface LessonContent {
  secciones: Seccion[]
  questions: Question[]
}

/**
 * Devuelve el contenido de una lección, o null si no existe el archivo.
 * `cache()` deduplica la llamada dentro de un mismo request.
 */
export const getLessonContent = cache(
  async (categoryId: string, lessonId: string): Promise<LessonContent | null> => {
    const loadFile = CONTENT_MAP[categoryId]?.[lessonId]
    if (!loadFile) return null
    const mod = await loadFile()
    return normalizeLessonFile(mod.default ?? mod)
  }
)

/** Solo las secciones de repaso, que es lo que consume la página de estudio. */
export async function getLessonSecciones(
  categoryId: string,
  lessonId: string
): Promise<Seccion[]> {
  const content = await getLessonContent(categoryId, lessonId)
  return content?.secciones ?? []
}

/** true si el curso tiene archivos de contenido. */
export function hasContent(categoryId: string): boolean {
  return categoryId in CONTENT_MAP
}
