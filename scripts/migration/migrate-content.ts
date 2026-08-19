// scripts/migration/migrate-content.ts
//
// Convierte los archivos .ts de lib/data/ en un archivo JSON por lección
// bajo lib/content/<categoryId>/, más un _manifest.json por curso y el
// mapa lib/content/generated-map.ts que usa el loader.
//
//   npx tsx scripts/migration/migrate-content.ts               # todos los cursos
//   npx tsx scripts/migration/migrate-content.ts religion-250  # solo uno
//
// La conversión es determinista y verificable: scripts/verify-content.ts
// compara el resultado contra la fuente original campo por campo.

import { writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from "node:fs"
import { join } from "node:path"
import {
  ORIGINAL_CONTENT,
  ORIGINAL_WEEKLY,
  ORIGINAL_FLAT,
  originalLessons,
  ORIGINAL_CATEGORY_IDS,
} from "./original-data"
import { splitProse } from "../../lib/content/schema"
import type { Lesson, Seccion, Question } from "../../lib/types"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

// ─── Normalización de prosa ───────────────────────────────────────────────────
// Los campos de texto largo pasan de un string con "\n\n" a un array de
// párrafos, para que los diffs de git se lean párrafo a párrafo.

function prose(value: unknown): unknown {
  return typeof value === "string" ? splitProse(value) : value
}

function convertBloque(b: any): any {
  const out: any = { tipo: b.tipo }
  if (b.tipo === "parrafo") {
    out.texto = prose(b.texto)
  } else if (b.tipo === "escritura") {
    out.referencia = b.referencia
    out.texto = prose(b.texto)
    if (b.comentario !== undefined) out.comentario = prose(b.comentario)
    if (b.link !== undefined) out.link = b.link
  } else if (b.tipo === "cita") {
    out.autor = b.autor
    if (b.fuente !== undefined) out.fuente = b.fuente
    out.texto = prose(b.texto)
    if (b.link !== undefined) out.link = b.link
  } else if (b.tipo === "doctrinal") {
    out.puntos = b.puntos
  } else if (b.tipo === "reflexion") {
    out.preguntas = b.preguntas
  } else {
    Object.assign(out, b) // tipo desconocido: se copia tal cual
  }
  return out
}

function convertSeccion(s: Seccion): any {
  const out: any = { tipo: s.tipo }
  if (s.contenido !== undefined) out.contenido = prose(s.contenido)
  if (s.citas !== undefined) {
    out.citas = s.citas.map((c) => {
      const cita: any = { referencia: c.referencia, texto: prose(c.texto) }
      if (c.link !== undefined) cita.link = c.link
      return cita
    })
  }
  if (s.autor !== undefined) out.autor = s.autor
  if (s.fuente !== undefined) out.fuente = s.fuente
  if (s.texto !== undefined) out.texto = prose(s.texto)
  if (s.link !== undefined) out.link = s.link
  if (s.preguntas !== undefined) out.preguntas = s.preguntas
  if (s.bloques !== undefined) out.bloques = s.bloques.map(convertBloque)
  return out
}

// ─── Recolección de lecciones ─────────────────────────────────────────────────

interface Built {
  files: { lessonId: string; json: any }[]
  manifest: any
}

async function buildCourse(categoryId: string): Promise<Built> {
  // El orden de semanas y lecciones sale de los archivos originales, no del
  // catálogo: el catálogo se construye a partir de los manifiestos que este
  // mismo script escribe.
  const flat = ORIGINAL_FLAT[categoryId]
  const weekly = ORIGINAL_WEEKLY[categoryId]
  const base = originalLessons(categoryId)
  const content = ORIGINAL_CONTENT[categoryId] ?? []

  const contentById = new Map(content.map((l) => [l.id, l]))
  const baseById = new Map(base.map((l) => [l.id, l]))

  // Todas las lecciones: las de la base más las que solo existen en el
  // archivo de contenido, para no perder nada al migrar.
  const allIds = [...new Set([...base.map((l) => l.id), ...content.map((l) => l.id)])]

  const files: { lessonId: string; json: any }[] = []
  const metaById = new Map<string, any>()

  for (const id of allIds) {
    const b = baseById.get(id)
    const c = contentById.get(id)

    // Las secciones vienen del archivo de contenido; si esa lección no
    // está ahí, de la propia lección base.
    const rawSecciones = ((c?.secciones?.length ? c.secciones : b?.secciones) ?? []) as Seccion[]
    // Las preguntas son siempre de la lección base: la auditoría confirmó
    // que los archivos de resumen no aportan preguntas propias.
    const questions = ((b?.questions?.length ? b.questions : c?.questions) ?? []) as Question[]

    files.push({
      lessonId: id,
      json: {
        id,
        secciones: rawSecciones.map(convertSeccion),
        questions,
      },
    })

    const src = (b ?? c)!
    metaById.set(id, {
      id,
      title: src.title ?? "",
      description: src.description ?? "",
      ...(src.type ? { type: src.type } : {}),
      ...(src.chapterUrl ? { chapterUrl: src.chapterUrl } : {}),
      ...(src.unitTitle ? { unitTitle: src.unitTitle } : {}),
      ...(src.unitNumber !== undefined ? { unitNumber: src.unitNumber } : {}),
      questionCount: questions.length,
      hasStudy: rawSecciones.length > 0,
      // Lecciones que solo existen en el archivo de contenido y que hoy
      // ninguna pantalla muestra, porque no están en ninguna semana.
      ...(b ? {} : { orphan: true }),
    })
  }

  let manifest: any
  if (flat) {
    manifest = {
      categoryId,
      layoutType: "flat",
      lessons: flat.map((l) => metaById.get(l.id)),
    }
  } else if (weekly) {
    manifest = {
      categoryId,
      layoutType: "weekly",
      weeks: weekly.map((w) => ({
        id: w.id,
        title: w.title,
        dateRange: w.dateRange,
        lessons: w.lessons.map((l) => metaById.get(l.id)),
      })),
    }
  } else {
    manifest = { categoryId, layoutType: "flat", lessons: [] }
  }

  return { files, manifest }
}

// ─── Escritura ────────────────────────────────────────────────────────────────

function writeJson(path: string, data: unknown) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8")
}

function writeGeneratedMap() {
  const dirs = readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()

  const lines: string[] = [
    "// lib/content/generated-map.ts",
    "//",
    "// ARCHIVO GENERADO - no editar a mano.",
    "// Lo regenera: npx tsx scripts/migration/migrate-content.ts",
    "//",
    "// Un import() por leccion para que el bundler pueda cargarlas de a una.",
    "",
    "type JsonLoader = () => Promise<{ default: any }>",
    "",
    "export const CONTENT_MAP: Record<string, Record<string, JsonLoader>> = {",
  ]

  for (const dir of dirs) {
    const lessons = readdirSync(join(CONTENT_DIR, dir))
      .filter((f) => f.endsWith(".json") && f !== "_manifest.json")
      .sort()
    if (!lessons.length) continue
    lines.push("  " + JSON.stringify(dir) + ": {")
    for (const file of lessons) {
      const id = file.replace(/\.json$/, "")
      lines.push("    " + JSON.stringify(id) + ': () => import("./' + dir + "/" + file + '"),')
    }
    lines.push("  },")
  }

  lines.push("}", "")
  lines.push("export const MANIFEST_MAP: Record<string, JsonLoader> = {")
  for (const dir of dirs) {
    if (!existsSync(join(CONTENT_DIR, dir, "_manifest.json"))) continue
    lines.push("  " + JSON.stringify(dir) + ': () => import("./' + dir + '/_manifest.json"),')
  }
  lines.push("}", "")

  writeFileSync(join(CONTENT_DIR, "generated-map.ts"), lines.join("\n"), "utf8")
}

async function main() {
  const only = process.argv[2]
  const targets = only ? [only] : ORIGINAL_CATEGORY_IDS

  for (const categoryId of targets) {
    const { files, manifest } = await buildCourse(categoryId)
    const dir = join(CONTENT_DIR, categoryId)

    // Se reescribe el curso entero para que no queden archivos de una
    // corrida anterior con lecciones que ya no existen.
    if (existsSync(dir)) rmSync(dir, { recursive: true })
    mkdirSync(dir, { recursive: true })

    for (const f of files) writeJson(join(dir, f.lessonId + ".json"), f.json)
    writeJson(join(dir, "_manifest.json"), manifest)

    const conStudy = files.filter((f) => f.json.secciones.length).length
    console.log(
      "OK " + categoryId.padEnd(24) +
      String(files.length).padStart(4) + " lecciones  (" + conStudy + " con repaso)"
    )
  }

  writeGeneratedMap()
  console.log("\nOK lib/content/generated-map.ts regenerado")
}

main().catch((e) => { console.error(e); process.exit(1) })
