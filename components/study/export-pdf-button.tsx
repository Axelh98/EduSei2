// components/export-pdf-button.tsx
"use client"

import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExportPDFButtonProps {
  onClick: () => void
  isExporting: boolean
  className?: string
}

export function ExportPDFButton({ onClick, isExporting, className }: ExportPDFButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isExporting}
      variant="outline"
      className={className}
    >
      {isExporting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Generando PDF...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Exportar PDF
        </>
      )}
    </Button>
  )
}