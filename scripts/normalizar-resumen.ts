// Normaliza la convención `resumen` a la forma clásica, para que las auditorías puedan medir
// las dos con la misma vara.
//
// Por qué existe este módulo
// --------------------------
// Dos convenciones de contenido coexisten en el proyecto:
//   - "clásica": secciones contexto / escrituras / enseñanza / conclusion / cuestionario
//   - "resumen": una sola sección `resumen` con bloques (parrafo, escritura, cita, doctrinal,
//     reflexion) — la usan religion-225 y las 20 primeras lecciones de religion-301.
//
// Hasta el 9-sep-2026, `audit-doctrinal.ts` y `audit-completitud.ts` hacían `continue` al
// encontrar la convención `resumen` y solo la contaban. El efecto era que un curso podía
// declararse cerrado mirando 5 de sus 25 lecciones: en religion-301, los dos scripts medían
// l21–l25 e ignoraban l01–l20. La spec de largo de esta convención se fijó el 8-sep en
// docs/auditorias/BITACORA-r225.md; este módulo la implementa una sola vez para que los dos
// scripts digan lo mismo.
//
// La spec
// -------
//   contexto     los `parrafo` de apertura (todos menos el último)
//   conclusion   el párrafo de CIERRE solo — es lo que se mide en palabras
//   doctrinal    bloque aparte, 4 a 6 puntos
//   Cristo/sustancia   se busca en el párrafo de cierre MÁS los puntos doctrinales, que es
//                      donde vive la doctrina de estas lecciones
//   cuestionario los `preguntas` del bloque `reflexion`
//   escrituras   los bloques `escritura`
//   enseñanza    los bloques `cita`
//
// La distinción entre `conclusion` y `conclusionDoctrinal` no es un detalle: sumar los puntos
// doctrinales al contar palabras daba "conclusión demasiado larga" en el 100 % de las lecciones
// bien escritas, y no mirarlos al buscar a Cristo daba el falso negativo simétrico.

export type Convencion = "clasica" | "resumen" | "vacia"

export type Normalizada = {
  convencion: Convencion
  /** Párrafos de apertura (resumen) o la sección `contexto` (clásica). */
  contexto: string
  /** Párrafo de cierre solo. Es el que se mide en palabras. */
  conclusion: string
  /** Cierre + puntos doctrinales. Es donde se busca a Cristo y la sustancia. */
  conclusionDoctrinal: string
  /** `true` si la lección trae efectivamente una conclusión distinguible del contexto. */
  tieneConclusion: boolean
  preguntas: string[]
  escrituras: any[]
  ensenanzas: any[]
  doctrinal: string[]
}

const txt = (v: unknown): string =>
  Array.isArray(v) ? v.filter((x) => typeof x === "string").join(" ") : typeof v === "string" ? v : ""

export function normalizar(secciones: any[]): Normalizada {
  const vacio: Normalizada = {
    convencion: "vacia",
    contexto: "",
    conclusion: "",
    conclusionDoctrinal: "",
    tieneConclusion: false,
    preguntas: [],
    escrituras: [],
    ensenanzas: [],
    doctrinal: [],
  }
  if (!Array.isArray(secciones) || !secciones.length) return vacio

  const bloques = secciones
    .filter((s: any) => s?.tipo === "resumen")
    .flatMap((s: any) => (Array.isArray(s.bloques) ? s.bloques : []))

  if (!bloques.length) {
    // Convención clásica: los campos ya vienen separados.
    const concl = secciones.find((s: any) => s?.tipo === "conclusion")
    const conclusion = txt(concl?.contenido)
    return {
      convencion: "clasica",
      contexto: txt(secciones.find((s: any) => s?.tipo === "contexto")?.contenido),
      conclusion,
      conclusionDoctrinal: conclusion,
      tieneConclusion: Boolean(concl),
      preguntas: (secciones.find((s: any) => s?.tipo === "cuestionario")?.preguntas ?? []).map(
        (p: unknown) => (typeof p === "string" ? p : "")
      ),
      escrituras: secciones.filter((s: any) => s?.tipo === "escrituras").flatMap((s: any) => s.citas ?? []),
      ensenanzas: secciones.filter((s: any) => s?.tipo === "enseñanza"),
      doctrinal: [],
    }
  }

  const parrafos = bloques.filter((b: any) => b?.tipo === "parrafo").map((b: any) => txt(b.texto))
  const doctrinal = bloques
    .filter((b: any) => b?.tipo === "doctrinal")
    .flatMap((b: any) => (Array.isArray(b.puntos) ? b.puntos : []))
    .map((p: unknown) => (typeof p === "string" ? p : ""))
  const preguntas = bloques
    .filter((b: any) => b?.tipo === "reflexion")
    .flatMap((b: any) => (Array.isArray(b.preguntas) ? b.preguntas : []))
    .map((p: unknown) => (typeof p === "string" ? p : ""))

  // Con un solo párrafo no hay conclusión distinguible del contexto: ese mismo párrafo haría de
  // las dos cosas y se contaría dos veces. Es un defecto real (lo tenía r301-l19), no una
  // variante válida, así que se informa en vez de disimularse.
  const tieneConclusion = parrafos.length >= 2
  const cierre = tieneConclusion ? parrafos[parrafos.length - 1] : ""
  const contexto = tieneConclusion ? parrafos.slice(0, -1).join(" ") : parrafos.join(" ")

  return {
    convencion: "resumen",
    contexto,
    conclusion: cierre,
    conclusionDoctrinal: [cierre, ...doctrinal].join(" "),
    tieneConclusion,
    preguntas,
    escrituras: bloques.filter((b: any) => b?.tipo === "escritura"),
    ensenanzas: bloques.filter((b: any) => b?.tipo === "cita"),
    doctrinal,
  }
}

/** Cantidad de puntos doctrinales que la spec pide en la convención `resumen`. */
export const DOCTRINAL_MIN = 4
export const DOCTRINAL_MAX = 6
