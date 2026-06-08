// app/editor/nuevo/page.tsx

import { redirect } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getProfile } from "@/lib/supabase-server"
import { EditorForm } from "@/components/editor/EditorForm"

export default async function NuevoOverridePage() {
  const profile = await getProfile()
  if (!profile) redirect("/login")

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 h-[52px] bg-card border-b border-border flex items-center px-6 gap-4">
        <Link href="/editor"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Volver al editor
        </Link>
        <div className="h-4 w-px bg-border" />
        <span className="text-sm font-semibold text-foreground">Nueva versión de lección</span>
      </header>
      <EditorForm />
    </div>
  )
}