// components/study/seccion-view.tsx
import type { Seccion } from "@/lib/types"
import { BloqueView, Atribucion, Escritura } from "./bloque-view"
import { Citado, ListaColgada, Prosa, Rotulo } from "./editorial"
import { urlImagen, srcSetImagen } from "@/lib/content/imagenes"

// Anchos de render. Las imágenes las sirve churchofjesuschrist.org: acá solo
// se pide el tamaño que hace falta. Ver lib/content/imagenes.ts.
const ANCHO_ILUSTRACION = 800

export function SeccionView({
  seccion,
  anterior,
  siguiente,
}: {
  seccion: Seccion
  /** Tipo de la sección previa y la siguiente: varias citas seguidas comparten rótulo, como en el PDF. */
  anterior?: Seccion["tipo"]
  siguiente?: Seccion["tipo"]
}) {

  if (seccion.tipo === "resumen" && seccion.bloques) {
    return (
      <div className="space-y-7">
        {seccion.bloques.map((bloque, i) => (
          <BloqueView
            key={i}
            bloque={bloque}
            // Dos párrafos seguidos son uno continuando al otro: el segundo se sangra.
            continua={bloque.tipo === "parrafo" && seccion.bloques![i - 1]?.tipo === "parrafo"}
          />
        ))}
      </div>
    )
  }

  if (seccion.tipo === "contexto") {
    return (
      <div>
        <Rotulo>Contexto</Rotulo>
        {seccion.imagen && (
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img
              src={urlImagen(seccion.imagen.assetId, ANCHO_ILUSTRACION)}
              srcSet={srcSetImagen(seccion.imagen.assetId, ANCHO_ILUSTRACION)}
              sizes="(max-width: 768px) 100vw, 800px"
              alt={seccion.imagen.alt}
              width={seccion.imagen.ancho}
              height={seccion.imagen.alto}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </figure>
        )}
        {seccion.contenido && <Prosa texto={seccion.contenido} />}
      </div>
    )
  }

  if (seccion.tipo === "enseñanza") {
    // "Enseñanza" es el nombre del campo en el JSON; en la página es una cita.
    const primeraDelGrupo = anterior !== "enseñanza"
    return (
      <div>
        {primeraDelGrupo && (
          <Rotulo>{siguiente === "enseñanza" ? "Citas" : "Cita"}</Rotulo>
        )}
        <Citado grande>{seccion.texto}</Citado>
        <Atribucion autor={seccion.autor} fuente={seccion.fuente} link={seccion.link} />
      </div>
    )
  }

  if (seccion.tipo === "escrituras") {
    return (
      <div>
        <Rotulo>Escrituras clave</Rotulo>
        <div className="space-y-7">
          {seccion.citas?.map((cita, i) => (
            <Escritura key={i} referencia={cita.referencia} texto={cita.texto} link={cita.link} />
          ))}
        </div>
      </div>
    )
  }

  if (seccion.tipo === "cuestionario") {
    return (
      <div>
        <Rotulo>Para reflexionar</Rotulo>
        <ListaColgada items={seccion.preguntas ?? []} />
      </div>
    )
  }

  if (seccion.tipo === "conclusion") {
    return (
      <div>
        <Rotulo>Conclusión</Rotulo>
        {seccion.contenido && <Prosa texto={seccion.contenido} italica />}
      </div>
    )
  }

  return null
}
