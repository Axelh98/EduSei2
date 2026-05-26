import type { Lesson } from "../types"

// Importar todas las partes
import { leccionesResumidasAT_Parte1 } from "./antiguo-testamento/antiguo-testamento-parte1"
import { leccionesResumidasAT_Parte2 } from "./antiguo-testamento/antiguo-testamento-parte2"
import { leccionesResumidasAT_Parte3 } from "./antiguo-testamento/antiguo-testamento-parte3"
import { leccionesResumidasAT_Parte4 } from "./antiguo-testamento/antiguo-testamento-parte4"
import { leccionesResumidasAT_Parte5 } from "./antiguo-testamento/antiguo-testamento-parte5"
import { leccionesResumidasAT_Parte6 } from "./antiguo-testamento/antiguo-testamento-parte6"
import { leccionesResumidasAT_Parte7 } from "./antiguo-testamento/antiguo-testamento-parte7"
import { leccionesResumidasAT_Parte8 } from "./antiguo-testamento/antiguo-testamento-parte8"
import { leccionesResumidasAT_Parte9 } from "./antiguo-testamento/antiguo-testamento-parte9"
import { leccionesResumidasAT_Parte10 } from "./antiguo-testamento/antiguo-testamento-parte10"

// Combinar todas las partes en un solo array
export const leccionesResumidasAT: Lesson[] = [
  ...leccionesResumidasAT_Parte1,
  ...leccionesResumidasAT_Parte2,
  ...leccionesResumidasAT_Parte3,
  ...leccionesResumidasAT_Parte4,
  ...leccionesResumidasAT_Parte5,
  ...leccionesResumidasAT_Parte6,
  ...leccionesResumidasAT_Parte7,
  ...leccionesResumidasAT_Parte8,
  ...leccionesResumidasAT_Parte9,
  ...leccionesResumidasAT_Parte10,
]

// Exportar también el conteo total
export const totalLeccionesAT = leccionesResumidasAT.length
