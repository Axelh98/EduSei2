// lib/recuperaciones/pdf-helpers.ts
// jsPDF no tiene el concepto de "cell" (fill + border + texto + link en un
// solo llamado) que sí tiene fpdf2. Esta función lo simula, para poder
// portar las tablas de los scripts de Python casi celda por celda.
//
// Sobre los links: fpdf2 permite crear un link "vacío" con add_link() y
// resolver su destino más tarde con set_link() (útil cuando todavía no
// sabés en qué página va a caer el detalle). jsPDF no tiene ese diferido:
// doc.link(x, y, w, h, { pageNumber }) necesita el número de página YA
// resuelto en el momento de crear el link. Por eso los generadores
// (generar-pdf-*.ts) precalculan la paginación del detalle ANTES de
// dibujar el resumen/índice, y así pueden pasar el pageNumber correcto
// desde el vamos.

import type jsPDF from "jspdf"
import type { RGB } from "./color-map"

export interface CeldaOptions {
  fill?: RGB
  texto?: RGB
  bold?: boolean
  underline?: boolean
  align?: "left" | "center" | "right"
  border?: boolean
  fontSize?: number
  /** URL externa, o página interna a la que debe saltar al hacer clic */
  link?: string | { pageNumber: number }
}

export function drawCell(
  doc: jsPDF,
  x: number,
  y: number,
  w: number,
  h: number,
  texto: string,
  opts: CeldaOptions = {}
) {
  const {
    fill,
    texto: colorTexto = [0, 0, 0],
    bold = false,
    underline = false,
    align = "left",
    border = true,
    fontSize = 8,
    link,
  } = opts

  if (fill) {
    doc.setFillColor(fill[0], fill[1], fill[2])
    doc.rect(x, y, w, h, border ? "FD" : "F")
  } else if (border) {
    doc.setDrawColor(200, 200, 200)
    doc.rect(x, y, w, h)
  }

  doc.setTextColor(colorTexto[0], colorTexto[1], colorTexto[2])
  doc.setFont("helvetica", bold ? "bold" : "normal")
  doc.setFontSize(fontSize)

  const padX = 2
  const textY = y + h / 2 + fontSize * 0.12
  let textX = x + padX
  if (align === "center") textX = x + w / 2
  else if (align === "right") textX = x + w - padX

  doc.text(texto, textX, textY, { align })

  if (underline && texto) {
    const textWidth = doc.getTextWidth(texto)
    const lineX =
      align === "center" ? x + w / 2 - textWidth / 2 : align === "right" ? x + w - padX - textWidth : textX
    doc.setDrawColor(colorTexto[0], colorTexto[1], colorTexto[2])
    doc.line(lineX, textY + 1, lineX + textWidth, textY + 1)
  }

  if (link) {
    if (typeof link === "string") {
      doc.link(x, y, w, h, { url: link })
    } else {
      doc.link(x, y, w, h, { pageNumber: link.pageNumber })
    }
  }
}

export const PAGE_A4 = { w: 210, h: 297 }
export const MARGIN = 12
export const BOTTOM_LIMIT = PAGE_A4.h - 15
export const ROW_H = 8

/**
 * Dibuja el header repetido en cada página: título + link a los
 * cuestionarios. Equivalente al método header() de fpdf2.
 */
export function dibujarHeaderPagina(doc: jsPDF, titulo: string) {
  doc.setFont("helvetica", "bold")
  doc.setFontSize(15)
  doc.setTextColor(0, 0, 0)
  doc.text(titulo, PAGE_A4.w / 2, 15, { align: "center" })

  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Cuestionarios:", MARGIN, 26)
  const anchoLabel = doc.getTextWidth("Cuestionarios: ")

  doc.setTextColor(0, 0, 255)
  doc.setFont("helvetica", "normal")
  const textoLink = "Link Directo"
  doc.text(textoLink, MARGIN + anchoLabel, 26)
  const anchoLink = doc.getTextWidth(textoLink)
  doc.setDrawColor(0, 0, 255)
  doc.line(MARGIN + anchoLabel, 27, MARGIN + anchoLabel + anchoLink, 27)
  doc.link(MARGIN + anchoLabel, 26 - 3.5, anchoLink, 4.5, {
    url: "https://edu-sei2.vercel.app/quiz/antiguo-testamento",
  })

  doc.setTextColor(0, 0, 0)
}

/** Dibuja la leyenda de colores por tipo de lección (Referencia de tipos) */
export function dibujarLeyenda(doc: jsPDF, y: number, colorMap: Record<string, RGB>): number {
  doc.setFont("helvetica", "bold")
  doc.setFontSize(8)
  doc.setTextColor(0, 0, 0)
  doc.text("Referencia de tipos:", MARGIN, y)
  y += 5

  let x = MARGIN
  doc.setFont("helvetica", "normal")
  doc.setFontSize(7)
  for (const [tipo, rgb] of Object.entries(colorMap)) {
    doc.setFillColor(rgb[0], rgb[1], rgb[2])
    doc.rect(x, y - 2.5, 3, 3, "F")
    doc.setTextColor(0, 0, 0)
    doc.text(tipo, x + 5, y)
    x += 44
  }
  return y + 6
}