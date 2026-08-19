// scripts/migration/verify-content.ts
//
// Comprueba que los JSON de lib/content/ representan EXACTAMENTE el mismo
// contenido que los archivos .ts de lib/data/ de los que salieron.
//
//   npx tsx scripts/migration/verify-content.ts               # todos los cursos migrados
//   npx tsx scripts/migration/verify-content.ts religion-250  # solo uno
//
// Es la red de seguridad de la migración: next.config.mjs tiene
// ignoreBuildErrors:true, así que el build no atrapa nada. Nada de
// lib/data/ debería borrarse sin que esto pase en verde primero.

import { readFileSync, existsSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { normalizeLessonFile } from "../../lib/content/normalize"
import { originalLessons, ORIGINAL_CONTENT, ORIGINAL_CATEGORY_IDS } from "./original-data"
import type { Seccion, Question } from "../../lib/types"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

// ─── Comparación estructural ──────────────────────────────────────────────────
// Insensible al orden de las claves; trata `undefined` igual que ausente,
// que es como se comportan los objetos originales al serializarse.

function deepEqual(a: any, b: any, path: string, diffs: string[]): void {
  if (a === b) return

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      diffs.push(`${path}: uno es array y el otro no`)
      return
    }
    if (a.length !== b.length) {
      diffs.push(`${path}: largo ${a.length} vs ${b.length}`)
      return
    }
    a.forEach((v, i) => deepEqual(v, b[i], `${path}[${i}]`, diffs))
    return
  }

  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)])
    for (const k of keys) {
      const av = a[k]
      const bv = b[k]
      if (av === undefined && bv === undefined) continue
      if (av === undefined || bv === undefined) {
        diffs.push(`${path}.${k}: falta en ${av === undefined ? "original" : "migrado"}`)
        continue
      }
      deepEqual(av, bv, `${path}.${k}`, diffs)
    }
    return
  }

  const show = (v: any) => {
    const s = String(v)
    return s.length > 90 ? s.slice(0, 90) + "…" : s
  }
  diffs.push(`${path}: "${show(a)}" vs "${show(b)}"`)
}

// ─── Fuente original ──────────────────────────────────────────────────────────

function expectedFor(categoryId: string) {
  const base = originalLessons(categoryId)
  const content = ORIGINAL_CONTENT[categoryId] ?? []

  const contentById = new Map(content.map((l) => [l.id, l]))
  const baseById = new Map(base.map((l) => [l.id, l]))
  const allIds = [...new Set([...base.map((l) => l.id), ...content.map((l) => l.id)])]

  const map = new Map<string, { secciones: Seccion[]; questions: Question[] }>()
  for (const id of allIds) {
    const b = baseById.get(id)
    const c = contentById.get(id)
    map.set(id, {
      secciones: ((c?.secciones?.length ? c.secciones : b?.secciones) ?? []) as Seccion[],
      questions: ((b?.questions?.length ? b.questions : c?.questions) ?? []) as Question[],
    })
  }
  return map
}

// ─── Verificación ─────────────────────────────────────────────────────────────

async function verifyCourse(categoryId: string): Promise<boolean> {
  const dir = join(CONTENT_DIR, categoryId)
  if (!existsSync(dir)) {
    console.log(`-  ${categoryId}: sin migrar todavía`)
    return true
  }

  const expected = expectedFor(categoryId)
  const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json")

  const diffs: string[] = []
  let checked = 0

  for (const file of files) {
    const id = file.replace(/\.json$/, "")
    const exp = expected.get(id)
    if (!exp) {
      diffs.push(`${id}: existe el JSON pero no la lección original`)
      continue
    }
    const raw = JSON.parse(readFileSync(join(dir, file), "utf8"))
    const got = normalizeLessonFile(raw)

    deepEqual(exp.secciones, got.secciones, `${id}.secciones`, diffs)
    deepEqual(exp.questions, got.questions, `${id}.questions`, diffs)
    checked++
  }

  for (const id of expected.keys()) {
    if (!files.includes(`${id}.json`)) diffs.push(`${id}: falta el archivo JSON`)
  }

  if (diffs.length) {
    console.log(`FALLA  ${categoryId}: ${diffs.length} diferencias en ${checked} lecciones`)
    diffs.slice(0, 15).forEach((d) => console.log(`         ${d}`))
    if (diffs.length > 15) console.log(`         … y ${diffs.length - 15} más`)
    return false
  }

  console.log(`OK     ${categoryId}: ${checked} lecciones idénticas`)
  return true
}

async function main() {
  const only = process.argv[2]
  const targets = only ? [only] : ORIGINAL_CATEGORY_IDS

  let ok = true
  for (const categoryId of targets) {
    if (!(await verifyCourse(categoryId))) ok = false
  }

  console.log(ok ? "\nTodo verificado." : "\nHay diferencias. No borrar nada de lib/data/.")
  process.exit(ok ? 0 : 1)
}

main().catch((e) => { console.error(e); process.exit(1) })
