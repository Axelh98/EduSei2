import type { Lesson }  from "@/lib/types"


import { leccionesResumidasLM_Parte1 } from './libro-de-mormon/libro-mormon-parte-1'
import { leccionesSemana4_LM } from './libro-de-mormon/libro-mormon-leccionesSemana4'
import { leccionesSemana5_LM } from './libro-de-mormon/libro-mormon-leccionesSemana5'
import { leccionesSemana6_LM } from './libro-de-mormon/libro-mormon-leccionesSemana6'
import { leccionesSemana7_LM } from './libro-de-mormon/libro-mormon-leccionesSemana7'
import { leccionesSemana8_LM } from './libro-de-mormon/libro-mormon-leccionesSemana8'
import { leccionesSemana9_LM } from './libro-de-mormon/libro-mormon-leccionesSemana9'
import { leccionesResumidasLM_Semana10 } from './libro-de-mormon/libro-mormon-leccionesSemana10'
import { leccionesSemana11_LM } from './libro-de-mormon/libro-mormon-leccionesSemana11'
import { leccionesSemana12_LM } from './libro-de-mormon/libro-mormon-leccionesSemana12'
import { leccionesSemana13_LM } from './libro-de-mormon/libro-mormon-leccionesSemana13'
import { leccionesSemana14_LM } from './libro-de-mormon/libro-mormon-leccionesSemana14'
import { leccionesSemana15_LM } from './libro-de-mormon/libro-mormon-leccionesSemana15'
import { leccionesResumidasLM_Semana16 } from './libro-de-mormon/libro-mormon-leccionesSemana16'
import { leccionesSemana17 } from './libro-de-mormon/libro-mormon-leccionesSemana17'
import { leccionesSemana18_LM } from './libro-de-mormon/libro-mormon-leccionesSemana18'



export const leccionesResumidasLM: Lesson[] = [
  ...leccionesResumidasLM_Parte1,
  ...leccionesSemana4_LM,
  ...leccionesSemana5_LM,
  ...leccionesSemana6_LM,
  ...leccionesSemana7_LM,
  ...leccionesSemana8_LM,
  ...leccionesSemana9_LM,
  ...leccionesResumidasLM_Semana10,
  ...leccionesSemana11_LM,
  ...leccionesSemana12_LM,
  ...leccionesSemana13_LM,
  ...leccionesSemana14_LM,
  ...leccionesSemana15_LM,
  ...leccionesResumidasLM_Semana16,
  ...leccionesSemana17,
  ...leccionesSemana18_LM
]

export const totalLeccionesLM = leccionesResumidasLM.length
