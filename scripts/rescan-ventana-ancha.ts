// scripts/rescan-ventana-ancha.ts
//
// Segunda pasada sobre los REVISAR_MANUAL que deja audit-escrituras.ts,
// probando ventanas de hasta 12 párrafos (no 1–3) sobre el MISMO capítulo ya
// cacheado. No descarga nada nuevo. Nace de la auditoría de libro-de-mormon-2
// (agosto 2026): buena parte de esos REVISAR_MANUAL no eran "versículo
// cercano" sino resúmenes que condensan un pasaje largo (ej. una cita de
// "Alma 48:11-13" que en realidad resume Alma 48:11-17 entero).
//
// Distingue dos casos por el LARGO de la ventana ganadora:
//   - Ventana de 1-3 párrafos ("puntual"): probablemente el versículo puntual
//     está mal citado. Umbral alto (0.6) y, si se aplica, TAMBIÉN se
//     literaliza el texto (igual que fix-escrituras.ts para AUTO_CORREGIBLE).
//   - Ventana de 4+ párrafos ("resumen"): probablemente el texto guardado es
//     una síntesis intencional de un pasaje largo. Umbral más bajo
//     (configurable, default 0.5) pero el TEXTO NO SE TOCA — solo se amplía
//     `referencia`/`link` al rango real. Esta fue una decisión explícita del
//     usuario (no asumir que "resumen" siempre está mal); si tu proyecto no
//     tiene esa convención, ajustá el umbral o revisá la lógica antes de
//     usar --write.
//
// ⚠️ Con --write igual conviene mirar la simulación primero, en particular:
//   - Recall entre 0.5 y 0.6: zona gris, mayor tasa de falsos positivos.
//   - Capítulos largos (se marcan con "⚠ capítulo largo"): a más párrafos,
//     más chance de que el recall alto sea casualidad de palabras comunes
//     (pasó con una cita de D&C 84 — candidato en un pasaje sobre obispos,
//     sin relación real, con recall 0.56 solo por vocabulario compartido).
//   - Saltos grandes de versículo (columna `salto`): cuanto más lejos cae la
//     ventana ganadora del versículo ya citado, más vale la pena verificar a
//     mano con scripts/ver-versiculo.ts antes de confiar en el resultado.
//
//   npx tsx scripts/rescan-ventana-ancha.ts libro-de-mormon-2                 # simulación, umbral 0.5
//   npx tsx scripts/rescan-ventana-ancha.ts libro-de-mormon-2 --umbral=0.55
//   npx tsx scripts/rescan-ventana-ancha.ts libro-de-mormon-2 --write
//
// Requiere haber corrido antes audit-escrituras.ts para ese curso.

import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"
import { createHash } from "node:crypto"
import type { ResultadoCita } from "./audit-escrituras"

const CONTENT_DIR = join(process.cwd(), "lib", "content")
const CACHE_DIR = join(process.cwd(), ".cache", "escrituras")
const PAGES_DIR = join(CACHE_DIR, "paginas")

const UMBRAL_PUNTUAL = 0.6 // ventana de 1-3 párrafos: validado a mano en LdM-2, no bajar sin revisar una muestra
const VENTANA_RESUMEN_MIN = 4
const PARRAFOS_CAPITULO_LARGO = 40 // por encima de esto, avisar de mayor riesgo de falso positivo

function hashUrl(url: string): string {
  return createHash("md5").update(url).digest("hex").slice(0, 16)
}
function claveCapitulo(link: string): string {
  return link.split("#")[0].split("&id=")[0].split("?id=")[0]
}
function normalizar(s: string): string {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[""'']/g, '"')
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}
function recall(texto: string, original: string): number {
  const palabrasOriginal = new Set(normalizar(original).split(" ").filter((w) => w.length > 3))
  const palabrasTexto = [...new Set(normalizar(texto).split(" ").filter((w) => w.length > 3))]
  if (!palabrasTexto.length) return 1
  return palabrasTexto.filter((w) => palabrasOriginal.has(w)).length / palabrasTexto.length
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
      .replace(/^\s*\d+\s*/, "")
      .replace(/\s+/g, " ")
      .trim()
    mapa[m[1]] = texto
  }
  return mapa
}
function referenciaConVersiculos(referenciaOriginal: string, versiculos: number[]): string {
  const idx = referenciaOriginal.lastIndexOf(":")
  if (idx === -1) return referenciaOriginal
  const prefijo = referenciaOriginal.slice(0, idx)
  const ordenados = [...new Set(versiculos)].sort((a, b) => a - b)
  return ordenados.length > 1
    ? `${prefijo}:${ordenados[0]}–${ordenados[ordenados.length - 1]}`
    : `${prefijo}:${ordenados[0]}`
}
function linkConVersiculos(link: string, versiculos: number[]): string {
  const base = claveCapitulo(link)
  const ordenados = [...new Set(versiculos)].sort((a, b) => a - b)
  const primero = "p" + ordenados[0]
  const ultimo = "p" + ordenados[ordenados.length - 1]
  const rango = ordenados.length > 1 ? `${primero}-${ultimo}` : primero
  return `${base}&id=${rango}#${primero}`
}
function versiculosDeReferencia(referencia: string): [number, number] | null {
  const m = referencia.match(/(\d+)(?:[–-](\d+))?\s*$/)
  if (!m) return null
  return [parseInt(m[1]), m[2] ? parseInt(m[2]) : parseInt(m[1])]
}
function splitProse(value: string): string | string[] {
  const parts = value.split("\n\n")
  return parts.length > 1 ? parts : value
}

interface Mejor {
  versiculos: number[]
  recall: number
  texto: string
}

function main() {
  const args = process.argv.slice(2)
  const categoryId = args.find((a) => !a.startsWith("--"))
  const escribir = args.includes("--write")
  const umbralArg = args.find((a) => a.startsWith("--umbral="))
  const UMBRAL_RESUMEN = umbralArg ? parseFloat(umbralArg.split("=")[1]) : 0.5
  const MAXV = 12

  if (!categoryId) {
    console.error("Uso: npx tsx scripts/rescan-ventana-ancha.ts <categoria> [--umbral=0.5] [--write]")
    process.exit(1)
  }

  const reportePath = join(CACHE_DIR, `${categoryId}.json`)
  if (!existsSync(reportePath)) {
    console.error(`No existe ${reportePath}. Corré primero:\n  npx tsx scripts/audit-escrituras.ts ${categoryId}`)
    process.exit(1)
  }

  const resultados: ResultadoCita[] = JSON.parse(readFileSync(reportePath, "utf8"))
  const revisarManual = resultados.filter((r) => r.estado === "REVISAR_MANUAL")

  let aplicadas = 0
  let sinCandidato = 0

  for (const cita of revisarManual) {
    const clave = claveCapitulo(cita.link)
    const archivo = join(PAGES_DIR, hashUrl(clave) + ".html")
    if (!existsSync(archivo)) { sinCandidato++; continue }

    const parrafos = extraerParrafos(readFileSync(archivo, "utf8"))
    const ids = Object.keys(parrafos).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))

    let mejor: Mejor = { versiculos: [], recall: 0, texto: "" }
    for (let ventana = 1; ventana <= MAXV; ventana++) {
      for (let i = 0; i <= ids.length - ventana; i++) {
        const grupo = ids.slice(i, i + ventana)
        const texto = grupo.map((id) => parrafos[id]).join(" ")
        const r = recall(cita.texto, texto)
        if (r > mejor.recall) mejor = { versiculos: grupo.map((id) => parseInt(id.slice(1))), recall: r, texto }
      }
    }

    const esResumen = mejor.versiculos.length >= VENTANA_RESUMEN_MIN
    const umbral = esResumen ? UMBRAL_RESUMEN : UMBRAL_PUNTUAL
    if (mejor.recall < umbral) { sinCandidato++; continue }

    const rangoOriginal = versiculosDeReferencia(cita.referencia)
    const salto = rangoOriginal
      ? Math.max(0, Math.min(...mejor.versiculos) - rangoOriginal[1], rangoOriginal[0] - Math.max(...mejor.versiculos))
      : -1
    const avisoCapitulo = ids.length > PARRAFOS_CAPITULO_LARGO ? " ⚠ capítulo largo (" + ids.length + " párrafos) — verificar a mano" : ""
    const avisoRecall = mejor.recall < 0.6 ? " ⚠ recall en zona gris" : ""

    const nuevaReferencia = referenciaConVersiculos(cita.referencia, mejor.versiculos)
    const nuevoLink = linkConVersiculos(cita.link, mejor.versiculos)
    const modo = esResumen ? "RESUMEN (texto intacto)" : "PUNTUAL (texto -> literal)"

    console.log(
      `${cita.categoryId}/${cita.lessonId} — ${cita.referencia} -> ${nuevaReferencia} ` +
      `[${modo}, recall ${mejor.recall.toFixed(2)}, salto ${salto}]${avisoCapitulo}${avisoRecall}`
    )
    if (!esResumen) {
      console.log(`  texto antes: ${cita.texto}`)
      console.log(`  texto real : ${mejor.texto}`)
    }

    if (escribir) {
      const filePath = join(CONTENT_DIR, cita.categoryId, `${cita.lessonId}.json`)
      const raw = JSON.parse(readFileSync(filePath, "utf8"))
      const seccion = raw.secciones?.[cita.ruta.secIdx]
      const nodo = cita.ruta.citas !== undefined ? seccion?.citas?.[cita.ruta.citas] : seccion?.bloques?.[cita.ruta.bloque!]
      if (!nodo) { console.log("  ⚠ no se encontró el nodo en el archivo actual, se omite"); continue }
      nodo.referencia = nuevaReferencia
      nodo.link = nuevoLink
      if (!esResumen) nodo.texto = splitProse(mejor.texto)
      writeFileSync(filePath, JSON.stringify(raw, null, 2) + "\n", "utf8")
    }
    aplicadas++
  }

  console.log(
    `\n${aplicadas} citas ${escribir ? "corregidas" : "por corregir (simulación)"} ` +
    `de ${revisarManual.length} REVISAR_MANUAL (umbral resumen ${UMBRAL_RESUMEN}, umbral puntual ${UMBRAL_PUNTUAL}).`
  )
  console.log(`${sinCandidato} sin candidato convincente ni con ventana ancha — necesitan investigación de` +
    " capítulo/libro real (ver COMO-AUDITAR-ESCRITURAS.md §4.2: puede estar en otro capítulo o incluso otro libro).")
  if (!escribir && aplicadas) {
    console.log(`\nPara aplicar: npx tsx scripts/rescan-ventana-ancha.ts ${categoryId} --write` + (umbralArg ? ` ${umbralArg}` : ""))
  }
}

main()
