// app/recuperar/page.tsx
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RecoveryClient } from "./recovery-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plan de Recuperación",
  description: "Completá las lecciones asignadas por tu maestro y reportá tu avance.",
}

interface PageProps {
  searchParams: Promise<{ data?: string }>
}

export default async function RecoveryPage({ searchParams }: PageProps) {
  const { data } = await searchParams
  const rawData  = data ?? ""

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-2xl">
          <RecoveryClient rawData={rawData} />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}