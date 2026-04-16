export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  reference?: string
}

export interface Lesson {
  id: string
  title: string
  type: "Antiguo Testamento - Ven Sigueme" | "Nuevo Testamento - Ven Sigueme" | "Libro de Mormon - Ven Sigueme" | "Doctrina y Convenios - Ven Sigueme" | "Bloque de Escrituras - Ven Sigueme" | "Preparación para la Vida" | "Dominio de la Doctrina" | "Especial"
  description: string
  questions: Question[]
  chapterUrl?: string
}

export interface Week {
  id: number
  title: string
  dateRange: string
  lessons: Lesson[]
}

export interface Category {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  weeks: Week[]
}

export interface QuizState {
  currentQuestion: number
  answers: (number | null)[]
  isFinished: boolean
  score: number
}
