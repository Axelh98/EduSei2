import type { FlatLesson } from "../types"

/**
 * Jesucristo y Su evangelio sempiterno
 * Religión 250 — Material de preparación para la clase (2023)
 * https://www.churchofjesuschrist.org/study/manual/jesus-christ-and-his-everlasting-gospel-class-prep-material-2023
 *
 * Estructura: 6 unidades, 28 lecciones
 */

const BASE_URL =
  "https://www.churchofjesuschrist.org/study/manual/jesus-christ-and-his-everlasting-gospel-class-prep-material-2023"

export const religion250Lessons: FlatLesson[] = [

  // ─── UNIDAD 1: Venir a Cristo ─────────────────────────────────────────────
  {
    id: "r250-l01",
    title: "Lección 1: Aceptar la invitación del Salvador a aprender de Él",
    description:
      "El Salvador nos invita personalmente a conocerlo. Descubre cómo responder a esa invitación.",
    type: "Religión 250",
    unitTitle: "Venir a Cristo",
    unitNumber: 1,
    chapterUrl: `${BASE_URL}/lesson-01-class-prep?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [

          // ── Párrafo introductorio ──────────────────────────────────────────
          {
            tipo: "parrafo",
            texto:
              "Imagina que vives en Palestina durante el ministerio del Señor. Has escuchado cosas asombrosas sobre un maestro llamado Jesús de Nazaret y sientes un gran deseo de escucharlo. El día que lo encuentras, Él está enseñando a una multitud y al final hace una invitación que puede cambiar vidas. Esa invitación es el corazón de esta lección: «Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.»",
          },

          // ── Escritura central ──────────────────────────────────────────────
          {
            tipo: "escritura",
            referencia: "Mateo 11:28–30",
            texto:
              "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas. Porque mi yugo es fácil, y ligera mi carga.",
            comentario:
              "En la agricultura bíblica, el yugo unía a dos bueyes para que el más fuerte cargara el mayor peso. Cristo se ofrece como ese buey fuerte: cuando nos uncimos a Él, no cargamos solos el peso de la vida.",
          },

          // ── Párrafo de desarrollo ──────────────────────────────────────────
          {
            tipo: "parrafo",
            texto:
              "La invitación «aprende de mí» tiene dos significados profundamente relacionados. El primero es aprender a conocerlo — nacer espiritualmente de Él, experimentar un cambio de corazón y llegar a ser Sus hijos e hijas. El segundo es aprender de Su ejemplo perfecto, sumergiéndonos en las Escrituras y actuando con fe para que Él magnifique nuestra capacidad de actuar justamente.",
          },

          // ── Cita profética ─────────────────────────────────────────────────
          {
            tipo: "cita",
            autor: "Élder Kim B. Clark",
            fuente: "Discurso dirigido a maestros del SEI, 26 de enero de 2018",
            texto:
              "La invitación del Salvador, «aprende de mí», tiene dos significados relacionados. El primero: Aprende a conocerme — conocerlo es nacer espiritualmente de Él, experimentar un cambio de corazón y llegar a ser Sus hijos e hijas. El segundo: Aprende de mi ejemplo — al sumergirnos en las Escrituras, aprendemos de Su ejemplo perfecto; Él promete magnificar nuestra capacidad de actuar justamente y ayudarnos a llegar a ser más como Él.",
          },

          // ── Escritura sobre el aprendizaje espiritual ──────────────────────
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 88:118",
            texto:
              "Buscad diligentemente y enseñaos el uno al otro palabras de sabiduría; sí, buscad palabras de sabiduría de los mejores libros; buscad conocimiento, tanto por el estudio como por la fe.",
            comentario:
              "El Señor estableció dos canales complementarios: estudio intelectual y fe activa. El método científico es valioso, pero por sí solo nunca brindará conocimiento espiritual. Necesitamos ambos.",
          },

          // ── Escritura sobre la paz ─────────────────────────────────────────
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 19:23",
            texto:
              "Aprended de mí, y escuchad mis palabras; andad en la mansedumbre de mi Espíritu, y tendréis paz en mí.",
            comentario:
              "El Señor conecta directamente el aprender de Él con recibir paz. No es una promesa abstracta; es la consecuencia concreta del discipulado diario.",
          },

          // ── Cita sobre venir a Cristo en la vida diaria ────────────────────
          {
            tipo: "cita",
            autor: "Élder Richard G. Scott (1928–2015)",
            fuente: "«Haz del ejercicio de tu fe tu mayor prioridad», Liahona, noviembre de 2014, pág. 92",
            texto:
              "Cuando oramos por la mañana y por la noche en forma constante, estudiamos las Escrituras diariamente, tenemos la noche de hogar todas las semanas y asistimos al templo regularmente, estamos respondiendo activamente a Su invitación de «venid a Mí».",
          },

          // ── Párrafo sobre el yugo ──────────────────────────────────────────
          {
            tipo: "parrafo",
            texto:
              "El élder David A. Bednar enseñó que el hacer y guardar convenios sagrados nos ata al Señor Jesucristo y al yugo junto con Él. No aumenta nuestra carga — la comparte. Cuando estamos uncidos con Jesucristo, Él lleva la parte más pesada y nosotros compartimos el gozo del trabajo.",
          },

          // ── Puntos doctrinales ─────────────────────────────────────────────
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo invita personalmente a cada uno de nosotros a aprender de Él y a experimentar Su paz (Mateo 11:28–30).",
              "«Aprender de Cristo» tiene dos dimensiones: conocerlo íntimamente (relación) y aprender de Su ejemplo perfecto (imitación).",
              "El conocimiento espiritual requiere tanto estudio diligente como fe activa; ninguno es suficiente por sí solo (DyC 88:118).",
              "Al uncirse al Salvador — hacer y guardar convenios — Él comparte nuestra carga y nos da acceso a Su fortaleza.",
              "La paz que promete el Salvador no es ausencia de dificultades, sino presencia de Su Espíritu en medio de ellas.",
              "La Primera Presidencia y el Cuórum de los Doce declararon: «Ninguna otra persona ha ejercido una influencia tan profunda sobre todos los que han vivido y los que aún vivirán sobre la tierra» (El Cristo Viviente, 2000).",
            ],
          },

          // ── Preguntas de reflexión ─────────────────────────────────────────
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué cargas o fuentes de estrés llevas ahora mismo? ¿Cómo cambiaría tu perspectiva si imaginaras al Salvador uncido al yugo junto a ti?",
              "¿Cuál es la diferencia entre 'aprender sobre Cristo' (datos, historia) y 'aprender de Cristo' (relación, transformación)? ¿En cuál de los dos invertís más tiempo?",
              "¿Qué hábito concreto — oración, estudio de Escrituras, asistencia al templo — podrías fortalecer esta semana como respuesta personal a la invitación 'venid a mí'?",
              "El Élder Clark habla de nacer espiritualmente de Cristo. ¿Qué significa eso en términos prácticos para un estudiante de Instituto hoy?",
            ],
          },

        ],
      },
    ],

    questions: [
      {
        id: 1,
        type: "multiple",
        question:
          "Según Mateo 11:28–30, ¿qué promete el Salvador a quienes acuden a Él?",
        options: [
          "Eliminar completamente sus dificultades",
          "Darles descanso y aliviar su carga",
          "Concederles riquezas y prosperidad",
          "Liberarlos de toda responsabilidad",
        ],
        correctAnswer: 1,
        explanation:
          "El Salvador promete descanso y que Su yugo es fácil y Su carga ligera. No elimina las dificultades sino que las comparte con nosotros.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Cuáles son los dos significados de «aprende de mí» según el Élder Kim B. Clark?",
        options: [
          "Leer las Escrituras y asistir a la Iglesia",
          "Conocer a Cristo personalmente y seguir Su ejemplo perfecto",
          "Estudiar teología y hacer misión",
          "Orar diariamente y pagar el diezmo",
        ],
        correctAnswer: 1,
        explanation:
          "El Élder Clark enseñó que la invitación tiene dos dimensiones: conocer a Cristo íntimamente (cambio de corazón) y aprender de Su ejemplo perfecto para llegar a ser como Él.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según DyC 88:118, el conocimiento espiritual se obtiene únicamente a través del estudio intelectual, sin necesidad de la fe.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation:
          "Falso. El versículo enseña que debemos buscar conocimiento «tanto por el estudio como por la fe». Ambos son necesarios; el intelecto solo no es suficiente.",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Qué representa el yugo en la metáfora de Mateo 11:29–30?",
        options: [
          "Una carga adicional que el Señor nos impone",
          "Un símbolo de obediencia ciega",
          "Una unión con Cristo para que Él ayude a cargar el peso de la vida",
          "Las ordenanzas del bautismo y la confirmación",
        ],
        correctAnswer: 2,
        explanation:
          "En la agricultura bíblica, el yugo unía dos bueyes. Cristo, el buey fuerte, se une a nosotros para cargar juntos. No aumenta nuestra carga — la comparte.",
      },
      {
        id: 5,
        type: "truefalse",
        question:
          "Verdadero o Falso: El Élder Richard G. Scott enseñó que la oración diaria y el estudio de Escrituras son formas concretas de responder a la invitación «venid a mí» del Salvador.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El Élder Scott listó específicamente la oración mañana y noche, el estudio diario de Escrituras, la noche de hogar y la asistencia al templo como respuestas activas a la invitación del Salvador.",
      },
      {
        id: 6,
        type: "multiple",
        question:
          "¿Qué escritura conecta directamente el aprender de Cristo con recibir paz?",
        options: [
          "Juan 14:6",
          "Doctrina y Convenios 19:23",
          "2 Nefi 2:6–8",
          "Alma 7:11",
        ],
        correctAnswer: 1,
        explanation:
          "DyC 19:23 dice: «Aprended de mí, y escuchad mis palabras; andad en la mansedumbre de mi Espíritu, y tendréis paz en mí.»",
      },
      {
        id: 7,
        type: "truefalse",
        question:
          "Verdadero o Falso: La Primera Presidencia y el Cuórum de los Doce Apóstoles declararon en «El Cristo Viviente» que ninguna persona ha ejercido una influencia tan profunda como Jesucristo sobre todos los que han vivido.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. Esa declaración abre el documento «El Cristo Viviente: El Testimonio de los Apóstoles» (2000) y es citada en el material de preparación de esta lección.",
      },
    ],
  },

  // ─── Lección 2 ────────────────────────────────────────────────────────────
  {
    id: "r250-l02",
    title: "Lección 2: Fortalecer nuestro testimonio del Cristo Viviente",
    description:
      "El testimonio de Jesucristo es la base de nuestra fe y puede crecer continuamente.",
    type: "Religión 250",
    unitTitle: "Venir a Cristo",
    unitNumber: 1,
    chapterUrl: `${BASE_URL}/lesson-02-class-prep?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Imagina el pesar y el dolor que los seguidores de Jesucristo debieron de haber sentido al verlo sufrir y morir en la cruz. Al no comprender plenamente Su misión, probablemente se sintieron confundidos y solos cuando colocaron Su cuerpo en el sepulcro. Puedes imaginar su gozo y asombro cuando, solo unos días después, lo vieron con vida. ¡Ahora podían testificar que Él es el Cristo Viviente! Nosotros también podemos obtener ese mismo testimonio.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 20:30–31",
            texto:
              "Y hizo Jesús muchas otras señales en presencia de Sus discípulos, las cuales no están escritas en este libro. Pero estas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en Su nombre.",
            comentario:
              "Juan escribió su evangelio con un propósito específico: fortalecer el testimonio de sus lectores. Cada milagro, cada diálogo, cada testimonio registrado fue escogido para invitar a creer que Jesús es el Cristo.",
          },
          {
            tipo: "parrafo",
            texto:
              "La palabra «Cristo» en griego significa «el ungido» y es equivalente a la palabra hebrea «Mesías». Cuando Andrés encontró a su hermano Simón Pedro y anunció «Hemos hallado al Cristo» (Juan 1:41), estaba declarando que Jesús era el Rey y Libertador prometido que los judíos esperaban ansiosamente. El título es una afirmación doctrinal de la mayor importancia.",
          },
          {
            tipo: "escritura",
            referencia: "Mateo 16:15–17",
            texto:
              "Él les dijo: Y vosotros, ¿quién decís que soy yo? Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente. Entonces Jesús le dijo: Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos.",
            comentario:
              "El Salvador señala algo crucial: los testimonios verdaderos de Cristo no provienen de argumentos humanos ni de evidencias físicas solamente, sino de la revelación del Padre a través del Espíritu Santo.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«Cómo obtener el poder de Jesucristo en nuestra vida», Liahona, mayo de 2017, pág. 40",
            texto:
              "Muchos miembros han memorizado las verdades que contiene [El Cristo Viviente]; otros apenas saben que existe. A medida que procuran aprender más acerca de Jesucristo, los insto a estudiar El Cristo Viviente.",
          },
          {
            tipo: "parrafo",
            texto:
              "«El Cristo Viviente: El Testimonio de los Apóstoles» fue publicado el 1 de enero del año 2000, en conmemoración del natalicio del Salvador hace dos milenios. Los Apóstoles testifican: «Ninguna otra persona ha ejercido una influencia tan profunda sobre todos los que han vivido y los que aún vivirán sobre la tierra. Él fue el Gran Jehová del Antiguo Testamento y el Mesías del Nuevo Testamento.» Este documento inspirado puede fortalecer y anclar nuestro testimonio.",
          },
          {
            tipo: "cita",
            autor: "Élder Neil L. Andersen",
            fuente: "«Hablamos de Cristo», Liahona, noviembre de 2020, pág. 88",
            texto:
              "A medida que el mundo hable menos de Jesucristo, hablemos nosotros más de Él. Conforme se manifieste nuestro verdadero carácter como discípulos Suyos, muchas personas a nuestro alrededor estarán preparadas para escuchar.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 107:23",
            texto:
              "Las doce viajantes especiales que se escogieron y ordenaros de conformidad con los mandamientos del Señor son los testigos especiales del nombre de Cristo en todo el mundo.",
            comentario:
              "El Señor ha llamado Apóstoles para testificar de Él ante todas las personas. Sus testimonios modernos complementan y refuerzan los testimonios bíblicos del Cristo resucitado.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "El testimonio de que Jesucristo vive es la base de todo lo demás en el Evangelio restaurado.",
              "Los testimonios verdaderos del Salvador provienen de la revelación del Padre a través del Espíritu Santo (Mateo 16:17).",
              "«El Cristo Viviente» es el testimonio oficial de la Primera Presidencia y el Cuórum de los Doce Apóstoles del Salvador resucitado.",
              "Memorizar y estudiar «El Cristo Viviente» puede fortalecer y profundizar nuestra comprensión de las funciones divinas del Señor.",
              "Al compartir nuestro testimonio del Salvador, invitamos al Espíritu Santo a tocar los corazones de quienes nos escuchan.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué evidencia has visto en tu vida o en la vida de otras personas de que Jesucristo vive hoy?",
              "Cuando escuchas el testimonio de los Apóstoles vivientes del Señor, ¿cómo influye en tu propio testimonio?",
              "¿Qué verdad de «El Cristo Viviente» te ha impresionado más? ¿Cómo podrías compartirla con alguien esta semana?",
              "El presidente Nelson enseñó que memorizar «El Cristo Viviente» puede cambiar a una persona. ¿Qué pasos puedes tomar para estudiarlo más profundamente?",
            ],
          },
        ],
      },
    ],

    questions: [
      {
        id: 1,
        type: "multiple",
        question:
          "Según Juan 20:30–31, ¿cuál fue el propósito principal de Juan al escribir su evangelio?",
        options: [
          "Registrar todos los milagros de Jesús para la historia",
          "Para que los lectores crean que Jesús es el Cristo y tengan vida en Su nombre",
          "Corregir los errores de los otros evangelistas",
          "Convencer a los líderes judíos de la divinidad de Cristo",
        ],
        correctAnswer: 1,
        explanation:
          "Juan declara explícitamente su propósito: que los lectores «crean que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en Su nombre».",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Cómo recibió Simón Pedro su testimonio de que Jesús es el Cristo, según Mateo 16:17?",
        options: [
          "Por haber visto los milagros de Jesús",
          "Por las enseñanzas de los rabinos judíos",
          "Mediante revelación del Padre Celestial",
          "Por leer las profecías del Antiguo Testamento",
        ],
        correctAnswer: 2,
        explanation:
          "Jesús declaró: «no te lo reveló carne ni sangre, sino mi Padre que está en los cielos». El testimonio verdadero proviene de revelación divina, no solo de evidencia humana.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: «El Cristo Viviente: El Testimonio de los Apóstoles» fue publicado el 1 de enero de 2000 para conmemorar los 2000 años del nacimiento del Salvador.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. La Primera Presidencia y el Cuórum de los Doce publicaron este documento histórico al inicio del nuevo milenio como su testimonio especial del Salvador.",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Qué significa el título «Cristo» según el material de la lección?",
        options: [
          "Salvador de Israel",
          "Hijo de Dios",
          "El ungido; equivalente a Mesías en hebreo",
          "El maestro eterno",
        ],
        correctAnswer: 2,
        explanation:
          "La palabra griega «Cristo» significa «el ungido» y es el equivalente de la palabra hebrea Mesías. Es un título que denota al Rey y Libertador prometido.",
      },
      {
        id: 5,
        type: "truefalse",
        question:
          "Verdadero o Falso: El Élder Andersen enseñó que a medida que el mundo hable menos de Jesucristo, los discípulos deben hablar más de Él.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El Élder Andersen invitó a los discípulos del Salvador a aumentar su testimonio verbal de Cristo precisamente cuando el mundo tiende a silenciarlo.",
      },
      {
        id: 6,
        type: "multiple",
        question:
          "Según DyC 107:23, ¿cuál es la función específica de los Doce Apóstoles?",
        options: [
          "Administrar las finanzas de la Iglesia a nivel mundial",
          "Ser testigos especiales del nombre de Cristo en todo el mundo",
          "Presidir cada una de las congregaciones locales",
          "Traducir las escrituras a todos los idiomas",
        ],
        correctAnswer: 1,
        explanation:
          "Los Doce son llamados específicamente como «testigos especiales del nombre de Cristo en todo el mundo». Su misión principal es testificar del Salvador.",
      },
    ],
  },

  // ─── UNIDAD 2: El ministerio preterrenal de Jesucristo ────────────────────
  {
    id: "r250-l03",
    title: "Lección 3: Confiar en Jesucristo, nuestro Salvador y líder preterrenal",
    description:
      "Antes de nacer en esta tierra, Jesucristo ya era nuestro líder y defensor.",
    type: "Religión 250",
    unitTitle: "El ministerio preterrenal de Jesucristo",
    unitNumber: 2,
    chapterUrl: `${BASE_URL}/lesson-03-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l04",
    title: "Lección 4: Encontrar propósito y gozo en las creaciones del Señor",
    description:
      "La Creación revela el amor y el poder de Jesucristo, y tiene un propósito eterno.",
    type: "Religión 250",
    unitTitle: "El ministerio preterrenal de Jesucristo",
    unitNumber: 2,
    chapterUrl: `${BASE_URL}/lesson-04-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l05",
    title: "Lección 5: Llegar a ser el pueblo del convenio del Señor",
    description:
      "Dios llama a Su pueblo mediante convenios. Aprende lo que significa ser parte de ese pueblo.",
    type: "Religión 250",
    unitTitle: "El ministerio preterrenal de Jesucristo",
    unitNumber: 2,
    chapterUrl: `${BASE_URL}/lesson-05-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l06",
    title: "Lección 6: Utilizar el simbolismo para comprender mejor el poder redentor de Cristo",
    description:
      "Los símbolos del Antiguo Testamento anticipan y testifican de Jesucristo.",
    type: "Religión 250",
    unitTitle: "El ministerio preterrenal de Jesucristo",
    unitNumber: 2,
    chapterUrl: `${BASE_URL}/lesson-06-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l07",
    title: "Lección 7: Aceptar la justicia, la misericordia y el amor de Dios",
    description:
      "La justicia y la misericordia de Dios se reconcilian en Jesucristo.",
    type: "Religión 250",
    unitTitle: "El ministerio preterrenal de Jesucristo",
    unitNumber: 2,
    chapterUrl: `${BASE_URL}/lesson-07-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l08",
    title: "Lección 8: Aceptar a Jesucristo como el Mesías prometido",
    description:
      "Las profecías del Mesías se cumplen perfectamente en Jesucristo.",
    type: "Religión 250",
    unitTitle: "El ministerio preterrenal de Jesucristo",
    unitNumber: 2,
    chapterUrl: `${BASE_URL}/lesson-08-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },

  // ─── UNIDAD 3: El ministerio terrenal de Jesucristo ──────────────────────
  {
    id: "r250-l09",
    title: "Lección 9: Regocijarse en el nacimiento divino de Jesucristo",
    description:
      "El nacimiento de Jesucristo es el acontecimiento más importante de la historia.",
    type: "Religión 250",
    unitTitle: "El ministerio terrenal de Jesucristo",
    unitNumber: 3,
    chapterUrl: `${BASE_URL}/lesson-09-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l10",
    title: "Lección 10: Seguir el ejemplo de sumisión de Jesucristo",
    description:
      "Jesús siempre hizo la voluntad del Padre. Podemos seguir ese mismo ejemplo.",
    type: "Religión 250",
    unitTitle: "El ministerio terrenal de Jesucristo",
    unitNumber: 3,
    chapterUrl: `${BASE_URL}/lesson-10-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l11",
    title: "Lección 11: Disfrutar de las bendiciones de la Iglesia del Señor",
    description:
      "La Iglesia de Jesucristo restaurada provee las ordenanzas y bendiciones necesarias.",
    type: "Religión 250",
    unitTitle: "El ministerio terrenal de Jesucristo",
    unitNumber: 3,
    chapterUrl: `${BASE_URL}/lesson-11-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l12",
    title: "Lección 12: Encontrar la verdad pura en las enseñanzas de Jesucristo",
    description:
      "Las enseñanzas de Cristo son perfectas y nos guían hacia la vida eterna.",
    type: "Religión 250",
    unitTitle: "El ministerio terrenal de Jesucristo",
    unitNumber: 3,
    chapterUrl: `${BASE_URL}/lesson-12-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l13",
    title: "Lección 13: Ministrar como el Salvador",
    description:
      "El Salvador ministró individualmente a cada persona. Podemos seguir ese modelo.",
    type: "Religión 250",
    unitTitle: "El ministerio terrenal de Jesucristo",
    unitNumber: 3,
    chapterUrl: `${BASE_URL}/lesson-13-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l14",
    title: "Lección 14: Reconocer los milagros del Salvador",
    description:
      "Los milagros de Jesús demuestran Su poder divino y Su compasión infinita.",
    type: "Religión 250",
    unitTitle: "El ministerio terrenal de Jesucristo",
    unitNumber: 3,
    chapterUrl: `${BASE_URL}/lesson-14-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },

  // ─── UNIDAD 4: La expiación de Jesucristo ────────────────────────────────
  {
    id: "r250-l15",
    title: "Lección 15: Acercarse más a Jesucristo mediante la Santa Cena",
    description:
      "La Santa Cena es una ordenanza sagrada que nos une con el Salvador cada semana.",
    type: "Religión 250",
    unitTitle: "La expiación de Jesucristo",
    unitNumber: 4,
    chapterUrl: `${BASE_URL}/lesson-15-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l16",
    title: "Lección 16: Aceptar el gran sacrificio expiatorio del Salvador",
    description:
      "En Getsemaní y en la cruz, Jesucristo pagó el precio infinito por nuestros pecados.",
    type: "Religión 250",
    unitTitle: "La expiación de Jesucristo",
    unitNumber: 4,
    chapterUrl: `${BASE_URL}/lesson-16-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l17",
    title: "Lección 17: Hallar esperanza en la victoria de Jesucristo sobre la muerte",
    description:
      "La Resurrección de Cristo garantiza la inmortalidad para toda la humanidad.",
    type: "Religión 250",
    unitTitle: "La expiación de Jesucristo",
    unitNumber: 4,
    chapterUrl: `${BASE_URL}/lesson-17-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l18",
    title: "Lección 18: Recibir el don divino de la gracia del Salvador",
    description:
      "La gracia de Cristo no solo nos salva, también nos capacita para llegar a ser más.",
    type: "Religión 250",
    unitTitle: "La expiación de Jesucristo",
    unitNumber: 4,
    chapterUrl: `${BASE_URL}/lesson-18-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },

  // ─── UNIDAD 5: El ministerio posterrenal de Jesucristo ───────────────────
  {
    id: "r250-l19",
    title: "Lección 19: Ayudar al Señor en la redención de los muertos",
    description:
      "La obra del templo extiende las bendiciones de la Expiación a todos los hijos de Dios.",
    type: "Religión 250",
    unitTitle: "El ministerio posterrenal de Jesucristo",
    unitNumber: 5,
    chapterUrl: `${BASE_URL}/lesson-19-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l20",
    title: "Lección 20: Hallar mi lugar en el rebaño del Buen Pastor",
    description:
      "Cristo conoce a cada una de Sus ovejas individualmente y cuida de ellas.",
    type: "Religión 250",
    unitTitle: "El ministerio posterrenal de Jesucristo",
    unitNumber: 5,
    chapterUrl: `${BASE_URL}/lesson-20-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l21",
    title: "Lección 21: Escuchar la voz del Señor en los últimos días",
    description:
      "Dios sigue hablando hoy a través de profetas, escrituras y el Espíritu Santo.",
    type: "Religión 250",
    unitTitle: "El ministerio posterrenal de Jesucristo",
    unitNumber: 5,
    chapterUrl: `${BASE_URL}/lesson-21-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l22",
    title: "Lección 22: Participar con Jesucristo en la Restauración continua",
    description:
      "La Restauración no terminó con José Smith; somos parte activa de ella hoy.",
    type: "Religión 250",
    unitTitle: "El ministerio posterrenal de Jesucristo",
    unitNumber: 5,
    chapterUrl: `${BASE_URL}/lesson-22-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l23",
    title:
      "Lección 23: Vivir con esperanza conforme nos preparamos para la segunda venida de Jesucristo",
    description:
      "La Segunda Venida del Salvador es una promesa gloriosa que nos motiva a vivir con fe.",
    type: "Religión 250",
    unitTitle: "El ministerio posterrenal de Jesucristo",
    unitNumber: 5,
    chapterUrl: `${BASE_URL}/lesson-23-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l24",
    title: "Lección 24: Confiar en Jesucristo como nuestro Juez",
    description:
      "El Juez de toda la humanidad es el mismo que nos amó y murió por nosotros.",
    type: "Religión 250",
    unitTitle: "El ministerio posterrenal de Jesucristo",
    unitNumber: 5,
    chapterUrl: `${BASE_URL}/lesson-24-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },

  // ─── UNIDAD 6: Llegar a ser discípulos de Jesucristo ─────────────────────
  {
    id: "r250-l25",
    title: "Lección 25: Esforzarse por ser un discípulo fiel de Jesucristo",
    description:
      "El discipulado es un compromiso diario de seguir al Salvador.",
    type: "Religión 250",
    unitTitle: "Llegar a ser discípulos de Jesucristo",
    unitNumber: 6,
    chapterUrl: `${BASE_URL}/lesson-25-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l26",
    title: "Lección 26: Llegar a ser más semejantes a Jesucristo",
    description:
      "El objetivo final del Evangelio es que lleguemos a tener los atributos de Cristo.",
    type: "Religión 250",
    unitTitle: "Llegar a ser discípulos de Jesucristo",
    unitNumber: 6,
    chapterUrl: `${BASE_URL}/lesson-26-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l27",
    title: "Lección 27: Hallar esperanza en la Luz y la Vida del mundo",
    description:
      "Jesucristo es la luz que ilumina la oscuridad y da vida a todos los que lo siguen.",
    type: "Religión 250",
    unitTitle: "Llegar a ser discípulos de Jesucristo",
    unitNumber: 6,
    chapterUrl: `${BASE_URL}/lesson-27-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r250-l28",
    title: "Lección 28: Ser testigos de Jesucristo",
    description:
      "Como discípulos, somos llamados a testificar de Cristo con nuestra vida y palabras.",
    type: "Religión 250",
    unitTitle: "Llegar a ser discípulos de Jesucristo",
    unitNumber: 6,
    chapterUrl: `${BASE_URL}/lesson-28-class-prep?lang=spa`,
    secciones: [],
    questions: [],
  },
]