// app/recuperaciones/page.tsx
// Ruta pública — sin gate de rol ni de sesión. Cualquiera con el link puede
// entrar, subir su CSV y generar los reportes. Si en algún momento quieren
// volver a restringirla, el patrón de guard queda comentado más abajo.

import Link from "next/link"
import { RecuperacionesClient } from "./recuperaciones-client"

// import { redirect } from "next/navigation"
// import { getUser, getProfile } from "@/lib/supabase-server"
// const ROLES_PERMITIDOS = ["admin", "director_area", "director_regional", "coordinador"]

export default async function RecuperacionesPage() {
  // Para volver a restringir por rol, descomentar:
  // const user = await getUser()
  // if (!user) redirect("/login?next=/recuperaciones")
  // const profile = await getProfile()
  // if (!profile || !ROLES_PERMITIDOS.includes(profile.role)) redirect("/")

  return (
    <div className="min-h-dvh bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex items-center px-4 sm:px-6 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:text-primary/80 transition-colors">
              MSI
            </span>
            <span className="text-xs text-muted-foreground">· inicio</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
            Recuperaciones
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
            Reportes de recuperaciones
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
            Subí el CSV de recuperaciones y generá los PDFs por barrio o por fecha,
            organizados por estaca, tal como los reportes que se generaban de forma local.
          </p>
        </div>

        <RecuperacionesClient />
      </main>
    </div>
  )
}