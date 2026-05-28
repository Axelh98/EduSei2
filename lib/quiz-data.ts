import type { Category, WeeklyCategory, FlatCategory } from "./types"
import { isFlatCategory } from "./types"
import { leccionesResumidasAT } from "./data/antiguo-testamento-primer-semestre"
import { leccionesResumidasLM } from "./data/libro-de-mormon-primer-semestre"
import { leccionesResumidasLM2 } from "./data/libro-de-mormon-2-semestre"
import { antiguoTestamentoWeeks } from "./data/antiguo-testamento"
import { antiguoTestamentoWeeks2semestre } from "./data/antiguo-testamento-segundo-semestre"
import { libroMormonSegundoSemestreWeeks } from "./data/libro-de-mormon-segundo-semestre"
import { nuevoTestamentoWeeks } from "./data/nuevo-testamento"
import { libroDeMormonWeeks } from "./data/libro-de-mormon"
import { doctrinaYConveniosWeeks1semestre } from "./data/doctrina-y-convenios-primer-semestre"
import { doctrinaYConveniosWeeks2semestre } from "./data/doctrina-y-convenios-segundo-semestre"
import { bloqueDeEscriturasWeeks } from "./data/bloques"
import { religion250Lessons } from "./data/religion-250"
import { religion225Lessons } from "./data/religion-225"
import { religion301Lessons } from "./data/religion-301"
import { religion301Lecciones } from "./data/religion-301/indexlecciones"


export { isFlatCategory }

// ─── Mapa de contenido extendido por categoryId ───────────────────────────────
// Agregar aquí cada vez que haya un nuevo archivo de "leccionesResumidas".
// La clave debe coincidir con el id de la categoría en weeklyCategories.

const EXTENDED_CONTENT_MAP: Record<string, typeof leccionesResumidasAT> = {
  "antiguo-testamento-1": leccionesResumidasAT,
  "antiguo-testamento-2": leccionesResumidasAT,
  "libro-de-mormon-1": leccionesResumidasLM,
  "libro-de-mormon-2": leccionesResumidasLM2,
}

/**
 * Dada una categoría semanal, devuelve sus semanas con el contenido
 * extendido (secciones) mezclado. Si no hay contenido extendido para
 * esa categoría, devuelve las semanas sin modificar.
 */
export function getWeeksWithExtendedContent(category: WeeklyCategory) {
  const resumidas = EXTENDED_CONTENT_MAP[category.id]
  if (!resumidas) return category.weeks

  return category.weeks.map((week) => ({
    ...week,
    lessons: week.lessons.map((lesson) => {
      const extraData = resumidas.find((l) => l.id === lesson.id)
      return {
        ...lesson,
        secciones: extraData ? extraData.secciones : (lesson.secciones ?? []),
      }
    }),
  }))
}

// ─── Datos de categorías ──────────────────────────────────────────────────────

const weeklyCategories: WeeklyCategory[] = [
  {
    id: "antiguo-testamento-1",
    name: "Antiguo Testamento",
    shortName: "AT",
    description:
      "Desde la Creación hasta los profetas. Estudia las escrituras hebreas semana a semana con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    courseType: "seminario",
    semester: 1,
    semesterGroup: "antiguo-testamento",
    weeks: antiguoTestamentoWeeks,
  },
  {
    id: "antiguo-testamento-2",
    name: "Antiguo Testamento",
    shortName: "AT",
    description:
      "Desde la Creación hasta los profetas. Estudia las escrituras hebreas semana a semana con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    courseType: "seminario",
    semester: 2,
    semesterGroup: "antiguo-testamento",
    weeks: antiguoTestamentoWeeks2semestre,
  },
  {
    id: "libro-de-mormon-1",
    name: "Libro de Mormón",
    shortName: "LM",
    description:
      "Otro Testamento de Jesucristo. Los pueblos, profetas y enseñanzas del Libro de Mormón.",
    icon: "book-marked",
    color: "bg-primary",
    courseType: "seminario",
    semester: 1,
    semesterGroup: "libro-de-mormon",
    weeks: libroDeMormonWeeks,
  },
  {
    id: "libro-de-mormon-2",
    name: "Libro de Mormón",
    shortName: "LM",
    description:
      "Otro Testamento de Jesucristo. Los pueblos, profetas y enseñanzas del Libro de Mormón.",
    icon: "book-marked",
    color: "bg-primary",
    courseType: "seminario",
    semester: 2,
    semesterGroup: "libro-de-mormon",
    weeks: libroMormonSegundoSemestreWeeks,
  },
  {
    id: "nuevo-testamento",
    name: "Nuevo Testamento",
    shortName: "NT",
    description:
      "La vida y el ministerio de Jesucristo y sus apóstoles. Los Evangelios y las Epístolas semana a semana.",
    icon: "book-open",
    color: "bg-secondary",
    courseType: "seminario",
    weeks: nuevoTestamentoWeeks,
  },
  {
    id: "doctrina-y-convenios-1",
    name: "Doctrina y Convenios",
    shortName: "DyC",
    description: "Revelaciones para los últimos días. Primer semestre: secciones 1–76.",
    icon: "file-text",
    color: "bg-secondary",
    courseType: "seminario",
    semester: 1,
    semesterGroup: "doctrina-y-convenios",
    weeks: doctrinaYConveniosWeeks1semestre,
  },
  {
    id: "doctrina-y-convenios-2",
    name: "Doctrina y Convenios",
    shortName: "DyC",
    description: "Revelaciones para los últimos días. Segundo semestre: secciones 77–138.",
    icon: "file-text",
    color: "bg-secondary",
    courseType: "seminario",
    semester: 2,
    semesterGroup: "doctrina-y-convenios",
    weeks: doctrinaYConveniosWeeks2semestre,
  },
  {
    id: "Bloques",
    name: "Bloque de Escrituras",
    shortName: "Bloque",
    description:
      "Un bloque de estudio que combina las cuatro escrituras. Ideal para repasar y comparar enseñanzas clave.",
    icon: "book-open",
    color: "bg-primary",
    courseType: "seminario",
    weeks: bloqueDeEscriturasWeeks,
  },
]


const religion301LessonsWithContent = religion301Lecciones.map((lesson) => {
  const withQuestions = religion301Lessons.find((l) => l.id === lesson.id);
  return {
    ...lesson,
    questions: withQuestions?.questions ?? [],
  };
});

const flatCategories: FlatCategory[] = [
  {
    id: "religion-250",
    name: "Jesucristo y Su Evangelio Sempiterno",
    shortName: "Rel. 250",
    description:
      "Religión 250 — Profundiza en el ministerio, la expiación y las enseñanzas del Salvador a través de 28 lecciones.",
    icon: "book-open",
    color: "bg-primary",
    layoutType: "flat",
    courseType: "instituto",
    instituteTrack: "fundamental",
    lessons: religion250Lessons,
  },
  {
    id: "religion-225",
    name: "Fundamentos de la Restauración",
    shortName: "Rel. 225",
    description:
      "Religión 225 — La historia y doctrina de la Restauración desde el preludio hasta nuestros días, en 28 lecciones.",
    icon: "landmark",
    color: "bg-secondary",
    layoutType: "flat",
    courseType: "instituto",
    instituteTrack: "fundamental",
    lessons: religion225Lessons,
  },
  {
    id: "religion-301",
    name: "Antiguo Testamento - Religión 301",
    shortName: "Rel. 301",
    description:
      "Religión 301 — Un estudio profundo del Antiguo Testamento con 28 lecciones basadas en el manual de Instituto.",
    icon: "scroll",
    color: "bg-primary",
    layoutType: "flat",
    courseType: "instituto",
    instituteTrack: "fundamental",
    lessons: religion301LessonsWithContent,
  },
]

export const categories: Category[] = [...weeklyCategories, ...flatCategories]

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
  if (isFlatCategory(category)) {
    return category.lessons.reduce((acc, l) => acc + l.questions.length, 0)
  }
  return category.weeks.reduce(
    (acc, w) => acc + w.lessons.reduce((la, l) => la + l.questions.length, 0),
    0
  )
}

export function getFullLesson(categoryId: string, lessonId: string) {
  const baseData = getLessonById(categoryId, lessonId)
  if (!baseData) return null

  const resumidas = EXTENDED_CONTENT_MAP[categoryId]
  const extendedContent = resumidas?.find((l) => l.id === lessonId)

  return {
    ...baseData.lesson,
    secciones: extendedContent?.secciones ?? [],
  }
}

/** @deprecated Usar getFullLesson en su lugar */
export function getContentByLessonId(lessonId: string | number) {
  const idToSearch =
    typeof lessonId === "string"
      ? parseInt(lessonId.replace("leccion-", ""))
      : lessonId
  return leccionesResumidasAT.find((l) => Number(l.id) === idToSearch)
}