// scripts/audit-chapterurls.ts
//
// Fila 19 del catálogo (docs/auditorias/CICLO-GENERACION-AUDITORIA.md): `chapterUrl` que apunta
// a otra lección del manual, o a una página que no existe. Estaba marcada como "❌ sin regla,
// pero es automatizable: traer cada chapterUrl y comparar el título que devuelve contra el
// title del manifiesto". Esto es ese cruce.
//
//   npx tsx scripts/audit-chapterurls.ts <categoria>
//   npx tsx scripts/audit-chapterurls.ts --todos
//
// El punto fino es el de la fila 17: una URI inexistente del manual NO da 404. El sitio
// responde HTTP 200 con el índice completo del manual, que es indistinguible de una página
// buena para cualquier chequeo ingenuo. Se detecta por tamaño y por la ausencia del número
// de lección: el índice pesa varias decenas de miles de caracteres y lista TODAS las
// lecciones, mientras que una lección real pesa unos pocos miles y se anuncia a sí misma
// ("Lección 64", "Josué 1–8; 23–24: Lección 64").

import { readFileSync, existsSync, mkdirSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"
import { createHash } from "node:crypto"

const CACHE_DIR = join(process.cwd(), ".cache", "chapterurls")
const CONTENT_DIR = join(process.cwd(), "lib", "content")

const args = process.argv.slice(2)
const todos = args.includes("--todos")
const categorias = todos
  ? readdirSync(CONTENT_DIR).filter((d) => statSync(join(CONTENT_DIR, d)).isDirectory())
  : args.filter((a) => !a.startsWith("--"))

if (!categorias.length) {
  console.error("uso: npx tsx scripts/audit-chapterurls.ts <categoria> | --todos")
  process.exit(1)
}

const hashUrl = (u: string) => createHash("md5").update(u).digest("hex").slice(0, 16)

function uriDeChapterUrl(url: string): string | null {
  const m = url.match(/churchofjesuschrist\.org\/study(\/manual\/[^?#]+)/)
  return m ? m[1] : null
}

async function traer(uri: string): Promise<string | null> {
  const archivo = join(CACHE_DIR, hashUrl(uri) + ".txt")
  if (existsSync(archivo)) return readFileSync(archivo, "utf8")
  const api = `https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content?lang=spa&uri=${encodeURIComponent(uri)}`
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(api, { headers: { "User-Agent": "Mozilla/5.0 (compatible; AulaSei-audit/1.0)" } })
      if (res.status === 200) {
        const j: any = await res.json()
        const body = j?.content?.body ?? ""
        const texto = body
          .replace(/<[^>]+>/g, " ")
          .replace(/&nbsp;/g, " ")
          .replace(/&#(\d+);/g, (_: string, d: string) => String.fromCharCode(+d))
          .replace(/&[a-z]+;/g, " ")
          .replace(/\s+/g, " ")
          .trim()
        mkdirSync(CACHE_DIR, { recursive: true })
        writeFileSync(archivo, texto, "utf8")
        return texto
      }
      if (res.status === 429 || res.status === 503) {
        await new Promise((r) => setTimeout(r, 2000 * (i + 1)))
        continue
      }
      return null
    } catch {
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)))
    }
  }
  return null
}

// Un índice de manual es enorme y lista muchas lecciones; una lección real, no.
const pareceIndice = (t: string) => t.length > 25000 && (t.match(/Lección \d+:/g) ?? []).length > 15

;(async () => {
  let totalRotas = 0
  let totalDesalineadas = 0
  let totalOk = 0
  let totalSinUrl = 0

  for (const categoria of categorias) {
    const dir = join(CONTENT_DIR, categoria)
    const mp = join(dir, "_manifest.json")
    if (!existsSync(mp)) continue
    const m = JSON.parse(readFileSync(mp, "utf8"))
    const lecciones: any[] = m.weeks ? m.weeks.flatMap((w: any) => w.lessons) : m.lessons ?? []

    const rotas: string[] = []
    const desalineadas: string[] = []
    let ok = 0
    let sinUrl = 0

    for (const l of lecciones) {
      if (!l.chapterUrl) { sinUrl++; continue }
      const uri = uriDeChapterUrl(l.chapterUrl)
      if (!uri) { sinUrl++; continue }
      const texto = await traer(uri)
      if (texto === null) { rotas.push(`${l.id} — no se pudo traer → ${l.chapterUrl}`); continue }
      if (pareceIndice(texto)) {
        rotas.push(`${l.id} — la URI no existe: el sitio devolvió el ÍNDICE del manual con HTTP 200 → ${uri}`)
        continue
      }
      // ¿la página se anuncia con el mismo número de lección que el manifiesto?
      const num = (l.id.match(/(\d+)/) ?? [])[1]
      const tituloNum = (l.title?.match(/Lecci[óo]n\s+(\d+)/i) ?? [])[1]
      const esperado = tituloNum ?? num
      if (esperado && !new RegExp(`Lecci[óo]n\\s+${esperado}\\b`).test(texto)) {
        const anunciada = (texto.match(/Lecci[óo]n\s+(\d+)/) ?? [])[1]
        desalineadas.push(
          `${l.id} — el manifiesto dice "Lección ${esperado}" pero la página del manual dice "Lección ${anunciada ?? "?"}" → ${uri}`
        )
        continue
      }
      ok++
    }

    console.log(`\n=== ${categoria} (${lecciones.length} lecciones) ===`)
    console.log(`  ✓ coinciden: ${ok} | sin chapterUrl: ${sinUrl} | ❌ rotas: ${rotas.length} | ⚠ desalineadas: ${desalineadas.length}`)
    for (const r of rotas) console.log(`  ❌ ${r}`)
    for (const d of desalineadas) console.log(`  ⚠  ${d}`)

    totalOk += ok; totalSinUrl += sinUrl; totalRotas += rotas.length; totalDesalineadas += desalineadas.length
  }

  if (categorias.length > 1) {
    console.log(`\n=== TOTAL === ✓ ${totalOk} | sin url ${totalSinUrl} | ❌ ${totalRotas} | ⚠ ${totalDesalineadas}`)
  }
  console.log(
    "\nUna URI de manual inexistente responde 200 con el índice completo, no 404: por eso se" +
    "\ncompara el contenido y no el status. Ver fila 17 y 19 del catálogo."
  )
})()
