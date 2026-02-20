import type { Category } from "./types"
import { antiguoTestamentoWeeks } from "./data/antiguo-testamento"
import { nuevoTestamentoWeeks } from "./data/nuevo-testamento"
import { libroDeMormonWeeks } from "./data/libro-de-mormon"
import { doctrinaYConveniosWeeks } from "./data/doctrina-y-convenios"
import { bloqueDeEscriturasWeeks } from "./data/bloques"

export const categories: Category[] = [
  {
    id: "antiguo-testamento",
    name: "Antiguo Testamento",
    shortName: "AT",
    description:
      "Desde la Creación hasta los profetas. Estudia las escrituras hebreas semana a semana con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    weeks: antiguoTestamentoWeeks,
  },
  {
    id: "nuevo-testamento",
    name: "Nuevo Testamento",
    shortName: "NT",
    description:
      "La vida y el ministerio de Jesucristo y sus apóstoles. Los Evangelios y las Epístolas semana a semana.",
    icon: "book-open",
    color: "bg-secondary",
    weeks: nuevoTestamentoWeeks,
  },
  {
    id: "libro-de-mormon",
    name: "Libro de Mormón",
    shortName: "LM",
    description:
      "Otro Testamento de Jesucristo. Los pueblos, profetas y enseñanzas del Libro de Mormón.",
    icon: "book-marked",
    color: "bg-primary",
    weeks: libroDeMormonWeeks,
  },
  {
    id: "doctrina-y-convenios",
    name: "Doctrina y Convenios",
    shortName: "DyC",
    description:
      "Revelaciones para los últimos días. Doctrinas y convenios de la Restauración.",
    icon: "file-text",
    color: "bg-secondary",
    weeks: doctrinaYConveniosWeeks,
  },
  {
    id: "Bloques",
    name: "Bloque de Escrituras",
    shortName: "Bloque",
    description:
      "Un bloque de estudio que combina las cuatro escrituras. Ideal para repasar y comparar enseñanzas clave.",
    icon: "book-open",
    color: "bg-primary",
    weeks: bloqueDeEscriturasWeeks, // Este bloque se puede llenar con lecciones seleccionadas de las otras categorías
  }
]

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id)
}

export function getLessonById(categoryId: string, lessonId: string) {
  const category = getCategoryById(categoryId)
  if (!category) return null
  for (const week of category.weeks) {
    const lesson = week.lessons.find((l) => l.id === lessonId)
    if (lesson) return { lesson, week, category }
  }
  return null
}

export function getTotalLessons(category: Category) {
  return category.weeks.reduce((acc, w) => acc + w.lessons.length, 0)
}

export function getTotalQuestions(category: Category) {
  return category.weeks.reduce(
    (acc, w) =>
      acc + w.lessons.reduce((la, l) => la + l.questions.length, 0),
    0
  )
}
