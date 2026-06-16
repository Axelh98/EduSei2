// lib/supabase-admin.ts
import { createClient } from "@supabase/supabase-js"

// ── Cliente server-side ──────────────────────────────────────────────────────
// Usa SERVICE_ROLE_KEY si la tenés (acceso completo), sino cae al anon key.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? ""

const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  ""

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
})

// ── Tipos ────────────────────────────────────────────────────────────────────
export type Range = "7d" | "15d" | "30d" | "all"

export interface Bounds {
  since:     string | null   // ISO inicio del período actual
  prevSince: string | null   // ISO inicio del período anterior
  prevUntil: string | null   // ISO fin del período anterior (= since)
  days:      number | null   // días del período (null = "all")
}

export interface QuizRow {
  id: string
  lesson_id?: string | null
  lesson_title: string
  category_id?: string | null
  category_name: string
  student_name: string
  score: number
  total: number
  percentage: number
  course_type: string
  created_at: string
}

export interface TopLesson {
  lesson_title: string
  category_name: string
  attempts: number
  avg_score: number
}

export interface TopPage {
  path: string
  views: number
}

export interface DailyPoint {
  day:   string   // YYYY-MM-DD
  count: number
}

export interface AdminStats {
  range: Range
  quizzes: QuizRow[]
  reportsCount:    number
  recoveriesCount: number
  studiesCount:    number
  sharesCount:     number
  pageViewsCount:  number

  previous: {
    quizzes:    number
    avgScore:   number
    reports:    number
    recoveries: number
    studies:    number
    shares:     number
    pageViews:  number
  }

  series: {
    quizzes: DailyPoint[]
    reports: DailyPoint[]
    studies: DailyPoint[]
    shares:  DailyPoint[]
    pageViews: DailyPoint[]
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function rangeBounds(r: Range): Bounds {
  if (r === "all") {
    return { since: null, prevSince: null, prevUntil: null, days: null }
  }
  const days = parseInt(r, 10)
  const now  = Date.now()
  const ms   = days * 86_400_000
  return {
    since:     new Date(now - ms).toISOString(),
    prevSince: new Date(now - 2 * ms).toISOString(),
    prevUntil: new Date(now - ms).toISOString(),
    days,
  }
}

function avg(arr: number[]): number {
  if (!arr.length) return 0
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
}

// ── Conteos exactos sin traer filas ──────────────────────────────────────────

async function countEvents(
  eventType: string,
  since: string | null,
  until?: string | null,
): Promise<number> {
  let q = supabase
    .from("events")
    .select("*", { count: "exact", head: true })
    .eq("event_type", eventType)
  if (since) q = q.gte("created_at", since)
  if (until) q = q.lt("created_at",  until)

  const { count, error } = await q
  if (error) {
    console.warn("[supabase-admin] countEvents error:", eventType, error.message)
    return 0
  }
  return count ?? 0
}

async function countPageViews(
  since: string | null,
  until?: string | null,
): Promise<number> {
  let q = supabase.from("page_views").select("*", { count: "exact", head: true })
  if (since) q = q.gte("created_at", since)
  if (until) q = q.lt("created_at",  until)

  const { count, error } = await q
  if (error) {
    console.warn("[supabase-admin] countPageViews error:", error.message)
    return 0
  }
  return count ?? 0
}

// ── Serie diaria para sparklines ─────────────────────────────────────────────
// Versión "client-side aggregation". Para producción a escala, conviene mover
// esto a una SQL function o vista materializada.

async function dailySeries(
  eventType: string,
  days: number,
): Promise<DailyPoint[]> {
  const since = new Date(Date.now() - days * 86_400_000).toISOString()

  const { data, error } = await supabase
    .from("events")
    .select("created_at")
    .eq("event_type", eventType)
    .gte("created_at", since)
    .limit(50_000)

  if (error) {
    console.warn("[supabase-admin] dailySeries error:", eventType, error.message)
    return []
  }

  async function dailyPageViewSeries(days: number): Promise<DailyPoint[]> {
  const since = new Date(Date.now() - days * 86_400_000).toISOString()

  const { data, error } = await supabase
    .from("page_views")
    .select("created_at")
    .gte("created_at", since)
    .limit(50_000)

  if (error) {
    console.warn("[supabase-admin] dailyPageViewSeries error:", error.message)
    return []
  }

  const buckets: Record<string, number> = {}
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10)
    buckets[d] = 0
  }

  for (const row of data ?? []) {
    const d = (row.created_at as string).slice(0, 10)
    if (d in buckets) buckets[d]++
  }

  return Object.entries(buckets).map(([day, count]) => ({ day, count }))
}

  // Pre-poblar buckets para los últimos `days` días, en orden cronológico
  const buckets: Record<string, number> = {}
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10)
    buckets[d] = 0
  }

  for (const row of data ?? []) {
    const d = (row.created_at as string).slice(0, 10)
    if (d in buckets) buckets[d]++
  }

  return Object.entries(buckets).map(([day, count]) => ({ day, count }))
}

// ─────────────────────────────────────────────────────────────────────────────
// API pública
// ─────────────────────────────────────────────────────────────────────────────

export async function getAdminStats(range: Range): Promise<AdminStats> {
  const b = rangeBounds(range)

  // ── Quizzes del período actual (filas completas para charts en JS) ───────
  let qz = supabase
    .from("events")
    .select("*")
    .eq("event_type", "quiz_completed")
    .order("created_at", { ascending: false })
  if (b.since) qz = qz.gte("created_at", b.since)

  const { data: quizzesData, error: quizzesErr } = await qz.limit(10_000)
  if (quizzesErr) {
    console.warn("[supabase-admin] quizzes error:", quizzesErr.message)
  }
  const quizzes = (quizzesData ?? []) as QuizRow[]

  // ── Quizzes del período anterior (solo lo necesario para delta) ──────────
  let prevQz = supabase
    .from("events")
    .select("percentage", { count: "exact" })
    .eq("event_type", "quiz_completed")
  if (b.prevSince) prevQz = prevQz.gte("created_at", b.prevSince)
  if (b.prevUntil) prevQz = prevQz.lt("created_at",  b.prevUntil)

  const { data: prevQzData, count: prevQzCount } = await prevQz.limit(10_000)
  const prevAvgScore = avg(
    (prevQzData ?? []).map((q: { percentage: number }) => q.percentage),
  )

  // ── Conteos de eventos en paralelo (actual + anterior) ───────────────────
  const [
    reportsCount, recoveriesCount, studiesCount, sharesCount, pageViewsCount,
    prevReports, prevRecoveries, prevStudies, prevShares, prevPageViews,
  ] = await Promise.all([
    countEvents("whatsapp_report_sent", b.since),
    countEvents("recovery_plan_viewed", b.since),
    countEvents("study_opened",         b.since),
    countEvents("lessons_shared",       b.since),
    countPageViews(b.since),

    countEvents("whatsapp_report_sent", b.prevSince, b.prevUntil),
    countEvents("recovery_plan_viewed", b.prevSince, b.prevUntil),
    countEvents("study_opened",         b.prevSince, b.prevUntil),
    countEvents("lessons_shared",       b.prevSince, b.prevUntil),
    countPageViews(b.prevSince, b.prevUntil),
  ])

  // ── Sparklines: si "all", mostramos 30d para el gráfico ──────────────────
  const sparkDays = b.days ?? 30
  const [sQuizzes, sReports, sStudies, sShares, sPageViews] = await Promise.all([
    dailySeries("quiz_completed",       sparkDays),
    dailySeries("whatsapp_report_sent", sparkDays),
    dailySeries("study_opened",         sparkDays),
    dailySeries("lessons_shared",       sparkDays),
    dailyPageViewSeries(sparkDays),
  ])

  return {
    range,
    quizzes,
    reportsCount,
    recoveriesCount,
    studiesCount,
    sharesCount,
    pageViewsCount,
    previous: {
      quizzes:    prevQzCount ?? 0,
      avgScore:   prevAvgScore,
      reports:    prevReports,
      recoveries: prevRecoveries,
      studies:    prevStudies,
      shares:     prevShares,
      pageViews:  prevPageViews,
    },
    series: {
      quizzes: sQuizzes,
      reports: sReports,
      studies: sStudies,
      shares:  sShares,
      pageViews: sPageViews,
    },
  }
}

// ── Lista de quizzes recientes ───────────────────────────────────────────────

export async function getRecentQuizzes(
  limit = 25,
  range: Range = "30d",
): Promise<QuizRow[]> {
  const b = rangeBounds(range)

  let q = supabase
    .from("events")
    .select("*")
    .eq("event_type", "quiz_completed")
    .order("created_at", { ascending: false })
    .limit(limit)
  if (b.since) q = q.gte("created_at", b.since)

  const { data, error } = await q
  if (error) {
    console.warn("[supabase-admin] getRecentQuizzes error:", error.message)
    return []
  }
  return (data ?? []) as QuizRow[]
}

// ── Top lecciones (agregado en JS sobre el rango) ────────────────────────────

export async function getTopLessons(range: Range = "30d"): Promise<TopLesson[]> {
  const b = rangeBounds(range)

  let q = supabase
    .from("events")
    .select("lesson_title, category_name, percentage")
    .eq("event_type", "quiz_completed")
  if (b.since) q = q.gte("created_at", b.since)

  const { data, error } = await q.limit(10_000)
  if (error) {
    console.warn("[supabase-admin] getTopLessons error:", error.message)
    return []
  }

  const map = new Map<string, { lesson_title: string; category_name: string; pcts: number[] }>()
  for (const row of data ?? []) {
    const title    = (row as any).lesson_title ?? "—"
    const category = (row as any).category_name ?? "—"
    const key      = `${title}::${category}`
    if (!map.has(key)) {
      map.set(key, { lesson_title: title, category_name: category, pcts: [] })
    }
    map.get(key)!.pcts.push((row as any).percentage ?? 0)
  }

  return Array.from(map.values())
    .map(v => ({
      lesson_title:  v.lesson_title,
      category_name: v.category_name,
      attempts:      v.pcts.length,
      avg_score:     avg(v.pcts),
    }))
    .sort((a, b) => b.attempts - a.attempts)
    .slice(0, 20)
}

// ── Top páginas (agregado en JS sobre el rango) ──────────────────────────────

export async function getTopPages(range: Range = "30d"): Promise<TopPage[]> {
  const b = rangeBounds(range)

  let q = supabase.from("page_views").select("path")
  if (b.since) q = q.gte("created_at", b.since)

  const { data, error } = await q.limit(50_000)
  if (error) {
    console.warn("[supabase-admin] getTopPages error:", error.message)
    return []
  }

  const counts: Record<string, number> = {}
  for (const row of data ?? []) {
    const p = (row as any).path ?? "/"
    counts[p] = (counts[p] ?? 0) + 1
  }

  return Object.entries(counts)
    .map(([path, views]) => ({ path, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 30)
}

async function dailyPageViewSeries(days: number): Promise<DailyPoint[]> {
  const since = new Date(Date.now() - days * 86_400_000).toISOString()

  const { data, error } = await supabase
    .from("page_views")
    .select("created_at")
    .gte("created_at", since)
    .limit(50_000)

  if (error) {
    console.warn("[supabase-admin] dailyPageViewSeries error:", error.message)
    return []
  }

  const buckets: Record<string, number> = {}
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10)
    buckets[d] = 0
  }

  for (const row of data ?? []) {
    const d = (row as any).created_at.slice(0, 10)
    if (d in buckets) buckets[d]++
  }

  return Object.entries(buckets).map(([day, count]) => ({ day, count }))
}