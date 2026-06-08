"use client"
// components/editor/EditorGuide.tsx
// Guía paso a paso que aparece cuando el maestro abre /editor/nuevo.
// Se puede cerrar y no vuelve a aparecer (persiste en localStorage).

import { useState, useEffect } from "react"
import { BookOpen, Edit3, Eye, Share2, ChevronRight, ChevronLeft, X, Lightbulb } from "lucide-react"

const STORAGE_KEY = "msi-editor-guide-dismissed"

const STEPS = [
  {
    icon: BookOpen,
    color: "text-primary",
    bg:    "bg-primary/10",
    title: "1. Elegí la lección base",
    desc:  "En el panel izquierdo, seleccioná el curso y la lección que querés personalizar. El contenido original se carga automáticamente para que puedas editarlo.",
    tip:   "Podés partir del contenido original o borrarlo todo y empezar desde cero.",
  },
  {
    icon: Edit3,
    color: "text-secondary",
    bg:    "bg-secondary/10",
    title: "2. Editá el contenido",
    desc:  "Modificá las secciones existentes (contexto, citas, escrituras, cuestionario) o agregá nuevas. También podés editar, agregar o quitar preguntas del quiz.",
    tip:   "Usá ↑ ↓ para reordenar secciones. El ✕ elimina una sección o pregunta.",
  },
  {
    icon: Eye,
    color: "text-primary",
    bg:    "bg-primary/10",
    title: "3. Elegí la visibilidad",
    desc:  "Privada: solo vos podés verla y usarla. Pública: otros maestros la ven en su lista y pueden usarla cuando asignan lecciones a sus alumnos.",
    tip:   "Podés cambiar la visibilidad después de guardar.",
  },
  {
    icon: Share2,
    color: "text-secondary",
    bg:    "bg-secondary/10",
    title: "4. Asignala a tus alumnos",
    desc:  "Cuando asignes un plan de recuperación, vas a poder elegir tu versión personalizada para cada lección. El alumno verá tu versión al abrir el link.",
    tip:   "El alumno siempre ve el contenido original en las páginas normales del sitio.",
  },
]

interface Props {
  onDismiss: () => void
}

export function EditorGuide({ onDismiss }: Props) {
  const [step, setStep] = useState(0)
  const current = STEPS[step]
  const Icon = current.icon
  const isLast = step === STEPS.length - 1

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-secondary" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Guía rápida
            </span>
          </div>
          <button
            type="button"
            onClick={onDismiss}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            Saltar guía
          </button>
        </div>

        {/* Indicador de pasos */}
        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStep(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step
                  ? "bg-primary w-8"
                  : i < step
                  ? "bg-primary/40 w-4"
                  : "bg-border w-4"
              }`}
            />
          ))}
        </div>

        {/* Tarjeta del paso */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Ícono */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${current.bg} mb-5`}>
            <Icon className={`h-6 w-6 ${current.color}`} />
          </div>

          {/* Contenido */}
          <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-snug">
            {current.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {current.desc}
          </p>

          {/* Tip */}
          <div className="flex items-start gap-2.5 bg-muted/50 rounded-lg px-3 py-2.5">
            <Lightbulb className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Tip: </span>
              {current.tip}
            </p>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep(s => s - 1)}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex items-center gap-1.5 px-6 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Empezar a editar
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep(s => s + 1)}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Hook para manejar si la guía fue descartada
export function useEditorGuide() {
  const [showGuide, setShowGuide] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dismissed = localStorage.getItem(STORAGE_KEY)
    setShowGuide(!dismissed)
  }, [])

  function dismissGuide() {
    localStorage.setItem(STORAGE_KEY, "1")
    setShowGuide(false)
  }

  return { showGuide: mounted && showGuide, dismissGuide }
}