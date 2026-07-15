// app/admin/recuperaciones/recuperaciones-client.tsx
"use client"

import { useRef, useState } from "react"
import { Upload, FileCheck2, Download, Loader2, AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useGenerarRecuperaciones } from "@/hooks/use-generar-recuperaciones"

export function RecuperacionesClient() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { cargando, generando, datos, error, cargarCSV, generarYDescargar, limpiar } = useGenerarRecuperaciones()
  const [estacasElegidas, setEstacasElegidas] = useState<Set<string>>(new Set())

  function handleFile(file: File | undefined) {
    if (!file) return
    setEstacasElegidas(new Set())
    cargarCSV(file)
  }

  function toggleEstaca(estaca: string) {
    setEstacasElegidas((prev) => {
      const next = new Set(prev)
      if (next.has(estaca)) next.delete(estaca)
      else next.add(estaca)
      return next
    })
  }

  const estacasFiltro = estacasElegidas.size > 0 ? Array.from(estacasElegidas) : undefined

  return (
    <div className="space-y-6">
      {/* ── Carga del CSV ─────────────────────────────────────────── */}
      <Card>
        <CardContent className="p-5 sm:p-6">
          {!datos ? (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={cargando}
              className="w-full flex flex-col items-center gap-2 py-10 border-2 border-dashed border-border rounded-xl hover:border-primary/50 hover:bg-muted/30 transition-colors disabled:opacity-60"
            >
              {cargando ? (
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              ) : (
                <Upload className="h-8 w-8 text-muted-foreground/60" />
              )}
              <p className="text-sm font-semibold text-foreground">
                {cargando ? "Leyendo CSV…" : "Subir ListadoRecuperaciones.csv"}
              </p>
              <p className="text-xs text-muted-foreground">
                Columnas esperadas: Estaca, Clase, Nombre, Fecha, Leccion, Tipo, LinkLeccion, % Asistencia
              </p>
              <input
                ref={inputRef}
                type="file"
                accept=".csv"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
            </button>
          ) : (
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <FileCheck2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {datos.totalFilas} filas · {datos.estacas.length} estaca(s) detectadas
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {datos.estacas.join(", ")}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={limpiar}>
                <X className="h-4 w-4 mr-1" />
                Quitar archivo
              </Button>
            </div>
          )}

          {error && (
            <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Selección de estacas + generación ────────────────────── */}
      {datos && (
        <>
          <Card>
            <CardContent className="p-5 sm:p-6">
              <p className="text-sm font-semibold text-foreground mb-3">
                Estacas a incluir (dejá todas sin marcar para incluirlas todas)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {datos.estacas.map((estaca) => (
                  <label
                    key={estaca}
                    className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-border hover:bg-muted/30 cursor-pointer"
                  >
                    <Checkbox
                      checked={estacasElegidas.has(estaca)}
                      onCheckedChange={() => toggleEstaca(estaca)}
                    />
                    {estaca}
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="barrio">
            <TabsList>
              <TabsTrigger value="barrio">Por Barrio</TabsTrigger>
              <TabsTrigger value="fecha">Por Fecha</TabsTrigger>
            </TabsList>

            <TabsContent value="barrio" className="mt-4">
              <Card>
                <CardContent className="p-5 sm:p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Un PDF por clase</p>
                    <p className="text-xs text-muted-foreground max-w-md">
                      Página de resumen por alumno con link al detalle de sus lecciones pendientes.
                    </p>
                  </div>
                  <Button onClick={() => generarYDescargar("barrio", estacasFiltro)} disabled={generando}>
                    {generando ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Download className="h-4 w-4 mr-2" />}
                    Descargar .zip
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fecha" className="mt-4">
              <Card>
                <CardContent className="p-5 sm:p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Reporte maestro + por clase</p>
                    <p className="text-xs text-muted-foreground max-w-md">
                      Índice por Clase y Fecha con cantidad de faltas, más el detalle de cada barrio.
                    </p>
                  </div>
                  <Button onClick={() => generarYDescargar("fecha", estacasFiltro)} disabled={generando}>
                    {generando ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Download className="h-4 w-4 mr-2" />}
                    Descargar .zip
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}