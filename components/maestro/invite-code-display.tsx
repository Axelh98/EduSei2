// components/maestro/invite-code-display.tsx
"use client"

import { useState, useTransition } from "react"
import { Copy, RefreshCw, Check, Share2, KeyRound } from "lucide-react"
import { regenerarCodigo } from "@/actions/clases"

interface Props {
  classId: string
  code:    string
}

export function InviteCodeDisplay({ classId, code: initialCode }: Props) {
  const [code, setCode]               = useState(initialCode)
  const [copied, setCopied]           = useState(false)
  const [confirmRegen, setConfirmRegen] = useState(false)
  const [isPending, startTransition]  = useTransition()

  const inviteUrl = typeof window !== "undefined"
    ? `${window.location.origin}/signup?invite=${code}`
    : `/signup?invite=${code}`

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // noop
    }
  }

  function handleRegenerate() {
    if (!confirmRegen) { setConfirmRegen(true); return }
    startTransition(async () => {
      const result = await regenerarCodigo(classId)
      if (result && "code" in result && result.code) {
        setCode(result.code)
      }
      setConfirmRegen(false)
    })
  }

  return (
    <section className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-muted/30">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0">
          <KeyRound className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-foreground">Código de invitación</h2>
          <p className="text-xs text-muted-foreground">
            Compartilo con tus alumnos para que se enrolen en la clase.
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {/* Código */}
        <div className="flex items-center gap-3">
          <div className="flex-1 px-4 py-3 bg-muted/40 border border-border rounded-xl font-mono text-2xl font-bold tracking-[0.2em] text-foreground text-center">
            {code.toUpperCase()}
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(code)}
            title="Copiar código"
            className="flex items-center justify-center w-11 h-11 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        {/* Link de invitación */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-xs text-muted-foreground font-mono truncate">
            {inviteUrl}
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(inviteUrl)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <Share2 className="h-3.5 w-3.5" />
            Copiar link
          </button>
        </div>

        {/* Regenerar */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground flex-1">
            Si el código se filtró, regeneralo. El anterior dejará de funcionar.
          </p>
          <button
            type="button"
            onClick={handleRegenerate}
            disabled={isPending}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${
              confirmRegen
                ? "bg-destructive text-destructive-foreground border-destructive"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isPending ? "animate-spin" : ""}`} />
            {isPending ? "Regenerando..." : confirmRegen ? "¿Confirmar?" : "Regenerar"}
          </button>
          {confirmRegen && !isPending && (
            <button
              type="button"
              onClick={() => setConfirmRegen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
