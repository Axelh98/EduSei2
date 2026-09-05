// lib/pdf/lesson-pdf.ts
//
// Construcción del PDF de una lección. Vive fuera del hook de React a
// propósito: así se puede generar un PDF desde Node —y medirlo con
// pdftotext— sin abrir el navegador, que es la única forma de iterar el
// diseño sin trabajar a ciegas. Ver scripts/pdf-muestra.ts.
//
// El hook (hooks/use-export-pdf.ts) se queda con lo que sí es del navegador:
// el estado de "exportando", leer la nota del localStorage y disparar la
// descarga.
//
// ── Criterios tipográficos ───────────────────────────────────────────────────
// La versión anterior ponía 108 caracteres por línea (lo legible son 60-75),
// sin justificar, todo en Helvetica y con cajas de color. Esta:
//
//   · Columna de ~78 caracteres — márgenes de 30 mm, cuerpo a 13 pt.
//   · Serif (Times) para leer, sans (Helvetica) para rotular. Es la
//     combinación editorial clásica: la serif se lee mejor en papel y la
//     sans separa la estructura del contenido.
//   · Justificado, salvo la última línea de cada párrafo — justificar la
//     última es el error clásico que abre "ríos" de espacio.
//   · Sangría de primera línea, menos en el párrafo que abre una sección.
//   · Sin fondos de color: filetes finos e hilos verticales. Se imprime igual
//     de bien en blanco y negro.
//   · Nada de flechas ni glifos fuera de WinAnsi: las fuentes core de jsPDF
//     no los tienen y salían como basura ("↗" se veía como un cuadrito).

import type { Seccion, BloqueResumen } from "@/lib/types"

export interface LessonPdfOptions {
  categoryName: string
  lessonTitle:  string
  secciones:    Seccion[]
  studentName?: string
  chapterUrl?:  string
  /** La nota del maestro, ya leída del storage por quien llama. */
  notes?:       string
}

// ─── Paleta ───────────────────────────────────────────────────────────────────
// Solo para filetes, rótulos y acentos. El cuerpo siempre va en tinta.
const C = {
  primary: [29, 78, 216] as [number, number, number],
  ink:     [23, 23, 23] as [number, number, number],
  body:    [38, 38, 38] as [number, number, number],
  muted:   [115, 115, 115] as [number, number, number],
  rule:    [214, 214, 214] as [number, number, number],
}

// ─── Medidas (mm) ─────────────────────────────────────────────────────────────
// Medidas calibradas midiendo el resultado, no a ojo: con 30 mm de margen y
// el cuerpo a 13 pt la columna queda en 78 caracteres por línea. La versión
// anterior (14 mm y 10 pt) daba 108, que es donde el ojo se pierde al saltar
// de renglón.
const L = {
  margin:     30,
  top:        20,
  bottom:     20,
  indent:     7,     // sangría de primera línea
  quoteInset: 8,     // corrimiento del texto citado respecto del hilo
  lead:       6.2,   // interlineado del cuerpo (≈1.35)
  leadQuote:  6,
  gapPara:    2.4,   // aire entre párrafos del mismo bloque
  gapBlock:   7,     // aire entre bloques
  gapSection: 11,    // aire antes del rótulo de una sección nueva
}

const F = {
  body:    13,
  quote:   12.5,
  cita:    13,
  label:   8.5,
  small:   9,
  title:   20,
  meta:    9,
}

type Pos = { y: number }

export async function buildLessonPdf(options: LessonPdfOptions): Promise<any> {
  const { default: jsPDF } = await import("jspdf")
  const { categoryName, lessonTitle, secciones, studentName, chapterUrl } = options
  const notes = options.notes?.trim() ?? ""

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
  const W = pdf.internal.pageSize.getWidth()
  const H = pdf.internal.pageSize.getHeight()
  const M = L.margin
  const CW = W - M * 2
  const BOT = H - L.bottom

  const pos: Pos = { y: 0 }

  /**
   * Dibuja una línea, justificándola si corresponde.
   *
   * El `align: "justify"` de jsPDF no sirve acá: solo justifica cuando él
   * mismo parte el texto con `maxWidth`, y una línea suelta la trata como
   * última y la deja alineada a la izquierda (se comprobó: emitía `0 Tw` en
   * todas). Como acá las líneas se parten a mano —hace falta para la sangría
   * y para cortar de página sin partir un párrafo—, el reparto del espacio
   * sobrante se hace también a mano, palabra por palabra.
   *
   * Si el hueco resultante supera 2.6 veces el espacio normal, la línea se
   * deja sin justificar: estirarla tanto abre un "río" blanco que se ve peor
   * que el borde irregular.
   */
  const dibujarLinea = (linea: string, x: number, y: number, ancho: number, justificar: boolean) => {
    const palabras = linea.trim().split(/\s+/)
    if (!justificar || palabras.length < 2) {
      pdf.text(linea, x, y)
      return
    }
    const anchoPalabras = palabras.reduce((a, p) => a + pdf.getTextWidth(p), 0)
    const hueco = (ancho - anchoPalabras) / (palabras.length - 1)
    const espacioNormal = pdf.getTextWidth(" ")
    if (hueco <= 0 || hueco > espacioNormal * 2.6) {
      pdf.text(linea, x, y)
      return
    }
    let cursor = x
    for (const palabra of palabras) {
      pdf.text(palabra, cursor, y)
      cursor += pdf.getTextWidth(palabra) + hueco
    }
  }

  const newPage = () => {
    pdf.addPage()
    pos.y = L.top
  }
  /** Salta de página si no entra `need` mm en la actual. */
  const ensure = (need: number) => {
    if (pos.y + need > BOT) newPage()
  }

  // ── Bloques de texto ────────────────────────────────────────────────────────

  /**
   * Párrafo justificado con control de viudas: si en la página actual no
   * entran al menos dos líneas, empieza en la siguiente.
   */
  const parrafo = (
    texto: string,
    opts: {
      x?: number
      ancho?: number
      size?: number
      lead?: number
      style?: "normal" | "italic"
      color?: [number, number, number]
      sangria?: boolean
      font?: "times" | "helvetica"
    } = {}
  ) => {
    const x = opts.x ?? M
    const ancho = opts.ancho ?? CW
    const size = opts.size ?? F.body
    const lead = opts.lead ?? L.lead
    const font = opts.font ?? "times"

    pdf.setFont(font, opts.style ?? "normal")
    pdf.setFontSize(size)
    pdf.setTextColor(...(opts.color ?? C.body))

    // Con sangría la primera línea es más corta, así que se parte en dos pasos.
    const sangria = opts.sangria ? L.indent : 0
    let lineas: string[]
    if (sangria > 0) {
      const primera = pdf.splitTextToSize(texto, ancho - sangria)[0] ?? ""
      const resto = texto.slice(primera.length).trimStart()
      lineas = [primera, ...(resto ? pdf.splitTextToSize(resto, ancho) : [])]
    } else {
      lineas = pdf.splitTextToSize(texto, ancho)
    }

    ensure(Math.min(lineas.length, 2) * lead)

    lineas.forEach((linea: string, i: number) => {
      ensure(lead)
      const esUltima = i === lineas.length - 1
      const dx = i === 0 ? sangria : 0
      // La última línea nunca se justifica: estirarla abre ríos de espacio.
      dibujarLinea(linea, x + dx, pos.y, ancho - dx, !esUltima)
      pos.y += lead
    })
  }

  /**
   * Rótulo de sección: sans, versalita, con filete corto debajo.
   *
   * Reserva su alto más dos renglones del bloque que viene: un rótulo solo al
   * pie de la página, con su contenido en la hoja siguiente, es un título
   * viudo — pasaba con "CITAS" cuando la cita no entraba abajo.
   */
  const rotulo = (texto: string) => {
    pos.y += L.gapSection
    ensure(16 + L.lead * 2)
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(F.label)
    pdf.setTextColor(...C.primary)
    pdf.text(texto.toUpperCase(), M, pos.y, { charSpace: 0.4 })
    pos.y += 2.2
    pdf.setDrawColor(...C.primary)
    pdf.setLineWidth(0.5)
    pdf.line(M, pos.y, M + 14, pos.y)
    pos.y += 6
  }

  /** Texto citado con hilo vertical a la izquierda. */
  const citado = (
    lineasTexto: string,
    opts: {
      size?: number
      style?: "italic" | "normal"
      lead?: number
      /** Alto de la atribución que va pegada abajo, para no separarla del texto. */
      colaAtribucion?: number
    } = {}
  ) => {
    const size = opts.size ?? F.quote
    const lead = opts.lead ?? L.leadQuote
    const ancho = CW - L.quoteInset

    pdf.setFont("times", opts.style ?? "italic")
    pdf.setFontSize(size)
    const lineas = pdf.splitTextToSize(lineasTexto, ancho)

    // Una cita partida entre dos páginas se lee mal y deja el hilo cortado en
    // el aire, así que si entra completa en una página se la manda entera a la
    // siguiente. Solo se parte cuando es más alta que la caja de texto.
    const alto = lineas.length * lead + (opts.colaAtribucion ?? 0)
    const altoPagina = BOT - L.top
    if (alto <= altoPagina) ensure(alto + 2)
    else ensure(Math.min(lineas.length, 2) * lead + 2)

    const yIni = pos.y - 3.6

    lineas.forEach((linea: string, i: number) => {
      if (pos.y + lead > BOT) {
        // El hilo se corta al pie y se retoma en la página siguiente.
        pdf.setDrawColor(...C.primary)
        pdf.setLineWidth(0.7)
        pdf.line(M + 1, yIni, M + 1, pos.y - 3.6)
        newPage()
      }
      pdf.setFont("times", opts.style ?? "italic")
      pdf.setFontSize(size)
      pdf.setTextColor(...C.ink)
      const esUltima = i === lineas.length - 1
      dibujarLinea(linea, M + L.quoteInset, pos.y, ancho, !esUltima)
      pos.y += lead
    })

    pdf.setDrawColor(...C.primary)
    pdf.setLineWidth(0.7)
    pdf.line(M + 1, yIni, M + 1, pos.y - 3.6)
  }

  /** Enlace discreto: sans pequeña, en color primario. Sin glifos raros. */
  const enlace = (texto: string, url: string, x: number, y: number, align?: "right") => {
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(F.small - 1)
    pdf.setTextColor(...C.primary)
    pdf.textWithLink(texto, x, y, align ? { url, align } : { url })
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Cabecera
  // ────────────────────────────────────────────────────────────────────────────
  pdf.setDrawColor(...C.primary)
  pdf.setLineWidth(1.4)
  pdf.line(0, 0, W, 0) // filete superior a sangre

  pos.y = L.top

  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(F.label)
  pdf.setTextColor(...C.primary)
  pdf.text("AULA SEI", M, pos.y, { charSpace: 0.6 })

  pdf.setFont("helvetica", "normal")
  pdf.setTextColor(...C.muted)
  pdf.text(categoryName, W - M, pos.y, { align: "right" })

  pos.y += 12

  // Título
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(F.title)
  pdf.setTextColor(...C.ink)
  const titulo = pdf.splitTextToSize(lessonTitle, CW)
  titulo.forEach((linea: string) => {
    pdf.text(linea, M, pos.y)
    pos.y += 9
  })

  // Línea de metadatos
  pos.y += 1
  pdf.setFont("helvetica", "normal")
  pdf.setFontSize(F.meta)
  pdf.setTextColor(...C.muted)
  const fecha = new Date().toLocaleDateString("es-AR", {
    day: "numeric", month: "long", year: "numeric",
  })
  const meta = [studentName, fecha].filter(Boolean).join("  ·  ")
  pdf.text(meta, M, pos.y)
  if (chapterUrl) {
    enlace("Ver la lección en el manual oficial", chapterUrl, W - M, pos.y, "right")
  }

  pos.y += 3.5
  pdf.setDrawColor(...C.rule)
  pdf.setLineWidth(0.4)
  pdf.line(M, pos.y, W - M, pos.y)
  pos.y += 4

  // ────────────────────────────────────────────────────────────────────────────
  // Secciones
  // ────────────────────────────────────────────────────────────────────────────
  // Varias secciones del mismo tipo seguidas comparten rótulo: una lección con
  // dos citas de líder mostraba "CITA" dos veces, una debajo de la otra.
  const tipoAnterior = (i: number) => secciones[i - 1]?.tipo
  const mismasSeguidas = (i: number, tipo: string) => {
    let n = 0
    while (secciones[i + n]?.tipo === tipo) n++
    return n
  }

  secciones.forEach((seccion, i) => {
    if (seccion.tipo === "resumen" && seccion.bloques) {
      for (const bloque of seccion.bloques) {
        renderBloque(bloque, { pdf, M, CW, W, pos, ensure, parrafo, rotulo, citado, enlace, dibujarLinea })
      }
      return
    }

    if (seccion.tipo === "contexto" && seccion.contenido) {
      rotulo("Contexto")
      parrafos(seccion.contenido, parrafo)
    }

    if (seccion.tipo === "escrituras" && seccion.citas?.length) {
      rotulo("Escrituras clave")
      seccion.citas.forEach((cita, i) => {
        if (i > 0) pos.y += L.gapBlock
        escritura(cita, { pdf, M, CW, W, pos, ensure, citado, enlace, parrafo, dibujarLinea })
      })
    }

    if (seccion.tipo === "enseñanza") {
      // "Enseñanza" es el nombre del campo en el JSON, no lo que el lector ve:
      // en la hoja es una cita, y así se rotula.
      if (tipoAnterior(i) !== "enseñanza") {
        rotulo(mismasSeguidas(i, "enseñanza") > 1 ? "Citas" : "Cita")
      } else {
        pos.y += L.gapBlock
      }
      citaDeLider(
        { texto: seccion.texto ?? "", autor: seccion.autor, fuente: seccion.fuente, link: seccion.link },
        { pdf, M, CW, W, pos, ensure, citado, enlace, dibujarLinea }
      )
    }

    if (seccion.tipo === "conclusion" && seccion.contenido) {
      rotulo("Conclusión")
      parrafos(seccion.contenido, parrafo, "italic")
    }

    if (seccion.tipo === "cuestionario" && seccion.preguntas?.length) {
      rotulo("Para reflexionar")
      preguntas(seccion.preguntas, { pdf, M, CW, pos, ensure, dibujarLinea })
    }
  })

  // ── Notas del maestro ───────────────────────────────────────────────────────
  if (notes) {
    rotulo("Mis notas")
    parrafos(notes, parrafo)
  }

  // ── Pie ─────────────────────────────────────────────────────────────────────
  const totalPages = pdf.internal.getNumberOfPages()
  for (let p = 1; p <= totalPages; p++) {
    pdf.setPage(p)
    pdf.setDrawColor(...C.rule)
    pdf.setLineWidth(0.3)
    pdf.line(M, H - 13, W - M, H - 13)
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(F.small - 1)
    pdf.setTextColor(...C.muted)
    pdf.text(`Aula SEI  ·  ${categoryName}`, M, H - 9)
    pdf.text(`${p} / ${totalPages}`, W - M, H - 9, { align: "right" })
  }

  return pdf
}

// ─────────────────────────────────────────────────────────────────────────────
// Piezas
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Parte la prosa en párrafos. El primero de una sección va sin sangría —la
 * sangría marca continuidad, y después de un rótulo no hay nada que continuar.
 */
function parrafos(texto: string | string[], parrafo: any, style: "normal" | "italic" = "normal") {
  // El contenido llega normalizado (joinProse une los párrafos con "\n\n"),
  // pero algunos cursos lo guardan como array en el JSON: si alguien llama
  // sin pasar por normalizeLessonFile, no hay razón para romperse.
  const plano = Array.isArray(texto) ? texto.join("\n\n") : texto
  const partes = plano.split(/\n{2,}|\r\n\r\n/).map((p) => p.trim()).filter(Boolean)
  partes.forEach((parte, i) => {
    if (i > 0) parrafo("", { size: 1, lead: L.gapPara })
    parrafo(parte, { sangria: i > 0, style })
  })
}

function escritura(
  cita: { referencia?: string; texto: string; comentario?: string; link?: string },
  ctx: any
) {
  const { pdf, M, W, pos, ensure, citado, enlace, parrafo } = ctx

  if (cita.referencia) {
    ensure(12)
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(F.small)
    // La referencia misma es el enlace: un "leer" suelto contra el margen
    // derecho agregaba una palabra que no aporta y dejaba la línea coja.
    if (cita.link) {
      pdf.setTextColor(...C.primary)
      pdf.textWithLink(cita.referencia, M, pos.y, { url: cita.link })
    } else {
      pdf.setTextColor(...C.ink)
      pdf.text(cita.referencia, M, pos.y)
    }
    pos.y += 5.4
  }

  citado(`«${cita.texto}»`)

  if (cita.comentario) {
    pos.y += 2
    parrafo(cita.comentario, {
      x: M + L.quoteInset,
      ancho: ctx.CW - L.quoteInset,
      size: F.small + 0.5,
      lead: 4.6,
      color: C.muted,
    })
  }
}

function citaDeLider(
  cita: { texto: string; autor?: string; fuente?: string; link?: string },
  ctx: any
) {
  const { pdf, M, W, pos, citado, enlace } = ctx

  // La atribución va pegada a la cita: se reserva su alto para que el salto de
  // página no la deje huérfana en la hoja siguiente.
  const altoAtribucion = cita.autor ? (cita.fuente ? 10 : 6) : 0
  citado(`«${cita.texto}»`, { size: F.cita, lead: 5.6, colaAtribucion: altoAtribucion })

  if (!cita.autor) return

  pos.y += 2
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(F.small)
  pdf.setTextColor(...C.ink)
  // La raya de atribución es la convención para firmar una cita.
  pdf.text(`— ${cita.autor}`, W - M, pos.y, { align: "right" })
  pos.y += 4.4

  // La fuente es el enlace: una línea suelta que diga "Ver el discurso
  // completo" agrega un renglón y no dice nada que la fuente no diga ya.
  if (cita.fuente) {
    if (cita.link) {
      enlace(cita.fuente, cita.link, W - M, pos.y, "right")
    } else {
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(F.small - 1)
      pdf.setTextColor(...C.muted)
      pdf.text(cita.fuente, W - M, pos.y, { align: "right" })
    }
    pos.y += 4
  } else if (cita.link) {
    enlace("Ver el discurso", cita.link, W - M, pos.y, "right")
    pos.y += 4
  }
}

/** Preguntas con numeración colgada: el número afuera, el texto alineado. */
function preguntas(lista: string[], ctx: any) {
  const { pdf, M, CW, pos, ensure } = ctx
  const numW = 7
  const ancho = CW - numW

  lista.forEach((pregunta, i) => {
    pdf.setFont("times", "normal")
    pdf.setFontSize(F.body)
    const lineas = pdf.splitTextToSize(pregunta, ancho)

    ensure(Math.min(lineas.length, 2) * L.lead + 2)

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(F.small)
    pdf.setTextColor(...C.primary)
    pdf.text(`${i + 1}.`, M, pos.y)

    lineas.forEach((linea: string, j: number) => {
      ensure(L.lead)
      pdf.setFont("times", "normal")
      pdf.setFontSize(F.body)
      pdf.setTextColor(...C.body)
      const esUltima = j === lineas.length - 1
      ctx.dibujarLinea(linea, M + numW, pos.y, ancho, !esUltima)
      pos.y += L.lead
    })
    pos.y += 3
  })
}

function renderBloque(bloque: BloqueResumen, ctx: any) {
  const { pdf, M, CW, pos, ensure, parrafo, rotulo, citado } = ctx

  switch (bloque.tipo) {
    case "parrafo":
      parrafo(bloque.texto, { sangria: false })
      pos.y += L.gapPara
      break

    case "escritura":
      escritura(
        { referencia: bloque.referencia, texto: bloque.texto, comentario: bloque.comentario, link: bloque.link },
        ctx
      )
      pos.y += L.gapBlock
      break

    case "cita":
      citaDeLider({ texto: bloque.texto, autor: bloque.autor, fuente: bloque.fuente, link: bloque.link }, ctx)
      pos.y += L.gapBlock
      break

    case "doctrinal": {
      rotulo("Verdades doctrinales")
      for (const punto of bloque.puntos) {
        ensure(10)
        const yInicio = pos.y
        parrafo(punto, { x: M + 6, ancho: CW - 6 })
        // Guión colgado, a la francesa.
        pdf.setFont("times", "normal")
        pdf.setFontSize(F.body)
        pdf.setTextColor(...C.primary)
        pdf.text("—", M, yInicio)
        pos.y += L.gapPara
      }
      break
    }

    case "reflexion":
      rotulo("Para reflexionar")
      preguntas(bloque.preguntas, ctx)
      break
  }
}
