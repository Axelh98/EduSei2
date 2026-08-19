// scripts/migration/audit-content.ts
//
// Compara, curso por curso, la lección "base" (la que está en las semanas o
// en la lista flat de lib/quiz-data.ts) contra la lección "de contenido"
// (la de los archivos de resumen declarados en lib/content/sources.ts).
//
// Sirve para saber, antes de migrar nada, qué fuente es la autoritativa
// para cada campo y si hay lecciones huérfanas en cualquiera de los lados.
//
//   npx tsx scripts/migration/audit-content.ts

import { categories, isFlatCategory } from "../../lib/quiz-data"
import { LEGACY_SOURCES } from "../../lib/content/sources"
import type { Lesson } from "../../lib/types"

function baseLessons(categoryId: string): Lesson[] {
  const cat = categories.find((c) => c.id === categoryId)
  if (!cat) return []
  if (isFlatCategory(cat)) return cat.lessons as unknown as Lesson[]
  return cat.weeks.flatMap((w) => w.lessons)
}

function summarize(qs: unknown[] | undefined): string {
  return JSON.stringify(qs ?? [])
}

async function main() {
  const rows: string[] = []

  for (const categoryId of Object.keys(LEGACY_SOURCES)) {
    const base = baseLessons(categoryId)
    const content = await LEGACY_SOURCES[categoryId]()

    const baseIds = new Set(base.map((l) => l.id))
    const contentIds = new Set(content.map((l) => l.id))

    const soloBase = [...baseIds].filter((id) => !contentIds.has(id))
    const soloContenido = [...contentIds].filter((id) => !baseIds.has(id))

    let questionsIguales = 0
    let questionsDistintas = 0
    let contenidoSinQuestions = 0
    const ejemplos: string[] = []

    for (const c of content) {
      const b = base.find((l) => l.id === c.id)
      if (!b) continue
      if (!c.questions?.length) { contenidoSinQuestions++; continue }
      if (summarize(b.questions) === summarize(c.questions)) questionsIguales++
      else {
        questionsDistintas++
        if (ejemplos.length < 3) {
          ejemplos.push(`${c.id} (base:${b.questions?.length ?? 0} vs contenido:${c.questions.length})`)
        }
      }
    }

    const sinSecciones = content.filter((l) => !(l.secciones?.length)).length

    rows.push(
      [
        `\n■ ${categoryId}`,
        `   lecciones base:      ${base.length}`,
        `   lecciones contenido: ${content.length}`,
        `   solo en base:        ${soloBase.length}${soloBase.length ? "  → " + soloBase.slice(0, 5).join(", ") + (soloBase.length > 5 ? " …" : "") : ""}`,
        `   solo en contenido:   ${soloContenido.length}${soloContenido.length ? "  → " + soloContenido.slice(0, 5).join(", ") + (soloContenido.length > 5 ? " …" : "") : ""}`,
        `   contenido sin secciones: ${sinSecciones}`,
        `   questions iguales:   ${questionsIguales}`,
        `   questions distintas: ${questionsDistintas}${ejemplos.length ? "  → " + ejemplos.join(", ") : ""}`,
        `   contenido sin questions: ${contenidoSinQuestions}`,
      ].join("\n")
    )
  }

  console.log(rows.join("\n"))

  // Categorías sin ninguna fuente de contenido declarada.
  const sinFuente = categories
    .map((c) => c.id)
    .filter((id) => !(id in LEGACY_SOURCES))
  console.log(`\n■ categorías sin contenido de repaso: ${sinFuente.join(", ") || "(ninguna)"}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
