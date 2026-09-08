import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Texto ───────────────────────────────────────────────────────────────────

/**
 * Minúsculas y sin diacríticos, para comparar lo que la gente escribe contra
 * lo que dice el contenido: "helaman" tiene que encontrar "Helamán".
 *
 * Estaba duplicada en components/editor/LessonSelector.tsx y en
 * OverridesBrowser.tsx; vive acá para que el buscador de lecciones use la
 * misma regla que el editor.
 */
export function normalizeText(s: string): string {
  return s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase()
}

/**
 * Convierte el `dateRange` de una semana ("9 al 15 de marzo", "30 de marzo al
 * 5 de abril") en un par de fechas del año indicado.
 *
 * Devuelve null cuando no hay fecha que parsear —hay semanas rotuladas
 * "Lecciones introductorias"—, y quien llame debe tratar ese null como
 * "no sé", nunca como "es esta".
 */
export function parseWeekDateRange(
  dateRange: string,
  year: number
): { start: Date; end: Date } | null {
  const MESES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ]
  const texto = normalizeText(dateRange)
  const mesIndex = (nombre: string) => MESES.indexOf(normalizeText(nombre))

  // "30 de marzo al 5 de abril" — cada extremo trae su propio mes.
  const dosMeses = texto.match(/(\d{1,2})\s+de\s+([a-z]+)\s+al?\s+(\d{1,2})\s+de\s+([a-z]+)/)
  if (dosMeses) {
    const [, d1, m1, d2, m2] = dosMeses
    const i1 = mesIndex(m1)
    const i2 = mesIndex(m2)
    if (i1 === -1 || i2 === -1) return null
    // Un rango que cruza diciembre-enero cae en el año siguiente.
    const yearFin = i2 < i1 ? year + 1 : year
    return { start: new Date(year, i1, +d1), end: new Date(yearFin, i2, +d2, 23, 59, 59) }
  }

  // "9 al 15 de marzo" — el mes es común a los dos extremos.
  const unMes = texto.match(/(\d{1,2})\s+al?\s+(\d{1,2})\s+de\s+([a-z]+)/)
  if (unMes) {
    const [, d1, d2, m] = unMes
    const i = mesIndex(m)
    if (i === -1) return null
    return { start: new Date(year, i, +d1), end: new Date(year, i, +d2, 23, 59, 59) }
  }

  return null
}

// ─── Nombre persistente del estudiante ───────────────────────────────────────

const STUDENT_NAME_KEY = 'msi-student-name'

export function getSavedStudentName(): string {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem(STUDENT_NAME_KEY) || ''
}

export function saveStudentName(nombre: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STUDENT_NAME_KEY, nombre.trim())
}

/**
 * Pide el nombre al usuario si no está guardado.
 * Lo guarda en localStorage para no volver a pedirlo.
 * Devuelve null si el usuario cancela o ingresa un nombre inválido.
 */
export function resolveStudentName(): string | null {
  const saved = getSavedStudentName()
  if (saved && saved.length >= 4) return saved

  const nombre = window.prompt(
    'Ingresá tu nombre completo para firmar el reporte.\n(Se recordará para la próxima vez)'
  )
  if (!nombre || nombre.trim().length < 4) {
    alert('Necesitás ingresar tu nombre completo (mínimo 4 caracteres).')
    return null
  }
  saveStudentName(nombre)
  return nombre.trim()
}

// ─── Firma A + C ──────────────────────────────────────────────────────────────

/**
 * Genera un código de verificación legible.
 * Formato: MSI-YYYYMMDD-INIC-XXX
 *   - MSI: prefijo fijo de la app
 *   - YYYYMMDD: fecha del reporte
 *   - INIC: hasta 4 iniciales del nombre (ej. "Juan Pérez" → "JP")
 *   - XXX: número derivado del contenido (hechas, total, nombre) — 3 dígitos
 *
 * No es criptográfico, pero es difícil de falsificar accidentalmente
 * y el maestro puede verificar que la fecha e iniciales coincidan.
 */
function generateVerificationCode(
  nombre: string,
  hechas: number,
  total: number
): string {
  const now = new Date()
  const fecha =
    String(now.getFullYear()) +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0')

  const iniciales = nombre
    .trim()
    .split(/\s+/)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 4)

  // Número derivado: suma de char codes del nombre + hechas * 7 + total * 13
  const charSum = nombre
    .split('')
    .reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const derived = ((charSum + hechas * 7 + total * 13) % 900) + 100 // siempre 3 dígitos (100-999)

  return `MSI-${fecha}-${iniciales}-${derived}`
}

/**
 * Timestamp legible para mostrar en el reporte.
 * Ej: "sábado 2 de mayo de 2025, 14:37 hs"
 */
function formatTimestamp(): string {
  return new Date().toLocaleString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }) + ' hs'
}

// ─── Detección de programa por categoryId ────────────────────────────────────
// ✅ CORREGIDO: Ahora incluye todas las variantes de Seminario

function getProgramLabel(categoryId: string): string {
  const seminarioIds = [
    'antiguo-testamento',
    'antiguo-testamento-2do-semestre',
    'nuevo-testamento',
    'libro-de-mormon',
    'doctrina-y-convenios-1',
    'doctrina-y-convenios-2',
  ]
  return seminarioIds.includes(categoryId) ? 'Seminario' : 'Instituto'
}

// ─── Reporte de recuperación (maestro asigna → estudiante completa) ───────────

/**
 * Mensaje que el MAESTRO envía al alumno con las lecciones asignadas.
 * categoryId determina si dice "Seminario" o "Instituto".
 */
export function generateAssignmentMessage(
  categoryId: string,
  categoryName: string,
  lessonTitles: string[],
  recoveryUrl: string
): string {
  const lista = lessonTitles.map((t) => `   📖 ${t}`).join('\n')

  return `📚 *LECCIONES ASIGNADAS A RECUPERAR*
━━━━━━━━━━━━━━━━━━━━━━━━━
📘 *Curso:* ${categoryName}

Hola, estas son las lecciones que necesitás completar para ponerte al día:

${lista}

🔗 *Tu plan de recuperación:*
${recoveryUrl}

_Ingresá a tu plan, leé el manual o los resúmenes, compartí tus reflexiones mediante el PDF y completá los cuestionarios. Cuando termines, enviame tus resultados._`
}

/**
 * Mensaje que el ESTUDIANTE envía al maestro con su progreso.
 */
export function generateWhatsAppReport(
  lecciones: any[],
  completados: string[],
  porcentajeTotal: number,
  nombreEstudiante: string
): string {
  const total = lecciones.length
  const hechas = lecciones.filter((item) =>
    completados.includes(`${item.categoryId}-${item.lesson.title}`)
  ).length
  const pendientes = total - hechas

  const codigo = generateVerificationCode(nombreEstudiante, hechas, total)
  const timestamp = formatTimestamp()

  // Separar completadas y pendientes con etiqueta de programa
  const completadasList = lecciones
    .filter((item) =>
      completados.includes(`${item.categoryId}-${item.lesson.title}`)
    )
    .map((item) => {
      const prog = getProgramLabel(item.categoryId)
      return `   ✅ [${prog}] ${item.lesson.title}`
    })
    .join('\n')

  const pendientesList = lecciones
    .filter(
      (item) =>
        !completados.includes(`${item.categoryId}-${item.lesson.title}`)
    )
    .map((item) => {
      const prog = getProgramLabel(item.categoryId)
      return `   ⏳ [${prog}] ${item.lesson.title}`
    })
    .join('\n')

  const estadoEmoji = porcentajeTotal === 100 ? '🏆' : porcentajeTotal >= 60 ? '📈' : '📋'

  return `${estadoEmoji} *REPORTE DE PROGRESO*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Estudiante:* ${nombreEstudiante.toUpperCase()}
📊 *Avance:* ${hechas}/${total} lecciones (${porcentajeTotal}%)
${pendientes > 0 ? `⏳ *Pendientes:* ${pendientes}` : '🎉 *¡Todas las lecciones completadas!*'}

${completadasList.length > 0 ? `✅ *Completadas:*\n${completadasList}` : ''}
${pendientesList.length > 0 ? `\n⏳ *Pendientes:*\n${pendientesList}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 *Enviado:* ${timestamp}
🔏 *Código de verificación:* \`${codigo}\`
_Mi Seminario e Instituto_`
}

/**
 * Reporte de un quiz individual (al terminar una lección).
 */
export function generateSingleQuizReport(
  categoryName: string,
  lessonTitle: string,
  score: number,
  totalQuestions: number,
  percentage: number,
  nombreEstudiante: string
): string {
  const codigo = generateVerificationCode(nombreEstudiante, score, totalQuestions)
  const timestamp = formatTimestamp()

  const resultEmoji =
    percentage === 100 ? '🏆' : percentage >= 80 ? '⭐' : percentage >= 60 ? '✅' : '📖'
  const resultLabel =
    percentage === 100
      ? '¡Perfecto!'
      : percentage >= 80
      ? 'Excelente'
      : percentage >= 60
      ? 'Aprobado'
      : 'Necesita refuerzo'

  return `${resultEmoji} *RESULTADO DE EVALUACIÓN*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Estudiante:* ${nombreEstudiante.toUpperCase()}
📚 *Curso:* ${categoryName}
📖 *Lección:* ${lessonTitle}

📊 *Resultado:* ${resultLabel}
✅ *Aciertos:* ${score}/${totalQuestions} preguntas
🔥 *Calificación:* ${percentage}%

━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 *Enviado:* ${timestamp}
🔏 *Código de verificación:* \`${codigo}\`
_Mi Seminario e Instituto_`
}