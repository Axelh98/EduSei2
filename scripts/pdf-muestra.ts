// scripts/pdf-muestra.ts
//
// Genera el PDF de una lección desde Node, sin navegador. Es la forma de
// mirar un cambio de diseño del PDF sin tener que abrir el sitio, exportar a
// mano y comparar de memoria.
//
//   npx tsx scripts/pdf-muestra.ts                                  → muestra.pdf
//   npx tsx scripts/pdf-muestra.ts salida.pdf                       → otro nombre
//   npx tsx scripts/pdf-muestra.ts salida.pdf libro-de-mormon-2 leccion-26-5
//
// Para inspeccionarlo sin abrirlo:  pdftotext -layout salida.pdf -

import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"
import { buildLessonPdf } from "../lib/pdf/lesson-pdf"
import { normalizeLessonFile } from "../lib/content/normalize"
import { getCategoryById } from "../lib/quiz-data"

const salida = process.argv[2] ?? "muestra.pdf"
const curso = process.argv[3] ?? "libro-de-mormon-2"
const leccionId = process.argv[4] ?? "leccion-33-5"

async function main() {
  const dir = join("lib", "content", curso)
  const archivo = join(dir, `${leccionId}.json`)
  if (!existsSync(archivo)) {
    console.error(`No existe ${archivo}`)
    process.exit(1)
  }

  // Se normaliza igual que la app: algunos cursos guardan el `contenido` como
  // array de párrafos y otros como string, y normalizeLessonFile es lo que
  // unifica las dos convenciones antes de que el contenido llegue a la vista.
  const leccion = normalizeLessonFile(JSON.parse(readFileSync(archivo, "utf8")))
  const manifest = JSON.parse(readFileSync(join(dir, "_manifest.json"), "utf8"))

  // Título y chapterUrl salen del manifiesto, igual que en la web.
  const todas = [
    ...(manifest.weeks ?? []).flatMap((w: any) => w.lessons),
    ...(manifest.lessons ?? []),
  ]
  const meta = todas.find((l: any) => l.id === leccionId)

  const pdf = await buildLessonPdf({
    // El nombre visible del curso, como lo pasa la app (category.name), no el id.
    categoryName: getCategoryById(curso)?.name ?? curso,
    lessonTitle: meta?.title ?? leccionId,
    secciones: leccion.secciones,
    studentName: "Nombre del Maestro",
    chapterUrl: meta?.chapterUrl,
    notes:
      "Nota de ejemplo para ver cómo cae la sección de notas: traer las ramitas " +
      "para la actividad del principio, una sola se rompe y un manojo no.",
  })

  writeFileSync(salida, Buffer.from(pdf.output("arraybuffer")))
  console.log(`${salida} — ${pdf.internal.getNumberOfPages()} páginas · ${curso}/${leccionId}`)
}

main()
