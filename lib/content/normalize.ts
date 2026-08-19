// lib/content/normalize.ts
//
// Convierte un archivo JSON de lección al tipo Seccion[] que esperan los
// componentes. Lo único que hace es volver a unir los párrafos: en disco
// la prosa se guarda como array (una línea por párrafo, para que los diffs
// de git sean legibles) y en la UI se sigue usando un string con "\n\n".

import type { Seccion, BloqueResumen, Question } from "@/lib/types"
import { joinProse, type Prose } from "./schema"

function text(value: unknown): string | undefined {
  if (value === undefined) return undefined
  return joinProse(value as Prose)
}

function normalizeBloque(b: any): BloqueResumen {
  switch (b.tipo) {
    case "parrafo":
      return { tipo: "parrafo", texto: text(b.texto)! }
    case "escritura":
      return {
        tipo: "escritura",
        referencia: b.referencia,
        texto: text(b.texto)!,
        ...(b.comentario !== undefined ? { comentario: text(b.comentario)! } : {}),
        ...(b.link !== undefined ? { link: b.link } : {}),
      }
    case "cita":
      return {
        tipo: "cita",
        autor: b.autor,
        ...(b.fuente !== undefined ? { fuente: b.fuente } : {}),
        texto: text(b.texto)!,
        ...(b.link !== undefined ? { link: b.link } : {}),
      }
    case "doctrinal":
      return { tipo: "doctrinal", puntos: b.puntos }
    case "reflexion":
      return { tipo: "reflexion", preguntas: b.preguntas }
    default:
      return b as BloqueResumen
  }
}

export function normalizeSeccion(s: any): Seccion {
  const out: any = { tipo: s.tipo }
  if (s.contenido !== undefined) out.contenido = text(s.contenido)
  if (s.citas !== undefined) {
    out.citas = s.citas.map((c: any) => ({
      referencia: c.referencia,
      texto: text(c.texto),
      ...(c.link !== undefined ? { link: c.link } : {}),
    }))
  }
  if (s.autor !== undefined) out.autor = s.autor
  if (s.fuente !== undefined) out.fuente = s.fuente
  if (s.texto !== undefined) out.texto = text(s.texto)
  if (s.link !== undefined) out.link = s.link
  if (s.preguntas !== undefined) out.preguntas = s.preguntas
  if (s.bloques !== undefined) out.bloques = s.bloques.map(normalizeBloque)
  return out as Seccion
}

export function normalizeLessonFile(json: any): {
  secciones: Seccion[]
  questions: Question[]
} {
  return {
    secciones: (json.secciones ?? []).map(normalizeSeccion),
    questions: (json.questions ?? []) as Question[],
  }
}
