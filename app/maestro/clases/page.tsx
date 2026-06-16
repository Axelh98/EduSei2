// app/maestro/clases/page.tsx
import { redirect } from "next/navigation"
import Link from "next/link"
import { Plus, Users, Calendar, BookOpen } from "lucide-react"
import { getUser } from "@/lib/supabase-server"
import { getMisClases } from "@/actions/clases"
import { AuthHeader } from "@/components/shared/auth-header"

export default async function MisClasesPage() {
  const user = await getUser()
  if (!user) redirect("/login?next=/maestro/clases")

  const clases = await getMisClases()

  return (
    <div className="min-h-dvh bg-background">
      <AuthHeader userEmail={user.email ?? ""} eyebrow="Mis clases" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
              Panel del maestro
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
              Mis clases
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              Gestioná las clases que tenés a cargo. Desde acá podés ver tus alumnos,
              compartir el código de invitación, y asignar roles de presidente o secretario.
            </p>
          </div>
          <Link
            href="/maestro/clases/nueva"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Nueva clase
          </Link>
        </div>

        {clases.length === 0 ? (
          <div className="py-16 text-center border-2 border-dashed border-border rounded-2xl bg-card">
            <BookOpen className="mx-auto h-10 w-10 text-muted-foreground/40 mb-3" />
            <p className="font-serif text-lg font-bold text-foreground mb-1">
              Todavía no tenés clases
            </p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-5">
              Creá tu primera clase para empezar a recibir alumnos y registrar minutas.
            </p>
            <Link
              href="/maestro/clases/nueva"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              <Plus className="h-4 w-4" />
              Crear mi primera clase
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clases.map((clase) => (
              <Link
                key={clase.id}
                href={`/maestro/clases/${clase.id}`}
                className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-px transition-all duration-200"
                style={{ boxShadow: "inset 3px 0 0 hsl(var(--primary))" }}
              >
                <div className="flex flex-col gap-2 p-4 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    {clase.course_type === "seminario" ? "Seminario" : "Instituto"}
                  </p>
                  <h3 className="font-serif text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {clase.name}
                  </h3>
                  {clase.period && (
                    <p className="text-xs text-muted-foreground">{clase.period}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 border-t border-border/60 bg-muted/20 text-xs text-muted-foreground">
                  {clase.schedule && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {clase.schedule}
                    </span>
                  )}
                  <span className="ml-auto flex items-center gap-1 font-mono text-[10px]">
                    <Users className="h-3 w-3" />
                    {clase.invite_code}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
