// components/recovery/progress-ring.tsx

interface ProgressRingProps {
  percentage: number
  done: number
  total: number
}

export function ProgressRing({ percentage, done, total }: ProgressRingProps) {
  const r      = 54
  const circ   = 2 * Math.PI * r
  const offset = circ - (percentage / 100) * circ
  const color  =
    percentage === 100 ? "#22c55e" :
    percentage >= 60   ? "#378ADD" :
                         "#BA7517"

  // Mensaje emocional corto según progreso
  const stateLabel =
    percentage === 100 ? "¡Completo!" :
    percentage >= 60   ? "Buen ritmo" :
    percentage > 0     ? "Seguí, podés" :
                         "Empecemos"

  return (
    <div className="relative flex items-center justify-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        {/* Track */}
        <circle
          cx="70" cy="70" r={r}
          fill="none" stroke="currentColor" strokeWidth="9"
          className="text-muted/50"
        />
        {/* Progress */}
        <circle
          cx="70" cy="70" r={r}
          fill="none" stroke={color} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>

      {/* Contenido interior */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="tabular-nums text-3xl font-bold leading-none text-foreground">
          {percentage}
          <span className="text-lg font-medium text-muted-foreground">%</span>
        </span>
        <span className="mt-1 text-[10px] font-black uppercase tracking-wider" style={{ color }}>
          {stateLabel}
        </span>
        <span className="mt-0.5 text-[10px] tabular-nums text-muted-foreground">
          {done}/{total}
        </span>
      </div>
    </div>
  )
}