// app/admin/page.tsx
import { redirect } from "next/navigation"
import {
  getAdminStats,
  getRecentQuizzes,
  getTopLessons,
  getTopPages,
} from "@/lib/supabase-admin"
import { AdminDashboard } from "@/components/analytics/admin-dashboard"
import type { Range } from "@/components/analytics/range-selector"

interface AdminPageProps {
  searchParams: Promise<{ key?: string; range?: string }>
}

const VALID_RANGES: Range[] = ["7d", "15d", "30d", "all"]

export default async function AdminPage({ searchParams }: AdminPageProps) {
  // ── Await searchParams (Next.js 15 lo requiere) ───────────────────────────
  const { key, range: rawRange } = await searchParams

  // ── Protección simple con query param ─────────────────────────────────────
  const secret = process.env.ADMIN_SECRET
  if (!secret || key !== secret) {
    redirect("/")
  }

  // ── Validar y normalizar el rango ─────────────────────────────────────────
  const range: Range = VALID_RANGES.includes(rawRange as Range)
    ? (rawRange as Range)
    : "30d"

  // ── Fetch en paralelo ─────────────────────────────────────────────────────
  const [stats, recentQuizzes, topLessons, topPages] = await Promise.all([
    getAdminStats(range),
    getRecentQuizzes(25, range),
    getTopLessons(range),
    getTopPages(range),
  ])

  return (
    <AdminDashboard
      stats={stats}
      recentQuizzes={recentQuizzes}
      topLessons={topLessons}
      topPages={topPages}
      adminKey={key ?? ""}
      range={range}
    />
  )
}