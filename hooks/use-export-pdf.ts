// hooks/use-export-pdf.ts
"use client"

import { useState, useRef } from "react"

export interface ExportOptions {
  categoryName: string
  lessonTitle: string
  notes?: string
  studentName?: string
}

/**
 * Inyecta una hoja de estilos en el documento clonado por html2canvas.
 * Es el único enfoque confiable: no depende de getComputedStyle
 * (que lee el documento original, no el clon) ni de selectores de
 * clase que Tailwind puede hashear en producción.
 */
function forceReadableColors(clonedDoc: Document) {
  const html = clonedDoc.documentElement

  // 1. Quitar dark mode
  html.classList.remove("dark")
  html.style.colorScheme = "light"

  // 2. Inyectar stylesheet con overrides agresivos
  const style = clonedDoc.createElement("style")
  style.textContent = `
    html, body {
      background: #ffffff !important;
      color: #111827 !important;
    }
    * {
      color: #111827 !important;
    }
    *, *::before, *::after {
      border-color: #d1d5db !important;
    }
    div, section, article, aside, header, footer, main, nav, span {
      background-color: transparent !important;
    }
    blockquote, blockquote * {
      color: #1f2937 !important;
    }
    em, i {
      color: #1f2937 !important;
    }
    svg {
      color: inherit !important;
    }
    svg * {
      fill: currentColor !important;
    }
  `
  clonedDoc.head.appendChild(style)

  // 3. Recorrer todos los nodos y corregir colores inline problemáticos
  clonedDoc.querySelectorAll<HTMLElement>("*").forEach((el) => {
    // Color de texto inline demasiado claro → forzar oscuro
    const c = el.style.color
    if (c) {
      const m = c.match(/\d+/g)
      if (m && m.length >= 3) {
        const [r, g, b] = m.map(Number)
        if (r > 160 && g > 160 && b > 160) {
          el.style.setProperty("color", "#111827", "important")
        }
      }
    }

    // Fondo inline oscuro (dark mode) → blanquear
    const bg = el.style.backgroundColor
    if (bg) {
      const m = bg.match(/\d+/g)
      if (m && m.length >= 3) {
        const [r, g, b] = m.map(Number)
        if (r < 60 && g < 60 && b < 60) {
          el.style.setProperty("background-color", "#ffffff", "important")
        }
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

      const W  = pdf.internal.pageSize.getWidth()
      const H  = pdf.internal.pageSize.getHeight()
      const M  = 15
      const CW = W - M * 2

      // ─── Paleta nativa del PDF ────────────────────────────────────
      const PRIMARY:  [number, number, number] = [29,  78, 216]
      const DARK:     [number, number, number] = [17,  24,  39]
      const MUTED:    [number, number, number] = [75,  85,  99]
      const LIGHT_BG: [number, number, number] = [249, 250, 251]
      const BORDER:   [number, number, number] = [209, 213, 219]

      // ─── Header ───────────────────────────────────────────────────
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
      pdf.setTextColor(186, 230, 253)
      pdf.text(dateStr, W - M, 10, { align: "right" })
      if (studentName) pdf.text(`Estudiante: ${studentName}`, W - M, 17, { align: "right" })

      let y = 36

      // ─── Título ───────────────────────────────────────────────────
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

      // ─── Capturar HTML ────────────────────────────────────────────
      const el      = contentRef.current
      const htmlEl  = document.documentElement
      const wasDark = htmlEl.classList.contains("dark")

      // Quitar dark del documento real durante la captura
      if (wasDark) htmlEl.classList.remove("dark")

      // Guardar y forzar fondo blanco en el elemento
      const prevStyle = el.getAttribute("style") ?? ""
      el.style.cssText = (prevStyle ? prevStyle + ";" : "") +
        "background:#ffffff!important;color:#111827!important;"

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: 800,
        onclone: (clonedDoc) => {
          forceReadableColors(clonedDoc)
        },
      })

      // Restaurar
      if (wasDark) htmlEl.classList.add("dark")
      if (prevStyle) el.setAttribute("style", prevStyle)
      else el.removeAttribute("style")

      // ─── Insertar imagen en el PDF ────────────────────────────────
      const imgData   = canvas.toDataURL("image/png")
      const imgW      = CW
      const imgH      = (canvas.height * imgW) / canvas.width
      const available = H - y - M

      if (imgH <= available) {
        pdf.addImage(imgData, "PNG", M, y, imgW, imgH)
        y += imgH + 10
      } else {
        // Dividir en páginas con guards contra slices vacíos
        let srcY = 0, first = true, remaining = imgH

        while (remaining > 0) {
          const sliceH    = first ? available : H - M * 2
          const srcSliceH = (sliceH / imgW) * canvas.width

          const srcHeightLeft = canvas.height - srcY
          if (srcHeightLeft <= 0) break

          const sc   = document.createElement("canvas")
          sc.width   = canvas.width
          sc.height  = Math.floor(Math.min(srcSliceH, srcHeightLeft))
          if (sc.height <= 0) break

          sc.getContext("2d")!.drawImage(
            canvas, 0, srcY, canvas.width, sc.height,
            0, 0, canvas.width, sc.height
          )

          const actualH = (sc.height * imgW) / canvas.width
          if (actualH > 0.1) {
            pdf.addImage(sc.toDataURL("image/png"), "PNG", M, first ? y : M, imgW, actualH)
          }

          srcY      += sc.height
          remaining -= actualH

          if (remaining > 0.5) { pdf.addPage(); first = false }
          else { y = (first ? y : M) + actualH + 10; break }
        }
      }

      // ─── Notas ────────────────────────────────────────────────────
      if (notes?.trim()) {
        if (y + 60 > H - M) { pdf.addPage(); y = M }
        pdf.setFontSize(10)
        const noteLines = pdf.splitTextToSize(notes, CW - 12)
        const boxH      = noteLines.length * 5 + 20
        pdf.setFillColor(...LIGHT_BG)
        pdf.setDrawColor(...BORDER)
        pdf.setLineWidth(0.3)
        pdf.roundedRect(M, y, CW, boxH, 3, 3, "FD")
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

      // ─── Footer ───────────────────────────────────────────────────
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