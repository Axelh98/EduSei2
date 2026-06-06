// lib/supabase-admin.ts
const SUPABASE_URL     = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""

// ── Query genérica (devuelve filas) ───────────────────────────────────────────

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

// ── Query de conteo (usa el header Prefer: count=exact de Supabase) ───────────
// No trae filas — solo devuelve el número exacto desde la DB.

async function adminCount(
  path: string,
  params?: Record<string, string>
): Promise<number> {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return 0

  const url = new URL(`${SUPABASE_URL}/rest/v1/${path}`)
  // select vacío para no traer datos, solo el header Content-Range
  url.searchParams.set("select", "id")
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  }

  try {
    const res = await fetch(url.toString(), {
      headers: {
        "apikey":        SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
        "Accept":        "application/json",
        // Este header le dice a Supabase que cuente todas las filas exactas
        "Prefer":        "count=exact",
        // Range vacío para no traer ninguna fila (solo el conteo)
        "Range":         "0-0",
      },
      cache: "no-store",
    })

    // Supabase devuelve el total en el header Content-Range: 0-0/TOTAL
    const contentRange = res.headers.get("content-range")
    if (contentRange) {
      // Formato: "0-0/1234" → extraemos 1234
      const total = contentRange.split("/")[1]
      if (total && total !== "*") return parseInt(total, 10)
    }
    return 0
  } catch {
    return 0
  }
}

// ── Tipos ─────────────────────────────────────────────────────────────────────

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

// ── Stats para el panel ───────────────────────────────────────────────────────

export async function getAdminStats() {
  const since30 = daysAgo(30)
  const since7  = daysAgo(7)

  const [
    quizzes,
    reports,
    recoveriesCount,
    studiesCount,
    sharesCount,
    pageViewsCount,
  ] = await Promise.all([
    // Quizzes: necesitamos las filas para calcular promedios y distribución
    adminQuery<QuizRow>("events", {
      event_type: "eq.quiz_completed",
      created_at: `gte.${since30}`,
      select:     "id,percentage,category_name,course_type",
      limit:      "5000",   // suficiente para cálculos, muy difícil de superar
    }),
    // Reports: necesitamos las filas para el porcentaje promedio
    adminQuery<ReportRow>("events", {
      event_type: "eq.whatsapp_report_sent",
      created_at: `gte.${since30}`,
      select:     "id,percentage",
      limit:      "5000",
    }),
    // Los demás solo necesitan el conteo exacto — sin límite de 1000
    adminCount("events", {
      event_type: "eq.recovery_plan_viewed",
      created_at: `gte.${since30}`,
    }),
    adminCount("events", {
      event_type: "eq.study_opened",
      created_at: `gte.${since30}`,
    }),
    adminCount("events", {
      event_type: "eq.lessons_shared",
      created_at: `gte.${since30}`,
    }),
    // Visitas: conteo exacto sin límite
    adminCount("page_views", {
      created_at: `gte.${since7}`,
    }),
  ])

  return {
    quizzes,
    reports,
    recoveriesCount,
    studiesCount,
    sharesCount,
    pageViewsCount,
  }
}

export async function getRecentQuizzes(limit = 25): Promise<RecentQuizRow[]> {
  return adminQuery<RecentQuizRow>("events", {
    event_type: "eq.quiz_completed",
    select:     "id,lesson_title,category_name,student_name,score,total,percentage,course_type,created_at",
    order:      "created_at.desc",
    limit:      String(limit),
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