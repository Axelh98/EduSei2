// actions/lesson-content.ts
//
// Puente para que los componentes de cliente puedan pedir el contenido de
// una lección sin que el corpus entero de lib/content/ entre en su bundle.

"use server"

import { getLessonById } from "@/lib/quiz-data"
import { getLessonContent } from "@/lib/content/loader"
import type { Seccion, Question } from "@/lib/types"

export interface EditorLesson {
  title: string
  secciones: Seccion[]
  questions: Question[]
}

/**
 * Contenido original de una lección, tal como lo carga el editor
 * antes de que el maestro lo modifique.
 *
 * El título sale del catálogo (metadatos) y el contenido del loader.
 */
export async function loadLessonForEditor(
  categoryId: string,
  lessonId: string
): Promise<EditorLesson | null> {
  const result = getLessonById(categoryId, lessonId)
  if (!result) return null

  const content = await getLessonContent(categoryId, lessonId)

  return {
    title: result.lesson.title,
    secciones: content?.secciones ?? [],
    questions: content?.questions ?? [],
  }
}
