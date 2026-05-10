// components/study/bloque-view.tsx
import { BookMarked, Quote, ListChecks, GraduationCap, ChevronRight } from "lucide-react"
import type { BloqueResumen } from "@/lib/types"

export function BloqueView({ bloque }: { bloque: BloqueResumen }) {
  switch (bloque.tipo) {

    case "parrafo":
      return (
        <p className="text-base leading-[1.85] text-muted-foreground">
          {bloque.texto}
        </p>
      )

    case "escritura":
      return (
        <div className="rounded-2xl border border-primary/15 bg-primary/[0.025] p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <BookMarked className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {bloque.referencia}
            </span>
          </div>
          <p className="font-serif text-base leading-relaxed text-foreground/90 italic">
            "{bloque.texto}"
          </p>
          {bloque.comentario && (
            <p className="mt-3 border-t border-primary/10 pt-3 text-xs leading-relaxed text-muted-foreground">
              {bloque.comentario}
            </p>
          )}
        </div>
      )

    case "cita":
      return (
        <div className="relative overflow-hidden rounded-2xl border border-secondary/15 bg-secondary/[0.06] p-6">
          <Quote className="absolute -left-1 -top-1 h-12 w-12 text-secondary/10" />
          <blockquote className="relative font-serif text-lg font-medium italic leading-relaxed text-foreground">
            "{bloque.texto}"
          </blockquote>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-secondary/20" />
            <div className="text-right">
              <p className="text-xs font-bold text-secondary">{bloque.autor}</p>
              {bloque.fuente && (
                <p className="text-[10px] text-muted-foreground">{bloque.fuente}</p>
              )}
            </div>
          </div>
        </div>
      )

    case "doctrinal":
      return (
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-primary">
            <ListChecks className="h-4 w-4" />
            Verdades doctrinales
          </h3>
          <ul className="space-y-3">
            {bloque.puntos.map((punto, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/50" />
                {punto}
              </li>
            ))}
          </ul>
        </div>
      )

    case "reflexion":
      return (
        <div className="rounded-2xl border-2 border-dashed border-primary/20 bg-primary/[0.015] p-5">
          <h3 className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-primary">
            <GraduationCap className="h-4 w-4" />
            Para reflexionar
          </h3>
          <ol className="space-y-3">
            {bloque.preguntas.map((pregunta, i) => (
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

    default:
      return null
  }
}