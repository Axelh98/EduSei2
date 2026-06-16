// components/maestro/miembros-section.tsx
"use client"

import { useState, useTransition } from "react"
import { Users, Mail, Crown, Pen, X, UserPlus, ChevronDown } from "lucide-react"
import { cambiarRolDeClase, quitarMiembro, precargarEmails, type ClassMember } from "@/actions/clases"

interface Props {
  classId:  string
  miembros: ClassMember[]
}

const ROLE_LABEL = {
  student:     "Alumno",
  presidente:  "Presidente",
  secretario:  "Secretario",
} as const

const ROLE_ICON = {
  student:     null,
  presidente:  Crown,
  secretario:  Pen,
}

export function MiembrosSection({ classId, miembros }: Props) {
  const [showPrecargar, setShowPrecargar] = useState(false)

  const activos    = miembros.filter(m => m.status === "active")
  const pendientes = miembros.filter(m => m.status === "pending")

  return (
    <section className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
            <Users className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground">
              Miembros
              <span className="ml-2 text-xs font-normal text-muted-foreground">
                {activos.length} activo{activos.length !== 1 ? "s" : ""}
                {pendientes.length > 0 && ` · ${pendientes.length} pendiente${pendientes.length !== 1 ? "s" : ""}`}
              </span>
            </h2>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowPrecargar(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <UserPlus className="h-3.5 w-3.5" />
          Pre-cargar emails
        </button>
      </div>

      {showPrecargar && (
        <PrecargarEmailsForm
          classId={classId}
          onClose={() => setShowPrecargar(false)}
        />
      )}

      {miembros.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Todavía no hay miembros
          </p>
          <p className="text-xs text-muted-foreground/60">
            Compartí el código de invitación arriba, o pre-cargá emails para empezar.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {activos.map(m => (
            <MiembroRow key={m.id} miembro={m} classId={classId} />
          ))}
          {pendientes.map(m => (
            <MiembroRow key={m.id} miembro={m} classId={classId} />
          ))}
        </ul>
      )}
    </section>
  )
}

// ── Fila de miembro ─────────────────────────────────────────

function MiembroRow({ miembro, classId }: { miembro: ClassMember; classId: string }) {
  const [isPending, startTransition] = useTransition()
  const [showRoles, setShowRoles]    = useState(false)

  const isPending_     = miembro.status === "pending"
  const RoleIcon       = ROLE_ICON[miembro.class_role]
  const displayName    = miembro.profile?.full_name ?? miembro.email ?? "Sin nombre"
  const initials       = displayName
    .split(/\s+/)
    .map(w => w[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("") || "?"

  function handleChangeRole(newRole: "student" | "presidente" | "secretario") {
    setShowRoles(false)
    startTransition(async () => {
      await cambiarRolDeClase(miembro.id, newRole, classId)
    })
  }

  function handleRemove() {
    if (!confirm(`¿Quitar a ${displayName} de la clase?`)) return
    startTransition(async () => {
      await quitarMiembro(miembro.id, classId)
    })
  }

  return (
    <li className="flex items-center gap-3 px-6 py-3 hover:bg-muted/30 transition-colors">
      <div className={`flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 text-xs font-bold ${
        isPending_
          ? "bg-muted text-muted-foreground"
          : "bg-primary/10 text-primary"
      }`}>
        {isPending_ ? <Mail className="h-4 w-4" /> : initials}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold text-foreground truncate">
            {displayName}
          </p>
          {isPending_ && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-muted text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
              Pendiente
            </span>
          )}
        </div>
        {miembro.profile?.full_name && miembro.email && (
          <p className="text-xs text-muted-foreground truncate">{miembro.email}</p>
        )}
      </div>

      {/* Selector de rol */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowRoles(v => !v)}
          disabled={isPending || isPending_}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-50 transition-colors"
        >
          {RoleIcon && <RoleIcon className="h-3 w-3" />}
          {ROLE_LABEL[miembro.class_role]}
          {!isPending_ && <ChevronDown className="h-3 w-3 opacity-60" />}
        </button>

        {showRoles && (
          <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 overflow-hidden min-w-[140px] animate-in fade-in slide-in-from-top-1 duration-100">
            {(["student", "presidente", "secretario"] as const).map(role => {
              const Icon = ROLE_ICON[role]
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleChangeRole(role)}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-muted transition-colors ${
                    role === miembro.class_role ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {Icon && <Icon className="h-3 w-3" />}
                  {ROLE_LABEL[role]}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={handleRemove}
        disabled={isPending}
        title="Quitar de la clase"
        className="flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </li>
  )
}

// ── Pre-cargar emails ────────────────────────────────────────

function PrecargarEmailsForm({ classId, onClose }: { classId: string; onClose: () => void }) {
  const [error, setError]     = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null); setSuccess(null)
    const formData = new FormData(e.currentTarget)
    const emails = String(formData.get("emails") ?? "")

    startTransition(async () => {
      const result = await precargarEmails(classId, emails)
      if (result?.error) setError(result.error)
      else if (result?.success) {
        setSuccess(result.success)
        ;(e.target as HTMLFormElement).reset()
        setTimeout(onClose, 1500)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 py-4 border-b border-border bg-muted/10 flex flex-col gap-3">
      <div>
        <p className="text-xs text-muted-foreground mb-2">
          Pegá los emails separados por comas, espacios o líneas. Cuando los alumnos
          hagan signup con esos emails, quedan enrolados automáticamente.
        </p>
        <textarea
          name="emails"
          rows={3}
          required
          placeholder="juan@ejemplo.com, maria@ejemplo.com&#10;pedro@ejemplo.com"
          className="w-full px-3 py-2 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
        />
      </div>

      {error && (
        <p className="text-xs text-destructive">! {error}</p>
      )}
      {success && (
        <p className="text-xs text-success-foreground">✓ {success}</p>
      )}

      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all active:scale-[0.98]"
        >
          {isPending ? "Cargando..." : "Pre-cargar"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
