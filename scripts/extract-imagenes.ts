// scripts/extract-imagenes.ts
//
// Trae las imágenes del manual oficial a las lecciones. Dos cosas distintas:
//
//   1. Retratos de autoridades  → lib/content/_headshots.json (mapa global
//      persona → assetId). Una entrada sirve para TODAS las lecciones que
//      citen a esa persona, así que este archivo no depende de qué lecciones
//      se procesaron.
//   2. Ilustración de cabecera  → campo "imagen" en la sección "contexto" de
//      cada lección.
//
// ⚠️ No descarga ninguna imagen: guarda solo el identificador. Las imágenes
//    las sigue sirviendo churchofjesuschrist.org. Ver lib/content/imagenes.ts.
//
//   npx tsx scripts/extract-imagenes.ts dyc-1/33-dc-19-25-41           # simulación
//   npx tsx scripts/extract-imagenes.ts <curso>/<leccion> ... --write  # aplica
//
// Las lecciones se nombran como <categoryId>/<lessonId>.

import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"
import { normalizarAutor } from "../lib/content/imagenes"

const CONTENT_DIR = join(process.cwd(), "lib", "content")
const HEADSHOTS = join(CONTENT_DIR, "_headshots.json")
const API = "https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content"

/** Alts que el manual usa para material del maestro, no para ilustrar. */
const NO_ES_ILUSTRACION = /volante|handout|flyer|pizarra|whiteboard|diagrama en blanco/i

interface Imagen {
  assetId: string
  alt: string
  ancho?: number
  alto?: number
}

function decodificar(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
}

/** Descarga el cuerpo HTML de una página del manual. */
async function cuerpoDelManual(chapterUrl: string): Promise<string | null> {
  const uri = new URL(chapterUrl).pathname.replace("/study", "")
  const res = await fetch(`${API}?lang=spa&uri=${encodeURIComponent(uri)}`, {
    headers: { "User-Agent": "Mozilla/5.0" },
  })
  if (!res.ok) return null
  const json: any = await res.json()
  return json?.content?.body ?? null
}

/** Dimensiones originales, del info.json del servidor IIIF. */
async function dimensiones(assetId: string): Promise<{ ancho?: number; alto?: number }> {
  try {
    const res = await fetch(`https://www.churchofjesuschrist.org/imgs/${assetId}/info.json`, {
      headers: { "User-Agent": "Mozilla/5.0" },
    })
    if (!res.ok) return {}
    const j: any = await res.json()
    return { ancho: j.width, alto: j.height }
  } catch {
    return {}
  }
}

interface Extraido {
  retratos: Map<string, string>
  ilustracion?: Imagen
}

function extraer(body: string): Extraido {
  const retratos = new Map<string, string>()
  let ilustracion: Imagen | undefined

  for (const m of body.matchAll(/<img[^>]*>/g)) {
    const tag = m[0]
    const assetId = tag.match(/data-assetId="([^"]+)"/)?.[1]
    const alt = decodificar(tag.match(/alt="([^"]*)"/)?.[1] ?? "").trim()
    if (!assetId) continue

    if (/class="[^"]*headshot/.test(tag)) {
      if (alt) retratos.set(normalizarAutor(alt), assetId)
      continue
    }
    // Primera imagen de contenido utilizable = ilustración de la lección.
    if (!ilustracion && alt && !NO_ES_ILUSTRACION.test(alt)) {
      ilustracion = { assetId, alt }
    }
  }
  return { retratos, ilustracion }
}

/** chapterUrl de una lección, desde el manifiesto de su curso. */
function chapterUrlDe(categoryId: string, lessonId: string): string | undefined {
  const mPath = join(CONTENT_DIR, categoryId, "_manifest.json")
  if (!existsSync(mPath)) return undefined
  const m = JSON.parse(readFileSync(mPath, "utf8"))
  const todas = [...(m.weeks ?? []).flatMap((w: any) => w.lessons), ...(m.lessons ?? [])]
  return todas.find((l: any) => l.id === lessonId)?.chapterUrl
}

async function main() {
  const args = process.argv.slice(2)
  const escribir = args.includes("--write")
  const objetivos = args.filter((a) => !a.startsWith("--"))

  if (objetivos.length === 0) {
    console.error("Uso: npx tsx scripts/extract-imagenes.ts <curso>/<leccion> [...] [--write]")
    process.exit(1)
  }

  const retratosGlobal = new Map<string, string>(
    existsSync(HEADSHOTS) ? Object.entries(JSON.parse(readFileSync(HEADSHOTS, "utf8"))) : []
  )
  const retratosAntes = retratosGlobal.size
  let conIlustracion = 0

  for (const objetivo of objetivos) {
    const [categoryId, lessonId] = objetivo.split("/")
    if (!categoryId || !lessonId) {
      console.log(`✗ ${objetivo}: se espera <curso>/<leccion>`)
      continue
    }

    const chapterUrl = chapterUrlDe(categoryId, lessonId)
    if (!chapterUrl) {
      console.log(`✗ ${objetivo}: sin chapterUrl en el manifiesto`)
      continue
    }

    const body = await cuerpoDelManual(chapterUrl)
    if (!body) {
      console.log(`✗ ${objetivo}: el manual no respondió`)
      continue
    }

    const { retratos, ilustracion } = extraer(body)
    for (const [persona, id] of retratos) retratosGlobal.set(persona, id)

    console.log(`\n${objetivo}`)
    console.log(`  retratos en la página: ${retratos.size ? [...retratos.keys()].join(", ") : "ninguno"}`)

    const lessonPath = join(CONTENT_DIR, categoryId, `${lessonId}.json`)
    const raw = JSON.parse(readFileSync(lessonPath, "utf8"))
    const contexto = raw.secciones?.find((s: any) => s.tipo === "contexto")

    // Qué retrato resuelve cada cita de esta lección (para ver la cobertura real).
    for (const sec of raw.secciones ?? []) {
      if (sec.tipo !== "enseñanza" || !sec.autor) continue
      const tiene = retratosGlobal.has(normalizarAutor(sec.autor))
      console.log(`  cita de ${sec.autor}: ${tiene ? "con retrato" : "SIN retrato (queda como está)"}`)
    }

    if (!ilustracion) {
      console.log("  ilustración: ninguna utilizable en esta página")
    } else if (!contexto) {
      console.log("  ilustración: encontrada, pero la lección no tiene sección contexto")
    } else {
      const dims = await dimensiones(ilustracion.assetId)
      const imagen: Imagen = { ...ilustracion, ...dims }
      console.log(`  ilustración: "${imagen.alt}" (${imagen.ancho}x${imagen.alto})`)
      conIlustracion++
      if (escribir) {
        contexto.imagen = imagen
        writeFileSync(lessonPath, JSON.stringify(raw, null, 2) + "\n", "utf8")
      }
    }
  }

  const nuevos = retratosGlobal.size - retratosAntes
  console.log(
    `\n${escribir ? "Aplicado" : "Simulación"}: ${conIlustracion} ilustración(es), ` +
      `${nuevos} retrato(s) nuevo(s) (mapa: ${retratosGlobal.size} personas).`
  )
  if (escribir) {
    const ordenado = Object.fromEntries([...retratosGlobal.entries()].sort())
    writeFileSync(HEADSHOTS, JSON.stringify(ordenado, null, 2) + "\n", "utf8")
  } else {
    console.log("Sin --write no se escribió nada.")
  }
}

main()
