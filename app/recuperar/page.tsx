"use client";

import { useState, useEffect, use, useMemo } from "react";
import { getLessonById } from "@/lib/quiz-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { BookOpen, ArrowRight, CheckCircle2, Trophy, FileText, ExternalLink, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido";
// Importamos el helper (ajusta la ruta según donde lo pongas)
import { generateWhatsAppReport } from "@/lib/utils";

export default function RecoveryPage({ searchParams }: { searchParams: Promise<{ data?: string }> }) {
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
        return result ? { ...result, categoryId, tieneResumen: leccionesResumidas.some(r => r.id === lId) } : null;
      }).filter(Boolean);
    });
  }, [rawData]);

  const totalLecciones = pendingLessons.length;
  const leccionesHechas = pendingLessons.filter((item) =>
    completados.includes(`${item?.categoryId}-${item?.lesson.title}`)
  ).length;
  const porcentajeProgreso = totalLecciones > 0 ? Math.round((leccionesHechas / totalLecciones) * 100) : 0;

  // Lógica de compartir usando el Helper
  const handleReportProgress = () => {
    // 1. Pedir el nombre
    const nombre = window.prompt("Escribe tu nombre completo para firmar tu reporte:");

    // 2. Validar que no esté vacío
    if (!nombre || nombre.trim().length < 4) {
      alert("Necesitas ingresar tu nombre completo para validar el progreso.");
      return;
    }

    // 3. Generar y enviar
    const texto = generateWhatsAppReport(pendingLessons, completados, porcentajeProgreso, nombre);
    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SiteHeader />
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-2xl">
          <header className="mb-8 text-center">
            <h1 className="mb-2 font-serif text-3xl font-bold italic tracking-tight">Camino de Recuperación</h1>
            <p className="text-muted-foreground text-sm">Tu progreso se guarda automáticamente en este dispositivo.</p>
          </header>

          {/* DASHBOARD */}
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/[0.02] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary p-2.5 text-primary-foreground"><Trophy className="h-5 w-5" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Tu Avance</p>
                  <p className="text-xl font-bold">{leccionesHechas} de {totalLecciones}</p>
                </div>
              </div>
              <span className="text-3xl font-black text-primary">{porcentajeProgreso}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-muted mb-6">
              <div className="h-full bg-primary transition-all duration-700" style={{ width: `${porcentajeProgreso}%` }} />
            </div>

            <button
              onClick={handleReportProgress}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md active:scale-95 transition-all"
            >
              <Share2 className="h-4 w-4" />
              Enviar Reporte
            </button>
          </div>

          {/* LISTA (Igual que antes, pero con el diseño mobile-first) */}
          <div className="grid gap-4">
            {pendingLessons.map((item, index) => {
              const isDone = completados.includes(`${item!.categoryId}-${item!.lesson.title}`);
              return (
                <div key={index} className={cn("rounded-2xl border p-4 transition-all", isDone ? "opacity-60 bg-muted/30" : "bg-card shadow-sm")}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-lg", isDone ? "bg-green-500 text-white" : "bg-primary/10 text-primary")}>
                        {isDone ? <CheckCircle2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                      </div>
                      <div>
                        <h3 className={cn("text-sm font-bold", isDone && "line-through")}>{item!.lesson.title}</h3>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground">{item!.category.name}</p>
                      </div>
                    </div>
                    {!isDone && (
                      <Link href={`/quiz/${item!.categoryId}/${item!.lesson.id}?data=${rawData}`} className="p-2 text-primary">
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
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