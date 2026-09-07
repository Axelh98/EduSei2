/**
 * audit-links-citas.ts — verifica los `link` de las citas de líder (`enseñanza` y
 * bloques `cita` dentro de `resumen`) en dos dimensiones:
 *
 * 1. **¿Resuelve a un discurso real?** El sitio de la Iglesia **no devuelve 404** cuando
 *    el slug no existe: redirige en silencio al índice de la conferencia con HTTP 200.
 *    Un link roto por eso no salta como error en ninguna herramienta ingenua. Este es el
 *    mismo patrón que se descubrió con los `chapterUrl` de las semanas 31-32 de
 *    `libro-de-mormon-2` (ver COMPLETITUD-libro-de-mormon-2.md §0).
 *
 * 2. **¿Apunta al párrafo de la cita?** Un link al discurso entero obliga al lector —y al
 *    próximo auditor— a buscar la frase a mano en un texto de miles de palabras. El
 *    proyecto exige el ancla al párrafo: `?lang=spa&id=p23#p23` (o `id=p23-p25#p23`).
 *
 * Lo que este script **no** hace: comparar el texto guardado contra el del discurso. Que
 * un link resuelva no dice nada sobre si la cita es textual — en `religion-200` apareció
 * una cita con link válido y título equivocado. Esa comparación sigue siendo manual.
 *
 * Uso:
 *   npx tsx scripts/audit-links-citas.ts <categoria>
 *   npx tsx scripts/audit-links-citas.ts <categoria> --solo-problemas
 */
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const CONTENT = join(process.cwd(), "lib", "content")
const CACHE = join(process.cwd(), ".cache", "links")

type Cita = { leccion: string; autor: string; fuente: string; link: string }

const args = process.argv.slice(2)
const soloProblemas = args.includes("--solo-problemas")
const categoria = args.find((a) => !a.startsWith("--"))

if (!categoria) {
  console.error("uso: npx tsx scripts/audit-links-citas.ts <categoria> [--solo-problemas]")
  process.exit(1)
}

function citasDe(cat: string): Cita[] {
  const dir = join(CONTENT, cat)
  if (!existsSync(dir)) {
    console.error(`No existe la categoría ${cat}`)
    process.exit(1)
  }
  const out: Cita[] = []
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const j = JSON.parse(readFileSync(join(dir, f), "utf8"))
    const leccion = f.replace(".json", "")
    for (const s of j.secciones ?? []) {
      if (s.tipo === "enseñanza" && s.link) out.push({ leccion, autor: s.autor, fuente: s.fuente, link: s.link })
      if (s.tipo === "resumen")
        for (const b of s.bloques ?? [])
          if (b.tipo === "cita" && b.link) out.push({ leccion, autor: b.autor, fuente: b.fuente, link: b.link })
    }
  }
  return out
}

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function traer(url: string): Promise<string> {
  mkdirSync(CACHE, { recursive: true })
  const key = join(CACHE, Buffer.from(url).toString("base64url").slice(0, 100) + ".html")
  if (existsSync(key)) return readFileSync(key, "utf8")
  for (let intento = 0; intento < 3; intento++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (auditoria-aulasei)" } })
      const t = await r.text()
      if (r.status === 200) {
        writeFileSync(key, t, "utf8")
        await dormir(1500)
        return t
      }
      if (r.status >= 500) {
        await dormir(3000 * (intento + 1))
        continue
      }
      return `__HTTP_${r.status}__`
    } catch {
      await dormir(2000)
    }
  }
  return "__ERROR__"
}

/** Un discurso trae su propio slug en el canonical; un índice canoniza a `/AAAA/MM`. */
function clasificar(html: string, url: string): string {
  if (html.startsWith("__")) return html.replace(/__/g, "")
  const slug = (url.match(/\/([^/?#]+)(?:\?|#|$)/) ?? [])[1] ?? ""
  const canonical = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/) ?? [])[1] ?? ""
  if (canonical && slug && !canonical.includes(slug))
    return "REDIRIGE → " + canonical.replace(/^https:\/\/www\.churchofjesuschrist\.org/, "")
  const titulo = ((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "").trim()
  if (/^(Conferencia General|General Conference)\s*(\||$)/i.test(titulo)) return "ÍNDICE, no un discurso"
  return "OK"
}

/** El ancla al párrafo puede venir como `#p23` y/o `id=p23`. */
const tieneAncla = (link: string) => /#p\d/.test(link) || /[?&]id=p\d/.test(link)

;(async () => {
  const citas = citasDe(categoria)
  const cache = new Map<string, string>()
  let rotos = 0
  let sinAncla = 0

  for (const c of citas) {
    if (!cache.has(c.link)) cache.set(c.link, clasificar(await traer(c.link), c.link))
    const estado = cache.get(c.link)!
    const ancla = tieneAncla(c.link)
    if (estado !== "OK") rotos++
    if (ancla === false) sinAncla++
    if (soloProblemas && estado === "OK" && ancla) continue
    const marca = estado !== "OK" ? "❌" : ancla ? "  " : "⚓"
    console.log(`${marca} ${c.leccion} | ${c.autor}`)
    console.log(`     declarado: ${c.fuente}`)
    if (estado !== "OK") console.log(`     link: ${estado}`)
    if (!ancla) console.log(`     sin ancla al párrafo (falta #pN) → ${c.link}`)
  }

  const unicos = cache.size
  const malos = [...cache.values()].filter((v) => v !== "OK").length
  console.log(
    `\n${citas.length} citas · ${unicos} links únicos` +
      `\n  ❌ ${malos} links no resuelven a un discurso (${rotos} citas afectadas)` +
      `\n  ⚓ ${sinAncla} citas sin ancla al párrafo`
  )
  if (malos > 0 || sinAncla > 0)
    console.log(
      "\nUn link que resuelve NO garantiza que la cita sea textual ni que el título sea\n" +
        "correcto: eso exige comparar el texto a mano. Ver docs/auditorias/AUDITORIA-citas-R200.md."
    )
})()
