// lib/content/registry.ts
//
// Catálogo de cursos: metadatos y nada más.
//
// Este módulo SÍ puede importarse desde componentes "use client": lo único
// que entra al bundle son los _manifest.json (títulos, descripciones,
// cuántas preguntas tiene cada lección y si tiene repaso), no la prosa ni
// las preguntas en sí. El contenido se pide aparte con lib/content/loader.ts
// desde el servidor.
//
// Los manifiestos los genera: npx tsx scripts/migrate-content.ts

import type {
  Category,
  WeeklyCategory,
  FlatCategory,
  Lesson,
  FlatLesson,
  Week,
  CourseType,
  InstituteTrack,
} from "@/lib/types"

import antiguoTestamento1 from "./antiguo-testamento-1/_manifest.json"
import antiguoTestamento2 from "./antiguo-testamento-2/_manifest.json"
import libroDeMormon1 from "./libro-de-mormon-1/_manifest.json"
import libroDeMormon2 from "./libro-de-mormon-2/_manifest.json"
import nuevoTestamento from "./nuevo-testamento/_manifest.json"
import doctrinaYConvenios1 from "./doctrina-y-convenios-1/_manifest.json"
import doctrinaYConvenios2 from "./doctrina-y-convenios-2/_manifest.json"
import bloques from "./Bloques/_manifest.json"
import religion250 from "./religion-250/_manifest.json"
import religion225 from "./religion-225/_manifest.json"
import religion301 from "./religion-301/_manifest.json"
import religion200 from "./religion-200/_manifest.json"

const MANIFESTS: Record<string, any> = {
  "antiguo-testamento-1": antiguoTestamento1,
  "antiguo-testamento-2": antiguoTestamento2,
  "libro-de-mormon-1": libroDeMormon1,
  "libro-de-mormon-2": libroDeMormon2,
  "nuevo-testamento": nuevoTestamento,
  "doctrina-y-convenios-1": doctrinaYConvenios1,
  "doctrina-y-convenios-2": doctrinaYConvenios2,
  Bloques: bloques,
  "religion-250": religion250,
  "religion-225": religion225,
  "religion-301": religion301,
  "religion-200": religion200,
}

// ─── Presentación de cada curso ───────────────────────────────────────────────
// Lo único que se escribe a mano: nombre, ícono, color y a qué programa
// pertenece. El resto (semanas, lecciones, títulos) sale del manifiesto.

interface CourseMeta {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  courseType: CourseType
  instituteTrack?: InstituteTrack
  semester?: 1 | 2
  semesterGroup?: string
}

const COURSES: CourseMeta[] = [
  {
    id: "antiguo-testamento-1",
    name: "Antiguo Testamento",
    shortName: "AT",
    description:
      "Desde la Creación hasta los profetas. Estudia las escrituras hebreas semana a semana con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    courseType: "seminario",
    semester: 1,
    semesterGroup: "antiguo-testamento",
  },
  {
    id: "antiguo-testamento-2",
    name: "Antiguo Testamento",
    shortName: "AT",
    description:
      "Desde la Creación hasta los profetas. Estudia las escrituras hebreas semana a semana con lecciones del manual de Seminario.",
    icon: "scroll",
    color: "bg-primary",
    courseType: "seminario",
    semester: 2,
    semesterGroup: "antiguo-testamento",
  },
  {
    id: "libro-de-mormon-1",
    name: "Libro de Mormón",
    shortName: "LM",
    description:
      "Otro Testamento de Jesucristo. Los pueblos, profetas y enseñanzas del Libro de Mormón.",
    icon: "book-marked",
    color: "bg-primary",
    courseType: "seminario",
    semester: 1,
    semesterGroup: "libro-de-mormon",
  },
  {
    id: "libro-de-mormon-2",
    name: "Libro de Mormón",
    shortName: "LM",
    description:
      "Otro Testamento de Jesucristo. Los pueblos, profetas y enseñanzas del Libro de Mormón.",
    icon: "book-marked",
    color: "bg-primary",
    courseType: "seminario",
    semester: 2,
    semesterGroup: "libro-de-mormon",
  },
  {
    id: "nuevo-testamento",
    name: "Nuevo Testamento",
    shortName: "NT",
    description:
      "La vida y el ministerio de Jesucristo y sus apóstoles. Los Evangelios y las Epístolas semana a semana.",
    icon: "book-open",
    color: "bg-secondary",
    courseType: "seminario",
  },
  {
    id: "doctrina-y-convenios-1",
    name: "Doctrina y Convenios",
    shortName: "DyC",
    description: "Revelaciones para los últimos días. Primer semestre: secciones 1–76.",
    icon: "file-text",
    color: "bg-secondary",
    courseType: "seminario",
    semester: 1,
    semesterGroup: "doctrina-y-convenios",
  },
  {
    id: "doctrina-y-convenios-2",
    name: "Doctrina y Convenios",
    shortName: "DyC",
    description: "Revelaciones para los últimos días. Segundo semestre: secciones 77–138.",
    icon: "file-text",
    color: "bg-secondary",
    courseType: "seminario",
    semester: 2,
    semesterGroup: "doctrina-y-convenios",
  },
  {
    id: "Bloques",
    name: "Bloque de Escrituras",
    shortName: "Bloque",
    description:
      "Un bloque de estudio que combina las cuatro escrituras. Ideal para repasar y comparar enseñanzas clave.",
    icon: "book-open",
    color: "bg-primary",
    courseType: "seminario",
  },
  {
    id: "religion-250",
    name: "Jesucristo y Su Evangelio Sempiterno",
    shortName: "Rel. 250",
    description:
      "Religión 250 — Profundiza en el ministerio, la expiación y las enseñanzas del Salvador a través de 28 lecciones.",
    icon: "book-open",
    color: "bg-primary",
    courseType: "instituto",
    instituteTrack: "fundamental",
  },
  {
    id: "religion-225",
    name: "Fundamentos de la Restauración",
    shortName: "Rel. 225",
    description:
      "Religión 225 — La historia y doctrina de la Restauración desde el preludio hasta nuestros días, en 28 lecciones.",
    icon: "landmark",
    color: "bg-secondary",
    courseType: "instituto",
    instituteTrack: "fundamental",
  },
  {
    id: "religion-301",
    name: "Antiguo Testamento - Religión 301",
    shortName: "Rel. 301",
    description:
      "Religión 301 — Un estudio profundo del Antiguo Testamento con 28 lecciones basadas en el manual de Instituto.",
    icon: "scroll",
    color: "bg-primary",
    courseType: "instituto",
    instituteTrack: "fundamental",
  },
  {
    id: "religion-200",
    name: "La Familia Eterna",
    shortName: "Rel. 200",
    description:
      "Religión 200 — Explora las doctrinas y principios de la familia eterna en 28 lecciones.",
    icon: "users",
    color: "bg-primary",
    courseType: "instituto",
    instituteTrack: "fundamental",
  },
]

// ─── Construcción de las categorías ───────────────────────────────────────────
//
// `questions` y `secciones` quedan vacíos a propósito: son el contenido y
// se carga aparte. `questionCount` y `hasStudy` son lo que la UI necesita
// para decidir si muestra el botón de quiz o el de repaso.

function toLesson(meta: any): Lesson {
  return {
    id: meta.id,
    title: meta.title,
    description: meta.description ?? "",
    ...(meta.type ? { type: meta.type as Lesson["type"] } : {}),
    ...(meta.chapterUrl ? { chapterUrl: meta.chapterUrl } : {}),
    ...(meta.unitTitle ? { unitTitle: meta.unitTitle } : {}),
    ...(meta.unitNumber !== undefined ? { unitNumber: meta.unitNumber } : {}),
    questions: [],
    questionCount: meta.questionCount ?? 0,
    hasStudy: meta.hasStudy ?? false,
  }
}

function buildCategory(meta: CourseMeta): Category {
  const manifest = MANIFESTS[meta.id]

  if (manifest?.layoutType === "flat") {
    const cat: FlatCategory = {
      id: meta.id,
      name: meta.name,
      shortName: meta.shortName,
      description: meta.description,
      icon: meta.icon,
      color: meta.color,
      layoutType: "flat",
      courseType: meta.courseType,
      ...(meta.instituteTrack ? { instituteTrack: meta.instituteTrack } : {}),
      lessons: (manifest.lessons ?? []).map(
        (l: any) => toLesson(l) as unknown as FlatLesson
      ),
    }
    return cat
  }

  const weeks: Week[] = (manifest?.weeks ?? []).map((w: any) => ({
    id: w.id,
    title: w.title,
    dateRange: w.dateRange,
    lessons: (w.lessons ?? []).map(toLesson),
  }))

  const cat: WeeklyCategory = {
    id: meta.id,
    name: meta.name,
    shortName: meta.shortName,
    description: meta.description,
    icon: meta.icon,
    color: meta.color,
    courseType: meta.courseType,
    ...(meta.semester ? { semester: meta.semester } : {}),
    ...(meta.semesterGroup ? { semesterGroup: meta.semesterGroup } : {}),
    weeks,
  }
  return cat
}

export const categories: Category[] = COURSES.map(buildCategory)
