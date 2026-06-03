"use client"

// components/admin/admin-dashboard.tsx
// Panel visual de estadísticas MSI.
// Recibe datos pre-fetched del server component.

import { useState } from "react"
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts"
import {
  BookOpen, MessageCircle, Eye, FileText,
  Share2, Monitor, TrendingUp, Users,
  CheckCircle2, XCircle, Clock, Award,
} from "lucide-react"

// ── Tipos ─────────────────────────────────────────────────────────────────────

interface QuizEvent {
  id: string
  lesson_title: string
  category_name: string
  student_name: string
  score: number
  total: number
  percentage: number
  course_type: string
  created_at: string
}

interface TopLesson {
  lesson_title: string
  category_name: string
  attempts: number
  avg_score: number
}

interface TopPage {
  path: string
  views: number
}

interface AdminDashboardProps {
  stats: {
    quizzes:    { id: string; percentage: number; category_name: string; course_type: string }[]
    reports:    { id: string; percentage: number }[]
    recoveries: { id: string }[]
    studies:    { id: string; category_name: string }[]
    shares:     { id: string; total: number; category_name: string }[]
    pageViews:  { path: string }[]
  }
  recentQuizzes: QuizEvent[]
  topLessons:    TopLesson[]
  topPages:      TopPage[]
  adminKey:      string
}

// ── Paleta ────────────────────────────────────────────────────────────────────

const COLORS = {
  primary:   "#378ADD",
  success:   "#22c55e",
  warning:   "#f59e0b",
  danger:    "#ef4444",
  seminario: "#7F77DD",
  instituto: "#BA7517",
  muted:     "#94a3b8",
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function avg(arr: number[]): number {
  if (!arr.length) return 0
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
}

function scoreColor(pct: number) {
  if (pct >= 80) return COLORS.success
  if (pct >= 60) return COLORS.warning
  return COLORS.danger
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("es-AR", {
    day: "numeric", month: "short",
    hour: "2-digit", minute: "2-digit",
  })
}

function shortPath(path: string) {
  if (path === "/") return "Inicio"
  return path.replace("/quiz/", "").replace("/study", " → Estudio").slice(0, 40)
}

// ── Componente principal ──────────────────────────────────────────────────────

export function AdminDashboard({
  stats, recentQuizzes, topLessons, topPages, adminKey,
}: AdminDashboardProps) {

  const [activeTab, setActiveTab] = useState<"resumen" | "quizzes" | "lecciones" | "paginas">("resumen")

  // ── Métricas derivadas ──────────────────────────────────────────────────────
  const totalQuizzes   = stats.quizzes.length
  const avgScore       = avg(stats.quizzes.map((q) => q.percentage))
  const passRate       = totalQuizzes
    ? Math.round(stats.quizzes.filter((q) => q.percentage >= 80).length / totalQuizzes * 100)
    : 0
  const totalReports   = stats.reports.length
  const totalRecoveries = stats.recoveries.length
  const totalStudies   = stats.studies.length
  const totalShares    = stats.shares.length
  const totalPageViews = stats.pageViews.length
  const totalLessonsShared = stats.shares.reduce((a, s) => a + (s.total ?? 0), 0)

  // ── Quizzes por curso ───────────────────────────────────────────────────────
  const byCourse = Object.entries(
    stats.quizzes.reduce<Record<string, number[]>>((acc, q) => {
      const key = q.category_name ?? "Desconocido"
      if (!acc[key]) acc[key] = []
      acc[key].push(q.percentage)
      return acc
    }, {})
  )
    .map(([name, pcts]) => ({ name: name.slice(0, 22), count: pcts.length, avg: avg(pcts) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8)

  // ── Distribución de scores ──────────────────────────────────────────────────
  const scoreDist = [
    { label: "100%",   count: stats.quizzes.filter((q) => q.percentage === 100).length },
    { label: "80–99%", count: stats.quizzes.filter((q) => q.percentage >= 80 && q.percentage < 100).length },
    { label: "60–79%", count: stats.quizzes.filter((q) => q.percentage >= 60 && q.percentage < 80).length },
    { label: "<60%",   count: stats.quizzes.filter((q) => q.percentage < 60).length },
  ]

  // ── Tabs de páginas visitadas ──────────────────────────────────────────────
  const pageData = stats.pageViews
    .reduce<Record<string, number>>((acc, pv) => {
      acc[pv.path] = (acc[pv.path] ?? 0) + 1
      return acc
    }, {})
  const topPagesLocal = Object.entries(pageData)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 12)
    .map(([path, views]) => ({ path, views }))

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Panel de administración
              </p>
              <h1 className="mt-0.5 text-xl font-bold text-foreground">
                MSI Analytics
              </h1>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs font-medium text-muted-foreground">Últimos 30 días</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">

        {/* KPIs principales */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <KpiCard icon={BookOpen}    label="Quizzes"        value={totalQuizzes}       color={COLORS.primary}   />
          <KpiCard icon={Award}       label="Score promedio" value={`${avgScore}%`}     color={scoreColor(avgScore)} />
          <KpiCard icon={TrendingUp}  label="Tasa aprobación" value={`${passRate}%`}    color={passRate >= 70 ? COLORS.success : COLORS.warning} />
          <KpiCard icon={MessageCircle} label="Reportes WA"  value={totalReports}       color="#25D366"          />
          <KpiCard icon={Share2}      label="Planes creados" value={totalShares}        color={COLORS.seminario} />
          <KpiCard icon={Monitor}     label="Visitas (7d)"   value={totalPageViews}     color={COLORS.instituto} />
        </div>

        {/* Segunda fila de KPIs */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard icon={Eye}       label="Planes vistos"    value={totalRecoveries}      color={COLORS.primary}   small />
          <KpiCard icon={FileText}  label="Estudios abiertos" value={totalStudies}        color={COLORS.seminario} small />
          <KpiCard icon={Users}     label="Lecciones asignadas" value={totalLessonsShared} color={COLORS.instituto} small />
          <KpiCard icon={CheckCircle2} label="Quiz perfectos" value={stats.quizzes.filter((q) => q.percentage === 100).length} color={COLORS.success} small />
        </div>

        {/* Tabs de navegación */}
        <div className="mb-6 flex gap-1 rounded-xl border border-border bg-muted/40 p-1">
          {(["resumen", "quizzes", "lecciones", "paginas"] as const).map((tab) => (
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
          ))}
        </div>

        {/* ── Tab: Resumen ─────────────────────────────────────── */}
        {activeTab === "resumen" && (
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Quizzes por curso */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-bold text-foreground">Quizzes por curso</h3>
              {byCourse.length === 0 ? (
                <EmptyState />
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={byCourse} layout="vertical" margin={{ left: 0, right: 16 }}>
                    <XAxis type="number" tick={{ fontSize: 10 }} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={130} />
                    <Tooltip
                      contentStyle={{ fontSize: 11, borderRadius: 8 }}
                      formatter={(val: number, name: string) =>
                        name === "count" ? [val, "Quizzes"] : [`${val}%`, "Promedio"]
                      }
                    />
                    <Bar dataKey="count" fill={COLORS.primary} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Distribución de scores */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-bold text-foreground">Distribución de resultados</h3>
              {totalQuizzes === 0 ? (
                <EmptyState />
              ) : (
                <>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={scoreDist}>
                      <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                      <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                        {scoreDist.map((_, i) => (
                          <Cell key={i} fill={[COLORS.success, "#84cc16", COLORS.warning, COLORS.danger][i]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {scoreDist.map((d) => (
                      <div key={d.label} className="text-center">
                        <p className="text-lg font-bold text-foreground">{d.count}</p>
                        <p className="text-[10px] text-muted-foreground">{d.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Top páginas visitadas */}
            <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
              <h3 className="mb-4 text-sm font-bold text-foreground">Páginas más visitadas (últimos 7 días)</h3>
              {topPagesLocal.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid gap-2 sm:grid-cols-2">
                  {topPagesLocal.map(({ path, views }) => (
                    <div key={path} className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">
                      <span className="text-xs text-muted-foreground font-mono truncate max-w-[70%]">
                        {shortPath(path)}
                      </span>
                      <span className="ml-2 shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                        {views} visitas
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
              <h3 className="text-sm font-bold text-foreground">Últimos {recentQuizzes.length} quizzes</h3>
            </div>
            {recentQuizzes.length === 0 ? (
              <div className="p-8"><EmptyState /></div>
            ) : (
              <div className="divide-y divide-border">
                {recentQuizzes.map((q) => (
                  <div key={q.id} className="flex items-center gap-4 px-5 py-3">
                    {/* Score badge */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: scoreColor(q.percentage) }}
                    >
                      {q.percentage}%
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">{q.lesson_title}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {q.category_name}
                        {q.student_name && q.student_name !== "Anónimo" && (
                          <> · <span className="font-medium">{q.student_name}</span></>
                        )}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="text-[10px] font-bold" style={{ color: scoreColor(q.percentage) }}>
                        {q.score}/{q.total}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {formatDate(q.created_at)}
                      </span>
                    </div>

                    {/* Indicador visual de resultado */}
                    {q.percentage >= 80
                      ? <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                      : <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                    }
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
              <h3 className="text-sm font-bold text-foreground">Lecciones más evaluadas (total histórico)</h3>
            </div>
            {topLessons.length === 0 ? (
              <div className="p-8"><EmptyState /></div>
            ) : (
              <div className="divide-y divide-border">
                {topLessons.map((l, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">{l.lesson_title}</p>
                      <p className="text-[11px] text-muted-foreground">{l.category_name}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 text-xs">
                      <span className="font-bold text-primary">{l.attempts} quizzes</span>
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
              <h3 className="mb-4 text-sm font-bold text-foreground">Visitas por página (últimos 7 días)</h3>
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
                      formatter={(val: number) => [val, "Visitas"]}
                      labelFormatter={shortPath}
                    />
                    <Bar dataKey="views" fill={COLORS.instituto} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-[10px] text-muted-foreground/40">
          MSI Admin · Datos en tiempo real desde Supabase ·{" "}
          <a href={`/admin?key=${adminKey}`} className="underline">
            Actualizar
          </a>
        </div>

      </div>
    </div>
  )
}

// ── Sub-componentes ───────────────────────────────────────────────────────────

function KpiCard({
  icon: Icon, label, value, color, small = false,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  value: string | number
  color: string
  small?: boolean
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}18` }}>
          <Icon className="h-3.5 w-3.5" style={{ color }} />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      </div>
      <p className={["font-bold text-foreground tabular-nums", small ? "text-xl" : "text-2xl"].join(" ")}>
        {value}
      </p>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-center">
      <div className="text-3xl">📊</div>
      <p className="text-sm font-medium text-muted-foreground">Sin datos todavía</p>
      <p className="text-xs text-muted-foreground/60">Los eventos aparecen en tiempo real</p>
    </div>
  )
}