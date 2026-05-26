import type { Lesson }  from "@/lib/types"


// Importar todas las partes
import { leccionesResumidasLM_Parte6 } from "./libro-de-mormon/libro-mormon-2-parte-1"
import { leccionesResumidasLM_Parte7 } from "./libro-de-mormon/libro-mormon-2-parte-2"
import { leccionesResumidasLM_Parte8 } from "./libro-de-mormon/libro-mormon-2-parte-3"
import { leccionesResumidasLM_Parte9 } from "./libro-de-mormon/libro-mormon-2-parte-4"
import { leccionesResumidasLM_Parte10 } from "./libro-de-mormon/libro-mormon-2-parte-5"
import { leccionesResumidasLM_Parte11 } from "./libro-de-mormon/libro-mormon-2-parte-6"
import { leccionesResumidasLM_Parte12 } from "./libro-de-mormon/libro-mormon-2-parte-7"
import { leccionesResumidasLM_Parte13 } from "./libro-de-mormon/libro-mormon-2-parte-8"

// Combinar todas las partes en un solo array
export const leccionesResumidasLM2: Lesson[] = [
  ...leccionesResumidasLM_Parte6,
  ...leccionesResumidasLM_Parte7,
  ...leccionesResumidasLM_Parte8,
  ...leccionesResumidasLM_Parte9,
  ...leccionesResumidasLM_Parte10,
  ...leccionesResumidasLM_Parte11,
  ...leccionesResumidasLM_Parte12,
  ...leccionesResumidasLM_Parte13
]

// Exportar también el conteo total
export const totalLeccionesLM2 = leccionesResumidasLM2.length