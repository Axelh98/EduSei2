// scripts/ver-versiculo.ts
//
// Descarga (con la misma caché que audit-escrituras.ts) y muestra el texto
// real de uno o varios párrafos de un capítulo de Escritura. Sirve para
// verificar a mano una hipótesis durante la resolución de un REVISAR_MANUAL
// (ver docs/auditorias/COMO-AUDITAR-ESCRITURAS.md §4) sin escribir un script
// descartable cada vez.
//
//   npx tsx scripts/ver-versiculo.ts "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa" 9 10 11
//   npx tsx scripts/ver-versiculo.ts "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5?lang=spa" 19
//   npx tsx scripts/ver-versiculo.ts "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/33?lang=spa"   # sin números: lista todo el capítulo
//
// La URL puede llevar o no query (?id=...) — se ignora, siempre se pide el
// capítulo entero. Nunca escribe en lib/content/; es de solo lectura.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import { createHash } from "node:crypto"

const CACHE_DIR = join(process.cwd(), ".cache", "escrituras", "paginas")

function hashUrl(url: string): string {
  return createHash("md5").update(url).digest("hex").slice(0, 16)
}

function claveCapitulo(url: string): string {
  return url.split("#")[0].split("&id=")[0].split("?id=")[0]
}

async function descargarCapitulo(url: string, reintentos = 5): Promise<string> {
  const clave = claveCapitulo(url)
  const archivo = join(CACHE_DIR, hashUrl(clave) + ".html")
  if (existsSync(archivo)) return readFileSync(archivo, "utf8")

  for (let intento = 0; intento < reintentos; intento++) {
    const res = await fetch(clave, { headers: { "User-Agent": "Mozilla/5.0 (compatible; AulaSei-audit/1.0)" } })
    if (res.status === 200) {
      const html = await res.text()
      mkdirSync(CACHE_DIR, { recursive: true })
      writeFileSync(archivo, html, "utf8")
      return html
    }
    if (res.status === 503) {
      await new Promise((r) => setTimeout(r, 2000 * (intento + 1)))
      continue
    }
    throw new Error(`status ${res.status} para ${clave}`)
  }
  throw new Error(`no se pudo descargar ${clave} tras ${reintentos} intentos`)
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

async function main() {
  const [url, ...versiculos] = process.argv.slice(2)
  if (!url) {
    console.error("Uso: npx tsx scripts/ver-versiculo.ts <url-del-capitulo> [numero-de-versiculo ...]")
    process.exit(1)
  }

  const html = await descargarCapitulo(url)
  const parrafos = extraerParrafos(html)

  const ids = versiculos.length
    ? versiculos.map((v) => "p" + v.replace(/^p/, ""))
    : Object.keys(parrafos).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))

  for (const id of ids) {
    console.log(`=== ${id} ===`)
    console.log(parrafos[id] ?? "(no existe ese párrafo en este capítulo)")
    console.log()
  }
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
