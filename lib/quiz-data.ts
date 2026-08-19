// lib/quiz-data.ts
//
// Acceso al catálogo de cursos y lecciones.
//
// Este módulo se importa desde componentes "use client", así que solo
// trabaja con METADATOS: los trae lib/content/registry.ts a partir de los
// _manifest.json. La prosa de las lecciones y sus preguntas se cargan
// aparte con lib/content/loader.ts (servidor) o con la server action
// loadLessonForEditor de actions/lesson-content.ts (cliente).
//
// Si algún día vuelve a aparecer acá un import de lib/content/loader.ts o
// de un JSON de lección, el corpus entero vuelve al bundle del navegador.

import type { Category, WeeklyCategory } from "./types"
import { isFlatCategory } from "./types"
import { categories } from "./content/registry"

export { isFlatCategory, categories }

// ─── Helpers de semestre ──────────────────────────────────────────────────────

/**
 * Dada una categoría, devuelve el par { sem1Id, sem2Id } si pertenece
 * a un grupo de semestres, o null si no tiene par.
 */
export function getSemesterSiblings(
  category: Category
): { sem1Id: string; sem2Id: string } | null {
  if (isFlatCategory(category) || !category.semesterGroup) return null

  const group = categories.filter(
    (c): c is WeeklyCategory =>
      !isFlatCategory(c) && c.semesterGroup === category.semesterGroup
  )
  const sem1 = group.find((c) => c.semester === 1)
  const sem2 = group.find((c) => c.semester === 2)

  if (!sem1 || !sem2) return null
  return { sem1Id: sem1.id, sem2Id: sem2.id }
}

// ─── Helpers generales ────────────────────────────────────────────────────────

export function getUniqueCourses(): Category[] {
  const seen = new Map<string, Category>()
  for (const category of categories) {
    const key = category.name
    const existing = seen.get(key)
    if (!existing) {
      seen.set(key, category)
    } else {
      const existingSem = (existing as WeeklyCategory).semester ?? 1
      const currentSem = (category as WeeklyCategory).semester ?? 1
      if (currentSem < existingSem) seen.set(key, category)
    }
  }
  return Array.from(seen.values())
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function getLessonById(categoryId: string, lessonId: string) {
  const category = getCategoryById(categoryId)
  if (!category) return null

  if (isFlatCategory(category)) {
    const lesson = category.lessons.find((l) => l.id === lessonId)
    if (lesson) return { lesson, week: null, category }
    return null
  }

  for (const week of category.weeks) {
    const lesson = week.lessons.find((l) => l.id === lessonId)
    if (lesson) return { lesson, week, category }
  }
  return null
}

export function getTotalLessons(category: Category): number {
  if (isFlatCategory(category)) return category.lessons.length
  return category.weeks.reduce((acc, w) => acc + w.lessons.length, 0)
}

export function getTotalQuestions(category: Category): number {
  // questionCount viene del manifiesto: contar questions.length acá
  // obligaría a cargar las preguntas de todos los cursos en el navegador.
  if (isFlatCategory(category)) {
    return category.lessons.reduce((acc, l) => acc + (l.questionCount ?? 0), 0)
  }
  return category.weeks.reduce(
    (acc, w) => acc + w.lessons.reduce((la, l) => la + (l.questionCount ?? 0), 0),
    0
  )
}

// getFullLesson y getContentByLessonId se reemplazaron por
// getLessonContent de lib/content/loader.ts (servidor) y por la server
// action loadLessonForEditor de actions/lesson-content.ts (cliente).
