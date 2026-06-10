// app/editor/page.tsx

import { redirect } from "next/navigation"
import Link from "next/link"
import { LogOut, User } from "lucide-react"
import { getUser, signOut } from "@/lib/supabase-server"
import { getMyOverrides, getPublicOverrides } from "@/actions/overrides"
import { OverridesBrowser } from "@/components/editor/OverridesBrowser"

export default async function EditorPage() {
  const user = await getUser()
  if (!user) redirect("/login?next=/editor")

  const [myOverrides, publicOverrides] = await Promise.all([
    getMyOverrides(),
    getPublicOverrides(),
  ])

  async function handleSignOut() {
    "use server"
    await signOut()
    redirect("/")
  }

  return (
    <div className="min-h-dvh bg-background">

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:text-primary/80 transition-colors">
              MSI
            </span>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              · volver al inicio
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <User className="h-3.5 w-3.5" />
              {user.email}
            </span>
            <form action={handleSignOut}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                Salir
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* ── Main ──────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
            Editor de lecciones
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight mb-2">
            Versiones personalizadas
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Adaptá las lecciones del programa oficial a tu clase. Tus versiones
            las podés asignar a tus alumnos en lugar del contenido por defecto.
          </p>
        </div>

        <OverridesBrowser myOverrides={myOverrides} publicOverrides={publicOverrides} />
      </main>
    </div>
  )
}