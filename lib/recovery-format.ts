// lib/recovery-format.ts
// Maneja AMBOS formatos del payload de recuperación:
//
//   Formato VIEJO (texto plano):
//     "antiguo-testamento-1:leccion-1,leccion-2|libro-de-mormon-1:leccion-5"
//
//   Formato NUEVO (JSON en Base64, prefijado con "v2:"):
//     "v2:eyJsZXNzb25zIjpbey4uLn19"  → { lessons: [{ categoryId, lessonId, overrideId? }] }
//
// El prefijo "v2:" permite detectar el formato sin ambigüedad.
// Los links viejos siguen funcionando exactamente igual.

export interface RecoveryItem {
  categoryId:  string
  lessonId:    string
  overrideId?: string   // solo en formato nuevo
}

// ── Encode (siempre produce formato nuevo) ────────────────────

export function encodeRecoveryPayload(items: RecoveryItem[]): string {
  const json = JSON.stringify({ lessons: items })
  const b64  = typeof window !== "undefined"
    ? btoa(unescape(encodeURIComponent(json)))
    : Buffer.from(json).toString("base64")
  return `v2:${b64}`
}

// ── Decode (acepta ambos formatos) ────────────────────────────

export function decodeRecoveryPayload(raw: string): RecoveryItem[] {
  if (!raw) return []

  // Formato nuevo
  if (raw.startsWith("v2:")) {
    try {
      const b64  = raw.slice(3)
      const json = typeof window !== "undefined"
        ? decodeURIComponent(escape(atob(b64)))
        : Buffer.from(b64, "base64").toString("utf-8")
      const parsed = JSON.parse(json) as { lessons: RecoveryItem[] }
      return Array.isArray(parsed.lessons) ? parsed.lessons : []
    } catch {
      return []
    }
  }

  // Formato viejo: "cat1:les1,les2|cat2:les3"
  return decodeURIComponent(raw)
    .split("|")
    .filter(Boolean)
    .flatMap(group => {
      const [categoryId, lessonIdsRaw] = group.split(":")
      if (!categoryId || !lessonIdsRaw) return []
      return lessonIdsRaw.split(",").filter(Boolean).map(lessonId => ({
        categoryId,
        lessonId,
      }))
    })
}

// ── Encode viejo (para mantener el share sin overrides igual) ─
// El generateAssignmentMessage existente sigue usando el formato viejo.
// Solo cuando hay overrides se usa el nuevo.

export function encodeOldFormat(categoryId: string, lessonIds: string[]): string {
  return `${categoryId}:${lessonIds.join(",")}`
}

export function hasOverrides(items: RecoveryItem[]): boolean {
  return items.some(i => !!i.overrideId)
}