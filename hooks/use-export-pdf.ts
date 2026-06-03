// hooks/use-export-pdf.ts
"use client"

import { useState } from "react"
import type { Seccion, BloqueResumen } from "@/lib/types"
import { getLessonNote } from "@/lib/notes-storage"

export interface ExportOptions {
  categoryName: string
  lessonTitle:  string
  secciones:    Seccion[]
  categoryId:   string
  lessonId:     string
  studentName?: string
}

// ─── Colores ──────────────────────────────────────────────────────────────────
const C = {
  primary:      [29,  78,  216] as [number,number,number],
  dark:         [17,  24,   39] as [number,number,number],
  body:         [55,  65,   81] as [number,number,number],
  muted:        [107, 114, 128] as [number,number,number],
  white:        [255, 255, 255] as [number,number,number],
  pageBg:       [249, 250, 251] as [number,number,number],
  citaBg:       [239, 246, 255] as [number,number,number],
  escrituraBg:  [240, 249, 255] as [number,number,number],
  border:       [209, 213, 219] as [number,number,number],
  primaryLight: [219, 234, 254] as [number,number,number],
}

export function useExportPDF() {
  const [isExporting, setIsExporting] = useState(false)

  const exportToPDF = async (options: ExportOptions) => {
    setIsExporting(true)
    try {
      const { default: jsPDF } = await import("jspdf")
      const { categoryName, lessonTitle, secciones, categoryId, lessonId, studentName } = options

      const savedNote = getLessonNote(categoryId, lessonId)
      const notes     = savedNote?.content?.trim() ?? ""

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
      const W   = pdf.internal.pageSize.getWidth()
      const H   = pdf.internal.pageSize.getHeight()
      const M   = 14
      const CW  = W - M * 2
      const BOT = H - 12

      // ── Posición Y como objeto para que las funciones la muten ────
      // Pasar { y } por referencia evita que ensure() y los draw* se desincronicen.
      const pos = { y: 0 }

      const newPage = () => {
        pdf.addPage()
        pos.y = 16
      }

      const ensure = (need: number) => {
        if (pos.y + need > BOT) newPage()
      }

      // ────────────────────────────────────────────────────────────────
      // PÁGINA 1 — Header azul
      // ────────────────────────────────────────────────────────────────
      pdf.setFillColor(...C.primary)
      pdf.rect(0, 0, W, 30, "F")

      pdf.setTextColor(...C.white)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(11)
      pdf.text("Aula SEI", M, 11)

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

      pos.y = 40

      pdf.setTextColor(...C.dark)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(20)
      const titleLines = pdf.splitTextToSize(lessonTitle, CW)
      titleLines.forEach((line: string) => {
        pdf.text(line, M, pos.y)
        pos.y += 9
      })
      pos.y += 2

      pdf.setDrawColor(...C.border)
      pdf.setLineWidth(0.3)
      pdf.line(M, pos.y, W - M, pos.y)
      pos.y += 10

      // ────────────────────────────────────────────────────────────────
      // SECCIONES
      // ────────────────────────────────────────────────────────────────
      for (const seccion of secciones) {

        if (seccion.tipo === "resumen" && seccion.bloques) {
          for (const bloque of seccion.bloques) {
            renderBloque(pdf, bloque, M, CW, W, C, pos, ensure, newPage)
          }
          continue
        }

        if (seccion.tipo === "contexto" && seccion.contenido) {
          ensure(12)
          renderParrafo(pdf, seccion.contenido, M, C, CW, pos)
          pos.y += 6
        }

        if (seccion.tipo === "conclusion" && seccion.contenido) {
          ensure(14)
          const antes = pos.y
          renderParrafo(pdf, seccion.contenido, M + 6, C, CW - 6, pos, "italic")
          pdf.setDrawColor(...C.primaryLight)
          pdf.setLineWidth(1.5)
          pdf.line(M + 1, antes - 1, M + 1, pos.y + 1)
          pos.y += 6
        }

        if (seccion.tipo === "enseñanza") {
          drawCitaBox(pdf, { texto: seccion.texto ?? "", autor: seccion.autor, fuente: seccion.fuente },
            M, CW, W, C, pos, ensure)
        }

        if (seccion.tipo === "escrituras" && seccion.citas?.length) {
          ensure(10)
          pdf.setTextColor(...C.muted)
          pdf.setFontSize(7.5)
          pdf.setFont("helvetica", "bold")
          pdf.text("ESCRITURAS CLAVE", M, pos.y)
          pos.y += 6
          for (const cita of seccion.citas) {
            drawEscrituraBox(pdf, cita, M, CW, C, pos, ensure)
          }
        }

        if (seccion.tipo === "cuestionario" && seccion.preguntas?.length) {
          drawReflexionBox(pdf, seccion.preguntas, M, CW, C, pos, ensure)
        }
      }

      // ────────────────────────────────────────────────────────────────
      // NOTAS
      // ────────────────────────────────────────────────────────────────
      if (notes) {
        drawNotasBox(pdf, notes, M, CW, W, C, pos, ensure)
      }

      // ── Footer con numeración correcta ────────────────────────────
      const totalPages = pdf.getNumberOfPages()
      for (let p = 1; p <= totalPages; p++) {
        pdf.setPage(p)
        pdf.setFillColor(...C.pageBg)
        pdf.rect(0, H - 10, W, 10, "F")
        pdf.setTextColor(...C.muted)
        pdf.setFontSize(7)
        pdf.setFont("helvetica", "normal")
        pdf.text("Aula SEI", M, H - 4)
        pdf.text(`Página ${p} de ${totalPages}`, W - M, H - 4, { align: "right" })
      }

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
// Todas las funciones reciben `pos: { y: number }` por referencia.
// ensure() muta pos.y al saltar de página, y las funciones leen pos.y
// DESPUÉS de ensure() — así siempre tienen la posición correcta.
// ─────────────────────────────────────────────────────────────────────────────

function renderBloque(
  pdf: any, bloque: BloqueResumen,
  M: number, CW: number, W: number, C: any,
  pos: { y: number }, ensure: (n: number) => void, newPage: () => void,
) {
  switch (bloque.tipo) {
    case "parrafo": {
      ensure(10)
      renderParrafo(pdf, bloque.texto, M, C, CW, pos)
      pos.y += 6
      break
    }
    case "escritura": {
      drawEscrituraBox(pdf,
        { referencia: bloque.referencia, texto: bloque.texto, comentario: bloque.comentario },
        M, CW, C, pos, ensure)
      break
    }
    case "cita": {
      drawCitaBox(pdf,
        { texto: bloque.texto, autor: bloque.autor, fuente: bloque.fuente },
        M, CW, W, C, pos, ensure)
      break
    }
    case "doctrinal": {
      ensure(14)
      pdf.setTextColor(...C.primary)
      pdf.setFontSize(7.5)
      pdf.setFont("helvetica", "bold")
      pdf.text("VERDADES DOCTRINALES", M, pos.y)
      pos.y += 5
      for (const punto of bloque.puntos) {
        ensure(8)
        pdf.setFillColor(...C.primary)
        pdf.circle(M + 1.5, pos.y - 1.2, 1, "F")
        pdf.setTextColor(...C.body)
        pdf.setFontSize(9.5)
        pdf.setFont("helvetica", "normal")
        const lines = pdf.splitTextToSize(punto, CW - 7)
        lines.forEach((line: string) => {
          ensure(5)
          pdf.text(line, M + 5, pos.y)
          pos.y += 4.5
        })
        pos.y += 1
      }
      pos.y += 4
      break
    }
    case "reflexion": {
      drawReflexionBox(pdf, bloque.preguntas, M, CW, C, pos, ensure)
      break
    }
  }
}

// ── Párrafo simple ────────────────────────────────────────────────────────────
function renderParrafo(
  pdf: any, texto: string, x: number, C: any, maxW: number,
  pos: { y: number }, style: "normal" | "italic" = "normal",
) {
  pdf.setTextColor(...C.body)
  pdf.setFontSize(10)
  pdf.setFont("helvetica", style)
  const lines = pdf.splitTextToSize(texto, maxW)
  lines.forEach((line: string) => {
    pdf.text(line, x, pos.y)
    pos.y += 5
  })
}

// ── Caja de escritura ─────────────────────────────────────────────────────────
function drawEscrituraBox(
  pdf: any,
  cita: { referencia: string; texto: string; comentario?: string },
  M: number, CW: number, C: any,
  pos: { y: number }, ensure: (n: number) => void,
) {
  pdf.setFontSize(9.5)
  const textLines   = pdf.splitTextToSize(`"${cita.texto}"`, CW - 10)
  const comentLines = cita.comentario ? pdf.splitTextToSize(cita.comentario, CW - 10) : []
  const boxH = 7 + textLines.length * 4.8 + (comentLines.length > 0 ? 2 + comentLines.length * 4.2 : 0) + 5

  // ensure() puede mutar pos.y → leemos pos.y DESPUÉS
  ensure(boxH + 4)
  const y = pos.y

  pdf.setFillColor(...C.escrituraBg)
  pdf.setDrawColor(...C.primaryLight)
  pdf.setLineWidth(0.3)
  pdf.roundedRect(M, y, CW, boxH, 3, 3, "FD")

  pdf.setFillColor(...C.primary)
  pdf.roundedRect(M, y, 2.5, boxH, 1, 1, "F")

  pdf.setTextColor(...C.primary)
  pdf.setFontSize(7.5)
  pdf.setFont("helvetica", "bold")
  pdf.text(cita.referencia.toUpperCase(), M + 6, y + 5.5)

  pdf.setTextColor(...C.dark)
  pdf.setFontSize(9.5)
  pdf.setFont("helvetica", "italic")
  let ty = y + 11
  textLines.forEach((line: string) => {
    pdf.text(line, M + 6, ty)
    ty += 4.8
  })

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

  pos.y = y + boxH + 4
}

// ── Caja de cita profética ────────────────────────────────────────────────────
function drawCitaBox(
  pdf: any,
  cita: { texto: string; autor?: string; fuente?: string },
  M: number, CW: number, W: number, C: any,
  pos: { y: number }, ensure: (n: number) => void,
) {
  pdf.setFontSize(10.5)
  const textLines = pdf.splitTextToSize(`"${cita.texto}"`, CW - 12)
  const boxH = 9 + textLines.length * 5.5 + (cita.autor ? 10 : 4)

  ensure(boxH + 5)
  const y = pos.y

  pdf.setFillColor(...C.citaBg)
  pdf.setDrawColor(...C.primaryLight)
  pdf.setLineWidth(0.4)
  pdf.roundedRect(M, y, CW, boxH, 4, 4, "FD")

  pdf.setTextColor(...C.primaryLight)
  pdf.setFontSize(42)
  pdf.setFont("helvetica", "bold")
  pdf.text("\u201C", M + 3, y + 11)

  pdf.setTextColor(...C.dark)
  pdf.setFontSize(10.5)
  pdf.setFont("helvetica", "italic")
  let ty = y + 9
  textLines.forEach((line: string) => {
    pdf.text(line, M + 10, ty)
    ty += 5.5
  })

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

  pos.y = y + boxH + 5
}

// ── Caja de reflexión — una tarjeta por pregunta ──────────────────────────────
function drawReflexionBox(
  pdf: any, preguntas: string[],
  M: number, CW: number, C: any,
  pos: { y: number }, ensure: (n: number) => void,
) {
  ensure(12)
  pdf.setTextColor(...C.primary)
  pdf.setFontSize(7.5)
  pdf.setFont("helvetica", "bold")
  pdf.text("PARA REFLEXIONAR", M, pos.y)
  pos.y += 8

  preguntas.forEach((pregunta, i) => {
    pdf.setFontSize(9.5)
    const lines  = pdf.splitTextToSize(pregunta, CW - 14)
    const itemH  = lines.length * 4.8 + 8

    // ensure() puede mutar pos.y → leemos pos.y DESPUÉS
    ensure(itemH + 3)
    const y = pos.y

    pdf.setFillColor(...C.pageBg)
    pdf.setDrawColor(...C.border)
    pdf.setLineWidth(0.3)
    pdf.roundedRect(M, y, CW, itemH, 3, 3, "FD")

    // Círculo con número
    pdf.setFillColor(...C.primaryLight)
    pdf.circle(M + 7, y + itemH / 2, 3.5, "F")
    pdf.setTextColor(...C.primary)
    pdf.setFontSize(7)
    pdf.setFont("helvetica", "bold")
    pdf.text(String(i + 1), M + 7, y + itemH / 2 + 1, { align: "center" })

    // Texto
    pdf.setTextColor(...C.body)
    pdf.setFontSize(9.5)
    pdf.setFont("helvetica", "normal")
    let ty = y + (itemH - lines.length * 4.8) / 2 + 4.8
    lines.forEach((line: string) => {
      pdf.text(line, M + 13, ty)
      ty += 4.8
    })

    pos.y = y + itemH + 3
  })

  pos.y += 2
}

// ── Caja de notas ─────────────────────────────────────────────────────────────
function drawNotasBox(
  pdf: any, notes: string,
  M: number, CW: number, W: number, C: any,
  pos: { y: number }, ensure: (n: number) => void,
) {
  pdf.setFontSize(9.5)
  const noteLines = pdf.splitTextToSize(notes, CW - 12)
  const boxH = 12 + noteLines.length * 4.8 + 6

  // ensure() puede mutar pos.y → leemos pos.y DESPUÉS
  ensure(boxH + 6)
  const y = pos.y

  pdf.setFillColor(...C.pageBg)
  pdf.setDrawColor(...C.border)
  pdf.setLineWidth(0.3)
  pdf.roundedRect(M, y, CW, boxH, 3, 3, "FD")

  pdf.setFillColor(...C.primary)
  pdf.roundedRect(M + 4, y + 3.5, 24, 6, 2, 2, "F")
  pdf.setTextColor(...C.white)
  pdf.setFontSize(6.5)
  pdf.setFont("helvetica", "bold")
  pdf.text("MIS NOTAS", M + 6, y + 7.5)

  pdf.setTextColor(...C.muted)
  pdf.setFontSize(7)
  pdf.setFont("helvetica", "normal")
  pdf.text(
    `Guardada el ${new Date().toLocaleDateString("es-AR")}`,
    W - M - 4, y + 7.5, { align: "right" }
  )

  pdf.setTextColor(...C.dark)
  pdf.setFontSize(9.5)
  pdf.setFont("helvetica", "normal")
  let ty = y + 15
  noteLines.forEach((line: string) => {
    pdf.text(line, M + 6, ty)
    ty += 4.8
  })

  pos.y = y + boxH + 6
}
