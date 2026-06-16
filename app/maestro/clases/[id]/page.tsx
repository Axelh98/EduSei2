// app/maestro/clases/[id]/page.tsx
import { redirect, notFound } from "next/navigation"
import { getUser } from "@/lib/supabase-server"
import { getClase, getMiembros } from "@/actions/clases"
import { AuthHeader } from "@/components/shared/auth-header"
import { InviteCodeDisplay } from "@/components/maestro/invite-code-display"
import { MiembrosSection } from "@/components/maestro/miembros-section"
import { ClaseForm } from "@/components/maestro/clase-form"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ClaseDetallePage({ params }: Props) {
  const { id } = await params

  const user = await getUser()
  if (!user) redirect(`/login?next=/maestro/clases/${id}`)

  const [clase, miembros] = await Promise.all([
    getClase(id),
    getMiembros(id),
  ])

  if (!clase) notFound()

  return (
    <div className="min-h-dvh bg-background">
      <AuthHeader
        userEmail={user.email ?? ""}
        backHref="/maestro/clases"
        backLabel="Volver"
        eyebrow={clase.name}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-8">

        {/* Header de la clase */}
        <header>
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
            {clase.course_type === "seminario" ? "Seminario" : "Instituto"}
            {clase.period && ` · ${clase.period}`}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
            {clase.name}
          </h1>
          {clase.schedule && (
            <p className="mt-1 text-sm text-muted-foreground">{clase.schedule}</p>
          )}
        </header>

        {/* Código de invitación */}
        <InviteCodeDisplay classId={clase.id} code={clase.invite_code} />

        {/* Miembros */}
        <MiembrosSection classId={clase.id} miembros={miembros} />

        {/* Configuración */}
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-serif text-lg font-bold text-foreground mb-1">
            Configuración
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Editá los datos de esta clase.
          </p>
          <ClaseForm mode="edit" clase={clase} />
        </section>
      </main>
    </div>
  )
}
