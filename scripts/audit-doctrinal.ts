// scripts/audit-doctrinal.ts
//
// Cuarta auditoría del proyecto (las otras tres: audit-escrituras, extract-citas,
// audit-completitud). Mide si una lección cumple lo que piden los dos documentos
// oficiales de los que cuelga todo el programa:
//
//   - "El objetivo de Seminarios e Institutos de Religión" (2022): "Centramos CADA
//     experiencia de aprendizaje en Jesucristo y en Su ejemplo, atributos y poder
//     redentor" y "nos esforzamos por invitar al Espíritu Santo a cumplir Su función
//     en cada experiencia de aprendizaje".
//   - "Enseñar a la manera del Salvador" (2022), Parte 1 entera: "Enseñar sobre
//     Jesucristo independientemente de lo que se enseñe"; y del capítulo "Fomentar
//     el aprendizaje diligente": "ayude a los alumnos a asumir la responsabilidad de
//     su propio aprendizaje", "resista la tendencia a responder cada pregunta".
//
// audit-completitud.ts pregunta "¿está la sección y tiene la forma correcta?".
// Este pregunta otra cosa: "¿la lección enseña de Cristo, o es un principio
// genérico bien escrito?". Una lección puede pasar completitud con 10/10 y no
// nombrar al Salvador ni una vez — de hecho es lo más común en el corpus.
//
// Nace de la revisión del 6-sep-2026 contra los dos documentos: 274 de 519
// contextos y 314 de 516 conclusiones no nombraban a Jesucristo, y solo el 4 %
// de las lecciones mencionaba la revelación personal. Ver la "Regla superior"
// de ~/.claude/skills/seminary-enrichment/SKILL.md, que salió de ahí.
//
// Es un chequeo MECÁNICO por vocabulario. Detecta la ausencia con confianza; la
// PRESENCIA es solo un indicio (por eso separa "nombrado" de "con sustancia").
// El juicio de si de verdad enseña de Él es Nivel 2 y se hace leyendo.
//
//   npx tsx scripts/audit-doctrinal.ts <categoria> [...]
//   npx tsx scripts/audit-doctrinal.ts --todos
//   npx tsx scripts/audit-doctrinal.ts --todos --ranking      # tabla ordenada, peor primero
//   npx tsx scripts/audit-doctrinal.ts doctrina-y-convenios-1 --detalle

import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import { categories } from "../lib/content/registry"
import { isFlatCategory } from "../lib/types"
import { normalizar } from "./normalizar-resumen"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

// OJO: "La Iglesia de Jesucristo de los Santos de los Últimos Días" contiene el
// nombre del Salvador sin enseñar nada sobre Él. Si no se saca antes de buscar,
// cualquier lección que nombre a la Iglesia cuenta como centrada en Cristo. Es el
// falso positivo más importante de este script — medido en el corpus, infla el
// resultado ~4 puntos. Lo mismo con el nombre del curso ("Jesucristo y el
// Evangelio Sempiterno") si algún día se cuela en el cuerpo del texto.
const RUIDO = [
  /La Iglesia de Jesucristo de los Santos de los [ÚU]ltimos D[ií]as/gi,
  /Iglesia de Jesucristo/gi,
  /Jesucristo y el Evangelio Sempiterno/gi,
]

const NOMBRE = /Jesucristo|Salvador|Redentor|el Se[ñn]or Jesús|\bCristo\b|\bJesús\b/i

// Vocabulario que indica que se dice ALGO sobre Él, no solo que se lo nombra:
// Su ejemplo, un atributo o título, Su poder redentor, o una promesa Suya.
// Son las tres vías que pide la "Regla superior" de seminary-enrichment.
const SUSTANCIA =
  /expiaci[óo]n|expiatorio|sacrificio|redimir|redenci[óo]n|redentor|gracia|misericordia|perdón|perdona|sana|sanar|sanidad|resurrecci[óo]n|resucit|Su ejemplo|Su amor|Su poder|Su promesa|prometi[óo]|Su vida|Su ministerio|Cordero de Dios|Abogado|Luz del mundo|Pan de vida|Buen Pastor|Su nombre|venir a [ÉE]l|semejante[s]? a [ÉE]l|como [ÉE]l|Su gracia|Su sacrificio|Su disposici[óo]n/i

// Espíritu Santo / revelación personal: lo que el objetivo de SEI llama
// "invitar al Espíritu Santo a cumplir Su función".
// OJO: estos dos detectores usaban fragmentos sin límite de palabra, y en español eso
// arrastra palabras corrientes: /or[áa]\b/ matchea el final de "ahora" (y de "hora",
// "Pahorán"), /orar/ el de "mejorar" y "llorar", /oraci[óo]n/ el de "adoración" y
// "colaboración", /escrib[íi]/ el de "describir", e /impresi[óo]n/ el de "impresionante".
// Medido el 6-sep-2026 sobre el corpus: el detector viejo contaba 302 de 519 lecciones
// (58 %) contra 153 reales (29 %) — inflaba la métrica al doble, y "ahora" sola explicaba
// 92 de los falsos positivos. No alcanza con agregar \b: en JS las vocales acentuadas no
// son carácter de palabra, así que /or[áa]\b/ nunca cierra sobre "orá" (es el mismo motivo
// documentado abajo para MANDA_AL_TEXTO). Por eso el límite va como lookaround sobre una
// clase explícita de letras españolas.
const L = "a-záéíóúüñA-ZÁÉÍÓÚÜÑ"
const ESPIRITU = new RegExp(
  `Esp[íi]ritu Santo|revelaci[óo]n personal|susurr|el Esp[íi]ritu (?:te|le)|(?<![${L}])(?:impresi[óo]n|impresiones|inspiraci[óo]n)(?![${L}])`,
  "i"
)
const INVITA_ESPIRITU = new RegExp(
  `(?<![${L}])(?:or[áa]|orar|oraci[óo]n(?:es)?|medit[${L}]*|reflexion[áa]|anot[áa][${L}]*|escrib[íi][${L}]*|preg[úu]ntale|preguntarle|pon[ée]lo en oraci[óo]n|llev[áa]lo al Se[ñn]or)(?![${L}])`,
  "i"
)

// Pregunta de escudriñar: manda al alumno de vuelta al texto.
// Sin \b después de vocal acentuada: en JS `é` no es carácter de palabra, así que
// /le[ée]\b/ NO matchea "Leé Alma 32:27" — el límite de palabra nunca se cumple ahí.
// Costó un falso negativo en la primera versión de este script.
const MANDA_AL_TEXTO =
  /volv[ée] a leer|volver a leer|rele[ée]|le[ée]|leer|busc[áa] en|fijate en|mir[áa] el vers[íi]culo|en el pasaje/i
const REFERENCIA = /\b\d?\s?[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\.?\s+\d+:\d+/

interface Hallazgo {
  lessonId: string
  problema: string
}

function texto(v: unknown): string {
  const s = Array.isArray(v) ? v.join(" ") : typeof v === "string" ? v : ""
  return RUIDO.reduce((acc, re) => acc.replace(re, " "), s)
}

function tiposPorLeccion(categoryId: string): Map<string, string> {
  const mapa = new Map<string, string>()
  const cat = categories.find((c) => c.id === categoryId)
  if (!cat) return mapa
  const lecciones = isFlatCategory(cat) ? cat.lessons : cat.weeks.flatMap((w: any) => w.lessons)
  for (const l of lecciones) mapa.set(l.id, l.type ?? "")
  return mapa
}

interface Resultado {
  categoryId: string
  medidas: number   // lecciones con material, de cualquiera de las dos convenciones
  clasica: number
  ctxNombra: number
  conSustancia: number   // contexto + conclusión: el criterio del checklist
  ctxSustancia: number   // solo contexto: la métrica con la que se midió la línea de base del 6-sep-2026
  cierreNombra: number
  algunoNombra: number // contexto O conclusion — es el ítem del checklist doctrinal
  conEspiritu: number
  conEscudrinar: number
}

function auditarCategoria(categoryId: string, detalle: boolean): Resultado | null {
  const dir = join(CONTENT_DIR, categoryId)
  if (!existsSync(dir)) {
    console.log(`${categoryId}: no existe`)
    return null
  }
  const files = readdirSync(dir).filter(
    (f) => f.endsWith(".json") && f !== "_manifest.json" && !f.startsWith("_")
  )
  const tipos = tiposPorLeccion(categoryId)

  let vacias = 0
  let resumen = 0
  const r: Resultado = {
    categoryId,
    medidas: 0,
    clasica: 0,
    ctxNombra: 0,
    conSustancia: 0,
    ctxSustancia: 0,
    cierreNombra: 0,
    algunoNombra: 0,
    conEspiritu: 0,
    conEscudrinar: 0,
  }
  const sinCristo: Hallazgo[] = []
  const soloNombrado: Hallazgo[] = []
  const sinEspiritu: Hallazgo[] = []
  const sinEscudrinar: Hallazgo[] = []

  for (const file of files) {
    const lessonId = file.replace(/\.json$/, "")
    let j: any
    try {
      j = JSON.parse(readFileSync(join(dir, file), "utf8"))
    } catch {
      continue
    }
    const secciones = j.secciones ?? []
    if (!secciones.length) {
      vacias++
      continue
    }
    // Desde el 9-sep-2026 la convención `resumen` también se mide: `normalizar-resumen.ts` la
    // lleva a la forma clásica. Antes se contaba y se salteaba, y por eso un curso como
    // religion-301 se auditaba mirando 5 de sus 25 lecciones.
    const n_ = normalizar(secciones)
    if (n_.convencion === "resumen") resumen++
    else r.clasica++
    r.medidas++

    const ctx = texto(n_.contexto)
    // Para Cristo y sustancia se mira el cierre MÁS los puntos doctrinales: en la convención
    // `resumen` la doctrina de la lección vive ahí, no en el párrafo final.
    const cierre = texto(n_.conclusionDoctrinal)
    const preguntas: string[] = n_.preguntas
    const refs: string[] = n_.escrituras.map((c: any) => String(c?.referencia ?? ""))

    const ctxN = NOMBRE.test(ctx)
    const cierreN = NOMBRE.test(cierre)
    if (ctxN) r.ctxNombra++
    if (cierreN) r.cierreNombra++
    if ((ctxN || cierreN) && SUSTANCIA.test(ctx + " " + cierre)) r.conSustancia++
    if (ctxN && SUSTANCIA.test(ctx)) r.ctxSustancia++

    if (ctxN || cierreN) {
      r.algunoNombra++
      // Lo nombra pero no dice nada sobre Él: es el caso que el checklist doctrinal
      // llama "si la lección funcionaría igual borrando Su nombre".
      if (!SUSTANCIA.test(ctx + " " + cierre)) {
        soloNombrado.push({ lessonId, problema: "nombra a Cristo pero no dice nada sobre Él" })
      }
    } else {
      const tipo = tipos.get(lessonId) || "(sin tipo)"
      sinCristo.push({ lessonId, problema: `contexto y conclusion sin Cristo [${tipo}]` })
    }

    // ¿Alguna pregunta del cuestionario invita a orar / meditar / anotar, o habla
    // del Espíritu? La regla pide al menos una entre las de compromiso (5-6).
    const hayEspiritu = preguntas.some((p) => ESPIRITU.test(p) || INVITA_ESPIRITU.test(p))
    if (hayEspiritu) r.conEspiritu++
    else sinEspiritu.push({ lessonId, problema: "ninguna pregunta invita a orar, meditar o anotar" })

    // ¿Alguna pregunta manda de vuelta al bloque escrituras? Cuenta como tal si
    // nombra una referencia del propio bloque, o si es un imperativo de lectura
    // con una referencia adentro.
    const hayEscudrinar = preguntas.some((p) => {
      const citaPropia = refs.some((ref) => ref.length > 4 && p.includes(ref.split("–")[0].split("-")[0].trim()))
      return (citaPropia && MANDA_AL_TEXTO.test(p)) || (REFERENCIA.test(p) && MANDA_AL_TEXTO.test(p))
    })
    if (hayEscudrinar) r.conEscudrinar++
    else sinEscudrinar.push({ lessonId, problema: "ninguna pregunta devuelve al alumno al pasaje" })
  }

  const pct = (a: number) => (r.medidas ? `${Math.round((a * 100) / r.medidas)} %` : "-")
  console.log(`\n=== ${categoryId} (${files.length} archivos) ===`)
  console.log(
    `secciones: [] (sin material): ${vacias} | convención "resumen": ${resumen} | convención clásica: ${r.clasica}`
  )
  if (r.medidas === 0) {
    console.log('(sin lecciones de convención clásica — nada que medir)')
    return r
  }
  console.log(`Cristo en contexto:            ${r.ctxNombra}/${r.medidas} (${pct(r.ctxNombra)})`)
  console.log(`Cristo en conclusion:          ${r.cierreNombra}/${r.medidas} (${pct(r.cierreNombra)})`)
  console.log(
    `Cristo en alguna de las dos:   ${r.algunoNombra}/${r.medidas} (${pct(r.algunoNombra)})   <- ítem del checklist doctrinal`
  )
  console.log(
    `  ...y además dice algo de Él: ${r.conSustancia}/${r.medidas} (${pct(r.conSustancia)})   (indicio, no veredicto: confirmar leyendo)`
  )
  console.log(
    `     de ellas, ya en el contexto: ${r.ctxSustancia}/${r.medidas} (${pct(r.ctxSustancia)})   (métrica de la línea de base del 6-sep-2026)`
  )
  console.log(`Pregunta que invita a orar/meditar/anotar: ${r.conEspiritu}/${r.medidas} (${pct(r.conEspiritu)})`)
  console.log(`Pregunta que devuelve al pasaje:          ${r.conEscudrinar}/${r.medidas} (${pct(r.conEscudrinar)})`)

  if (detalle) {
    const grupos: [string, Hallazgo[]][] = [
      ["SIN CRISTO EN CONTEXTO NI CONCLUSION", sinCristo],
      ["SOLO NOMBRADO (no dice nada sobre Él)", soloNombrado],
      ["SIN PREGUNTA DE ORAR/MEDITAR/ANOTAR", sinEspiritu],
      ["SIN PREGUNTA DE ESCUDRIÑAR", sinEscudrinar],
    ]
    for (const [titulo, lista] of grupos) {
      if (!lista.length) continue
      console.log(`\n  -- ${titulo} (${lista.length}) --`)
      for (const h of lista) console.log(`    ${h.lessonId}: ${h.problema}`)
    }
  }
  return r
}

function ranking(resultados: Resultado[]) {
  const conDatos = resultados.filter((r) => r.medidas > 0)
  conDatos.sort((a, b) => a.algunoNombra / a.medidas - b.algunoNombra / b.medidas)
  const pct = (a: number, b: number) => `${Math.round((a * 100) / b)} %`.padStart(5)
  console.log("\n\n=== RANKING (peor primero, por centralidad en Cristo) ===")
  console.log("curso".padEnd(24) + " lecc  Cristo  sustancia  orar  escudriñar")
  for (const r of conDatos) {
    console.log(
      r.categoryId.padEnd(24) +
        String(r.medidas).padStart(5) +
        pct(r.algunoNombra, r.medidas).padStart(8) +
        pct(r.conSustancia, r.medidas).padStart(11) +
        pct(r.conEspiritu, r.medidas).padStart(6) +
        pct(r.conEscudrinar, r.medidas).padStart(12)
    )
  }
  const t = conDatos.reduce(
    (a, r) => ({
      medidas: a.medidas + r.medidas,
      algunoNombra: a.algunoNombra + r.algunoNombra,
      conSustancia: a.conSustancia + r.conSustancia,
      conEspiritu: a.conEspiritu + r.conEspiritu,
      conEscudrinar: a.conEscudrinar + r.conEscudrinar,
    }),
    { medidas: 0, algunoNombra: 0, conSustancia: 0, conEspiritu: 0, conEscudrinar: 0 }
  )
  console.log(
    "TOTAL".padEnd(24) +
      String(t.medidas).padStart(5) +
      pct(t.algunoNombra, t.medidas).padStart(8) +
      pct(t.conSustancia, t.medidas).padStart(11) +
      pct(t.conEspiritu, t.medidas).padStart(6) +
      pct(t.conEscudrinar, t.medidas).padStart(12)
  )
}

function main() {
  const args = process.argv.slice(2)
  const detalle = args.includes("--detalle")
  const todos = args.includes("--todos")
  const verRanking = args.includes("--ranking")
  const ids = todos ? categories.map((c) => c.id) : args.filter((a) => !a.startsWith("--"))

  if (!ids.length) {
    console.error("Uso: npx tsx scripts/audit-doctrinal.ts <categoria> [...] [--detalle]")
    console.error("     npx tsx scripts/audit-doctrinal.ts --todos [--ranking] [--detalle]")
    process.exit(1)
  }

  const resultados: Resultado[] = []
  for (const id of ids) {
    const r = auditarCategoria(id, detalle)
    if (r) resultados.push(r)
  }
  if (verRanking || (todos && !detalle)) ranking(resultados)
}

main()
