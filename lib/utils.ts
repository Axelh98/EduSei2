import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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

function getProgramLabel(categoryId: string): string {
  const seminarioIds = [
    'antiguo-testamento',
    'nuevo-testamento',
    'libro-de-mormon',
    'doctrina-y-convenios',
    'Bloques',
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
  const programa = getProgramLabel(categoryId)
  const lista = lessonTitles.map((t) => `   📖 ${t}`).join('\n')

  return `📚 *LECCIONES ASIGNADAS — ${programa.toUpperCase()}*
━━━━━━━━━━━━━━━━━━━━━━━━━
📘 *Curso:* ${categoryName}

Hola, estas son las lecciones que necesitás completar para ponerte al día:

${lista}

🔗 *Tu plan de recuperación:*
${recoveryUrl}

_Ingresá al link, leé los resúmenes, hacé los quizzes y enviame tu reporte cuando termines._`
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