"use client";

import { useState, useEffect, use } from "react"; // 👈 Importamos 'use'
import { getLessonById } from "@/lib/quiz-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { BookOpen, ArrowRight, CheckCircle2, Trophy } from "lucide-react";

// Definimos la interfaz para los props
interface PageProps {
  searchParams: Promise<{ data?: string }>;
}

export default function RecoveryPage({ searchParams }: PageProps) {
  // 1. DESENVOLVEMOS los searchParams usando use()
  const resolvedParams = use(searchParams);
  const rawData = resolvedParams.data || "";

  const [completados, setCompletados] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("seminario-completados") || "[]",
    );
    setCompletados(saved);
  }, []);

  // 2. Usamos rawData para procesar las lecciones
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

  // Cálculos de progreso (se mantienen igual)
  const totalLecciones = pendingLessons.length;
  const leccionesHechas = pendingLessons.filter((item) =>
    completados.includes(`${item?.categoryId}-${item?.lesson.title}`),
  ).length;
  const porcentajeProgreso =
    totalLecciones > 0
      ? Math.round((leccionesHechas / totalLecciones) * 100)
      : 0;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-2xl">
          <header className="mb-8 text-center">
            <h1 className="mb-2 font-serif text-3xl font-bold italic">
              Tu Camino de Recuperación
            </h1>
            <p className="text-muted-foreground">
              Completa tus tareas para ponerte al día.
            </p>
          </header>

          {/* TARJETA DE PROGRESO */}
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">
                    Tu progreso
                  </p>
                  <p className="text-xl font-bold">
                    {leccionesHechas} de {totalLecciones} lecciones
                  </p>
                </div>
              </div>
              <span className="text-3xl font-black text-primary">
                {porcentajeProgreso}%
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${porcentajeProgreso}%` }}
              />
            </div>
          </div>

          {/* LISTA DE LECCIONES */}
          <div className="grid gap-4">
            {pendingLessons.map((item, index) => {
              if (!item) return null;
              const isDone = completados.includes(
                `${item.categoryId}-${item.lesson.title}`,
              );

              return (
                <div
                  key={index}
                  className={`relative flex flex-col rounded-xl border p-5 transition-all ${
                    isDone
                      ? "border-success/30 bg-success/5"
                      : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-full p-2 transition-colors ${
                          isDone
                            ? "bg-success text-white shadow-lg shadow-success/20"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <BookOpen className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p
                          className={`text-[10px] font-bold uppercase tracking-widest ${isDone ? "text-success/60" : "text-muted-foreground"}`}
                        >
                          {item.category.name}
                        </p>
                        <h3
                          className={`font-bold transition-all ${
                            isDone
                              ? "text-success/80 line-through decoration-2"
                              : "text-foreground"
                          }`}
                        >
                          {item.lesson.title}
                        </h3>
                      </div>
                    </div>

                    {/* Acción principal: Ir al Quiz */}
                    {!isDone ? (
                      <Link
                        href={`/quiz/${item.categoryId}/${item.lesson.id}?data=${encodeURIComponent(rawData)}`}
                        className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    ) : (
                      <span className="rounded-full bg-success/20 px-3 py-1 text-[10px] font-black text-success">
                        LISTO
                      </span>
                    )}
                  </div>

                  {/* Botón "Ver capítulo" - Solo si existe y la lección NO está hecha */}
                  {item.lesson.chapterUrl && !isDone && (
                    <div className="mt-4 pl-14">
                      <Link
                        href={item.lesson.chapterUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Ver capítulo para estudiar
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
