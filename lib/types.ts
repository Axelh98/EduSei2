// ─── Bloques de contenido rico (para tipo "resumen" en Instituto) ─────────────

export type BloqueResumen =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "escritura"; referencia: string; texto: string; comentario?: string; link?: string }
  | { tipo: "cita"; autor: string; fuente?: string; texto: string; link?: string }
  | { tipo: "doctrinal"; puntos: string[] }
  | { tipo: "reflexion"; preguntas: string[] }

// ─── Sección ──────────────────────────────────────────────────────────────────

export interface Seccion {
  tipo: "contexto" | "escrituras" | "enseñanza" | "conclusion" | "cuestionario" | "resumen"
  contenido?: string
  citas?: {
    referencia: string
    texto: string
    link?: string
  }[]
  autor?: string
  fuente?: string
  texto?: string
  link?: string
  preguntas?: string[]
  bloques?: BloqueResumen[]
}

// ─── Pregunta evaluativa ──────────────────────────────────────────────────────

export interface Question {
  id: number
  question: string
  type?: "multiple" | "truefalse" | "written"
  options: string[]
  correctAnswer: number
  reference?: string
  explanation?: string
  prompt?: string
  minWords?: number
}

// ─── Lección ──────────────────────────────────────────────────────────────────

export interface Lesson {
  id: string
  title: string
  type?:
    | "Antiguo Testamento - Ven Sigueme"
    | "Nuevo Testamento - Ven Sigueme"
    | "Libro de Mormón - Ven Sigueme"
    | "Doctrina y Convenios - Ven Sigueme"
    | "Bloque de Escrituras - Ven Sigueme"
    | "Preparación para la Vida"
    | "Dominio de la Doctrina"
    | "Para la Fortaleza de la Juventud"
    | "Especial"
    | "Religión 250"
    | "Religión 225"
    | "Religión 301"
    | "Religión 200"
  description: string
  chapterUrl?: string
  secciones?: Seccion[]
  questions: Question[]
  unitTitle?: string
  unitNumber?: number
}

export interface Week {
  id: number
  title: string
  dateRange: string
  lessons: Lesson[]
}

// ─── Cursos ───────────────────────────────────────────────────────────────────

export type CourseType = "seminario" | "instituto"
export type InstituteTrack = "fundamental" | "electivo"

interface CourseMetadata {
  courseType: CourseType
  instituteTrack?: InstituteTrack
}

export interface WeeklyCategory extends CourseMetadata {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  layoutType?: "weekly"
  semester?: 1 | 2
  /**
   * Clave compartida entre los dos semestres de un mismo curso.
   * Ej: "antiguo-testamento", "libro-de-mormon", "doctrina-y-convenios".
   * Si está presente, la UI muestra el switcher 1° / 2° Semestre.
   */
  semesterGroup?: string
  weeks: Week[]
}

export interface FlatLesson extends Omit<Lesson, "type"> {
  type: string
  unitTitle?: string
  unitNumber?: number
}

export interface FlatCategory extends CourseMetadata {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  layoutType: "flat"
  lessons: FlatLesson[]
}

export type Category = WeeklyCategory | FlatCategory

export function isFlatCategory(cat: Category): cat is FlatCategory {
  return (cat as FlatCategory).layoutType === "flat"
}

export interface QuizState {
  currentQuestion: number
  answers: (number | null)[]
  isFinished: boolean
  score: number
}