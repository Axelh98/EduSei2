// scripts/audit-completitud.ts
//
// Audita CONTEXTO, CUESTIONARIO (preguntas reflexivas), CONCLUSION y QUESTIONS
// (quiz de opción múltiple) de un curso contra las reglas de la skill
// seminary-enrichment (~/.claude/skills/seminary-enrichment/SKILL.md):
// contexto 200–320 palabras, conclusion 80–130, cuestionario con 6 preguntas,
// quiz con 7 preguntas. Es un chequeo MECÁNICO (conteos y presencia) — no lee
// la calidad del contenido. Para eso hace falta leer una muestra a mano (ver
// docs/auditorias/COMO-AUDITAR-CONTENIDO.md §2).
//
// Nace de comparar antiguo-testamento-1 / libro-de-mormon-1 / libro-de-mormon-2
// en agosto de 2026: libro-de-mormon-2 resultó tener contexto de ~73 palabras
// (un tercio de lo esperado), 0 lecciones con `conclusion`, cuestionario fijo
// en 3 preguntas (no 6), y 68 de 111 lecciones sin ninguna cita de líder — una
// diferencia de convención/completitud enorme frente a los otros dos cursos,
// invisible a simple vista si no se cuenta.
//
// Dos convenciones de contenido coexisten en el proyecto:
//   - "clásica": secciones contexto / escrituras / enseñanza / conclusion / cuestionario
//   - "resumen": una sola sección tipo "resumen" con bloques (parrafo, escritura,
//     cita, doctrinal, reflexion) — la usan religion-225 y parte de religion-301.
// Desde el 9-sep-2026 el script mide LAS DOS: `normalizar-resumen.ts` lleva los
// bloques de la convención `resumen` a la forma clásica con la spec fijada en
// docs/auditorias/BITACORA-r225.md. Antes hacía `continue` sobre `resumen` y solo
// las contaba, con lo que un curso podía declararse cerrado mirando 5 de 25
// lecciones (era el caso de religion-301).
//
//   npx tsx scripts/audit-completitud.ts <categoria> [...]
//   npx tsx scripts/audit-completitud.ts --todos
//   npx tsx scripts/audit-completitud.ts libro-de-mormon-2 --detalle   # lista lección por lección lo que falla

import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import { categories } from "../lib/content/registry"
import { isFlatCategory } from "../lib/types"
import { normalizar, DOCTRINAL_MIN, DOCTRINAL_MAX } from "./normalizar-resumen"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

const CONTEXTO_MIN = 150 // algo más laxo que el 200 de la skill: "Dominio de la Doctrina" y
const CONTEXTO_MAX = 340 // "Preparación para la Vida" documentan mínimos más bajos (150-260)
const CONCLUSION_MIN = 60
const CONCLUSION_MAX = 140
const CUESTIONARIO_ESPERADO = 6
const QUIZ_ESPERADO = 7

function join_(v: unknown): string {
  return Array.isArray(v) ? v.join(" ") : typeof v === "string" ? v : ""
}
function palabras(s: string): number {
  const t = s.trim()
  return t ? t.split(/\s+/).length : 0
}

interface Hallazgo { lessonId: string; problema: string }

/** "Dominio de la Doctrina" no enfatiza cita de líder según la propia tabla de
 * seminary-enrichment (énfasis: memorización con comprensión) — no tratar su
 * ausencia de `enseñanza` igual que en una lección Ven Sígueme normal. */
function tiposPorLeccion(categoryId: string): Map<string, string> {
  const mapa = new Map<string, string>()
  const cat = categories.find((c) => c.id === categoryId)
  if (!cat) return mapa
  const lecciones = isFlatCategory(cat) ? cat.lessons : cat.weeks.flatMap((w: any) => w.lessons)
  for (const l of lecciones) mapa.set(l.id, l.type ?? "")
  return mapa
}

function auditarCategoria(categoryId: string, detalle: boolean) {
  const dir = join(CONTENT_DIR, categoryId)
  if (!existsSync(dir)) { console.log(`${categoryId}: no existe`); return }
  const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json" && !f.startsWith("_"))
  const tipos = tiposPorLeccion(categoryId)

  let vacias = 0, resumen = 0, clasica = 0
  let conContexto = 0, conConclusion = 0, conEnseñanza0 = 0, conQuiz = 0
  let dominioDoctrinaSinEnseñanza = 0
  const contextoFuera: Hallazgo[] = []
  const conclusionFuera: Hallazgo[] = []
  const cuestionarioFuera: Hallazgo[] = []
  const doctrinalFuera: Hallazgo[] = []
  const quizFuera: Hallazgo[] = []
  const sinEnseñanza: Hallazgo[] = []
  const sinConclusion: Hallazgo[] = []
  const sinQuiz: Hallazgo[] = []

  for (const file of files) {
    const lessonId = file.replace(/\.json$/, "")
    let j: any
    try { j = JSON.parse(readFileSync(join(dir, file), "utf8")) } catch { continue }
    const secciones = j.secciones ?? []
    if (!secciones.length) { vacias++; continue }

    const n_ = normalizar(secciones)
    if (n_.convencion === "resumen") resumen++
    else clasica++

    if (n_.contexto) {
      conContexto++
      const n = palabras(n_.contexto)
      if (n < CONTEXTO_MIN || n > CONTEXTO_MAX) contextoFuera.push({ lessonId, problema: `contexto ${n} palabras` })
    }

    if (n_.ensenanzas.length === 0) {
      conEnseñanza0++
      if (tipos.get(lessonId) === "Dominio de la Doctrina") dominioDoctrinaSinEnseñanza++
      else sinEnseñanza.push({ lessonId, problema: "sin cita de líder (enseñanza)" })
    }

    if (n_.tieneConclusion) {
      conConclusion++
      const n = palabras(n_.conclusion)
      if (n < CONCLUSION_MIN || n > CONCLUSION_MAX) conclusionFuera.push({ lessonId, problema: `conclusion ${n} palabras` })
    } else {
      // En la convención `resumen` esto significa un solo párrafo, que haría de contexto y de
      // conclusión a la vez; en la clásica, que falta la sección.
      sinConclusion.push({ lessonId, problema: n_.convencion === "resumen" ? "un solo párrafo: no hay cierre distinguible del contexto" : "sin sección conclusion" })
    }

    // Los puntos doctrinales son un bloque propio de la convención `resumen`; la clásica no los
    // tiene y por eso no se le exigen.
    if (n_.convencion === "resumen" && (n_.doctrinal.length < DOCTRINAL_MIN || n_.doctrinal.length > DOCTRINAL_MAX))
      doctrinalFuera.push({ lessonId, problema: `doctrinal con ${n_.doctrinal.length} puntos (se esperan ${DOCTRINAL_MIN}-${DOCTRINAL_MAX})` })

    if (n_.preguntas.length !== CUESTIONARIO_ESPERADO)
      cuestionarioFuera.push({ lessonId, problema: `cuestionario con ${n_.preguntas.length} preguntas (se espera ${CUESTIONARIO_ESPERADO})` })

    const nQuiz = (j.questions ?? []).length
    if (nQuiz > 0) {
      conQuiz++
      if (nQuiz !== QUIZ_ESPERADO) quizFuera.push({ lessonId, problema: `quiz con ${nQuiz} preguntas (se espera ${QUIZ_ESPERADO})` })
    } else {
      sinQuiz.push({ lessonId, problema: "sin preguntas de quiz (questions vacío)" })
    }
  }

  console.log(`\n=== ${categoryId} (${files.length} archivos) ===`)
  console.log(`secciones: [] (sin material): ${vacias} | convención "resumen": ${resumen} | convención clásica: ${clasica}`)
  const medidas = resumen + clasica
  if (medidas === 0) { console.log("(sin lecciones con material que medir)"); return }
  console.log(`contexto: ${conContexto}/${medidas} presente, ${contextoFuera.length} fuera de rango ${CONTEXTO_MIN}-${CONTEXTO_MAX} palabras`)
  console.log(
    `enseñanza: ${medidas - conEnseñanza0}/${medidas} con al menos una cita de líder, ` +
    `${sinEnseñanza.length} sin ninguna` +
    (dominioDoctrinaSinEnseñanza ? ` (+ ${dominioDoctrinaSinEnseñanza} "Dominio de la Doctrina", esperado por su propio tipo)` : "")
  )
  console.log(`conclusion: ${conConclusion}/${medidas} presente (${sinConclusion.length} sin cierre distinguible), ${conclusionFuera.length} fuera de rango ${CONCLUSION_MIN}-${CONCLUSION_MAX} palabras`)
  console.log(`cuestionario: ${cuestionarioFuera.length}/${medidas} sin exactamente ${CUESTIONARIO_ESPERADO} preguntas reflexivas`)
  if (resumen) console.log(`doctrinal: ${doctrinalFuera.length}/${resumen} fuera de ${DOCTRINAL_MIN}-${DOCTRINAL_MAX} puntos (solo convención "resumen")`)
  console.log(`quiz: ${conQuiz}/${medidas} con preguntas (${sinQuiz.length} sin ninguna), ${quizFuera.length} sin exactamente ${QUIZ_ESPERADO}`)

  if (detalle) {
    const grupos: [string, Hallazgo[]][] = [
      ["SIN ENSEÑANZA", sinEnseñanza], ["SIN CONCLUSION", sinConclusion], ["SIN QUIZ", sinQuiz],
      ["CONTEXTO FUERA DE RANGO", contextoFuera], ["CONCLUSION FUERA DE RANGO", conclusionFuera],
      ["CUESTIONARIO ≠ 6", cuestionarioFuera], ["QUIZ ≠ 7", quizFuera],
      [`DOCTRINAL FUERA DE ${DOCTRINAL_MIN}-${DOCTRINAL_MAX}`, doctrinalFuera],
    ]
    for (const [titulo, lista] of grupos) {
      if (!lista.length) continue
      console.log(`\n  -- ${titulo} (${lista.length}) --`)
      for (const h of lista) console.log(`    ${h.lessonId}: ${h.problema}`)
    }
  }
}

function main() {
  const args = process.argv.slice(2)
  const detalle = args.includes("--detalle")
  const todos = args.includes("--todos")
  const ids = todos ? categories.map((c) => c.id) : args.filter((a) => !a.startsWith("--"))

  if (!ids.length) {
    console.error("Uso: npx tsx scripts/audit-completitud.ts <categoria> [...] [--detalle]")
    console.error("     npx tsx scripts/audit-completitud.ts --todos [--detalle]")
    process.exit(1)
  }

  for (const id of ids) auditarCategoria(id, detalle)
}

main()
