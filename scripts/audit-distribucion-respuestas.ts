/**
 * audit-distribucion-respuestas.ts — mide (y opcionalmente corrige) el sesgo de
 * posición de la respuesta correcta en los quizzes.
 *
 * El problema: si la opción correcta cae casi siempre en la misma posición, el
 * alumno puede acertar sin haber entendido nada. Medido el 1-sep-2026 sobre el
 * corpus, `antiguo-testamento-2` tenía el 96 % de sus respuestas en la posición 1:
 * responder siempre "B" aprobaba el curso entero.
 *
 * La corrección es mecánica y segura: se rota el array de `options` para llevar la
 * correcta a la posición deseada y se actualiza `correctAnswer`. No cambia ningún
 * texto, así que no puede alterar el sentido de una pregunta.
 *
 * Uso:
 *   npx tsx scripts/audit-distribucion-respuestas.ts <categoria>...   # solo mide
 *   npx tsx scripts/audit-distribucion-respuestas.ts --todos
 *   npx tsx scripts/audit-distribucion-respuestas.ts <categoria> --write   # corrige
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"

const CONTENT = join(process.cwd(), "lib", "content")

/** Un quiz de 4 opciones bien repartido tendría ~25 % en cada posición. */
const IDEAL = 0.25
/** Por encima de este umbral en una sola posición, el quiz es adivinable. */
const UMBRAL_ALERTA = 0.4

type Pregunta = { id: number; question: string; options: string[]; correctAnswer: number }

function lecciones(categoria: string): string[] {
  const dir = join(CONTENT, categoria)
  if (!existsSync(dir)) return []
  return readdirSync(dir).filter((f) => f.endsWith(".json") && !f.startsWith("_"))
}

/** Rota las opciones para que la correcta quede en `destino`. */
function rotar(q: Pregunta, destino: number): Pregunta {
  const n = q.options.length
  if (n === 0 || q.correctAnswer == null) return q
  const desplazamiento = ((q.correctAnswer - destino) % n + n) % n
  const options = q.options.map((_, i) => q.options[(i + desplazamiento) % n])
  return { ...q, options, correctAnswer: destino }
}

/**
 * Reparte las posiciones de una lección en ciclo 0,1,2,3 arrancando en un punto
 * que depende del nombre del archivo, para que no todas las lecciones queden con
 * el mismo patrón (un alumno podría aprenderse la secuencia).
 */
function destinos(cantidad: number, semilla: string, opciones: number): number[] {
  let h = 0
  for (const c of semilla) h = (h * 31 + c.charCodeAt(0)) >>> 0
  const inicio = h % opciones
  return Array.from({ length: cantidad }, (_, i) => (inicio + i) % opciones)
}

const args = process.argv.slice(2)
const write = args.includes("--write")
const categorias =
  args[0] === "--todos"
    ? readdirSync(CONTENT).filter((d) => existsSync(join(CONTENT, d, "_manifest.json")))
    : args.filter((a) => !a.startsWith("--"))

if (categorias.length === 0) {
  console.error("uso: npx tsx scripts/audit-distribucion-respuestas.ts <categoria>... [--write] | --todos")
  process.exit(1)
}

for (const categoria of categorias) {
  const conteo: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 }
  let total = 0
  let corregidas = 0

  for (const archivo of lecciones(categoria)) {
    const ruta = join(CONTENT, categoria, archivo)
    const json = JSON.parse(readFileSync(ruta, "utf8"))
    const preguntas: Pregunta[] = json.questions ?? []
    if (preguntas.length === 0) continue

    if (write) {
      const opciones = preguntas[0].options?.length ?? 4
      const objetivo = destinos(preguntas.length, archivo, opciones)
      json.questions = preguntas.map((q, i) => {
        if (!Array.isArray(q.options) || q.options.length !== opciones) return q
        if (q.correctAnswer === objetivo[i]) return q
        corregidas++
        return rotar(q, objetivo[i])
      })
      writeFileSync(ruta, JSON.stringify(json, null, 2) + "\n")
    }

    for (const q of json.questions ?? []) {
      if (q.correctAnswer == null) continue
      conteo[q.correctAnswer] = (conteo[q.correctAnswer] ?? 0) + 1
      total++
    }
  }

  if (total === 0) {
    console.log(`${categoria}: sin preguntas`)
    continue
  }

  const porcentajes = [0, 1, 2, 3].map((i) => (conteo[i] ?? 0) / total)
  const maximo = Math.max(...porcentajes)
  const alerta = maximo >= UMBRAL_ALERTA
  const resumen = porcentajes.map((p, i) => `${i}:${(p * 100).toFixed(0)}%`).join("  ")

  console.log(
    `${categoria.padEnd(24)} n=${String(total).padStart(4)}  ${resumen}` +
      (alerta
        ? `  ⚠ adivinable: respondiendo siempre la posición ${porcentajes.indexOf(maximo)} se acierta el ${(maximo * 100).toFixed(0)} %`
        : "  ✓"),
  )
  if (write) console.log(`   ${corregidas} preguntas rotadas (ideal por posición: ${(IDEAL * 100).toFixed(0)} %)`)
}

if (!write) {
  console.log("\nPara corregir: agregar --write. Solo rota el orden de las opciones; no toca el texto.")
}
