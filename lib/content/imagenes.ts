// lib/content/imagenes.ts
//
// Imágenes del manual oficial de la Iglesia.
//
// ⚠️ Las imágenes NO se copian a este repositorio: se enlazan al servidor de
// la Iglesia. Los términos de uso prohíben publicar su material "desde este
// sitio en otro sitio web" sin consentimiento escrito; enlazarlas no es
// publicarlas, porque los bytes los sigue sirviendo churchofjesuschrist.org.
//
// Por la misma razón se usa <img> plano y NUNCA next/image: next/image
// proxea el archivo por /_next/image, o sea que los bytes saldrían de
// nuestro dominio, que es justamente lo que hay que evitar.
//
// El servidor de imágenes es IIIF (https://iiif.io/api/image/3.0/), así que
// se le puede pedir cualquier ancho y formato a demanda.

import headshots from "./_headshots.json"

const BASE = "https://www.churchofjesuschrist.org/imgs"

/**
 * Normaliza el nombre de una autoridad para poder emparejarlo entre el manual
 * y nuestros JSON.
 *
 * Quita el tratamiento ("Presidente", "Élder"…) para que "Presidente Russell
 * M. Nelson" y "Élder Russell M. Nelson" resuelvan a la misma persona.
 *
 * ⚠️ El primer reemplazo NO es decorativo: el manual escribe las iniciales
 * con espacio no separable (U+00A0), así que "Élder C.\u00A0Scott Grow" y
 * "Élder C. Scott Grow" son cadenas distintas. Sin normalizar ese espacio,
 * la mayoría de los nombres con inicial no empareja.
 */
export function normalizarAutor(nombre: string): string {
  return nombre
    .replace(/[\u00A0\u2007\u202F]/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^(presidente|presidenta|elder|hermano|hermana|obispo)\s+/, "")
    .replace(/[^a-z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

/** URL de la imagen al ancho pedido, en webp. */
export function urlImagen(assetId: string, ancho: number): string {
  return `${BASE}/${assetId}/full/${encodeURIComponent(`!${ancho},`)}/0/default.webp`
}

/** srcset de 1x y 2x, para que no se vea borrosa en pantallas retina. */
export function srcSetImagen(assetId: string, ancho: number): string {
  return `${urlImagen(assetId, ancho)} 1x, ${urlImagen(assetId, ancho * 2)} 2x`
}

/**
 * assetId del retrato oficial de una autoridad, o undefined si no lo tenemos.
 *
 * El mapa es por persona, no por lección: una sola entrada sirve para todas
 * las lecciones que citen a esa persona.
 */
export function retratoDe(autor: string | undefined): string | undefined {
  if (!autor) return undefined
  return (headshots as Record<string, string>)[normalizarAutor(autor)]
}
