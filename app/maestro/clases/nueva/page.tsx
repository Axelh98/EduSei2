// app/maestro/clases/nueva/page.tsx
import { redirect } from "next/navigation"
import { getUser } from "@/lib/supabase-server"
import { AuthHeader } from "@/components/shared/auth-header"
import { ClaseForm } from "@/components/maestro/clase-form"

export default async function NuevaClasePage() {
  const user = await getUser()
  if (!user) redirect("/login?next=/maestro/clases/nueva")

  return (
    <div className="min-h-dvh bg-background">
      <AuthHeader
        userEmail={user.email ?? ""}
        backHref="/maestro/clases"
        backLabel="Volver a mis clases"
        eyebrow="Nueva clase"
      />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
            Crear clase
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground tracking-tight">
            Nueva clase
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Una vez creada vas a recibir un código de invitación que podés compartir
            con tus alumnos para que se enrolen.
          </p>
        </div>
        <ClaseForm mode="create" />
      </main>
    </div>
  )
}
