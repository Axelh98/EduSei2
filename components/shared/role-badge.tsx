// components/shared/role-badge.tsx
import type { UserRole } from "@/actions/usuarios"

const ROLE_LABELS: Record<UserRole, string> = {
  admin:             "Admin",
  director_area:     "Director de Área",
  director_regional: "Director Regional",
  coordinador:       "Coordinador",
  supervisor:        "Supervisor",
  maestro:           "Maestro",
  estudiante:        "Estudiante",
}

const ROLE_STYLES: Record<UserRole, string> = {
  admin:             "bg-destructive/10 text-destructive border-destructive/20",
  director_area:     "bg-primary/10 text-primary border-primary/20",
  director_regional: "bg-primary/10 text-primary border-primary/20",
  coordinador:       "bg-secondary/10 text-secondary border-secondary/20",
  supervisor:        "bg-secondary/10 text-secondary border-secondary/20",
  maestro:           "bg-muted text-foreground border-border",
  estudiante:        "bg-muted/60 text-muted-foreground border-border",
}

export function RoleBadge({ role, className = "" }: { role: UserRole; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${ROLE_STYLES[role]} ${className}`}
    >
      {ROLE_LABELS[role]}
    </span>
  )
}

export { ROLE_LABELS }
