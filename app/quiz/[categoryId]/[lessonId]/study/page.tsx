"use client"

import { use } from "react"
import { ArrowLeft, BookOpen, GraduationCap, Quote } from "lucide-react"
import { getCategoryById } from "@/lib/quiz-data"
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido"
import Link from "next/link"

interface StudyPageProps {
  params: Promise<{ categoryId: string; lessonId: string }>
  // Agregamos searchParams a las props del componente
  searchParams: Promise<{ data?: string }>
}

export default function StudyPage({ params, searchParams }: StudyPageProps) {
  const { categoryId, lessonId } = use(params)
  
  // Capturamos el parámetro 'data' de la URL actual
  const resolvedSearchParams = use(searchParams)
  const recoveryData = resolvedSearchParams.data

  const category = getCategoryById(categoryId)
  const lessonData = leccionesResumidas.find(l => l.id === lessonId)

  if (!lessonData) {
    return <div className="p-10 text-center">Lección no encontrada</div>
  }

  // Construimos la URL de retorno dinámicamente
  // Si existe recoveryData, volvemos a /recuperar, si no, a la categoría normal
  const backUrl = recoveryData 
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Minimalista */}
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

        <div className="mt-8 space-y-10">
          {lessonData.secciones.map((seccion, idx) => (
            <section key={idx} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
              
              {/* Renderizado de CONTEXTO */}
              {seccion.tipo === "contexto" && (
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {seccion.contenido}
                </p>
              )}

              {/* Renderizado de ENSEÑANZA */}
              {seccion.tipo === "enseñanza" && (
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
              )}

              {/* Renderizado de ESCRITURAS */}
              {seccion.tipo === "escrituras" && (
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
              )}

              {/* Renderizado de CUESTIONARIO */}
              {seccion.tipo === "cuestionario" && (
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
              )}
            </section>
          ))}
        </div>

        {/* CTA FINAL PARA IR AL QUIZ */}
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