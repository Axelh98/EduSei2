// scripts/build-search-index.ts
//
// Genera lib/content/search-index.json: lo que el buscador necesita para
// encontrar una lección por tema o por cita, sin cargar el corpus entero en
// el navegador.
//
// El buscador de la web solo miraba `title` y `description` del manifiesto,
// así que un maestro que busca "Helamán 5:12" o "recogimiento" no encontraba
// nada aunque la lección lo trate. Este índice agrega las referencias de
// Escritura, los autores citados y las palabras clave de cada lección: pesa
// ~215 KB (53 KB gzip) y entra por dynamic import, no en el bundle inicial.
//
// Recorre el MANIFIESTO, no el directorio: un archivo .json que el manifiesto
// no lista no se muestra en ninguna pantalla, y contarlo infla el índice con
// contenido muerto.
//
// Correr después de agregar, borrar o reescribir lecciones:
//   npx tsx scripts/build-search-index.ts

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { normalizeText } from "../lib/utils"

const CONTENT_DIR = join(process.cwd(), "lib", "content")
const SALIDA = join(CONTENT_DIR, "search-index.json")
const MAX_KEYWORDS = 20

/** Una entrada por lección. Claves cortas: se repiten 677 veces. */
export interface SearchEntry {
  /** categoryId */    c: string
  /** lessonId */      l: string
  /** número de semana, null en cursos planos */ w: number | null
  /** title */         t: string
  /** description */   d: string
  /** referencias de Escritura */ r: string[]
  /** autores citados */          a: string[]
  /** palabras clave del contexto y la conclusión */ k: string[]
  /** tiene repaso: decide si el resultado ofrece "Ver repaso" */ s: boolean
}

// Palabras que aparecen en todas las lecciones y no discriminan nada.
const STOPWORDS = new Set(
  ("para pero como este esta estos estas cuando donde porque desde hasta entre sobre " +
   "todo toda todos todas otro otra otros otras mismo misma cada muy mas menos " +
   "aunque tambien solo sino segun ante bajo tras sera seran fue fueron hacer hace " +
   "hacen puede pueden decir dice dicen tiene tienen habia haber estar estan siendo " +
   "vida dios senor jesucristo cristo leccion pasaje versiculo capitulo manual").split(" ")
)

function contar(texto: string): Map<string, number> {
  const freq = new Map<string, number>()
  for (const palabra of normalizeText(texto).match(/[a-zñ]{4,}/g) ?? []) {
    if (STOPWORDS.has(palabra)) continue
    freq.set(palabra, (freq.get(palabra) ?? 0) + 1)
  }
  return freq
}

/**
 * Palabras clave por tf-idf, no por frecuencia bruta.
 *
 * Con frecuencia bruta las 20 palabras de cada lección terminaban siendo las
 * mismas de siempre ("pueblo", "manera", "seguir") y un término distintivo que
 * aparece una sola vez —"gavillas", "estandarte", "urim"— no entraba nunca, así
 * que buscarlo no encontraba la lección que sí lo trata. Ponderar por lo raro
 * que es el término en el corpus invierte eso.
 */
function palabrasClave(freq: Map<string, number>, df: Map<string, number>, total: number): string[] {
  return [...freq.entries()]
    .map(([palabra, tf]) => {
      const idf = Math.log(total / (df.get(palabra) ?? 1))
      return [palabra, (1 + Math.log(tf)) * idf] as const
    })
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, MAX_KEYWORDS)
    .map(([palabra]) => palabra)
}

function construir(): SearchEntry[] {
  const entradas: SearchEntry[] = []
  /** Frecuencias por lección, en el mismo orden que `entradas`. */
  const frecuencias: Map<string, number>[] = []

  const cursos = readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()

  for (const curso of cursos) {
    const manifestPath = join(CONTENT_DIR, curso, "_manifest.json")
    if (!existsSync(manifestPath)) continue
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))

    const lecciones: { id: string; title: string; description?: string; hasStudy?: boolean; semana: number | null }[] = []
    for (const semana of manifest.weeks ?? []) {
      for (const l of semana.lessons) lecciones.push({ ...l, semana: semana.id })
    }
    for (const l of manifest.lessons ?? []) lecciones.push({ ...l, semana: null })

    for (const meta of lecciones) {
      const archivo = join(CONTENT_DIR, curso, `${meta.id}.json`)
      const referencias: string[] = []
      const autores: string[] = []
      let prosa = ""

      if (existsSync(archivo)) {
        const leccion = JSON.parse(readFileSync(archivo, "utf8"))
        for (const seccion of leccion.secciones ?? []) {
          if (seccion.tipo === "escrituras") {
            for (const cita of seccion.citas ?? []) {
              if (cita.referencia) referencias.push(cita.referencia)
            }
          }
          if (seccion.tipo === "enseñanza") {
            for (const cita of seccion.citas ?? [seccion]) {
              if (cita.autor) autores.push(cita.autor)
            }
          }
          if (seccion.tipo === "contexto" || seccion.tipo === "conclusion") {
            prosa += " " + (seccion.contenido ?? "")
          }
          // Las lecciones con convención "resumen" guardan todo en bloques.
          for (const bloque of seccion.bloques ?? []) {
            if (bloque.tipo === "escritura" && bloque.referencia) referencias.push(bloque.referencia)
            if (bloque.tipo === "cita" && bloque.autor) autores.push(bloque.autor)
            if (bloque.texto) prosa += " " + bloque.texto
          }
        }
      }

      entradas.push({
        c: curso,
        l: meta.id,
        w: meta.semana,
        t: meta.title ?? "",
        d: meta.description ?? "",
        r: referencias,
        a: [...new Set(autores)],
        k: [], // se completan abajo, cuando se conoce todo el corpus
        s: meta.hasStudy ?? false,
      })
      frecuencias.push(contar(prosa))
    }
  }

  // tf-idf necesita el corpus entero, así que las palabras clave se calculan
  // en una segunda pasada.
  const df = new Map<string, number>()
  for (const freq of frecuencias) {
    for (const palabra of freq.keys()) df.set(palabra, (df.get(palabra) ?? 0) + 1)
  }
  entradas.forEach((entrada, i) => {
    entrada.k = palabrasClave(frecuencias[i], df, entradas.length)
  })

  return entradas
}

const indice = construir()
writeFileSync(SALIDA, JSON.stringify(indice), "utf8")

const kb = (n: number) => `${(n / 1024).toFixed(0)} KB`
const conRepaso = indice.filter((e) => e.s).length
console.log(`OK lib/content/search-index.json — ${indice.length} lecciones (${conRepaso} con repaso), ${kb(JSON.stringify(indice).length)}`)
console.log(`   ${indice.reduce((a, e) => a + e.r.length, 0)} referencias de Escritura · ${indice.reduce((a, e) => a + e.a.length, 0)} autores citados`)
