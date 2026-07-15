// components/study/seccion-view.tsx
import { BookMarked, Quote, GraduationCap, ExternalLink } from "lucide-react"
import type { Seccion } from "@/lib/types"
import { BloqueView } from "./bloque-view"

export function SeccionView({ seccion }: { seccion: Seccion }) {

  if (seccion.tipo === "resumen" && seccion.bloques) {
    return (
      <div className="space-y-6">
        {seccion.bloques.map((bloque, i) => (
          <BloqueView key={i} bloque={bloque} />
        ))}
      </div>
    )
  }

  if (seccion.tipo === "contexto") {
    return (
      <p className="text-lg leading-[1.85] text-muted-foreground">
        {seccion.contenido}
      </p>
    )
  }

  if (seccion.tipo === "enseñanza") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-secondary/15 bg-secondary/[0.06] p-8">
        <Quote className="absolute -left-2 -top-2 h-16 w-16 text-secondary/10" />
        <blockquote className="relative font-serif text-xl font-medium italic leading-relaxed text-foreground">
          "{seccion.texto}"
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-secondary/20" />
          <div className="text-right">
            <p className="text-sm font-bold text-secondary">{seccion.autor}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {seccion.fuente}
            </p>
          </div>
        </div>
        {/* ✅ NUEVO: link al discurso completo, mismo patrón que "escrituras" */}
        {seccion.link && (
          <div className="mt-4 flex justify-end">
            <a
              href={seccion.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-secondary/70 transition-colors hover:text-secondary"
            >
              Ver discurso completo
              <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        )}
      </div>
    )
  }

  if (seccion.tipo === "escrituras") {
    return (
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground">
          <BookMarked className="h-4 w-4" />
          Escrituras clave
        </h3>
        <div className="grid gap-3">
          {seccion.citas?.map((cita, i) => (
            <div key={i} className="rounded-2xl border border-primary/15 bg-primary/[0.025] p-5">
              {/* ✅ CAMBIO: Convertir referencia en link si existe cita.link */}
              {cita.link ? (
                <a
                  href={cita.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
                >
                  {cita.referencia}
                  <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
                </a>
              ) : (
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
                  {cita.referencia}
                </span>
              )}
              <p className="font-serif text-sm italic leading-relaxed text-foreground/90">
                "{cita.texto}"
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (seccion.tipo === "cuestionario") {
    return (
      <div className="rounded-2xl border-2 border-dashed border-primary/20 bg-primary/[0.015] p-6">
        <h3 className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-primary">
          <GraduationCap className="h-4 w-4" />
          Para reflexionar
        </h3>
        <ol className="space-y-4">
          {seccion.preguntas?.map((pregunta, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                {i + 1}
              </span>
              {pregunta}
            </li>
          ))}
        </ol>
      </div>
    )
  }

  if (seccion.tipo === "conclusion") {
    return (
      <p className="border-l-2 border-primary/30 pl-5 font-serif text-base italic leading-relaxed text-muted-foreground">
        {seccion.contenido}
      </p>
    )
  }

  return null
}