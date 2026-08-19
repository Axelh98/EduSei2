// lib/content/schema.ts
//
// Esquemas Zod del contenido de las lecciones.
//
// Espejo de los tipos de dominio en lib/types.ts, con una diferencia:
// en los archivos JSON la prosa se guarda como ARRAY DE PÁRRAFOS
// (una línea por párrafo) en lugar de un string con "\n\n" escapado.
// Eso hace que los diffs de git sean legibles párrafo a párrafo.
//
// lib/content/loader.ts vuelve a unir esos párrafos con "\n\n" al leer,
// así que los componentes siguen recibiendo Seccion[] tal como hoy.
//
// Estos esquemas se usan en los scripts de migración y verificación,
// no en el runtime de producción.

import { z } from "zod"

// ─── Prosa: string suelto o array de párrafos ─────────────────────────────────

export const proseSchema = z.union([z.string(), z.array(z.string())])
export type Prose = z.infer<typeof proseSchema>

/** Une un array de párrafos en el string con "\n\n" que espera la UI. */
export function joinProse(value: Prose): string {
  return Array.isArray(value) ? value.join("\n\n") : value
}

/** Parte un string en párrafos para guardarlo en disco. */
export function splitProse(value: string): Prose {
  const parts = value.split("\n\n")
  return parts.length > 1 ? parts : value
}

// ─── Cita de escritura ────────────────────────────────────────────────────────

export const citaSchema = z.object({
  referencia: z.string(),
  texto: proseSchema,
  link: z.string().optional(),
})

// ─── Bloques de contenido rico (secciones tipo "resumen") ─────────────────────

export const bloqueSchema = z.discriminatedUnion("tipo", [
  z.object({ tipo: z.literal("parrafo"), texto: proseSchema }),
  z.object({
    tipo: z.literal("escritura"),
    referencia: z.string(),
    texto: proseSchema,
    comentario: proseSchema.optional(),
    link: z.string().optional(),
  }),
  z.object({
    tipo: z.literal("cita"),
    autor: z.string(),
    fuente: z.string().optional(),
    texto: proseSchema,
    link: z.string().optional(),
  }),
  z.object({ tipo: z.literal("doctrinal"), puntos: z.array(z.string()) }),
  z.object({ tipo: z.literal("reflexion"), preguntas: z.array(z.string()) }),
])

// ─── Sección ──────────────────────────────────────────────────────────────────

export const seccionTipoSchema = z.enum([
  "contexto",
  "escrituras",
  "enseñanza",
  "conclusion",
  "cuestionario",
  "resumen",
])

export const seccionSchema = z.object({
  tipo: seccionTipoSchema,
  contenido: proseSchema.optional(),
  citas: z.array(citaSchema).optional(),
  autor: z.string().optional(),
  fuente: z.string().optional(),
  texto: proseSchema.optional(),
  link: z.string().optional(),
  preguntas: z.array(z.string()).optional(),
  bloques: z.array(bloqueSchema).optional(),
})

// ─── Pregunta evaluativa ──────────────────────────────────────────────────────

export const questionSchema = z.object({
  id: z.number(),
  question: z.string(),
  type: z.enum(["multiple", "truefalse", "written"]).optional(),
  options: z.array(z.string()),
  correctAnswer: z.number(),
  reference: z.string().optional(),
  explanation: z.string().optional(),
  prompt: z.string().optional(),
  minWords: z.number().optional(),
})

// ─── Archivo de una lección: lib/content/<categoryId>/<lessonId>.json ─────────

export const lessonContentFileSchema = z.object({
  id: z.string(),
  secciones: z.array(seccionSchema).default([]),
  questions: z.array(questionSchema).default([]),
})

export type LessonContentFile = z.infer<typeof lessonContentFileSchema>

// ─── Manifiesto de un curso: lib/content/<categoryId>/_manifest.json ──────────
//
// Solo metadatos: es lo único que puede viajar al cliente.

export const lessonMetaSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().default(""),
  type: z.string().optional(),
  chapterUrl: z.string().optional(),
  unitTitle: z.string().optional(),
  unitNumber: z.number().optional(),
  /** Cuántas preguntas tiene, sin cargar el contenido. */
  questionCount: z.number().default(0),
  /** Si tiene material de repaso, sin cargar el contenido. */
  hasStudy: z.boolean().default(false),
})

export type LessonMeta = z.infer<typeof lessonMetaSchema>

export const weekMetaSchema = z.object({
  id: z.number(),
  title: z.string(),
  dateRange: z.string(),
  lessons: z.array(lessonMetaSchema),
})

export const courseManifestSchema = z.object({
  categoryId: z.string(),
  layoutType: z.enum(["weekly", "flat"]),
  /** Presente si layoutType === "weekly". */
  weeks: z.array(weekMetaSchema).optional(),
  /** Presente si layoutType === "flat". */
  lessons: z.array(lessonMetaSchema).optional(),
})

export type CourseManifest = z.infer<typeof courseManifestSchema>
