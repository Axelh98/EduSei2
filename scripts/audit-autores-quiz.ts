/**
 * audit-autores-quiz.ts — cruce mecánico entre los líderes nombrados en
 * `cuestionario` / `questions` y el autor real de la sección `enseñanza`.
 *
 * Detecta el defecto #12 de docs/auditorias/CICLO-GENERACION-AUDITORIA.md: una
 * pregunta que atribuye una enseñanza a un líder que no aparece en la lección.
 * Aparece sobre todo después de una auditoría de citas de líder que cambió
 * autores: se corrige `enseñanza` y las preguntas siguen citando al autor viejo
 * —muchas veces el que se determinó fabricado—.
 *
 * Uso:
 *   npx tsx scripts/audit-autores-quiz.ts <categoria> [<categoria>...]
 *   npx tsx scripts/audit-autores-quiz.ts --todos
 */
import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"

const CONTENT = join(process.cwd(), "lib", "content")

/** Apellidos de Autoridades Generales que suelen citarse en este corpus. */
const APELLIDOS = [
  "Nelson", "Oaks", "Eyring", "Holland", "Uchtdorf", "Bednar", "Cook",
  "Christofferson", "Andersen", "Rasband", "Stevenson", "Renlund", "Gong",
  "Soares", "Ballard", "Scott", "Hales", "Monson", "Hinckley", "Benson",
  "Maxwell", "Wirthlin", "Faust", "Packer", "Perry", "Callister", "Robbins",
  "Klebingat", "Caussé", "Gilbert", "Grow", "Cornish", "Ashton", "McConkie",
]

/**
 * Apellidos que también son de personajes históricos del propio relato de
 * Doctrina y Convenios, así que aparecer en una pregunta no implica que se les
 * esté atribuyendo una enseñanza (Sidney Gilbert, José Smith, Brigham Young).
 */
const AMBIGUOS = new Set(["Gilbert", "Smith", "Young"])

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")

type Hallazgo = {
  categoria: string
  leccion: string
  donde: string
  apellido: string
  ensenanza: string
  fragmento: string
}

function auditar(categoria: string): Hallazgo[] {
  const dir = join(CONTENT, categoria)
  if (!existsSync(dir)) {
    console.error(`  categoría inexistente: ${categoria}`)
    return []
  }
  const hallazgos: Hallazgo[] = []

  for (const archivo of readdirSync(dir)) {
    if (!archivo.endsWith(".json") || archivo.startsWith("_")) continue
    const leccion = archivo.replace(/\.json$/, "")
    const json = JSON.parse(readFileSync(join(dir, archivo), "utf8"))
    const secciones = json.secciones ?? []

    const autores = secciones
      .filter((s: any) => s.tipo === "enseñanza")
      .map((s: any) => s.autor ?? "")
      .join(" ")
    const autoresNorm = norm(autores)

    const textos: [string, string][] = []
    for (const s of secciones) {
      if (s.tipo === "cuestionario") {
        s.preguntas.forEach((p: string, i: number) => textos.push([`cuestionario#${i + 1}`, p]))
      }
    }
    for (const q of json.questions ?? []) {
      textos.push([`quiz#${q.id}`, q.question])
      ;(q.options ?? []).forEach((o: string, i: number) =>
        textos.push([`quiz#${q.id}.opcion${i}`, o]),
      )
    }

    for (const [donde, texto] of textos) {
      for (const apellido of APELLIDOS) {
        if (AMBIGUOS.has(apellido)) continue
        if (!new RegExp(`\\b${apellido}\\b`).test(texto)) continue
        if (autoresNorm.includes(norm(apellido))) continue
        hallazgos.push({
          categoria,
          leccion,
          donde,
          apellido,
          ensenanza: autores || "(la lección no tiene sección enseñanza)",
          fragmento: texto.slice(0, 120),
        })
      }
    }
  }
  return hallazgos
}

const args = process.argv.slice(2)
const categorias =
  args[0] === "--todos"
    ? readdirSync(CONTENT).filter((d) => existsSync(join(CONTENT, d, "_manifest.json")))
    : args

if (categorias.length === 0) {
  console.error("uso: npx tsx scripts/audit-autores-quiz.ts <categoria>... | --todos")
  process.exit(1)
}

let total = 0
for (const categoria of categorias) {
  const hallazgos = auditar(categoria)
  total += hallazgos.length
  console.log(`\n=== ${categoria} — ${hallazgos.length} atribuciones sin respaldo ===`)
  for (const h of hallazgos) {
    console.log(`  ${h.leccion} ${h.donde}`)
    console.log(`     nombra a ${h.apellido} · enseñanza de la lección: ${h.ensenanza}`)
    console.log(`     "${h.fragmento}"`)
  }
}
console.log(`\nTOTAL: ${total}`)
console.log(
  total > 0
    ? "Reescribí cada pregunta anclándola al autor y al texto que la lección sí tiene.\nVer docs/auditorias/CICLO-GENERACION-AUDITORIA.md §1, filas 6 y 12."
    : "Sin atribuciones sin respaldo.",
)
