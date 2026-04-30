import type { Category, WeeklyCategory, FlatCategory } from "./types"
import { isFlatCategory } from "./types"
import { leccionesResumidas } from "./data/antiguo-testamento-resumido"
import { antiguoTestamentoWeeks } from "./data/antiguo-testamento"
import { nuevoTestamentoWeeks } from "./data/nuevo-testamento"
import { libroDeMormonWeeks } from "./data/libro-de-mormon"
import { doctrinaYConveniosWeeks } from "./data/doctrina-y-convenios"
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
    courseType: "seminario",
    weeks: antiguoTestamentoWeeks,
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
    id: "doctrina-y-convenios",
    name: "Doctrina y Convenios",
    shortName: "DyC",
    description: "Revelaciones para los últimos días. Doctrinas y convenios de la Restauración.",
    icon: "file-text",
    color: "bg-secondary",
    courseType: "seminario",
    weeks: doctrinaYConveniosWeeks,
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
  return leccionesResumidas.find((l) => Number(l.id) === idToSearch)
}

export function getFullLesson(categoryId: string, lessonId: string) {
  const baseData = getLessonById(categoryId, lessonId)
  if (!baseData) return null
  const extendedContent = leccionesResumidas.find((l) => l.id === lessonId)
  return {
    ...baseData.lesson,
    secciones: extendedContent?.secciones || [],
  }
}