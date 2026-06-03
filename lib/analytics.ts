// lib/analytics.ts
const SUPABASE_URL      = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// ── Tipos ─────────────────────────────────────────────────────────────────────

type EventType =
  | "quiz_completed"
  | "whatsapp_report_sent"
  | "recovery_plan_viewed"
  | "study_opened"
  | "lessons_shared"
  | "page_view"

interface BaseEvent {
  event_type:    EventType
  category_id?:  string
  category_name?: string
  lesson_id?:    string
  lesson_title?: string
  student_name?: string
  score?:        number
  total?:        number
  percentage?:   number
  course_type?:  "seminario" | "instituto"
  metadata?:     Record<string, unknown>
}

// ── Insert genérico ───────────────────────────────────────────────────────────

async function insertEvent(payload: BaseEvent): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    // Si no hay keys configuradas, falla silenciosamente en desarrollo
    if (process.env.NODE_ENV === "development") {
      console.info("[analytics] Supabase no configurado, evento ignorado:", payload.event_type)
    }
    return
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/events`, {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer":        "return=minimal",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok && process.env.NODE_ENV === "development") {
      console.warn("[analytics] Error al insertar evento:", res.status, await res.text())
    }
  } catch {
    // Analytics nunca debe romper la app — falla silenciosamente
  }
}

async function insertPageView(path: string): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/page_views`, {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer":        "return=minimal",
      },
      body: JSON.stringify({
        path,
        referrer: typeof document !== "undefined" ? document.referrer : null,
      }),
    })
  } catch {
    // silencioso
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// API pública — una función por evento
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Llamar cuando el alumno termina un quiz y ve sus resultados.
 */
export function trackQuizCompleted(params: {
  categoryId:   string
  categoryName: string
  lessonId:     string
  lessonTitle:  string
  studentName:  string
  score:        number
  total:        number
  percentage:   number
  courseType:   "seminario" | "instituto"
}) {
  insertEvent({
    event_type:    "quiz_completed",
    category_id:   params.categoryId,
    category_name: params.categoryName,
    lesson_id:     params.lessonId,
    lesson_title:  params.lessonTitle,
    student_name:  params.studentName,
    score:         params.score,
    total:         params.total,
    percentage:    params.percentage,
    course_type:   params.courseType,
  })
}

/**
 * Llamar cuando el alumno presiona "Enviar reporte" por WhatsApp.
 */
export function trackWhatsappReportSent(params: {
  studentName:  string
  lessonsDone:  number
  lessonsTotal: number
  percentage:   number
  categoryId?:  string
}) {
  insertEvent({
    event_type:   "whatsapp_report_sent",
    student_name: params.studentName,
    score:        params.lessonsDone,
    total:        params.lessonsTotal,
    percentage:   params.percentage,
    category_id:  params.categoryId,
    metadata: {
      lessons_done:  params.lessonsDone,
      lessons_total: params.lessonsTotal,
    },
  })
}

/**
 * Llamar cuando el alumno abre /recuperar con su plan asignado.
 */
export function trackRecoveryPlanViewed(params: {
  totalLessons: number
  categoryIds:  string[]
}) {
  insertEvent({
    event_type: "recovery_plan_viewed",
    metadata: {
      total_lessons: params.totalLessons,
      category_ids:  params.categoryIds,
    },
  })
}

/**
 * Llamar cuando el alumno abre el resumen de estudio de una lección.
 */
export function trackStudyOpened(params: {
  categoryId:   string
  categoryName: string
  lessonId:     string
  lessonTitle:  string
  courseType:   "seminario" | "instituto"
}) {
  insertEvent({
    event_type:    "study_opened",
    category_id:   params.categoryId,
    category_name: params.categoryName,
    lesson_id:     params.lessonId,
    lesson_title:  params.lessonTitle,
    course_type:   params.courseType,
  })
}

/**
 * Llamar cuando el maestro genera y comparte un plan de recuperación.
 */
export function trackLessonsShared(params: {
  categoryId:    string
  categoryName:  string
  lessonTitles:  string[]
  courseType:    "seminario" | "instituto"
}) {
  insertEvent({
    event_type:    "lessons_shared",
    category_id:   params.categoryId,
    category_name: params.categoryName,
    total:         params.lessonTitles.length,
    course_type:   params.courseType,
    metadata: {
      lesson_titles: params.lessonTitles,
    },
  })
}

/**
 * Llamar en cada página para registrar visitas.
 * Usar en un useEffect o en un layout client component.
 */
export function trackPageView(path?: string) {
  const p = path ?? (typeof window !== "undefined" ? window.location.pathname : "/")
  insertPageView(p)
}