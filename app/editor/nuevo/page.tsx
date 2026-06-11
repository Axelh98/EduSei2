// app/editor/nuevo/page.tsx

import Link from "next/link"
import { redirect } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { getUser } from "@/lib/supabase-server"
import { EditorForm } from "@/components/editor/EditorForm"

export default async function NuevoEditorPage() {
  const user = await getUser()
  if (!user) redirect("/login?next=/editor/nuevo")

  return (
    <div className="min-h-dvh bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          <Link
            href="/editor"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver al editor
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Nueva versión
          </span>
        </div>
      </header>

      <EditorForm />
    </div>
  )
}