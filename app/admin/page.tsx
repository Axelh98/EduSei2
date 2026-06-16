// app/admin/page.tsx
import { redirect } from "next/navigation"
import Link from "next/link"
import { Users, Shield, GitBranch, BookOpen } from "lucide-react"
import { getUser, getProfile } from "@/lib/supabase-server"
import { AuthHeader } from "@/components/shared/auth-header"

export default async function AdminDashboard() {
  const user = await getUser()
  if (!user) redirect("/login?next=/admin")

  const profile = await getProfile()
  if (!profile || (profile.role !== "admin" && profile.role !== "director_area")) {
    redirect("/")
  }

  const cards = [
    {
      icon: Users,
      title: "Usuarios",
      desc:  "Crear usuarios, asignar roles y supervisores.",
      href:  "/admin/usuarios",
      color: "primary",
    },
    {
      icon: GitBranch,
      title: "Jerarquía",
      desc:  "Ver la estructura de directores, coordinadores y supervisores.",
      href:  "/admin/usuarios?role=supervisor",
      color: "secondary",
    },
    {
      icon: BookOpen,
      title: "Clases",
      desc:  "Ver todas las clases del sistema y sus maestros.",
      href:  "/maestro/clases",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Mi acceso",
      desc:  `Rol actual: ${profile.role.replace("_", " ")}. Tenés acceso completo al panel.`,
      href:  null,
      color: "muted",
    },
  ]

  return (
    <div className="min-h-dvh bg-background">
      <AuthHeader userEmail={user.email ?? ""} userRole={profile.role} eyebrow="Panel admin" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
            Administración
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight mb-2">
            Panel administrativo
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Gestión global del sistema. Desde acá podés crear usuarios, asignar roles
            jerárquicos y supervisar la estructura completa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            const content = (
              <>
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 ${
                  card.color === "primary" ? "bg-primary/10 text-primary" :
                  card.color === "secondary" ? "bg-secondary/10 text-secondary" :
                  "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </>
            )

            if (card.href) {
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:shadow-md hover:-translate-y-px transition-all duration-200"
                >
                  {content}
                </Link>
              )
            }
            return (
              <div key={card.title} className="flex items-start gap-4 bg-muted/30 border border-border rounded-2xl p-5">
                {content}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}