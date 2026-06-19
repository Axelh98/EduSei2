// app/admin/usuarios/nuevo/page.tsx
import { redirect } from "next/navigation"
import { getUser, getProfile } from "@/lib/supabase-server"
import { getUsuariosVisibles } from "@/actions/usuarios"
import { AuthHeader } from "@/components/shared/auth-header"
import { NuevoUsuarioForm } from "@/components/admin/nuevo-usuario-form"

export default async function NuevoUsuarioPage() {
  const user = await getUser()
  if (!user) redirect("/login?next=/admin/usuarios/nuevo")

  const profile = await getProfile()
  if (!profile || (profile.role !== "admin" && profile.role !== "director_area")) {
    redirect("/")
  }

  // Para el selector de supervisor, traemos todos los usuarios visibles
  const posiblesSupervisores = await getUsuariosVisibles({})

  return (
    <div className="min-h-dvh bg-background">
      <AuthHeader
        userEmail={user.email ?? ""}
        userRole={profile.role}
        backHref="/admin/usuarios"
        backLabel="Volver a usuarios"
        eyebrow="Nuevo usuario"
      />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
            Crear usuario
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground tracking-tight">
            Nuevo usuario
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Tenés tres opciones: crear el usuario con contraseña directa, invitar
            por email (el usuario completa su perfil al loguearse), o dejar sin
            contraseña para que reciba un magic link.
          </p>
        </div>
        <NuevoUsuarioForm supervisores={posiblesSupervisores} />
      </main>
    </div>
  )
}