// app/admin/usuarios/page.tsx
import { redirect } from "next/navigation"
import Link from "next/link"
import { Plus } from "lucide-react"
import { getUser, getProfile } from "@/lib/supabase-server"
import { getUsuariosVisibles, type UserRole } from "@/actions/usuarios"
import { AuthHeader } from "@/components/shared/auth-header"
import { UsuariosTable } from "@/components/admin/usuarios-table"
import { UsuariosFilters } from "@/components/admin/usuarios-filters"

interface PageProps {
  searchParams: Promise<{ search?: string; role?: string }>
}

export default async function UsuariosPage({ searchParams }: PageProps) {
  const user = await getUser()
  if (!user) redirect("/login?next=/admin/usuarios")

  const profile = await getProfile()
  if (!profile || (profile.role !== "admin" && profile.role !== "director_area")) {
    redirect("/")
  }

  const { search, role } = await searchParams
  const usuarios = await getUsuariosVisibles({
    search,
    role: (role as UserRole | "all") ?? "all",
  })

  return (
    <div className="min-h-dvh bg-background">
      <AuthHeader
        userEmail={user.email ?? ""}
        userRole={profile.role}
        backHref="/admin"
        backLabel="Volver al panel"
        eyebrow="Usuarios"
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
              Gestión de usuarios
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
              Usuarios
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {usuarios.length} usuario{usuarios.length !== 1 ? "s" : ""} visible{usuarios.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href="/admin/usuarios/nuevo"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Nuevo usuario
          </Link>
        </div>

        <UsuariosFilters initialSearch={search} initialRole={role as UserRole | "all"} />

        <UsuariosTable usuarios={usuarios} />
      </main>
    </div>
  )
}