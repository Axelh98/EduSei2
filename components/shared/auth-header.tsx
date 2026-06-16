// components/shared/auth-header.tsx
import Link from "next/link"
import { redirect } from "next/navigation"
import { LogOut, User, ChevronLeft } from "lucide-react"
import { signOut } from "@/lib/supabase-server"
import type { UserRole } from "@/actions/usuarios"

interface Props {
  userEmail:  string
  userRole?:  UserRole
  backHref?:  string
  backLabel?: string
  eyebrow?:   string
}

export function AuthHeader({ userEmail, userRole, backHref, backLabel, eyebrow }: Props) {
  async function handleSignOut() {
    "use server"
    await signOut()
    redirect("/login")
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            {backLabel ?? "Volver"}
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:text-primary/80 transition-colors">
              MSI
            </span>
            <span className="text-xs text-muted-foreground">· inicio</span>
          </Link>
        )}

        {eyebrow && (
          <span className="hidden sm:inline-flex text-[11px] font-bold uppercase tracking-widest text-primary truncate">
            {eyebrow}
          </span>
        )}

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="h-3.5 w-3.5" />
            {userEmail}
            {userRole && (
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-md bg-muted text-[10px] font-bold uppercase tracking-wide">
                {userRole.replace("_", " ")}
              </span>
            )}
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
  )
}
