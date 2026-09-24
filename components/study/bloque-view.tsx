"use client"

// components/study/bloque-view.tsx
import type { BloqueResumen } from "@/lib/types"
import { CUERPO, Citado, ListaColgada, Rotulo } from "./editorial"
import { retratoDe, urlImagen, srcSetImagen } from "@/lib/content/imagenes"

const ANCHO_RETRATO = 40

/**
 * Escritura: la referencia misma es el enlace, en versalita sobre el texto
 * citado. Mismo criterio que el PDF: un "Ver en las Escrituras" suelto
 * agregaba un renglón que no decía nada que la referencia no dijera ya.
 */
export function Escritura({
  referencia,
  texto,
  comentario,
  link,
}: {
  referencia?: string
  texto: string
  comentario?: string
  link?: string
}) {
  const claseRef = "font-sans text-xs font-bold uppercase tracking-[0.12em]"
  return (
    <div>
      {referencia && (
        <p className="mb-2">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${claseRef} text-primary underline-offset-4 hover:underline`}
            >
              {referencia}
            </a>
          ) : (
            <span className={`${claseRef} text-foreground`}>{referencia}</span>
          )}
        </p>
      )}
      <Citado>{texto}</Citado>
      {comentario && (
        <p className="mt-3 pl-[calc(1.25rem+2px)] font-serif text-[0.9375rem] leading-[1.7] text-muted-foreground hyphens-auto text-pretty sm:text-justify">
          {comentario}
        </p>
      )}
    </div>
  )
}

/**
 * Firma de una cita: raya de atribución, alineada a la derecha. La fuente es
 * el enlace al discurso; el retrato oficial va al costado si lo tenemos.
 */
export function Atribucion({
  autor,
  fuente,
  link,
}: {
  autor?: string
  fuente?: string
  link?: string
}) {
  if (!autor && !fuente && !link) return null
  const retrato = retratoDe(autor)
  return (
    <div className="mt-4 flex items-center justify-end gap-3 text-right">
      <div>
        {autor && (
          <p className="font-sans text-sm font-bold text-foreground">— {autor}</p>
        )}
        {fuente && link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-primary underline-offset-4 hover:underline"
          >
            {fuente}
          </a>
        ) : fuente ? (
          <p className="font-sans text-xs text-muted-foreground">{fuente}</p>
        ) : link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-primary underline-offset-4 hover:underline"
          >
            Ver el discurso
          </a>
        ) : null}
      </div>
      {retrato && (
        <img
          src={urlImagen(retrato, ANCHO_RETRATO)}
          srcSet={srcSetImagen(retrato, ANCHO_RETRATO)}
          alt={autor ?? ""}
          width={ANCHO_RETRATO}
          height={ANCHO_RETRATO}
          loading="lazy"
          decoding="async"
          className="h-10 w-10 shrink-0 rounded-full object-cover object-top grayscale-[30%]"
        />
      )}
    </div>
  )
}

export function BloqueView({
  bloque,
  continua = false,
}: {
  bloque: BloqueResumen
  /** El párrafo sigue a otro párrafo: lleva sangría de primera línea. */
  continua?: boolean
}) {
  switch (bloque.tipo) {
    case "parrafo":
      // El espacio entre párrafos lo pone el contenedor; con sangría, el que
      // sigue a otro se pega más, como en un libro.
      return (
        <p className={`${CUERPO} ${continua ? "-mt-5 indent-[1.5em]" : ""}`}>
          {bloque.texto}
        </p>
      )

    case "escritura":
      return (
        <Escritura
          referencia={bloque.referencia}
          texto={bloque.texto}
          comentario={bloque.comentario}
          link={bloque.link}
        />
      )

    case "cita":
      return (
        <div>
          <Citado grande>{bloque.texto}</Citado>
          <Atribucion autor={bloque.autor} fuente={bloque.fuente} link={bloque.link} />
        </div>
      )

    case "doctrinal":
      return (
        <div className="pt-3">
          <Rotulo>Verdades doctrinales</Rotulo>
          <ListaColgada items={bloque.puntos} marca="raya" />
        </div>
      )

    case "reflexion":
      return (
        <div className="pt-3">
          <Rotulo>Para reflexionar</Rotulo>
          <ListaColgada items={bloque.preguntas} />
        </div>
      )

    default:
      return null
  }
}
