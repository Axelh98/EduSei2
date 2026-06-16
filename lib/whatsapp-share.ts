// lib/whatsapp-share.ts
// Comparte un mensaje por WhatsApp con compatibilidad mejorada en iOS/Safari.
//
// Problema: en Safari iOS, `https://wa.me/?text=...` (sin número) a veces pierde
// el parámetro `text` en el redirect web → app. Para evitarlo:
//   1. En iOS usamos el esquema nativo `whatsapp://send?text=...`
//   2. Copiamos el mensaje al portapapeles como red de seguridad
//   3. En otros sistemas usamos `https://wa.me/?text=...` como antes

export interface ShareResult {
  copiedToClipboard: boolean
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false
  // iPadOS moderno se reporta como Mac — chequeamos también touch points
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  )
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === "undefined") return false
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // Fallback silencioso al método viejo
  }
  // Fallback con textarea (algunos navegadores viejos / contextos no-https)
  try {
    const ta = document.createElement("textarea")
    ta.value = text
    ta.style.position = "fixed"
    ta.style.opacity = "0"
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    const ok = document.execCommand("copy")
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

/**
 * Comparte un mensaje por WhatsApp.
 * - En iOS: usa `whatsapp://send?text=...` (preserva texto de forma confiable)
 * - En otros: usa `https://wa.me/?text=...`
 * - Siempre intenta copiar al portapapeles como red de seguridad.
 *
 * Importante: llamar SINCRÓNICAMENTE desde el handler del click del usuario
 * (sin `await` previo) para que Safari no bloquee la navegación.
 */
export function shareViaWhatsApp(mensaje: string): ShareResult {
  const encoded = encodeURIComponent(mensaje)
  const url = isIOS()
    ? `whatsapp://send?text=${encoded}`
    : `https://wa.me/?text=${encoded}`

  // Disparamos la copia al clipboard sin esperarla (no bloquea la navegación).
  // El resultado real llega después, pero para el flujo del usuario alcanza
  // con asumir que se copió (los navegadores modernos lo permiten en click handlers).
  let copiedToClipboard = false
  copyToClipboard(mensaje).then((ok) => {
    copiedToClipboard = ok
  })

  // Navegación: location.href en iOS evita el bloqueo de popups de Safari.
  // En desktop, queremos que abra en pestaña nueva.
  if (isIOS()) {
    window.location.href = url
  } else {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return { copiedToClipboard }
}