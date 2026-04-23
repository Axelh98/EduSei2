import Link from "next/link"
import { FileQuestion, ArrowRight, BookOpen } from "lucide-react"
import type { ShortLesson } from "@/lib/types"
import { cn } from "@/lib/utils" 

interface LessonCardProps {
  lesson: ShortLesson
  categoryId: string
}

const typeColorMap: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme": "#18181b", 
  "Preparación para la Vida": "#ef4444", 
  "Dominio de la Doctrina": "#f97316",
  "Especial": "#38bdf8",      
  "default": "#71717a",
};

export function LessonCard({ lesson, categoryId }: LessonCardProps) {
  const lessonColor = typeColorMap[lesson.type] || typeColorMap["default"];

  // --- LÓGICA DE EXTRACCIÓN PARA EL NUEVO FORMATO ---
  
  // 1. Buscamos la sección de contexto para usarla como descripción
  const contexto = lesson.secciones.find(s => s.tipo === "contexto")?.contenido;
  
  // 2. Buscamos la sección de cuestionario para contar las preguntas
  const numPreguntas = lesson.secciones.find(s => s.tipo === "cuestionario")?.preguntas?.length || 0;

  return (
    <div 
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 ease-in-out",
        "hover:border-[var(--lesson-color)]/40",
        "hover:bg-[var(--lesson-color)]/[0.03]",
        "hover:shadow-lg hover:shadow-[var(--lesson-color)]/[0.08]"
      )}
      style={{ "--lesson-color": lessonColor } as React.CSSProperties}
    >
      <div 
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-[var(--lesson-color)]/[0.1] group-hover:text-[var(--lesson-color)]"
      >
        {/* Cambiamos el icono según el tipo si lo deseas, o mantenemos uno genérico */}
        <BookOpen className="h-5 w-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h4 className="text-base font-semibold text-foreground group-hover:text-[var(--lesson-color)] transition-colors duration-300 truncate">
            {lesson.titulo}
          </h4>
          
          <span 
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border uppercase tracking-wider"
            style={{ 
                backgroundColor: `${lessonColor}10`,
                borderColor: `${lessonColor}30`,
                color: lessonColor
            }}
          >
            {lesson.type}
          </span>
        </div>

        {/* Mostramos el contenido de la sección 'contexto' filtrado */}
        {contexto && (
          <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
            {contexto}
          </p>
        )}

        <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-muted-foreground/80 flex items-center gap-1">
              <FileQuestion className="h-3 w-3" />
              {numPreguntas} {numPreguntas === 1 ? 'pregunta' : 'preguntas'}
            </span>

            {lesson.url_fuente && (
              <Link
                href={lesson.url_fuente}
                target="_blank"
                className="text-xs font-semibold text-primary/80 underline-offset-4 hover:underline hover:text-[var(--lesson-color)]"
              >
                Ver recurso original
              </Link>
            )}
        </div>
      </div>

      <Link
        href={`/quiz/${categoryId}/${lesson.id}`}
        className="shrink-0 p-2 rounded-full bg-muted/50 transition-all group-hover:bg-[var(--lesson-color)]/[0.1]"
      >
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[var(--lesson-color)]" />
      </Link>
    </div>
  )
}