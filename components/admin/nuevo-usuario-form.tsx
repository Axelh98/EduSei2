// components/admin/nuevo-usuario-form.tsx
"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { UserPlus, Mail, KeyRound, Send } from "lucide-react"
import { crearUsuario, invitarUsuario, type Profile, type UserRole } from "@/actions/usuarios"
import { ROLE_LABELS } from "@/components/shared/role-badge"

type Mode = "password" | "magic" | "invite"

interface Props {
  supervisores: Profile[]
}

const inputClass = "w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
const labelClass = "text-[11px] font-bold uppercase tracking-widest text-muted-foreground"

const MODE_INFO: Record<Mode, { icon: React.ElementType; label: string; desc: string }> = {
  password: {
    icon: KeyRound,
    label: "Con contraseña",
    desc:  "Vos definís una contraseña inicial. El usuario puede iniciar sesión inmediatamente.",
  },
  magic: {
    icon: Send,
    label: "Magic link",
    desc:  "Creamos la cuenta y mandamos un link al email para que entre y defina su contraseña.",
  },
  invite: {
    icon: Mail,
    label: "Invitación por email",
    desc:  "Mandamos un email de invitación oficial de Supabase. El usuario completa el perfil al loguearse.",
  },
}

export function NuevoUsuarioForm({ supervisores }: Props) {
  const router = useRouter()
  const [mode, setMode]       = useState<Mode>("password")
  const [error, setError]     = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null); setSuccess(null)
    const formData = new FormData(e.currentTarget)

    // En modo magic no mandamos password
    if (mode !== "password") {
      formData.delete("password")
    }

    startTransition(async () => {
      const result = mode === "invite"
        ? await invitarUsuario(formData)
        : await crearUsuario(formData)

      if (result?.error) setError(result.error)
      else if (result?.success) {
        setSuccess(result.success)
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => router.push("/admin/usuarios"), 1500)
      }
    })
  }

  const ModeIcon = MODE_INFO[mode].icon

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Selector de modo */}
      <div className="flex flex-col gap-3">
        <p className={labelClass}>Modo de creación</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {(Object.keys(MODE_INFO) as Mode[]).map(m => {
            const Icon = MODE_INFO[m].icon
            return (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setError(null); setSuccess(null) }}
                className={`flex flex-col items-start gap-1 p-3 text-left rounded-xl border transition-all ${
                  mode === m
                    ? "bg-primary/5 border-primary text-foreground"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <Icon className={`h-4 w-4 ${mode === m ? "text-primary" : ""}`} />
                <span className="text-sm font-bold">{MODE_INFO[m].label}</span>
              </button>
            )
          })}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
          <ModeIcon className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-primary" />
          {MODE_INFO[mode].desc}
        </p>
      </div>

      {/* Datos base */}
      <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5">

        <div className="flex flex-col gap-1.5">
          <label htmlFor="full_name" className={labelClass}>Nombre completo *</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            minLength={4}
            placeholder="Juan Pérez"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="off"
            placeholder="usuario@ejemplo.com"
            className={inputClass}
          />
        </div>

        {mode === "password" && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className={labelClass}>Contraseña inicial *</label>
            <input
              id="password"
              name="password"
              type="text"
              required
              autoComplete="off"
              minLength={6}
              placeholder="Mínimo 6 caracteres"
              className={`${inputClass} font-mono`}
            />
            <p className="text-[11px] text-muted-foreground">
              Compartila con el usuario por un canal seguro. Va a poder cambiarla después.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="role" className={labelClass}>Rol</label>
          <div className="relative">
            <select
              id="role"
              name="role"
              defaultValue="estudiante"
              className={`${inputClass} appearance-none pr-8 cursor-pointer`}
            >
              {(Object.entries(ROLE_LABELS) as [UserRole, string][]).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
          </div>
        </div>

        {mode !== "invite" && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="supervisor_id" className={labelClass}>
              Supervisor inicial{" "}
              <span className="font-normal normal-case tracking-normal italic text-muted-foreground/60">
                (opcional)
              </span>
            </label>
            <div className="relative">
              <select
                id="supervisor_id"
                name="supervisor_id"
                defaultValue=""
                className={`${inputClass} appearance-none pr-8 cursor-pointer`}
              >
                <option value="">Sin supervisor</option>
                {supervisores
                  .filter(s => s.role !== "estudiante")
                  .map(s => (
                    <option key={s.id} value={s.id}>
                      {s.full_name ?? "Sin nombre"} — {ROLE_LABELS[s.role]}
                    </option>
                  ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Quien va a poder ver y gestionar a este usuario. Podés asignar más supervisores después.
            </p>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 px-3 py-2.5 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
          <span className="font-bold">!</span> {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 px-3 py-2.5 bg-success/10 border border-success/20 rounded-lg text-sm text-success-foreground">
          ✓ {success}
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-all active:scale-[0.98]"
        >
          <UserPlus className="h-4 w-4" />
          {isPending
            ? "Creando..."
            : mode === "invite" ? "Enviar invitación" : "Crear usuario"}
        </button>
      </div>
    </form>
  )
}
