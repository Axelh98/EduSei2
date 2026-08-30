// scripts/audit-export.ts
//
// Vuelca el contenido de AulaSEI a Excel para auditarlo. Genera DOS archivos,
// porque son dos trabajos distintos:
//
//   AulaSEI-contenido-AAAA-MM-DD.xlsx   las 450 lecciones que TIENEN material
//                                        de repaso, más sus cuestionarios.
//                                        Es la auditoría de contenido.
//
//   AulaSEI-pendientes-AAAA-MM-DD.xlsx  las 264 lecciones SIN material, con los
//                                        cuestionarios que sí tienen. Es la
//                                        auditoría de lo que falta escribir.
//
// El corte es por lección, no por curso: una lección va al primer archivo si
// tiene contexto, escrituras, citas o conclusión; si no, va al segundo. Por eso
// Religión 225 aparece en los dos (5 lecciones y 23).
//
// Cada curso ocupa dos pestañas: la de lecciones y la de su cuestionario
// ("AT 1" y "AT 1 Quiz"), con una fila por pregunta.
//
//   npx tsx scripts/audit-export.ts                    # los dos archivos
//   npx tsx scripts/audit-export.ts religion-250       # un curso
//   npx tsx scripts/audit-export.ts --solo-contenido
//   npx tsx scripts/audit-export.ts --solo-pendientes
//   npx tsx scripts/audit-export.ts --out-dir ruta/
//   npx tsx scripts/audit-export.ts --max-lineas 40    # filas más altas
//
// Los Excel son de solo lectura para el contenido: el auditor marca la columna
// "Estado" y escribe en "Observaciones". Las correcciones se aplican después
// sobre los JSON de lib/content/.

import ExcelJS from "exceljs"
import { readFileSync, readdirSync, existsSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import { categories } from "../lib/content/registry"
import { isFlatCategory } from "../lib/types"
import { normalizeLessonFile } from "../lib/content/normalize"
import type { Category, Lesson, FlatLesson, Question, Seccion } from "../lib/types"

/** Los cursos `flat` usan FlatLesson, que solo difiere en el tipo de `type`. */
type LeccionCurso = Lesson | FlatLesson

const CONTENT_DIR = join(process.cwd(), "lib", "content")

/** Dominio de producción, para la columna "Link en el sitio". */
const SITIO =
  process.env.AUDIT_SITE_URL ?? "https://blue-pebble-02d85b40f.7.azurestaticapps.net"

/** Nombre de pestaña por curso: Excel corta en 31 caracteres. */
const NOMBRE_HOJA: Record<string, string> = {
  "antiguo-testamento-1": "AT 1",
  "antiguo-testamento-2": "AT 2",
  "libro-de-mormon-1": "LdM 1",
  "libro-de-mormon-2": "LdM 2",
  "nuevo-testamento": "NT",
  "doctrina-y-convenios-1": "DyC 1",
  "doctrina-y-convenios-2": "DyC 2",
  Bloques: "Bloques",
  "religion-250": "Rel 250",
  "religion-225": "Rel 225",
  "religion-301": "Rel 301",
  "religion-200": "Rel 200",
}

// ─── Paleta ───────────────────────────────────────────────────────────────────

const FUENTE = "Calibri"
const AZUL_OSCURO = "FF1F3864"
const AZUL_LINK = "FF0563C1"
const GRIS_BANDA = "FFF5F7FA"
const GRIS_BORDE = "FFD6DCE4"
const AMBAR_FONDO = "FFFFF2CC" // falta el link
const AMBAR_TEXTO = "FF7F4F00"
const ROJO_FONDO = "FFFDE9E7" // no se ve en el sitio / no tiene nada
const ROJO_TEXTO = "FF9C2314"
const VERDE_FONDO = "FFE2EFDA" // opción correcta del cuestionario
const VERDE_TEXTO = "FF375623"
const AMARILLO_AUDITOR = "FFFFFDE7" // columnas que completa el auditor

const BORDE_FINO: Partial<ExcelJS.Borders> = {
  top: { style: "thin", color: { argb: GRIS_BORDE } },
  left: { style: "thin", color: { argb: GRIS_BORDE } },
  bottom: { style: "thin", color: { argb: GRIS_BORDE } },
  right: { style: "thin", color: { argb: GRIS_BORDE } },
}

const ESTADOS = '"OK,Corregir,Falta,Revisar fuente"'

// ─── Modelo de una fila ───────────────────────────────────────────────────────

interface Escritura {
  referencia: string
  texto: string
  comentario?: string
  link?: string
}

interface CitaProfetica {
  autor: string
  fuente?: string
  texto: string
  link?: string
}

interface Fila {
  categoryId: string
  /** "Semana 3 · 17 al 23 de Marzo" o "Lección 5". */
  ubicacion: string
  lessonId: string
  titulo: string
  descripcion: string
  tipo: string
  contexto: string
  escrituras: Escritura[]
  citas: CitaProfetica[]
  conclusion: string
  preguntas: string[]
  doctrinales: string[]
  /** Las preguntas evaluativas del quiz. */
  questions: Question[]
  chapterUrl?: string
  /** false = el archivo existe pero ninguna pantalla lo muestra. */
  enElSitio: boolean
  /** Tiene contexto, escrituras, citas o conclusión. Decide a qué archivo va. */
  conMaterial: boolean
}

interface ResumenCurso {
  categoryId: string
  nombre: string
  hoja: string
  enElSitio: number
  conMaterial: number
  sinMaterial: number
  escrituras: number
  citas: number
  escriturasSinLink: number
  sinLinkManual: number
  soloArchivo: number
  idsSoloArchivo: string[]
  /** Preguntas de quiz, separadas según a qué archivo van. */
  quizConMaterial: number
  quizSinMaterial: number
  /** Lecciones sin material Y sin cuestionario: no tienen absolutamente nada. */
  sinNada: number
}

// ─── Desglose del contenido ───────────────────────────────────────────────────
//
// Conviven dos formatos y hay que llevarlos a las mismas columnas:
//
//   a) secciones sueltas   contexto → escrituras → enseñanza → conclusion →
//                          cuestionario                       (425 lecciones)
//   b) una sección resumen con bloques: parrafo, escritura, cita, doctrinal,
//      reflexion                                              (25 lecciones)
//
// En (b) el patrón es siempre p·e…·c…·p·d·r: el PRIMER párrafo hace de
// contexto y los siguientes de conclusión, que es como se leen en la página.

function desglosar(secciones: Seccion[]): Pick<
  Fila,
  "contexto" | "escrituras" | "citas" | "conclusion" | "preguntas" | "doctrinales"
> {
  const contexto: string[] = []
  const conclusion: string[] = []
  const escrituras: Escritura[] = []
  const citas: CitaProfetica[] = []
  const preguntas: string[] = []
  const doctrinales: string[] = []

  for (const s of secciones) {
    switch (s.tipo) {
      case "contexto":
        if (s.contenido) contexto.push(s.contenido)
        break

      case "escrituras":
        for (const c of s.citas ?? []) {
          escrituras.push({
            referencia: c.referencia,
            texto: c.texto,
            ...(c.link ? { link: c.link } : {}),
          })
        }
        break

      case "enseñanza":
        citas.push({
          autor: s.autor ?? "",
          ...(s.fuente ? { fuente: s.fuente } : {}),
          texto: s.texto ?? "",
          ...(s.link ? { link: s.link } : {}),
        })
        break

      case "conclusion":
        if (s.contenido) conclusion.push(s.contenido)
        break

      case "cuestionario":
        preguntas.push(...(s.preguntas ?? []))
        break

      case "resumen":
        for (const b of s.bloques ?? []) {
          switch (b.tipo) {
            case "parrafo":
              // El primero es el contexto; el resto cierra la lección.
              if (!contexto.length) contexto.push(b.texto)
              else conclusion.push(b.texto)
              break
            case "escritura":
              escrituras.push({
                referencia: b.referencia,
                texto: b.texto,
                ...(b.comentario ? { comentario: b.comentario } : {}),
                ...(b.link ? { link: b.link } : {}),
              })
              break
            case "cita":
              citas.push({
                autor: b.autor,
                ...(b.fuente ? { fuente: b.fuente } : {}),
                texto: b.texto,
                ...(b.link ? { link: b.link } : {}),
              })
              break
            case "doctrinal":
              doctrinales.push(...b.puntos)
              break
            case "reflexion":
              preguntas.push(...b.preguntas)
              break
          }
        }
        break
    }
  }

  return {
    contexto: contexto.join("\n\n"),
    conclusion: conclusion.join("\n\n"),
    escrituras,
    citas,
    preguntas,
    doctrinales,
  }
}

// ─── Lectura de un curso ──────────────────────────────────────────────────────

/** Dónde vive la lección dentro del curso, para la primera columna. */
function ubicacionDe(cat: Category, lesson: LeccionCurso, indice: number): string {
  if (isFlatCategory(cat)) {
    const unidad =
      lesson.unitTitle !== undefined
        ? `Unidad ${lesson.unitNumber ?? ""}`.trim() + ` · ${lesson.unitTitle}\n`
        : ""
    return unidad + `Lección ${indice + 1}`
  }
  const semana = cat.weeks.find((w) => w.lessons.some((l) => l.id === lesson.id))
  if (!semana) return ""
  return semana.dateRange ? `${semana.title}\n${semana.dateRange}` : semana.title
}

function leerCurso(cat: Category): { filas: Fila[]; resumen: ResumenCurso } {
  const dir = join(CONTENT_DIR, cat.id)
  const enManifiesto: LeccionCurso[] = isFlatCategory(cat)
    ? cat.lessons
    : cat.weeks.flatMap((w) => w.lessons)

  const porId = new Map<string, { lesson: LeccionCurso; ubicacion: string }>()
  enManifiesto.forEach((l, i) =>
    porId.set(l.id, { lesson: l, ubicacion: ubicacionDe(cat, l, i) })
  )

  const filas: Fila[] = []
  const idsSoloArchivo: string[] = []

  const archivos = existsSync(dir)
    ? readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "_manifest.json")
    : []

  for (const archivo of archivos) {
    const lessonId = archivo.replace(/\.json$/, "")
    const raw = JSON.parse(readFileSync(join(dir, archivo), "utf8"))
    const { secciones, questions } = normalizeLessonFile(raw)

    const meta = porId.get(lessonId)
    if (!meta) idsSoloArchivo.push(lessonId)

    filas.push({
      categoryId: cat.id,
      ubicacion: meta?.ubicacion ?? "SOLO ARCHIVO",
      lessonId,
      titulo: meta?.lesson.title ?? "",
      descripcion: meta?.lesson.description ?? "",
      tipo: meta?.lesson.type ?? "",
      ...(meta?.lesson.chapterUrl ? { chapterUrl: meta.lesson.chapterUrl } : {}),
      enElSitio: Boolean(meta),
      conMaterial: secciones.length > 0,
      questions,
      ...desglosar(secciones),
    })
  }

  // Orden del manifiesto (semana → lección); las que no están, al final.
  const orden = new Map(enManifiesto.map((l, i) => [l.id, i]))
  filas.sort(
    (a, b) =>
      (orden.get(a.lessonId) ?? Number.MAX_SAFE_INTEGER) -
        (orden.get(b.lessonId) ?? Number.MAX_SAFE_INTEGER) ||
      a.lessonId.localeCompare(b.lessonId)
  )

  const conMat = filas.filter((f) => f.conMaterial)
  const sinMat = filas.filter((f) => !f.conMaterial)

  const resumen: ResumenCurso = {
    categoryId: cat.id,
    nombre:
      cat.name + (!isFlatCategory(cat) && cat.semester ? ` — semestre ${cat.semester}` : ""),
    hoja: NOMBRE_HOJA[cat.id] ?? cat.id,
    enElSitio: enManifiesto.length,
    conMaterial: conMat.length,
    sinMaterial: sinMat.length,
    escrituras: conMat.reduce((a, f) => a + f.escrituras.length, 0),
    citas: conMat.reduce((a, f) => a + f.citas.length, 0),
    escriturasSinLink: conMat.reduce(
      (a, f) => a + f.escrituras.filter((e) => !e.link).length,
      0
    ),
    sinLinkManual: enManifiesto.filter((l) => !l.chapterUrl).length,
    soloArchivo: idsSoloArchivo.length,
    idsSoloArchivo,
    quizConMaterial: conMat.reduce((a, f) => a + f.questions.length, 0),
    quizSinMaterial: sinMat.reduce((a, f) => a + f.questions.length, 0),
    sinNada: sinMat.filter((f) => !f.questions.length).length,
  }

  return { filas, resumen }
}

// ─── Texto de cada celda ──────────────────────────────────────────────────────

function textoEscritura(e: Escritura): string {
  const partes = [e.referencia, `«${e.texto}»`]
  if (e.comentario) partes.push(`Comentario: ${e.comentario}`)
  return partes.join("\n")
}

function textoCita(c: CitaProfetica): string {
  const partes = [c.autor]
  if (c.fuente) partes.push(c.fuente)
  partes.push(`«${c.texto}»`)
  return partes.filter(Boolean).join("\n")
}

function textoLeccion(f: Fila): string {
  return [f.titulo, f.descripcion, f.lessonId].filter(Boolean).join("\n")
}

/** Título corto, para la primera columna de la hoja de cuestionario. */
function tituloCorto(f: Fila): string {
  return [f.titulo || f.lessonId, f.enElSitio ? "" : "SOLO ARCHIVO"]
    .filter(Boolean)
    .join("\n")
}

const TIPO_PREGUNTA: Record<string, string> = {
  multiple: "Opción múltiple",
  truefalse: "Verdadero / Falso",
  written: "Respuesta escrita",
}

// ─── Utilidades de hoja ───────────────────────────────────────────────────────

interface Columna<T> {
  encabezado: string
  ancho: number
  valor: (item: T) => string
  /** Devuelve el hipervínculo de la celda, si la columna lleva uno. */
  link?: (item: T) => string | undefined
  /** Marca en ámbar la celda cuando falta el link y hay contenido. */
  avisaSinLink?: boolean
  /** Columna que completa el auditor. */
  auditor?: boolean
  /** Pinta la celda de verde: es la opción correcta del cuestionario. */
  correcta?: (item: T) => boolean
  /** Pinta la celda de rojo: falta algo que debería estar. */
  alerta?: (item: T) => boolean
  alinearCentro?: boolean
}

/**
 * Alto de la fila. Excel no autoajusta filas con texto ajustado, así que se
 * estima cuántas líneas ocupa cada celda y se toma la más alta, con tope.
 */
function altoDeFila(valores: string[], anchos: number[], maxLineas: number): number {
  let lineas = 1
  valores.forEach((v, i) => {
    if (!v) return
    const util = Math.max(8, anchos[i] - 2)
    const n = v
      .split("\n")
      .reduce((acc, l) => acc + Math.max(1, Math.ceil(l.length / util)), 0)
    lineas = Math.max(lineas, n)
  })
  return Math.min(lineas, maxLineas) * 13.5
}

/** Título en la fila 1 y encabezados en la 2, con filtro y panel congelado. */
function encabezar<T>(
  ws: ExcelJS.Worksheet,
  titulo: string,
  cols: Columna<T>[],
  congelarColumnas: number
): void {
  ws.views = [{ state: "frozen", xSplit: congelarColumnas, ySplit: 2 }]
  ws.columns = cols.map((c) => ({ width: c.ancho }))

  const fila1 = ws.getRow(1)
  fila1.getCell(1).value = titulo
  fila1.getCell(1).font = {
    name: FUENTE,
    size: 14,
    bold: true,
    color: { argb: AZUL_OSCURO },
  }
  fila1.height = 24
  ws.mergeCells(1, 1, 1, cols.length)

  const cab = ws.getRow(2)
  cols.forEach((c, i) => {
    const cell = cab.getCell(i + 1)
    cell.value = c.encabezado
    cell.font = { name: FUENTE, size: 11, bold: true, color: { argb: "FFFFFFFF" } }
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: AZUL_OSCURO } }
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true }
    cell.border = BORDE_FINO
  })
  cab.height = 26

  ws.autoFilter = { from: { row: 2, column: 1 }, to: { row: 2, column: cols.length } }
}

/** Escribe las filas de datos con su formato. */
function volcar<T>(
  ws: ExcelJS.Worksheet,
  cols: Columna<T>[],
  items: T[],
  maxLineas: number
): void {
  const anchos = cols.map((c) => c.ancho)
  const colEstado = cols.findIndex((c) => c.encabezado === "Estado") + 1

  items.forEach((item, indice) => {
    const row = ws.getRow(indice + 3)
    const valores = cols.map((c) => c.valor(item))
    const banda = indice % 2 === 1

    cols.forEach((c, i) => {
      const cell = row.getCell(i + 1)
      const texto = valores[i]
      const link = c.link?.(item)

      if (link) {
        cell.value = { text: texto, hyperlink: link } as ExcelJS.CellHyperlinkValue
        cell.font = { name: FUENTE, size: 10, color: { argb: AZUL_LINK }, underline: true }
      } else {
        cell.value = texto || null
        cell.font = { name: FUENTE, size: 10 }
      }

      if (c.correcta?.(item)) {
        cell.font = { name: FUENTE, size: 10, bold: true, color: { argb: VERDE_TEXTO } }
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: VERDE_FONDO } }
      } else if (c.alerta?.(item)) {
        cell.font = { name: FUENTE, size: 10, bold: true, color: { argb: ROJO_TEXTO } }
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: ROJO_FONDO } }
      } else if (c.avisaSinLink && !link && texto) {
        // Falta un link donde debería haberlo: se ve de un vistazo.
        cell.font = { name: FUENTE, size: 10, color: { argb: AMBAR_TEXTO }, bold: true }
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: AMBAR_FONDO } }
      } else if (c.auditor) {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: AMARILLO_AUDITOR } }
      } else if (banda) {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GRIS_BANDA } }
      }

      cell.alignment = {
        vertical: "top",
        wrapText: true,
        ...(c.alinearCentro ? { horizontal: "center" } : {}),
      }
      cell.border = BORDE_FINO
    })

    if (colEstado > 0) {
      row.getCell(colEstado).dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [ESTADOS],
        showErrorMessage: false,
      }
    }

    row.height = altoDeFila(valores, anchos, maxLineas)
  })
}

/** Aviso a lo ancho de la fila 3 cuando una hoja no tiene datos. */
function hojaVacia(ws: ExcelJS.Worksheet, cols: number, mensaje: string): void {
  const aviso = ws.getRow(3)
  const cell = aviso.getCell(1)
  cell.value = mensaje
  cell.font = { name: FUENTE, size: 11, italic: true, color: { argb: ROJO_TEXTO } }
  cell.alignment = { vertical: "middle", wrapText: true }
  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: ROJO_FONDO } }
  ws.mergeCells(3, 1, 3, cols)
  aviso.height = 34
}

// ─── Hoja de lecciones (archivo de contenido) ─────────────────────────────────

const MAX_ESCRITURAS = 4
const MAX_CITAS = 2

function columnasDeLecciones(filas: Fila[]): Columna<Fila>[] {
  const cols: Columna<Fila>[] = [
    { encabezado: "Semana / Unidad", ancho: 16, valor: (f) => f.ubicacion },
    { encabezado: "Lección", ancho: 32, valor: textoLeccion },
    { encabezado: "Tipo", ancho: 18, valor: (f) => f.tipo },
    { encabezado: "Contexto", ancho: 62, valor: (f) => f.contexto },
  ]

  for (let i = 0; i < MAX_ESCRITURAS; i++) {
    cols.push({
      encabezado: `Escritura ${i + 1}`,
      ancho: 46,
      valor: (f) => (f.escrituras[i] ? textoEscritura(f.escrituras[i]) : ""),
      link: (f) => f.escrituras[i]?.link,
      avisaSinLink: true,
    })
  }

  for (let i = 0; i < MAX_CITAS; i++) {
    cols.push({
      encabezado: `Cita Profética ${i + 1}`,
      ancho: 50,
      valor: (f) => (f.citas[i] ? textoCita(f.citas[i]) : ""),
      link: (f) => f.citas[i]?.link,
      avisaSinLink: true,
    })
  }

  cols.push(
    { encabezado: "Conclusión", ancho: 52, valor: (f) => f.conclusion },
    {
      encabezado: "Preguntas Reflexivas",
      ancho: 52,
      valor: (f) => f.preguntas.map((p, i) => `${i + 1}. ${p}`).join("\n"),
    }
  )

  // Solo Rel-225 y Rel-301 traen puntos doctrinales.
  if (filas.some((f) => f.doctrinales.length)) {
    cols.push({
      encabezado: "Puntos Doctrinales",
      ancho: 44,
      valor: (f) => f.doctrinales.map((p) => `• ${p}`).join("\n"),
    })
  }

  cols.push(
    {
      encabezado: "Cuestionario",
      ancho: 12,
      valor: (f) => (f.questions.length ? `${f.questions.length} preguntas` : "sin quiz"),
      alerta: (f) => f.questions.length === 0,
      alinearCentro: true,
    },
    {
      encabezado: "Link Manual",
      ancho: 18,
      valor: (f) => (f.chapterUrl ? "Abrir manual ↗" : "(sin link al manual)"),
      link: (f) => f.chapterUrl,
      avisaSinLink: true,
    },
    {
      encabezado: "Link en el sitio",
      ancho: 18,
      valor: (f) => (f.enElSitio ? "Abrir en el sitio ↗" : "(no visible en el sitio)"),
      link: (f) =>
        f.enElSitio ? `${SITIO}/quiz/${f.categoryId}/${f.lessonId}/study` : undefined,
      avisaSinLink: true,
    },
    { encabezado: "Estado", ancho: 14, valor: () => "", auditor: true },
    { encabezado: "Observaciones", ancho: 38, valor: () => "", auditor: true }
  )

  return cols
}

// ─── Hoja de lecciones pendientes (archivo de pendientes) ─────────────────────

function columnasDePendientes(): Columna<Fila>[] {
  return [
    { encabezado: "Semana / Unidad", ancho: 16, valor: (f) => f.ubicacion },
    { encabezado: "Lección", ancho: 42, valor: textoLeccion },
    { encabezado: "Tipo", ancho: 20, valor: (f) => f.tipo || "(sin tipo)" },
    {
      encabezado: "Qué falta",
      ancho: 30,
      valor: (f) =>
        f.questions.length
          ? "Contexto, escrituras, citas proféticas, conclusión y preguntas reflexivas"
          : "TODO: no tiene material ni cuestionario",
      alerta: (f) => f.questions.length === 0,
    },
    {
      encabezado: "Cuestionario",
      ancho: 12,
      valor: (f) => (f.questions.length ? `${f.questions.length} preguntas` : "sin quiz"),
      alerta: (f) => f.questions.length === 0,
      alinearCentro: true,
    },
    {
      encabezado: "Link Manual",
      ancho: 18,
      valor: (f) => (f.chapterUrl ? "Abrir manual ↗" : "(sin link al manual)"),
      link: (f) => f.chapterUrl,
      avisaSinLink: true,
    },
    {
      encabezado: "Link en el sitio",
      ancho: 18,
      valor: (f) => (f.enElSitio ? "Abrir el quiz ↗" : "(no visible en el sitio)"),
      link: (f) => (f.enElSitio ? `${SITIO}/quiz/${f.categoryId}/${f.lessonId}` : undefined),
      avisaSinLink: true,
    },
    { encabezado: "Estado", ancho: 14, valor: () => "", auditor: true },
    { encabezado: "Observaciones", ancho: 40, valor: () => "", auditor: true },
  ]
}

// ─── Hoja de cuestionario ─────────────────────────────────────────────────────

/** Una pregunta con la lección de la que viene. */
interface FilaQuiz {
  fila: Fila
  q: Question
  n: number
}

const MAX_OPCIONES = 4

function columnasDeQuiz(items: FilaQuiz[]): Columna<FilaQuiz>[] {
  const cols: Columna<FilaQuiz>[] = [
    { encabezado: "Lección", ancho: 30, valor: (x) => tituloCorto(x.fila) },
    { encabezado: "N°", ancho: 5, valor: (x) => String(x.n), alinearCentro: true },
    { encabezado: "Pregunta", ancho: 55, valor: (x) => x.q.question },
    {
      encabezado: "Tipo",
      ancho: 14,
      valor: (x) => TIPO_PREGUNTA[x.q.type ?? ""] ?? "Opción múltiple",
    },
  ]

  for (let i = 0; i < MAX_OPCIONES; i++) {
    cols.push({
      encabezado: `Opción ${i + 1}`,
      ancho: 32,
      valor: (x) => x.q.options[i] ?? "",
      // La correcta va en verde: se audita de un vistazo.
      correcta: (x) => x.q.correctAnswer === i && x.q.options[i] !== undefined,
    })
  }

  cols.push({
    encabezado: "Respuesta correcta",
    ancho: 34,
    valor: (x) => {
      const texto = x.q.options[x.q.correctAnswer]
      return texto ? `Opción ${x.q.correctAnswer + 1} — ${texto}` : "SIN RESPUESTA VÁLIDA"
    },
    alerta: (x) => x.q.options[x.q.correctAnswer] === undefined,
  })

  // Referencia y explicación existen en pocos cursos: la columna solo aparece
  // donde hay algo que mostrar.
  if (items.some((x) => x.q.reference)) {
    cols.push({ encabezado: "Referencia", ancho: 20, valor: (x) => x.q.reference ?? "" })
  }
  if (items.some((x) => x.q.explanation)) {
    cols.push({ encabezado: "Explicación", ancho: 44, valor: (x) => x.q.explanation ?? "" })
  }

  cols.push(
    { encabezado: "Estado", ancho: 14, valor: () => "", auditor: true },
    { encabezado: "Observaciones", ancho: 36, valor: () => "", auditor: true }
  )

  return cols
}

function aFilasQuiz(filas: Fila[]): FilaQuiz[] {
  return filas.flatMap((fila) => fila.questions.map((q, i) => ({ fila, q, n: i + 1 })))
}

// ─── Hojas RESUMEN ────────────────────────────────────────────────────────────

type ColResumen = readonly [string, number]

/**
 * Tabla del resumen: título, subtítulo, encabezados, filas y totales.
 * Devuelve la fila donde puede empezar el bloque de notas.
 */
function tablaResumen(
  ws: ExcelJS.Worksheet,
  titulo: string,
  subtitulo: string,
  columnas: readonly ColResumen[],
  filas: (string | number)[][],
  totales: (string | number)[],
  /** Índices (0-based) donde un valor > 0 señala un hueco. */
  columnasHueco: number[],
  /** Índices donde un valor === 0 es lo que hay que marcar. */
  columnasCero: number[] = []
): number {
  ws.views = [{ state: "frozen", ySplit: 4 }]
  ws.columns = columnas.map(([, w]) => ({ width: w }))

  ws.getCell("A1").value = titulo
  ws.getCell("A1").font = { name: FUENTE, size: 16, bold: true, color: { argb: AZUL_OSCURO } }
  ws.getRow(1).height = 26

  ws.getCell("A2").value = subtitulo
  ws.getCell("A2").font = { name: FUENTE, size: 10, italic: true, color: { argb: "FF666666" } }

  const cab = ws.getRow(4)
  columnas.forEach(([nombre], i) => {
    const cell = cab.getCell(i + 1)
    cell.value = nombre
    cell.font = { name: FUENTE, size: 11, bold: true, color: { argb: "FFFFFFFF" } }
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: AZUL_OSCURO } }
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true }
    cell.border = BORDE_FINO
  })
  cab.height = 32

  filas.forEach((valores, indice) => {
    const row = ws.getRow(indice + 5)
    valores.forEach((v, i) => {
      const cell = row.getCell(i + 1)
      cell.value = v
      cell.font = { name: FUENTE, size: 10 }
      cell.alignment = { vertical: "middle", horizontal: i <= 1 ? "left" : "center" }
      cell.border = BORDE_FINO
      if (indice % 2 === 1) {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GRIS_BANDA } }
      }
      if (columnasHueco.includes(i) && Number(v) > 0) {
        cell.font = { name: FUENTE, size: 10, bold: true, color: { argb: AMBAR_TEXTO } }
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: AMBAR_FONDO } }
      }
      if (columnasCero.includes(i) && Number(v) === 0) {
        cell.font = { name: FUENTE, size: 10, bold: true, color: { argb: ROJO_TEXTO } }
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: ROJO_FONDO } }
      }
    })
    row.height = 18
  })

  const filaTotal = ws.getRow(filas.length + 5)
  totales.forEach((v, i) => {
    const cell = filaTotal.getCell(i + 1)
    cell.value = v
    cell.font = { name: FUENTE, size: 11, bold: true, color: { argb: AZUL_OSCURO } }
    cell.alignment = { vertical: "middle", horizontal: i <= 1 ? "left" : "center" }
    cell.border = { ...BORDE_FINO, top: { style: "medium", color: { argb: AZUL_OSCURO } } }
  })

  return filas.length + 8
}

/** Títulos y notas debajo de la tabla del resumen. */
function bloqueDeNotas(
  ws: ExcelJS.Worksheet,
  columnas: readonly ColResumen[],
  desde: number
) {
  let f = desde
  const anchoNota = columnas.reduce((a, [, w]) => a + w, 0) - 4

  return {
    titulo(t: string) {
      ws.getCell(f, 1).value = t
      ws.getCell(f, 1).font = {
        name: FUENTE,
        size: 12,
        bold: true,
        color: { argb: AZUL_OSCURO },
      }
      f += 1
    },
    nota(t: string) {
      ws.getCell(f, 1).value = t
      ws.getCell(f, 1).font = { name: FUENTE, size: 10 }
      ws.getCell(f, 1).alignment = { vertical: "top", wrapText: true }
      ws.mergeCells(f, 1, f, columnas.length)
      ws.getRow(f).height = Math.max(1, Math.ceil(t.length / anchoNota)) * 14
      f += 1
    },
    espacio() {
      f += 1
    },
  }
}

const COLS_CONTENIDO = [
  ["Curso", 34],
  ["Hoja", 10],
  ["Lecciones con material", 13],
  ["Escrituras", 11],
  ["Citas proféticas", 12],
  ["Preguntas de quiz", 12],
  ["Escrituras sin link", 13],
  ["Sin link al manual", 13],
  ["Solo archivo", 12],
] as const

function resumenContenido(wb: ExcelJS.Workbook, rs: ResumenCurso[]): void {
  const ws = wb.addWorksheet("RESUMEN")
  const suma = (k: keyof ResumenCurso) => rs.reduce((a, r) => a + (r[k] as number), 0)

  const desde = tablaResumen(
    ws,
    "AulaSEI — Auditoría de contenido",
    `Generado el ${new Date().toLocaleDateString("es-AR")} · ` +
      `${suma("conMaterial")} lecciones con material · ${suma("escrituras")} escrituras · ` +
      `${suma("citas")} citas proféticas · ${suma("quizConMaterial")} preguntas de quiz`,
    COLS_CONTENIDO,
    rs.map((r) => [
      r.nombre,
      r.hoja,
      r.conMaterial,
      r.escrituras,
      r.citas,
      r.quizConMaterial,
      r.escriturasSinLink,
      r.sinLinkManual,
      r.soloArchivo,
    ]),
    [
      "TOTAL",
      "",
      suma("conMaterial"),
      suma("escrituras"),
      suma("citas"),
      suma("quizConMaterial"),
      suma("escriturasSinLink"),
      suma("sinLinkManual"),
      suma("soloArchivo"),
    ],
    [6, 7, 8]
  )

  const { titulo, nota, espacio } = bloqueDeNotas(ws, COLS_CONTENIDO, desde)

  titulo("Qué mira este archivo")
  nota(
    "Cada curso ocupa dos pestañas: la de lecciones (una fila por lección) y la de su " +
      "cuestionario, «… Quiz» (una fila por pregunta, con la opción correcta en verde)."
  )
  nota(
    "Solo están las lecciones que YA tienen material escrito. Las que faltan van en el otro " +
      "archivo, AulaSEI-pendientes-AAAA-MM-DD.xlsx."
  )
  nota(
    "Cada escritura y cada cita profética es un hipervínculo: se hace clic en la celda y se abre " +
      "la fuente oficial para contrastarla. Si la celda está en ámbar, ese link falta."
  )
  nota(
    "El auditor completa las dos últimas columnas de cada hoja: «Estado» (desplegable: OK / " +
      "Corregir / Falta / Revisar fuente) y «Observaciones» (texto libre)."
  )
  espacio()

  titulo("Cosas a mirar")
  const sinLink = rs.filter((r) => r.escriturasSinLink > 0)
  if (sinLink.length) {
    nota(
      "Escrituras sin link a la fuente: " +
        sinLink.map((r) => `${r.nombre} (${r.escriturasSinLink})`).join(" · ") +
        ". En las hojas están marcadas en ámbar."
    )
  }
  const sinManual = rs.filter((r) => r.sinLinkManual > 0)
  if (sinManual.length) {
    nota(
      "Lecciones del curso sin link al manual oficial: " +
        sinManual.map((r) => `${r.nombre} (${r.sinLinkManual})`).join(" · ")
    )
  }
  for (const r of rs.filter((x) => x.soloArchivo > 0)) {
    nota(
      `${r.nombre}: ${r.soloArchivo} lecciones tienen material completo pero no están en el ` +
        `catálogo del curso, así que ninguna pantalla del sitio las muestra. En la hoja ${r.hoja} ` +
        `figuran con «SOLO ARCHIVO» en la primera columna.`
    )
    nota(`   ids: ${r.idsSoloArchivo.join(", ")}`)
  }
  nota(
    "Las preguntas de quiz no guardan de dónde salieron: no tienen link, y solo Libro de Mormón 1 " +
      "trae referencia de Escritura. Para verificarlas hay que abrir el manual de la lección."
  )
}

const COLS_PENDIENTES = [
  ["Curso", 34],
  ["Hoja", 10],
  ["Lecciones pendientes", 13],
  ["Con cuestionario", 12],
  ["Preguntas de quiz", 12],
  ["Sin nada", 11],
  ["Sin link al manual", 13],
  ["Ya escritas", 12],
] as const

function resumenPendientes(wb: ExcelJS.Workbook, rs: ResumenCurso[]): void {
  const ws = wb.addWorksheet("RESUMEN")
  const suma = (k: keyof ResumenCurso) => rs.reduce((a, r) => a + (r[k] as number), 0)

  const desde = tablaResumen(
    ws,
    "AulaSEI — Contenido pendiente",
    `Generado el ${new Date().toLocaleDateString("es-AR")} · ` +
      `${suma("sinMaterial")} lecciones sin material de repaso · ` +
      `${suma("quizSinMaterial")} preguntas de quiz que sí existen · ` +
      `${suma("sinNada")} lecciones sin absolutamente nada`,
    COLS_PENDIENTES,
    rs.map((r) => [
      r.nombre,
      r.hoja,
      r.sinMaterial,
      r.sinMaterial - r.sinNada,
      r.quizSinMaterial,
      r.sinNada,
      r.sinLinkManual,
      r.conMaterial,
    ]),
    [
      "TOTAL",
      "",
      suma("sinMaterial"),
      suma("sinMaterial") - suma("sinNada"),
      suma("quizSinMaterial"),
      suma("sinNada"),
      suma("sinLinkManual"),
      suma("conMaterial"),
    ],
    [2, 5, 6]
  )

  const { titulo, nota, espacio } = bloqueDeNotas(ws, COLS_PENDIENTES, desde)

  titulo("Qué mira este archivo")
  nota(
    "Las lecciones que NO tienen material de repaso: sin contexto, sin escrituras, sin citas " +
      "proféticas y sin conclusión. Es la lista de lo que falta escribir."
  )
  nota(
    "Muchas sí tienen cuestionario, y ese cuestionario se puede auditar igual: está en la pestaña " +
      "«… Quiz» de cada curso, con la opción correcta en verde."
  )
  nota(
    "«Sin nada» son las lecciones que no tienen ni material ni preguntas: existen como título y " +
      "nada más. Van marcadas en rojo en la hoja del curso."
  )
  espacio()

  titulo("Cursos sin nada de material")
  for (const r of rs.filter((x) => x.conMaterial === 0)) {
    nota(
      `${r.nombre} — ${r.sinMaterial} lecciones, ninguna con repaso. ` +
        `Cuestionarios: ${r.quizSinMaterial} preguntas. ` +
        `Sin link al manual: ${r.sinLinkManual} de ${r.enElSitio}.`
    )
  }
  espacio()

  titulo("Cursos a medio escribir")
  for (const r of rs.filter((x) => x.conMaterial > 0)) {
    nota(
      `${r.nombre} — ${r.conMaterial} lecciones ya escritas y ${r.sinMaterial} pendientes. ` +
        `Las escritas están en el otro archivo.`
    )
  }
}

// ─── Armado de los libros ─────────────────────────────────────────────────────

interface Curso {
  cat: Category
  filas: Fila[]
  resumen: ResumenCurso
}

/** Una pestaña de lecciones y otra de cuestionario, por curso. */
function agregarCurso(
  wb: ExcelJS.Workbook,
  { cat, filas }: Curso,
  cols: Columna<Fila>[],
  tituloLecciones: string,
  tituloQuiz: string,
  avisoSinQuiz: string,
  maxLineas: number
): void {
  const hoja = NOMBRE_HOJA[cat.id] ?? cat.id

  const ws = wb.addWorksheet(hoja)
  encabezar(ws, tituloLecciones, cols, 2)
  volcar(ws, cols, filas, maxLineas)

  const items = aFilasQuiz(filas)
  const wq = wb.addWorksheet(`${hoja} Quiz`)
  const colsQ = columnasDeQuiz(items)
  encabezar(wq, tituloQuiz, colsQ, 2)
  if (items.length) volcar(wq, colsQ, items, maxLineas)
  else hojaVacia(wq, colsQ.length, avisoSinQuiz)
}

function libroDeContenido(cursos: Curso[], maxLineas: number): ExcelJS.Workbook {
  const wb = new ExcelJS.Workbook()
  wb.creator = "AulaSEI"
  wb.created = new Date()

  const conAlgo = cursos
    .map((c) => ({ ...c, filas: c.filas.filter((f) => f.conMaterial) }))
    .filter((c) => c.filas.length > 0)

  resumenContenido(wb, conAlgo.map((c) => c.resumen))

  for (const curso of conAlgo) {
    agregarCurso(
      wb,
      curso,
      columnasDeLecciones(curso.filas),
      `${curso.resumen.nombre}  ·  ${curso.cat.id}`,
      `${curso.resumen.nombre} — cuestionarios  ·  ${curso.cat.id}`,
      "Ninguna de las lecciones con material de este curso tiene cuestionario.",
      maxLineas
    )
  }

  return wb
}

function libroDePendientes(cursos: Curso[], maxLineas: number): ExcelJS.Workbook {
  const wb = new ExcelJS.Workbook()
  wb.creator = "AulaSEI"
  wb.created = new Date()

  const conPendientes = cursos
    .map((c) => ({ ...c, filas: c.filas.filter((f) => !f.conMaterial) }))
    .filter((c) => c.filas.length > 0)

  resumenPendientes(wb, conPendientes.map((c) => c.resumen))

  for (const curso of conPendientes) {
    agregarCurso(
      wb,
      curso,
      columnasDePendientes(),
      `${curso.resumen.nombre} — pendientes  ·  ${curso.cat.id}`,
      `${curso.resumen.nombre} — cuestionarios pendientes  ·  ${curso.cat.id}`,
      "Ninguna de las lecciones pendientes de este curso tiene cuestionario: no hay nada que auditar acá todavía.",
      maxLineas
    )
  }

  return wb
}

// ─── CLI ──────────────────────────────────────────────────────────────────────

/** AAAA-MM-DD en hora local: toISOString() daría el día de UTC. */
function fechaLocal(): string {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

function valorDe(args: string[], flag: string): string | undefined {
  const i = args.indexOf(flag)
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : undefined
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)

  const outDir = valorDe(args, "--out-dir") ?? join(process.cwd(), "docs", "auditorias")
  const maxLineas = Number(valorDe(args, "--max-lineas") ?? 25)
  const soloContenido = args.includes("--solo-contenido")
  const soloPendientes = args.includes("--solo-pendientes")

  // Primer argumento suelto que no sea el valor de una opción.
  const conValor = new Set(["--out-dir", "--max-lineas"])
  const soloCurso = args.find(
    (a, i) => !a.startsWith("--") && !(i > 0 && conValor.has(args[i - 1]))
  )

  const elegidos = soloCurso ? categories.filter((c) => c.id === soloCurso) : categories
  if (!elegidos.length) {
    console.error(`No existe el curso "${soloCurso}".`)
    console.error(`Cursos: ${categories.map((c) => c.id).join(", ")}`)
    process.exit(1)
  }

  const cursos: Curso[] = elegidos.map((cat) => {
    const { filas, resumen } = leerCurso(cat)
    return { cat, filas, resumen }
  })

  mkdirSync(outDir, { recursive: true })
  const escritos: string[] = []

  if (!soloPendientes) {
    const ruta = join(outDir, `AulaSEI-contenido-${fechaLocal()}.xlsx`)
    await libroDeContenido(cursos, maxLineas).xlsx.writeFile(ruta)
    escritos.push(ruta)
  }
  if (!soloContenido) {
    const ruta = join(outDir, `AulaSEI-pendientes-${fechaLocal()}.xlsx`)
    await libroDePendientes(cursos, maxLineas).xlsx.writeFile(ruta)
    escritos.push(ruta)
  }

  // ── Informe ──
  const rs = cursos.map((c) => c.resumen)
  const suma = (k: keyof ResumenCurso) => rs.reduce((a, r) => a + (r[k] as number), 0)

  console.log("\nCONTENIDO — lecciones con material\n")
  console.log("curso                      hoja      lecc.  escrit.  citas   quiz")
  console.log("-".repeat(68))
  for (const r of rs.filter((x) => x.conMaterial > 0)) {
    console.log(
      r.categoryId.padEnd(26) +
        r.hoja.padEnd(10) +
        String(r.conMaterial).padStart(5) +
        String(r.escrituras).padStart(9) +
        String(r.citas).padStart(7) +
        String(r.quizConMaterial).padStart(7)
    )
  }
  console.log("-".repeat(68))
  console.log(
    "TOTAL".padEnd(36) +
      String(suma("conMaterial")).padStart(5) +
      String(suma("escrituras")).padStart(9) +
      String(suma("citas")).padStart(7) +
      String(suma("quizConMaterial")).padStart(7)
  )

  console.log("\nPENDIENTES — lecciones sin material\n")
  console.log("curso                      hoja      lecc.   quiz   sin nada")
  console.log("-".repeat(68))
  for (const r of rs.filter((x) => x.sinMaterial > 0)) {
    console.log(
      r.categoryId.padEnd(26) +
        r.hoja.padEnd(10) +
        String(r.sinMaterial).padStart(5) +
        String(r.quizSinMaterial).padStart(7) +
        String(r.sinNada).padStart(11)
    )
  }
  console.log("-".repeat(68))
  console.log(
    "TOTAL".padEnd(36) +
      String(suma("sinMaterial")).padStart(5) +
      String(suma("quizSinMaterial")).padStart(7) +
      String(suma("sinNada")).padStart(11)
  )

  console.log("")
  escritos.forEach((r) => console.log(`Escrito: ${r}`))
}

main()
