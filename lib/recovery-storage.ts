// lib/recovery-storage.ts
// Persiste el último plan de recuperación recibido por el alumno.
// Se guarda cuando visita /recuperar?data=xxx y se lee desde la home.

const KEY = "msi-recovery-plan"

export interface SavedRecoveryPlan {
  rawData: string       // el query param "data" completo
  savedAt: string       // ISO timestamp
}

export function saveRecoveryPlan(rawData: string) {
  if (typeof window === "undefined" || !rawData) return
  const plan: SavedRecoveryPlan = {
    rawData,
    savedAt: new Date().toISOString(),
  }
  localStorage.setItem(KEY, JSON.stringify(plan))
}

export function getRecoveryPlan(): SavedRecoveryPlan | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function clearRecoveryPlan() {
  if (typeof window === "undefined") return
  localStorage.removeItem(KEY)
}