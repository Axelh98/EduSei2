import type { Lesson } from "@/lib/types"

import { leccionesResumidasR200_01_05 } from "./R200-resumen-l01-05"
import { leccionesResumidasR200_06_10 } from "./R200-resumen-l06-10"
import { leccionesResumidasR200_11_15 } from "./R200-resumen-l11-15"
import { leccionesResumidasR200_16_20 } from "./R200-resumen-l16-20"
import { leccionesResumidasR200_21_25 } from "./R200-resumen-l21-25"
import { leccionesResumidasR200_26_28 } from "./R200-resumen-l26-28"

export const leccionesResumidasR200: Lesson[] = [
  ...leccionesResumidasR200_01_05,
  ...leccionesResumidasR200_06_10,
  ...leccionesResumidasR200_11_15,
  ...leccionesResumidasR200_16_20,
  ...leccionesResumidasR200_21_25,
  ...leccionesResumidasR200_26_28
]