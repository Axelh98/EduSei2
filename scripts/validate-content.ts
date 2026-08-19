// scripts/validate-content.ts
//
// Validación permanente del contenido de lib/content/. A diferencia de
// verify-content.ts (que compara contra lib/data/ y solo tenía sentido
// durante la migración), esta se puede correr siempre: revisa que los
// archivos estén bien formados y que el catálogo, los manifiestos y los
// JSON de lección estén de acuerdo entre sí.
//
//   npx tsx scripts/validate-content.ts
//
// Conviene correrla después de editar lecciones a mano.

import { readFileSync, existsSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { categories } from "../lib/content/registry"
import { isFlatCategory } from "../lib/types"
import { CONTENT_MAP } from "../lib/content/generated-map"
import { lessonContentFileSchema, courseManifestSchema } from "../lib/content/schema"
import { normalizeLessonFile } from "../lib/content/normalize"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

function main() {
  const problems: string[] = []
  let lecciones = 0
  let conRepaso = 0
  let preguntas = 0

  for (const cat of categories) {
    const dir = join(CONTENT_DIR, cat.id)
    if (!existsSync(dir)) {
      problems.push(`${cat.id}: falta la carpeta lib/content/${cat.id}/`)
      continue
    }

    // 1. El manifiesto cumple el esquema.
    const manifestPath = join(dir, "_manifest.json")
    if (!existsSync(manifestPath)) {
      problems.push(`${cat.id}: falta _manifest.json`)
      continue
    }
    const manifestRaw = JSON.parse(readFileSync(manifestPath, "utf8"))
    const manifestParsed = courseManifestSchema.safeParse(manifestRaw)
    if (!manifestParsed.success) {
      problems.push(`${cat.id}/_manifest.json: ${manifestParsed.error.issues[0]?.message}`)
    }

    // 2. Cada lección del catálogo tiene su archivo y su entrada en el mapa.
    const lessonsDelCatalogo = isFlatCategory(cat)
      ? cat.lessons
      : cat.weeks.flatMap((w) => w.lessons)

    for (const lesson of lessonsDelCatalogo) {
      const file = join(dir, `${lesson.id}.json`)
      if (!existsSync(file)) {
        problems.push(`${cat.id}/${lesson.id}.json: no existe`)
        continue
      }
      if (!CONTENT_MAP[cat.id]?.[lesson.id]) {
        problems.push(
          `${cat.id}/${lesson.id}: falta en generated-map.ts ` +
          `(correr: npx tsx scripts/migrate-content.ts)`
        )
      }
    }

    // 3. Cada archivo JSON es válido y coincide con lo que dice el manifiesto.
    const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json")
    const metaById = new Map<string, any>(
      (manifestRaw.layoutType === "flat"
        ? manifestRaw.lessons ?? []
        : (manifestRaw.weeks ?? []).flatMap((w: any) => w.lessons ?? [])
      ).map((l: any) => [l.id, l])
    )

    for (const file of files) {
      const id = file.replace(/\.json$/, "")
      const raw = JSON.parse(readFileSync(join(dir, file), "utf8"))

      const parsed = lessonContentFileSchema.safeParse(raw)
      if (!parsed.success) {
        const issue = parsed.error.issues[0]
        problems.push(`${cat.id}/${file}: ${issue?.path.join(".")} — ${issue?.message}`)
        continue
      }
      if (raw.id !== id) {
        problems.push(`${cat.id}/${file}: el campo id dice "${raw.id}"`)
      }

      const normalized = normalizeLessonFile(raw)
      lecciones++
      preguntas += normalized.questions.length
      if (normalized.secciones.length) conRepaso++

      const meta = metaById.get(id)
      if (meta) {
        if ((meta.questionCount ?? 0) !== normalized.questions.length) {
          problems.push(
            `${cat.id}/${id}: el manifiesto dice ${meta.questionCount} preguntas ` +
            `y el archivo tiene ${normalized.questions.length}`
          )
        }
        if ((meta.hasStudy ?? false) !== normalized.secciones.length > 0) {
          problems.push(`${cat.id}/${id}: hasStudy del manifiesto no coincide con el archivo`)
        }
      }
    }
  }

  console.log(
    `${lecciones} lecciones · ${conRepaso} con material de repaso · ${preguntas} preguntas`
  )

  if (problems.length) {
    console.log(`\n${problems.length} problemas:`)
    problems.slice(0, 25).forEach((p) => console.log(`  ${p}`))
    if (problems.length > 25) console.log(`  … y ${problems.length - 25} más`)
    process.exit(1)
  }

  console.log("\nContenido válido.")
}

main()
