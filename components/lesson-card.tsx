"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, FileText, ExternalLink } from "lucide-react"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils" 

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
}

const typeColorMap: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme": "#18181b", 
  "Nuevo Testamento - Ven Sigueme": "#27272a", 
  "Libro de Mormon - Ven Sigueme": "#3f3f46", 
  "Doctrina y Convenios - Ven Sigueme": "#52525b",
  "Preparación para la Vida": "#ef4444", 
  "Dominio de la Doctrina": "#f97316",
  "Especial": "#38bdf8",      
};

export function LessonCard({ lesson, categoryId }: LessonCardProps) {
  const lessonColor = typeColorMap[lesson.type] || typeColorMap["default"];
  const descripcionVista = lesson.secciones?.find(s => s.tipo === "contexto")?.contenido || lesson.description;
  const numQuiz = lesson.questions?.length || 0;

  return (
    <div 
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-background p-4 transition-all duration-300",
        "hover:border-[var(--lesson-color)]/40 hover:bg-[var(--lesson-color)]/[0.01] hover:shadow-md"
      )}
      style={{ "--lesson-color": lessonColor } as React.CSSProperties}
    >
      {/* HEADER: Título y Badge */}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-[var(--lesson-color)] group-hover:text-white transition-colors">
          <BookOpen className="h-5 w-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1">
             <span 
              className="w-fit rounded-full px-2 py-0.5 text-[9px] font-black border uppercase tracking-wider"
              style={{ 
                  backgroundColor: `${lessonColor}10`,
                  borderColor: `${lessonColor}30`, 
                  color: lessonColor 
              }}
            >
              {lesson.type}
            </span>
            <h4 className="text-sm font-bold text-foreground group-hover:text-[var(--lesson-color)] transition-colors leading-tight break-words">
              {lesson.title}
            </h4>
          </div>
        </div>
      </div>

      {/* DESCRIPCIÓN: Reducida en móvil */}
      <p className="mt-3 text-[11px] text-muted-foreground line-clamp-2 leading-snug px-1">
        {descripcionVista}
      </p>

      {/* ACCIONES: Layout adaptable */}
      <div className="mt-4 flex flex-col gap-3 pt-3 border-t border-border/50">
        
        {/* Enlaces secundarios (Lectura y Manual) */}
        <div className="flex items-center justify-around sm:justify-start sm:gap-6">
          {lesson.secciones?.length > 0 && (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}/study`}
              className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--lesson-color)] hover:underline decoration-2 underline-offset-4 uppercase"
            >
              <FileText className="h-3.5 w-3.5" />
              Repasar Lectura
            </Link>
          )}
          
          {lesson.chapterUrl && (
            <Link
              href={lesson.chapterUrl}
              target="_blank"
              className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground/70 hover:text-foreground"
            >
              <ExternalLink className="h-3 w-3" />
              Manual
            </Link>
          )}
        </div>

        {/* Botón Principal: Full width en móvil */}
        <Link
          href={`/quiz/${categoryId}/${lesson.id}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[var(--lesson-color)] text-white text-xs font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
        >
          Hacer el Quiz
          <span className="bg-white/20 px-1.5 py-0.5 rounded text-[9px]">
            {numQuiz}
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}