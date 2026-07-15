// lib/recuperaciones/generar-pdf-fecha.ts
// Puerto de PrepararDocumentosPorFecha.py: un índice maestro (Clase + Fecha,
// con cantidad de faltas) que linkea a una tabla de detalle más abajo.
//
// DISEÑO — por qué "simular" antes de dibujar:
// jsPDF necesita saber el número de página DESTINO en el momento de crear
// el link (a diferencia de fpdf2, que permite resolverlo después con
// set_link). Como el índice linkea al detalle, hacemos dos pasadas:
//   1) simularIndice()  → cuántas páginas ocupa el índice
//   2) simularDetalle() → en qué página cae cada (Clase, Fecha), arrancando
//                         justo después de las páginas que usó el índice
// Recién con esos números dibujamos todo de verdad.

import jsPDF from "jspdf"
import type { RecuperacionRow } from "./types"
import { colorPorTipo, semaforoFecha, COLOR_MAP } from "./color-map"
import { groupBy, ordenar, porTexto, porFecha } from "./agrupar"
import { drawCell, dibujarHeaderPagina, dibujarLeyenda, MARGIN, BOTTOM_LIMIT, ROW_H } from "./pdf-helpers"

const COL_DETALLE = [25, 40, 55, 15, 55] // Fecha | Barrio | Nombre | % | Lección
const IND_START_Y = 50
const IND_BARRIO_H = 8
const IND_COLHEAD_H = 7
const IND_ROW_H = 7
const IND_GROUP_GAP = 4

interface FechaConteo {
  fecha: string
  faltas: number
}

function calcularResumenIndice(datos: RecuperacionRow[]): Map<string, FechaConteo[]> {
  const porClase = groupBy(datos, (r) => r.clase)
  const resultado = new Map<string, FechaConteo[]>()
  porClase.forEach((filasClase, clase) => {
    const porFechaMap = groupBy(filasClase, (r) => r.fecha)
    const fechas: FechaConteo[] = []
    porFechaMap.forEach((filasFecha, fecha) => fechas.push({ fecha, faltas: filasFecha.length }))
    resultado.set(clase, fechas)
  })
  return resultado
}

function keyClaseFecha(clase: string, fecha: string) {
  return `${clase}__${fecha}`
}

function simularIndice(resumenPorClase: Map<string, FechaConteo[]>) {
  const paginaPorClaseFecha = new Map<string, number>()
  let page = 1
  let y = IND_START_Y

  resumenPorClase.forEach((fechas, clase) => {
    if (y + IND_BARRIO_H + IND_COLHEAD_H > BOTTOM_LIMIT) {
      page++
      y = 36
    }
    y += IND_BARRIO_H + IND_COLHEAD_H

    for (const { fecha } of fechas) {
      if (y + IND_ROW_H > BOTTOM_LIMIT) {
        page++
        y = 36
      }
      paginaPorClaseFecha.set(keyClaseFecha(clase, fecha), page)
      y += IND_ROW_H
    }
    y += IND_GROUP_GAP
  })

  return { paginaPorClaseFecha, paginaFinIndice: page }
}

function simularDetalle(datosOrdenados: RecuperacionRow[], multiClase: boolean, startPage: number) {
  const grupos = multiClase
    ? Array.from(groupBy(datosOrdenados, (r) => r.clase).entries())
    : [["", datosOrdenados] as [string, RecuperacionRow[]]]

  const paginaPorClaseFecha = new Map<string, number>()
  let page = startPage

  // 36 (header) + leyenda (~11) + espacio (2) + encabezado de columnas (8) = 57.
  // Debe coincidir con el punto de partida real usado en dibujarDetalle().
  const DET_START_Y = 57

  for (const [nombreClase, filas] of grupos) {
    page += 1
    let y = DET_START_Y
    let ultimaFecha = ""
    for (const fila of filas) {
      if (y + ROW_H > BOTTOM_LIMIT) {
        page++
        y = DET_START_Y
      }
      if (fila.fecha !== ultimaFecha) {
        const busqueda = multiClase ? nombreClase : fila.clase
        paginaPorClaseFecha.set(keyClaseFecha(busqueda, fila.fecha), page)
        ultimaFecha = fila.fecha
      }
      y += ROW_H
    }
  }

  return { paginaPorClaseFecha, paginaFinal: page }
}

function dibujarIndice(
  doc: jsPDF,
  resumenPorClase: Map<string, FechaConteo[]>,
  targets: Map<string, number>,
  tituloCabecera: string
) {
  dibujarHeaderPagina(doc, tituloCabecera)
  let y = 36
  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("Índice de Recuperaciones (Clase y Fecha)", MARGIN, y)
  y = IND_START_Y

  resumenPorClase.forEach((fechas, clase) => {
    if (y + IND_BARRIO_H + IND_COLHEAD_H > BOTTOM_LIMIT) {
      doc.addPage()
      dibujarHeaderPagina(doc, tituloCabecera)
      y = 36
    }

    drawCell(doc, MARGIN, y, 186, IND_BARRIO_H, ` BARRIO: ${clase}`, {
      fill: [235, 235, 235],
      bold: true,
      fontSize: 11,
    })
    y += IND_BARRIO_H

    drawCell(doc, MARGIN, y, 60, IND_COLHEAD_H, "Fecha (Clic para ir)", { bold: true, align: "center", fontSize: 9 })
    drawCell(doc, MARGIN + 60, y, 60, IND_COLHEAD_H, "Faltas Registradas", {
      bold: true,
      align: "center",
      fontSize: 9,
    })
    y += IND_COLHEAD_H

    for (const { fecha, faltas } of fechas) {
      if (y + IND_ROW_H > BOTTOM_LIMIT) {
        doc.addPage()
        dibujarHeaderPagina(doc, tituloCabecera)
        y = 36
      }
      const pagina = targets.get(keyClaseFecha(clase, fecha))
      drawCell(doc, MARGIN, y, 60, IND_ROW_H, `   ${fecha}`, {
        texto: [0, 0, 255],
        underline: true,
        fontSize: 10,
        link: pagina ? { pageNumber: pagina } : undefined,
      })
      drawCell(doc, MARGIN + 60, y, 60, IND_ROW_H, String(faltas), { align: "center", fontSize: 10 })
      y += IND_ROW_H
    }
    y += IND_GROUP_GAP
  })
}

function dibujarEncabezadoDetalle(doc: jsPDF, y: number): number {
  const cols = ["Fecha", "Barrio", "Nombre", "%", "Lección"]
  let x = MARGIN
  cols.forEach((col, i) => {
    drawCell(doc, x, y, COL_DETALLE[i], 8, col, {
      fill: [26, 82, 118],
      texto: [255, 255, 255],
      bold: true,
      align: "center",
      fontSize: 9,
    })
    x += COL_DETALLE[i]
  })
  return y + 8
}

function dibujarDetalle(doc: jsPDF, datosOrdenados: RecuperacionRow[], multiClase: boolean, tituloCabecera: string) {
  const grupos = multiClase
    ? Array.from(groupBy(datosOrdenados, (r) => r.clase).entries())
    : [["", datosOrdenados] as [string, RecuperacionRow[]]]

  for (const [, filas] of grupos) {
    doc.addPage()
    dibujarHeaderPagina(doc, tituloCabecera)
    let y = 36
    y = dibujarLeyenda(doc, y, COLOR_MAP)
    y += 2
    y = dibujarEncabezadoDetalle(doc, y)

    let ultimaFecha = ""
    filas.forEach((fila, i) => {
      if (y + ROW_H > BOTTOM_LIMIT) {
        doc.addPage()
        dibujarHeaderPagina(doc, tituloCabecera)
        y = 36
        y = dibujarLeyenda(doc, y, COLOR_MAP)
        y += 2
        y = dibujarEncabezadoDetalle(doc, y)
      }

      const esNuevaFecha = fila.fecha !== ultimaFecha
      ultimaFecha = fila.fecha
      const fillCebra: [number, number, number] = i % 2 === 0 ? [248, 248, 248] : [255, 255, 255]
      let x = MARGIN

      drawCell(doc, x, y, COL_DETALLE[0], ROW_H, fila.fecha, {
        fill: fillCebra,
        align: "center",
        bold: esNuevaFecha,
        fontSize: 8,
      })
      x += COL_DETALLE[0]

      drawCell(doc, x, y, COL_DETALLE[1], ROW_H, fila.clase.slice(0, 20), { fill: fillCebra, fontSize: 8 })
      x += COL_DETALLE[1]

      drawCell(doc, x, y, COL_DETALLE[2], ROW_H, fila.nombre.slice(0, 30), { fill: fillCebra, fontSize: 8 })
      x += COL_DETALLE[2]

      const { fondo, texto } = semaforoFecha(fila.asistencia)
      drawCell(doc, x, y, COL_DETALLE[3], ROW_H, fila.asistencia, {
        fill: fondo,
        texto,
        bold: true,
        align: "center",
        fontSize: 8,
      })
      x += COL_DETALLE[3]

      const linkLeccion = fila.linkLeccion && fila.linkLeccion.toLowerCase() !== "nan" ? fila.linkLeccion : undefined
      drawCell(doc, x, y, COL_DETALLE[4], ROW_H, ` ${fila.leccion.slice(0, 35)}`, {
        fill: fillCebra,
        texto: colorPorTipo(fila.tipo),
        bold: !!linkLeccion,
        underline: !!linkLeccion,
        fontSize: 8,
        link: linkLeccion,
      })

      y += ROW_H
    })
  }
}

export interface OpcionesFecha {
  tituloCabecera: string
  /** true para el reporte maestro (todas las clases de la estaca en un mismo PDF) */
  multiClase: boolean
}

export function generarPDFFecha(datos: RecuperacionRow[], opciones: OpcionesFecha): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" })
  const datosOrdenados = ordenar(datos, [
    porTexto((r) => r.clase),
    porFecha((r) => r.fechaDT),
    porTexto((r) => r.nombre),
  ])

  const resumenPorClase = calcularResumenIndice(datosOrdenados)
  const { paginaFinIndice } = simularIndice(resumenPorClase)
  const { paginaPorClaseFecha } = simularDetalle(datosOrdenados, opciones.multiClase, paginaFinIndice)

  dibujarIndice(doc, resumenPorClase, paginaPorClaseFecha, opciones.tituloCabecera)
  dibujarDetalle(doc, datosOrdenados, opciones.multiClase, opciones.tituloCabecera)

  return doc
}