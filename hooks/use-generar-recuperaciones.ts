// hooks/use-generar-recuperaciones.ts
"use client"

import { useState } from "react"
import { parseRecuperacionesCSV } from "@/lib/recuperaciones/parse-csv"
import { generarPDFBarrio } from "@/lib/recuperaciones/generar-pdf-barrio"
import { generarPDFFecha } from "@/lib/recuperaciones/generar-pdf-fecha"
import { groupBy } from "@/lib/recuperaciones/agrupar"
import type { RecuperacionRow, TipoReporte } from "@/lib/recuperaciones/types"

export interface EstadoCarga {
  rows: RecuperacionRow[]
  columnasFaltantes: string[]
  estacas: string[]
  totalFilas: number
}

const fechaHoy = () => {
  const d = new Date()
  return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}`
}

const nombreArchivo = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

export function useGenerarRecuperaciones() {
  const [cargando, setCargando] = useState(false)
  const [generando, setGenerando] = useState(false)
  const [datos, setDatos] = useState<EstadoCarga | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function cargarCSV(file: File) {
    setCargando(true)
    setError(null)
    try {
      const { rows, columnasFaltantes, totalFilas } = await parseRecuperacionesCSV(file)
      if (columnasFaltantes.length > 0) {
        setError(`Faltan columnas en el CSV: ${columnasFaltantes.join(", ")}`)
        setDatos(null)
        return
      }
      const estacas = Array.from(new Set(rows.map((r) => r.estaca))).sort((a, b) => a.localeCompare(b, "es"))
      setDatos({ rows, columnasFaltantes, estacas, totalFilas })
    } catch (err) {
      console.error(err)
      setError("No se pudo leer el CSV. Verificá que el archivo no esté dañado.")
      setDatos(null)
    } finally {
      setCargando(false)
    }
  }

  /**
   * Genera los reportes del tipo elegido para las estacas indicadas
   * (o todas, si no se pasa `estacasFiltro`) y descarga un .zip con la
   * misma estructura de carpetas que generaban los scripts de Python.
   */
  async function generarYDescargar(tipo: TipoReporte, estacasFiltro?: string[]) {
    if (!datos) return
    setGenerando(true)
    setError(null)
    try {
      const { default: JSZip } = await import("jszip")
      const zip = new JSZip()

      const filasFiltradas = estacasFiltro?.length
        ? datos.rows.filter((r) => estacasFiltro.includes(r.estaca))
        : datos.rows

      const porEstaca = groupBy(filasFiltradas, (r) => r.estaca)

      porEstaca.forEach((filasEstaca, estaca) => {
        const carpetaEstaca = zip.folder(`Reportes Recuperaciones - (${estaca})`)
        const carpetaBarrios = carpetaEstaca?.folder("Barrios - Clases")

        if (tipo === "barrio") {
          const porClase = groupBy(filasEstaca, (r) => r.clase)
          porClase.forEach((filasClase, clase) => {
            const doc = generarPDFBarrio(clase, filasClase)
            const blob = doc.output("blob")
            carpetaBarrios?.file(`Recuperaciones Individuales - ${clase}.pdf`, blob)
          })
        } else {
          const fecha = fechaHoy()

          const docMaestro = generarPDFFecha(filasEstaca, {
            tituloCabecera: `Reporte Maestro - Estaca ${estaca}`,
            multiClase: true,
          })
          carpetaEstaca?.file(`Reporte_Maestro_${nombreArchivo(estaca)}_${fecha}.pdf`, docMaestro.output("blob"))

          const porClase = groupBy(filasEstaca, (r) => r.clase)
          porClase.forEach((filasClase, clase) => {
            const docClase = generarPDFFecha(filasClase, {
              tituloCabecera: `Recuperaciones Grupal - ${clase}`,
              multiClase: false,
            })
            carpetaBarrios?.file(
              `RecuperacionesGrupal_${nombreArchivo(clase)}_${fecha}.pdf`,
              docClase.output("blob")
            )
          })
        }
      })

      const contenidoZip = await zip.generateAsync({ type: "blob" })
      descargarBlob(contenidoZip, `Reportes-Recuperaciones-${tipo === "barrio" ? "PorBarrio" : "PorFecha"}.zip`)
    } catch (err) {
      console.error(err)
      setError("Ocurrió un error generando los PDFs. Revisá la consola para más detalle.")
    } finally {
      setGenerando(false)
    }
  }

  function limpiar() {
    setDatos(null)
    setError(null)
  }

  return { cargando, generando, datos, error, cargarCSV, generarYDescargar, limpiar }
}

function descargarBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}