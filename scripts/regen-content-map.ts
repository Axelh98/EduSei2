// scripts/regen-content-map.ts
//
// Regenera lib/content/generated-map.ts a partir de lo que hay en disco.
//
// Antes esto lo hacia scripts/migration/migrate-content.ts, pero ese script
// importa scripts/migration/original-data.ts, que a su vez depende de los
// lib/data/*.ts de antes de la migracion: ya no existen, asi que el script
// muere con MODULE_NOT_FOUND antes de llegar a escribir el mapa. Esta es la
// parte que sigue haciendo falta (la unica que se usa despues de la
// migracion), extraida y funcionando.
//
// Correr despues de agregar o borrar cualquier lib/content/<curso>/<id>.json.

import { readdirSync, existsSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const CONTENT_DIR = join(process.cwd(), "lib", "content")

const dirs = readdirSync(CONTENT_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

const lines: string[] = [
  "// lib/content/generated-map.ts",
  "//",
  "// ARCHIVO GENERADO - no editar a mano.",
  "// Lo regenera: npx tsx scripts/regen-content-map.ts",
  "//",
  "// Un import() por leccion para que el bundler pueda cargarlas de a una.",
  "",
  "type JsonLoader = () => Promise<{ default: any }>",
  "",
  "export const CONTENT_MAP: Record<string, Record<string, JsonLoader>> = {",
]

for (const dir of dirs) {
  // Los archivos con guion bajo adelante no son lecciones: _manifest.json y
  // _auditoria-snapshot-original.json (un array, no un objeto de leccion).
  const lessons = readdirSync(join(CONTENT_DIR, dir))
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
    .sort()
  if (!lessons.length) continue
  lines.push("  " + JSON.stringify(dir) + ": {")
  for (const file of lessons) {
    const id = file.replace(/\.json$/, "")
    lines.push("    " + JSON.stringify(id) + ': () => import("./' + dir + "/" + file + '"),')
  }
  lines.push("  },")
}

lines.push("}", "")
lines.push("export const MANIFEST_MAP: Record<string, JsonLoader> = {")
for (const dir of dirs) {
  if (!existsSync(join(CONTENT_DIR, dir, "_manifest.json"))) continue
  lines.push("  " + JSON.stringify(dir) + ': () => import("./' + dir + '/_manifest.json"),')
}
lines.push("}", "")

writeFileSync(join(CONTENT_DIR, "generated-map.ts"), lines.join("\n"), "utf8")

const total = lines.filter((l) => l.includes("() => import(")).length
console.log(`OK lib/content/generated-map.ts regenerado - ${dirs.length} cursos, ${total} entradas`)
