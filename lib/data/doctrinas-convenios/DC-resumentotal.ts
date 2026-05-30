import type { Lesson } from "@/lib/types"

// Semanas 1–5
import {
  semana1Lecciones,
  semana2Lecciones,
  semana3Lecciones,
  semana4Lecciones,
  semana5Lecciones,
} from "./DC-resumen-1-5"

// Semanas 6–10
import {
  semana6Lecciones,
  semana7Lecciones,
  semana8Lecciones,
  semana9Lecciones,
  semana10Lecciones,
} from "./DC-resumen-6-10"

// Semanas 11–15
import {
  semana11Lecciones,
  semana12Lecciones,
  semana13Lecciones,
  semana14Lecciones,
  semana15Lecciones,
} from "./DC-resumen-11-15"

// Semanas 16–20
import {
  semana16Lecciones,
  semana17Lecciones,
  semana18Lecciones,
  semana19Lecciones,
  semana20Lecciones,
} from "./DC-resumen-16-20"

export const doctrinasConveniosLeccionesResumen: Lesson[] = [
  ...semana1Lecciones,
  ...semana2Lecciones,
  ...semana3Lecciones,
  ...semana4Lecciones,
  ...semana5Lecciones,
  ...semana6Lecciones,
  ...semana7Lecciones,
  ...semana8Lecciones,
  ...semana9Lecciones,
  ...semana10Lecciones,
  ...semana11Lecciones,
  ...semana12Lecciones,
  ...semana13Lecciones,
  ...semana14Lecciones,
  ...semana15Lecciones,
  ...semana16Lecciones,
  ...semana17Lecciones,
  ...semana18Lecciones,
  ...semana19Lecciones,
  ...semana20Lecciones,
]

export const totalLeccionesDC = doctrinasConveniosLeccionesResumen.length