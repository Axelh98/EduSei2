"use client"
// components/editor/SeccionEditor.tsx

import type { Seccion } from "@/lib/types"

interface Props {
  seccion:    Seccion
  index:      number
  total:      number
  onChange:   (s: Seccion) => void
  onRemove:   () => void
  onMoveUp:   () => void
  onMoveDown: () => void
}

const TIPO_LABELS: Record<Seccion["tipo"], string> = {
  contexto:     "📖 Contexto",
  enseñanza:    "💬 Enseñanza / Cita de líder",
  escrituras:   "📜 Escrituras",
  conclusion:   "✨ Conclusión",
  cuestionario: "❓ Cuestionario de reflexión",
  resumen:      "📋 Resumen",
}

const inputClass  = "w-full px-3 py-2 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
const textareaClass = "w-full px-3 py-2.5 text-sm leading-relaxed border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y transition-all"
const labelClass = "block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1"

export function SeccionEditor({ seccion, index, total, onChange, onRemove, onMoveUp, onMoveDown }: Props) {
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex-shrink-0">
            {index + 1}
          </span>
          <span className="text-sm font-semibold text-foreground">{TIPO_LABELS[seccion.tipo]}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {[
            { label: "↑", action: onMoveUp,   disabled: index === 0,         danger: false },
            { label: "↓", action: onMoveDown, disabled: index === total - 1, danger: false },
            { label: "✕", action: onRemove,   disabled: false,               danger: true  },
          ].map(({ label, action, disabled, danger }) => (
            <button
              key={label}
              type="button"
              onClick={action}
              disabled={disabled}
              className={`inline-flex items-center justify-center w-7 h-7 rounded-md border text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                danger
                  ? "border-border text-destructive hover:bg-destructive/10 hover:border-destructive/30"
                  : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {(seccion.tipo === "contexto" || seccion.tipo === "conclusion") && (
          <SeccionTextoLargo
            seccion={seccion as Seccion & { tipo: "contexto" | "conclusion" }}
            onChange={onChange}
          />
        )}
        {seccion.tipo === "enseñanza" && (
          <SeccionEnsenanza
            seccion={seccion as Seccion & { tipo: "enseñanza" }}
            onChange={onChange}
          />
        )}
        {seccion.tipo === "escrituras" && (
          <SeccionEscrituras
            seccion={seccion as Seccion & { tipo: "escrituras" }}
            onChange={onChange}
          />
        )}
        {seccion.tipo === "cuestionario" && (
          <SeccionCuestionario
            seccion={seccion as Seccion & { tipo: "cuestionario" }}
            onChange={onChange}
          />
        )}
        {seccion.tipo === "resumen" && (
          <p className="text-sm text-muted-foreground italic px-1">
            El tipo "resumen" usa bloques complejos — editalo directamente en el JSON si lo necesitás.
          </p>
        )}
      </div>
    </div>
  )
}

// ── Sub-editores ──────────────────────────────────────────────

function SeccionTextoLargo({ seccion, onChange }: {
  seccion: Seccion & { tipo: "contexto" | "conclusion" }
  onChange: (s: Seccion) => void
}) {
  return (
    <>
      <label className={labelClass}>Contenido</label>
      <textarea
        value={seccion.contenido ?? ""}
        rows={8}
        placeholder="Escribí el texto de esta sección..."
        onChange={e => onChange({ ...seccion, contenido: e.target.value })}
        className={textareaClass}
      />
    </>
  )
}

function SeccionEnsenanza({ seccion, onChange }: {
  seccion: Seccion & { tipo: "enseñanza" }
  onChange: (s: Seccion) => void
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Autor</label>
          <input type="text" value={seccion.autor ?? ""}
            placeholder="Élder David A. Bednar" className={inputClass}
            onChange={e => onChange({ ...seccion, autor: e.target.value })} />
        </div>
        <div>
          <label className={labelClass}>Fuente</label>
          <input type="text" value={seccion.fuente ?? ""}
            placeholder="Liahona, mayo de 2022, pág. 88" className={inputClass}
            onChange={e => onChange({ ...seccion, fuente: e.target.value })} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Texto de la cita</label>
        <textarea value={seccion.texto ?? ""} rows={4}
          placeholder="Texto de la enseñanza..." className={textareaClass}
          onChange={e => onChange({ ...seccion, texto: e.target.value })} />
      </div>
    </>
  )
}

function SeccionEscrituras({ seccion, onChange }: {
  seccion: Seccion & { tipo: "escrituras" }
  onChange: (s: Seccion) => void
}) {
  const citas = seccion.citas ?? []

  function updateCita(i: number, field: string, value: string) {
    onChange({ ...seccion, citas: citas.map((c, idx) => idx === i ? { ...c, [field]: value } : c) })
  }

  return (
    <div className="flex flex-col gap-3">
      {citas.map((cita, i) => (
        <div key={i} className="border border-border rounded-lg p-3 bg-muted/30 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Cita {i + 1}</span>
            {citas.length > 1 && (
              <button type="button"
                onClick={() => onChange({ ...seccion, citas: citas.filter((_, idx) => idx !== i) })}
                className="text-xs text-destructive hover:bg-destructive/10 px-2 py-0.5 rounded transition-colors">
                ✕
              </button>
            )}
          </div>
          <div>
            <label className={labelClass}>Referencia</label>
            <input type="text" value={cita.referencia} placeholder="Juan 5:39" className={inputClass}
              onChange={e => updateCita(i, "referencia", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Texto</label>
            <textarea value={cita.texto} rows={3} placeholder="Escudriñad las Escrituras..." className={textareaClass}
              onChange={e => updateCita(i, "texto", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Link (opcional)</label>
            <input type="text" value={(cita as any).link ?? ""} placeholder="https://www.churchofjesuschrist.org/..."
              className={inputClass} onChange={e => updateCita(i, "link", e.target.value)} />
          </div>
        </div>
      ))}
      <button type="button"
        onClick={() => onChange({ ...seccion, citas: [...citas, { referencia: "", texto: "" }] })}
        className="self-start flex items-center gap-2 px-4 py-2 text-sm font-semibold border-2 border-dashed border-border rounded-lg text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors">
        + Agregar escritura
      </button>
    </div>
  )
}

function SeccionCuestionario({ seccion, onChange }: {
  seccion: Seccion & { tipo: "cuestionario" }
  onChange: (s: Seccion) => void
}) {
  const preguntas = seccion.preguntas ?? []

  return (
    <div className="flex flex-col gap-2">
      {preguntas.map((p, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="text-sm font-bold text-primary pt-2.5 min-w-[20px]">{i + 1}.</span>
          <textarea value={p} rows={2}
            placeholder="Escribí una pregunta de reflexión..."
            className={textareaClass}
            onChange={e => onChange({ ...seccion, preguntas: preguntas.map((pr, idx) => idx === i ? e.target.value : pr) })} />
          {preguntas.length > 1 && (
            <button type="button"
              onClick={() => onChange({ ...seccion, preguntas: preguntas.filter((_, idx) => idx !== i) })}
              className="mt-2 text-xs text-destructive hover:bg-destructive/10 px-2 py-1 rounded transition-colors flex-shrink-0">
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button"
        onClick={() => onChange({ ...seccion, preguntas: [...preguntas, ""] })}
        className="self-start flex items-center gap-2 px-4 py-2 text-sm font-semibold border-2 border-dashed border-border rounded-lg text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors">
        + Agregar pregunta
      </button>
    </div>
  )
}