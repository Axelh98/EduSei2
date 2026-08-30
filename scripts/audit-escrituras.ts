// scripts/audit-escrituras.ts
//
// Descarga el capítulo real de cada cita de Escritura (`tipo: "escrituras"` y
// bloques `tipo: "escritura"` dentro de secciones `resumen`) y compara su
// `texto` contra el párrafo que señala el `link`.
//
// A diferencia de las citas de líderes (scripts/extract-citas.ts), acá el
// link casi siempre existe: el trabajo no es buscar la fuente sino verificar
// fidelidad textual. Ver docs/auditorias/COMO-AUDITAR-ESCRITURAS.md para el
// método completo y cómo leer el reporte que este script genera.
//
//   npx tsx scripts/audit-escrituras.ts doctrina-y-convenios-1
//   npx tsx scripts/audit-escrituras.ts doctrina-y-convenios-1 --refresh
//
// Deja el reporte en .cache/escrituras/<categoryId>.json (gitignored, se
// regenera). No modifica lib/content/ — para aplicar las correcciones que
// este script identifica como seguras, correr después fix-escrituras.ts.

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, statSync } from "node:fs"
import { join } from "node:path"
import { createHash } from "node:crypto"
import { categories } from "../lib/content/registry"
import { joinProse } from "../lib/content/schema"

const CONTENT_DIR = join(process.cwd(), "lib", "content")
const CACHE_DIR = join(process.cwd(), ".cache", "escrituras")
const PAGES_DIR = join(CACHE_DIR, "paginas")

// Bajo este umbral de "recall" (fracción de palabras del texto guardado que
// aparecen en el original) se considera que hay una discrepancia real y no
// una simple diferencia de puntuación o de traducción.
const UMBRAL_OK = 0.9
// Por encima de este umbral, encontrado en el propio capítulo (en el ancla o
// en una ventana de hasta 3 párrafos), se considera seguro corregir sin
// intervención humana: es el mismo lugar, solo parafraseado.
const UMBRAL_AUTO = 0.85

export interface EscrituraCita {
  categoryId: string
  lessonId: string
  /** Ubicación exacta del nodo dentro del JSON, para que fix-escrituras.ts lo encuentre. */
  ruta: { secIdx: number; citas?: number; bloque?: number }
  referencia: string
  texto: string
  link: string
}

function extraerCitas(categoryId: string): EscrituraCita[] {
  const dir = join(CONTENT_DIR, categoryId)
  if (!existsSync(dir)) return []
  const out: EscrituraCita[] = []
  const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json")

  for (const file of files) {
    const lessonId = file.replace(/\.json$/, "")
    const raw = JSON.parse(readFileSync(join(dir, file), "utf8"))
    ;(raw.secciones ?? []).forEach((s: any, secIdx: number) => {
      if (s.tipo === "escrituras" && Array.isArray(s.citas)) {
        s.citas.forEach((c: any, citaIdx: number) => {
          if (!c.link) return // sin link: fuera del alcance de esta verificación
          out.push({
            categoryId,
            lessonId,
            ruta: { secIdx, citas: citaIdx },
            referencia: c.referencia ?? "",
            texto: joinProse(c.texto ?? ""),
            link: c.link,
          })
        })
      }
      if (s.tipo === "resumen" && Array.isArray(s.bloques)) {
        s.bloques.forEach((b: any, bloqueIdx: number) => {
          if (b.tipo !== "escritura" || !b.link) return
          out.push({
            categoryId,
            lessonId,
            ruta: { secIdx, bloque: bloqueIdx },
            referencia: b.referencia ?? "",
            texto: joinProse(b.texto ?? ""),
            link: b.link,
          })
        })
      }
    })
  }
  return out
}

// ─── Descarga con caché y reintentos ───────────────────────────────────────

function hashUrl(url: string): string {
  return createHash("md5").update(url).digest("hex").slice(0, 16)
}

/** Le saca el query "id=" al link: el HTML del capítulo es el mismo sin importar qué párrafo resalte. */
function claveCapitulo(link: string): string {
  return link.split("#")[0].split("&id=")[0].split("?id=")[0]
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function descargarCapitulo(url: string, reintentos = 5): Promise<string | null> {
  for (let intento = 0; intento < reintentos; intento++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; AulaSei-audit/1.0)" } })
      if (res.status === 200) return await res.text()
      if (res.status === 503) {
        await sleep(2000 * (intento + 1))
        continue
      }
      console.log(`  status ${res.status} para ${url}`)
      return null
    } catch (e) {
      await sleep(2000 * (intento + 1))
    }
  }
  return null
}

async function asegurarCapitulos(links: string[], refrescar: boolean) {
  mkdirSync(PAGES_DIR, { recursive: true })
  const claves = [...new Set(links.map(claveCapitulo))]
  let bajadas = 0
  for (const clave of claves) {
    const archivo = join(PAGES_DIR, hashUrl(clave) + ".html")
    if (!refrescar && existsSync(archivo) && statSync(archivo).size > 1000) continue
    const html = await descargarCapitulo(clave)
    if (html) {
      writeFileSync(archivo, html, "utf8")
      bajadas++
    } else {
      console.log(`  ⚠ no se pudo bajar: ${clave}`)
    }
    await sleep(1800) // el sitio devuelve 503 si se lo satura
  }
  if (bajadas) console.log(`Descargadas ${bajadas} páginas de ${claves.length} capítulos únicos.`)
}

// ─── Extracción y comparación de párrafos ──────────────────────────────────

function normalizar(s: string): string {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[""'']/g, '"')
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function extraerParrafos(html: string): Record<string, string> {
  const mapa: Record<string, string> = {}
  const re = /<p[^>]*\bid="(p\d+)"[^>]*>([\s\S]*?)<\/p>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    const texto = m[2]
      .replace(/<sup[^>]*>[\s\S]*?<\/sup>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#8217;|&rsquo;/g, "'")
      .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
      .replace(/^\s*\d+\s*/, "") // número de versículo inicial
      .replace(/\s+/g, " ")
      .trim()
    mapa[m[1]] = texto
  }
  return mapa
}

function idsDelAncla(link: string): string[] {
  const hash = link.match(/#(p\d+)/)
  const idParam = link.match(/[?&]id=([^&#]+)/)
  const ids: string[] = []
  if (idParam) {
    for (const parte of decodeURIComponent(idParam[1]).split(",")) {
      if (parte.includes("-")) {
        const [a, b] = parte.split("-")
        for (let i = parseInt(a.slice(1)); i <= parseInt(b.slice(1)); i++) ids.push("p" + i)
      } else {
        ids.push(parte)
      }
    }
  } else if (hash) {
    ids.push(hash[1])
  }
  return ids
}

/** Fracción de las palabras significativas de `texto` que aparecen en `original`. */
function recall(texto: string, original: string): number {
  const palabrasOriginal = new Set(normalizar(original).split(" ").filter((w) => w.length > 3))
  const palabrasTexto = [...new Set(normalizar(texto).split(" ").filter((w) => w.length > 3))]
  if (!palabrasTexto.length) return 1
  const encontradas = palabrasTexto.filter((w) => palabrasOriginal.has(w)).length
  return encontradas / palabrasTexto.length
}

function segmentos(texto: string): string[] {
  return texto.split(/…|\.\.\.|\[\s*\.\.\.\s*\]/g).map(normalizar).filter(Boolean)
}

function coincideExacto(texto: string, original: string): boolean {
  const normOriginal = normalizar(original)
  return segmentos(texto).every((seg) => normOriginal.includes(seg))
}

/** Arma "Doctrina y Convenios 78" + [6,7] → "Doctrina y Convenios 78:6–7". */
function referenciaConVersiculos(referenciaOriginal: string, versiculos: number[]): string {
  const idx = referenciaOriginal.lastIndexOf(":")
  if (idx === -1) return referenciaOriginal
  const prefijo = referenciaOriginal.slice(0, idx)
  const ordenados = [...new Set(versiculos)].sort((a, b) => a - b)
  return ordenados.length > 1
    ? `${prefijo}:${ordenados[0]}–${ordenados[ordenados.length - 1]}`
    : `${prefijo}:${ordenados[0]}`
}

/** Arma el link con `&id=pA-pB#pA` a partir de un rango contiguo de versículos. */
function linkConVersiculos(link: string, versiculos: number[]): string {
  const base = claveCapitulo(link)
  const ordenados = [...new Set(versiculos)].sort((a, b) => a - b)
  const primero = "p" + ordenados[0]
  const ultimo = "p" + ordenados[ordenados.length - 1]
  const rango = ordenados.length > 1 ? `${primero}-${ultimo}` : primero
  return `${base}&id=${rango}#${primero}`
}

export interface ResultadoCita extends EscrituraCita {
  estado: "OK" | "AUTO_CORREGIBLE" | "REVISAR_MANUAL" | "SIN_CAPITULO"
  recallAncla: number
  propuesta?: { referencia: string; texto: string; link: string; recall: number }
  candidatos?: { versiculos: number[]; recall: number; texto: string }[]
}

function auditar(citas: EscrituraCita[]): ResultadoCita[] {
  const paragCache: Record<string, Record<string, string>> = {}
  const paragrafosDe = (link: string) => {
    const clave = claveCapitulo(link)
    if (!paragCache[clave]) {
      const archivo = join(PAGES_DIR, hashUrl(clave) + ".html")
      paragCache[clave] = existsSync(archivo) ? extraerParrafos(readFileSync(archivo, "utf8")) : {}
    }
    return paragCache[clave]
  }

  return citas.map((cita): ResultadoCita => {
    const parrafos = paragrafosDe(cita.link)
    if (!Object.keys(parrafos).length) return { ...cita, estado: "SIN_CAPITULO", recallAncla: 0 }

    const idsAncla = idsDelAncla(cita.link)
    const textoAncla = idsAncla.map((id) => parrafos[id]).filter(Boolean).join(" ")
    const recallAncla = textoAncla ? recall(cita.texto, textoAncla) : 0

    if (textoAncla && (coincideExacto(cita.texto, textoAncla) || recallAncla >= UMBRAL_OK)) {
      return { ...cita, estado: "OK", recallAncla }
    }

    // Buscar en todo el capítulo: ventanas de 1 a 3 párrafos consecutivos.
    const ids = Object.keys(parrafos).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))
    let mejor = { versiculos: [] as number[], recall: 0, texto: "" }
    for (const ventana of [1, 2, 3]) {
      for (let i = 0; i <= ids.length - ventana; i++) {
        const grupo = ids.slice(i, i + ventana)
        const texto = grupo.map((id) => parrafos[id]).join(" ")
        const r = recall(cita.texto, texto)
        if (r > mejor.recall) {
          mejor = { versiculos: grupo.map((id) => parseInt(id.slice(1))), recall: r, texto }
        }
      }
    }

    if (mejor.recall >= UMBRAL_AUTO) {
      return {
        ...cita,
        estado: "AUTO_CORREGIBLE",
        recallAncla,
        propuesta: {
          referencia: referenciaConVersiculos(cita.referencia, mejor.versiculos),
          texto: mejor.texto,
          link: linkConVersiculos(cita.link, mejor.versiculos),
          recall: mejor.recall,
        },
      }
    }

    return {
      ...cita,
      estado: "REVISAR_MANUAL",
      recallAncla,
      candidatos: mejor.recall > 0 ? [mejor] : [],
    }
  })
}

async function main() {
  const args = process.argv.slice(2)
  const refrescar = args.includes("--refresh")
  const soloCurso = args.find((a) => !a.startsWith("--"))
  const ids = soloCurso ? [soloCurso] : categories.map((c) => c.id)

  for (const categoryId of ids) {
    const citas = extraerCitas(categoryId)
    if (!citas.length) {
      console.log(`${categoryId}: sin citas de Escritura con link (o categoría vacía).`)
      continue
    }

    console.log(`\n${categoryId}: ${citas.length} citas de Escritura.`)
    await asegurarCapitulos(citas.map((c) => c.link), refrescar)

    const resultados = auditar(citas)
    mkdirSync(CACHE_DIR, { recursive: true })
    writeFileSync(join(CACHE_DIR, `${categoryId}.json`), JSON.stringify(resultados, null, 2), "utf8")

    const conteo: Record<string, number> = {}
    resultados.forEach((r) => (conteo[r.estado] = (conteo[r.estado] ?? 0) + 1))
    console.log(`  ${JSON.stringify(conteo)}`)
    console.log(`  Reporte: .cache/escrituras/${categoryId}.json`)
  }

  console.log(
    "\nPara aplicar las correcciones de alta confianza (AUTO_CORREGIBLE):" +
    "\n  npx tsx scripts/fix-escrituras.ts <categoria>            # simulación" +
    "\n  npx tsx scripts/fix-escrituras.ts <categoria> --write    # aplica" +
    "\nLos casos REVISAR_MANUAL necesitan criterio (referencia equivocada, texto" +
    "\nfuera del capítulo): ver docs/auditorias/COMO-AUDITAR-ESCRITURAS.md."
  )
}

main()
