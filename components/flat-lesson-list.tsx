"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, FileText, ExternalLink, CheckCircle2 } from "lucide-react"
import type { FlatLesson } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface FlatLessonListProps {
  lessons: FlatLesson[]
  categoryId: string
}

export function FlatLessonList({ lessons, categoryId }: FlatLessonListProps) {
  const [completados, setCompletados] = useState<string[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("seminario-completados") || "[]")
    setCompletados(saved)
  }, [])

  const units = lessons.reduce<Map<string, FlatLesson[]>>((acc, lesson) => {
    const key = lesson.unitTitle ?? "Lecciones"
    if (!acc.has(key)) acc.set(key, [])
    acc.get(key)!.push(lesson)
    return acc
  }, new Map())

  return (
    <div className="flex flex-col gap-10">
      {Array.from(units.entries()).map(([unitTitle, unitLessons], unitIndex) => (
        <section key={unitTitle}>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {unitIndex + 1}
            </div>
            <h2 className="text-base font-bold uppercase tracking-widest text-muted-foreground">
              {unitTitle}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {unitLessons.map((lesson) => {
              const isDone = completados.includes(`${categoryId}-${lesson.title}`)
              const hasQuiz = lesson.questions.length > 0
              const hasStudy = (lesson.secciones ?? []).length > 0  // ← fix: secciones es opcional

              return (
                <div
                  key={lesson.id}
                  className={cn(
                    "group flex flex-col rounded-xl border bg-card p-4 transition-all duration-200",
                    isDone
                      ? "border-green-500/20 bg-green-500/[0.02] opacity-80"
                      : "border-border hover:border-primary/30 hover:shadow-md"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                      isDone ? "bg-green-500 text-white" : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-white"
                    )}>
                      {isDone ? <CheckCircle2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "text-sm font-bold leading-snug",
                        isDone ? "text-muted-foreground line-through" : "text-foreground"
                      )}>
                        {lesson.title}
                      </h3>
                      {lesson.description && (
                        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
                          {lesson.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/50 pt-3">
                    {lesson.chapterUrl && (
                      <Link
                        href={lesson.chapterUrl}
                        target="_blank"
                        className="flex items-center gap-1 rounded-lg bg-muted px-3 py-1.5 text-[10px] font-medium text-muted-foreground hover:bg-muted/80 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Manual
                      </Link>
                    )}

                    {hasStudy && (
                      <Link
                        href={`/quiz/${categoryId}/${lesson.id}/study`}
                        className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-[10px] font-bold text-primary hover:bg-primary/20 transition-colors"
                      >
                        <FileText className="h-3 w-3" />
                        Repasar
                      </Link>
                    )}

                    {hasQuiz ? (
                      <Link
                        href={`/quiz/${categoryId}/${lesson.id}`}
                        className="ml-auto flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold text-white shadow-sm hover:brightness-110 active:scale-95 transition-all"
                      >
                        Quiz
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px]">
                          {lesson.questions.length}
                        </span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span className="ml-auto flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[10px] text-muted-foreground/50">
                        Quiz próximamente
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}