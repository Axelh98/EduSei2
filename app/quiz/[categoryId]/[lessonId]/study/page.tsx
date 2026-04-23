"use client"

import { use } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, BookOpen, GraduationCap, Quote } from "lucide-react"
import { getCategoryById } from "@/lib/quiz-data"
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido"
import { Button } from "@/components/ui/button" // O tu componente de botón
import Link from "next/link"

interface StudyPageProps {
  params: Promise<{ categoryId: string; lessonId: string }>
}

export default function StudyPage({ params }: StudyPageProps) {
  const { categoryId, lessonId } = use(params)
  const category = getCategoryById(categoryId)
  
  // Buscamos la lección en los resúmenes
  const lessonData = leccionesResumidas.find(l => l.id === lessonId)

  if (!lessonData) {
    return <div className="p-10 text-center">Lección no encontrada</div>
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Minimalista */}
      <div className="border-b bg-card px-4 py-4">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <Link 
            href={`/quiz/${categoryId}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
            Material de Estudio
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

              {/* Renderizado de ENSEÑANZA (Citas de Autoridades) */}
              {seccion.tipo === "enseñanza" && (
                <div className="relative rounded-2xl bg-primary/5 p-8 border border-primary/10">
                  <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                  <blockquote className="relative text-xl font-medium italic text-foreground leading-snug">
                    "{seccion.texto}"
                  </blockquote>
                  <div className="mt-4 text-right">
                    <p className="font-bold text-primary">{seccion.autor}</p>
                    <p className="text-sm text-muted-foreground">{seccion.fuente}</p>
                  </div>
                </div>
              )}

              {/* Renderizado de ESCRITURAS */}
              {seccion.tipo === "escrituras" && (
                <div className="grid gap-4">
                  <h3 className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-muted-foreground">
                    <BookOpen className="h-4 w-4" /> Escrituras clave
                  </h3>
                  <div className="grid gap-3">
                    {seccion.citas?.map((cita, i) => (
                      <div key={i} className="rounded-xl border bg-card p-4 shadow-sm">
                        <span className="font-bold text-primary">{cita.referencia}</span>
                        <p className="mt-1 text-sm leading-relaxed">{cita.texto}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Renderizado de PREGUNTAS REFLEXIVAS */}
              {seccion.tipo === "cuestionario" && (
                <div className="rounded-2xl border-2 border-dashed border-muted p-6 bg-muted/30">
                  <h3 className="flex items-center gap-2 font-bold mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Para reflexionar
                  </h3>
                  <ul className="space-y-4">
                    {seccion.preguntas?.map((pregunta, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium leading-relaxed">
                        <span className="text-primary font-bold">{i + 1}.</span>
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
          <p className="mb-6 text-sm text-muted-foreground">
            ¿Has terminado de repasar el material?
          </p>
          <Link
            href={`/quiz/${categoryId}/${lessonId}`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Comenzar Cuestionario Evaluativo
          </Link>
        </div>
      </main>
    </div>
  )
}