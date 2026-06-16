// components/admin/usuarios-table.tsx
import Link from "next/link"
import { ChevronRight, Users as UsersIcon } from "lucide-react"
import { RoleBadge } from "@/components/shared/role-badge"
import type { Profile } from "@/actions/usuarios"

export function UsuariosTable({ usuarios }: { usuarios: Profile[] }) {
  if (usuarios.length === 0) {
    return (
      <div className="py-16 text-center border-2 border-dashed border-border rounded-2xl bg-card">
        <UsersIcon className="mx-auto h-8 w-8 text-muted-foreground/30 mb-2" />
        <p className="text-sm font-medium text-muted-foreground">No hay usuarios</p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          Probá con otros filtros o creá un nuevo usuario.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <ul className="divide-y divide-border">
        {usuarios.map(u => {
          const initials = (u.full_name ?? "")
            .split(/\s+/)
            .map(w => w[0]?.toUpperCase() ?? "")
            .slice(0, 2)
            .join("") || "?"

          return (
            <li key={u.id}>
              <Link
                href={`/admin/usuarios/${u.id}`}
                className="flex items-center gap-3 px-4 sm:px-6 py-3 hover:bg-muted/30 transition-colors group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0">
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {u.full_name ?? "Sin nombre"}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {new Date(u.created_at).toLocaleDateString("es-AR", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </p>
                </div>
                <RoleBadge role={u.role} />
                <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
