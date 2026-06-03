// app/admin/page.tsx
import { redirect } from "next/navigation"
import {
  getAdminStats,
  getRecentQuizzes,
  getTopLessons,
  getTopPages,
} from "@/lib/supabase-admin"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

interface AdminPageProps {
  searchParams: Promise<{ key?: string }>
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  // ── Await searchParams (Next.js 15 lo requiere) ───────────────────────────
  const { key } = await searchParams

  // ── Protección simple con query param ─────────────────────────────────────
  const secret = process.env.ADMIN_SECRET
  if (!secret || key !== secret) {
    redirect("/")
  }

  // ── Fetch en paralelo ─────────────────────────────────────────────────────
  const [stats, recentQuizzes, topLessons, topPages] = await Promise.all([
    getAdminStats(),
    getRecentQuizzes(25),
    getTopLessons(),
    getTopPages(),
  ])

  return (
    <AdminDashboard
      stats={stats}
      recentQuizzes={recentQuizzes}
      topLessons={topLessons}
      topPages={topPages}
      adminKey={key ?? ""}
    />
  )
}