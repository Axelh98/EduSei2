/**
 * fix-anclas-citas.ts — le pone el ancla al párrafo (`#pN`) a los `link` de las citas de
 * líder que apuntan al discurso entero.
 *
 * `audit-links-citas.ts` detecta la falta del ancla (bandera ⚓) pero no la resuelve: hay
 * que abrir el discurso y encontrar en qué párrafo está la frase. Eso es exactamente lo
 * que hace este script, y por eso **nunca inventa el número de párrafo**: descarga el
 * discurso con la API del sitio (`language-pages/type/content`, la misma que usa el
 * manual — `web_fetch` solo trae el shell de la SPA), extrae los `<p id="pN">` y busca la
 * frase por recall de palabras, igual que `audit-escrituras.ts` hace con los versículos.
 *
 * Recall = fracción de las palabras significativas (>3 letras) del `texto` de la cita que
 * aparecen en la ventana de párrafos. Una cita con elipsis («…») suele repartirse en dos
 * o tres párrafos, así que se prueban ventanas de 1 a 4 párrafos consecutivos y gana la
 * mejor; si la ventana es de más de un párrafo, el ancla queda como rango (`id=p5-p7#p5`),
 * que es el formato que el proyecto ya usa.
 *
 * Umbrales (los mismos criterios de la auditoría de Escritura):
 *   ≥ 0.85  AUTO       — se aplica con --write
 *   ≥ 0.60  REVISAR    — se reporta con el párrafo candidato, no se toca sin leerlo
 *   < 0.60  NO_HALLADO — probablemente el texto no está en ese discurso: es un hallazgo,
 *                        no un fallo del script (mirarlo a mano antes de concluir nada)
 *
 * Uso:
 *   npx tsx scripts/fix-anclas-citas.ts <categoria>
 *   npx tsx scripts/fix-anclas-citas.ts <categoria> --write
 *   npx tsx scripts/fix-anclas-citas.ts <categoria> --write --incluir-revisar
 */
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const CONTENT = join(process.cwd(), "lib", "content")
const CACHE = join(process.cwd(), ".cache", "discursos")
const API = "https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content"

const args = process.argv.slice(2)
const write = args.includes("--write")
const incluirRevisar = args.includes("--incluir-revisar")
const categoria = args.find((a) => !a.startsWith("--"))

if (!categoria) {
  console.error("uso: npx tsx scripts/fix-anclas-citas.ts <categoria> [--write] [--incluir-revisar]")
  process.exit(1)
}

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms))

const VACIAS = new Set([
  "para", "porque", "pero", "como", "cuando", "donde", "esto", "esta", "este", "esos", "esas",
  "todo", "toda", "todos", "todas", "sobre", "entre", "desde", "hasta", "sino", "más", "mas",
  "muy", "también", "tambien", "ellos", "ellas", "nuestro", "nuestra", "nuestros", "nuestras",
  "sus", "que", "los", "las", "del", "por", "con", "una", "uno", "sea", "ser", "han", "hay",
])

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9ñ ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function palabras(s: string): string[] {
  return norm(s)
    .split(" ")
    .filter((w) => w.length > 3 && !VACIAS.has(w))
}

function recall(cita: string, parrafo: string): number {
  const c = palabras(cita)
  if (!c.length) return 0
  const p = new Set(palabras(parrafo))
  let hit = 0
  for (const w of c) if (p.has(w)) hit++
  return hit / c.length
}

function limpiar(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim()
}

type Parrafo = { id: string; texto: string }

async function parrafosDe(link: string): Promise<Parrafo[] | null> {
  let uri: string
  try {
    uri = new URL(link).pathname.replace(/^\/study/, "")
  } catch {
    return null
  }
  mkdirSync(CACHE, { recursive: true })
  const cacheFile = join(CACHE, uri.replace(/[^a-z0-9]/gi, "_") + ".json")
  let body: string
  if (existsSync(cacheFile)) {
    body = JSON.parse(readFileSync(cacheFile, "utf8")).body
  } else {
    const r = await fetch(`${API}?lang=spa&uri=${encodeURIComponent(uri)}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
    })
    if (!r.ok) return null
    const j: any = await r.json()
    if (j?.uri && j.uri !== uri) return null // redirigió: el slug no existe
    body = j?.content?.body ?? ""
    writeFileSync(cacheFile, JSON.stringify({ uri, body }), "utf8")
    await dormir(400)
  }
  const ps: Parrafo[] = []
  // Los ids no siempre son `pN`: las citas que viven en una barra lateral del manual usan
  // `aside1_p10`, y esos párrafos también son anclables. Capturar solo /p\d+/ los deja afuera.
  for (const m of body.matchAll(/<p[^>]*\bid="([A-Za-z0-9_]*p\d+)"[^>]*>([\s\S]*?)<\/p>/g)) {
    ps.push({ id: m[1], texto: limpiar(m[2]) })
  }
  return ps
}

/**
 * Ancla por coincidencia LITERAL, que es lo que de verdad decide.
 *
 * El recall de palabras sueltas alcanza para saber si la cita está en el discurso, pero
 * no para elegir el párrafo: en un discurso corto casi cualquier ventana de 4 párrafos
 * llega a recall 1.00 y el ancla termina apuntando varios párrafos antes de la frase.
 * Acá se busca la secuencia literal de palabras del ARRANQUE de la cita (hasta 8, bajando
 * si no aparece) y se ancla en el párrafo que la contiene; si el final de la cita cae en
 * otro párrafo —lo típico cuando el texto guardado une dos fragmentos con «…»— el ancla
 * sale como rango.
 */
/** Largo del n-grama literal más largo (hasta 10 palabras) de la cita presente en el párrafo. */
function ngramaEn(parrafo: string, w: string[]): number {
  const p = norm(parrafo)
  for (let n = Math.min(10, w.length); n >= 4; n--) {
    for (let i = 0; i + n <= w.length; i++) {
      if (p.includes(w.slice(i, i + n).join(" "))) return n
    }
  }
  return 0
}

function anclaLiteral(cita: string, ps: Parrafo[]) {
  const w = norm(cita).split(" ").filter(Boolean)
  if (w.length < 4) return null
  // Se busca la coincidencia en CUALQUIER posición del párrafo, no solo al arranque: el
  // texto guardado suele empezar a mitad de una oración del discurso ("…la obra misional
  // es una manifestación de…"). Anclar por el arranque mandó 4 de 61 citas de AT-2 a un
  // párrafo equivocado antes de que este criterio lo reemplazara.
  const puntajes = ps.map((p) => ngramaEn(p.texto, w))
  let mejor = 0
  for (const n of puntajes) if (n > mejor) mejor = n
  if (mejor < 5) return null
  const ini = puntajes.indexOf(mejor)
  // Si el párrafo siguiente también contiene un tramo largo, la cita cruza el corte
  // (típico cuando el texto une dos fragmentos con «…») y el ancla sale como rango.
  const fin = ini + 1 < ps.length && puntajes[ini + 1] >= mejor - 1 && puntajes[ini + 1] >= 5 ? ini + 1 : ini
  return { desde: ps[ini].id, hasta: ps[fin].id, texto: ps[ini].texto }
}

function mejorVentana(cita: string, ps: Parrafo[]) {
  // Dos pasadas a propósito. Con una sola, la primera ventana que alcanza el recall
  // máximo se queda con el puesto, y como se recorre por posición esa suele ser una
  // ventana larga que arranca varios párrafos ANTES de la cita (p8-p11 cuando la frase
  // está entera en p11). El ancla existe para dejar al lector sobre la frase, así que
  // primero se busca cuál es el mejor recall posible y después la ventana más corta
  // —y, a igual largo, la más temprana— que lo alcanza.
  let max = 0
  for (let i = 0; i < ps.length; i++) {
    for (let n = 1; n <= 4 && i + n <= ps.length; n++) {
      const rec = recall(cita, ps.slice(i, i + n).map((p) => p.texto).join(" "))
      if (rec > max) max = rec
    }
  }
  if (max === 0) return { rec: 0, desde: "", hasta: "", texto: "" }
  for (let n = 1; n <= 4; n++) {
    for (let i = 0; i + n <= ps.length; i++) {
      const trozo = ps.slice(i, i + n)
      const rec = recall(cita, trozo.map((p) => p.texto).join(" "))
      if (rec >= max - 1e-9) {
        return { rec, desde: trozo[0].id, hasta: trozo[trozo.length - 1].id, texto: trozo[0].texto }
      }
    }
  }
  return { rec: 0, desde: "", hasta: "", texto: "" }
}

function conAncla(link: string, desde: string, hasta: string): string {
  const u = new URL(link)
  u.hash = ""
  u.searchParams.delete("id")
  const id = desde === hasta ? desde : `${desde}-${hasta}`
  const qs = u.searchParams.toString()
  return `${u.origin}${u.pathname}?${qs}${qs ? "&" : ""}id=${id}#${desde}`
}

type Fila = {
  leccion: string
  autor: string
  fuente: string
  link: string
  nuevo: string
  rec: number
  estado: "AUTO" | "REVISAR" | "NO_HALLADO"
  parrafo: string
}

async function main() {
  const dir = join(CONTENT, categoria!)
  if (!existsSync(dir)) {
    console.error(`No existe la categoría ${categoria}`)
    process.exit(1)
  }
  const archivos = readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))
  const filas: Fila[] = []

  for (const f of archivos) {
    const ruta = join(dir, f)
    const j = JSON.parse(readFileSync(ruta, "utf8"))
    const leccion = f.replace(".json", "")
    let tocado = false

    const secciones: any[] = []
    for (const s of j.secciones ?? []) {
      if (s.tipo === "enseñanza") secciones.push(s)
      if (s.tipo === "resumen") for (const b of s.bloques ?? []) if (b.tipo === "cita") secciones.push(b)
    }

    for (const s of secciones) {
      if (!s.link || !s.texto) continue
      if (/#p\d/.test(s.link)) continue // ya tiene ancla
      const ps = await parrafosDe(s.link)
      if (!ps || !ps.length) {
        filas.push({ leccion, autor: s.autor, fuente: s.fuente, link: s.link, nuevo: "", rec: 0, estado: "NO_HALLADO", parrafo: "(no se pudo leer el discurso)" })
        continue
      }
      const porRecall = mejorVentana(s.texto, ps)
      const literal = anclaLiteral(s.texto, ps)
      // El ancla sale de la coincidencia literal; el recall solo decide si la cita
      // realmente está en ese discurso (y por eso sigue siendo el que clasifica).
      const best = literal ? { ...porRecall, ...literal } : porRecall
      const estado: Fila["estado"] =
        literal && porRecall.rec >= 0.85 ? "AUTO" : porRecall.rec >= 0.6 ? "REVISAR" : "NO_HALLADO"
      const nuevo = best.desde ? conAncla(s.link, best.desde, best.hasta) : ""
      filas.push({ leccion, autor: s.autor, fuente: s.fuente, link: s.link, nuevo, rec: best.rec, estado, parrafo: best.texto.slice(0, 150) })
      if (write && nuevo && (estado === "AUTO" || (incluirRevisar && estado === "REVISAR"))) {
        s.link = nuevo
        tocado = true
      }
    }
    if (tocado) writeFileSync(ruta, JSON.stringify(j, null, 2) + "\n", "utf8")
  }

  const por = (e: string) => filas.filter((x) => x.estado === e)
  for (const fila of filas) {
    const marca = fila.estado === "AUTO" ? "✔" : fila.estado === "REVISAR" ? "?" : "✖"
    console.log(`${marca} ${fila.leccion} | ${fila.autor} | recall ${fila.rec.toFixed(2)}`)
    if (fila.estado !== "AUTO") {
      console.log(`     ${fila.fuente}`)
      console.log(`     candidato: ${fila.parrafo}`)
    }
    if (fila.nuevo) console.log(`     → ${fila.nuevo}`)
  }

  console.log(
    `\n${filas.length} citas sin ancla · ✔ ${por("AUTO").length} AUTO · ? ${por("REVISAR").length} REVISAR · ✖ ${por("NO_HALLADO").length} NO_HALLADO`
  )
  console.log(write ? "(escrito)" : "(simulación — agregá --write para aplicar)")
}

main()
