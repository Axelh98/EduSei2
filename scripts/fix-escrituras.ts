// scripts/fix-escrituras.ts
//
// Aplica las correcciones que scripts/audit-escrituras.ts marcó como
// AUTO_CORREGIBLE: el texto real está en el mismo capítulo (en el propio
// ancla o a lo sumo 2 párrafos de distancia) con alta confianza, así que
// restituirlo es mecánico y no requiere criterio humano.
//
// Los casos REVISAR_MANUAL (texto no encontrado en el capítulo, o
// posiblemente la referencia equivocada) NO se tocan: se listan al final
// para decidirlos a mano. Ver docs/auditorias/COMO-AUDITAR-ESCRITURAS.md.
//
//   npx tsx scripts/fix-escrituras.ts doctrina-y-convenios-1            # simulación
//   npx tsx scripts/fix-escrituras.ts doctrina-y-convenios-1 --write    # aplica
//
// Requiere haber corrido antes audit-escrituras.ts para ese curso (lee
// .cache/escrituras/<categoria>.json; no vuelve a bajar nada de internet).

import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"
import type { ResultadoCita } from "./audit-escrituras"
import { splitProse } from "../lib/content/schema"

const CONTENT_DIR = join(process.cwd(), "lib", "content")
const CACHE_DIR = join(process.cwd(), ".cache", "escrituras")

function aplicar(resultado: ResultadoCita, escribir: boolean): boolean {
  const path = join(CONTENT_DIR, resultado.categoryId, `${resultado.lessonId}.json`)
  const raw = JSON.parse(readFileSync(path, "utf8"))
  const seccion = raw.secciones?.[resultado.ruta.secIdx]
  if (!seccion) return false

  const nodo =
    resultado.ruta.citas !== undefined
      ? seccion.citas?.[resultado.ruta.citas]
      : seccion.bloques?.[resultado.ruta.bloque!]
  if (!nodo) return false

  const propuesta = resultado.propuesta!
  console.log(`\n${resultado.categoryId}/${resultado.lessonId} — ${resultado.referencia}`)
  if (propuesta.referencia !== resultado.referencia) {
    console.log(`  referencia: "${resultado.referencia}" → "${propuesta.referencia}"`)
  }
  if (propuesta.link !== resultado.link) {
    console.log(`  link: ${resultado.link}\n       → ${propuesta.link}`)
  }
  console.log(`  texto antes : ${resultado.texto}`)
  console.log(`  texto real  : ${propuesta.texto}  (recall ${propuesta.recall})`)

  if (escribir) {
    nodo.referencia = propuesta.referencia
    nodo.texto = splitProse(propuesta.texto)
    nodo.link = propuesta.link
    writeFileSync(path, JSON.stringify(raw, null, 2) + "\n", "utf8")
  }
  return true
}

function main() {
  const args = process.argv.slice(2)
  const escribir = args.includes("--write")
  const categoryId = args.find((a) => !a.startsWith("--"))

  if (!categoryId) {
    console.error("Uso: npx tsx scripts/fix-escrituras.ts <categoria> [--write]")
    process.exit(1)
  }

  const reportePath = join(CACHE_DIR, `${categoryId}.json`)
  if (!existsSync(reportePath)) {
    console.error(
      `No existe ${reportePath}. Corré primero:\n  npx tsx scripts/audit-escrituras.ts ${categoryId}`
    )
    process.exit(1)
  }

  const resultados: ResultadoCita[] = JSON.parse(readFileSync(reportePath, "utf8"))
  const autoCorregibles = resultados.filter((r) => r.estado === "AUTO_CORREGIBLE")
  const revisarManual = resultados.filter((r) => r.estado === "REVISAR_MANUAL")
  const sinCapitulo = resultados.filter((r) => r.estado === "SIN_CAPITULO")

  let aplicadas = 0
  for (const r of autoCorregibles) {
    if (aplicar(r, escribir)) aplicadas++
  }

  console.log(
    `\n${aplicadas} citas ${escribir ? "corregidas" : "por corregir (simulación)"} ` +
    `de ${autoCorregibles.length} auto-corregibles.`
  )
  if (!escribir && aplicadas) {
    console.log(`Para aplicarlo: npx tsx scripts/fix-escrituras.ts ${categoryId} --write`)
  }

  if (sinCapitulo.length) {
    console.log(`\n${sinCapitulo.length} citas sin capítulo descargado — correr audit-escrituras.ts de nuevo.`)
  }

  if (revisarManual.length) {
    console.log(`\n${revisarManual.length} citas necesitan revisión manual (no se tocaron):\n`)
    for (const r of revisarManual) {
      console.log(`  ${r.categoryId}/${r.lessonId} — ${r.referencia} (recall en ancla: ${r.recallAncla})`)
      console.log(`    guardado : ${r.texto}`)
      if (r.candidatos?.length) {
        const c = r.candidatos[0]
        console.log(`    mejor candidato en el capítulo (recall ${Math.round(c.recall * 100) / 100}): ${c.texto}`)
      } else {
        console.log(`    no se encontró nada parecido en el capítulo — puede ser la referencia equivocada`)
      }
    }
    console.log(
      "\nPara estos, buscar en el manual oficial de la lección (chapterUrl del _manifest.json)" +
      "\ncuál es la cita real que usa, o releer el capítulo entero: ver el método en" +
      "\ndocs/auditorias/COMO-AUDITAR-ESCRITURAS.md, sección 4."
    )
  }
}

main()
