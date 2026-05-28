
import type { FlatLesson } from "@/lib/types"
import { religion301Lecciones01_05 } from "./religion-301lecciones-01-05"
import { religion301Lecciones06_10 } from "./religion-301lecciones-06-10"
import { religion301Lecciones11_15 } from "./religion-301lecciones-11-15"
import { religion301Lecciones16_20 } from "./religion-301lecciones-16-20"
import { religion301Lecciones21_25 } from "./religion-301lecciones-21-25"

// ❌ Eliminar estas dos líneas:
// import { religion301Lessons } from "../religion-301"
// export const religion301Lecciones = religion301Lessons.map(...)

// ✅ Solo exportar el contenido crudo:
export const religion301Lecciones: FlatLesson[] = [
  ...religion301Lecciones01_05,
  ...religion301Lecciones06_10,
  ...religion301Lecciones11_15,
  ...religion301Lecciones16_20,
  ...religion301Lecciones21_25,
]