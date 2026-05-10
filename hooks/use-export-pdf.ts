// hooks/use-export-pdf.ts
"use client"

import { useState, useRef } from "react"

export interface ExportOptions {
  categoryName: string
  lessonTitle: string
  notes?: string
  studentName?: string
}

// Variables CSS del tema claro — garantizan legibilidad en el PDF
// sin importar si el usuario usa dark mode
const LIGHT_VARS: Record<string, string> = {
  "--background":          "0 0% 100%",
  "--foreground":          "222 47% 11%",
  "--card":                "0 0% 100%",
  "--card-foreground":     "222 47% 11%",
  "--muted":               "210 40% 96%",
  "--muted-foreground":    "215 16% 47%",
  "--primary":             "221 83% 53%",
  "--primary-foreground":  "0 0% 100%",
  "--secondary":           "210 40% 96%",
  "--secondary-foreground":"222 47% 11%",
  "--border":              "214 32% 91%",
  "--input":               "214 32% 91%",
}

// Forza light mode en el documento clonado que usa html2canvas
function applyLightModeToClone(clonedDoc: Document) {
  const html = clonedDoc.documentElement
  html.classList.remove("dark")
  html.style.colorScheme = "light"

  // Forzar fondo blanco en body
  clonedDoc.body.style.background    = "#ffffff"
  clonedDoc.body.style.color         = "#111827"

  // Aplicar variables CSS al root del clon
  for (const [prop, val] of Object.entries(LIGHT_VARS)) {
    html.style.setProperty(prop, val)
  }

  // Detectar y corregir textos con color demasiado claro
  // (colores CSS computados en dark mode que quedarían ilegibles)
  clonedDoc
    .querySelectorAll<HTMLElement>("p, h1, h2, h3, h4, h5, h6, span, li, blockquote, a")
    .forEach((node) => {
      const color = window.getComputedStyle(node).color
      const match = color.match(/\d+/g)
      if (match && match.length >= 3) {
        const [r, g, b] = match.map(Number)
        // Si el texto es muy claro (casi blanco) → forzar gris oscuro
        if (r > 180 && g > 180 && b > 180) {
          node.style.color = "#374151"
        }
      }
    })
}

export function useExportPDF() {
  const [isExporting, setIsExporting] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const exportToPDF = async (options: ExportOptions) => {
    if (!contentRef.current) return
    setIsExporting(true)

    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ])

      const { categoryName, lessonTitle, notes, studentName } = options
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })

      const W  = pdf.internal.pageSize.getWidth()   // 210mm
      const H  = pdf.internal.pageSize.getHeight()  // 297mm
      const M  = 15
      const CW = W - M * 2

      // ─── Paleta del PDF (independiente del tema de la app) ────────
      const PRIMARY:  [number, number, number] = [59,  130, 246]
      const DARK:     [number, number, number] = [17,  24,  39]
      const MUTED:    [number, number, number] = [107, 114, 128]
      const LIGHT_BG: [number, number, number] = [249, 250, 251]
      const BORDER:   [number, number, number] = [229, 231, 235]

      // ─── Header azul ──────────────────────────────────────────────
      pdf.setFillColor(...PRIMARY)
      pdf.rect(0, 0, W, 28, "F")

      pdf.setTextColor(255, 255, 255)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10)
      pdf.text("Mi Seminario e Instituto", M, 10)

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.text(categoryName, M, 17)

      const dateStr = new Date().toLocaleDateString("es-AR", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      })
      pdf.setFontSize(8)
      pdf.setTextColor(200, 220, 255)
      pdf.text(dateStr, W - M, 10, { align: "right" })
      if (studentName) pdf.text(`Estudiante: ${studentName}`, W - M, 17, { align: "right" })

      let y = 36

      // ─── Título de la lección ─────────────────────────────────────
      pdf.setTextColor(...DARK)
      pdf.setFontSize(18)
      pdf.setFont("helvetica", "bold")
      const titleLines = pdf.splitTextToSize(lessonTitle, CW)
      pdf.text(titleLines, M, y)
      y += titleLines.length * 8 + 4

      pdf.setDrawColor(...BORDER)
      pdf.setLineWidth(0.3)
      pdf.line(M, y, W - M, y)
      y += 8

      // ─── Capturar HTML forzando light mode ────────────────────────
      const el      = contentRef.current
      const htmlEl  = document.documentElement
      const wasDark = htmlEl.classList.contains("dark")

      // 1. Quitar dark del documento real durante la captura
      if (wasDark) htmlEl.classList.remove("dark")

      // 2. Guardar y sobreescribir estilos inline del elemento
      const prevInline = el.getAttribute("style") ?? ""
      el.style.background = "#ffffff"
      el.style.color      = "#111827"
      for (const [prop, val] of Object.entries(LIGHT_VARS)) {
        el.style.setProperty(prop, val)
      }

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: 800,
        onclone: (_clonedDoc, _clonedEl) => {
          applyLightModeToClone(_clonedDoc)
        },
      })

      // 3. Restaurar estado original
      if (wasDark) htmlEl.classList.add("dark")
      el.setAttribute("style", prevInline)

      // ─── Insertar imagen en el PDF ────────────────────────────────
      const imgData   = canvas.toDataURL("image/png")
      const imgW      = CW
      const imgH      = (canvas.height * imgW) / canvas.width
      const available = H - y - M

      if (imgH <= available) {
        pdf.addImage(imgData, "PNG", M, y, imgW, imgH)
        y += imgH + 10
      } else {
        // Dividir imagen en varias páginas
        let srcY      = 0
        let first     = true
        let remaining = imgH

        while (remaining > 0) {
          const sliceH    = first ? available : H - M * 2
          const srcSliceH = (sliceH / imgW) * canvas.width

          const sc    = document.createElement("canvas")
          sc.width    = canvas.width
          sc.height   = Math.min(srcSliceH, canvas.height - srcY)
          sc.getContext("2d")!.drawImage(
            canvas, 0, srcY, canvas.width, sc.height,
            0, 0, canvas.width, sc.height
          )

          const actualH = (sc.height * imgW) / canvas.width
          pdf.addImage(sc.toDataURL("image/png"), "PNG", M, first ? y : M, imgW, actualH)

          srcY      += sc.height
          remaining -= actualH

          if (remaining > 0) { pdf.addPage(); first = false }
          else y = (first ? y : M) + actualH + 10
        }
      }

      // ─── Sección de notas (texto nativo, siempre legible) ─────────
      if (notes?.trim()) {
        if (y + 60 > H - M) { pdf.addPage(); y = M }

        pdf.setFontSize(10)
        const noteLines = pdf.splitTextToSize(notes, CW - 12)
        const boxH      = noteLines.length * 5 + 20

        pdf.setFillColor(...LIGHT_BG)
        pdf.setDrawColor(...BORDER)
        pdf.setLineWidth(0.3)
        pdf.roundedRect(M, y, CW, boxH, 3, 3, "FD")

        // Badge "MIS NOTAS"
        pdf.setFillColor(...PRIMARY)
        pdf.roundedRect(M + 4, y + 4, 28, 7, 2, 2, "F")
        pdf.setTextColor(255, 255, 255)
        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(7)
        pdf.text("MIS NOTAS", M + 6, y + 9)

        pdf.setTextColor(...MUTED)
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(7.5)
        pdf.text(
          `Guardada el ${new Date().toLocaleDateString("es-AR")}`,
          W - M - 4, y + 9, { align: "right" }
        )

        pdf.setTextColor(...DARK)
        pdf.setFontSize(10)
        pdf.text(noteLines, M + 6, y + 18)
        y += boxH + 8
      }

      // ─── Footer en todas las páginas ──────────────────────────────
      const total = pdf.getNumberOfPages()
      for (let i = 1; i <= total; i++) {
        pdf.setPage(i)
        pdf.setFillColor(...LIGHT_BG)
        pdf.rect(0, H - 10, W, 10, "F")
        pdf.setTextColor(...MUTED)
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(7)
        pdf.text("Mi Seminario e Instituto", M, H - 4)
        pdf.text(`Página ${i} de ${total}`, W - M, H - 4, { align: "right" })
      }

      // ─── Guardar ──────────────────────────────────────────────────
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

  return { contentRef, isExporting, exportToPDF }
}