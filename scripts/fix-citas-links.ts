// scripts/fix-citas-links.ts
//
// Arregla el problema estructural que documentó la auditoría de R250:
// en muchas citas la URL del discurso venía pegada como texto plano dentro
// del campo `fuente`, sin `https://` y sin `?lang=spa`, mientras el campo
// `link` quedaba vacío.
//
// Este script mueve esa URL al campo `link`, la normaliza y limpia `fuente`.
// NO toca el texto de ninguna cita ni verifica que el discurso exista:
// eso es el trabajo de la auditoría propiamente dicha.
//
//   npx tsx scripts/fix-citas-links.ts            # simulación (no escribe)
//   npx tsx scripts/fix-citas-links.ts --write    # aplica los cambios
//   npx tsx scripts/fix-citas-links.ts --write religion-200

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import { categories } from "../lib/content/registry"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

const URL_RE = /(?:https?:\/\/)?(?:www\.)?churchofjesuschrist\.org\/[^\s,;)\]]+/

/** Deja la URL en la forma canónica: https://www.…?lang=spa */
function normalizarUrl(url: string): string {
  let u = url.trim().replace(/[.,;]+$/, "")
  if (!/^https?:\/\//.test(u)) u = "https://" + u
  u = u.replace(/^https?:\/\/(?!www\.)/, "https://www.")

  if (!/[?&]lang=/.test(u)) {
    // El fragmento (#p28) siempre va al final.
    const [base, hash] = u.split("#")
    const sep = base.includes("?") ? "&" : "?"
    u = base + sep + "lang=spa" + (hash ? "#" + hash : "")
  }
  return u
}

/** Quita la URL del campo `fuente` y deja la referencia bibliográfica limpia. */
function limpiarFuente(fuente: string, url: string): string {
  let f = fuente.replace(url, "")
  // Conectores que quedaban colgando delante de la URL.
  f = f.replace(/\s*Disponible\s+en\s*:?\s*$/i, "")
  f = f.replace(/\s*(?:Ver|Véase|Fuente)\s*:?\s*$/i, "")
  f = f.replace(/\s+/g, " ").trim()
  f = f.replace(/[,;:\-–—]+$/, "").trim()
  // Se conserva el punto final si la referencia ya lo tenía.
  return f
}

interface Cambio {
  categoryId: string
  lessonId: string
  autor: string
  fuenteAntes: string
  fuenteDespues: string
  link: string
}

function procesarNodo(nodo: any, ctx: { categoryId: string; lessonId: string }, cambios: Cambio[]): boolean {
  const fuente: string = nodo.fuente ?? ""
  const link: string = nodo.link ?? ""
  if (!fuente) return false

  const m = URL_RE.exec(fuente)
  if (!m) return false

  // Si ya hay un link distinto, no se toca: es un caso a revisar a mano.
  if (link.trim() && !link.includes(m[0].replace(/^https?:\/\/(www\.)?/, ""))) {
    return false
  }

  const nuevoLink = normalizarUrl(m[0])
  const nuevaFuente = limpiarFuente(fuente, m[0])

  cambios.push({
    ...ctx,
    autor: nodo.autor ?? "",
    fuenteAntes: fuente,
    fuenteDespues: nuevaFuente,
    link: nuevoLink,
  })

  nodo.fuente = nuevaFuente
  nodo.link = nuevoLink
  return true
}

function procesarCurso(categoryId: string, escribir: boolean): Cambio[] {
  const dir = join(CONTENT_DIR, categoryId)
  if (!existsSync(dir)) return []

  const cambios: Cambio[] = []
  const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json")

  for (const file of files) {
    const path = join(dir, file)
    const raw = JSON.parse(readFileSync(path, "utf8"))
    const lessonId = file.replace(/\.json$/, "")
    const ctx = { categoryId, lessonId }
    let tocado = false

    for (const s of raw.secciones ?? []) {
      if (s.tipo === "enseñanza") {
        if (procesarNodo(s, ctx, cambios)) tocado = true
      }
      for (const b of s.bloques ?? []) {
        if (b.tipo === "cita" && procesarNodo(b, ctx, cambios)) tocado = true
      }
    }

    if (tocado && escribir) {
      writeFileSync(path, JSON.stringify(raw, null, 2) + "\n", "utf8")
    }
  }

  return cambios
}

function main() {
  const args = process.argv.slice(2)
  const escribir = args.includes("--write")
  const soloCurso = args.find((a) => !a.startsWith("--"))
  const ids = soloCurso ? [soloCurso] : categories.map((c) => c.id)

  const todos = ids.flatMap((id) => procesarCurso(id, escribir))

  for (const c of todos) {
    console.log(`\n${c.categoryId} / ${c.lessonId} — ${c.autor}`)
    console.log(`  fuente antes  : ${c.fuenteAntes}`)
    console.log(`  fuente después: ${c.fuenteDespues}`)
    console.log(`  link          : ${c.link}`)
  }

  console.log(
    `\n${todos.length} citas ${escribir ? "corregidas" : "por corregir (simulación)"}.`
  )
  if (!escribir && todos.length) {
    console.log("Para aplicarlo: npx tsx scripts/fix-citas-links.ts --write")
  }
}

main()
