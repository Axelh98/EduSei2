"use client"

import { use } from "react"
import { ArrowLeft, BookOpen, GraduationCap, Quote, BookMarked, ListChecks } from "lucide-react"
import { getCategoryById, isFlatCategory } from "@/lib/quiz-data"
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido"
import type { Seccion, BloqueResumen } from "@/lib/types"
import Link from "next/link"

interface StudyPageProps {
  params: Promise<{ categoryId: string; lessonId: string }>
  searchParams: Promise<{ data?: string }>
}

// ─── Bloque individual ────────────────────────────────────────────────────────

function BloqueView({ bloque }: { bloque: BloqueResumen }) {
  switch (bloque.tipo) {

    case "parrafo":
      return (
        <p className="text-base leading-relaxed text-muted-foreground">
          {bloque.texto}
        </p>
      )

    case "escritura":
      return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <BookMarked className="h-4 w-4 text-primary shrink-0" />
            <span className="font-bold text-primary text-sm">{bloque.referencia}</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90 italic mb-2">
            "{bloque.texto}"
          </p>
          {bloque.comentario && (
            <p className="text-xs leading-relaxed text-muted-foreground border-t pt-2 mt-2">
              {bloque.comentario}
            </p>
          )}
        </div>
      )

    case "cita":
      return (
        <div className="relative rounded-2xl bg-primary/[0.03] p-6 border border-primary/10">
          <Quote className="absolute top-4 left-4 h-7 w-7 text-primary/10" />
          <blockquote className="relative text-base font-medium italic text-foreground leading-snug">
            "{bloque.texto}"
          </blockquote>
          <div className="mt-4 text-right">
            <p className="font-bold text-primary text-sm">{bloque.autor}</p>
            {bloque.fuente && (
              <p className="text-xs text-muted-foreground mt-0.5">{bloque.fuente}</p>
            )}
          </div>
        </div>
      )

    case "doctrinal":
      return (
        <div className="rounded-xl border border-primary/20 bg-primary/[0.02] p-5">
          <h3 className="flex items-center gap-2 font-bold text-primary text-sm mb-3">
            <ListChecks className="h-4 w-4" />
            Verdades doctrinales
          </h3>
          <ul className="space-y-2">
            {bloque.puntos.map((punto, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="text-primary font-black shrink-0 mt-0.5">•</span>
                {punto}
              </li>
            ))}
          </ul>
        </div>
      )

    case "reflexion":
      return (
        <div className="rounded-2xl border-2 border-dashed border-primary/20 p-5 bg-primary/[0.01]">
          <h3 className="flex items-center gap-2 font-bold mb-3 text-primary text-sm">
            <GraduationCap className="h-4 w-4" />
            Para reflexionar
          </h3>
          <ul className="space-y-3">
            {bloque.preguntas.map((pregunta, i) => (
              <li key={i} className="flex gap-2 text-sm font-medium leading-relaxed text-muted-foreground">
                <span className="text-primary font-black shrink-0">{i + 1}.</span>
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

// ─── Sección completa ─────────────────────────────────────────────────────────

function SeccionView({ seccion }: { seccion: Seccion }) {

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
      <p className="text-lg leading-relaxed text-muted-foreground">
        {seccion.contenido}
      </p>
    )
  }

  if (seccion.tipo === "enseñanza") {
    return (
      <div className="relative rounded-2xl bg-primary/[0.03] p-8 border border-primary/10">
        <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/10" />
        <blockquote className="relative text-xl font-medium italic text-foreground leading-snug">
          "{seccion.texto}"
        </blockquote>
        <div className="mt-6 text-right">
          <p className="font-bold text-primary">{seccion.autor}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{seccion.fuente}</p>
        </div>
      </div>
    )
  }

  if (seccion.tipo === "escrituras") {
    return (
      <div className="grid gap-4">
        <h3 className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          <BookOpen className="h-4 w-4" /> Escrituras clave
        </h3>
        <div className="grid gap-3">
          {seccion.citas?.map((cita, i) => (
            <div key={i} className="rounded-xl border bg-card p-5 shadow-sm">
              <span className="font-bold text-primary block mb-1">{cita.referencia}</span>
              <p className="text-sm leading-relaxed text-foreground/90 italic">"{cita.texto}"</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (seccion.tipo === "cuestionario") {
    return (
      <div className="rounded-2xl border-2 border-dashed border-primary/20 p-6 bg-primary/[0.01]">
        <h3 className="flex items-center gap-2 font-bold mb-4 text-primary">
          <GraduationCap className="h-5 w-5" />
          Para reflexionar
        </h3>
        <ul className="space-y-4">
          {seccion.preguntas?.map((pregunta, i) => (
            <li key={i} className="flex gap-3 text-sm font-medium leading-relaxed text-muted-foreground">
              <span className="text-primary font-black">{i + 1}.</span>
              {pregunta}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (seccion.tipo === "conclusion") {
    return (
      <p className="text-base leading-relaxed text-muted-foreground border-l-2 border-primary/30 pl-4 italic">
        {seccion.contenido}
      </p>
    )
  }

  return null
}

// ─── Buscar lección en cualquier fuente ──────────────────────────────────────

function findLesson(categoryId: string, lessonId: string) {
  // 1. Categorías flat de Instituto (religion-250, religion-225, etc.)
  const category = getCategoryById(categoryId)
  if (category && isFlatCategory(category)) {
    const lesson = category.lessons.find(l => l.id === lessonId)
    if (lesson && (lesson.secciones ?? []).length > 0) return lesson
  }

  // 2. Resúmenes del Seminario
  const resumida = leccionesResumidas.find(l => l.id === lessonId)
  if (resumida) return resumida

  return null
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function StudyPage({ params, searchParams }: StudyPageProps) {
  const { categoryId, lessonId } = use(params)
  const resolvedSearchParams = use(searchParams)
  const recoveryData = resolvedSearchParams.data

  const lessonData = findLesson(categoryId, lessonId)

  if (!lessonData) {
    return <div className="p-10 text-center">Lección no encontrada</div>
  }

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="border-b bg-card px-4 py-4 shadow-sm">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <Link
            href={backUrl}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            {recoveryData ? "Volver a mi plan" : "Volver"}
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
            Repaso de Estudio
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-6 pt-10">
        <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {lessonData.title}
        </h1>

        <div className="mt-8 space-y-8">
          {(lessonData.secciones ?? []).map((seccion, idx) => (
            <section
              key={idx}
              className="animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              <SeccionView seccion={seccion as Seccion} />
            </section>
          ))}
        </div>

        <div className="mt-16 border-t pt-10 text-center">
          <p className="mb-6 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            ¿Listo para la evaluación?
          </p>
          <Link
            href={`/quiz/${categoryId}/${lessonId}${recoveryData ? `?data=${encodeURIComponent(recoveryData)}` : ""}`}
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-sm font-black text-primary-foreground shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Hacer el Quiz Evaluativo
          </Link>
        </div>
      </main>
    </div>
  )
}