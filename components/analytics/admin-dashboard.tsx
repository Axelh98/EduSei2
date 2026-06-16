"use client";

// components/admin/admin-dashboard.tsx
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  BookOpen,
  MessageCircle,
  Eye,
  FileText,
  Share2,
  Monitor,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
} from "lucide-react";
import {
  RangeSelector,
  type Range,
} from "@/components/analytics/range-selector";

// ── Tipos ─────────────────────────────────────────────────────────────────────

interface QuizEvent {
  id: string;
  lesson_title: string;
  category_name: string;
  student_name: string;
  score: number;
  total: number;
  percentage: number;
  course_type: string;
  created_at: string;
}

interface TopLesson {
  lesson_title: string;
  category_name: string;
  attempts: number;
  avg_score: number;
}

interface TopPage {
  path: string;
  views: number;
}

interface DailyPoint {
  day: string;
  count: number;
}

interface AdminDashboardProps {
  stats: {
    range: Range;
    quizzes: {
      id: string;
      percentage: number;
      category_name: string;
      course_type: string;
    }[];
    reportsCount: number;
    recoveriesCount: number;
    studiesCount: number;
    sharesCount: number;
    pageViewsCount: number;
    previous: {
      quizzes: number;
      avgScore: number;
      reports: number;
      recoveries: number;
      studies: number;
      shares: number;
      pageViews: number;
    };
    series: {
      quizzes: DailyPoint[];
      reports: DailyPoint[];
      studies: DailyPoint[];
      shares: DailyPoint[];
    };
  };
  recentQuizzes: QuizEvent[];
  topLessons: TopLesson[];
  topPages: TopPage[];
  adminKey: string;
  range: Range;
}

// ── Paleta ────────────────────────────────────────────────────────────────────

const COLORS = {
  primary: "#378ADD",
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  seminario: "#7F77DD",
  instituto: "#BA7517",
  muted: "#94a3b8",
};

const RANGE_LABEL: Record<Range, string> = {
  "7d": "últimos 7 días",
  "15d": "últimos 15 días",
  "30d": "últimos 30 días",
  all: "todo el tiempo",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function avg(arr: number[]): number {
  if (!arr.length) return 0;
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
}

function scoreColor(pct: number) {
  if (pct >= 80) return COLORS.success;
  if (pct >= 60) return COLORS.warning;
  return COLORS.danger;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("es-AR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function shortPath(path: string) {
  if (path === "/") return "Inicio";
  return path
    .replace("/quiz/", "")
    .replace("/study", " → Estudio")
    .slice(0, 40);
}

function pctDelta(current: number, previous: number): number | null {
  if (previous === 0) return current > 0 ? 100 : null;
  return Math.round(((current - previous) / previous) * 100);
}

// ── Componente principal ──────────────────────────────────────────────────────

export function AdminDashboard({
  stats,
  recentQuizzes,
  topLessons,
  topPages,
  adminKey,
  range,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<
    "resumen" | "quizzes" | "lecciones" | "paginas"
  >("resumen");

  // ── Métricas derivadas ──────────────────────────────────────────────────────
  const totalQuizzes = stats.quizzes.length;
  const avgScore = avg(stats.quizzes.map((q) => q.percentage));
  const passRate = totalQuizzes
    ? Math.round(
        (stats.quizzes.filter((q) => q.percentage >= 80).length /
          totalQuizzes) *
          100,
      )
    : 0;
  const prevPassRate = stats.previous.quizzes
    ? null // no tenemos suficiente data del período anterior para calcular bien
    : null;

  const totalReports = stats.reportsCount;
  const totalRecoveries = stats.recoveriesCount;
  const totalStudies = stats.studiesCount;
  const totalShares = stats.sharesCount;
  const totalPageViews = stats.pageViewsCount;

  // ── Quizzes por curso ───────────────────────────────────────────────────────
  const byCourse = Object.entries(
    stats.quizzes.reduce<Record<string, number[]>>((acc, q) => {
      const key = q.category_name ?? "Desconocido";
      if (!acc[key]) acc[key] = [];
      acc[key].push(q.percentage);
      return acc;
    }, {}),
  )
    .map(([name, pcts]) => ({
      name: name.slice(0, 22),
      count: pcts.length,
      avg: avg(pcts),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // ── Distribución de scores ──────────────────────────────────────────────────
  const scoreDist = [
    {
      label: "100%",
      count: stats.quizzes.filter((q) => q.percentage === 100).length,
    },
    {
      label: "80–99%",
      count: stats.quizzes.filter(
        (q) => q.percentage >= 80 && q.percentage < 100,
      ).length,
    },
    {
      label: "60–79%",
      count: stats.quizzes.filter(
        (q) => q.percentage >= 60 && q.percentage < 80,
      ).length,
    },
    {
      label: "<60%",
      count: stats.quizzes.filter((q) => q.percentage < 60).length,
    },
  ];

  const topPagesLocal = topPages.slice(0, 12);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Panel de administración
              </p>
              <h1 className="mt-0.5 text-xl font-bold text-foreground">
                MSI Analytics
              </h1>
            </div>
            <RangeSelector value={range} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* KPIs principales */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <KpiCard
            icon={BookOpen}
            label="Quizzes"
            value={totalQuizzes}
            color={COLORS.primary}
            delta={pctDelta(totalQuizzes, stats.previous.quizzes)}
            series={stats.series.quizzes}
          />
          <KpiCard
            icon={Award}
            label="Score promedio"
            value={`${avgScore}%`}
            color={scoreColor(avgScore)}
            delta={pctDelta(avgScore, stats.previous.avgScore)}
          />
          <KpiCard
            icon={TrendingUp}
            label="Tasa aprobación"
            value={`${passRate}%`}
            color={passRate >= 70 ? COLORS.success : COLORS.warning}
          />
          <KpiCard
            icon={MessageCircle}
            label="Reportes WA"
            value={totalReports}
            color="#25D366"
            delta={pctDelta(totalReports, stats.previous.reports)}
            series={stats.series.reports}
          />
          <KpiCard
            icon={Share2}
            label="Planes creados"
            value={totalShares}
            color={COLORS.seminario}
            delta={pctDelta(totalShares, stats.previous.shares)}
            series={stats.series.shares}
          />
          <KpiCard
            icon={Monitor}
            label={range === "all" ? "Visitas (total)" : `Visitas (${range})`}
            value={totalPageViews.toLocaleString("es-AR")}
            color={COLORS.instituto}
            delta={pctDelta(totalPageViews, stats.previous.pageViews)}
          />
        </div>

        {/* Segunda fila */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard
            icon={Eye}
            label="Planes vistos"
            value={totalRecoveries}
            color={COLORS.primary}
            small
            delta={pctDelta(totalRecoveries, stats.previous.recoveries)}
          />
          <KpiCard
            icon={FileText}
            label="Estudios abiertos"
            value={totalStudies}
            color={COLORS.seminario}
            small
            delta={pctDelta(totalStudies, stats.previous.studies)}
            series={stats.series.studies}
          />
          <KpiCard
            icon={CheckCircle2}
            label="Quiz perfectos"
            value={stats.quizzes.filter((q) => q.percentage === 100).length}
            color={COLORS.success}
            small
          />
          <KpiCard
            icon={XCircle}
            label="Quiz reprobados"
            value={stats.quizzes.filter((q) => q.percentage < 60).length}
            color={COLORS.danger}
            small
          />
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-xl border border-border bg-muted/40 p-1">
          {(["resumen", "quizzes", "lecciones", "paginas"] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={[
                  "flex-1 rounded-lg px-3 py-2 text-xs font-bold capitalize transition-all",
                  activeTab === tab
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* ── Tab: Resumen ─────────────────────────────────────── */}
        {activeTab === "resumen" && (
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-1 text-sm font-bold text-foreground">
                Quizzes por curso
              </h3>
              <p className="mb-4 text-[11px] text-muted-foreground">
                {RANGE_LABEL[range]}
              </p>
              {byCourse.length === 0 ? (
                <EmptyState />
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={byCourse}
                    layout="vertical"
                    margin={{ left: 0, right: 16 }}
                  >
                    <XAxis type="number" tick={{ fontSize: 10 }} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      width={130}
                    />
                    <Tooltip
                      contentStyle={{ fontSize: 11, borderRadius: 8 }}
                      formatter={(val: number, name: string) =>
                        name === "count"
                          ? [val, "Quizzes"]
                          : [`${val}%`, "Promedio"]
                      }
                    />
                    <Bar
                      dataKey="count"
                      fill={COLORS.primary}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-1 text-sm font-bold text-foreground">
                Distribución de resultados
              </h3>
              <p className="mb-4 text-[11px] text-muted-foreground">
                {RANGE_LABEL[range]}
              </p>
              {totalQuizzes === 0 ? (
                <EmptyState />
              ) : (
                <>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={scoreDist}>
                      <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 8 }}
                      />
                      <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                        {scoreDist.map((_, i) => (
                          <Cell
                            key={i}
                            fill={
                              [
                                COLORS.success,
                                "#84cc16",
                                COLORS.warning,
                                COLORS.danger,
                              ][i]
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {scoreDist.map((d) => (
                      <div key={d.label} className="text-center">
                        <p className="text-lg font-bold text-foreground">
                          {d.count}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {d.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
              <h3 className="mb-1 text-sm font-bold text-foreground">
                Páginas más visitadas
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  {RANGE_LABEL[range]} · Total:{" "}
                  {totalPageViews.toLocaleString("es-AR")} visitas
                </span>
              </h3>
              {topPagesLocal.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {topPagesLocal.map(({ path, views }) => (
                    <div
                      key={path}
                      className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2"
                    >
                      <span
                        className="truncate max-w-[70%] font-mono text-xs text-muted-foreground"
                        title={path}
                      >
                        {shortPath(path)}
                      </span>
                      <span className="ml-2 shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                        {views.toLocaleString("es-AR")} visitas
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Tab: Quizzes ─────────────────────────────────────── */}
        {activeTab === "quizzes" && (
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h3 className="text-sm font-bold text-foreground">
                Últimos {recentQuizzes.length} quizzes
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  · {RANGE_LABEL[range]}
                </span>
              </h3>
            </div>
            {recentQuizzes.length === 0 ? (
              <div className="p-8">
                <EmptyState />
              </div>
            ) : (
              <div className="divide-y divide-border">
                {recentQuizzes.map((q) => (
                  <div key={q.id} className="flex items-center gap-4 px-5 py-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: scoreColor(q.percentage) }}
                    >
                      {q.percentage}%
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {q.lesson_title}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {q.category_name}
                        {q.student_name && q.student_name !== "Anónimo" && (
                          <>
                            {" "}
                            ·{" "}
                            <span className="font-medium">
                              {q.student_name}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span
                        className="text-[10px] font-bold"
                        style={{ color: scoreColor(q.percentage) }}
                      >
                        {q.score}/{q.total}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {formatDate(q.created_at)}
                      </span>
                    </div>
                    {q.percentage >= 80 ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Lecciones ───────────────────────────────────── */}
        {activeTab === "lecciones" && (
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h3 className="text-sm font-bold text-foreground">
                Lecciones más evaluadas
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  · {RANGE_LABEL[range]}
                </span>
              </h3>
            </div>
            {topLessons.length === 0 ? (
              <div className="p-8">
                <EmptyState />
              </div>
            ) : (
              <div className="divide-y divide-border">
                {topLessons.map((l, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {l.lesson_title}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {l.category_name}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 text-xs">
                      <span className="font-bold text-primary">
                        {l.attempts} quizzes
                      </span>
                      <span
                        className="rounded-full px-2 py-0.5 font-bold text-white"
                        style={{ backgroundColor: scoreColor(l.avg_score) }}
                      >
                        x̄ {l.avg_score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Páginas ─────────────────────────────────────── */}
        {activeTab === "paginas" && (
          <div className="grid gap-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-1 text-sm font-bold text-foreground">
                Visitas por página
              </h3>
              <p className="mb-4 text-xs text-muted-foreground">
                {RANGE_LABEL[range]} · Total:{" "}
                <strong>{totalPageViews.toLocaleString("es-AR")}</strong>{" "}
                visitas
              </p>
              {topPagesLocal.length === 0 ? (
                <EmptyState />
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topPagesLocal.slice(0, 10)} layout="vertical">
                    <XAxis type="number" tick={{ fontSize: 10 }} />
                    <YAxis
                      type="category"
                      dataKey="path"
                      tick={{ fontSize: 9 }}
                      width={180}
                      tickFormatter={shortPath}
                    />
                    <Tooltip
                      contentStyle={{ fontSize: 11, borderRadius: 8 }}
                      formatter={(val: number) => [
                        val.toLocaleString("es-AR"),
                        "Visitas",
                      ]}
                      labelFormatter={(label: string) => label}
                    />
                    <Bar
                      dataKey="views"
                      fill={COLORS.instituto}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-[10px] text-muted-foreground/40">
          MSI Admin · Datos en tiempo real desde Supabase ·{" "}
          <a
            href={`/admin?key=${adminKey}&range=${range}`}
            className="underline"
          >
            Actualizar
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Sub-componentes ───────────────────────────────────────────────────────────

function KpiCard({
  icon: Icon,
  label,
  value,
  color,
  small = false,
  delta,
  series,
}: {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
  value: string | number;
  color: string;
  small?: boolean;
  delta?: number | null;
  series?: DailyPoint[];
}) {
  const showDelta =
    delta !== undefined && delta !== null && Number.isFinite(delta);
  const positive = (delta ?? 0) >= 0;
  const sparkId = `spark-${label.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")}`;
  const hasSeries =
    series && series.length > 1 && series.some((s) => s.count > 0);

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2">
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}1A` }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color }} />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-normal text-muted-foreground leading-tight">
          {label}
        </p>
      </div>

      <div className="flex items-baseline gap-2">
        <p
          className={[
            "font-bold text-foreground tabular-nums",
            small ? "text-xl" : "text-2xl",
          ].join(" ")}
        >
          {value}
        </p>
        {showDelta && (
          <span
            className={[
              "flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
              positive
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-red-500/10 text-red-600 dark:text-red-400",
            ].join(" ")}
            title="vs período anterior"
          >
            {positive ? (
              <TrendingUp className="h-2.5 w-2.5" />
            ) : (
              <TrendingDown className="h-2.5 w-2.5" />
            )}
            {Math.abs(delta!)}%
          </span>
        )}
      </div>

      {hasSeries && (
        <div className="mt-2 -mx-1 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={series}
              margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
            >
              <defs>
                <linearGradient id={sparkId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                cursor={{
                  stroke: color,
                  strokeWidth: 1,
                  strokeDasharray: "2 2",
                }}
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  const point = payload[0].payload as DailyPoint;
                  const date = new Date(point.day + "T00:00:00");
                  const label = isNaN(date.getTime())
                    ? point.day
                    : date.toLocaleDateString("es-AR", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      });
                  return (
                    <div
                      style={{
                        fontSize: 10,
                        padding: "4px 8px",
                        borderRadius: 6,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--card))",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div
                        style={{
                          color: "hsl(var(--muted-foreground))",
                          fontSize: 9,
                          marginBottom: 2,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          color: "hsl(var(--foreground))",
                          fontWeight: 600,
                        }}
                      >
                        {point.count} eventos
                      </div>
                    </div>
                  );
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke={color}
                strokeWidth={1.5}
                fill={`url(#${sparkId})`}
                activeDot={{
                  r: 3,
                  fill: color,
                  stroke: "hsl(var(--card))",
                  strokeWidth: 1.5,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-center">
      <div className="text-3xl">📊</div>
      <p className="text-sm font-medium text-muted-foreground">
        Sin datos en este período
      </p>
      <p className="text-xs text-muted-foreground/60">
        Probá ampliar el rango temporal
      </p>
    </div>
  );
}
