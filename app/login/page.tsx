"use client"
// app/login/page.tsx

import { useState, useTransition } from "react"
import { BookOpen } from "lucide-react"
import { loginWithEmail, loginWithMagicLink } from "@/actions/auth"

export default function LoginPage() {
  const [mode, setMode]              = useState<"password" | "magic">("password")
  const [error, setError]            = useState<string | null>(null)
  const [success, setSuccess]        = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null); setSuccess(null)
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const action = mode === "password" ? loginWithEmail : loginWithMagicLink
      const result = await action(formData)
      if (result?.error) {
        setError(result.error)
      } else if (result && "success" in result) {
        setSuccess(result.success ?? null)
      }
    })
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-sm px-8 py-10 flex flex-col gap-7">

        {/* Logo + título */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-foreground tracking-tight">Portal de Maestros</h1>
            <p className="mt-1 text-sm text-muted-foreground">Mi Seminario e Instituto</p>
          </div>
        </div>

        {/* Tabs */}
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

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input id="email" name="email" type="email" required autoComplete="email"
              placeholder="maestro@iglesia.org"
              className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>

          {mode === "password" && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                Contraseña
              </label>
              <input id="password" name="password" type="password" required autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
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
            {isPending ? "Ingresando..." : mode === "password" ? "Ingresar" : "Enviar magic link"}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          Solo los maestros autorizados pueden acceder.<br />
          Si necesitás una cuenta, contactá al administrador.
        </p>
      </div>
    </div>
  )
}