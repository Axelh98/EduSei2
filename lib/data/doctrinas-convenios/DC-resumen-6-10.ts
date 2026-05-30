/**
 * DOCTRINA Y CONVENIOS - SEMINARIO 2025
 * SECCIONES ENRIQUECIDAS: SEMANAS 6–10
 *
 * Fuente: Manual del Maestro de Seminario de DC, 2025
 * https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025
 */

import type { Lesson } from "@/lib/types"

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 6 — 7 al 13 de Abril
// Lecciones: D&C 35 (2ª parte), D&C 36, D&C 37–38 Parte 1, D&C 37–38 Parte 2,
//            Adquirir conocimiento espiritual Parte 1
// ═══════════════════════════════════════════════════════════════════════════════

export const semana6Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 49 — D&C 35 (continuación semana 6)
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "49-dc-35",
    title: "Doctrina y Convenios 35",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/119-doctrine-and-covenants-35?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El llamamiento de Sidney Rigdon para preparar el camino",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Sidney Rigdon era un brillante ministro metodista reformado que lideraba una congregación numerosa en Mentor, Ohio. Cuando Parley P. Pratt le presentó el evangelio restaurado y el Libro de Mormón, Rigdon lo estudió con profundidad y se bautizó. En diciembre de 1830, viajó a Nueva York para conocer al profeta José Smith, y el Señor le reveló a través de D&C 35 su llamamiento específico: ser escribano del profeta y ayudar en la Traducción de José Smith de la Biblia. El Salvador le describió a Sidney como uno que 'prepara el camino' para la Restauración. Esta lección explora cómo el Señor prepara a personas específicas con dones específicos para avanzar Su obra, y cómo Sidney, a pesar de tener que dejar su congregación y posición, respondió con fe y se convirtió en uno de los principales colaboradores del profeta en los primeros años de la Restauración."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 35:3–4",
            texto: "Yo soy Jesucristo, el Hijo de Dios, que fui crucificado por los pecados del mundo, para que todos los que crean en mi nombre puedan tener vida eterna. He aquí, en verdad, en verdad os digo que vuestra responsabilidad es dar testimonio de las cosas que habéis visto y oído.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/35?lang=spa&id=p3-p4#p3"
          },
          {
            referencia: "Doctrina y Convenios 35:13–14",
            texto: "Y los débiles confundirán a los sabios, y los pequeños confundirán a los grandes. Y en el día de su ira el Señor dará luz a los que buscan con honestidad de corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/35?lang=spa&id=p13-p14#p13"
          },
          {
            referencia: "Doctrina y Convenios 35:20–21",
            texto: "Y un mandamiento te doy, que irás a Ohio; y allí se te darán mis leyes; y serás dotado de poder de lo alto para llevar a cabo la obra que te he mandado.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/35?lang=spa&id=p20-p21#p20"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dallin H. Oaks",
        fuente: "Liahona, noviembre de 2012, pág. 94",
        texto: "El Señor no llama a los calificados; califica a los llamados. Cada persona llamada al servicio tiene la promesa de que el Señor le dará los dones y el poder que necesita para cumplir ese llamamiento con fidelidad."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 35 muestra que el Señor prepara instrumentos específicos para avanzar Su obra en momentos específicos. Sidney Rigdon fue preparado durante años como predicador elocuente antes de ser llamado a ser el escribano del profeta. Sus dones naturales —educación, oratoria, escritura— se convirtieron en herramientas del Señor. Este principio es vigente: nuestros talentos y experiencias, aunque parezcan mundanos, pueden convertirse en instrumentos de la obra del Señor cuando los ponemos a Su disposición."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué dones y habilidades específicas preparó el Señor en Sidney Rigdon para que pudiera cumplir su llamamiento?",
          "¿Cómo puede el Señor usar los dones y talentos que tú tienes para avanzar Su obra?",
          "¿Qué significa para ti que el Señor diga que 'los débiles confundirán a los sabios'?",
          "¿De qué manera el llamado de Sidney Rigdon ilustra que el Señor tiene un plan específico para cada persona?",
          "¿Qué habilidades tuyas estás poniendo al servicio del Señor actualmente?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 50 — D&C 36
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "50-dc-36",
    title: "Doctrina y Convenios 36",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/120-doctrine-and-covenants-36?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Revelación a Edward Partridge sobre el arrepentimiento y la predicación",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Edward Partridge era un comerciante honrado y de buena reputación de Painesville, Ohio. Cuando escuchó el mensaje del evangelio de boca de Parley P. Pratt, decidió viajar a Nueva York para conocer al profeta José Smith y determinar por sí mismo si era un profeta verdadero. Su encuentro con José fue convincente, y solicitó el bautismo. A través de D&C 36, el Señor reconoció la autenticidad de la conversión de Partridge, le mandó predicar arrepentimiento y lo llamó a dedicar su tiempo y talentos a la obra del Señor. Partridge se convertiría en el primer obispo de la Iglesia. Esta revelación personal ilustra cómo el Señor ve el corazón de las personas, reconoce su sinceridad y les da llamamientos específicos en la medida en que se vuelven al Señor con corazón honesto."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 36:1–2",
            texto: "Así dice el Señor Dios, el Poderoso, que ha llamado a tu hermano Joseph por mi nombre, y le ha dado las llaves del reino para traer a cabo mi obra: He aquí, en verdad os digo que perdonaré todos tus pecados; busca pues el arrepentimiento... y recibirás el Espíritu Santo mediante la imposición de manos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/36?lang=spa&id=p1-p2#p1"
          },
          {
            referencia: "Doctrina y Convenios 36:5–6",
            texto: "Declara arrepentimiento. Declara con esfuerzo, porque el reino de los cielos está cerca; ¡no abandones el mundo que perece! Porque he aquí, el cielo está furioso y el fuego del Señor está a punto de venir sobre la tierra, por lo que gritad arrepentimiento.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/36?lang=spa&id=p5-p6#p5"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "Liahona, noviembre de 2004, pág. 29",
        texto: "Uno de los actos más hermosos del Salvador fue el de ver el potencial eterno en las personas cuando nadie más lo veía. Él llama a personas que el mundo podría considerar ordinarias y las convierte en instrumentos extraordinarios de Su obra."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 36 ilustra que el Señor ve el corazón de cada persona y responde a la sinceridad con promesas personales y llamamientos específicos. Edward Partridge era un comerciante que nadie habría identificado como futuro obispo de la Iglesia, pero el Señor vio en él exactamente lo que se necesitaba. La promesa de D&C 36 es para todos: quienes buscan el arrepentimiento y se abren al evangelio recibirán el Espíritu Santo, sus pecados serán perdonados y serán llamados a avanzar la obra del Señor."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué evidencias de la sinceridad de Edward Partridge aparecen en la historia de su conversión?",
          "¿Cómo responde el Señor a la honestidad del corazón, según D&C 36:1–2?",
          "¿Qué significa el mandamiento 'declara arrepentimiento' para un joven hoy en día?",
          "¿Cuál es la urgencia que el Señor expresa en D&C 36:5–6, y cómo aplica eso hoy?",
          "¿Qué te enseña la historia de Partridge sobre cómo el Señor ve tu potencial?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 51 — D&C 37–38 Parte 1: Congregarse en Ohio
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "51-dc-37-38-parte-1",
    title: "Doctrina y Convenios 37–38, Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/161-doctrine-and-covenants-37-38?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Congregarse en Ohio — el poder de reunirse en el Salvador",
    secciones: [
      {
        tipo: "contexto",
        contenido: "En diciembre de 1830, los miembros de la Iglesia en Nueva York sufrían gran persecución. Sus enemigos amenazaban vidas de líderes y se reunían secretamente para planificar su destrucción (D&C 38:13, 28–29). Cuando Sidney Rigdon llegó a Nueva York trayendo noticias del éxito del evangelio en Ohio, el Señor dio a José Smith la revelación de D&C 37: el mandamiento de congregarse en Ohio. Era la primera vez en esta dispensación que el Señor mandaba a Su pueblo a reunirse en un lugar físico. Los santos de Nueva York tendrían que dejar sus hogares, propiedades y relaciones para obedecer. D&C 37–38 describe tanto el mandamiento como las razones detrás de él: en la unidad hay poder que el enemigo no puede vencer, así como un puñado de palitos unidos resulta imposible de romper. El Señor prometía dar Sus leyes y Su poder a quienes se congregaran obedientemente."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 37:1–4",
            texto: "He aquí, os digo que es conveniente que mi siervo Joseph Smith, Jr., se traslade a Ohio y que la Iglesia también se traslade... y antes de la primavera el Señor ordenará la obra que debe hacerse.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/37?lang=spa&id=p1-p4#p1"
          },
          {
            referencia: "Doctrina y Convenios 38:7–9",
            texto: "Yo soy el que habló, y el mundo fue hecho, y todas las cosas vinieron por mí. Soy el mismo que tomé la ciudad de Enoc a mi propio seno; y por la misma razón os tomaré a vosotros... porque yo sé todas las cosas.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/38?lang=spa&id=p7-p9#p7"
          },
          {
            referencia: "Doctrina y Convenios 38:27",
            texto: "He aquí, os digo que debéis ser uno; y si no sois uno, no sois míos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/38?lang=spa&id=p27#p27"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Liahona, noviembre de 2018, pág. 7",
        texto: "La reunión de Israel es la causa más importante en la faz de la tierra en estos días. Cada vez que alguien elige hacer convenios con Dios y guardarlos, se cumple la promesa bíblica sobre la reunión de Israel. Somos los instrumentos del Señor en esta gran obra."
      },
      {
        tipo: "conclusion",
        contenido: "El mandamiento de congregarse en Ohio en 1830 estableció el patrón de la reunión de Israel que continúa hoy. La unidad que el Señor exige —'debéis ser uno; y si no sois uno, no sois míos'— no es simple tolerancia mutua sino unidad profunda en Cristo. Cuando los santos se reúnen en torno a los convenios, templos e instituciones del Señor, se cumple el poder prometido en D&C 38: el enemigo no puede vencer un pueblo verdaderamente unido en el Salvador."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Por qué crees que el Señor mandó a los santos congregarse en un lugar físico?",
          "¿Qué sacrificios requirió de los santos el mandamiento de congregarse en Ohio?",
          "¿Qué significa la declaración de D&C 38:27: 'Si no sois uno, no sois míos'?",
          "¿En qué formas te congregas hoy con otros santos del Señor para recibir fortaleza espiritual?",
          "¿Cómo puedes contribuir a la unidad en tu familia, quórum o clase de la Iglesia?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 52 — D&C 37–38 Parte 2: Sed uno
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "52-dc-37-38-parte-2",
    title: "Doctrina y Convenios 37–38, Parte 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/162-doctrine-and-covenants-38-15-27-34-42?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Sed uno — principios de unidad, rectitud y preparación",
    secciones: [
      {
        tipo: "contexto",
        contenido: "D&C 38:15–42 profundiza en los principios que hacen posible la verdadera unidad entre los discípulos de Cristo. El Salvador instruyó a los santos que se preparaban para congregarse en Ohio sobre tres aspectos clave: cómo tratarse entre sí, cómo administrar los bienes temporales para cuidar a los pobres, y cómo prepararse espiritualmente para recibir las leyes del evangelio. La instrucción de ser 'uno' no es solo un ideal aspiracional; tiene consecuencias prácticas concretas: compartir, cuidar, igualar las cargas. Esta lección invita a los alumnos a examinar si sus actitudes hacia las personas diferentes a ellos y su manejo de los bienes temporales reflejan el carácter del Salvador que desea que lleguen a ser como Él."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 38:16",
            texto: "Y he guardado todas las cosas desde la fundación del mundo para mi propio propósito, lo cual cumpliré a su debido tiempo. Y he aquí, es conveniente que el pueblo de mi Iglesia guarde la ley que os he dado.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/38?lang=spa&id=p16#p16"
          },
          {
            referencia: "Doctrina y Convenios 38:24–27",
            texto: "Y que cada uno estime a su hermano como a sí mismo, y que practique la virtud y la santidad ante mí. Y otra vez os digo, que debéis ser uno; y si no sois uno, no sois míos. Y otra vez os digo que cada hombre mire al prójimo como a sí mismo para igualarse, a fin de que tengan igual dignidad todos los hombres.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/38?lang=spa&id=p24-p27#p24"
          },
          {
            referencia: "Doctrina y Convenios 38:30",
            texto: "Si estáis preparados, no temeréis.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/38?lang=spa&id=p30#p30"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Dieter F. Uchtdorf",
        fuente: "Liahona, noviembre de 2013, pág. 20",
        texto: "La unidad que el Salvador pide no significa que todos debamos ser iguales o que debamos suprimir nuestra individualidad. Significa que todos debemos valorarnos mutuamente, reconocer que cada hijo de Dios tiene valor infinito, y tratarnos con el mismo amor con que el Salvador nos trata a cada uno de nosotros."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 38:24–27 establece el fundamento de la unidad en el reino de Dios: estimar al hermano como a uno mismo e igualarse mutuamente. La frase más concisa y poderosa de esta sección es D&C 38:30: 'Si estáis preparados, no temeréis.' La preparación —espiritual, temporal y relacional— es el antídoto del miedo. Los santos que viven estos principios de unidad, igualdad y preparación son exactamente el pueblo que el Señor puede usar para establecer Sion."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué diferencias personales o de grupo dificultan la unidad entre los miembros de la Iglesia hoy?",
          "¿Qué enseña D&C 38:24 sobre cómo deberíamos ver y tratar a los demás?",
          "¿De qué manera práctica puedes 'igualarte' con los que te rodean en tu barrio o Iglesia?",
          "¿Qué tipo de preparación espiritual y temporal requiere D&C 38:30?",
          "¿Cómo puede la promesa 'si estáis preparados, no temeréis' darte paz en tiempos difíciles?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN — Adquirir conocimiento espiritual Parte 1 (semana 6)
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "165-adquirir-conocimiento-1",
    title: "Adquirir conocimiento espiritual - Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/522-acquiring-spiritual-knowledge-part-1?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Actuar con fe al buscar respuestas",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El primer principio para adquirir conocimiento espiritual es actuar con fe. No esperamos tener todas las respuestas antes de actuar; damos el primer paso con la fe que tenemos y confiamos que el Señor nos guiará. Este principio contrasta con el enfoque del mundo, que exige certeza antes de comprometerse. En el evangelio, la certeza a menudo sigue a la acción fiel, no al revés. Como enseñó Moroni: 'Os mostraré la fe, por mis obras' (Santiago 2:18). Actuar con fe incluye esforzarse por creer y confiar en Dios —y en Su tiempo— en lugar de exigir respuestas completas o inmediatas. Significa esforzarse por ver las cosas tal como Dios las ve. Esta lección ayuda a los alumnos a reconocer cuando tienen tendencia a esperar certeza antes de actuar, y los invita a dar pasos de fe mientras confían en las promesas de Dios."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 58:27–28",
            texto: "En verdad os digo, que los hombres deberían ser ansiosamente dedicados a toda buena causa, y hacer muchas cosas por su propia voluntad, y llevar a cabo mucha rectitud. Porque el poder está en ellos, mediante los cuales son agentes para sí mismos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=spa&id=p27-p28#p27"
          },
          {
            referencia: "Alma 32:27",
            texto: "Mas he aquí, si despertáis y aguijoneáis vuestras facultades para experimentar con mis palabras, y ejercéis ni siquiera una pequeñita partícula de fe; sí, aunque no queráis más que despertar el deseo de creer, que esta esperanza obre en vosotros, ni siquiera hasta creer, podréis comparar la palabra con una semilla.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p27#p27"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "Documento de base sobre el Dominio de la doctrina, párrafo 6",
        texto: "Actuar con fe incluye esforzarse por creer y confiar en Dios —y en Su tiempo— en lugar de exigir respuestas completas o inmediatas. Significa esforzarse por ver las cosas tal como Dios las ve, en lugar de como el mundo las ve. Dios ha prometido que nuestros esfuerzos fieles darán fruto a Su manera y en Su tiempo."
      },
      {
        tipo: "conclusion",
        contenido: "El primer principio para adquirir conocimiento espiritual —actuar con fe— es la clave que abre todas las demás puertas espirituales. No podemos esperar certeza perfecta para actuar; la certeza es el fruto de la acción fiel, no su requisito. Cuando damos pasos de fe, incluso con dudas, y confiamos que el Señor honrará ese esfuerzo, Él cumple Su promesa de revelar la verdad a nuestra mente y corazón. La agencia es un don divino que el Señor espera que usemos activamente en la búsqueda del conocimiento espiritual."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿En qué situaciones tiendes a esperar certeza antes de actuar con fe?",
          "¿Cómo ayuda el principio de 'actuar con fe' cuando enfrentas preguntas o dudas sobre el evangelio?",
          "¿Qué experiencia has tenido donde actuar con fe precedió a recibir confirmación?",
          "¿Cómo se relaciona D&C 58:27–28 con el principio de actuar con fe?",
          "¿Qué paso de fe específico necesitas dar esta semana en tu vida espiritual?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 7 — 14 al 20 de Abril
// Evaluación del aprendizaje 1
// ═══════════════════════════════════════════════════════════════════════════════

export const semana7Lecciones: Lesson[] = [

  {
    id: "106-evaluacion-1",
    title: "Evaluación del aprendizaje 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/164-assess-your-learning-3?lang=spa",
    type: "Especial",
    description: "Revisión y evaluación del progreso espiritual del alumno",
    secciones: [
      {
        tipo: "contexto",
        contenido: "La Evaluación del aprendizaje 1 de la semana 7 corresponde a la 'Evalúa tu aprendizaje 3' del manual oficial. Es una oportunidad para que los alumnos reflexionen sobre las verdades aprendidas en las semanas 5–7, que cubren D&C 30–40. Esta evaluación no es principalmente un examen de contenido académico, sino una invitación a evaluar el crecimiento espiritual personal: ¿Cómo han cambiado mis actitudes y comportamientos por las verdades que he estudiado? ¿En qué áreas de mi vida estoy aplicando los principios del evangelio con más fidelidad? Esta semana puede incluir una combinación de reflexión personal, análisis en grupo, y establecimiento de metas espirituales para el siguiente bloque de estudio. Es también un buen momento para revisar los pasajes del Dominio de la Doctrina estudiados hasta ahora: D&C 1:37–38, D&C 6:36, D&C 8:2–3, D&C 13:1 y D&C 18:10–11."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 38:30",
            texto: "Si estáis preparados, no temeréis.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/38?lang=spa&id=p30#p30"
          },
          {
            referencia: "Doctrina y Convenios 39:9",
            texto: "Mas tu corazón ha sido endurecido. He aquí, esto es irónico, ya que muchos han venido a mí con corazón contrito y han encontrado misericordia. Para los tales hay gran alegría en mi reino.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/39?lang=spa&id=p9#p9"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Una evaluación espiritual genuina no pregunta solo '¿Qué aprendí?' sino '¿En qué me ha cambiado lo que aprendí?' Los principios estudiados en las semanas anteriores —el congregarse en el Salvador, la unidad, la preparación, los convenios— son principios transformadores cuando se aplican. Esta semana es una oportunidad para medir el crecimiento espiritual, celebrar los avances y establecer metas concretas para el siguiente bloque."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál de las verdades estudiadas en las últimas semanas ha tenido mayor impacto en tu vida personal?",
          "¿Cómo has aplicado alguno de los principios del Dominio de la Doctrina fuera del aula de Seminario?",
          "¿Qué pasajes de los estudiados puedes recitar de memoria? ¿Cómo los has usado?",
          "¿En qué área de tu vida espiritual ves más crecimiento durante este período?",
          "¿Qué meta espiritual específica estableces para el siguiente bloque de estudio?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 8 — 21 al 27 de Abril
// D&C 39, D&C 42 Parte 1, D&C 42 Parte 2, D&C 43, D&C 45 Parte 1
// ═══════════════════════════════════════════════════════════════════════════════

export const semana8Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 53 — D&C 39–40
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "53-dc-39",
    title: "Doctrina y Convenios 39",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/163-doctrine-and-covenants-39-40?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Invitación e instrucciones a James Covel — hacer y guardar convenios",
    secciones: [
      {
        tipo: "contexto",
        contenido: "James Covel había servido como ministro metodista durante cuarenta años cuando escuchó el mensaje de la Restauración. Prometió al Señor obedecer cualquier mandamiento que le diera. El Salvador respondió a esa promesa con D&C 39: instrucciones directas, promesas generosas y un llamado al bautismo y la congregación en Ohio. La respuesta inicial de James fue positiva, pero D&C 40 revela que su corazón fue 'endurecido' por el miedo y las tradiciones del hombre, y quebró su promesa. El contraste entre la invitación generosa del Salvador (D&C 39) y la respuesta de temor de James (D&C 40) enseña una lección fundamental: los convenios con Dios tienen poder para conectarnos a Su fortaleza, pero ese poder requiere que guardemos nuestra parte. El Salvador usó la metáfora de una lámpara conectada a una fuente de energía: los convenios nos conectan al poder divino."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 39:7–9",
            texto: "Y ahora te digo, si a esto no harás caso, mis dones serán retirados, para que no hagas bien alguno. Mira que yo soy Dios; presta atención a mi voz. Es tu voluntad ser bautizado? Si es así, viene bien; si no, es conforme a tu voluntad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/39?lang=spa&id=p7-p9#p7"
          },
          {
            referencia: "Doctrina y Convenios 39:10–12",
            texto: "Sí, en verdad, en verdad te digo que la Iglesia tiene necesidad de ti, y de los que a ella pertenecen. Y cuando más lo buscas, Yo me deleito en honrar a los que me sirven en rectitud y verdad hasta el final.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/39?lang=spa&id=p10-p12#p10"
          },
          {
            referencia: "Doctrina y Convenios 40:2",
            texto: "He aquí, en verdad os digo que el corazón de James Covel fue endurecido en contra de la palabra del Señor, para que no recibiera ninguna bendición. Porque su corazón estaba puesto en la tierra y sus tradiciones sobre sus hermanos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/40?lang=spa&id=p2#p2"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Liahona, noviembre de 2011, pág. 86",
        texto: "Un convenio es una promesa sagrada hecha con Dios. Él establece los términos. Cada persona puede escoger aceptar o no esos términos. Si una persona acepta los términos del convenio y obedece la ley de Dios, él o ella recibe las bendiciones asociadas con ese convenio. Los convenios nos conectan al poder divino que de otra manera no podríamos acceder."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 39–40 enseña la dualidad del poder de los convenios: cuando se hacen y guardan, conectan al creyente al poder divino y abren bendiciones extraordinarias. Cuando se rompen por el miedo o las tradiciones del hombre, ese poder se retira. La historia de James Covel es un recordatorio solemne: las promesas hechas a Dios son sagradas. Pero también es una invitación: el Salvador estaba dispuesto a dar a James 'una bendición mayor que cualquiera que hayas conocido' si él simplemente cumplía su parte."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué prometió James Covel al Señor, y qué pasó cuando no cumplió esa promesa?",
          "¿Qué convenios has hecho tú con el Señor y cómo están afectando tu vida?",
          "¿Por qué el 'corazón endurecido por las tradiciones del hombre' es un peligro espiritual real hoy?",
          "¿Qué 'bendición mayor que cualquiera que hayas conocido' promete el Señor a quienes guardan sus convenios?",
          "¿Qué harías diferente si renovaras conscientemente tus convenios bautismales este domingo?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 54–55 — D&C 42 Parte 1
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "54-dc-42-parte-1",
    title: "Doctrina y Convenios 42, Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/172-doctrine-and-covenants-42?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Las leyes y mandamientos para guiar a la Iglesia",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Doctrina y Convenios 42, revelada en febrero de 1831 en Kirtland, Ohio, ha sido llamada 'la ley de la Iglesia' porque establece los principios fundamentales de conducta, gobierno y servicio para los miembros de la Restauración. Los santos en Ohio habían estado esperando esta revelación, pues José había prometido que el Señor daría Sus leyes cuando llegaran a Ohio. La primera parte de D&C 42 establece el mandato misional ('id y predicad'), el patrón del matrimonio eterno como base del orden familiar, las leyes sobre la conducta moral y la honestidad, y el proceso para tratar con las transgresiones en la Iglesia. Estas leyes no fueron diseñadas para restringir la libertad sino para ayudar a los santos a vivir de manera que pudieran calificar para las bendiciones más altas del evangelio."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 42:11",
            texto: "Y otra vez os digo que no se permitirá enseñar en mi Iglesia a ninguno que no sea ordenado por alguien que tenga la autoridad y que sea conocido por la Iglesia.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42?lang=spa&id=p11#p11"
          },
          {
            referencia: "Doctrina y Convenios 42:22–23",
            texto: "Thou shalt love thy wife with all thy heart, and shalt cleave unto her and none else. And he that looketh upon a woman to lust after her shall deny the faith, and shall not have the Spirit.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42?lang=spa&id=p22-p23#p22"
          },
          {
            referencia: "Doctrina y Convenios 42:61",
            texto: "Si pides, recibirás revelación sobre revelación, conocimiento sobre conocimiento, para que sepas los misterios y las cosas pacíficas: lo que trae gozo, lo que trae vida eterna.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42?lang=spa&id=p61#p61"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder D. Todd Christofferson",
        fuente: "Liahona, noviembre de 2009, pág. 20",
        texto: "Las leyes de Dios no son restricciones arbitrarias; son las condiciones bajo las cuales podemos recibir las bendiciones más altas. Cuando obedecemos la ley de Dios, nos alineamos con las leyes que gobiernan el universo, y eso nos da acceso a poder y bendiciones que de otra manera no podríamos recibir."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 42 establece que la Iglesia opera por leyes reveladas, no por tradiciones humanas ni por preferencias individuales. Las leyes de D&C 42 —sobre el matrimonio, la moralidad, la honestidad, y el proceso de disciplina— están diseñadas para proteger y elevar a los santos. La promesa de D&C 42:61 es especialmente motivadora: quienes pregunten con fe recibirán revelación sobre revelación, construyendo un edificio de conocimiento espiritual que trae gozo y vida eterna."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Por qué D&C 42 es conocida como 'la ley de la Iglesia'?",
          "¿Cómo describirías la relación entre las leyes de Dios y la libertad personal?",
          "¿Qué principios sobre el matrimonio y la moralidad establece D&C 42, y por qué son relevantes hoy?",
          "¿Cómo puede la promesa de D&C 42:61 motivarte a estudiar y orar con más dedicación?",
          "¿En qué área de tu vida estás aplicando fielmente las leyes del evangelio?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 55–57 — D&C 42 Parte 2: Consagración
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "55-dc-42-parte-2",
    title: "Doctrina y Convenios 42, Parte 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/173-doctrine-and-covenants-42-29-39?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Mayordomía, consagración y el cuidado de los pobres",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Un grupo de santos en la granja de Isaac y Lucy Morley había intentado practicar una forma de vida comunitaria antes de conocer la Iglesia, motivados por un profundo deseo de vivir el evangelio y cuidarse mutuamente. Cuando se unieron a la Iglesia, el Señor les reveló la ley de la consagración a través de D&C 42:29–39: el principio de que todo lo que tenemos es del Señor, y que debemos usar Sus bienes como mayordomos fieles para el bienestar de todos. Este sistema no es comunismo ni socialismo; es una expresión del amor cristiano que reconoce que somos mayordomos de los bienes de Dios, no propietarios absolutos. El cuidado de los pobres no es opcional en el evangelio de Jesucristo: es una responsabilidad sagrada que refleja directamente nuestro amor por el Salvador."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 42:30–31",
            texto: "Y si obtuviereis más de lo necesario para vuestro sustento y el de vuestra familia, lo daréis al obispo de mi Iglesia, a fin de que se guarde en una tesorería para ser administrado a los que no tienen.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42?lang=spa&id=p30-p31#p30"
          },
          {
            referencia: "Doctrina y Convenios 42:39",
            texto: "Y si guardas todos los mandamientos que te he dado, las puertas del infierno no prevalecerán contra ti; y Dios te enviará Sus poderes en ayuda de todos tus empresas.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/42?lang=spa&id=p39#p39"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dieter F. Uchtdorf",
        fuente: "Liahona, noviembre de 2011, pág. 23",
        texto: "Se cuenta que en el bombardeo de una ciudad durante la Segunda Guerra Mundial una estatua de Jesucristo resultó sumamente dañada. Cuando los habitantes la hallaron entre los escombros, se lamentaron porque sus manos habían sido destruidas. Al final decidieron no restaurarlas y colocaron a sus pies un letrero que decía: 'No tengo manos más que las vuestras.' Somos literalmente las manos del Salvador en este mundo. El cuidado de los pobres es nuestra responsabilidad sagrada como Sus discípulos."
      },
      {
        tipo: "conclusion",
        contenido: "La ley de la consagración de D&C 42 no es solo un principio económico histórico; es una expresión profunda del carácter de Cristo que Sus discípulos deben desarrollar. Ser un mayordomo fiel de los bienes de Dios significa usar lo que tenemos para bendecir a quienes nos rodean. En la actualidad, vivimos este principio a través del ayuno y las ofrendas de ayuno, las contribuciones a los fondos humanitarios, y el servicio directo a quienes tienen necesidad. El Señor prometió que quienes guardan Sus mandamientos, incluyendo el cuidado de los pobres, tendrán las puertas del infierno cerradas contra ellos."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué es la ley de la consagración y en qué se diferencia del comunismo?",
          "¿Cómo vivimos hoy el principio de la consagración en la Iglesia?",
          "¿Qué significa ser 'mayordomo' de los bienes de Dios en lugar de 'propietario'?",
          "¿De qué maneras concretas puedes ser 'las manos del Salvador' para los necesitados en tu comunidad?",
          "¿Cómo cambia tu perspectiva de los bienes materiales saber que son del Señor y tú eres Su mayordomo?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 56 — D&C 43
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "56-dc-43",
    title: "Doctrina y Convenios 43",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/174-doctrine-and-covenants-43?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El orden de la revelación y preparación para la Segunda Venida",
    secciones: [
      {
        tipo: "contexto",
        contenido: "A principios de 1831, una mujer llamada Hubble afirmaba recibir revelaciones para la Iglesia, generando confusión entre algunos miembros. A través de D&C 43, el Señor estableció con claridad meridiana el orden de la revelación en Su Iglesia: solo el presidente de la Iglesia puede recibir revelaciones para toda la Iglesia, y ningún otro. Este principio protege a la Iglesia del engaño y el caos. La segunda parte de D&C 43 describe cómo el Señor ha usado y usará la naturaleza para llamar al arrepentimiento a Sus hijos: terremotos, truenos, rayos, tempestades, pestes. Estas señales no son castigos arbitrarios sino invitaciones a volverse al Señor. La lección invita a los alumnos a reflexionar sobre el orden divinamente establecido que protege a la Iglesia y sobre su propia preparación para los últimos días."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 43:2–4",
            texto: "He aquí, en verdad os digo que ninguno recibirá el don de recibir revelaciones para toda mi Iglesia sino mi siervo José Smith hijo, porque él es el único designado para esto. Y lo que él recibiere es dado por el Espíritu Santo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/43?lang=spa&id=p2-p4#p2"
          },
          {
            referencia: "Doctrina y Convenios 43:22–23",
            texto: "He aquí, esto lo acabo de mandar a mis siervos, para que ellos proclamen estas cosas al mundo y a toda la tierra, pues se acerca el día en que los oirán y se lo dirán a sus hermanos, que he enviado ángeles sobre la tierra para desenredar los misterios de la iniquidad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/43?lang=spa&id=p22-p23#p22"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder M. Russell Ballard",
        fuente: "Liahona, noviembre de 2014, pág. 38",
        texto: "El Señor tiene un sistema para dar revelación a Su Iglesia. No es accidental ni arbitrario. Hay un profeta, y a través de él el Señor habla a toda la Iglesia. Cuando entendemos y honramos este sistema, estamos protegidos del engaño. Cuando lo ignoramos, nos volvemos vulnerables."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 43 establece dos principios fundamentales: el orden de la revelación en la Iglesia (solo el profeta recibe revelaciones para toda la Iglesia) y la naturaleza de las señales de los últimos días como llamamientos al arrepentimiento. Ambos principios se conectan: en los días de calamidad que se avecinan, los santos que confían en el profeta y entienden el propósito divino detrás de las tribulaciones estarán en paz y serán capaces de ayudar a los que los rodean."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Por qué es importante el principio de que solo el profeta recibe revelaciones para toda la Iglesia?",
          "¿Cómo puedes protegerte de seguir a personas que afirman recibir revelaciones para la Iglesia fuera del orden establecido?",
          "¿Qué propósito tienen las calamidades de los últimos días, según D&C 43:22–23?",
          "¿Cómo puede el conocimiento de los eventos de los últimos días inspirar preparación en lugar de miedo?",
          "¿Qué pasos de preparación espiritual y temporal estás tomando para los días que vienen?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 57 — D&C 45 Parte 1
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "57-dc-45-parte-1",
    title: "Doctrina y Convenios 45, Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/181-doctrine-and-covenants-45-part-1?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Jesucristo como nuestro Abogado ante el Padre",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Doctrina y Convenios 45 fue revelada en marzo de 1831 y contiene algunas de las enseñanzas más profundas sobre la Segunda Venida, la reunión de Israel y el papel de Jesucristo como nuestro Abogado ante el Padre. La primera parte (versículos 1–33) presenta al Salvador haciendo intercesión ante el Padre por cada uno de Sus discípulos: 'Padre, escúchame en nombre de quienes han creído en mi nombre; y los purificaré, para que me presenten a ti sin mancha y sin culpa' (D&C 45:5). Esta imagen del Salvador abogando por nosotros ante el Padre es una de las más consoladoras de toda la Escritura. Muestra que no enfrentamos el juicio solos; tenemos un Intercesor perfecto que conoce perfectamente nuestra capacidad y nuestras debilidades, y que fue crucificado por nosotros."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 45:3–5",
            texto: "Escúchame: yo soy tu defensor; yo conozco mi intercesión; ningún hombre conoce al Padre sino por mí; nadie conoce al Hijo sino el Padre y aquel a quien el Hijo lo revele. Padre, escúchame... Padre, escúchame en nombre de quienes han creído en mi nombre; y los purificaré... los purificaré, para que me presenten a ti sin mancha y sin culpa.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/45?lang=spa&id=p3-p5#p3"
          },
          {
            referencia: "Doctrina y Convenios 45:26–27",
            texto: "Y en aquel día se oirán de guerras y rumores de guerras, y toda la tierra estará en conmoción, y los corazones de los hombres desfallecerán, y dirán que Cristo tarda su venida hasta el fin de la tierra.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/45?lang=spa&id=p26-p27#p26"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "Liahona, noviembre de 2016, pág. 38",
        texto: "Hay un momento que todos enfrentaremos: el juicio ante Dios. Pero gracias a Jesucristo, no estamos solos ante ese juicio. Él es nuestro Abogado, nuestro Intercesor, nuestro Defensor. Él conoce cada aspecto de nuestra vida, cada lucha, cada triunfo, cada fracaso. Y Él aboga por nosotros ante el Padre con el poder de Su Expiación."
      },
      {
        tipo: "conclusion",
        contenido: "La imagen del Salvador como Abogado ante el Padre en D&C 45 es profundamente consoladora. No enfrentamos el juicio solos; tenemos un Intercesor perfecto que ya pagó el precio de nuestra redención y que ahora aboga por nosotros. Esta verdad debe darnos confianza —no complacencia— para acercarnos al Salvador con gratitud y para vivir de manera que merezcamos ser presentados 'sin mancha y sin culpa' al Padre por Su mediación."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué imagen presenta D&C 45:3–5 del papel del Salvador ante el Padre?",
          "¿Cómo cambia tu perspectiva del juicio final saber que el Salvador aboga por ti?",
          "¿Qué significa para ti que Cristo te 'purificará' para presentarte sin mancha ante el Padre?",
          "¿De qué manera las señales de los últimos días descritas en D&C 45:26–27 confirman la veracidad de la profecía?",
          "¿Qué decisiones tomarías diferente al saber que tienes un Abogado perfecto ante el Padre?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 9 — 28 de Abril al 4 de Mayo
// D&C 45 Parte 2, D&C 46, D&C 49–50, Guía estudio, Actuar con fe
// ═══════════════════════════════════════════════════════════════════════════════

export const semana9Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 58 — D&C 45 Parte 2
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "58-dc-45-parte-2",
    title: "Doctrina y Convenios 45, Parte 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/182-doctrine-and-covenants-45-part-2?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Señales de los tiempos y la Parábola de las Diez Vírgenes",
    secciones: [
      {
        tipo: "contexto",
        contenido: "La segunda parte de D&C 45 (versículos 34–75) es una de las profecías más detalladas sobre los últimos días en toda la Escritura restaurada. El Señor describió señales específicas: apostasía, guerras, pestes, hambre, terremotos; pero también bendiciones para los santos que se preparen: Sion sería establecida como un lugar de refugio, y los santos que hayan construido sobre el fundamento de Cristo no temerán. La parábola de las Diez Vírgenes, referenciada en D&C 45:56–57, es el marco interpretativo central: cinco vírgenes tenían aceite en sus lámparas y cinco no. El aceite representa la preparación espiritual personal que nadie puede prestar a otro. Esta lección invita a los alumnos a reflexionar sobre qué tipo de 'aceite' están acumulando en sus vidas y si están verdaderamente preparados para recibir al Salvador."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 45:56–57",
            texto: "Y en aquel día, cuando yo venga en mi gloria, se cumplirá la parábola que hablé acerca de las diez vírgenes. Porque aquellas que sean sabias y hayan recibido la verdad, y hayan tomado al Espíritu Santo por su guía, y no hayan sido engañadas: en verdad os digo, no serán cortadas y arrojadas al fuego, sino que sobrevivirán.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/45?lang=spa&id=p56-p57#p56"
          },
          {
            referencia: "Doctrina y Convenios 45:66–67",
            texto: "Y se llamará la Nueva Jerusalén, una tierra de paz, una ciudad de refugio, un lugar de seguridad para los santos del Dios Altísimo; y la gloria del Señor estará allí, y el terror del Señor también estará allí.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/45?lang=spa&id=p66-p67#p66"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dallin H. Oaks",
        fuente: "Liahona, noviembre de 2004, pág. 8",
        texto: "La preparación para la Segunda Venida del Salvador no puede ser prestada ni transferida. Cada persona debe construir su propia reserva espiritual de fe, convenios guardados y obediencia. Las cinco vírgenes sabias no podían dar su aceite a las insensatas porque ese aceite era el resultado de sus propias decisiones y estilo de vida. La preparación espiritual es individual e intransferible."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 45 culmina con una visión hermosa: Sion como ciudad de refugio en los últimos días, un lugar de seguridad para quienes hayan construido su vida sobre la roca de Cristo. La clave para estar en esa categoría es exactamente lo que describe la parábola de las Diez Vírgenes: tener aceite en la lámpara, es decir, una preparación espiritual genuina que no puede prestarse. El 'aceite' se acumula con el tiempo mediante la oración diaria, el estudio de las Escrituras, la participación en los convenios y el servicio fiel."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué representa el 'aceite' en la parábola de las Diez Vírgenes, según D&C 45:56–57?",
          "¿Por qué el aceite no podía prestarse de las vírgenes sabias a las insensatas?",
          "¿Qué hábitos espirituales diarios estás desarrollando para mantener tu 'lámpara llena'?",
          "¿Cómo describes la promesa de la Nueva Jerusalén como 'ciudad de refugio' para los santos fieles?",
          "Si el Salvador viniera mañana, ¿te sentirías preparado? ¿Qué cambiarías en tu vida?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 59 — D&C 46
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "59-dc-46",
    title: "Doctrina y Convenios 46",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/183-doctrine-and-covenants-46?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Búsqueda de dones espirituales y cómo evitar engaños",
    secciones: [
      {
        tipo: "contexto",
        contenido: "A principios de 1831, algunas reuniones de la Iglesia en Ohio se habían vuelto caóticas por prácticas entusiastas no ordenadas: algunos afirmaban visiones, otros actuaban de maneras extrañas, y había confusión sobre qué manifestaciones venían del Espíritu Santo y cuáles no. El Señor respondió con D&C 46, que establece principios fundamentales sobre los dones espirituales: todos los miembros reciben dones del Espíritu Santo para beneficio mutuo (no para exhibición personal), y el criterio de discernimiento es si los dones glorifican a Dios y benefician a los demás. La lista de dones de D&C 46:13–26 es única en la Escritura restaurada: fe, sanación, hacer milagros, profecía, discernimiento, hablar en lenguas, interpretación de lenguas, entre otros. Ningún don es superior a otro; todos son dados según las necesidades de la Iglesia."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 46:8–9",
            texto: "Por tanto, yo, el Señor, digo que os alejéis de todo lo que no es bueno, y que nunca pidáis excepto creyendo que recibiréis, y no orando por más de lo que creáis que podéis recibir. Y tengo para vosotros algo mejor que las lenguas. A todo hombre se le da un don por el Espíritu de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/46?lang=spa&id=p8-p9#p8"
          },
          {
            referencia: "Doctrina y Convenios 46:11–12",
            texto: "A cada persona se le dan dones que difieren en su naturaleza. Y a cada persona se le da una manifestación del Espíritu para el beneficio de todos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/46?lang=spa&id=p11-p12#p11"
          },
          {
            referencia: "Doctrina y Convenios 46:27",
            texto: "Y a todos estos dones viene por el Espíritu de Cristo; y vienen a toda persona en su propia medida, según lo que el Señor le ordena; y el que pide en el Espíritu, pide según la voluntad de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/46?lang=spa&id=p27#p27"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Marvin J. Ashton",
        fuente: "Liahona, febrero de 1988, pág. 20",
        texto: "¿No incluye la lista de los dones del Espíritu el don de hacer preguntas, el don de escuchar, el don de ver el bien en los demás, el don del amor incondicional, el don de evitar el contencio? Los dones del Espíritu no están reservados para unos pocos privilegiados; están disponibles para cada uno de nosotros si los buscamos con corazón sincero."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 46 enseña que cada miembro de la Iglesia tiene dones espirituales, aunque no siempre sean los más llamativos o visibles. El criterio para reconocer un don genuino es si glorifica a Dios y beneficia a los demás. Los dones no son para exhibición personal ni para satisfacción propia. Identificar, desarrollar y usar fielmente los dones que el Señor nos ha dado es una responsabilidad sagrada y una fuente de gran gozo."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué dones espirituales menciona D&C 46:13–26?",
          "¿Cómo puedes identificar cuáles son tus propios dones espirituales?",
          "¿Cuál es el criterio del Señor para distinguir entre un don espiritual genuino y una manifestación falsa?",
          "¿Cómo puede el conocimiento de tus propios dones ayudarte a servir mejor en la Iglesia?",
          "¿Qué dones espirituales admiras en otras personas de tu barrio o quórum?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 60 — D&C 49–50
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "60-dc-49-50",
    title: "Doctrina y Convenios 49–50",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/184-doctrine-and-covenants-49-50?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Principios sobre el matrimonio, la creación y el discernimiento espiritual",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Doctrina y Convenios 49 fue dada para refutar doctrinas erróneas de los Shakers (una secta religiosa), quienes enseñaban entre otras cosas que el matrimonio era pecaminoso y que era virtuoso abstenerse de comer carne. El Señor aclaró con firmeza que el matrimonio entre hombre y mujer es ordenado por Él, que las criaturas de la tierra fueron creadas para el uso del hombre, y que cualquier enseñanza contraria viene del adversario. D&C 50 aborda el problema del engaño espiritual: ¿cómo saber si una manifestación viene de Dios o del adversario? El Señor estableció que los maestros que enseñan por el Espíritu y los oyentes que escuchan por el Espíritu son edificados mutuamente; pero cuando la confusión o el caos están presentes, el Espíritu del Señor no está ahí. Esta lección ayuda a los alumnos a desarrollar discernimiento espiritual."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 49:15–17",
            texto: "Y otra vez os digo que todo hombre que no haya tomado esposa es indigno, porque ha contravenido el mandamiento de Dios... Porque he aquí, soy Dios, y en mí está la plenitud, y creé al hombre y a la mujer como imagen mía a fin de que los hijos de los hombres puedan crecer sobre la tierra.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/49?lang=spa&id=p15-p17#p15"
          },
          {
            referencia: "Doctrina y Convenios 50:21–22",
            texto: "Por tanto, ¿para qué sois llamados? Para predicar mi evangelio por el Espíritu, aunque el Espíritu de verdad; y si lo predicáis por otro espíritu, no es de Dios. Y si lo recibís por otro espíritu, no es de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/50?lang=spa&id=p21-p22#p21"
          },
          {
            referencia: "Doctrina y Convenios 50:23–24",
            texto: "Por tanto, ¿por qué no sois más sabios? ¿Por qué no enseñáis y aprendéis con la sabiduría de Dios? Todo aquello que edifica viene de Dios, y aquello que no edifica no viene de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/50?lang=spa&id=p23-p24#p23"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder David A. Bednar",
        fuente: "Liahona, noviembre de 2006, pág. 30",
        texto: "El matrimonio entre hombre y mujer es la institución más fundamental de la sociedad y la Iglesia. No es una creación humana que puede ser redefinida por la cultura o los gobiernos; es una institución ordenada por Dios desde el principio. Defenderla es defender el Plan de Salvación."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 49–50 establece dos principios importantes: el matrimonio entre hombre y mujer es ordenado por Dios y cualquier enseñanza contraria viene del adversario; y el criterio del discernimiento espiritual genuino es la edificación. Lo que verdaderamente viene del Espíritu Santo edifica, ilumina, da paz y claridad. Lo que viene del adversario confunde, oscurece y atemoriza. Aprender a reconocer la voz del Espíritu Santo es una de las habilidades espirituales más valiosas que un joven puede desarrollar."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué doctrinas erróneas corrige D&C 49 sobre el matrimonio y la alimentación?",
          "¿Cómo establece D&C 50:23–24 el criterio para reconocer una manifestación genuina del Espíritu?",
          "¿Cómo puede aplicarse el principio 'todo lo que edifica viene de Dios' en tu vida diaria?",
          "¿Por qué la doctrina del matrimonio entre hombre y mujer es fundamental para el Plan de Salvación?",
          "¿Cuándo has sentido que una enseñanza o experiencia te 'edificaba' genuinamente por el Espíritu Santo?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN — Guía para el Estudio de las Escrituras (semana 9)
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "172-guia-estudio",
    title: "Guía para el Estudio de las Escrituras",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/490-guide-to-the-scriptures?lang=spa",
    type: "Preparación para la Vida",
    description: "Herramientas de estudio y profundización de referencias",
    secciones: [
      {
        tipo: "contexto",
        contenido: "La Guía para el Estudio de las Escrituras es un recurso indispensable para el estudio profundo del evangelio. Esta lección de Preparación para la Vida enseña a los alumnos a utilizarla con eficacia. La Guía incluye definiciones de términos doctrinales, referencias cruzadas, mapas, ayudas cronológicas y la sección de Temas del Evangelio. Saber usarla es la diferencia entre leer las Escrituras superficialmente y estudiarlas profundamente. Esta lección es especialmente valiosa porque forma parte de la habilidad que el Dominio de la Doctrina busca desarrollar: no solo memorizar pasajes sino poder explorar, investigar y profundizar en las verdades del evangelio utilizando los recursos que la Iglesia ha proporcionado. Un estudiante que domina las herramientas de estudio puede responder sus propias preguntas espirituales de manera independiente."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 88:118",
            texto: "Y como no todos tienen fe, buscad con diligencia y enseñaos mutuamente palabras de sabiduría; sí, buscad conocimiento de los mejores libros; buscad la sabiduría en el estudio y también con la fe.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=spa&id=p118#p118"
          },
          {
            referencia: "2 Timoteo 2:15",
            texto: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/2-tim/2?lang=spa&id=p15#p15"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Richard G. Scott",
        fuente: "Liahona, noviembre de 2011, pág. 6",
        texto: "El estudio de las Escrituras es esencial para nuestro crecimiento espiritual. Debemos aprender a usarlas con habilidad y consistencia. Las herramientas de estudio que la Iglesia nos ha proporcionado —concordancias, referencias cruzadas, guías temáticas— son dones que amplifican nuestra capacidad de aprender la voluntad del Señor."
      },
      {
        tipo: "conclusion",
        contenido: "Conocer y usar con habilidad las herramientas de estudio de las Escrituras transforma la experiencia de estudiarlas. En lugar de leer pasivamente, el estudiante hábil puede investigar activamente, conectar verdades entre sí, aclarar términos confusos y encontrar respuestas a sus propias preguntas. Esta habilidad es una inversión espiritual de por vida: cuanto más la desarrollas ahora, más productivo será cada minuto que dediques al estudio de las Escrituras por el resto de tu vida."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué herramientas de la Guía para el Estudio de las Escrituras conoces y usas con más frecuencia?",
          "¿Cuál es la diferencia entre 'leer' y 'estudiar' las Escrituras?",
          "¿Cómo puedes usar las referencias cruzadas para entender mejor un pasaje difícil?",
          "¿Qué pregunta espiritual tienes actualmente que podrías investigar con las herramientas de estudio?",
          "¿Cómo puede dominar el uso de las herramientas de estudio fortalecer tu testimonio personal?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN — Actuar con fe (semana 9)
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "173-actuar-fe",
    title: "Actuar con fe",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/523-acquiring-spiritual-knowledge-part-2?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Desarrollar confianza a través de la obediencia y la acción",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Esta lección profundiza en el principio de actuar con fe para encontrar respuestas espirituales. A diferencia del conocimiento científico que requiere evidencia antes de creer, el conocimiento espiritual a menudo requiere que actuemos primero con fe para luego recibir la evidencia. El Salvador describió este patrón claramente: 'Si alguno quisiere hacer la voluntad de Dios, conocerá si la doctrina es de Dios' (Juan 7:17). La acción precede a la confirmación. Esta lección usa situaciones de la vida real de los alumnos para practicar la aplicación del principio de actuar con fe: ¿cómo responderías si tu mejor amigo duda del Libro de Mormón? ¿Si alguien en tu familia cuestiona la veracidad de la Iglesia? Actuar con fe significa dar pasos concretos hacia Dios aunque no tengamos todas las respuestas."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Juan 7:17",
            texto: "El que quiera hacer la voluntad de Dios, conocerá si la doctrina es de Dios, o si yo hablo por mi propia cuenta.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/7?lang=spa&id=p17#p17"
          },
          {
            referencia: "Moroni 10:3–5",
            texto: "He aquí, os exhorto a que, cuando leáis estas cosas... que os acordéis de cuán misericordioso ha sido el Señor con los hijos de los hombres, desde la creación de Adán hasta este tiempo... y si lo hacéis con fe sincera en Cristo, Él os manifestará la verdad de ellas por el poder del Espíritu Santo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?lang=spa&id=p3-p5#p3"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Documento de base sobre el Dominio de la doctrina",
        fuente: "Adquirir conocimiento espiritual, párrafo 6",
        texto: "Actuar con fe significa actuar en las verdades que ya sabemos con la esperanza y la confianza de que Dios revelará más verdades a medida que avancemos. No espera perfecta certeza antes de actuar; da pasos obedientes basados en la fe que tiene, y confía en que el Señor honrará esa fe."
      },
      {
        tipo: "conclusion",
        contenido: "Actuar con fe no es ignorar las dudas sino actuar a pesar de ellas, confiando en que Dios responderá a los esfuerzos fieles. Moroni 10:3–5 es el prototipo de este principio: leer, recordar la misericordia de Dios, y preguntar con fe sincera. La promesa es que el Espíritu Santo 'manifestará la verdad de todas las cosas' a quienes pregunten con fe genuina. Este patrón —acción fiel + oración sincera = confirmación espiritual— es la fórmula que transforma el conocimiento intelectual sobre el evangelio en testimonio personal vivo."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Por qué la acción a menudo precede a la confirmación espiritual en el evangelio?",
          "¿Cómo responderías a un amigo que dice 'no puedo orar o leer las Escrituras hasta estar seguro de que Dios existe'?",
          "¿Qué paso de fe has dado que luego fue confirmado por el Espíritu Santo?",
          "¿Cómo aplicas el principio de Moroni 10:3–5 en tu búsqueda de testimonio personal?",
          "¿Qué significa para ti actuar con fe en tu situación personal actual?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 10 — 5 al 11 de Mayo
// D&C 51–52, D&C 56, D&C 58 Parte 1, D&C 58 Parte 2, Dominio 2
// ═══════════════════════════════════════════════════════════════════════════════

export const semana10Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 61 — D&C 51–52
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "61-dc-51-52",
    title: "Doctrina y Convenios 51–52",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/185-doctrine-and-covenants-51-52?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Mayordomía del obispo y discernimiento de siervos verdaderos",
    secciones: [
      {
        tipo: "contexto",
        contenido: "D&C 51 fue dada en mayo de 1831 cuando los santos comenzaban a llegar de Nueva York a Ohio y necesitaban organización para distribuir los recursos de manera justa entre ellos. El Señor instruyó a Edward Partridge, el primer obispo de la Iglesia, sobre cómo administrar los bienes de la Iglesia con equidad y fidelidad. D&C 52 fue dada en junio de 1831 en la primera conferencia general de la Iglesia en Ohio. El Señor llamó a varios pares de misioneros para viajar a Missouri predicando el evangelio, y les dio una señal fundamental para reconocer a los siervos verdaderos: los que manifiestan la mansedumbre y la humildad de Cristo son de Dios; los que endurecen el corazón, exaltan su propio orgullo y crean conflicto no lo son. Este criterio sigue siendo válido para discernir el liderazgo fiel hoy."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 51:3",
            texto: "Y que todo hombre reparta de acuerdo con sus necesidades y sus deseos a su familia, y reciba de acuerdo con lo que haya consagrado; y si sobrare del trabajo de sus manos, lo entregará en la tesorería para ser administrado a los que no tienen.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/51?lang=spa&id=p3#p3"
          },
          {
            referencia: "Doctrina y Convenios 52:14–17",
            texto: "He aquí, yo os doy una señal por la cual podréis saber el espíritu que guía un siervo del Señor: aquel cuyo espíritu humilla al hombre es de Dios, y aquel cuyo espíritu no humilla al hombre no es de Dios. Cada árbol se conoce por su fruto.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/52?lang=spa&id=p14-p17#p14"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Thomas S. Monson",
        fuente: "Liahona, noviembre de 2008, pág. 59",
        texto: "El liderazgo genuino en el reino de Dios no se manifiesta por el poder, la posición o la elocuencia, sino por el servicio humilde, el amor genuino por las personas y la dedicación a la voluntad de Dios sobre la propia. Un siervo verdadero del Señor siempre dirige a las personas hacia Cristo, nunca hacia sí mismo."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 52:14–17 da un criterio poderoso para reconocer a los siervos verdaderos del Señor: humillan al hombre, no lo enaltecen; edifican la fe, no la dependencia personal; sus frutos son amor, paz y unidad. Este principio aplica no solo para evaluar a líderes sino también para evaluarnos a nosotros mismos: ¿Nuestras palabras y acciones humillan o enorgullecen? ¿Dirijen a las personas hacia Cristo o hacia nosotros mismos?"
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué criterio da D&C 52:14–17 para reconocer a los siervos verdaderos del Señor?",
          "¿Cómo aplica este criterio a líderes de la Iglesia, familias, y amigos que te influencian?",
          "¿Cómo puede un joven demostrar ser un 'siervo verdadero' en sus relaciones cotidianas?",
          "¿Qué principios de mayordomía de D&C 51 aplican a tu manejo personal de los recursos?",
          "¿Cómo distingues entre la humildad genuina y la falsa humildad en una persona?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 62 — D&C 56
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "62-dc-56",
    title: "Doctrina y Convenios 56",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/186-doctrine-and-covenants-56?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Advertencias a los ricos orgullosos y a los pobres ociosos",
    secciones: [
      {
        tipo: "contexto",
        contenido: "D&C 56 fue dada como resultado directo de la desobediencia de Ezra Thayre, quien no cumplió el llamamiento misional que había recibido. Pero la revelación va más allá de una corrección individual: contiene advertencias proféticas tanto para los ricos que son orgullosos como para los pobres que son ociosos, dos extremos igualmente peligrosos espiritualmente. El Señor bendice a los ricos que son humildes y dan de sus bienes, y a los pobres que son pacientes y fuertes. Pero advierte a los ricos que hacen escarnio de los pobres y a los pobres que esperan que otros los mantengan sin esfuerzo propio. Esta revelación fue profética y relevante para su tiempo, pero sus principios sobre la actitud hacia la riqueza, la pobreza y la responsabilidad personal son eternamente vigentes."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 56:16–17",
            texto: "¡Ay de vosotros los ricos, que no queréis dar vuestra sustancia a los pobres porque vuestros corazones están demasiado apegados a las riquezas! ¡Ay de vosotros los pobres, cuyos corazones no están quebrantados, cuyo espíritu no está contrito, y cuya barriga no está llena!",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/56?lang=spa&id=p16-p17#p16"
          },
          {
            referencia: "Doctrina y Convenios 56:18",
            texto: "Pero benditos son los pobres que son puros de corazón, cuyas manos son puros y cuyos corazones están quebrantados, y cuyos corazones están contrita; porque ellos recibirán el reino de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/56?lang=spa&id=p18#p18"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "D&C 56 enseña que la condición espiritual del corazón es más importante que la condición económica. No es la riqueza ni la pobreza en sí mismas lo que determina nuestro estado espiritual, sino la actitud de nuestro corazón hacia lo que tenemos y hacia los demás. El Señor bendice al rico que es humilde y generoso, y al pobre que es paciente y diligente. Ambos, cuando tienen el corazón correcto, pueden ser instrumentos del Señor."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuáles son los dos extremos que el Señor advierte en D&C 56:16–18?",
          "¿Por qué el Señor advierte tanto a los ricos orgullosos como a los pobres ociosos?",
          "¿Cómo describe D&C 56:18 a los pobres que son bendecidos?",
          "¿Qué actitud hacia los bienes materiales enseña esta revelación?",
          "¿Cómo puedes cultivar la humildad y la generosidad independientemente de tu situación económica?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 63 — D&C 58 Parte 1
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "63-dc-58-parte-1",
    title: "Doctrina y Convenios 58, Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/187-doctrine-and-covenants-58-part-1?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El propósito de las tribulaciones e iniciativa personal en el bien",
    secciones: [
      {
        tipo: "contexto",
        contenido: "En agosto de 1831, los primeros santos llegaron al lugar que el Señor había señalado para Sion en Missouri. Muchos se sentían decepcionados: en lugar de una tierra preparada para recibir a los santos, encontraron tierra sin desarrollar, condiciones difíciles y oposición de los habitantes locales. El Señor respondió con D&C 58, una de las revelaciones más ricas en principios para la vida práctica. Las dos enseñanzas centrales de la primera parte son: las tribulaciones son parte del proceso de preparación para las bendiciones mayores, no evidencia de abandono de Dios; y el Señor espera que Sus siervos usen su propia iniciativa para hacer el bien sin esperar ser instruidos en cada detalle. Este último principio —la iniciativa personal en el bien— es uno de los más aplicables a la vida de los jóvenes hoy."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 58:3–4",
            texto: "Vosotros no podéis contemplar con vuestros ojos naturales, por ahora, los designios de vuestro Dios en cuanto a las cosas que vendrán después, y la gloria que seguirá después de mucha tribulación. Porque después de mucha tribulación vienen las bendiciones.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=spa&id=p3-p4#p3"
          },
          {
            referencia: "Doctrina y Convenios 58:26–28",
            texto: "Porque he aquí, no es conveniente que yo mande en todas las cosas; porque el que es compelido en todas las cosas, ese es un siervo perezoso y no sabio. En verdad os digo, los hombres deberían ser ansiosamente dedicados a toda buena causa, y hacer muchas cosas por su propia voluntad, y llevar a cabo mucha rectitud.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=spa&id=p26-p28#p26"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Quentin L. Cook",
        fuente: "Liahona, mayo de 2012, pág. 34",
        texto: "El Señor no nos diseñó para ser siervos pasivos que esperan instrucciones en cada detalle. Él nos dio agencia, inteligencia y corazón para usarlos activamente en el bien. Un discípulo maduro de Cristo es aquel que busca activamente oportunidades de servir, bendecir y hacer el bien sin necesitar que el Señor lo compela en cada acción."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 58:3–4 y 26–28 establecen dos principios complementarios: las tribulaciones tienen propósito y preceden a grandes bendiciones, y los discípulos maduros de Cristo actúan con iniciativa personal en el bien sin esperar ser compelidos en todo. Estos principios transforman la manera en que los jóvenes responden a las dificultades (con perspectiva eterna) y a las oportunidades de servicio (con proactividad y entusiasmo)."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué significa que 'después de mucha tribulación vienen las bendiciones' para tu vida personal?",
          "¿Por qué dice el Señor en D&C 58:26 que no le conviene 'mandar en todas las cosas'?",
          "¿Cuál es la diferencia entre un 'siervo perezoso' y un 'siervo ansiosamente dedicado al bien'?",
          "¿Qué oportunidades de hacer el bien tienes a tu alrededor que no requieren que nadie te pida hacerlo?",
          "¿Cómo puede la perspectiva de D&C 58:3–4 cambiar tu actitud hacia las dificultades actuales?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 64 — D&C 58 Parte 2
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "64-dc-58-parte-2",
    title: "Doctrina y Convenios 58, Parte 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/188-doctrine-and-covenants-58-part-2?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El arrepentimiento completo: confesar y abandonar el pecado",
    secciones: [
      {
        tipo: "contexto",
        contenido: "La segunda parte de D&C 58 contiene uno de los pasajes más citados sobre el arrepentimiento genuino en toda la Escritura restaurada: 'el que ha pecado y se ha arrepentido de sus pecados, le serán perdonados; y el que ha pecado y no se arrepiente, de él quedará el pecado' (D&C 58:42). El Señor explica que cuando se arrepiente genuinamente, Él ya no recuerda el pecado. Pero también explica que el arrepentimiento verdadero requiere confesión y abandono: 'el que se arrepiente de sus pecados y los confiesa, los abandona también' (D&C 58:43). Esta revelación también trata el peligro de transgredir los convenios sagrados que el Señor ha dado, y las consecuencias de hacerlo de manera intencional."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 58:42–43",
            texto: "He aquí, el que ha pecado y se ha arrepentido de sus pecados, le serán perdonados; y el que ha pecado y no se arrepiente, de él quedará el pecado hasta el día del juicio. Y de nuevo os digo: Yo el Señor no los recuerdo más. Por este motivo os digo que se alegrará mi corazón; el que se arrepiente de sus pecados y los confiesa, los abandona también.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=spa&id=p42-p43#p42"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Liahona, noviembre de 2019, pág. 97",
        texto: "El arrepentimiento es el regalo más misericordioso que Jesucristo nos ha dado. Cuando nos arrepentimos sinceramente, Él no solo perdona; también olvida. 'Yo el Señor no los recuerdo más.' Eso significa una limpieza completa, una nueva oportunidad, un nuevo comienzo. El arrepentimiento no es un castigo; es una liberación."
      },
      {
        tipo: "conclusion",
        contenido: "D&C 58:42–43 revela que el arrepentimiento genuino tiene tres componentes: confesar (reconocer honestamente el pecado ante Dios y, cuando corresponde, ante el líder eclesiástico), abandonar (dejar completamente el comportamiento pecaminoso), y recibir el perdón (la promesa del Señor de que no lo recordará más). Cuando estos tres elementos están presentes, la limpieza es completa y real. Esta doctrina debe dar esperanza a todo joven que haya cometido errores: no importa qué tan serio sea el error, el arrepentimiento genuino hace posible la limpieza completa."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuáles son los dos componentes del arrepentimiento genuino que describe D&C 58:42–43?",
          "¿Qué significa la promesa 'Yo el Señor no los recuerdo más' para alguien que se arrepiente?",
          "¿Por qué el arrepentimiento requiere tanto la confesión como el abandono del pecado?",
          "¿Cómo puede esta doctrina del arrepentimiento completo dar esperanza a alguien que se siente atrapado por un error del pasado?",
          "¿Qué diferencia existe entre sentir remordimiento y arrepentirse genuinamente?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN — Práctica Dominio de la Doctrina 2 (semana 10)
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "178-dominio-2",
    title: "Práctica del Dominio de la Doctrina 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/526-doctrinal-mastery-doctrine-and-covenants-6-36?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Uso práctico y explicación de pasajes clave de las Escrituras",
    secciones: [
      {
        tipo: "contexto",
        contenido: "La Práctica del Dominio de la Doctrina 2 es una lección de repaso y aplicación de los pasajes del Dominio de la Doctrina estudiados hasta el momento. A estas alturas del año, los alumnos deben tener memorizados o en proceso de memorizar: D&C 1:37–38, D&C 6:36, D&C 8:2–3, D&C 13:1, D&C 18:10–11, D&C 19:16–19 (pasaje central). Esta lección practica la capacidad de ubicar rápidamente estos pasajes, explicar su doctrina central con propias palabras, y aplicarlos a situaciones específicas de la vida. El objetivo no es recitar pasajes mecánicamente sino internalizar las verdades que contienen de manera que puedan ser usadas naturalmente en conversaciones sobre el evangelio, en respuesta a preguntas difíciles, y en momentos de necesidad personal."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 19:16–19",
            texto: "Porque he aquí, yo, Dios, he sufrido estas cosas por todos, para que no sufran ellos si se arrepienten; mas si no se arrepienten, forzosamente sufrirán aun como yo; lo cual sufrimiento me causó a mí, aun a Dios, el mayor de todos, temblar de dolor y sangrar de cada poro.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p16-p19#p16"
          },
          {
            referencia: "Doctrina y Convenios 58:42–43",
            texto: "He aquí, el que ha pecado y se ha arrepentido de sus pecados, le serán perdonados; el que se arrepiente de sus pecados y los confiesa, los abandona también.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=spa&id=p42-p43#p42"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Richard G. Scott",
        fuente: "Liahona, mayo de 2011, pág. 6",
        texto: "Memorizar pasajes clave de las Escrituras no es solo un ejercicio académico. Es una preparación espiritual. Cuando las Escrituras están en tu corazón y en tu mente, el Espíritu Santo puede traerlas a tu memoria exactamente cuando las necesitas, ya sea para resistir la tentación, para consolar a alguien, o para responder a una pregunta difícil sobre el evangelio."
      },
      {
        tipo: "conclusion",
        contenido: "El Dominio de la Doctrina no es un fin en sí mismo sino un medio para estar siempre preparado para dar razón de la esperanza que hay en nosotros (1 Pedro 3:15). Cuando los pasajes clave están en el corazón y en la mente, el Espíritu puede usarlos en el momento exacto que se necesiten. Esta práctica consolida lo aprendido y prepara a los alumnos para el siguiente bloque de estudio con una base sólida de verdades memorizadas y comprendidas."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué pasajes del Dominio de la Doctrina puedes recitar de memoria actualmente?",
          "¿Cómo explicarías D&C 19:16–19 con tus propias palabras a alguien que no conoce el evangelio?",
          "¿En qué situación específica podrías usar D&C 6:36 para ayudar a alguien?",
          "¿Cómo se relacionan entre sí los pasajes D&C 18:10–11 y D&C 19:16–19?",
          "¿Qué método de memorización te ha resultado más efectivo y por qué?"
        ]
      }
    ],
    questions: []
  }
]