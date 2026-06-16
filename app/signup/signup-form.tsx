// app/signup/signup-form.tsx
"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap, KeyRound } from "lucide-react"
import { signupWithInvite } from "@/actions/auth"

interface Props {
  initialInvite: string
}

export function SignupForm({ initialInvite }: Props) {
  const router = useRouter()
  const [mode, setMode]              = useState<"password" | "magic">("password")
  const [error, setError]            = useState<string | null>(null)
  const [success, setSuccess]        = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null); setSuccess(null)

    const formData = new FormData(e.currentTarget)
    const params = {
      email:      String(formData.get("email") ?? "").trim(),
      password:   String(formData.get("password") ?? ""),
      fullName:   String(formData.get("full_name") ?? "").trim(),
      inviteCode: String(formData.get("invite_code") ?? "").trim(),
      mode,
    }

    startTransition(async () => {
      const result = await signupWithInvite(params)
      console.log("[SignupForm] Resultado de signupWithInvite:", result)

      if (!result) {
        setError("El servidor no respondió. Revisá la consola del servidor.")
        return
      }
      if ("error" in result && result.error) {
        setError(result.error)
        return
      }
      if ("success" in result && result.success) {
        setSuccess(result.success)
        // Si done:true, el signup con password ya enroló al usuario
        // y tiene sesión activa — navegamos al inicio.
        if ("done" in result && result.done) {
          setTimeout(() => router.push("/"), 1200)
        }
      }
    })
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-sm px-8 py-10 flex flex-col gap-7">

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-foreground tracking-tight">
              Crear cuenta
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Para estudiantes con código de invitación
            </p>
          </div>
        </div>

        {/* Tabs igual que /login */}
        <div className="flex border border-border rounded-lg overflow-hidden bg-muted/50 p-1 gap-1">
          {(["password", "magic"] as const).map(m => (
            <button key={m} type="button" role="tab" aria-selected={mode === m}
              onClick={() => { setMode(m); setError(null); setSuccess(null) }}
              className={`flex-1 py-1.5 text-sm font-semibold rounded-md transition-all ${
                mode === m
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              {m === "password" ? "Contraseña" : "Magic link"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <Field label="Código de invitación" required>
            <div className="relative">
              <KeyRound className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
              <input
                name="invite_code"
                type="text"
                defaultValue={initialInvite}
                required
                placeholder="abc12345"
                className="w-full pl-9 pr-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground font-mono uppercase tracking-wider placeholder:text-muted-foreground/40 placeholder:font-sans outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Tu maestro te dio este código en clase o por mensaje.
            </p>
          </Field>

          <Field label="Nombre completo" required>
            <input
              name="full_name"
              type="text"
              required
              autoComplete="name"
              minLength={4}
              placeholder="Juan Pérez"
              className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </Field>

          <Field label="Email" required>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="estudiante@ejemplo.com"
              className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </Field>

          {mode === "password" && (
            <Field label="Contraseña" required>
              <input
                name="password"
                type="password"
                required
                autoComplete="new-password"
                minLength={6}
                placeholder="Mínimo 6 caracteres"
                className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </Field>
          )}

          {error && (
            <div className="flex items-center gap-2 px-3 py-2.5 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive" role="alert">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex-shrink-0">!</span>
              {error}
            </div>
          )}

          {success && (
            <div className="px-3 py-2.5 bg-success/10 border border-success/20 rounded-lg text-sm text-success-foreground" role="status">
              ✓ {success}
            </div>
          )}

          <button type="submit" disabled={isPending}
            className="w-full py-3 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] mt-1">
            {isPending ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          ¿Ya tenés cuenta?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-secondary ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}
