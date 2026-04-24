export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  reference?: string
}

export interface Seccion {
  tipo: "contexto" | "escrituras" | "enseñanza" | "conclusion" | "cuestionario";
  contenido?: string;
  citas?: { referencia: string; texto: string }[];
  autor?: string;
  fuente?: string;
  texto?: string;
  preguntas?: string[]; // Las preguntas sugeridas del manual (texto)
}

export interface Lesson {
  id: string;
  title: string;
  type: "Antiguo Testamento - Ven Sigueme" | "Nuevo Testamento - Ven Sigueme" | "Libro de Mormon - Ven Sigueme" | "Doctrina y Convenios - Ven Sigueme" | "Bloque de Escrituras - Ven Sigueme" | "Preparación para la Vida" | "Dominio de la Doctrina" | "Especial";
  description: string;
  chapterUrl?: string;
  
  // 1. MATERIAL DE ESTUDIO (Del JSON reestructurado)
  // Aquí van las citas, enseñanzas y las preguntas reflexivas (texto)
  secciones: Seccion[]; 
  
  // 2. EVALUACIÓN (Formato antiguo)
  // Aquí van las preguntas de opción múltiple para el motor del Quiz
  questions: Question[]; 
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
