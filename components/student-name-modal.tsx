"use client"

import { useState, useEffect, useRef } from "react"
import { User, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StudentNameModalProps {
  isOpen: boolean
  onConfirm: (nombre: string) => void
  onCancel: () => void
}

export function StudentNameModal({ isOpen, onConfirm, onCancel }: StudentNameModalProps) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input cuando abre
  useEffect(() => {
    if (isOpen) {
      setValue("")
      setError("")
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  const handleConfirm = () => {
    const nombre = value.trim()
    if (nombre.length < 4) {
      setError("Ingresá tu nombre completo (mínimo 4 caracteres).")
      return
    }
    onConfirm(nombre)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleConfirm()
    if (e.key === "Escape") onCancel()
  }

  if (!isOpen) return null

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
        onClick={onCancel}
      />

      {/* Panel */}
      <div className="relative w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-200 sm:slide-in-from-bottom-0 sm:zoom-in-95">
        <div className="m-4 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="border-b border-border px-6 py-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 id="modal-title" className="text-base font-bold text-foreground">
              ¿Cuál es tu nombre?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Se guardará en tu dispositivo para no pedírtelo de nuevo.
            </p>
          </div>

          {/* Input */}
          <div className="px-6 py-5">
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError("") }}
              onKeyDown={handleKeyDown}
              placeholder="Ej: Juan Pérez"
              className={cn(
                "w-full rounded-xl border bg-background px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/50",
                "outline-none ring-offset-background transition-all",
                "focus:border-primary focus:ring-2 focus:ring-primary/20",
                error ? "border-destructive" : "border-border"
              )}
              autoComplete="name"
            />
            {error && (
              <p className="mt-2 text-xs font-medium text-destructive">
                {error}
              </p>
            )}
          </div>

          {/* Acciones */}
          <div className="flex gap-2 border-t border-border px-6 py-4">
            <button
              onClick={onCancel}
              className="flex-1 rounded-xl border border-border bg-background py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
            >
              Confirmar
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}