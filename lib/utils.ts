import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Crea una firma visualmente robusta y difícil de falsificar por accidente.
 */
const generateSecurityToken = (nombre: string, hechas: number, total: number) => {
  const fecha = new Date().toLocaleDateString('es-ES');
  // Creamos un hash simple en Base64 para que parezca una clave de validación
  const rawString = `${nombre}|${hechas}/${total}|${fecha}`;
  return btoa(rawString).substring(0, 10).toUpperCase();
};

export const generateWhatsAppReport = (
  lecciones: any[], 
  completados: string[], 
  porcentajeTotal: number,
  nombreEstudiante: string
) => {
  const total = lecciones.length;
  const hechas = lecciones.filter(item => 
    completados.includes(`${item.categoryId}-${item.lesson.title}`)
  ).length;

  const token = generateSecurityToken(nombreEstudiante, hechas, total);
  const ahora = new Date().toLocaleString('es-ES', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const detallesLecciones = lecciones
    .filter(item => completados.includes(`${item.categoryId}-${item.lesson.title}`))
    .map(item => `   • ${item.lesson.title}`)
    .join('\n');

  return `*📜 REPORTE DE PROGRESO - SEMINARIO*
---------------------------------------
👤 *Estudiante:* ${nombreEstudiante.toUpperCase()}
📊 *Avance:* ${hechas}/${total} (${porcentajeTotal}%)
📅 *Generado:* ${ahora}

✅ *Lecciones Completadas:*
${detallesLecciones || "   (Ninguna lección terminada)"}

---------------------------------------
🔏 *FIRMA DIGITAL DE VALIDACIÓN:*
[ ${token}-${hechas}${total} ]
_Este mensaje es un documento oficial generado por el sistema de recuperación._`;
};


export const generateSingleQuizReport = (
  categoryName: string,
  lessonTitle: string,
  score: number,
  totalQuestions: number,
  percentage: number,
  nombreEstudiante: string
) => {

  const rawToken = `${nombreEstudiante}|${lessonTitle}|${percentage}`;
  const token = btoa(rawToken).substring(0, 10).toUpperCase();
  const fecha = new Date().toLocaleString('es-ES', { 
    day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' 
  });

  return `*🎯 RESULTADO DE EVALUACIÓN*
---------------------------------------
👤 *Estudiante:* ${nombreEstudiante.toUpperCase()}
📚 *Curso:* ${categoryName}
📖 *Lección:* ${lessonTitle}

✅ *Aciertos:* ${score}/${totalQuestions}
🔥 *Calificación:* ${percentage}%
📅 *Fecha:* ${fecha}

---------------------------------------
🔏 *FIRMA DE VALIDACIÓN:*
[ ${token}-${score}${totalQuestions} ]
_Este mensaje es un documento oficial generado por el sistema de recuperación._`;
};