import type { Category, WeeklyCategory, FlatCategory } from "./types"
import { isFlatCategory } from "./types"
import { leccionesResumidasAT } from "./data/antiguo-testamento-resumido"
import { leccionesResumidasLM } from "./data/libro-de-mormon-resumido"
import { antiguoTestamentoWeeks } from "./data/antiguo-testamento"
import { antiguoTestamentoWeeks2semestre } from "./data/antiguo-testamento-segundo-semestre"
import { nuevoTestamentoWeeks } from "./data/nuevo-testamento"
import { libroDeMormonWeeks } from "./data/libro-de-mormon"
import { doctrinaYConveniosWeeks1semestre } from "./data/doctrina-y-convenios-primer-semestre"
import { doctrinaYConveniosWeeks2semestre } from "./data/doctrina-y-convenios-segundo-semestre"
import { bloqueDeEscriturasWeeks } from "./data/bloques"
import { religion250Lessons } from "./data/religion-250"
import { religion225Lessons } from "./data/religion-225"

export { isFlatCategory }

const weeklyCategories: WeeklyCategory[] = [
  {
    id: "antiguo-testamento",
    name: "Antiguo Testamento",
    shortName: "AT",
    description: "Desde la Creación hasta los profetas. Estudia las escrituras hebreas semana a semana con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    semester: 1,
    courseType: "seminario",
    weeks: antiguoTestamentoWeeks,
  },
  {
    id: "antiguo-testamento-2do-semestre",
    name: "Antiguo Testamento - Segundo Semestre",
    shortName: "AT-2do-Sem",
    description: "Estudia las escrituras hebreas del segundo semestre con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    semester: 2,
    courseType: "seminario",
    weeks: antiguoTestamentoWeeks2semestre,
  },
  {
    id: "nuevo-testamento",
    name: "Nuevo Testamento",
    shortName: "NT",
    description: "La vida y el ministerio de Jesucristo y sus apóstoles. Los Evangelios y las Epístolas semana a semana.",
    icon: "book-open",
    color: "bg-secondary",
    courseType: "seminario",
    weeks: nuevoTestamentoWeeks,
  },
  {
    id: "libro-de-mormon",
    name: "Libro de Mormón",
    shortName: "LM",
    description: "Otro Testamento de Jesucristo. Los pueblos, profetas y enseñanzas del Libro de Mormón.",
    icon: "book-marked",
    color: "bg-primary",
    courseType: "seminario",
    weeks: libroDeMormonWeeks,
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
    weeks: doctrinaYConveniosWeeks2semestre,
  },
  {
    id: "Bloques",
    name: "Bloque de Escrituras",
    shortName: "Bloque",
    description: "Un bloque de estudio que combina las cuatro escrituras. Ideal para repasar y comparar enseñanzas clave.",
    icon: "book-open",
    color: "bg-primary",
    courseType: "seminario",
    weeks: bloqueDeEscriturasWeeks,
  },
]

const flatCategories: FlatCategory[] = [
  {
    id: "religion-250",
    name: "Jesucristo y Su Evangelio Sempiterno",
    shortName: "Rel. 250",
    description: "Religión 250 — Profundiza en el ministerio, la expiación y las enseñanzas del Salvador a través de 28 lecciones.",
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
    description: "Religión 225 — La historia y doctrina de la Restauración desde el preludio hasta nuestros días, en 28 lecciones.",
    icon: "landmark",
    color: "bg-secondary",
    layoutType: "flat",
    courseType: "instituto",
    instituteTrack: "fundamental",
    lessons: religion225Lessons,
  },
]


export function getUniqueCourses(): Category[] {
  const seen = new Map<string, Category>()
  for (const category of categories) {
    const key = category.name // agrupa por nombre
    const existing = seen.get(key)
    if (!existing) {
      seen.set(key, category)
    } else {
      // Quedarse con el de menor semestre (1° tiene prioridad)
      const existingSem = (existing as any).semester ?? 1
      const currentSem = (category as any).semester ?? 1
      if (currentSem < existingSem) seen.set(key, category)
    }
  }
  return Array.from(seen.values())
}

export const categories: Category[] = [...weeklyCategories, ...flatCategories]

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

export function getContentByLessonId(lessonId: string | number) {
  const idToSearch = typeof lessonId === "string"
    ? parseInt(lessonId.replace("leccion-", ""))
    : lessonId
  return leccionesResumidasAT.find((l) => Number(l.id) === idToSearch)
}

export function getFullLesson(categoryId: string, lessonId: string) {
  const baseData = getLessonById(categoryId, lessonId)
  if (!baseData) return null

  // Determinar qué archivo de resúmenes usar según la categoría
  let extendedContent = null
  if (categoryId === "antiguo-testamento") {
    extendedContent = leccionesResumidasAT.find((l) => l.id === lessonId)
  } else if (categoryId === "libro-de-mormon") {
    extendedContent = leccionesResumidasLM.find((l) => l.id === lessonId)
  }

  return {
    ...baseData.lesson,
    secciones: extendedContent?.secciones || [],
  }
}