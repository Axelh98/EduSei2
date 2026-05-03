"use client";

import { useState, useEffect, use, useMemo } from "react";
import { getLessonById, isFlatCategory, getCategoryById } from "@/lib/quiz-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  FileText,
  ExternalLink,
  Share2,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { leccionesResumidasAT } from "@/lib/data/antiguo-testamento-resumido";
import { generateWhatsAppReport } from "@/lib/utils";

// ─── Color accent map (mismo que lesson-card y category-card) ─────────────────
const TYPE_ACCENT: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme":   "#7F77DD",
  "Nuevo Testamento - Ven Sigueme":     "#1D9E75",
  "Libro de Mormón - Ven Sigueme":      "#378ADD",
  "Doctrina y Convenios - Ven Sigueme": "#D85A30",
  "Bloque de Escrituras - Ven Sigueme": "#888780",
  "Preparación para la Vida":           "#ef4444",
  "Dominio de la Doctrina":             "#f97316",
  "Especial":                           "#38bdf8",
  "Religión 250":                       "#BA7517",
  "Religión 225":                       "#D4537E",
  default:                              "#888780",
};

// ─── Anillo de progreso SVG ───────────────────────────────────────────────────
function ProgressRing({
  percentage,
  done,
  total,
}: {
  percentage: number;
  done: number;
  total: number;
}) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percentage / 100) * circ;

  const ringColor =
    percentage === 100
      ? "#22c55e"
      : percentage >= 60
      ? "#378ADD"
      : "#BA7517";

  return (
    <div className="relative flex items-center justify-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        {/* Track */}
        <circle
          cx="70" cy="70" r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="text-muted/60"
        />
        {/* Progress */}
        <circle
          cx="70" cy="70" r={r}
          fill="none"
          stroke={ringColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      {/* Centro */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-bold text-foreground leading-none">
          {percentage}
          <span className="text-lg font-medium text-muted-foreground">%</span>
        </span>
        <span className="mt-1 text-xs text-muted-foreground">
          {done}/{total}
        </span>
      </div>
    </div>
  );
}

// ─── Card de lección pendiente ────────────────────────────────────────────────
function PendingLessonCard({
  item,
  rawData,
}: {
  item: any;
  rawData: string;
}) {
  const accent =
    TYPE_ACCENT[item.lesson.type ?? "default"] ?? TYPE_ACCENT.default;

  return (
    <div
      className="flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:shadow-md"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      {/* Cuerpo */}
      <div className="flex items-start gap-3 p-4">
        <div
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}15` }}
        >
          <BookOpen className="h-4 w-4" style={{ color: accent }} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Categoría — metadata pequeña */}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-0.5">
            {item.category.name}
            {item.isFlat && (item.lesson as any).unitTitle && (
              <span className="ml-1 normal-case font-normal">
                · {(item.lesson as any).unitTitle}
              </span>
            )}
          </p>
          {/* Título — jerarquía primaria */}
          <h3 className="text-sm font-bold leading-snug text-foreground">
            {item.lesson.title}
          </h3>
        </div>

        {/* CTA principal */}
        <Link
          href={`/quiz/${item.categoryId}/${item.lesson.id}?data=${rawData}`}
          className="shrink-0 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
          style={{ backgroundColor: accent }}
        >
          Quiz
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Footer de acciones secundarias */}
      {(item.tieneResumen || item.lesson.chapterUrl) && (
        <div className="flex items-center gap-4 border-t border-border/50 bg-muted/20 px-4 py-2">
          {item.tieneResumen && (
            <Link
              href={`/quiz/${item.categoryId}/${item.lesson.id}/study?data=${rawData}`}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide transition-colors"
              style={{ color: accent }}
            >
              <FileText className="h-3 w-3" />
              Repasar resumen
            </Link>
          )}
          {item.lesson.chapterUrl && (
            <Link
              href={item.lesson.chapterUrl}
              target="_blank"
              className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Manual
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Card de lección completada (compacta) ────────────────────────────────────
function CompletedLessonCard({ item }: { item: any }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-green-500/15 bg-green-500/[0.03] px-4 py-3">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-0.5">
          {item.category.name}
        </p>
        <p className="text-sm font-medium text-muted-foreground/70 leading-snug line-through">
          {item.lesson.title}
        </p>
      </div>
      <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-green-600">
        ✓ Lista
      </span>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
interface PageProps {
  searchParams: Promise<{ data?: string }>;
}

export default function RecoveryPage({ searchParams }: PageProps) {
  const resolvedParams = use(searchParams);
  const rawData = resolvedParams.data || "";
  const [completados, setCompletados] = useState<string[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("seminario-completados") || "[]"
    );
    setCompletados(saved);
  }, []);

  const pendingLessons = useMemo(() => {
    if (!rawData) return [];
    const dataString = decodeURIComponent(rawData);
    return dataString
      .split("|")
      .filter(Boolean)
      .flatMap((group) => {
        const [categoryId, lessonIdsRaw] = group.split(":");
        const category = getCategoryById(categoryId);
        const isFlat = category ? isFlatCategory(category) : false;

        return lessonIdsRaw.split(",").map((lId) => {
          const result = getLessonById(categoryId, lId);
          if (!result) return null;

          const tieneResumen = isFlat
            ? (result.lesson.secciones ?? []).length > 0
            : leccionesResumidasAT.some((r) => r.id === lId);

          return { ...result, categoryId, isFlat, tieneResumen };
        }).filter(Boolean);
      });
  }, [rawData]);

  const totalLecciones = pendingLessons.length;
  const leccionesDone = pendingLessons.filter((item) =>
    completados.includes(`${item?.categoryId}-${item?.lesson.title}`)
  );
  const leccionesPending = pendingLessons.filter(
    (item) =>
      !completados.includes(`${item?.categoryId}-${item?.lesson.title}`)
  );
  const hechas = leccionesDone.length;
  const porcentaje =
    totalLecciones > 0 ? Math.round((hechas / totalLecciones) * 100) : 0;

  const handleReportProgress = () => {
    const nombre = window.prompt(
      "Escribí tu nombre completo para firmar tu reporte:"
    );
    if (!nombre || nombre.trim().length < 4) {
      alert("Necesitás ingresar tu nombre completo para validar el progreso.");
      return;
    }
    const texto = generateWhatsAppReport(
      pendingLessons,
      completados,
      porcentaje,
      nombre
    );
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, "_blank");
  };

  const allDone = hechas === totalLecciones && totalLecciones > 0;

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <SiteHeader />
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-2xl">

          {/* ── Header ── */}
          <header className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 mb-1">
              Plan de recuperación
            </p>
            <h1 className="font-serif text-2xl font-bold text-foreground">
              Tu camino al día
            </h1>
          </header>

          {/* ── Dashboard de progreso ── */}
          <div className="mb-8 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-6 p-6">
              {/* Anillo */}
              <ProgressRing
                percentage={porcentaje}
                done={hechas}
                total={totalLecciones}
              />

              {/* Métricas + CTA */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-muted/50 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      Pendientes
                    </p>
                    <p className="mt-0.5 text-2xl font-bold text-foreground">
                      {leccionesPending.length}
                    </p>
                  </div>
                  <div className="rounded-xl bg-green-500/8 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-green-700/60">
                      Completadas
                    </p>
                    <p className="mt-0.5 text-2xl font-bold text-green-600">
                      {hechas}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReportProgress}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-sm hover:brightness-105 active:scale-[0.98] transition-all"
                >
                  <Share2 className="h-4 w-4" />
                  Enviar reporte
                </button>
              </div>
            </div>

            {/* Banner de completado */}
            {allDone && (
              <div className="border-t border-green-500/20 bg-green-500/5 px-6 py-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                <p className="text-sm font-semibold text-green-700">
                  ¡Completaste todas las lecciones! Enviá tu reporte al maestro.
                </p>
              </div>
            )}
          </div>

          {/* ── Lecciones pendientes ── */}
          {leccionesPending.length > 0 && (
            <section className="mb-6">
              <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {leccionesPending.length}
                </span>
                Por completar
              </h2>
              <div className="flex flex-col gap-3">
                {leccionesPending.map((item, index) =>
                  item ? (
                    <PendingLessonCard
                      key={index}
                      item={item}
                      rawData={rawData}
                    />
                  ) : null
                )}
              </div>
            </section>
          )}

          {/* ── Lecciones completadas (colapsables) ── */}
          {leccionesDone.length > 0 && (
            <section>
              <button
                onClick={() => setShowCompleted((v) => !v)}
                className="mb-3 flex w-full items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-[10px] font-bold text-green-600">
                  {hechas}
                </span>
                Completadas
                <ChevronDown
                  className={cn(
                    "ml-auto h-3.5 w-3.5 transition-transform duration-200",
                    showCompleted && "rotate-180"
                  )}
                />
              </button>

              {showCompleted && (
                <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {leccionesDone.map((item, index) =>
                    item ? (
                      <CompletedLessonCard key={index} item={item} />
                    ) : null
                  )}
                </div>
              )}
            </section>
          )}

          {/* Estado vacío */}
          {totalLecciones === 0 && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
              <BookOpen className="mb-3 h-8 w-8 text-muted-foreground/30" />
              <p className="font-medium text-muted-foreground">
                No hay lecciones asignadas
              </p>
              <p className="mt-1 text-sm text-muted-foreground/60">
                Pedile a tu maestro que comparta un plan de recuperación.
              </p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}