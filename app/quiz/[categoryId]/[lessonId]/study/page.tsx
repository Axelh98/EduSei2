"use client"

import { use } from "react"
import {
  ArrowLeft,
  BookMarked,
  GraduationCap,
  Quote,
  ListChecks,
  ChevronRight,
} from "lucide-react"
import { getCategoryById, isFlatCategory } from "@/lib/quiz-data"
import { leccionesResumidasAT } from "@/lib/data/antiguo-testamento-resumido"
import { leccionesResumidasLM } from "@/lib/data/libro-de-mormon-resumido"
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
        <div className="relative overflow-hidden rounded-2xl bg-secondary/[0.06] p-6 border border-secondary/15">
          <Quote className="absolute -top-1 -left-1 h-12 w-12 text-secondary/10" />
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
      <p className="text-lg leading-[1.85] text-muted-foreground">
        {seccion.contenido}
      </p>
    )
  }

  if (seccion.tipo === "enseñanza") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-secondary/[0.06] p-8 border border-secondary/15">
        <Quote className="absolute -top-2 -left-2 h-16 w-16 text-secondary/10" />
        <blockquote className="relative font-serif text-xl font-medium italic leading-relaxed text-foreground">
          "{seccion.texto}"
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-secondary/20" />
          <div className="text-right">
            <p className="text-sm font-bold text-secondary">{seccion.autor}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{seccion.fuente}</p>
          </div>
        </div>
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
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
                {cita.referencia}
              </span>
              <p className="font-serif text-sm leading-relaxed text-foreground/90 italic">
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

// ─── Buscar lección en cualquier fuente ──────────────────────────────────────

function findLesson(categoryId: string, lessonId: string) {
  const category = getCategoryById(categoryId)
  if (category && isFlatCategory(category)) {
    const lesson = category.lessons.find((l) => l.id === lessonId)
    if (lesson && (lesson.secciones ?? []).length > 0) return lesson
  }

  if (categoryId === "antiguo-testamento") {
    const r = leccionesResumidasAT.find((l) => l.id === lessonId)
    if (r) return r
  } else if (categoryId === "libro-de-mormon") {
    const r = leccionesResumidasLM.find((l) => l.id === lessonId)
    if (r) return r
  }

  return null
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function StudyPage({ params, searchParams }: StudyPageProps) {
  const { categoryId, lessonId } = use(params)
  const resolvedSearchParams = use(searchParams)
  const recoveryData = resolvedSearchParams.data

  const lessonData = findLesson(categoryId, lessonId)

  if (!lessonData) {
    return (
      <div className="p-10 text-center text-muted-foreground">
        Lección no encontrada
      </div>
    )
  }

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header sticky */}
      <div className="sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur-md px-4 py-3">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <Link
            href={backUrl}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            {recoveryData ? "Mi plan" : "Volver"}
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
            Repaso de estudio
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-5 pt-10">
        {/* Título */}
        <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {lessonData.title}
        </h1>

        {/* Divisor decorativo */}
        <div className="mt-6 mb-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          <div className="h-1 w-1 rounded-full bg-primary/20" />
        </div>

        {/* Secciones */}
        <div className="space-y-10">
          {(lessonData.secciones ?? []).map((seccion, idx) => (
            <section
              key={idx}
              className="animate-in fade-in slide-in-from-bottom-3 duration-500"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <SeccionView seccion={seccion as Seccion} />
            </section>
          ))}
        </div>

        {/* CTA al quiz */}
        <div className="mt-20 text-center">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
              ¿Listo para la evaluación?
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
          <Link
            href={`/quiz/${categoryId}/${lessonId}${recoveryData ? `?data=${encodeURIComponent(recoveryData)}` : ""}`}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Hacer el Quiz Evaluativo
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}