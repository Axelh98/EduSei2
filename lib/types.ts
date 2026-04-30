// ─── Bloques de contenido rico (para tipo "resumen" en Instituto) ─────────────

export type BloqueResumen =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "escritura"; referencia: string; texto: string; comentario?: string }
  | { tipo: "cita"; autor: string; fuente?: string; texto: string }
  | { tipo: "doctrinal"; puntos: string[] }
  | { tipo: "reflexion"; preguntas: string[] }

// ─── Sección ──────────────────────────────────────────────────────────────────
// tipo "resumen" es el nuevo formato de Instituto (usa bloques[])
// los demás son los tipos heredados del Seminario (sin cambios)

export interface Seccion {
  tipo: "contexto" | "escrituras" | "enseñanza" | "conclusion" | "cuestionario" | "resumen"
  // Campos heredados Seminario
  contenido?: string
  citas?: { referencia: string; texto: string }[]
  autor?: string
  fuente?: string
  texto?: string
  preguntas?: string[]
  // Campo nuevo solo para tipo "resumen"
  bloques?: BloqueResumen[]
}

// ─── Pregunta evaluativa ──────────────────────────────────────────────────────

export interface Question {
  id: number
  question: string
  type?: "multiple" | "truefalse"
  options: string[]
  correctAnswer: number
  reference?: string
  explanation?: string
}

// ─── Lección ──────────────────────────────────────────────────────────────────
// NOTA: type y secciones son opcionales para no romper archivos de datos
// existentes (bloques.ts, doctrina-y-convenios.ts, etc.) que no los declaran.

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
    | "Especial"
    | "Religión 250"
    | "Religión 225"
  description: string
  chapterUrl?: string
  secciones?: Seccion[]
  questions: Question[]
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