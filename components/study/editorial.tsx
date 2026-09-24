// components/study/editorial.tsx
//
// Piezas tipográficas del repaso. Llevan a la pantalla los mismos criterios
// del PDF (lib/pdf/lesson-pdf.ts), sin copiarlo tal cual:
//
//   · Serif para leer, sans para rotular: la estructura se separa del contenido.
//   · Prosa justificada con guionado (el <html lang="es"> es lo que le dice al
//     navegador cómo partir las palabras). En celular no se justifica: con
//     35-40 caracteres por línea justificar abre ríos de espacio.
//   · Sangría de primera línea, menos en el párrafo que abre una sección: la
//     sangría marca continuidad, y después de un rótulo no hay nada que continuar.
//   · Sin cajas de color: filetes finos e hilos verticales.

import type { ReactNode } from "react"

/** Clases del cuerpo de texto. Exportadas para quien arme su propio párrafo. */
export const CUERPO =
  "font-serif text-[1.0625rem] leading-[1.8] text-foreground/85 hyphens-auto text-pretty sm:text-justify"

/** Rótulo de sección: sans, versalita espaciada, filete corto debajo. */
export function Rotulo({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-primary">
      {children}
      <span aria-hidden className="mt-1.5 block h-[2px] w-10 bg-primary" />
    </h2>
  )
}

/**
 * Prosa en párrafos. El contenido llega con los párrafos unidos por "\n\n"
 * (joinProse); antes se pintaba todo en un único <p> y los cortes se perdían.
 */
export function Prosa({
  texto,
  italica = false,
  sangriaInicial = false,
}: {
  texto: string
  italica?: boolean
  /** Sangrar también el primero: para párrafos que siguen a otro, sin rótulo en medio. */
  sangriaInicial?: boolean
}) {
  const partes = texto.split(/\n{2,}|\r\n\r\n/).map((p) => p.trim()).filter(Boolean)
  return (
    <div className={italica ? "italic" : undefined}>
      {partes.map((parte, i) => (
        <p key={i} className={`${CUERPO} ${i > 0 || sangriaInicial ? "indent-[1.5em]" : ""}`}>
          {parte}
        </p>
      ))}
    </div>
  )
}

/** Texto citado: serif itálica, corrido a la derecha de un hilo vertical. */
export function Citado({ children, grande = false }: { children: ReactNode; grande?: boolean }) {
  return (
    <blockquote
      className={[
        "border-l-2 border-primary/70 pl-5 font-serif italic text-foreground hyphens-auto text-pretty sm:text-justify",
        grande ? "text-[1.125rem] leading-[1.75]" : "text-base leading-[1.75]",
      ].join(" ")}
    >
      «{children}»
    </blockquote>
  )
}

/** Lista con la numeración colgada: el número afuera, el texto alineado. */
export function ListaColgada({
  items,
  marca = "numero",
}: {
  items: string[]
  marca?: "numero" | "raya"
}) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[1.75rem_1fr]">
          <span
            aria-hidden
            className={
              marca === "numero"
                ? "pt-[0.3em] font-sans text-xs font-bold tabular-nums text-primary"
                : "font-serif text-[1.0625rem] leading-[1.8] text-primary"
            }
          >
            {marca === "numero" ? `${i + 1}.` : "—"}
          </span>
          <span className={CUERPO}>{item}</span>
        </li>
      ))}
    </ol>
  )
}
