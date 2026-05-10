// components/recovery/recovery-dashboard.tsx
"use client"

import { CheckCircle2, Share2 } from "lucide-react"
import { ProgressRing } from "./progress-ring"

interface RecoveryDashboardProps {
  percentage: number
  done: number
  total: number
  pendingCount: number
  allDone: boolean
  onShare: () => void
}

export function RecoveryDashboard({
  percentage,
  done,
  total,
  pendingCount,
  allDone,
  onShare,
}: RecoveryDashboardProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-6 p-6">
        <ProgressRing percentage={percentage} done={done} total={total} />

        <div className="flex flex-1 flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-muted/50 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                Pendientes
              </p>
              <p className="mt-0.5 text-2xl font-bold text-foreground">{pendingCount}</p>
            </div>
            <div className="rounded-xl bg-green-500/8 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-green-700/60">
                Completadas
              </p>
              <p className="mt-0.5 text-2xl font-bold text-green-600">{done}</p>
            </div>
          </div>

          <button
            onClick={onShare}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-sm transition-all hover:brightness-105 active:scale-[0.98]"
          >
            <Share2 className="h-4 w-4" />
            Enviar reporte
          </button>
        </div>
      </div>

      {allDone && (
        <div className="flex items-center gap-2 border-t border-green-500/20 bg-green-500/5 px-6 py-3">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
          <p className="text-sm font-semibold text-green-700">
            ¡Completaste todas las lecciones! Enviá tu reporte al maestro.
          </p>
        </div>
      )}
    </div>
  )
}