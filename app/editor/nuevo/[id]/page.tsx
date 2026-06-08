// app/editor/[id]/page.tsx

import { redirect, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getProfile }      from "@/lib/supabase-server"
import { getOverrideById } from "@/actions/overrides"
import { EditorForm }      from "@/components/editor/EditorForm"

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditarOverridePage({ params }: Props) {
  const { id } = await params
  const profile = await getProfile()
  if (!profile) redirect("/login")

  const override = await getOverrideById(id)
  if (!override) notFound()
  if (override.author_id !== profile.id) redirect("/editor")

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 h-[52px] bg-card border-b border-border flex items-center px-6 gap-4">
        <Link href="/editor"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Volver al editor
        </Link>
        <div className="h-4 w-px bg-border" />
        <span className="text-sm font-semibold text-foreground truncate">
          Editando: {override.title ?? override.lesson_id}
        </span>
        <span className={`ml-auto flex-shrink-0 text-xs font-semibold ${
          override.is_public ? "text-secondary" : "text-muted-foreground/50"
        }`}>
          {override.is_public ? "🌐 Pública" : "🔒 Privada"}
        </span>
      </header>
      <EditorForm existing={override} />
    </div>
  )
}