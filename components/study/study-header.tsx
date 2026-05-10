// components/study/study-header.tsx
"use client"

import { ArrowLeft, Download, Loader2 } from "lucide-react"
import Link from "next/link"

interface StudyHeaderProps {
  backUrl: string
  recoveryData?: string
  isExporting: boolean
  onExport: () => void
}

export function StudyHeader({ backUrl, recoveryData, isExporting, onExport }: StudyHeaderProps) {
  return (
    <div className="sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur-md px-4 py-3">
      <div className="mx-auto max-w-2xl flex items-center justify-between">
        <Link
          href={backUrl}
          className="flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="h-4 w-4" />
          {recoveryData ? "Mi plan" : "Volver"}
        </Link>

        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
          Repaso de estudio
        </span>

        <button
          onClick={onExport}
          disabled={isExporting}
          className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-muted disabled:opacity-50"
        >
          {isExporting ? (
            <>
              <Loader2 className="h-3 w-3 animate-spin" />
              Exportando...
            </>
          ) : (
            <>
              <Download className="h-3 w-3" />
              Exportar PDF
            </>
          )}
        </button>
      </div>
    </div>
  )
}