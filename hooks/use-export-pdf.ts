// hooks/use-export-pdf.ts
"use client"

import { useState } from "react"
import type { Seccion, BloqueResumen } from "@/lib/types"

export interface ExportOptions {
  categoryName: string
  lessonTitle: string
  secciones: Seccion[]
  notes?: string
  studentName?: string
}

// ─── Colores ──────────────────────────────────────────────────────────────────
const C = {
  primary:    [29,  78,  216] as [number,number,number],
  dark:       [17,  24,   39] as [number,number,number],
  body:       [55,  65,   81] as [number,number,number],  // gray-700
  muted:      [107, 114, 128] as [number,number,number],  // gray-500
  light:      [156, 163, 175] as [number,number,number],  // gray-400
  white:      [255, 255, 255] as [number,number,number],
  pageBg:     [249, 250, 251] as [number,number,number],  // gray-50
  cardBg:     [243, 244, 246] as [number,number,number],  // gray-100
  citaBg:     [239, 246, 255] as [number,number,number],  // blue-50
  escrituraBg:[240, 249, 255] as [number,number,number],  // sky-50
  border:     [209, 213, 219] as [number,number,number],  // gray-300
  primaryLight:[219, 234, 254] as [number,number,number], // blue-100
  amber:      [180, 120,  20] as [number,number,number],
}

export function useExportPDF() {
  const [isExporting, setIsExporting] = useState(false)

  const exportToPDF = async (options: ExportOptions) => {
    setIsExporting(true)
    try {
      const { default: jsPDF } = await import("jspdf")
      const { categoryName, lessonTitle, secciones, notes, studentName } = options

      const pdf  = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
      const W    = pdf.internal.pageSize.getWidth()   // 210
      const H    = pdf.internal.pageSize.getHeight()  // 297
      const M    = 14   // margen izquierdo/derecho
      const CW   = W - M * 2  // ancho de contenido: 182mm
      const BOT  = H - 12     // límite inferior antes del footer

      // ── helpers de posición ───────────────────────────────────────
      let y = 0

      /** Agrega página nueva y resetea y al margen superior */
      const newPage = () => {
        pdf.addPage()
        y = 16
        drawFooter()
      }

      /** Garantiza que haya al menos `need` mm libres; si no, nueva página */
      const ensure = (need: number) => {
        if (y + need > BOT) newPage()
      }

      /** Texto con word-wrap automático. Devuelve nueva y. */
      const text = (
        str: string,
        x: number,
        color: [number,number,number],
        size: number,
        style: "normal"|"bold"|"italic" = "normal",
        maxW = CW,
        align: "left"|"right"|"center" = "left",
      ): number => {
        pdf.setTextColor(...color)
        pdf.setFontSize(size)
        pdf.setFont("helvetica", style)
        const lines = pdf.splitTextToSize(str, maxW)
        const lh    = size * 0.4   // line-height en mm aprox
        lines.forEach((line: string, i: number) => {
          ensure(lh + 2)
          pdf.text(line, x, y, { align })
          y += lh + (i < lines.length - 1 ? 1 : 0)
        })
        return y
      }

      // ── footer (se dibuja en cada página al crearla) ──────────────
      // NOTA: NO llamar drawFooter() manualmente fuera de newPage() ni al final de la p.1
      // El footer de todas las páginas se sobreescribe correctamente en el loop final.
      const drawFooter = () => {
        const pg = pdf.getNumberOfPages()
        pdf.setFillColor(...C.pageBg)
        pdf.rect(0, H - 10, W, 10, "F")
        pdf.setTextColor(...C.muted)
        pdf.setFontSize(7)
        pdf.setFont("helvetica", "normal")
        pdf.text("Mi Seminario e Instituto", M, H - 4)
        pdf.text(`Página ${pg}`, W - M, H - 4, { align: "right" })
      }

      // ────────────────────────────────────────────────────────────────
      // PÁGINA 1 — Header azul
      // ────────────────────────────────────────────────────────────────
      pdf.setFillColor(...C.primary)
      pdf.rect(0, 0, W, 30, "F")

      pdf.setTextColor(...C.white)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(11)
      pdf.text("Mi Seminario e Instituto", M, 11)

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.text(categoryName, M, 19)

      const dateStr = new Date().toLocaleDateString("es-AR", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      })
      pdf.setFontSize(8)
      pdf.setTextColor(186, 230, 253)
      pdf.text(dateStr, W - M, 11, { align: "right" })
      if (studentName) {
        pdf.text(`Estudiante: ${studentName}`, W - M, 19, { align: "right" })
      }

      y = 40

      // Título lección
      pdf.setTextColor(...C.dark)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(20)
      const titleLines = pdf.splitTextToSize(lessonTitle, CW)
      titleLines.forEach((line: string) => {
        pdf.text(line, M, y)
        y += 9
      })
      y += 2

      // Divisor
      pdf.setDrawColor(...C.border)
      pdf.setLineWidth(0.3)
      pdf.line(M, y, W - M, y)
      y += 10

      // FIX: Se eliminó el drawFooter() suelto que estaba aquí.
      // El footer de la página 1 se renderiza correctamente en el loop final.

      // ────────────────────────────────────────────────────────────────
      // SECCIONES
      // ────────────────────────────────────────────────────────────────
      for (const seccion of secciones) {

        // ── tipo "resumen" con bloques ────────────────────────────────
        if (seccion.tipo === "resumen" && seccion.bloques) {
          for (const bloque of seccion.bloques) {
            renderBloque(pdf, bloque, M, CW, W, H, BOT, C, y, newPage, ensure,
              (newY) => { y = newY })
          }
          continue
        }

        // ── tipos heredados del Seminario ────────────────────────────

        if (seccion.tipo === "contexto" && seccion.contenido) {
          ensure(12)
          y = renderParrafo(pdf, seccion.contenido, M, C, CW, y)
          y += 6
        }

        if (seccion.tipo === "conclusion" && seccion.contenido) {
          ensure(14)
          const antes = y
          pdf.setLineWidth(0.4)
          y = renderParrafo(pdf, seccion.contenido, M + 6, C, CW - 6, y, "italic")
          pdf.setDrawColor(...C.primaryLight)
          pdf.setLineWidth(1.5)
          pdf.line(M + 1, antes - 1, M + 1, y + 1)
          y += 6
        }

        if (seccion.tipo === "enseñanza") {
          ensure(20)
          drawCitaBox(pdf, {
            texto: seccion.texto ?? "",
            autor: seccion.autor,
            fuente: seccion.fuente,
          }, M, CW, W, C, BOT, y, (newY) => { y = newY }, ensure, newPage)
        }

        if (seccion.tipo === "escrituras" && seccion.citas?.length) {
          ensure(10)
          pdf.setTextColor(...C.muted)
          pdf.setFontSize(7.5)
          pdf.setFont("helvetica", "bold")
          pdf.text("ESCRITURAS CLAVE", M, y)
          y += 6
          for (const cita of seccion.citas) {
            drawEscrituraBox(pdf, cita, M, CW, C, BOT, y, (newY) => { y = newY }, ensure, newPage)
          }
        }

        if (seccion.tipo === "cuestionario" && seccion.preguntas?.length) {
          ensure(14)
          drawReflexionBox(pdf, seccion.preguntas, M, CW, W, C, BOT, y,
            (newY) => { y = newY }, ensure, newPage)
        }
      }

      // ────────────────────────────────────────────────────────────────
      // NOTAS
      // ────────────────────────────────────────────────────────────────
      if (notes?.trim()) {
        ensure(20)
        drawNotasBox(pdf, notes, M, CW, W, C, BOT, y, (newY) => { y = newY }, ensure, newPage)
      }

      // ── Footer en todas las páginas con total correcto ────────────
      const totalPages = pdf.getNumberOfPages()
      for (let p = 1; p <= totalPages; p++) {
        pdf.setPage(p)
        pdf.setFillColor(...C.pageBg)
        pdf.rect(0, H - 10, W, 10, "F")
        pdf.setTextColor(...C.muted)
        pdf.setFontSize(7)
        pdf.setFont("helvetica", "normal")
        pdf.text("Mi Seminario e Instituto", M, H - 4)
        pdf.text(`Página ${p} de ${totalPages}`, W - M, H - 4, { align: "right" })
      }

      // ── Guardar ───────────────────────────────────────────────────
      const fileName = lessonTitle
        .slice(0, 50)
        .replace(/[^\w\sáéíóúñ]/gi, "")
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()
      pdf.save(`${fileName}.pdf`)

    } catch (err) {
      console.error("Error al exportar PDF:", err)
    } finally {
      setIsExporting(false)
    }
  }

  return { isExporting, exportToPDF }
}

// ─────────────────────────────────────────────────────────────────────────────
// Renderizadores por tipo de bloque
// ─────────────────────────────────────────────────────────────────────────────

function renderBloque(
  pdf: any,
  bloque: BloqueResumen,
  M: number,
  CW: number,
  W: number,
  H: number,
  BOT: number,
  C: any,
  y: number,
  newPage: () => void,
  ensure: (n: number) => void,
  setY: (y: number) => void,
) {
  switch (bloque.tipo) {

    case "parrafo": {
      ensure(10)
      y = renderParrafo(pdf, bloque.texto, M, C, CW, y)
      y += 6
      setY(y)
      break
    }

    case "escritura": {
      drawEscrituraBox(pdf, { referencia: bloque.referencia, texto: bloque.texto, comentario: bloque.comentario },
        M, CW, C, BOT, y, setY, ensure, newPage)
      break
    }

    case "cita": {
      drawCitaBox(pdf, { texto: bloque.texto, autor: bloque.autor, fuente: bloque.fuente },
        M, CW, W, C, BOT, y, setY, ensure, newPage)
      break
    }

    case "doctrinal": {
      ensure(14)
      pdf.setTextColor(...C.primary)
      pdf.setFontSize(7.5)
      pdf.setFont("helvetica", "bold")
      pdf.text("VERDADES DOCTRINALES", M, y)
      y += 5
      for (const punto of bloque.puntos) {
        ensure(8)
        pdf.setFillColor(...C.primary)
        pdf.circle(M + 1.5, y - 1.2, 1, "F")
        pdf.setTextColor(...C.body)
        pdf.setFontSize(9.5)
        pdf.setFont("helvetica", "normal")
        const lines = pdf.splitTextToSize(punto, CW - 7)
        lines.forEach((line: string) => {
          ensure(5)
          pdf.text(line, M + 5, y)
          y += 4.5
        })
        y += 1
      }
      y += 4
      setY(y)
      break
    }

    case "reflexion": {
      drawReflexionBox(pdf, bloque.preguntas, M, CW, W, C, BOT, y, setY, ensure, newPage)
      break
    }
  }
}

// ── Párrafo simple ────────────────────────────────────────────────────────────
function renderParrafo(
  pdf: any,
  texto: string,
  x: number,
  C: any,
  maxW: number,
  y: number,
  style: "normal"|"italic" = "normal",
): number {
  pdf.setTextColor(...C.body)
  pdf.setFontSize(10)
  pdf.setFont("helvetica", style)
  const lines = pdf.splitTextToSize(texto, maxW)
  lines.forEach((line: string) => {
    pdf.text(line, x, y)
    y += 5
  })
  return y
}

// ── Caja de escritura ─────────────────────────────────────────────────────────
// FIX: Recibe BOT y newPage. Ya no tiene su propio addPage() — usa ensure() correctamente.
function drawEscrituraBox(
  pdf: any,
  cita: { referencia: string; texto: string; comentario?: string },
  M: number, CW: number, C: any,
  BOT: number,
  y: number,
  setY: (y: number) => void,
  ensure: (n: number) => void,
  newPage: () => void,
) {
  // Calcular alto de la caja
  pdf.setFontSize(9.5)
  const textLines    = pdf.splitTextToSize(`"${cita.texto}"`, CW - 10)
  const comentLines  = cita.comentario ? pdf.splitTextToSize(cita.comentario, CW - 10) : []
  const boxH = 7 + textLines.length * 4.8 + (comentLines.length > 0 ? 2 + comentLines.length * 4.2 : 0) + 5

  // FIX: un solo punto de decisión de salto de página
  ensure(boxH + 4)

  // Fondo y borde
  pdf.setFillColor(...C.escrituraBg)
  pdf.setDrawColor(...C.primaryLight)
  pdf.setLineWidth(0.3)
  pdf.roundedRect(M, y, CW, boxH, 3, 3, "FD")

  // Acento izquierdo
  pdf.setFillColor(...C.primary)
  pdf.roundedRect(M, y, 2.5, boxH, 1, 1, "F")

  // Referencia
  pdf.setTextColor(...C.primary)
  pdf.setFontSize(7.5)
  pdf.setFont("helvetica", "bold")
  pdf.text(cita.referencia.toUpperCase(), M + 6, y + 5.5)

  // Texto
  pdf.setTextColor(...C.dark)
  pdf.setFontSize(9.5)
  pdf.setFont("helvetica", "italic")
  let ty = y + 11
  textLines.forEach((line: string) => {
    pdf.text(line, M + 6, ty)
    ty += 4.8
  })

  // Comentario
  if (cita.comentario && comentLines.length > 0) {
    ty += 1
    pdf.setDrawColor(...C.border)
    pdf.setLineWidth(0.2)
    pdf.line(M + 6, ty, M + CW - 4, ty)
    ty += 3.5
    pdf.setTextColor(...C.muted)
    pdf.setFontSize(8.5)
    pdf.setFont("helvetica", "normal")
    comentLines.forEach((line: string) => {
      pdf.text(line, M + 6, ty)
      ty += 4.2
    })
  }

  y += boxH + 4
  setY(y)
}

// ── Caja de cita profética ────────────────────────────────────────────────────
// FIX: Recibe BOT y newPage. Ya no tiene su propio addPage() — usa ensure() correctamente.
function drawCitaBox(
  pdf: any,
  cita: { texto: string; autor?: string; fuente?: string },
  M: number, CW: number, W: number, C: any,
  BOT: number,
  y: number,
  setY: (y: number) => void,
  ensure: (n: number) => void,
  newPage: () => void,
) {
  pdf.setFontSize(10.5)
  const textLines = pdf.splitTextToSize(`"${cita.texto}"`, CW - 12)
  const boxH = 9 + textLines.length * 5.5 + (cita.autor ? 10 : 4)

  // FIX: un solo punto de decisión de salto de página
  ensure(boxH + 5)

  // Fondo azul claro
  pdf.setFillColor(...C.citaBg)
  pdf.setDrawColor(...C.primaryLight)
  pdf.setLineWidth(0.4)
  pdf.roundedRect(M, y, CW, boxH, 4, 4, "FD")

  // Comilla decorativa grande
  pdf.setTextColor(...C.primaryLight)
  pdf.setFontSize(42)
  pdf.setFont("helvetica", "bold")
  pdf.text("\u201C", M + 3, y + 11)

  // Texto de la cita
  pdf.setTextColor(...C.dark)
  pdf.setFontSize(10.5)
  pdf.setFont("helvetica", "italic")
  let ty = y + 9
  textLines.forEach((line: string) => {
    pdf.text(line, M + 10, ty)
    ty += 5.5
  })

  // Autor y fuente
  if (cita.autor) {
    ty += 2
    pdf.setDrawColor(...C.primaryLight)
    pdf.setLineWidth(0.3)
    pdf.line(M + 10, ty, W - M - 4, ty)
    ty += 4
    pdf.setTextColor(...C.primary)
    pdf.setFontSize(8.5)
    pdf.setFont("helvetica", "bold")
    pdf.text(cita.autor, W - M - 4, ty, { align: "right" })
    if (cita.fuente) {
      ty += 4
      pdf.setTextColor(...C.muted)
      pdf.setFontSize(7.5)
      pdf.setFont("helvetica", "normal")
      pdf.text(cita.fuente.toUpperCase(), W - M - 4, ty, { align: "right" })
    }
  }

  y += boxH + 5
  setY(y)
}

// ── Caja de reflexión ─────────────────────────────────────────────────────────
// FIX: Recibe BOT y newPage. Ya no tiene su propio addPage() — usa ensure() correctamente.
function drawReflexionBox(
  pdf: any,
  preguntas: string[],
  M: number, CW: number, W: number, C: any,
  BOT: number,
  y: number,
  setY: (y: number) => void,
  ensure: (n: number) => void,
  newPage: () => void,
) {
  // Calcular alto total
  pdf.setFontSize(9.5)
  let totalLines = 0
  for (const p of preguntas) {
    totalLines += pdf.splitTextToSize(p, CW - 14).length
  }
  const boxH = 10 + totalLines * 4.8 + preguntas.length * 3 + 4

  // FIX: un solo punto de decisión de salto de página
  ensure(boxH + 5)

  // Fondo gris muy claro
  pdf.setFillColor(...C.pageBg)
  pdf.setDrawColor(...C.border)
  pdf.setLineWidth(0.3)
  pdf.roundedRect(M, y, CW, boxH, 4, 4, "FD")

  // Label
  pdf.setTextColor(...C.primary)
  pdf.setFontSize(7.5)
  pdf.setFont("helvetica", "bold")
  pdf.text("PARA REFLEXIONAR", M + 5, y + 6)

  let ty = y + 12
  preguntas.forEach((pregunta, i) => {
    // Número en círculo simulado
    pdf.setFillColor(...C.primaryLight)
    pdf.circle(M + 7, ty - 1.2, 3.5, "F")
    pdf.setTextColor(...C.primary)
    pdf.setFontSize(7)
    pdf.setFont("helvetica", "bold")
    pdf.text(String(i + 1), M + 7, ty, { align: "center" })

    // Texto
    pdf.setTextColor(...C.body)
    pdf.setFontSize(9.5)
    pdf.setFont("helvetica", "normal")
    const lines = pdf.splitTextToSize(pregunta, CW - 14)
    lines.forEach((line: string) => {
      pdf.text(line, M + 13, ty)
      ty += 4.8
    })
    ty += 3
  })

  y += boxH + 5
  setY(y)
}

// ── Caja de notas ─────────────────────────────────────────────────────────────
// FIX: Recibe BOT y newPage. Ya no tiene su propio addPage() — usa ensure() correctamente.
function drawNotasBox(
  pdf: any,
  notes: string,
  M: number, CW: number, W: number, C: any,
  BOT: number,
  y: number,
  setY: (y: number) => void,
  ensure: (n: number) => void,
  newPage: () => void,
) {
  pdf.setFontSize(9.5)
  const noteLines = pdf.splitTextToSize(notes, CW - 12)
  const boxH = 12 + noteLines.length * 4.8 + 6

  // FIX: un solo punto de decisión de salto de página
  ensure(boxH + 6)

  pdf.setFillColor(...C.pageBg)
  pdf.setDrawColor(...C.border)
  pdf.setLineWidth(0.3)
  pdf.roundedRect(M, y, CW, boxH, 3, 3, "FD")

  // Badge "MIS NOTAS"
  pdf.setFillColor(...C.primary)
  pdf.roundedRect(M + 4, y + 3.5, 24, 6, 2, 2, "F")
  pdf.setTextColor(...C.white)
  pdf.setFontSize(6.5)
  pdf.setFont("helvetica", "bold")
  pdf.text("MIS NOTAS", M + 6, y + 7.5)

  // Fecha
  pdf.setTextColor(...C.muted)
  pdf.setFontSize(7)
  pdf.setFont("helvetica", "normal")
  pdf.text(
    `Guardada el ${new Date().toLocaleDateString("es-AR")}`,
    W - M - 4, y + 7.5, { align: "right" }
  )

  // Contenido
  pdf.setTextColor(...C.dark)
  pdf.setFontSize(9.5)
  pdf.setFont("helvetica", "normal")
  let ty = y + 15
  noteLines.forEach((line: string) => {
    pdf.text(line, M + 6, ty)
    ty += 4.8
  })

  y += boxH + 6
  setY(y)
}