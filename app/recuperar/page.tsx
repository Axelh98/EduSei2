"use client";

import { useState, useEffect, use } from "react";
import { getLessonById } from "@/lib/quiz-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { BookOpen, ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const typeColorMap: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme": "#18181b",
  "Preparación para la Vida": "#ef4444",
  "Dominio de la Doctrina": "#f97316",
  "Especial": "#38bdf8",
  "Día Flexible": "#a855f7",
  "default": "#71717a",
};

interface PageProps {
  searchParams: Promise<{ data?: string }>;
}

export default function RecoveryPage({ searchParams }: PageProps) {
  const resolvedParams = use(searchParams);
  const rawData = resolvedParams.data || "";

  const [completados, setCompletados] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("seminario-completados") || "[]");
    setCompletados(saved);
  }, []);

  const data = rawData ? decodeURIComponent(rawData) : "";
  const categoriesSelection = data.split("|").filter(Boolean);

  const pendingLessons = categoriesSelection.flatMap((group) => {
    const [categoryId, lessonIdsRaw] = group.split(":");
    const lessonIds = lessonIdsRaw.split(",");
    return lessonIds
      .map((lId) => {
        const result = getLessonById(categoryId, lId);
        return result ? { ...result, categoryId } : null;
      })
      .filter(Boolean);
  });

  const totalLecciones = pendingLessons.length;
  const leccionesHechas = pendingLessons.filter((item) =>
    completados.includes(`${item?.categoryId}-${item?.lesson.title}`),
  ).length;
  const porcentajeProgreso = totalLecciones > 0 ? Math.round((leccionesHechas / totalLecciones) * 100) : 0;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-2xl">
          <header className="mb-8 text-center">
            <h1 className="mb-2 font-serif text-3xl font-bold italic">Tu Camino de Recuperación</h1>
            <p className="text-muted-foreground">Completa tus tareas para ponerte al día.</p>
          </header>

          {/* PROGRESO */}
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
             {/* ... (Sección de progreso igual que antes) */}
             <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Tu progreso</p>
                  <p className="text-xl font-bold">{leccionesHechas} de {totalLecciones}</p>
                </div>
              </div>
              <span className="text-3xl font-black text-primary">{porcentajeProgreso}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${porcentajeProgreso}%` }} />
            </div>
          </div>

          {/* LISTA DE LECCIONES */}
          <div className="grid gap-4">
            {pendingLessons.map((item, index) => {
              if (!item) return null;
              
              const isDone = completados.includes(`${item.categoryId}-${item.lesson.title}`);
              // Obtenemos el color dinámico
              const lessonColor = typeColorMap[item.lesson.type] || typeColorMap["default"];

              return (
                <div
                  key={index}
                  style={{ "--lesson-color": isDone ? "#22c55e" : lessonColor } as React.CSSProperties}
                  className={cn(
                    "group relative flex flex-col rounded-xl border p-5 transition-all duration-300",
                    isDone 
                      ? "border-green-500/30 bg-green-500/[0.03]" 
                      : "border-border bg-card hover:border-[var(--lesson-color)]/50 hover:bg-[var(--lesson-color)]/[0.02] hover:shadow-md"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "rounded-xl p-2.5 transition-all duration-300",
                          isDone
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                            : "bg-[var(--lesson-color)]/10 text-[var(--lesson-color)] group-hover:scale-110"
                        )}
                      >
                        {isDone ? <CheckCircle2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                           <p className={cn(
                             "text-[10px] font-bold uppercase tracking-widest",
                             isDone ? "text-green-600/60" : "text-muted-foreground"
                           )}>
                            {item.category.name}
                          </p>
                          {!isDone && (
                            <span 
                              className="text-[9px] font-bold px-1.5 py-0.5 rounded border border-[var(--lesson-color)]/20 text-[var(--lesson-color)] bg-[var(--lesson-color)]/5"
                            >
                              {item.lesson.type}
                            </span>
                          )}
                        </div>
                        <h3 className={cn(
                            "font-bold transition-all",
                            isDone ? "text-green-700/50 line-through" : "text-foreground group-hover:text-[var(--lesson-color)]"
                          )}
                        >
                          {item.lesson.title}
                        </h3>
                      </div>
                    </div>

                    {!isDone ? (
                      <Link
                        href={`/quiz/${item.categoryId}/${item.lesson.id}?data=${encodeURIComponent(rawData)}`}
                        className="rounded-full bg-[var(--lesson-color)]/10 p-2.5 text-[var(--lesson-color)] transition-all hover:bg-[var(--lesson-color)] hover:text-white"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : (
                      <div className="flex flex-col items-end">
                         <span className="rounded-full bg-green-500/20 px-3 py-1 text-[10px] font-black text-green-600">
                          LISTO
                        </span>
                      </div>
                    )}
                  </div>

                  {item.lesson.chapterUrl && !isDone && (
                    <div className="mt-4 pl-14">
                      <Link
                        href={item.lesson.chapterUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground transition-all hover:bg-[var(--lesson-color)]/10 hover:text-[var(--lesson-color)]"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Estudiar capítulo
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}