// lib/supabase-admin.ts

const SUPABASE_URL      = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const SERVICE_ROLE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""

// ── Query genérica ────────────────────────────────────────────────────────────

async function adminQuery<T>(
  path: string,
  params?: Record<string, string>
): Promise<T[]> {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return []

  const url = new URL(`${SUPABASE_URL}/rest/v1/${path}`)
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  }

  try {
    const res = await fetch(url.toString(), {
      headers: {
        "apikey":        SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
        "Accept":        "application/json",
      },
      cache: "no-store",
    })
    if (!res.ok) return []
    return res.json() as Promise<T[]>
  } catch {
    return []
  }
}

// ── Tipos de cada query ───────────────────────────────────────────────────────

type QuizRow = {
  id: string
  percentage: number
  category_name: string
  course_type: string
}

type ReportRow = {
  id: string
  percentage: number
}

type RecoveryRow = {
  id: string
}

type StudyRow = {
  id: string
  category_name: string
}

type ShareRow = {
  id: string
  total: number
  category_name: string
}

type PageViewRow = {
  path: string
}

export type RecentQuizRow = {
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

export type TopLessonRow = {
  lesson_title: string
  category_name: string
  attempts: number
  avg_score: number
}

export type TopPageRow = {
  path: string
  views: number
}

// ── Queries para el panel /admin ──────────────────────────────────────────────

export async function getAdminStats() {
  const [quizzes, reports, recoveries, studies, shares, pageViews] =
    await Promise.all([
      adminQuery<QuizRow>("events", {
        event_type: "eq.quiz_completed",
        created_at: `gte.${daysAgo(30)}`,
        select: "id,percentage,category_name,course_type",
      }),
      adminQuery<ReportRow>("events", {
        event_type: "eq.whatsapp_report_sent",
        created_at: `gte.${daysAgo(30)}`,
        select: "id,percentage",
      }),
      adminQuery<RecoveryRow>("events", {
        event_type: "eq.recovery_plan_viewed",
        created_at: `gte.${daysAgo(30)}`,
        select: "id",
      }),
      adminQuery<StudyRow>("events", {
        event_type: "eq.study_opened",
        created_at: `gte.${daysAgo(30)}`,
        select: "id,category_name",
      }),
      adminQuery<ShareRow>("events", {
        event_type: "eq.lessons_shared",
        created_at: `gte.${daysAgo(30)}`,
        select: "id,total,category_name",
      }),
      adminQuery<PageViewRow>("page_views", {
        created_at: `gte.${daysAgo(7)}`,
        select: "path",
      }),
    ])

  return { quizzes, reports, recoveries, studies, shares, pageViews }
}

export async function getRecentQuizzes(limit = 20): Promise<RecentQuizRow[]> {
  return adminQuery<RecentQuizRow>("events", {
    event_type: "eq.quiz_completed",
    select: "id,lesson_title,category_name,student_name,score,total,percentage,course_type,created_at",
    order: "created_at.desc",
    limit: String(limit),
  })
}

export async function getTopLessons(): Promise<TopLessonRow[]> {
  return adminQuery<TopLessonRow>("v_top_lessons")
}

export async function getTopPages(): Promise<TopPageRow[]> {
  return adminQuery<TopPageRow>("v_top_pages")
}

// ── Utilidades ────────────────────────────────────────────────────────────────

function daysAgo(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString()
}