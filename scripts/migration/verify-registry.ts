// scripts/migration/verify-registry.ts
//
// Compara el catálogo nuevo (lib/content/registry.ts, alimentado por los
// _manifest.json) contra los archivos .ts originales de lib/data/:
// mismas semanas, mismas lecciones, mismos títulos y mismos conteos de
// preguntas. Si esto pasa en verde, las pantallas que solo muestran
// metadatos siguen viendo exactamente lo mismo que antes.
//
//   npx tsx scripts/migration/verify-registry.ts

import { categories } from "../../lib/content/registry"
import { isFlatCategory } from "../../lib/types"
import type { Lesson } from "../../lib/types"

import { ORIGINAL_WEEKLY, ORIGINAL_FLAT } from "./original-data"

function check(cond: boolean, msg: string, diffs: string[]) {
  if (!cond) diffs.push(msg)
}

function compareLessons(orig: Lesson[], nuevo: Lesson[], where: string, diffs: string[]) {
  check(orig.length === nuevo.length, `${where}: ${orig.length} lecciones vs ${nuevo.length}`, diffs)
  const n = Math.min(orig.length, nuevo.length)
  for (let i = 0; i < n; i++) {
    const o = orig[i]
    const v = nuevo[i]
    check(o.id === v.id, `${where}[${i}]: id "${o.id}" vs "${v.id}"`, diffs)
    check(o.title === v.title, `${where}[${i}] ${o.id}: título distinto`, diffs)
    check(
      (o.description ?? "") === (v.description ?? ""),
      `${where}[${i}] ${o.id}: descripción distinta`,
      diffs
    )
    check(
      (o.chapterUrl ?? "") === (v.chapterUrl ?? ""),
      `${where}[${i}] ${o.id}: chapterUrl distinto`,
      diffs
    )
    check(
      (o.questions?.length ?? 0) === (v.questionCount ?? 0),
      `${where}[${i}] ${o.id}: ${o.questions?.length ?? 0} preguntas vs questionCount ${v.questionCount}`,
      diffs
    )
  }
}

function main() {
  let ok = true

  for (const cat of categories) {
    const diffs: string[] = []

    if (isFlatCategory(cat)) {
      const orig = ORIGINAL_FLAT[cat.id]
      if (!orig) { console.log(`?  ${cat.id}: sin original con que comparar`); continue }
      compareLessons(orig as Lesson[], cat.lessons as unknown as Lesson[], cat.id, diffs)
    } else {
      const orig = ORIGINAL_WEEKLY[cat.id]
      if (!orig) { console.log(`?  ${cat.id}: sin original con que comparar`); continue }
      check(orig.length === cat.weeks.length, `${cat.id}: ${orig.length} semanas vs ${cat.weeks.length}`, diffs)
      const n = Math.min(orig.length, cat.weeks.length)
      for (let i = 0; i < n; i++) {
        const ow = orig[i]
        const vw = cat.weeks[i]
        check(ow.id === vw.id, `${cat.id} semana ${i}: id ${ow.id} vs ${vw.id}`, diffs)
        check(ow.title === vw.title, `${cat.id} semana ${i}: título distinto`, diffs)
        check(ow.dateRange === vw.dateRange, `${cat.id} semana ${i}: dateRange distinto`, diffs)
        compareLessons(ow.lessons, vw.lessons, `${cat.id} s${ow.id}`, diffs)
      }
    }

    const totalLessons = isFlatCategory(cat)
      ? cat.lessons.length
      : cat.weeks.reduce((a, w) => a + w.lessons.length, 0)
    const totalQuestions = isFlatCategory(cat)
      ? cat.lessons.reduce((a, l) => a + (l.questionCount ?? 0), 0)
      : cat.weeks.reduce((a, w) => a + w.lessons.reduce((b, l) => b + (l.questionCount ?? 0), 0), 0)

    if (diffs.length) {
      ok = false
      console.log(`FALLA  ${cat.id}: ${diffs.length} diferencias`)
      diffs.slice(0, 10).forEach((d) => console.log(`         ${d}`))
      if (diffs.length > 10) console.log(`         … y ${diffs.length - 10} más`)
    } else {
      console.log(
        `OK     ${cat.id.padEnd(24)} ${String(totalLessons).padStart(4)} lecciones, ` +
        `${String(totalQuestions).padStart(5)} preguntas`
      )
    }
  }

  console.log(ok ? "\nEl catálogo coincide con los datos originales." : "\nHay diferencias.")
  process.exit(ok ? 0 : 1)
}

main()
