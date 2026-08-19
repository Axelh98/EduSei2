// scripts/migration/original-data.ts
//
// Los datos originales de lib/data/, tal como los armaba el lib/quiz-data.ts
// anterior a la migración. Solo lo usan los scripts de verificación, para
// tener con qué comparar el contenido nuevo de lib/content/.
//
// Cuando lib/data/ se borre, estos scripts dejan de poder correr: para
// re-verificar hay que recuperar la carpeta desde el historial de git.

import type { Lesson, Week } from "../../lib/types"

import { antiguoTestamentoWeeks } from "../../lib/data/antiguo-testamento"
import { antiguoTestamentoWeeks2semestre } from "../../lib/data/antiguo-testamento-segundo-semestre"
import { libroDeMormonWeeks } from "../../lib/data/libro-de-mormon"
import { libroMormonSegundoSemestreWeeks } from "../../lib/data/libro-de-mormon-segundo-semestre"
import { nuevoTestamentoWeeks } from "../../lib/data/nuevo-testamento"
import { doctrinaYConveniosWeeks1semestre } from "../../lib/data/doctrina-y-convenios-primer-semestre"
import { doctrinaYConveniosWeeks2semestre } from "../../lib/data/doctrina-y-convenios-segundo-semestre"
import { bloqueDeEscriturasWeeks } from "../../lib/data/bloques"
import { religion250Lessons } from "../../lib/data/religion-250"
import { religion225Lessons } from "../../lib/data/religion-225"
import { religion301Lessons } from "../../lib/data/religion-301"
import { religion301Lecciones } from "../../lib/data/religion-301/indexlecciones"
import { religion200Lessons } from "../../lib/data/religion-200"

// Religión 301 tomaba las secciones de un archivo y las preguntas de otro.
const religion301Original = religion301Lecciones.map((lesson) => ({
  ...lesson,
  questions: religion301Lessons.find((l) => l.id === lesson.id)?.questions ?? [],
}))

export const ORIGINAL_WEEKLY: Record<string, Week[]> = {
  "antiguo-testamento-1": antiguoTestamentoWeeks as Week[],
  "antiguo-testamento-2": antiguoTestamentoWeeks2semestre as Week[],
  "libro-de-mormon-1": libroDeMormonWeeks as Week[],
  "libro-de-mormon-2": libroMormonSegundoSemestreWeeks as Week[],
  "nuevo-testamento": nuevoTestamentoWeeks as Week[],
  "doctrina-y-convenios-1": doctrinaYConveniosWeeks1semestre as Week[],
  "doctrina-y-convenios-2": doctrinaYConveniosWeeks2semestre as Week[],
  Bloques: bloqueDeEscriturasWeeks as Week[],
}

export const ORIGINAL_FLAT: Record<string, Lesson[]> = {
  "religion-250": religion250Lessons as unknown as Lesson[],
  "religion-225": religion225Lessons as unknown as Lesson[],
  "religion-301": religion301Original as unknown as Lesson[],
  "religion-200": religion200Lessons as unknown as Lesson[],
}

/** Todas las lecciones "base" de un curso, en el orden en que se muestran. */
export function originalLessons(categoryId: string): Lesson[] {
  const flat = ORIGINAL_FLAT[categoryId]
  if (flat) return flat
  const weekly = ORIGINAL_WEEKLY[categoryId]
  if (weekly) return weekly.flatMap((w) => w.lessons)
  return []
}

export const ORIGINAL_CATEGORY_IDS = [
  ...Object.keys(ORIGINAL_WEEKLY),
  ...Object.keys(ORIGINAL_FLAT),
]

// Archivos de "lecciones resumidas": los que traían las secciones de repaso.
import { leccionesResumidasAT } from "../../lib/data/antiguo-testamento-primer-semestre"
import { leccionesResumidasLM } from "../../lib/data/libro-de-mormon-primer-semestre"
import { leccionesResumidasLM2 } from "../../lib/data/libro-de-mormon-2-semestre"
import { doctrinasConveniosLeccionesResumen } from "../../lib/data/doctrinas-convenios/DC-resumentotal"
import { leccionesResumidasR250 } from "../../lib/data/religion-250/religion-250-resumen"
import { leccionesResumidasR200 } from "../../lib/data/religion-200/religion-200-resumen"

/**
 * Contenido de repaso por curso, tal como lo resolvía el mapa anterior.
 * "antiguo-testamento-2" no está: apuntaba al archivo del primer semestre
 * y ningún id coincidía, así que nunca mostró repaso.
 */
export const ORIGINAL_CONTENT: Record<string, Lesson[]> = {
  "antiguo-testamento-1": leccionesResumidasAT as Lesson[],
  "libro-de-mormon-1": leccionesResumidasLM as Lesson[],
  "libro-de-mormon-2": leccionesResumidasLM2 as Lesson[],
  "doctrina-y-convenios-1": doctrinasConveniosLeccionesResumen as Lesson[],
  "religion-250": leccionesResumidasR250 as Lesson[],
  "religion-200": leccionesResumidasR200 as Lesson[],
  "religion-225": religion225Lessons as unknown as Lesson[],
  "religion-301": religion301Lecciones as unknown as Lesson[],
}
