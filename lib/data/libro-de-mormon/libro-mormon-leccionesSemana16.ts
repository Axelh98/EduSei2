import type { Lesson } from "@/lib/types"

// ══════════════════════════════════════════════════════════════════════════════════
// 📖 LIBRO DE MORMÓN - SEMANA 16: Lecciones completas y enriquecidas
// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024 para las 3 lecciones):
//   Lección 1 (Alma 9, Nelson):        ❌ el manual oficial ("Alma 9: Remember the Lord's Blessings") no cita a
//                                          ningún líder. Cita eliminada (no sustituida) por instrucción explícita.
//   Lección 2 (Alma 10-11, Holland):   ❌ el manual oficial ("Alma 10-11: 'According to the Spirit of the Lord'")
//                                          no cita a ningún líder. Cita eliminada.
//   Lección 3 (Repaso DD 9-10, Oaks):  🔧 URL corregida (apuntaba por error a la unidad de Mosíah 25-28) · ❌ la
//                                          lección de repaso correcta es un ejercicio de aplicación sin cita de
//                                          líder. Cita eliminada.
// Ninguna de las 3 citas originales de este archivo pudo verificarse. Siguiendo la instrucción explícita, se
// eliminó por completo la sección "enseñanza" en los tres casos, en vez de dejarla vacía o sustituirla.
// ══════════════════════════════════════════════════════════════════════════════════

export const leccionesResumidasLM_Semana16: Lesson[] = [
  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 1: ALMA 9
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-9",
    title: "Alma 9: El mensaje de Alma a los de Ammoníah sobre el arrepentimiento",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/25-alma-8-12/252-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El pueblo de Ammoníah se había endurecido contra el mensaje del Evangelio. A pesar de la advertencia de un ángel, Alma regresa a esta ciudad con un mensaje urgente de arrepentimiento. Alma les recuerda su identidad como pueblo del convenio y las bendiciones que habían recibido, las cuales ahora estaban en peligro debido a su apostasía. Esta lección explora la paciencia y la severidad del amor de Dios; a veces, el llamado al arrepentimiento es la mayor muestra de misericordia que podemos recibir, aunque sea difícil de escuchar."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 9:26",
            texto: "Y él vendrá al mundo para redimir a su pueblo; y tomará sobre sí las transgresiones de aquellos que crean en su nombre; y estos son los que tendrán vida eterna, y a nadie más le vendrá la salvación.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/9?lang=spa&id=p26#p26"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Alma nos enseña que el arrepentimiento requiere recordar quiénes somos y quién es Dios. Al reconocer nuestra dependencia total del Salvador, nos volvemos humildes y receptivos al Espíritu. El mensaje a los de Ammoníah es un recordatorio de que nunca es demasiado tarde para cambiar, siempre que nuestro corazón esté dispuesto a escuchar la voz de Dios."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué significa para ti que el arrepentimiento sea un 'privilegio' y no un peso?",
          "¿Cómo ayuda el recordar nuestro convenio con Dios a mantenernos fieles durante las pruebas?",
          "¿Qué podrías hacer esta semana para que tu proceso de arrepentimiento sea más 'diario' y constante?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Comprender la urgencia y el poder liberador del arrepentimiento.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 2: ALMA 10–11
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-10-11",
    title: "Alma 10–11: Amulek y Alma testifican ante Zeezrom",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/25-alma-8-12/253-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "En estos capítulos, conocemos a Amulek, un hombre de renombre que había sido llamado por una visión a recibir a Alma. Su testimonio ante Zeezrom, un abogado astuto que intentaba confundirlos, es un modelo de valentía y claridad. Amulek no solo testifica de la verdad, sino que declara audazmente el plan de redención y la realidad de la resurrección. Esta lección nos muestra que el Señor prepara a Sus siervos para los desafíos, y que cuando compartimos nuestro testimonio con integridad, el Espíritu Santo es quien da el verdadero impacto. La defensa de la verdad a menudo nos pone en situaciones incómodas, pero nos brinda la oportunidad de ser instrumentos en las manos de Dios."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 10:11",
            texto: "Porque he aquí, he sido llamado por Dios... y él ha bendecido mi casa, y me ha bendecido a mí, y a mis mujeres, y a mis hijos, y a mi padre, y a mis parientes...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/10?lang=spa&id=p11#p11"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "La interacción entre Alma, Amulek y Zeezrom demuestra que la verdad siempre prevalece sobre la astucia. El testimonio honesto y sencillo tiene más poder que el lenguaje sofisticado o la lógica mundana. Al igual que Amulek, todos hemos sido llamados a ser testigos del Salvador en nuestra propia esfera de influencia, confiando en que el Señor nos dará las palabras necesarias en el momento justo."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo te preparas para compartir tu testimonio cuando surge una oportunidad inesperada?",
          "¿Qué aprendes de la forma en que Amulek se mantuvo firme ante los intentos de Zeezrom de confundirlo?",
          "¿Cómo ayuda el recordar tu propio llamado personal a mantenerte fiel bajo presión?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "La valentía de testificar con claridad ante la oposición.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 3: REPASO DEL DOMINIO DE LA DOCTRINA 9 Y 10
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "repaso-dd-9-10",
    title: "Repaso del Dominio de la doctrina 9 y 10",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/25-alma-8-12/255-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Este repaso se centra en integrar las verdades del Dominio de la Doctrina como guías para nuestras decisiones actuales. El conocimiento de las Escrituras es una fuente constante de fortaleza y sabiduría divina. Al evaluar nuestra comprensión de los pasajes clave, estamos fortaleciendo nuestra capacidad de discernir entre la voz del mundo y la voz del Espíritu. Aprovechemos este tiempo para reflexionar sobre cómo estos principios nos protegen de la confusión y nos guían hacia el Salvador."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Mosíah 26:22",
            texto: "Porque he aquí, esta es mi iglesia; cualquiera que sea bautizado, será bautizado para arrepentimiento. Y a quien recibáis, ese será el que crea en mi nombre; y a este lo tendréis por libre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/26?lang=spa&id=p22#p22"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Al repasar, reafirmamos nuestro compromiso con la verdad. Que estas doctrinas no sean solo información, sino parte de quienes somos. Al vivir estos principios, nos convertimos en un faro para los demás y nos aseguramos de que nuestra fe esté edificada sobre el cimiento inamovible de Jesucristo."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo ha cambiado tu visión del Evangelio al repasar estos principios de manera constante?",
          "¿Qué pasaje de Dominio de la Doctrina ha sido un 'ancla' en tu vida recientemente?",
          "¿De qué manera puedes aplicar estas verdades para tomar mejores decisiones esta semana?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Reforzar el conocimiento para actuar con fe y discernimiento.",
    questions: []
  }
]