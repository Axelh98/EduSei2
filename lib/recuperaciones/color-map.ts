// lib/recuperaciones/color-map.ts
// Mismos colores que COLOR_MAP en los scripts de Python.
// Si en el futuro se quiere compartir con lib/types.ts (Lesson.type),
// este es el lugar natural para unificarlo.

export type RGB = [number, number, number]

export const COLOR_MAP: Record<string, RGB> = {
  "Antiguo Testamento - Ven Sigueme": [24, 24, 27],
  "Preparación para la Vida": [239, 68, 68],
  "Dominio de la Doctrina": [249, 115, 22],
  "Especial": [56, 189, 248],
}

export function colorPorTipo(tipo: string): RGB {
  return COLOR_MAP[tipo] ?? [0, 0, 0]
}

/**
 * Semáforo de asistencia usado en "Por Barrio": rojo <50%, amarillo <75%, verde >=75%.
 */
export function semaforoBarrio(pctStr: string): { fondo: RGB; texto: RGB } {
  const valor = parseFloat(String(pctStr).replace("%", "").trim())
  if (isNaN(valor)) return { fondo: [255, 255, 255], texto: [0, 0, 0] }
  if (valor < 50) return { fondo: [255, 230, 230], texto: [150, 0, 0] }
  if (valor < 75) return { fondo: [255, 255, 220], texto: [100, 80, 0] }
  return { fondo: [230, 255, 230], texto: [0, 100, 0] }
}

/**
 * Semáforo de asistencia usado en "Por Fecha": rojo <65%, naranja <75%, verde >=75%.
 */
export function semaforoFecha(pctStr: string): { fondo: RGB; texto: RGB } {
  const valor = parseFloat(String(pctStr).replace("%", "").trim())
  if (isNaN(valor)) return { fondo: [255, 255, 255], texto: [0, 0, 0] }
  if (valor < 65) return { fondo: [254, 226, 226], texto: [185, 28, 28] }
  if (valor < 75) return { fondo: [255, 247, 237], texto: [194, 65, 12] }
  return { fondo: [240, 253, 244], texto: [21, 128, 61] }
}