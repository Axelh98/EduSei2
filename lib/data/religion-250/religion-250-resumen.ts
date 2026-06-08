import { leccionesResumidasR250_01_07 } from "./R250-resumen-l01-l07"
import { leccionesResumidasR250_08_14 } from "./R250-resumen-l08-l14"
import { leccionesResumidasR250_15_21 } from "./R250-resumen-l15-l21"
import { leccionesResumidasR250_22_28 } from "./R250-resumen-l22-l28"
import type { Lesson } from "@/lib/types"

export const leccionesResumidasR250: Lesson[] = [
  ...leccionesResumidasR250_01_07,
  ...leccionesResumidasR250_08_14,
  ...leccionesResumidasR250_15_21,
  ...leccionesResumidasR250_22_28,
]