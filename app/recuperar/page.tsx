"use client";

import { useState, useEffect, use, useMemo } from "react";
import { getLessonById } from "@/lib/quiz-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Trophy, 
  FileText, 
  ExternalLink, 
  Share2 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido";
import { generateWhatsAppReport } from "@/lib/utils";

const typeColorMap: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme": "#18181b",
  "Nuevo Testamento - Ven Sigueme": "#27272a",
  "Libro de Mormon - Ven Sigueme": "#3f3f46",
  "Doctrina y Convenios - Ven Sigueme": "#52525b",
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

  const pendingLessons = useMemo(() => {
    if (!rawData) return [];
    const dataString = decodeURIComponent(rawData);
    return dataString.split("|").filter(Boolean).flatMap((group) => {
      const [categoryId, lessonIdsRaw] = group.split(":");
      return lessonIdsRaw.split(",").map((lId) => {
        const result = getLessonById(categoryId, lId);
        if (!result) return null;
        return { 
          ...result, 
          categoryId, 
          tieneResumen: leccionesResumidas.some(r => r.id === lId) 
        };
      }).filter(Boolean);
    });
  }, [rawData]);

  const totalLecciones = pendingLessons.length;
  const leccionesHechas = pendingLessons.filter((item) =>
    completados.includes(`${item?.categoryId}-${item?.lesson.title}`)
  ).length;
  const porcentajeProgreso = totalLecciones > 0 ? Math.round((leccionesHechas / totalLecciones) * 100) : 0;

  const handleReportProgress = () => {
    const nombre = window.prompt("Escribe tu nombre completo para firmar tu reporte:");
    if (!nombre || nombre.trim().length < 4) {
      alert("Necesitas ingresar tu nombre completo para validar el progreso.");
      return;
    }
    const texto = generateWhatsAppReport(pendingLessons, completados, porcentajeProgreso, nombre);
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SiteHeader />
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-2xl">
          <header className="mb-8 text-center">
            <h1 className="mb-2 font-serif text-3xl font-bold italic tracking-tight text-foreground">Camino de Recuperación</h1>
            <p className="text-muted-foreground text-sm">Tu progreso se guarda automáticamente en este dispositivo.</p>
          </header>

          {/* DASHBOARD */}
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/[0.02] p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary p-2.5 text-primary-foreground shadow-lg shadow-primary/20">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Tu Avance</p>
                  <p className="text-xl font-bold text-foreground">{leccionesHechas} de {totalLecciones}</p>
                </div>
              </div>
              <span className="text-3xl font-black text-primary">{porcentajeProgreso}%</span>
            </div>

            <div className="h-2.5 w-full rounded-full bg-muted mb-6 overflow-hidden">
              <div className="h-full bg-primary transition-all duration-1000 ease-in-out" style={{ width: `${porcentajeProgreso}%` }} />
            </div>

            <button
              onClick={handleReportProgress}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <Share2 className="h-4 w-4" />
              Enviar Reporte Detallado
            </button>
          </div>

          {/* LISTA DE LECCIONES */}
          <div className="grid gap-4">
            {pendingLessons.map((item, index) => {
              if (!item) return null;
              const isDone = completados.includes(`${item.categoryId}-${item.lesson.title}`);
              const lessonColor = typeColorMap[item.lesson.type] || typeColorMap["default"];

              return (
                <div 
                  key={index} 
                  style={{ "--lesson-color": isDone ? "#22c55e" : lessonColor } as React.CSSProperties}
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-5 transition-all duration-300",
                    isDone 
                      ? "border-green-500/20 bg-green-500/[0.02] opacity-80" 
                      : "border-border bg-card hover:border-[var(--lesson-color)]/40 hover:shadow-md"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "mt-1 rounded-xl p-2.5 transition-all",
                        isDone ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
                      )}>
                        {isDone ? <CheckCircle2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-0.5">
                          {item.category.name}
                        </p>
                        <h3 className={cn(
                          "text-base font-bold leading-tight",
                          isDone ? "text-muted-foreground/60 line-through" : "text-foreground"
                        )}>
                          {item.lesson.title}
                        </h3>
                      </div>
                    </div>

                    {!isDone && (
                      <Link 
                        href={`/quiz/${item.categoryId}/${item.lesson.id}?data=${rawData}`} 
                        className="shrink-0 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:scale-105 transition-all shadow-sm"
                      >
                        Hacer Quiz
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>

                  {/* ACCIONES DE ESTUDIO (Solo si NO está completada) */}
                  {!isDone && (
                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t pt-4 border-border/50">
                      {item.tieneResumen && (
                        <Link
                          href={`/quiz/${item.categoryId}/${item.lesson.id}/study?data=${rawData}`}
                          className="flex items-center gap-1.5 rounded-lg bg-[var(--lesson-color)]/[0.1] px-3 py-2 text-[11px] font-bold text-[var(--lesson-color)] hover:bg-[var(--lesson-color)]/[0.2] transition-colors"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          REPASAR RESUMEN
                        </Link>
                      )}

                      {item.lesson.chapterUrl && (
                        <Link
                          href={item.lesson.chapterUrl}
                          target="_blank"
                          className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-2 text-[11px] font-medium text-muted-foreground hover:bg-muted/80 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Capítulo Original
                        </Link>
                      )}
                    </div>
                  )}

                  {isDone && (
                    <div className="mt-2 flex justify-end">
                      <span className="text-[10px] font-black text-green-600 tracking-widest uppercase">
                        Completada
                      </span>
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