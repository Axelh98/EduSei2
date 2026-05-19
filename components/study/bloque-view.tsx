// components/study/bloque-view.tsx
import { BookOpen, Quote, Star, HelpCircle } from "lucide-react"
import type { BloqueResumen } from "@/lib/types"

export function BloqueView({ bloque }: { bloque: BloqueResumen }) {
  switch (bloque.tipo) {
    // ─── Párrafo narrativo ────────────────────────────────────────────────────
    case "parrafo":
      return (
        <p className="text-lg leading-[1.85] text-muted-foreground">
          {bloque.texto}
        </p>
      )

    // ─── Escritura ────────────────────────────────────────────────────────────
    case "escritura":
      return (
        <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] p-5">
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              {bloque.referencia}
            </span>
          </div>
          <p className="font-serif text-base leading-relaxed text-foreground">
            "{bloque.texto}"
          </p>
          {bloque.comentario && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {bloque.comentario}
            </p>
          )}
        </div>
      )

    // ─── Cita profética / apostólica ─────────────────────────────────────────
    // Fondo sólido oscuro (slate-800) + texto blanco explícito.
    // Evitamos variables CSS HSL que html2canvas no resuelve bien en el clon.
    case "cita":
      return (
        <div
          className="relative overflow-hidden rounded-2xl p-7"
          style={{ backgroundColor: "#1e293b" }}   // slate-800 — sólido, sin vars
        >
          {/* Marca decorativa de comillas */}
          <Quote
            className="absolute right-5 top-4 h-12 w-12 opacity-10"
            style={{ color: "#ffffff" }}
          />

          {/* Badge "Cita profética" */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
               style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <Star className="h-3 w-3" style={{ color: "#fbbf24" }} />
            <span
              className="text-[9px] font-black uppercase tracking-[0.2em]"
              style={{ color: "#fbbf24" }}
            >
              Cita Profética
            </span>
          </div>

          {/* Texto de la cita */}
          <blockquote
            className="relative font-serif text-xl font-medium italic leading-relaxed"
            style={{ color: "#f1f5f9" }}   // slate-100
          >
            "{bloque.texto}"
          </blockquote>

          {/* Divisor + autor */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <div className="text-right">
              <p
                className="text-sm font-bold"
                style={{ color: "#e2e8f0" }}   // slate-200
              >
                {bloque.autor}
              </p>
              {bloque.fuente && (
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "#94a3b8" }}  // slate-400
                >
                  {bloque.fuente}
                </p>
              )}
            </div>
          </div>
        </div>
      )

    // ─── Puntos doctrinales ───────────────────────────────────────────────────
    case "doctrinal":
      return (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
            <Star className="h-3.5 w-3.5" />
            Verdades doctrinales
          </h3>
          <ul className="space-y-2">
            {bloque.puntos.map((punto, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-base leading-relaxed text-foreground">
                  {punto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )

    // ─── Preguntas de reflexión ───────────────────────────────────────────────
    case "reflexion":
      return (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5" />
            Para reflexionar
          </h3>
          <ul className="space-y-2.5">
            {bloque.preguntas.map((pregunta, i) => (
              <li
                key={i}
                className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm leading-relaxed text-foreground"
              >
                {pregunta}
              </li>
            ))}
          </ul>
        </div>
      )

    default:
      return null
  }
}