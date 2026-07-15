// lib/recuperaciones/types.ts
// Fila normalizada a partir del CSV "ListadoRecuperacionesRegion2.csv".
// El CSV trae los headers en español con espacios/mayúsculas
// ("% Asistencia", "Leccion", etc.) — acá los mapeamos una sola vez
// a camelCase para no repetir strings mágicos en el resto del código.

export interface RecuperacionRow {
  estaca: string
  clase: string
  nombre: string
  /** Fecha ya formateada dd/mm/yyyy, lista para mostrar */
  fecha: string
  /** Fecha real, para poder ordenar cronológicamente */
  fechaDT: Date
  leccion: string
  tipo: string
  linkLeccion: string
  /** Tal cual viene del CSV, ej. "72%" o "72" */
  asistencia: string
}

export interface ResumenAlumno {
  nombre: string
  pendientes: number
  asistencia: string
}

export interface ResumenClaseFecha {
  clase: string
  fecha: string
  faltas: number
}

export type TipoReporte = "barrio" | "fecha"