"use client"

// components/study/bloque-view.tsx
import { BookOpen, Quote, Star, HelpCircle, ExternalLink } from "lucide-react"
import type { BloqueResumen } from "@/lib/types"

export function BloqueView({ bloque }: { bloque: BloqueResumen }) {
  switch (bloque.tipo) {

    // ─── Párrafo narrativo — mejor contraste, text-wrap:pretty ────────────
    case "parrafo":
      return (
        <p className="text-base leading-[1.9] text-foreground/80 [text-wrap:pretty]">
          {bloque.texto}
        </p>
      )

    // ─── Escritura — ahora con link opcional al versículo ─────────────────
    case "escritura":
      return (
        <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] p-5">
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              {bloque.referencia}
            </span>
          </div>
          <p className="font-serif text-base leading-relaxed text-foreground [text-wrap:pretty]">
            "{bloque.texto}"
          </p>
          {bloque.comentario && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground [text-wrap:pretty]">
              {bloque.comentario}
            </p>
          )}
          {bloque.link && (
            <a
              href={bloque.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary/70 transition-colors hover:text-primary hover:underline"
            >
              Ver en las Escrituras
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )

    // ─── Cita — ahora con link opcional al discurso completo ──────────────
    case "cita":
      return (
        <div
          className="relative overflow-hidden rounded-2xl p-7"
          style={{ backgroundColor: "#1e293b" }}
        >
          <Quote
            className="absolute right-5 top-4 h-12 w-12 opacity-10"
            style={{ color: "#ffffff" }}
          />
          <div
            className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <Star className="h-3 w-3" style={{ color: "#fbbf24" }} />
            <span
              className="text-[9px] font-black uppercase tracking-[0.2em]"
              style={{ color: "#fbbf24" }}
            >
              Cita Profética
            </span>
          </div>
          <blockquote
            className="relative font-serif text-xl font-medium italic leading-relaxed [text-wrap:pretty]"
            style={{ color: "#f1f5f9" }}
          >
            "{bloque.texto}"
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <div className="text-right">
              <p className="text-sm font-bold" style={{ color: "#e2e8f0" }}>
                {bloque.autor}
              </p>
              {bloque.fuente && (
                <p className="text-xs uppercase tracking-wider" style={{ color: "#94a3b8" }}>
                  {bloque.fuente}
                </p>
              )}
            </div>
          </div>
          {bloque.link && (
            <div className="mt-4 flex justify-end">
              <a
                href={bloque.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                style={{ color: "#93c5fd" }}
              >
                Ver discurso completo
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
        </div>
      )

    // ─── Puntos doctrinales — numerados como pills, más jerarquía ─────────
    case "doctrinal":
      return (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
            <Star className="h-3.5 w-3.5" />
            Verdades doctrinales
          </h3>
          <ol className="space-y-2">
            {bloque.puntos.map((punto, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border-l-2 border-primary/25 bg-primary/[0.03] px-4 py-3"
              >
                <span className="mt-0.5 font-mono text-xs font-black text-primary/60 select-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-foreground [text-wrap:pretty]">
                  {punto}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )

    // ─── Preguntas de reflexión — más espaciosas, numeradas ───────────────
    case "reflexion":
      return (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5" />
            Para reflexionar
          </h3>
          <ol className="space-y-2">
            {bloque.preguntas.map((pregunta, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-muted/25 px-4 py-3.5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-[9px] font-black text-secondary/80 select-none mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-foreground [text-wrap:pretty]">
                  {pregunta}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )

    default:
      return null
  }
}