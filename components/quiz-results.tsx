"use client"

import { Trophy, RotateCcw, Home, Star, BookOpen, ListChecks, Share2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { generateSingleQuizReport } from "@/lib/utils" 

interface QuizResultsProps {
  score: number
  totalQuestions: number
  categoryName: string
  categoryId: string
  lessonTitle: string 
  onRetry: () => void
  recoveryData?: string | null
}

// 1. DEFINICIÓN DE LA FUNCIÓN (Fuera del componente para evitar recrearla)
function getResultMessage(percentage: number) {
  if (percentage === 100) return { text: "Perfecto", icon: Star, color: "text-yellow-500" }
  if (percentage >= 80) return { text: "Excelente", icon: Trophy, color: "text-secondary" }
  if (percentage >= 60) return { text: "Bien hecho", icon: BookOpen, color: "text-primary" }
  return { text: "Sigue estudiando", icon: BookOpen, color: "text-muted-foreground" }
}

export function QuizResults({
  score,
  totalQuestions,
  categoryName,
  categoryId,
  lessonTitle,
  recoveryData,
  onRetry,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const result = getResultMessage(percentage) // <--- Ahora sí la encontrará
  const ResultIcon = result.icon

  useEffect(() => {
    if (percentage >= 60) {
      const storageKey = "seminario-completados"
      const rawData = localStorage.getItem(storageKey)
      const completados = rawData ? JSON.parse(rawData) : []
      const lessonKey = `${categoryId}-${lessonTitle}` 
      
      if (!completados.includes(lessonKey)) {
        completados.push(lessonKey)
        localStorage.setItem(storageKey, JSON.stringify(completados))
      }
    }
  }, [percentage, categoryId, lessonTitle])

  const handleShareWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault()
    const nombre = window.prompt("Ingresa tu nombre completo para firmar tu evaluación:")
    
    if (!nombre || nombre.trim().length < 4) {
      alert("Debes ingresar tu nombre para generar un reporte válido.")
      return
    }

    const mensaje = generateSingleQuizReport(
      categoryName,
      lessonTitle,
      score,
      totalQuestions,
      percentage,
      nombre
    )

    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, "_blank")
  }

  const backUrl = recoveryData 
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  return (
    <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-8 text-center md:p-10 shadow-sm">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ResultIcon className={cn("h-10 w-10", result.color)} />
      </div>

      <h2 className={cn("font-serif text-2xl font-bold md:text-3xl", result.color)}>
        {result.text}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{categoryName}</p>

      <div className="my-8">
        <div className="text-6xl font-bold text-foreground md:text-7xl">
          {percentage}
          <span className="text-2xl text-muted-foreground">%</span>
        </div>
        <p className="mt-2 text-muted-foreground">
          {score} de {totalQuestions} respuestas correctas
        </p>
      </div>

      <div className="mb-8 h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000",
            percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-blue-500" : "bg-red-500"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          Reintentar
        </button>

        <Link
          href={backUrl}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95"
        >
          {recoveryData ? <ListChecks className="h-4 w-4" /> : <Home className="h-4 w-4" />}
          {recoveryData ? "Mi Plan" : "Inicio"}
        </Link>

        <button
          onClick={handleShareWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95"
        >
          <Share2 className="h-4 w-4" />
          Compartir
        </button>
      </div>
    </div>
  )
}