// lib/recuperaciones/generar-pdf-barrio.ts
// Puerto de PrepararDocumentosPorBarrio.py: un PDF por clase, con una
// página de resumen por alumno (link interno) y el detalle debajo.

import jsPDF from "jspdf"
import type { RecuperacionRow, ResumenAlumno } from "./types"
import { colorPorTipo, semaforoBarrio, COLOR_MAP } from "./color-map"
import { groupBy, ordenar, porTexto, porFecha } from "./agrupar"
import { drawCell, dibujarHeaderPagina, dibujarLeyenda, MARGIN, BOTTOM_LIMIT, ROW_H } from "./pdf-helpers"

const COL_RESUMEN = [110, 40, 30] // Estudiante | Pendientes | % Asist.
const COL_DETALLE = [23, 85, 70, 12] // Fecha | Lección | Nombre | %

function calcularResumen(filas: RecuperacionRow[]): ResumenAlumno[] {
  const porAlumno = groupBy(filas, (r) => r.nombre)
  const resumen: ResumenAlumno[] = []
  porAlumno.forEach((filasAlumno, nombre) => {
    resumen.push({
      nombre,
      pendientes: filasAlumno.length,
      asistencia: filasAlumno[0].asistencia,
    })
  })
  return ordenar(resumen, [porTexto((r) => r.nombre)])
}

/** Dibuja los encabezados de columna de la tabla de detalle (se repiten en cada página) */
function dibujarEncabezadoDetalle(doc: jsPDF, y: number): number {
  const cols = ["Fecha", "Lección (Link)", "Nombre", "%"]
  let x = MARGIN
  cols.forEach((col, i) => {
    drawCell(doc, x, y, COL_DETALLE[i], 10, col, {
      fill: [26, 82, 118],
      texto: [255, 255, 255],
      bold: true,
      align: "center",
      fontSize: 9,
    })
    x += COL_DETALLE[i]
  })
  return y + 10
}

export function generarPDFBarrio(clase: string, filasClase: RecuperacionRow[]): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" })
  const titulo = `Recuperaciones - ${clase}`

  const filasOrdenadas = ordenar(filasClase, [porTexto((r) => r.nombre), porFecha((r) => r.fechaDT)])
  const resumen = calcularResumen(filasOrdenadas)

  // ── Pre-cálculo de paginación del detalle ──────────────────────
  // Necesitamos saber en qué página cae la primera fila de cada
  // alumno ANTES de dibujar el resumen, para poder crear el link
  // ya resuelto (ver nota en pdf-helpers.ts).
  const startYDetalle = 36 + 8 + 6 + 10 // header + leyenda + espacio + encabezado de columnas
  const rowsPerPage = Math.floor((BOTTOM_LIMIT - startYDetalle) / ROW_H)

  const primeraAparicion = new Map<string, number>()
  filasOrdenadas.forEach((fila, i) => {
    if (!primeraAparicion.has(fila.nombre)) {
      primeraAparicion.set(fila.nombre, 2 + Math.floor(i / rowsPerPage))
    }
  })

  // ── Página 1: resumen / panel de control ───────────────────────
  dibujarHeaderPagina(doc, titulo)
  let y = 36
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text("Resumen de Situación - Panel de Control", MARGIN, y)
  y += 8

  let x = MARGIN
  const headersResumen = ["Estudiante (Clic para ver detalle)", "Pendientes", "% Asist."]
  headersResumen.forEach((h, i) => {
    drawCell(doc, x, y, COL_RESUMEN[i], 10, h, {
      fill: [52, 73, 94],
      texto: [255, 255, 255],
      bold: true,
      align: i === 0 ? "left" : "center",
      fontSize: 9,
    })
    x += COL_RESUMEN[i]
  })
  y += 10

  resumen.forEach((alumno, i) => {
    if (y + 9 > BOTTOM_LIMIT) {
      doc.addPage()
      dibujarHeaderPagina(doc, titulo)
      y = 36
    }
    const fill: [number, number, number] = i % 2 === 0 ? [240, 240, 240] : [255, 255, 255]

    drawCell(doc, MARGIN, y, COL_RESUMEN[0], 9, ` ${alumno.nombre.slice(0, 55)}`, {
      fill,
      texto: [0, 0, 255],
      underline: true,
      fontSize: 9,
      link: { pageNumber: primeraAparicion.get(alumno.nombre) ?? 2 },
    })
    drawCell(doc, MARGIN + COL_RESUMEN[0], y, COL_RESUMEN[1], 9, String(alumno.pendientes), {
      fill,
      align: "center",
      fontSize: 9,
    })
    drawCell(doc, MARGIN + COL_RESUMEN[0] + COL_RESUMEN[1], y, COL_RESUMEN[2], 9, alumno.asistencia, {
      fill,
      align: "center",
      fontSize: 9,
    })
    y += 9
  })

  // ── Página 2+: detalle ──────────────────────────────────────────
  doc.addPage()
  dibujarHeaderPagina(doc, titulo)
  y = 36
  y = dibujarLeyenda(doc, y, COLOR_MAP)
  y += 2
  y = dibujarEncabezadoDetalle(doc, y)

  filasOrdenadas.forEach((fila, i) => {
    if (y + ROW_H > BOTTOM_LIMIT) {
      doc.addPage()
      dibujarHeaderPagina(doc, titulo)
      y = 36
      y = dibujarLeyenda(doc, y, COLOR_MAP)
      y += 2
      y = dibujarEncabezadoDetalle(doc, y)
    }

    const fillCebra: [number, number, number] = i % 2 === 0 ? [248, 248, 248] : [255, 255, 255]
    let cx = MARGIN

    drawCell(doc, cx, y, COL_DETALLE[0], ROW_H, fila.fecha, { fill: fillCebra, align: "center", fontSize: 7.5 })
    cx += COL_DETALLE[0]

    const linkLeccion = fila.linkLeccion && fila.linkLeccion.toLowerCase() !== "nan" ? fila.linkLeccion : undefined
    drawCell(doc, cx, y, COL_DETALLE[1], ROW_H, ` ${fila.leccion.slice(0, 50)}`, {
      fill: fillCebra,
      texto: colorPorTipo(fila.tipo),
      bold: true,
      underline: !!linkLeccion,
      fontSize: 7.5,
      link: linkLeccion,
    })
    cx += COL_DETALLE[1]

    drawCell(doc, cx, y, COL_DETALLE[2], ROW_H, ` ${fila.nombre.slice(0, 40)}`, { fill: fillCebra, fontSize: 7.5 })
    cx += COL_DETALLE[2]

    const { fondo, texto } = semaforoBarrio(fila.asistencia)
    const pct = parseFloat(fila.asistencia.replace("%", ""))
    drawCell(doc, cx, y, COL_DETALLE[3], ROW_H, isNaN(pct) ? "-" : `${Math.round(pct)}%`, {
      fill: fondo,
      texto,
      bold: true,
      align: "center",
      fontSize: 7.5,
    })

    y += ROW_H
  })

  return doc
}