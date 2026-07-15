// lib/recuperaciones/parse-csv.ts
// Lee el mismo CSV que consumían los scripts de Python
// (ListadoRecuperacionesRegion2.csv) y lo normaliza a RecuperacionRow[].

import Papa from "papaparse"
import type { RecuperacionRow } from "./types"

// Headers tal cual vienen en el CSV original.
const COLUMNAS_ESPERADAS = [
  "Estaca",
  "Clase",
  "Nombre",
  "Fecha",
  "Leccion",
  "Tipo",
  "LinkLeccion",
  "% Asistencia",
] as const

type FilaCSV = Record<(typeof COLUMNAS_ESPERADAS)[number], string>

export interface ParseResult {
  rows: RecuperacionRow[]
  columnasFaltantes: string[]
  totalFilas: number
}

export function parseRecuperacionesCSV(file: File): Promise<ParseResult> {
  return new Promise((resolve, reject) => {
    Papa.parse<FilaCSV>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const columnasEncontradas = result.meta.fields ?? []
        const columnasFaltantes = COLUMNAS_ESPERADAS.filter(
          (c) => !columnasEncontradas.includes(c)
        )

        const rows: RecuperacionRow[] = result.data
          .filter((r) => r.Nombre && r.Nombre.trim() !== "")
          .map((r) => {
            const fechaDT = parsearFecha(r.Fecha)
            return {
              estaca: (r.Estaca ?? "").trim(),
              clase: (r.Clase ?? "").trim(),
              nombre: (r.Nombre ?? "").trim(),
              fecha: formatearFecha(fechaDT, r.Fecha),
              fechaDT,
              leccion: (r.Leccion ?? "").trim(),
              tipo: (r.Tipo ?? "").trim(),
              linkLeccion: (r.LinkLeccion ?? "").trim(),
              asistencia: (r["% Asistencia"] ?? "").trim(),
            }
          })

        resolve({ rows, columnasFaltantes, totalFilas: rows.length })
      },
      error: (err) => reject(err),
    })
  })
}

function parsearFecha(raw: string): Date {
  if (!raw) return new Date(NaN)
  // Soporta dd/mm/yyyy y formatos ISO por si el CSV viene ya normalizado
  const partesSlash = raw.split("/")
  if (partesSlash.length === 3) {
    const [dd, mm, yyyy] = partesSlash.map((p) => parseInt(p, 10))
    if (!isNaN(dd) && !isNaN(mm) && !isNaN(yyyy)) {
      return new Date(yyyy, mm - 1, dd)
    }
  }
  return new Date(raw)
}

function formatearFecha(d: Date, original: string): string {
  if (isNaN(d.getTime())) return original
  const dd = String(d.getDate()).padStart(2, "0")
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  const yyyy = d.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}