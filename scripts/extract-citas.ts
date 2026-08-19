// scripts/extract-citas.ts
//
// Extrae todas las citas de líderes de la Iglesia que hay en lib/content/
// y las vuelca en un inventario, para poder auditarlas de forma sistemática
// (ver docs/auditorias/).
//
//   npx tsx scripts/extract-citas.ts            # resumen por curso
//   npx tsx scripts/extract-citas.ts --json     # inventario completo a stdout
//   npx tsx scripts/extract-citas.ts --csv      # una fila por cita
//   npx tsx scripts/extract-citas.ts religion-250
//
// Una "cita de líder" es una sección de tipo `enseñanza` o un bloque de
// tipo `cita`. Las referencias de Escrituras se cuentan aparte: son otra
// clase de verificación.

import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import { categories } from "../lib/content/registry"
import { isFlatCategory } from "../lib/types"
import { normalizeLessonFile } from "../lib/content/normalize"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

export interface CitaRecord {
  categoryId: string
  lessonId: string
  lessonTitle: string
  /** "enseñanza" (sección completa) o "bloque" (dentro de una sección resumen) */
  origen: "enseñanza" | "bloque"
  autor: string
  fuente: string
  texto: string
  link: string
  /** Problemas detectables sin salir a internet. */
  banderas: string[]
}

const LINK_OK = /^https:\/\/www\.churchofjesuschrist\.org\//

// El material oficial de la Iglesia en español usa "tú", nunca voseo.
// Si una cita textual dice "estudiás" o "registrás", fue reescrita.
const VOSEO =
  /\b(?:estudi|registr|ten|pod|quer|sab|hac|busc|mir|pens|record|aprend|escuch|segu|eleg|dec|pon|tom|dej|empez|cambi|necesit|merec|cre|deb|esper|encontr|descubr|compart|serv|ayun|entend|sent|viv|dese|confi|acept|reconoc|permit|reflexion|consider|imagin|not|observ|prest|guard|cumpl|obedec|arrepent)(?:ás|és|ís)\b/i

// Errores de tipeo en nombres de autoridades que aparecen en el corpus.
//
// Van con \b a ambos lados: sin el límite final, "Hollan" casaba dentro de
// "Holland" y marcaba como error todas las citas bien escritas de ese autor.
// Por lo mismo se quitó "Devocional del sistema Educativo": la forma oficial
// es "devocional del Sistema Educativo de la Iglesia" y quedaba marcada.
// El typo real de ese caso ya lo cubre "Deovcional".
const NOMBRES_MAL =
  /\b(?:Rusell|Rusel|Nelsson|Uchdorf|Uchtdorff|Hollan|Bednarr|Oakes|Christoferson|Eyering|Deovcional)\b/i

// El "vosotros" es el otro tell de cita reescrita, además del voseo. Liahona y
// conferencia general en español usan siempre "ustedes"; el "vosotros" solo
// aparece dentro de citas de Escrituras. Las 20 citas inválidas de religion-301
// lo usaban ("Nacisteis", "fuisteis reservados", "os conocía", "pudiérais").
//
// Se buscan las formas que un traductor de la Iglesia nunca escribiría fuera de
// una Escritura: el pronombre/posesivo explícito y el pretérito en -asteis /
// -isteis. Se dejan fuera los imperativos ("Buscad", "Vestíos") y el futuro
// ("hallaréis"), que sí aparecen legítimamente al citar un versículo.
const VOSOTROS = /\b(?:vosotros|vosotras|vuestr[oa]s?)\b|\w+(?:asteis|isteis)\b/i

// Líderes fallecidos. Sirve para cruzar la fecha del discurso con las fechas de
// vida del autor: en DyC-1 apareció una cita que atribuía a Ezra Taft Benson
// (m. 1994) un discurso de Neil L. Andersen de 2018. El texto era textual y el
// link correcto; lo único mal era el autor. Ese cruce lo encuentra sin internet.
//
// Solo hacen falta los fallecidos: a un autor vivo ninguna fecha lo delata.
const FECHAS_DE_VIDA: Record<string, [number, number]> = {
  "james e. talmage": [1862, 1933],
  "joseph f. smith": [1838, 1918],
  "joseph fielding smith": [1876, 1972],
  "david o. mckay": [1873, 1970],
  "harold b. lee": [1899, 1973],
  "spencer w. kimball": [1895, 1985],
  "bruce r. mcconkie": [1915, 1985],
  "marion g. romney": [1897, 1988],
  "ezra taft benson": [1899, 1994],
  "marvin j. ashton": [1915, 1994],
  "howard w. hunter": [1907, 1995],
  "neal a. maxwell": [1926, 2004],
  "james e. faust": [1920, 2007],
  "joseph b. wirthlin": [1917, 2008],
  "gordon b. hinckley": [1910, 2008],
  "l. tom perry": [1922, 2015],
  "richard g. scott": [1928, 2015],
  "boyd k. packer": [1924, 2015],
  "robert d. hales": [1932, 2017],
  "thomas s. monson": [1927, 2018],
  "m. russell ballard": [1928, 2023],
  "jeffrey r. holland": [1940, 2025],
  "joseph smith": [1805, 1844],
  "josé smith": [1805, 1844],
  "brigham young": [1801, 1877],
  "emma smith": [1804, 1879],
}

// Compilaciones y manuales publicados después de la muerte del autor: citarlos
// con una fecha posterior es correcto, no un error de atribución.
const OBRA_POSTUMA =
  /Enseñanzas de los Presidentes|Teachings of|Discursos de|History of the Church|Manual|manual|Articles of Faith|Doctrina del Evangelio|Jesús el Cristo/

/** Años de 4 cifras que aparecen en la fuente y en el link, de 1830 en adelante. */
function añosCitados(fuente: string, link: string): number[] {
  const años: number[] = []
  for (const s of [fuente, link]) {
    for (const m of s.matchAll(/\b(18[3-9]\d|19\d\d|20[0-4]\d)\b/g)) años.push(Number(m[1]))
  }
  return años
}

function apellidoConocido(autor: string): [string, [number, number]] | null {
  const a = autor.toLowerCase()
  for (const [nombre, vida] of Object.entries(FECHAS_DE_VIDA)) {
    if (a.includes(nombre)) return [nombre, vida]
  }
  return null
}

function revisar(autor: string, fuente: string, texto: string, link: string): string[] {
  const b: string[] = []
  if (!autor.trim()) b.push("sin-autor")
  if (!fuente.trim()) b.push("sin-fuente")
  if (!texto.trim()) b.push("sin-texto")

  if (!link.trim()) {
    // Puede ser legítimo (libro impreso), pero hay que mirarlo.
    b.push("sin-link")
  } else {
    if (!LINK_OK.test(link)) b.push("link-no-oficial")
    if (link.includes(" ")) b.push("link-con-espacios")
    if (!link.includes("lang=spa")) b.push("link-sin-lang-spa")
  }

  // La URL pegada dentro de `fuente` era el problema estructural que
  // encontró la auditoría de R250.
  if (/https?:\/\/|churchofjesuschrist\.org/.test(fuente)) b.push("url-dentro-de-fuente")

  // Señales de que la cita fue reescrita y no es textual.
  if (VOSEO.test(texto)) b.push("voseo-en-cita")
  if (VOSOTROS.test(texto)) b.push("vosotros-en-cita")
  if (NOMBRES_MAL.test(autor) || NOMBRES_MAL.test(fuente)) b.push("nombre-mal-escrito")
  if (/^Elder/.test(autor)) b.push("elder-sin-tilde")

  // Fecha del discurso vs. fechas de vida del autor.
  const vida = apellidoConocido(autor)
  if (vida && !OBRA_POSTUMA.test(fuente)) {
    const [, [nace, muere]] = vida
    const años = añosCitados(fuente, link)
    if (años.length) {
      // Se toma el año más temprano: una referencia como "Ensign 1986; reimpreso
      // en Liahona 2005" no debería marcarse por el segundo.
      const año = Math.min(...años)
      if (año > muere) b.push("fecha-posterior-a-la-muerte")
      else if (año < nace + 18) b.push("fecha-anterior-al-autor")
    }
  }

  return b
}

function extraer(categoryId: string): CitaRecord[] {
  const dir = join(CONTENT_DIR, categoryId)
  if (!existsSync(dir)) return []

  const cat = categories.find((c) => c.id === categoryId)
  const titulos = new Map<string, string>()
  if (cat) {
    const ls = isFlatCategory(cat) ? cat.lessons : cat.weeks.flatMap((w) => w.lessons)
    ls.forEach((l) => titulos.set(l.id, l.title))
  }

  const out: CitaRecord[] = []
  const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json")

  for (const file of files) {
    const lessonId = file.replace(/\.json$/, "")
    const raw = JSON.parse(readFileSync(join(dir, file), "utf8"))
    const { secciones } = normalizeLessonFile(raw)

    for (const s of secciones) {
      if (s.tipo === "enseñanza" && (s.autor || s.texto)) {
        const autor = s.autor ?? ""
        const fuente = s.fuente ?? ""
        const texto = s.texto ?? ""
        const link = s.link ?? ""
        out.push({
          categoryId,
          lessonId,
          lessonTitle: titulos.get(lessonId) ?? "",
          origen: "enseñanza",
          autor,
          fuente,
          texto,
          link,
          banderas: revisar(autor, fuente, texto, link),
        })
      }

      for (const bloque of s.bloques ?? []) {
        if (bloque.tipo !== "cita") continue
        const autor = bloque.autor ?? ""
        const fuente = bloque.fuente ?? ""
        const texto = bloque.texto ?? ""
        const link = bloque.link ?? ""
        out.push({
          categoryId,
          lessonId,
          lessonTitle: titulos.get(lessonId) ?? "",
          origen: "bloque",
          autor,
          fuente,
          texto,
          link,
          banderas: revisar(autor, fuente, texto, link),
        })
      }
    }
  }

  return out
}

function csvCell(v: string): string {
  return '"' + v.replace(/"/g, '""').replace(/\r?\n/g, " ") + '"'
}

function main() {
  const args = process.argv.slice(2)
  const modo = args.find((a) => a.startsWith("--"))
  const soloCurso = args.find((a) => !a.startsWith("--"))

  const ids = soloCurso ? [soloCurso] : categories.map((c) => c.id)
  const todas = ids.flatMap(extraer)

  if (modo === "--json") {
    console.log(JSON.stringify(todas, null, 2))
    return
  }

  if (modo === "--csv") {
    console.log("curso,leccion,titulo,origen,autor,fuente,link,banderas,texto")
    for (const c of todas) {
      console.log([
        c.categoryId, c.lessonId, c.lessonTitle, c.origen,
        c.autor, c.fuente, c.link, c.banderas.join(" "), c.texto,
      ].map(csvCell).join(","))
    }
    return
  }

  // Resumen por curso
  console.log("CITAS DE LÍDERES POR CURSO\n")
  console.log("curso                      citas   con problemas")
  console.log("-".repeat(52))
  for (const id of ids) {
    const c = todas.filter((x) => x.categoryId === id)
    if (!c.length) continue
    const conProblemas = c.filter((x) => x.banderas.length).length
    console.log(
      id.padEnd(26) + String(c.length).padStart(5) + String(conProblemas).padStart(15)
    )
  }
  console.log("-".repeat(52))
  console.log(
    "TOTAL".padEnd(26) + String(todas.length).padStart(5) +
    String(todas.filter((x) => x.banderas.length).length).padStart(15)
  )

  // Banderas
  const porBandera = new Map<string, number>()
  todas.forEach((c) => c.banderas.forEach((b) => porBandera.set(b, (porBandera.get(b) ?? 0) + 1)))
  if (porBandera.size) {
    console.log("\nPROBLEMAS DETECTABLES SIN SALIR A INTERNET\n")
    ;[...porBandera.entries()]
      .sort((a, b) => b[1] - a[1])
      .forEach(([b, n]) => console.log("  " + b.padEnd(24) + String(n).padStart(5)))
  }

  // Autores más citados: sirve para agrupar la verificación por discurso.
  const porFuente = new Map<string, number>()
  todas.forEach((c) => {
    const clave = (c.autor || "(sin autor)") + " — " + (c.fuente || "(sin fuente)")
    porFuente.set(clave, (porFuente.get(clave) ?? 0) + 1)
  })
  console.log(
    `\nFUENTES DISTINTAS A VERIFICAR: ${porFuente.size}` +
    ` (de ${todas.length} citas; verificar una fuente cubre todas sus repeticiones)`
  )
}

main()
