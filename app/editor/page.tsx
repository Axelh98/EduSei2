// app/editor/page.tsx

import { redirect } from "next/navigation"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { getProfile } from "@/lib/supabase-server"
import { getMyOverrides, getPublicOverrides } from "@/actions/overrides"
import { logout } from "@/actions/auth"
import { EditorOverrideCard } from "@/components/EditorOverrideCard"

export default async function EditorPage() {
  const profile = await getProfile()
  if (!profile) redirect("/login")

  const [myOverrides, publicOverrides] = await Promise.all([
    getMyOverrides(),
    getPublicOverrides(),
  ])

  return (
    <div className="min-h-screen bg-background">

      {/* Header — igual que site-header pero para maestros */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-foreground leading-tight">Editor de Lecciones</h1>
              <p className="text-[11px] text-muted-foreground">Mi Seminario e Instituto</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-muted-foreground">{profile.full_name}</span>
            <form action={logout}>
              <button type="submit"
                className="text-sm font-medium text-muted-foreground border border-border hover:text-foreground hover:bg-muted rounded-lg px-3 py-1.5 transition-colors">
                Salir
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 md:px-6 flex flex-col gap-14">

        {/* Mis versiones */}
        <section>
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight">Mis versiones</h2>
              <p className="mt-1.5 text-sm text-muted-foreground max-w-lg leading-relaxed">
                Lecciones personalizadas que creaste. Podés hacerlas públicas para compartirlas con colegas.
              </p>
            </div>
            <Link href="/editor/nuevo"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98]">
              + Nueva versión
            </Link>
          </div>

          {myOverrides.length === 0 ? (
            <div className="py-16 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-muted-foreground/30" />
              <p className="font-medium text-muted-foreground mb-3">Todavía no creaste ninguna versión personalizada.</p>
              <Link href="/editor/nuevo"
                className="text-sm font-semibold text-primary hover:underline underline-offset-4">
                Crear mi primera versión →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {myOverrides.map(override => (
                <EditorOverrideCard key={override.id} override={override} isOwn />
              ))}
            </div>
          )}
        </section>

        {/* Versiones de colegas */}
        {publicOverrides.length > 0 && (
          <section>
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight">Versiones de colegas</h2>
              <p className="mt-1.5 text-sm text-muted-foreground max-w-lg leading-relaxed">
                Versiones públicas de otros maestros. Podés usarlas al asignar lecciones a tus alumnos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {publicOverrides.map(override => (
                <EditorOverrideCard key={override.id} override={override} isOwn={false} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}