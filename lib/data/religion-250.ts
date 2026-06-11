import type { FlatLesson } from "../types"

import {
  r250Leccion01Questions,
  r250Leccion02Questions,
  r250Leccion03Questions,
  r250Leccion04Questions,
  r250Leccion05Questions,
  r250Leccion06Questions,
  r250Leccion07Questions,
  r250Leccion08Questions,
  r250Leccion09Questions,
  r250Leccion10Questions,
  r250Leccion11Questions,
  r250Leccion12Questions,
  r250Leccion13Questions,
  r250Leccion14Questions,
  r250Leccion15Questions,
  r250Leccion16Questions,
  r250Leccion17Questions,
  r250Leccion18Questions,
  r250Leccion19Questions,
  r250Leccion20Questions,
  r250Leccion21Questions
} from "./religion-250/questions"

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

    questions: r250Leccion01Questions,
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

    questions: r250Leccion02Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Aunque no lo recuerdes, tu experiencia con Jesucristo comenzó mucho antes de nacer en esta tierra. En el Gran Concilio de los cielos, cuando el Padre Celestial presentó Su plan de salvación, fue Jehová —el Cristo preterrenal— quien se ofreció voluntariamente: «Heme aquí; envíame» (Abraham 3:27). Esa relación y ese conocimiento pueden brindar propósito y significado profundo a tu vida actual.",
          },
          {
            tipo: "escritura",
            referencia: "Abraham 3:22–23",
            texto:
              "Y el Señor me dijo: Estas dos cosas existen desde antes; la una fue más inteligente que la otra; no había dos entre ellas; él era más inteligente que todas; y el Señor me dijo: Soy el Señor tu Dios, soy más inteligente que todas ellas.",
            comentario:
              "Abraham aprendió que entre todos los espíritus preterrenales, Jesucristo era «más inteligente que todos». El Élder Neal A. Maxwell enseñó que lo que el Señor sabe es infinitamente más — no apenas un poco más — que la combinación del conocimiento de todos los mortales juntos.",
          },
          {
            tipo: "escritura",
            referencia: "Moisés 4:1–2",
            texto:
              "Y yo, el Señor Dios, hablé a Moisés, diciendo: Ese Satanás, a quien también llamaste Lucifer, es el mismo que era desde el principio, y él vino ante mí diciendo: He aquí, aquí estoy yo, envíame, seré tu hijo, y redimiré a toda la humanidad, para que ni siquiera un alma se pierda, y ciertamente haré esto; dame, pues, tu honor. Pero he aquí, mi Hijo Amado, que fue mi Amado y Escogido desde el principio, me dijo: Padre, hágase tu voluntad, y sea la gloria tuya para siempre.",
            comentario:
              "La diferencia entre Satanás y el Salvador es reveladora: Satanás buscó su propio honor y controlar el albedrío. Cristo, en cambio, sometió Su voluntad al Padre y buscó dar toda la gloria a Dios. Esa diferencia define el discipulado.",
          },
          {
            tipo: "cita",
            autor: "Presidente Dieter F. Uchtdorf",
            fuente: "«¡Oh cuán grande es el plan de nuestro Dios!», Liahona, noviembre de 2016, pág. 20",
            texto:
              "Hace mucho tiempo, antes de que la Tierra en la cual vivimos comenzara a existir, Dios nuestro Padre estableció un plan. Ese plan ofreció la manera perfecta para que todos los hijos de Dios reciban la inmortalidad y obtengan la vida eterna.",
          },
          {
            tipo: "escritura",
            referencia: "Apocalipsis 12:10–11",
            texto:
              "Y oí una gran voz en el cielo, que decía: Ahora ha venido la salvación, el poder, y el reino de nuestro Dios, y la autoridad de su Cristo; porque ha sido lanzado fuera el acusador de nuestros hermanos. Y ellos le han vencido por medio de la sangre del Cordero y de la palabra del testimonio de ellos.",
            comentario:
              "En la guerra preterrenal, venciste a Satanás precisamente como lo haces ahora: confiando en la expiación de Cristo y dando testimonio fiel. El mismo patrón que funcionó entonces sigue funcionando hoy.",
          },
          {
            tipo: "parrafo",
            texto:
              "El hecho de que estés aquí en la tierra, con un cuerpo mortal, es prueba de que en la vida preterrenal elegiste seguir a Jesucristo y aceptar el plan del Padre Celestial. Satanás y sus seguidores también están en la tierra, pero como espíritus, y no han olvidado quiénes somos. La buena noticia es que ya demostraste valentía en ese primer conflicto. Puedes confiar en esa misma fortaleza ahora.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo fue escogido como nuestro Salvador desde antes de la fundación del mundo (Abraham 3:27; Moisés 4:2).",
              "En la vida preterrenal, Cristo era «más inteligente que todos» los espíritus; Su conocimiento y poder son infinitos (Abraham 3:19).",
              "La diferencia fundamental entre Cristo y Satanás fue la voluntad: Cristo sometió Su voluntad al Padre; Satanás buscó su propia gloria.",
              "El hecho de tener un cuerpo mortal es evidencia de que en la vida preterrenal elegiste seguir a Cristo.",
              "La misma fe que usaste para vencer a Satanás en el mundo preterrenal (Apocalipsis 12:11) es la que necesitas hoy.",
              "Conocer la grandeza preterrenal de Jesucristo inspira mayor confianza en Él y nos ayuda a enfrentar la oposición de Satanás.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cómo cambia tu perspectiva saber que elegiste seguir a Cristo incluso antes de nacer?",
              "¿De qué manera el conocer la grandeza preterrenal de Jesucristo puede inspirarte a confiar más en Él cuando enfrentas dificultades?",
              "La diferencia entre Cristo y Satanás fue la voluntad: uno sometió la suya al Padre, el otro se rebeló. ¿En qué áreas de tu vida te cuesta someter tu voluntad a la del Padre?",
              "¿Cómo puedes fortalecer tu fe en Jesucristo para resistir mejor las tentaciones e influencias negativas que enfrentas hoy?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion03Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Bajo la dirección del Padre Celestial, Jesucristo creó la tierra y todo lo que hay en ella como parte esencial del plan de salvación. La Creación no fue un accidente cósmico ni un acto impersonal — fue un acto de amor deliberado para proveer un lugar donde los hijos de Dios pudieran vivir, aprender y progresar hacia la vida eterna.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 1:3",
            texto:
              "Todas las cosas por medio de él fueron hechas, y sin él nada de lo que ha sido hecho fue hecho.",
            comentario:
              "El apóstol Juan establece con claridad que Jesucristo es el Creador de todo. «El Cristo Viviente» reafirma esta verdad: «Bajo la dirección de Su Padre, Él fue el Creador de la tierra.»",
          },
          {
            tipo: "escritura",
            referencia: "Moisés 1:39",
            texto:
              "Porque he aquí, esta es mi obra y mi gloria: llevar a cabo la inmortalidad y la vida eterna del hombre.",
            comentario:
              "La Creación existe para un propósito eterno: proveer el escenario donde los hijos de Dios puedan obtener cuerpos mortales, ser probados y alcanzar la inmortalidad y la vida eterna.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«La Creación», Liahona, julio de 2000, pág. 102",
            texto:
              "Jehová creó la tierra para proveer un lugar en el que los hijos de Dios pudieran vivir y progresar hacia la vida eterna. Cada aspecto de la creación — desde la más pequeña célula hasta las galaxias más distantes — refleja la inteligencia y el amor infinitos del Creador.",
          },
          {
            tipo: "parrafo",
            texto:
              "Cuando observamos la naturaleza — la precisión con que la Tierra orbita el sol, la complejidad de una célula viva, la belleza de un amanecer — estamos viendo la firma del Creador. Cada detalle de la Creación es evidencia del poder, la sabiduría y el amor de Jesucristo. El estudio de la ciencia, lejos de contradecir la fe, puede profundizarla al revelarnos la majestuosidad de Su obra.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 59:18–20",
            texto:
              "Y es mi voluntad que el hombre use, con juicio y gratitud, todas las cosas que se hallan sobre la faz y bajo la faz de la tierra. Y también que el hombre se agrada de los productos de la tierra mediante la vista y el oído, y mediante el olfato y el gusto y el tacto. Y es gratamente agradable a mí que le sean dadas en abundancia.",
            comentario:
              "El Señor quiere que disfrutemos de Su Creación con gratitud. El gozo que sentimos al contemplar la naturaleza no es trivial — es una invitación a reconocer y agradecer al Creador.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo, bajo la dirección del Padre, es el Creador de la tierra y de todo lo que existe (Juan 1:3).",
              "La Creación tiene un propósito divino: proveer un lugar para que los hijos de Dios progresen hacia la vida eterna (Moisés 1:39).",
              "Cada aspecto de la Creación refleja la inteligencia, el poder y el amor infinitos de Jesucristo.",
              "La Creación es una fuente legítima de gozo y gratitud; disfrutarla con reconocimiento agrada al Señor (DyC 59:18–20).",
              "El estudio de la naturaleza y la ciencia puede fortalecer el testimonio de Cristo como Creador.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuándo has sentido la presencia o el amor de Dios a través de la naturaleza o la Creación?",
              "¿Cómo cambia tu relación con el mundo natural saber que Jesucristo lo creó deliberadamente para ti y tus hermanos espirituales?",
              "El Señor quiere que disfrutemos Su Creación con gratitud. ¿Qué puedes hacer esta semana para apreciar más conscientemente las creaciones del Señor?",
              "¿De qué manera el saber que la Creación tiene un propósito eterno puede ayudarte a encontrar más sentido en tu vida diaria?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion04Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Desde los tiempos de Adán hasta nuestros días, Dios ha establecido convenios con Sus hijos para unirlos a Él y entre sí. Un convenio es un acuerdo sagrado entre Dios y el hombre: Dios promete bendiciones eternas y el hombre promete obediencia. Jehová — el Cristo preterrenal — fue el Dios de los convenios del Antiguo Testamento, el mismo que hoy nos invita a unirnos a Su pueblo mediante ordenanzas sagradas.",
          },
          {
            tipo: "escritura",
            referencia: "Génesis 17:7",
            texto:
              "Y estableceré mi convenio entre mí y ti, y tu descendencia después de ti en sus generaciones, por convenio perpetuo, para ser tu Dios, y el de tu descendencia después de ti.",
            comentario:
              "El convenio abrahánico es el patrón fundamental: Dios promete ser el Dios de Su pueblo y bendecirlo, y el pueblo promete obediencia y fidelidad. Nosotros somos herederos de ese convenio.",
          },
          {
            tipo: "parrafo",
            texto:
              "Al bautizarnos y recibir las ordenanzas del Evangelio, entramos en el convenio abrahánico. El apóstol Pablo enseñó: «Y si vosotros sois de Cristo, ciertamente linaje de Abraham sois, y herederos según la promesa» (Gálatas 3:29). Ser del pueblo del convenio no es solo una identidad religiosa — es una relación de adopción espiritual con el mismo linaje de Abraham, Isaac y Jacob.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 84:33–34",
            texto:
              "Porque aquel que recibe mis siervos recibe a mí; y aquel que me recibe a mí recibe a mi Padre; y aquel que recibe a mi Padre recibe el reino de mi Padre; por tanto, todas las cosas que el Padre tiene le serán dadas a él.",
            comentario:
              "Los convenios crean cadenas de conexión: con los siervos del Señor, con el Señor mismo y con el Padre. A través de los convenios se nos promete «todas las cosas que el Padre tiene».",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«La senda del convenio del Señor», Liahona, noviembre de 2021, pág. 90",
            texto:
              "Cuando usted hace un convenio con Dios, se vincula a Él y se hace partícipe de Su poder. Cuanto más firmes sean sus convenios y más santos los templos que frecuente, mayor será su comprensión de los exaltados propósitos de Dios para usted.",
          },
          {
            tipo: "escritura",
            referencia: "Moisés 7:18",
            texto:
              "Y el Señor llamó a Su pueblo Sión, porque eran de un mismo corazón y una misma mente, y moraban en justicia; y no había pobres entre ellos.",
            comentario:
              "La sociedad de Enoc es el modelo del pueblo del convenio plenamente realizado: unidad de corazón y mente, justicia colectiva y cuidado mutuo. Los convenios nos transforman individualmente y también comunitariamente.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jehová — el Cristo preterrenal — fue el Dios de los convenios del Antiguo Testamento.",
              "Al bautizarnos entramos en el convenio abrahánico y nos convertimos en linaje espiritual de Abraham (Gálatas 3:29).",
              "Los convenios nos vinculan a Dios y nos dan acceso a Su poder (DyC 84:33–34).",
              "El pueblo del convenio tiene responsabilidad de llevar las bendiciones del Evangelio a toda la familia de la tierra.",
              "Los convenios del templo representan el nivel más alto de compromiso con el Padre Celestial y Jesucristo.",
              "La fidelidad a los convenios construye comunidades de «un mismo corazón y una misma mente» (Moisés 7:18).",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué convenios has hecho con el Señor? ¿Qué tan conscientemente los recuerdas en tu vida diaria?",
              "¿Cómo cambia tu identidad saber que, mediante el bautismo, eres heredero del convenio abrahánico?",
              "El presidente Nelson enseñó que los convenios nos vinculan al poder de Dios. ¿En qué área de tu vida necesitas más acceso a ese poder ahora mismo?",
              "¿Qué puedes hacer para honrar más plenamente tus convenios esta semana?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion05Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Desde Adán, el Señor ha utilizado símbolos poderosos para enseñar verdades eternas sobre Jesucristo y Su expiación. Cada animal sacrificado en el Antiguo Testamento era una señal que apuntaba hacia el futuro Cordero de Dios. Aprender a «leer» estos símbolos nos abre una dimensión completamente nueva en las Escrituras y profundiza nuestra gratitud hacia el Salvador.",
          },
          {
            tipo: "escritura",
            referencia: "Moisés 5:6–7",
            texto:
              "Y Adán fue obediente a los mandamientos del Señor. Y después de muchos días, un ángel del Señor se apareció a Adán y le dijo: ¿Por qué ofreces sacrificios al Señor? Y Adán le contestó: No sé, sino que el Señor me lo mandó. Entonces el ángel le habló, diciendo: Esto es una semejanza del sacrificio del Unigénito del Padre, el cual es lleno de gracia y de verdad.",
            comentario:
              "Adán practicó el sacrificio por fe, sin entender completamente el simbolismo. El ángel reveló que cada sacrificio era una «semejanza» — un símbolo que apuntaba hacia el sacrificio de Jesucristo. La obediencia a los símbolos precede a menudo a la comprensión plena.",
          },
          {
            tipo: "parrafo",
            texto:
              "La Pascua es quizás el símbolo más rico del Antiguo Testamento. El cordero sin mancha, cuya sangre protegía a las familias israelitas del ángel destructor (Éxodo 12), era una figura directa de Jesucristo — el Cordero de Dios sin pecado cuya sangre expiatoria nos protege de la muerte espiritual. Juan el Bautista reconoció esto cuando exclamó: «He aquí el Cordero de Dios, que quita el pecado del mundo» (Juan 1:29).",
          },
          {
            tipo: "escritura",
            referencia: "1 Corintios 10:1–4",
            texto:
              "Porque no quiero, hermanos, que ignoréis que nuestros padres todos estuvieron bajo la nube, y todos pasaron el mar; y todos en Moisés fueron bautizados en la nube y en el mar, y todos comieron el mismo alimento espiritual, y todos bebieron la misma bebida espiritual; porque bebían de la roca espiritual que los seguía, y la roca era Cristo.",
            comentario:
              "Pablo revela que la roca que dio agua a Israel en el desierto era un símbolo de Cristo. El agua que brotaba de ella representaba las bendiciones espirituales que fluyen de la Expiación.",
          },
          {
            tipo: "cita",
            autor: "Élder Bruce R. McConkie (1915–1985)",
            fuente: "The Promised Messiah, 1978, pág. 28",
            texto:
              "Todo el sistema de la ley mosaica estaba diseñado de tal manera que diera testimonio del Hijo de Dios y centrara la fe de los creyentes en Él y en la redención que Él fue preordenado a efectuar.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 3:14–15",
            texto:
              "Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado, para que todo aquel que en él crea, no se pierda, mas tenga vida eterna.",
            comentario:
              "Jesús mismo interpretó los símbolos del Antiguo Testamento. La serpiente de bronce levantada en el desierto (Números 21) era una figura de Su crucifixión: así como los israelitas miraban la serpiente y vivían físicamente, quienes «miran» a Cristo con fe reciben vida espiritual.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Desde Adán, el sistema de sacrificios era un símbolo del futuro sacrificio de Jesucristo (Moisés 5:6–7).",
              "El cordero pascual sin mancha era una figura directa de Cristo — el Cordero de Dios (Juan 1:29).",
              "Toda la ley mosaica estaba diseñada para centrar la fe de Israel en Jesucristo y en Su expiación.",
              "Los símbolos del Antiguo Testamento se cumplen literalmente en la vida, muerte y resurrección de Jesucristo.",
              "Aprender a leer el simbolismo de las Escrituras enriquece nuestra comprensión del poder redentor de Cristo.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué símbolo del Antiguo Testamento que apunta hacia Cristo te resulta más significativo? ¿Por qué?",
              "Adán obedecía el mandamiento del sacrificio «sin saber» el porqué. ¿Hay mandamientos en tu vida que guardas por fe, aunque no entiendas completamente su propósito?",
              "¿Cómo puede ayudarte reconocer el simbolismo de las Escrituras a sentirte más conectado al Salvador?",
              "Cuando participas de la Santa Cena, ¿qué simbolismo ves en el pan y el agua que te acerca a Cristo?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion06Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Todos experimentamos la culpa después de cometer errores. Esa culpa es el eco de la justicia divina: hay leyes eternas que, al ser quebrantadas, exigen una consecuencia. Pero el Evangelio de Jesucristo no termina en la justicia — la misericordia entra en escena a través de la Expiación. En Jesucristo, la justicia queda satisfecha y la misericordia puede extenderse sin violar la ley.",
          },
          {
            tipo: "escritura",
            referencia: "Alma 42:22–25",
            texto:
              "Pero hay una ley dada, y un castigo afijado, y un arrepentimiento concedido; el cual arrepentimiento la misericordia reclama; de lo contrario, la justicia reclama la criatura y ejecuta la ley, y la ley inflige el castigo. Si no fuera así, las obras de la justicia serían destruidas, y Dios dejaría de ser Dios. Mas he aquí, la misericordia viene por razón del arrepentimiento; y la misericordia satisface las exigencias de la justicia, y la expiación reclama los privilegios de la misericordia.",
            comentario:
              "Alma hijo enseña a Coriántón el equilibrio perfecto: la justicia exige consecuencias por el pecado, pero la misericordia — habilitada por la Expiación — puede satisfacer esas exigencias en nuestro favor cuando nos arrepentimos.",
          },
          {
            tipo: "parrafo",
            texto:
              "Como Hijo Unigénito de Dios en la carne, Jesucristo pudo realizar el sacrificio expiatorio que ningún ser mortal podría haber completado. Al ser completamente divino podía pagar el precio infinito; al ser completamente mortal podía sufrir por sus hermanos mortales. Solo el Hijo Unigénito reunía los requisitos para ser el mediador perfecto entre la justicia y la misericordia.",
          },
          {
            tipo: "escritura",
            referencia: "2 Nefi 2:7–8",
            texto:
              "He aquí, él se ofrece a sí mismo en sacrificio por el pecado, para responder a los fines de la ley, para todos los de corazón quebrantado y espíritu contrito; y para ningún otro puede cumplirse los fines de la ley. Por tanto, cuán grandes son los fines de la Expiación.",
            comentario:
              "Lehi enseña a Jacob los «grandes fines de la Expiación»: Cristo se ofreció para satisfacer la ley de justicia a favor de todos los que se acercan a Él con corazón quebrantado y espíritu contrito.",
          },
          {
            tipo: "cita",
            autor: "Élder D. Todd Christofferson",
            fuente: "«La expiación de Jesucristo», Liahona, mayo de 2017, pág. 57",
            texto:
              "La justicia es la ley moral del universo. Sin ella no habría responsabilidad, ni crecimiento, ni exaltación. La misericordia, habilitada por la Expiación, no viola la justicia — la satisface. Cristo no quitó las consecuencias; Él las pagó. Por eso la misericordia puede fluir sin corromper el universo moral.",
          },
          {
            tipo: "escritura",
            referencia: "Mosíah 15:9",
            texto:
              "Habiendo ascendido al cielo, habiendo reclamado la misericordia al Padre por los hijos de los hombres; y habiendo satisfecho las exigencias de la justicia.",
            comentario:
              "El profeta Abinadí describe el papel mediador del Salvador: Él está a la diestra del Padre reclamando misericordia para nosotros porque ya satisfizo las exigencias de la justicia con Su expiación.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La justicia es una ley eterna: toda transgresión tiene una consecuencia (Alma 42:22).",
              "La misericordia no destruye la justicia — la Expiación de Cristo satisface las exigencias de la justicia a nuestro favor.",
              "Solo el Hijo Unigénito de Dios en la carne podía realizar un sacrificio infinito y eterno (2 Nefi 2:7).",
              "La misericordia es accesible para «todos los de corazón quebrantado y espíritu contrito» que se arrepienten.",
              "Cristo está a la diestra del Padre como nuestro Mediador y Abogado (Mosíah 15:9).",
              "El arrepentimiento activa la misericordia; sin arrepentimiento, la justicia reclama al pecador.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Alguna vez has sentido el peso de la justicia (culpa) y luego el alivio de la misericordia (perdón)? ¿Qué aprendiste de esa experiencia?",
              "¿Por qué es importante que la misericordia no destruya la justicia? ¿Qué tipo de universo tendríamos sin leyes morales con consecuencias reales?",
              "¿Qué significa para ti que Cristo esté a la diestra del Padre «reclamando misericordia» en tu favor?",
              "¿Hay algo de lo que necesitas arrepentirte para activar la misericordia de la Expiación en tu vida ahora mismo?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion07Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Durante siglos, el pueblo de Israel esperó con anhelo al Mesías prometido. Los profetas del Antiguo Testamento pintaron un retrato detallado de Su venida: nacería en Belén, de una virgen, de la tribu de Judá y del linaje de David; entraría a Jerusalén en un asno; sería traicionado por treinta piezas de plata; y sufriría una muerte de crucifixión. Cada detalle se cumplió perfectamente en Jesucristo, confirmando que Él es el Mesías que el mundo esperaba.",
          },
          {
            tipo: "escritura",
            referencia: "Isaías 53:3–5",
            texto:
              "Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto; y como que escondimos de él el rostro, fue menospreciado, y no lo estimamos. Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.",
            comentario:
              "Isaías escribió estas palabras 700 años antes del nacimiento de Cristo, describiendo con asombrosa precisión Su sufrimiento expiatorio. El «siervo sufriente» de Isaías 53 es uno de los pasajes mesiánicos más citados en el Nuevo Testamento.",
          },
          {
            tipo: "escritura",
            referencia: "Miqueas 5:2",
            texto:
              "Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel; y sus salidas son desde el principio, desde los días de la eternidad.",
            comentario:
              "Esta profecía fue escrita 700 años antes del nacimiento de Cristo. Señala específicamente Belén — una aldea pequeña — como el lugar de nacimiento del Mesías, y añade que Sus orígenes son eternos: «desde los días de la eternidad».",
          },
          {
            tipo: "parrafo",
            texto:
              "Los discípulos de Juan el Bautista que siguieron a Jesús identificaron inmediatamente la conexión: «Hemos hallado al Mesías» (Juan 1:41). La declaración de Simón Pedro — «Tú eres el Cristo» (Mateo 16:16) — fue el reconocimiento formal de que el largo período de espera había terminado. Jesucristo no simplemente cumplió las profecías; Él es la razón de existir de todas ellas.",
          },
          {
            tipo: "cita",
            autor: "Élder Jeffrey R. Holland",
            fuente: "Christ and the New Covenant, 1997, pág. 3",
            texto:
              "El Libro de Mormón es el testigo más claro, más correcto y más completo de que Jesucristo es el Mesías prometido. Ningún otro libro en el mundo habla de Cristo con tanto poder y claridad como lo hace el Libro de Mormón.",
          },
          {
            tipo: "escritura",
            referencia: "1 Nefi 10:4",
            texto:
              "Pues se manifestaría un Mesías entre los judíos; sí, y aun un Redentor del mundo. Y después que fuera muerto, resucitaría de los muertos, y se manifestaría por el Espíritu Santo a los gentiles.",
            comentario:
              "Lehi profetizó del Mesías desde el otro lado del mundo, confirmando que el testimonio de Cristo no estaba confinado a Israel. El Señor preparó testigos en todas partes para fortalecer el registro de Su venida.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Cientos de profecías del Antiguo Testamento y del Libro de Mormón testifican de la venida del Mesías.",
              "Cada detalle de la vida de Cristo — nacimiento, ministerio, traición, muerte y resurrección — fue profetizado con siglos de anticipación.",
              "Isaías 53 describe con precisión extraordinaria el sufrimiento expiatorio del Salvador 700 años antes de que ocurriera.",
              "El título «Mesías» (hebreo) / «Cristo» (griego) significa «el ungido» — el Rey y Redentor prometido.",
              "El Libro de Mormón es uno de los testigos más poderosos de que Jesucristo es el Mesías prometido.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuál de las profecías mesiánicas del Antiguo Testamento te resulta más impresionante? ¿Por qué?",
              "El hecho de que cientos de profecías se cumplieran en Cristo, ¿cómo fortalece tu fe en la realidad de Su misión divina?",
              "¿De qué manera el reconocer a Jesucristo como el Mesías prometido cambia la forma en que lees el Antiguo Testamento?",
              "Si alguien te preguntara cómo saber que Jesús es el Cristo prometido, ¿qué evidencia compartiría contigo?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion08Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "El nacimiento de Jesucristo no fue un acontecimiento ordinario: fue el momento en que el Hijo Unigénito del Padre Celestial entró en mortalidad. Un ser divino y eterno, el Gran Jehová, nació de una virgen en un humilde establo de Belén. Los ángeles anunciaron Su llegada, una estrella guió a los sabios de Oriente, y pastores corrieron a adorarle. El universo celebraba el inicio de la misión más importante de toda la eternidad.",
          },
          {
            tipo: "escritura",
            referencia: "Lucas 2:10–11",
            texto:
              "Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es Cristo el Señor.",
            comentario:
              "Las palabras del ángel establecen tres verdades esenciales: que es un Salvador, que es Cristo (el Mesías prometido), y que es el Señor (Jehová). Las tres juntas declaran Su identidad divina.",
          },
          {
            tipo: "escritura",
            referencia: "1 Nefi 11:13–15, 20–21",
            texto:
              "Y aconteció que vi a una virgen, la más bella y hermosa entre todas las demás vírgenes. Y sucedió que pregunté al ángel: ¿Qué significa la virgen que vi? Y él me contestó: ¿Ves al Cordero de Dios? Sí, al Padre del cielo y de la tierra... Y vi que era el Cordero de Dios, sí, el Hijo Eterno del Padre.",
            comentario:
              "Nefi tuvo una visión del nacimiento del Mesías 600 años antes de que ocurriera. El Espíritu le confirma que la virgen representaba a la madre del Hijo de Dios — un doble testimonio del nacimiento virginal de Cristo.",
          },
          {
            tipo: "cita",
            autor: "«El Cristo Viviente: El Testimonio de los Apóstoles»",
            fuente: "La Iglesia de Jesucristo de los Santos de los Últimos Días, 2000",
            texto:
              "Testificamos solemnemente que Su vida, que es fundamental para toda la historia de la humanidad, no comenzó en Belén ni concluyó en el Calvario. Él fue el Primogénito del Padre, el Hijo Unigénito en la carne, el Redentor del mundo.",
          },
          {
            tipo: "parrafo",
            texto:
              "Como Hijo Unigénito en la carne, Jesús heredó dos naturalezas únicas: de Su madre mortal, María, heredó la capacidad de morir; de Su Padre Celestial, heredó el poder de resucitar. Esta combinación única lo hacía el único ser capaz de realizar una expiación infinita: podía morir, pero también tenía poder para tomar Su vida nuevamente.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo es el Hijo Unigénito del Padre en la carne — el único ser nacido de una madre mortal y de un Padre inmortal.",
              "Su nacimiento en Belén fue profetizado siglos antes por profetas en ambos hemisferios.",
              "Al nacer de María, Jesús heredó la capacidad de morir; al ser Hijo de Dios, heredó el poder de resucitar.",
              "Los ángeles anunciaron Su nacimiento con «nuevas de gran gozo» para «todo el pueblo» — Su llegada era de alcance universal.",
              "El nacimiento virginal testifica de Su naturaleza divina y de que Él vino al mundo con un propósito eterno.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué significa para ti personalmente que el Hijo Eterno de Dios eligiera nacer en la pobreza, en un establo?",
              "El ángel dijo que la noticia sería «de gran gozo para todo el pueblo». ¿Cuándo fue la última vez que el conocimiento del nacimiento de Cristo te produjo verdadero gozo?",
              "¿Cómo cambia tu comprensión del nacimiento de Cristo saber que comenzó un plan eterno diseñado antes de la fundación del mundo?",
              "¿Cómo puedes celebrar y recordar el nacimiento del Salvador más significativamente, más allá de las tradiciones culturales?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion09Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una de las características más notables del ministerio de Jesús fue Su perfecta sumisión a la voluntad del Padre. En cada decisión, en cada momento de presión, Cristo no buscó Su propia voluntad sino la del Padre que lo envió. Este ejemplo de sumisión no era debilidad — era la expresión más elevada de amor, fe y discipulado.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 5:30",
            texto:
              "No puedo yo hacer nada por mí mismo; según oigo, así juzgo; y mi juicio es justo, porque no busco mi voluntad, sino la voluntad del que me envió, la del Padre.",
            comentario:
              "Jesús declara un principio fundamental de Su ministerio: nada hacía de Su propia iniciativa sin el Padre. Esta sumisión total era el secreto de Su poder — quien está perfectamente alineado con Dios actúa con Su autoridad y fuerza.",
          },
          {
            tipo: "escritura",
            referencia: "Mateo 26:39",
            texto:
              "Yendo un poco adelante, se postró sobre su rostro, orando y diciendo: Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú.",
            comentario:
              "En Getsemaní, en el momento de mayor presión imaginable, Jesús demostró sumisión perfecta. No fue sumisión pasiva — Él expresó honestamente Su sentir («si es posible, pase de mí esta copa») y luego sometió Su voluntad: «no sea como yo quiero, sino como tú».",
          },
          {
            tipo: "cita",
            autor: "Élder Neal A. Maxwell (1926–2004)",
            fuente: "«Aprended de mí», Liahona, noviembre de 1999, pág. 7",
            texto:
              "La sumisión de la voluntad es en realidad la única cosa que podemos dar verdaderamente a Dios. Todo lo demás que le «damos» ya es Suyo. La única cosa que realmente nos pertenece y que podemos ofrecerle es nuestra propia voluntad.",
          },
          {
            tipo: "parrafo",
            texto:
              "El bautismo de Jesús es otro ejemplo de Su sumisión. Aunque era sin pecado, se bautizó «para cumplir toda justicia» (2 Nefi 31:5–7). Al hacerlo, nos dejó un ejemplo perfecto: las ordenanzas no son solo rituales vacíos, sino actos de obediencia y sumisión que nos unen con el Padre y nos abren el acceso al Espíritu Santo.",
          },
          {
            tipo: "escritura",
            referencia: "2 Nefi 31:7",
            texto:
              "¿Sabéis vosotros la razón por qué fue bautizado? Y yo respondo y os digo: Para cumplir toda justicia. Y después de que fuera bautizado con agua, he aquí, el Espíritu Santo descendió sobre él en forma de paloma.",
            comentario:
              "Nefi revela la razón del bautismo de Cristo: «para cumplir toda justicia». Al someternos a las ordenanzas del Evangelio, seguimos Su ejemplo y recibimos las mismas bendiciones del Espíritu.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo sometió perfectamente Su voluntad a la del Padre en cada acto de Su ministerio (Juan 5:30).",
              "La sumisión de la voluntad es el regalo más valioso que podemos ofrecer a Dios (Élder Maxwell).",
              "El bautismo de Cristo, aunque era sin pecado, fue un acto de sumisión para «cumplir toda justicia» (2 Nefi 31:7).",
              "La sumisión a la voluntad del Padre no es debilidad sino la fuente del verdadero poder espiritual.",
              "En Getsemaní, Cristo demostró que la sumisión puede coexistir con la expresión honesta de nuestros sentimientos.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿En qué área de tu vida te resulta más difícil someter tu voluntad a la del Padre?",
              "El Élder Maxwell enseñó que la voluntad es lo único que realmente podemos darle a Dios. ¿Qué significa eso para ti en términos prácticos?",
              "¿Cómo cambia tu comprensión de las ordenanzas (bautismo, Santa Cena) el saber que Cristo las practicó como actos de sumisión?",
              "¿Qué ejemplo específico del ministerio de Cristo en cuanto a la sumisión te inspira más a seguirlo?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion10Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Durante Su ministerio terrenal, Jesucristo no solo enseñó — organizó. Llamó a doce apóstoles, confirió autoridad del sacerdocio, estableció ordenanzas y fundó Su Iglesia con un propósito específico: proveer a Sus hijos las bendiciones, las ordenanzas y la comunidad necesarias para regresar a la presencia del Padre Celestial.",
          },
          {
            tipo: "escritura",
            referencia: "Mateo 16:18–19",
            texto:
              "Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella. Y a ti te daré las llaves del reino de los cielos; y todo lo que atares en la tierra será atado en los cielos; y todo lo que desatares en la tierra será desatado en los cielos.",
            comentario:
              "Cristo prometió edificar Su Iglesia y le concedió las llaves del sacerdocio a Pedro. Las «llaves del reino» incluyen la autoridad para administrar las ordenanzas de salvación y exaltación.",
          },
          {
            tipo: "escritura",
            referencia: "Efesios 4:11–13",
            texto:
              "Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros, a fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo, hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios.",
            comentario:
              "Pablo revela que la organización de la Iglesia —con apóstoles, profetas y demás— tiene un propósito eterno: perfeccionar a los santos hasta que «lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios».",
          },
          {
            tipo: "cita",
            autor: "Élder D. Todd Christofferson",
            fuente: "«El porqué de la Iglesia», Liahona, noviembre de 2015, pág. 108",
            texto:
              "El antiguo objetivo sigue siendo el de predicar las buenas nuevas del evangelio de Jesucristo y administrar las ordenanzas de salvación; en otras palabras, llevar a la gente a Cristo.",
          },
          {
            tipo: "parrafo",
            texto:
              "La Restauración de la Iglesia en 1830 a través de José Smith no fue la creación de una nueva religión — fue la restauración de la Iglesia original de Cristo con su autoridad, ordenanzas y doctrina completas. El Señor mismo declaró que era «la única iglesia verdadera y viviente sobre la faz de toda la tierra» (DyC 1:30), no porque sus miembros sean perfectos, sino porque tiene la plenitud del Evangelio y las llaves del sacerdocio.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo estableció Su Iglesia con apóstoles, profetas y autoridad del sacerdocio durante Su ministerio terrenal.",
              "La Iglesia tiene un propósito eterno: perfeccionar a los santos y llevarlos a Cristo (Efesios 4:11–13).",
              "Las ordenanzas administradas en la Iglesia son esenciales para la salvación y la exaltación.",
              "La Restauración de 1830 restituyó la misma Iglesia con la misma autoridad y organización que Cristo estableció.",
              "La membresía activa en la Iglesia nos conecta a una comunidad de apoyo, a las ordenanzas del templo y a la dirección de profetas vivientes.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué bendiciones específicas de la Iglesia valoras más en tu vida? ¿Las aprovechas plenamente?",
              "El Élder Christofferson enseñó que el propósito de la Iglesia es «llevar a la gente a Cristo». ¿Cómo te ha ayudado la Iglesia a acercarte más al Salvador?",
              "¿Cómo cambiaría tu actitud hacia la asistencia a la Iglesia si la vieras como una oportunidad de recibir bendiciones divinas en lugar de una obligación?",
              "¿Qué puedes hacer para ser una bendición para otros miembros de tu congregación, especialmente los que se sienten marginados?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion11Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Cuando Jesús terminó el Sermón del Monte, los oyentes estaban «admirados de Su doctrina; porque les enseñaba como quien tiene autoridad, y no como los escribas» (Mateo 7:28–29). Había algo diferente en Sus enseñanzas: no citaba a otros rabinos ni debatía interpretaciones. Hablaba con autoridad directa porque Sus enseñanzas eran la ley misma, emanando del Legislador eterno.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 7:16–17",
            texto:
              "Jesús les respondió y dijo: Mi doctrina no es mía, sino de aquel que me envió. El que quiera hacer la voluntad de Dios, conocerá si la doctrina es de Dios, o si yo hablo por mi propia cuenta.",
            comentario:
              "Cristo revela el método para reconocer Su verdad: no es un argumento intelectual, sino la disposición a hacer la voluntad de Dios. Quien practica Sus enseñanzas recibe la confirmación espiritual de su veracidad.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 14:6",
            texto:
              "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
            comentario:
              "Esta es quizás la declaración más absoluta del Nuevo Testamento. Cristo no dice que señala el camino, ni que enseña la verdad — Él ES el camino, la verdad y la vida. La verdad no es un concepto abstracto sino una Persona.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«Verdad pura, doctrina pura y revelación pura», Liahona, noviembre de 2021, pág. 6",
            texto:
              "Nunca ha habido una época en la historia del mundo en la que el conocimiento de nuestro Salvador fuera más vital y relevante en lo personal para toda alma humana. Vivimos en un mundo saturado de información, pero escaso de verdad pura.",
          },
          {
            tipo: "parrafo",
            texto:
              "El Sermón del Monte es quizás la colección más completa de las enseñanzas de Cristo sobre el discipulado. En él, el Salvador enseña las Bienaventuranzas — actitudes del corazón que producen verdadera felicidad — y eleva el estándar de la ley mosaica: ya no basta con no matar, hay que eliminar la ira; ya no basta con no cometer adulterio, hay que purificar los pensamientos. El estándar del Evangelio opera desde adentro hacia afuera.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo no es solo un maestro de verdad — Él ES la verdad (Juan 14:6).",
              "Sus enseñanzas provienen directamente del Padre Celestial, no de Su propia sabiduría humana (Juan 7:16).",
              "La verdad de Sus enseñanzas se confirma a quienes están dispuestos a ponerlas en práctica.",
              "El Evangelio de Cristo eleva el estándar de la ley exterior a la transformación interior del corazón.",
              "En un mundo lleno de información pero escaso de verdad, las enseñanzas de Cristo son la brújula confiable.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuál enseñanza de Cristo te ha resultado más difícil de poner en práctica? ¿Por qué?",
              "Juan 14:6 dice que Cristo ES la verdad. ¿Cómo cambia eso tu búsqueda de verdad en el mundo?",
              "El presidente Nelson enseñó que vivimos en un mundo rico en información pero escaso de verdad pura. ¿Cómo disciernes qué es verdad pura en tu vida diaria?",
              "¿Qué enseñanza del Sermón del Monte aplicarías más conscientemente esta semana?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion12Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una de las características más destacadas del ministerio de Cristo fue Su atención a los individuos. En medio de multitudes, Jesús notaba a una sola persona: la viuda que lloraba por su hijo muerto, el hombre ciego al borde del camino, la mujer que tocó el dobladillo de Su manto en la multitud. Para el Salvador, nunca había «multitudes» — solo personas con nombres, historias y necesidades únicas.",
          },
          {
            tipo: "escritura",
            referencia: "Lucas 19:5",
            texto:
              "Cuando Jesús llegó a aquel lugar, mirando hacia arriba, le vio, y le dijo: Zaqueo, date prisa, desciende, porque hoy es necesario que pose yo en tu casa.",
            comentario:
              "Zaqueo era publicano — considerado pecador por su profesión. En lugar de ignorarlo o rechazarlo, Jesús lo vio, lo llamó por nombre y buscó estar con él. El ministerio del Salvador no estaba reservado para los justos.",
          },
          {
            tipo: "escritura",
            referencia: "3 Nefi 17:6–7",
            texto:
              "Y aconteció que cuando Jesús terminó de hablar, miró a su alrededor sobre la multitud, y vio que lloraban. Y también él fue vencido; y se inclinó a sí mismo, y se postró sobre la tierra; y el Padre exclamó en voz que estremeció la tierra: Glorifiqué, y le glorificaré de nuevo. Y llegó Jesús y os tomó a sus pequeños hijos, uno a uno.",
            comentario:
              "Entre los nefitas, Jesús percibió las lágrimas de la multitud y respondió con Su propio llanto. Luego tomó a los niños «uno a uno». El ministerio del Salvador es siempre personal, nunca masivo o impersonal.",
          },
          {
            tipo: "cita",
            autor: "Élder Jeffrey R. Holland",
            fuente: "«Ningún otro será suficiente», Liahona, noviembre de 2016, pág. 101",
            texto:
              "La historia del ministerio del Salvador es, en su mayor parte, una historia de encuentros individuales. Él vio a las personas — realmente las vio — y respondió a lo que vio con compasión, poder y amor.",
          },
          {
            tipo: "parrafo",
            texto:
              "El llamado a «ministrar» en la Iglesia actual es una invitación a seguir ese mismo patrón: ver a las personas como el Salvador las vería, con sus necesidades reales, sus fortalezas únicas y su valor eterno como hijos de Dios. No se trata de visitas formales — se trata de relaciones genuinas de amor y cuidado mutuo.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "El Salvador ministró individualmente, no de manera masiva o impersonal.",
              "Cristo veía y respondía a las necesidades emocionales, físicas y espirituales de cada persona.",
              "Ministrar como el Salvador implica ver a cada persona como hija o hijo de Dios con valor eterno.",
              "El ministerio genuino no se limita a visitas formales — es una relación continua de amor y cuidado.",
              "Cuando ministramos como el Salvador, lo representamos ante quienes no tienen acceso directo a Él.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿A quién en tu vida necesitas ver más como lo haría el Salvador — con sus necesidades reales y su valor eterno?",
              "¿Cómo puedes mejorar tu capacidad de notar a las personas que están sufriendo silenciosamente a tu alrededor?",
              "El Salvador llamó a Zaqueo por su nombre antes de conocerlo formalmente. ¿Qué dice eso sobre el interés personal del Salvador en cada uno de nosotros?",
              "¿Qué acción concreta de ministerio puedes tomar esta semana para alguien que sabes que lo necesita?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion13Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Los Evangelios registran docenas de milagros de Jesucristo: curó enfermos, dio vista a los ciegos, resucitó muertos, calmó tormentas y alimentó a miles. Pero los milagros no eran simples demostraciones de poder — eran actos de compasión profunda que testificaban de Su identidad divina y anticipaban Sus capacidades eternas como Señor resucitado.",
          },
          {
            tipo: "escritura",
            referencia: "Hechos 10:38",
            texto:
              "Cómo Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret, y cómo éste anduvo haciendo bienes y sanando a todos los oprimidos por el diablo, porque Dios estaba con él.",
            comentario:
              "Pedro describe el ministerio de Cristo con una frase memorable: «anduvo haciendo bienes». Los milagros eran la expresión natural de quién era Él — un ser lleno de compasión divina que no podía permanecer indiferente ante el sufrimiento humano.",
          },
          {
            tipo: "escritura",
            referencia: "Marcos 1:40–42",
            texto:
              "Vino a él un leproso, rogándole; e hincada la rodilla, le dijo: Si quieres, puedes limpiarme. Y Jesús, teniendo misericordia de él, extendió la mano y le tocó, y le dijo: Quiero, sé limpio. Y así que él hubo hablado, al instante la lepra se fue de aquél, y quedó limpio.",
            comentario:
              "Los leprosos eran los marginados supremos de la sociedad judía — intocables por ley. Jesús no solo sanó al leproso; lo tocó antes de ordenar la curación. El toque fue el mensaje: nadie está tan «contaminado» que el Salvador no quiera acercarse.",
          },
          {
            tipo: "cita",
            autor: "Élder David A. Bednar",
            fuente: "«Con poder sanador», Liahona, enero de 2013, pág. 6",
            texto:
              "Creo que la mayoría de nosotros comprende que la Expiación puede lavar y purificar todos los pecados. Lo que tal vez no comprendamos es que la Expiación también nos puede dar fortaleza para soportar el dolor, las aflicciones y las enfermedades — que al igual que los milagros terrenales, también forman parte del poder sanador de Jesucristo.",
          },
          {
            tipo: "parrafo",
            texto:
              "Los milagros también revelan un patrón: la fe precedía frecuentemente a la curación. «Tu fe te ha salvado» (Lucas 7:50; 17:19; 18:42) es una frase que Jesús repitió varias veces. No es que la fe merezca el milagro — es que la fe abre el corazón a recibir lo que el Salvador puede dar. Hoy, el mismo Señor que sanó a los ciegos puede sanar nuestros corazones rotos, nuestras adicciones y nuestras heridas espirituales.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Los milagros de Cristo eran expresiones de Su compasión y testigos de Su poder divino.",
              "Cristo «anduvo haciendo bienes» — el servicio era el carácter de Su ministerio, no solo demostraciones de poder.",
              "Los milagros de curación del Salvador anticipan el poder sanador de Su Expiación.",
              "La fe abre el corazón a recibir las bendiciones del Salvador.",
              "El mismo poder que obró milagros terrenales puede sanar corazones, adicciones y heridas espirituales hoy.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuál milagro del Salvador te llega más profundo? ¿Por qué?",
              "Jesús tocó al leproso antes de curarlo. ¿Qué nos dice eso sobre cómo trata a las personas que la sociedad rechaza?",
              "El Élder Bednar enseñó que la Expiación también da fortaleza para soportar el sufrimiento. ¿Cuándo has experimentado ese poder sanador en tu propia vida?",
              "¿En qué área de tu vida necesitas invocar el poder sanador de Cristo hoy?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion14Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Piensa en la última vez que tomaste la Santa Cena. ¿Qué atención prestaste a la expiación del Salvador y a tu relación por convenio con Él? La Santa Cena no es una tradición religiosa — es una ordenanza sagrada en la que renovamos semanalmente nuestros convenios del bautismo y recibimos la promesa de tener el Espíritu del Señor siempre con nosotros.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 20:77",
            texto:
              "Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques este pan para las almas de todos los que participen de él, para que lo coman en memoria del cuerpo de tu Hijo, y testifiquen ante ti, oh Dios, Padre Eterno, que están dispuestos a tomar sobre sí el nombre de tu Hijo, y a recordarle siempre, y a guardar sus mandamientos que él les ha dado, para que siempre puedan tener su Espíritu consigo. Amén.",
            comentario:
              "Esta oración contiene tres compromisos que renovamos cada semana: tomar el nombre de Cristo, recordarle siempre, y guardar Sus mandamientos. Y una promesa divina: tener Su Espíritu siempre con nosotros.",
          },
          {
            tipo: "parrafo",
            texto:
              "El pan representa el cuerpo de Cristo que fue «magullado, partido y desgarrado» por nosotros. El presidente Dallin H. Oaks señaló que cada pedazo de pan es único, así como cada persona que participa de él es única. El agua representa la sangre que el Salvador derramó, comenzando en Getsemaní donde la sangre le brotó de cada poro, y concluyendo en la cruz del Calvario.",
          },
          {
            tipo: "escritura",
            referencia: "3 Nefi 18:7",
            texto:
              "He aquí, esto lo haréis en remembranza de mi cuerpo, que os he mostrado. Y será un testimonio ante el Padre de que siempre me recordáis. Y si siempre me recordáis, tendréis mi Espíritu con vosotros.",
            comentario:
              "Cristo instituyó la Santa Cena entre los nefitas y la conectó directamente con tener Su Espíritu. Recordarle «siempre» no solo significa pensar en Él los domingos — significa vivir cada día de manera que Él sea el centro de nuestros pensamientos y decisiones.",
          },
          {
            tipo: "cita",
            autor: "Élder Jeffrey R. Holland",
            fuente: "«He aquí el Cordero de Dios», Liahona, mayo de 2019, pág. 46",
            texto:
              "Esa hora decretada por el Señor es la hora más sagrada de la semana. Por vía de mandamiento, nos reunimos para participar de la ordenanza que más se recibe mundialmente en la Iglesia, en memoria de Aquel que pidió si podía pasar de Él la copa de la que estaba a punto de beber, solo para seguir adelante porque sabía que, por nuestro bien, no podía dejarla pasar.",
          },
          {
            tipo: "cita",
            autor: "Élder D. Todd Christofferson",
            fuente: "«Siempre retendréis la remisión de vuestros pecados», Liahona, mayo de 2016, pág. 61",
            texto:
              "La ordenanza de la Santa Cena es una invitación sagrada y recurrente a arrepentirnos sinceramente y ser renovados espiritualmente. Al prepararnos conscientemente y participar con un corazón quebrantado y espíritu contrito, tenemos la promesa de que siempre tendremos el Espíritu del Señor con nosotros.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La Santa Cena fue instituida por Cristo la noche antes de Su crucifixión (Lucas 22:19–20) y también entre los nefitas (3 Nefi 18:1–11).",
              "Al participar de la Santa Cena renovamos los convenios del bautismo: recordar a Cristo, tomar Su nombre y guardar Sus mandamientos.",
              "La promesa asociada con la Santa Cena es tener el Espíritu del Señor siempre con nosotros (DyC 20:77).",
              "El pan representa el cuerpo sacrificado de Cristo; el agua representa Su sangre derramada en Getsemaní y el Calvario.",
              "La Santa Cena es la hora más sagrada de la semana — una oportunidad de renovación espiritual profunda.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué cambiaría en tu experiencia de la Santa Cena si llegaras cada domingo con una preparación más consciente y orante?",
              "El pan y el agua representan el sufrimiento físico de Cristo. ¿Cuándo fue la última vez que meditaste en lo que esos símbolos significan mientras los tomabas?",
              "¿Qué significa para ti renovar semanalmente tu convenio de «recordarle siempre»? ¿Qué prácticas diarias podrían ayudarte a cumplir ese compromiso?",
              "¿Hay algo en tu vida de lo que necesitas arrepentirte para participar de la Santa Cena con un corazón más limpio?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion15Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La noche más oscura de la historia humana fue también la más luminosa en términos de amor divino. En el Jardín de Getsemaní, Jesucristo descendió por debajo de todas las cosas para ascender sobre todas. Ahí, en ese jardín silencioso, cargó sobre Sí mismo el peso de cada pecado, cada dolor y cada angustia que cualquier ser humano experimentaría jamás.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 19:16–19",
            texto:
              "Porque he aquí yo, Dios, he sufrido estas cosas por todos, para que no sufran ellos, si se arrepienten; mas si no se arrepienten, necesariamente habrán de sufrir como yo sufrí; cuyo sufrimiento les causó a mí, a Dios, el mayor de todos, temblar de dolor y sangrar de cada poro, y sufrir tanto en cuerpo como en espíritu, y hubiera querido no beber la copa amarga y retroceder.",
            comentario:
              "El propio Señor describe Su sufrimiento en primera persona. La imagen es sobrecogedora: incluso Dios «hubiera querido no beber la copa amarga». Su sufrimiento no fue simbólico — fue real, físico y espiritual, y fue el mayor que cualquier ser ha experimentado.",
          },
          {
            tipo: "escritura",
            referencia: "Alma 7:11–12",
            texto:
              "Y él irá y sufrirá dolores, aflicciones y tentaciones de todas clases; y esto con el fin de que se cumpla la palabra que dice que tomará sobre sí los dolores y las enfermedades de su pueblo. Y tomará sobre sí la muerte, para desatar las ligaduras de la muerte que atan a su pueblo; y tomará sobre sí sus debilidades, para que sus entrañas se llenen de misericordia según la carne.",
            comentario:
              "Alma revela dimensiones de la Expiación que van más allá del perdón de pecados: Cristo tomó sobre Sí nuestros dolores, enfermedades y debilidades para poder socorrernos con perfecta comprensión y misericordia.",
          },
          {
            tipo: "cita",
            autor: "Élder Jeffrey R. Holland",
            fuente: "«Nadie más puede hacer esto», Liahona, mayo de 2012, pág. 30",
            texto:
              "Su Expiación fue infinita, que abarcó todos los mundos que Su Padre creó; que cubrió todos los pecados y todas las angustias de toda la humanidad. Fue eterna, por lo que sobrepasa la comprensión humana. Sin embargo, fue personal, porque nos conoce a cada uno de nosotros.",
          },
          {
            tipo: "parrafo",
            texto:
              "La Expiación no solo pagó el precio del pecado — también pagó el precio del sufrimiento inocente. Cuando pasas por angustia, soledad, enfermedades o pérdidas que no son consecuencia de tus pecados, Cristo también experimentó eso. No hay un dolor humano que Él no haya sentido. Por eso puede sostenerte con perfecta comprensión: Él ha estado ahí.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La Expiación comenzó en Getsemaní y concluyó en la cruz y la resurrección.",
              "Cristo sufrió por todos los pecados, dolores, enfermedades y angustias de toda la humanidad (Alma 7:11–12).",
              "Su sufrimiento fue real, físico y espiritual — el mayor que cualquier ser ha experimentado (DyC 19:18).",
              "La Expiación es infinita en alcance (cubre todos los mundos), eterna en duración, pero también personal (nos conoce individualmente).",
              "Cristo puede socorrernos perfectamente porque experimentó personalmente todo lo que nosotros experimentamos.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué parte del sufrimiento de Cristo en Getsemaní te resulta más difícil de comprender? ¿Por qué?",
              "Alma 7:11–12 enseña que Cristo tomó sobre Sí nuestras debilidades y enfermedades, no solo nuestros pecados. ¿Cómo cambia eso tu comprensión de la Expiación?",
              "¿Hay algún dolor o sufrimiento en tu vida del que no hayas acudido a Cristo buscando comprensión y ayuda?",
              "¿Cómo describirías a alguien la Expiación de Jesucristo de una manera que sea tanto doctrinal como personal?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion16Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "El domingo de Resurrección no fue simplemente el regreso a la vida de un gran maestro. Fue el momento en que la muerte — la gran enemiga que sombrea toda existencia humana — fue vencida definitivamente. La Resurrección de Jesucristo cambió para siempre la respuesta a la pregunta más antigua de la humanidad: ¿Hay vida después de la muerte?",
          },
          {
            tipo: "escritura",
            referencia: "1 Corintios 15:20–22",
            texto:
              "Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho. Porque por cuanto la muerte entró por un hombre, también por un hombre la resurrección de los muertos. Porque así como en Adán todos mueren, también en Cristo todos serán vivificados.",
            comentario:
              "Pablo usa la imagen de las «primicias» — las primeras frutas del campo que garantizan que habrá más. Cristo fue el primero en resucitar con cuerpo glorificado y permanente, garantizando que todos los demás seguiremos ese mismo camino.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 11:25–26",
            texto:
              "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto?",
            comentario:
              "Ante la tumba de Lázaro, Cristo no solo promete la resurrección — declara ser la resurrección misma. La pregunta que dirige a Marta — «¿Crees esto?» — está dirigida también a cada uno de nosotros.",
          },
          {
            tipo: "cita",
            autor: "«El Cristo Viviente: El Testimonio de los Apóstoles»",
            fuente: "La Iglesia de Jesucristo de los Santos de los Últimos Días, 2000",
            texto:
              "Se levantó del sepulcro para ser las primicias de los que durmieron. Como el Salvador resucitado, invitó a Sus discípulos a que tocaran las marcas de los clavos en Sus manos y pies y la herida de lanza en Su costado... Sus apariciones después de la resurrección establecieron para siempre la realidad corporal de la vida después de la muerte.",
          },
          {
            tipo: "parrafo",
            texto:
              "La Resurrección no es solo una doctrina docente — es una fuente de esperanza profunda en los momentos más oscuros. Cuando perdemos a un ser amado, la Resurrección nos asegura que esa separación es temporal. Cuando enfrentamos nuestra propia mortalidad, la Resurrección nos recuerda que la muerte no es el final sino una transición.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La Resurrección de Cristo fue la primera — las «primicias» que garantizan la resurrección universal (1 Corintios 15:20).",
              "Gracias a la Expiación y Resurrección de Cristo, toda persona que nazca en este mundo resucitará.",
              "La resurrección implica la reunión permanente del cuerpo glorificado con el espíritu — una condición más perfecta que la mortalidad.",
              "Cristo demostró la realidad de Su resurrección corporal invitando a Sus discípulos a tocar Sus heridas (Lucas 24:39).",
              "La Resurrección es la base de la esperanza cristiana frente a la muerte y la pérdida.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cómo ha influido en tu vida la certeza (o la duda) de la Resurrección?",
              "¿A quién has perdido en tu vida? ¿Cómo te da esperanza saber que la separación es temporal?",
              "Jesús preguntó a Marta: «¿Crees esto?» Si Él te hiciera esa pregunta hoy, ¿cuál sería tu respuesta honesta?",
              "¿De qué manera la Resurrección de Cristo cambia la forma en que ves tu propia mortalidad y limitaciones físicas?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion17Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una de las verdades más liberadoras del Evangelio es que no estamos solos en nuestros esfuerzos de mejorar. La gracia de Jesucristo no es solo el perdón de nuestros pecados — es un poder habilitador que nos capacita para hacer y llegar a ser más de lo que podríamos por nuestra propia cuenta. La gracia no reemplaza nuestro esfuerzo; lo magnifica.",
          },
          {
            tipo: "escritura",
            referencia: "2 Nefi 25:23",
            texto:
              "Porque trabajamos diligentemente a fin de escribir, para persuadir a nuestros hijos, y también a nuestros hermanos, a creer en Cristo y a reconciliarse con Dios; porque sabemos que es por la gracia que nos salvamos, después de hacer cuanto podamos.",
            comentario:
              "Nefi establece el equilibrio perfecto: hacemos «cuanto podamos» — ponemos toda nuestra diligencia y esfuerzo — y la gracia de Cristo hace el resto. No es una excusa para no esforzarse, ni una carga de perfeccionismo imposible.",
          },
          {
            tipo: "escritura",
            referencia: "Éter 12:27",
            texto:
              "Y si los hombres vienen a mí, mostraré su debilidad. Porque si se humillan ante mí y tienen fe en mí, entonces haré que las cosas débiles se vuelvan fuertes para ellos.",
            comentario:
              "El Señor revela Su método: las debilidades son dadas a propósito para producir humildad. Cuando reconocemos nuestra debilidad y acudimos a Cristo con fe, Él convierte esa misma debilidad en fortaleza. La gracia transforma lo que éramos.",
          },
          {
            tipo: "cita",
            autor: "Élder David A. Bednar",
            fuente: "«Con poder sanador», Liahona, enero de 2013, pág. 8",
            texto:
              "La gracia habilitadora o fortalecedora de la Expiación de Jesucristo faculta a los hombres y mujeres mortales a hacer y llegar a ser cosas que por sí solos no podrían hacer ni llegar a ser. La gracia salvadora nos limpia; la gracia habilitadora nos capacita.",
          },
          {
            tipo: "parrafo",
            texto:
              "El apóstol Pablo entendió profundamente la gracia habilitadora. Cuando clamó al Señor por alivio de su «aguijón en la carne», el Señor le respondió: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Corintios 12:9). Pablo aprendió a gloriarse en sus debilidades — no porque sean buenas, sino porque son la ocasión para que la gracia de Cristo brille.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La gracia de Cristo tiene dos dimensiones: salvadora (perdona pecados) y habilitadora (capacita para mejorar).",
              "Somos salvados por la gracia «después de hacer cuanto podamos» (2 Nefi 25:23) — el esfuerzo y la gracia van juntos.",
              "Las debilidades son dadas a propósito para producir humildad y dependencia de Cristo (Éter 12:27).",
              "El poder de la gracia es más visible en nuestras debilidades que en nuestras fortalezas.",
              "La gracia no reemplaza nuestro esfuerzo — lo multiplica y magnifica más allá de nuestras capacidades naturales.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Has comprendido la gracia principalmente como perdón o también como poder habilitador? ¿Qué cambia en tu vida si la ves también como poder?",
              "¿Qué debilidad específica en tu vida podrías entregar al Señor con fe para que la convierta en fortaleza?",
              "2 Nefi 25:23 dice que la gracia opera «después de hacer cuanto podamos». ¿Cómo defines «cuanto puedas» en tu situación actual?",
              "¿De qué manera la comprensión de la gracia habilitadora cambia tu actitud hacia los mandamientos — de obligación a oportunidad?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion18Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La pregunta que durante siglos inquietó a los creyentes era: ¿qué pasa con los millones que murieron sin escuchar el Evangelio? La respuesta restaurada es tan grandiosa que casi supera la comprensión: la expiación de Jesucristo es de alcance tan infinito que incluye a los muertos, y nosotros tenemos el privilegio de ser Sus instrumentos en esa obra.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 138:29–34",
            texto:
              "Y así fue, que el príncipe de la paz, el Redentor Poderoso, vino y anunció la redención al mundo de los espíritus... Y a los que habían sido fieles en el testimonio de Jesús mientras vivían en la carne, y que habían ofrecido sacrificio en la semejanza del gran sacrificio del Hijo de Dios y habían sufrido tribulación en su Redentor nombre, se les dio poder para salir de las tinieblas.",
            comentario:
              "La visión del presidente Joseph F. Smith revela que Cristo, durante el tiempo entre Su muerte y resurrección, organizó la obra de salvación en el mundo de los espíritus. No abandonó a los muertos — los alcanzó.",
          },
          {
            tipo: "escritura",
            referencia: "1 Pedro 3:18–19",
            texto:
              "Porque también Cristo padeció una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios, siendo a la verdad muerto en la carne, pero vivificado en espíritu; en el cual también fue y predicó a los espíritus encarcelados.",
            comentario:
              "Pedro confirma que Cristo predicó a «los espíritus encarcelados» — aquellos que habían muerto. La obra de salvación no termina con la muerte física.",
          },
          {
            tipo: "cita",
            autor: "Élder Russell M. Nelson",
            fuente: "«A los muertos es predicado el evangelio», Liahona, julio de 1995, pág. 36",
            texto:
              "La obra del templo y la investigación genealógica no son un pasatiempo; son una parte esencial del plan de salvación. Al realizar ordenanzas vicarias por los muertos, somos sus redentores — sus instrumentos para recibir las mismas bendiciones que nosotros gozamos.",
          },
          {
            tipo: "parrafo",
            texto:
              "Cuando realizamos ordenanzas vicarias en el templo — bautismos, confirmaciones, dotaciones y sellamiento — ofrecemos a nuestros antepasados fallecidos la oportunidad de aceptar o rechazar esas ordenanzas en el mundo de los espíritus. Su agencia permanece intacta. Somos simplemente los instrumentos que extienden a ellos la misma puerta que nosotros tenemos abierta.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Después de Su muerte, Cristo predicó el Evangelio a los espíritus en el mundo de los espíritus (1 Pedro 3:18–19; DyC 138).",
              "La Expiación de Cristo es de alcance infinito — incluye a los muertos, no solo a los vivos.",
              "Las ordenanzas vicarias del templo ofrecen a los muertos la oportunidad de aceptar las bendiciones del Evangelio.",
              "La investigación genealógica y la obra del templo son una parte esencial del plan de salvación.",
              "Al realizar esta obra, somos literalmente instrumentos del Salvador en Su misión de llevar la salvación a toda la familia humana.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué significa para ti saber que la expiación de Cristo alcanza también a tus antepasados que nunca escucharon el Evangelio?",
              "¿Has realizado obra del templo por nombre de algún antepasado específico? ¿Cómo fue esa experiencia?",
              "¿Qué pasos prácticos podrías tomar para involucrarte más activamente en la obra de redención de los muertos?",
              "¿Cómo cambia tu actitud hacia el templo saber que cada visita es una oportunidad de ser instrumento del Salvador?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion19Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "En el mundo de Jesús, un buen pastor conocía a cada oveja de su rebaño por nombre — sus características, sus miedos, sus necesidades. Cuando usó esta imagen para describir Su relación con Sus seguidores, estaba diciéndoles algo profundamente personal: no eres un número en una multitud. Él te conoce. Te llama por tu nombre.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 10:14–15",
            texto:
              "Yo soy el buen pastor; y conozco mis ovejas, y las mías me conocen, así como el Padre me conoce a mí, y yo conozco al Padre; y pongo mi vida por las ovejas.",
            comentario:
              "El conocimiento mutuo entre el Pastor y Sus ovejas es comparado al conocimiento mutuo entre el Padre y el Hijo — el más profundo que existe. Ser conocido por Cristo no es superficial; es un conocimiento íntimo y eterno.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 10:16",
            texto:
              "También tengo otras ovejas que no son de este redil; aquéllas también debo traer, y oirán mi voz; y habrá un rebaño, y un pastor.",
            comentario:
              "Cristo anuncia que Su rebaño incluye a personas de otros lugares — un anticipo de Su ministerio entre los nefitas y de la obra misional que alcanzará a personas de «toda nación, tribu, lengua y pueblo».",
          },
          {
            tipo: "cita",
            autor: "Élder Gary E. Stevenson",
            fuente: "«Cómo nutrir y compartir su testimonio», Liahona, noviembre de 2022, pág. 112",
            texto:
              "Como el Buen Pastor, el Salvador busca activamente a las que se han perdido. Y así como Él busca, nosotros también somos Sus instrumentos para encontrar y traer de vuelta a quienes se han alejado del rebaño.",
          },
          {
            tipo: "parrafo",
            texto:
              "Jesús contó la parábola de la oveja perdida para ilustrar el valor de cada individuo a Sus ojos. Dejó 99 ovejas para buscar una sola. En los cálculos divinos, una persona siempre vale más que la conveniencia. Si en algún momento te has sentido perdido, alejado o invisible, esta parábola es para ti: el Salvador te está buscando.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Cristo es el Buen Pastor que conoce a cada una de Sus ovejas individualmente (Juan 10:14).",
              "El conocimiento del Salvador sobre nosotros es tan profundo como el conocimiento entre el Padre y el Hijo.",
              "El rebaño del Buen Pastor incluye personas de «toda nación, tribu, lengua y pueblo» (Juan 10:16).",
              "El Salvador busca activamente a los que se alejan — el valor de cada persona es infinito a Sus ojos.",
              "Somos llamados a ser Sus instrumentos para ayudar a traer de vuelta a las ovejas perdidas.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Alguna vez te has sentido como una «oveja perdida»? ¿Cómo experimentaste el cuidado del Buen Pastor?",
              "El Salvador conoce tu nombre y te conoce íntimamente. ¿Cómo cambia eso la forma en que te acercas a Él en oración?",
              "¿Hay alguien en tu vida que se haya alejado del rebaño? ¿Qué puedes hacer para ser un instrumento en su regreso?",
              "¿Cómo puedes ayudar a que los miembros de tu congregación local sientan que «hay un lugar para ellos» en el rebaño del Señor?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion20Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una de las distinciones más importantes de la Iglesia restaurada es la creencia en la revelación continua. Dios no habló solo en los tiempos bíblicos y luego guardó silencio — sigue hablando hoy a través de profetas vivientes, de las Escrituras y del Espíritu Santo a Sus hijos. En un mundo ruidoso y confuso, la voz del Señor sigue siendo accesible para quienes la buscan.",
          },
          {
            tipo: "escritura",
            referencia: "Amós 3:7",
            texto:
              "Porque no hará nada el Señor Jehová, sin que revele su secreto a sus siervos los profetas.",
            comentario:
              "El patrón eterno de Dios es comunicarse con Sus hijos a través de profetas. Si Dios tiene algo importante que decirle a Sus hijos hoy, lo hará — y lo está haciendo — a través de Su profeta viviente.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 1:38",
            texto:
              "Lo que yo el Señor he hablado, lo he hablado, y no me excuso a mí mismo; y aunque los cielos y la tierra pasen, mi palabra no pasará, sino que toda será cumplida, sea por mi propia voz o por la voz de mis siervos, lo mismo da.",
            comentario:
              "El Señor equipara Su propia voz con la voz de Sus siervos autorizados. Cuando el profeta habla bajo inspiración divina, es tan autoritativo como si el Señor mismo lo dijera.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«Revelación para la Iglesia, revelación para nuestras vidas», Liahona, mayo de 2018, pág. 93",
            texto:
              "En estos días resulta esencial que ustedes y yo escuchemos y sigamos las enseñanzas del profeta viviente. Nuestra vida, y la vida de nuestros seres amados, pueden depender de ello. ¿Cómo saber si un mensaje proviene del Señor? La respuesta es siempre la misma: mediante el poder del Espíritu Santo.",
          },
          {
            tipo: "parrafo",
            texto:
              "Escuchar la voz del Señor también es algo personal. El Espíritu Santo puede hablar a cada individuo de manera específica y personalizada — a través de pensamientos, sentimientos, impresiones, sueños o escrituras específicas que cobran significado en un momento determinado. Desarrollar la capacidad de reconocer esa voz es uno de los dones más preciosos que podemos cultivar.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Dios sigue hablando hoy a través de profetas vivientes, escrituras y el Espíritu Santo.",
              "El patrón eterno de Dios es revelar Sus secretos a Sus siervos los profetas (Amós 3:7).",
              "La voz del profeta autorizado equivale a la voz del Señor (DyC 1:38).",
              "El Espíritu Santo puede revelar la voluntad del Señor a cada individuo de manera personal.",
              "Reconocer y seguir la voz del Señor es una habilidad espiritual que se desarrolla mediante práctica y fidelidad.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuándo has sentido con claridad la voz del Espíritu Santo en tu vida? ¿Cómo reconociste que era Él?",
              "¿Cómo puedes preparar tu corazón y tu mente para escuchar mejor la voz del Señor en tu vida diaria?",
              "El presidente Nelson enseñó que seguir al profeta puede ser literalmente cuestión de vida o muerte. ¿Cómo priorizas las palabras del profeta viviente en tu vida?",
              "¿Hay un mensaje del profeta reciente que sientes que el Señor quiere que apliques más diligentemente?",
            ],
          },
        ],
      },
    ],

    questions: r250Leccion21Questions,
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Cuando pensamos en la Restauración, tendemos a pensar en eventos del pasado: la Primera Visión, la traducción del Libro de Mormón, la organización de la Iglesia. Pero el presidente Nelson enseñó una perspectiva más amplia: la Restauración es un proceso que continúa hoy, y nosotros somos participantes activos en él.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 65:2",
            texto:
              "El reino del cielo es como el grano de mostaza, que un hombre tomó y sembró en su campo; el cual a la verdad es la más pequeña de todas las semillas; pero cuando ha crecido, es la mayor de las hortalizas, y se hace árbol, de tal manera que las aves del cielo vienen y hacen nidos en sus ramas.",
            comentario:
              "El Señor reveló que Su reino restaurado crecería desde algo pequeño hasta llenar toda la tierra. Ese proceso de crecimiento está ocurriendo ahora y nosotros somos parte de él.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«La Restauración continua del Evangelio», Liahona, abril de 2020, pág. 100",
            texto:
              "La Restauración es una obra en curso. La revelación continúa. A medida que el Señor revela más de Su voluntad, Su pueblo restaurado también necesita avanzar. No podemos quedarnos donde estamos y pretender que la Restauración ya está completa.",
          },
          {
            tipo: "parrafo",
            texto:
              "Participar en la Restauración continua significa ser personas de estudio profundo, de fe activa y de disposición a recibir nueva luz y conocimiento. Significa llevar el Evangelio a toda nación, tribu, lengua y pueblo. Significa construir templos. Significa criar familias fieles. Cada acto de fidelidad nuestra es un ladrillo en el edificio del reino de Dios.",
          },
          {
            tipo: "escritura",
            referencia: "Daniel 2:44",
            texto:
              "Y en los días de estos reyes, el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre.",
            comentario:
              "La profecía de Daniel sobre la piedra cortada sin manos que llena toda la tierra es la Restauración del Evangelio. Ese reino — que comenzó pequeño — continúa creciendo y nunca será destruido.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La Restauración no fue un evento único sino un proceso continuo de revelación y crecimiento.",
              "El reino de Dios restaurado crecerá hasta llenar toda la tierra (Daniel 2:44).",
              "El presidente Nelson enseñó que la revelación continúa y que el pueblo de Dios debe seguir avanzando.",
              "Cada acto de fidelidad nuestra contribuye al crecimiento del reino de Dios.",
              "Participamos en la Restauración mediante el estudio, la fe, el servicio misional, la construcción de templos y la formación de familias fieles.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿En qué formas específicas eres tú un participante activo en la Restauración continua?",
              "El presidente Nelson dijo que no podemos quedarnos donde estamos pretendiendo que la Restauración ya está completa. ¿Qué significa eso para tu crecimiento espiritual personal?",
              "¿Qué pasos concretos puedes tomar para contribuir al crecimiento del reino de Dios en tu comunidad?",
              "¿Cómo puede la visión de la profecía de Daniel (el reino que llena toda la tierra) inspirarte a ser más fiel en tu papel diario?",
            ],
          },
        ],
      },
    ],

    questions: [
      {
        id: 1,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según el presidente Nelson, la Restauración del Evangelio fue completada con la muerte de José Smith y ya no continúa.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation:
          "Falso. El presidente Nelson enseñó: «La Restauración es una obra en curso. La revelación continúa... No podemos quedarnos donde estamos y pretender que la Restauración ya está completa.»",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿A qué profecía bíblica hace referencia la idea de que el reino de Dios restaurado crecerá hasta llenar toda la tierra?",
        options: [
          "La visión de Juan del Apocalipsis",
          "La profecía de Isaías sobre la segunda venida",
          "La visión de Daniel sobre la piedra cortada sin manos (Daniel 2:44)",
          "La profecía de Ezequiel sobre los dos palos",
        ],
        correctAnswer: 2,
        explanation:
          "Daniel 2:44 profetizó que el Dios del cielo «levantará un reino que no será jamás destruido». La piedra cortada sin manos que llena toda la tierra es interpretada como la Restauración del reino de Dios.",
      },
      {
        id: 3,
        type: "multiple",
        question:
          "¿Cuáles son ejemplos de cómo un miembro puede participar activamente en la Restauración continua?",
        options: [
          "Solo asistir a los servicios del domingo regularmente",
          "Construir templos, servir como misionero y criar familias fieles",
          "Estudiar la historia de la Iglesia y conocer los detalles de la Restauración",
          "Prepararse para el Juicio Final viviendo los mandamientos",
        ],
        correctAnswer: 1,
        explanation:
          "Participar en la Restauración continua incluye actos activos: llevar el Evangelio a otros, construir templos, formar familias fieles, y cada acto de fidelidad personal.",
      },
    ],
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              '«El Cristo Viviente» concluye con una promesa: «Testificamos que algún día Él regresará a la tierra. "Entonces se manifestará la gloria de Jehová, y toda carne juntamente la verá."» La Segunda Venida de Jesucristo no es solo un evento futuro — es la promesa que ancla nuestra esperanza y moldea la forma en que vivimos hoy.',
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 45:16",
            texto:
              "Y también de las señales que aparecerán en los últimos días ante mi venida, he aquí que hablaré en nombre de Cristo; por tanto, escuchad mis palabras.",
            comentario:
              "El Señor habló de las señales de Su venida no para generar miedo sino para que Sus seguidores puedan reconocerlas y prepararse. Cada señal cumplida es una razón adicional para la esperanza.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 101:36",
            texto:
              "Por tanto, no temáis, porque el reino os pertenece; y para vuestro bien, el Padre os ha concedido la gloria.",
            comentario:
              "La respuesta del Señor ante las dificultades de los últimos días es clara: «no temáis». El temor y la esperanza son incompatibles — elegimos uno o el otro al decidir en qué enfocamos nuestra atención.",
          },
          {
            tipo: "cita",
            autor: "Élder Neil L. Andersen",
            fuente: "«El Salvador quiere llamarnos más», Liahona, mayo de 2021, pág. 100",
            texto:
              "La Segunda Venida de Jesucristo no debe ser motivo de ansiedad para quienes están sobre el camino del convenio. Es la promesa que confirma que todo lo que hemos creído, esperado y por lo que hemos trabajado tiene un glorioso cumplimiento.",
          },
          {
            tipo: "parrafo",
            texto:
              "Prepararse para la Segunda Venida no significa acumular provisiones o calcular fechas — significa vivir fielmente el Evangelio hoy. El Salvador mismo enseñó: «Estad listos, porque a la hora que no pensáis, el Hijo del Hombre vendrá» (Lucas 12:40). La mejor preparación es la vida de discipulado diaria.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La Segunda Venida de Jesucristo es una certeza profética declarada por el Señor y Sus apóstoles.",
              "Las señales de los últimos días son indicadores de esperanza, no fuentes de temor, para quienes están en el camino del convenio.",
              "El Señor instruye «no temáis» (DyC 101:36) — la esperanza y el temor son incompatibles.",
              "La mejor preparación para la Segunda Venida es vivir fielmente el Evangelio hoy.",
              "La Segunda Venida confirma que todo lo que hemos creído y esperado tiene un glorioso cumplimiento.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Piensas en la Segunda Venida con esperanza y anticipación, o con ansiedad y temor? ¿Por qué?",
              "El Señor dice «no temáis». ¿Qué específicamente te preocupa acerca del futuro, y cómo puede la fe en Cristo transformar esa preocupación en esperanza?",
              "Si Jesucristo regresara mañana, ¿estarías satisfecho con la manera en que has vivido tu vida? ¿Qué cambiarías?",
              "¿Cómo puede la esperanza de la Segunda Venida motivarte a vivir más fielmente el Evangelio hoy, en este momento de tu vida?",
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
          "¿Cuál es la actitud que el Señor instruye a Sus seguidores tener ante los eventos de los últimos días, según DyC 101:36?",
        options: [
          "Vigilancia y ansiedad ante las señales que se acercan",
          "Esperanza y falta de temor — el reino les pertenece",
          "Preparación material rigurosa para los tiempos difíciles",
          "Urgencia de arrepentimiento antes de que sea demasiado tarde",
        ],
        correctAnswer: 1,
        explanation:
          "El Señor declara: «no temáis, porque el reino os pertenece.» La actitud correcta ante los últimos días es esperanza y confianza, no temor y ansiedad.",
      },
      {
        id: 2,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según el Élder Andersen, la Segunda Venida no debe ser motivo de ansiedad para quienes están en el camino del convenio.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El Élder Andersen enseñó que para quienes están «sobre el camino del convenio», la Segunda Venida «es la promesa que confirma que todo lo que hemos creído, esperado y por lo que hemos trabajado tiene un glorioso cumplimiento.»",
      },
      {
        id: 3,
        type: "multiple",
        question:
          "¿Cuál es la mejor preparación para la Segunda Venida del Salvador?",
        options: [
          "Calcular la fecha exacta mediante el estudio profético",
          "Acumular provisiones materiales para los tiempos difíciles",
          "Vivir fielmente el Evangelio de Jesucristo cada día",
          "Conocer en detalle todas las señales de los últimos días",
        ],
        correctAnswer: 2,
        explanation:
          "El Salvador enseñó: «Estad listos, porque a la hora que no pensáis, el Hijo del Hombre vendrá.» La mejor preparación es el discipulado diario fiel, no el cálculo de fechas ni el acumulo material.",
      },
    ],
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La idea del Juicio Final puede generar ansiedad. Pero la doctrina restaurada revela algo transformador: el Juez ante quien compareceremos es el mismo Salvador que fue a Getsemaní por nosotros, que sufrió en la cruz por nosotros, que nos conoce mejor que nadie y que desea nuestra felicidad más que nosotros mismos. No es un juez extraño e imparcial — es nuestro mejor defensor.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 137:9",
            texto:
              "Porque yo, el Señor, juzgaré a todos los hombres según sus obras, según el deseo de sus corazones.",
            comentario:
              "El Señor juzga no solo por obras externas sino también por los deseos del corazón. Esto es tanto alentador como solemne: los deseos genuinos de mejorar cuentan; pero también las motivaciones ocultas serán conocidas.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 45:3–5",
            texto:
              "Escucha a aquel que es el abogado ante el Padre, que está intercediendo tu causa ante él, diciendo: Padre, contempla el sufrimiento y la muerte de aquel que no pecó, en quien hallaste bien; contempla la sangre de tu Hijo que fue derramada... Por tanto, Padre, no entres en juicio con tu siervo, ya que en estos términos te ofrezco tus misericordias.",
            comentario:
              "Este es uno de los pasajes más emotivos de las Escrituras: el Salvador mismo es nuestro Abogado ante el Padre, intercediendo en nuestro favor. No llegamos al Juicio solos — Cristo habla por nosotros.",
          },
          {
            tipo: "cita",
            autor: "Presidente Dallin H. Oaks",
            fuente: "«El gran plan», Liahona, mayo de 2020, pág. 96",
            texto:
              "El Juicio Final no es simplemente una evaluación de la suma total de las obras buenas y malas. Es un reconocimiento del efecto final que tienen nuestros hechos y pensamientos — lo que hemos llegado a ser. Los mandamientos, las ordenanzas y los convenios del Evangelio no son una lista de depósitos en una cuenta celestial: son los medios que Dios nos ha dado para transformarnos en Sus hijos e hijas.",
          },
          {
            tipo: "parrafo",
            texto:
              "El Juicio Final revelará quiénes hemos llegado a ser, no solo lo que hemos hecho. Por eso el objetivo del Evangelio no es el cumplimiento de una lista de reglas — es la transformación del carácter. Cada convenio, cada acto de servicio, cada oración sincera van cambiando gradualmente quiénes somos, preparándonos para estar cómodos en la presencia de Dios.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo es nuestro Juez en el Juicio Final — el mismo que nos amó y realizó la Expiación.",
              "Cristo también es nuestro Abogado ante el Padre, intercediendo en nuestro favor (DyC 45:3–5).",
              "El Juicio incluye las obras, las palabras, los pensamientos y los deseos del corazón (DyC 137:9).",
              "El Juicio Final evalúa lo que hemos llegado a ser, no solo la suma de nuestras obras.",
              "Los mandamientos y convenios son herramientas de transformación personal, no solo una lista de verificación.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cómo cambia tu comprensión del Juicio Final saber que el Juez es el mismo que fue a Getsemaní por ti?",
              "DyC 45 describe a Cristo como nuestro Abogado ante el Padre. ¿Qué significa para ti saber que no estás solo en el Juicio?",
              "El presidente Oaks enseñó que el Juicio evalúa lo que hemos llegado a ser. ¿En qué tipo de persona te estás convirtiendo a través de tus elecciones diarias?",
              "¿Qué atributo del carácter de Cristo te gustaría desarrollar más antes de comparecerte ante Él?",
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
          "Según DyC 45:3–5, ¿qué papel desempeña Jesucristo en el Juicio Final además de ser el Juez?",
        options: [
          "Es el testigo principal de nuestras obras durante la vida mortal",
          "Es nuestro Abogado ante el Padre, intercediendo en nuestro favor",
          "Es el notario divino que registra todas nuestras acciones",
          "Es quien presenta las acusaciones de Satanás ante el Padre",
        ],
        correctAnswer: 1,
        explanation:
          "DyC 45:3–5 revela a Cristo como «el abogado ante el Padre, que está intercediendo tu causa ante él», señalando Su sufrimiento y sangre derramada en nuestro favor.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "Según DyC 137:9, ¿qué considera el Señor al juzgar a los hombres?",
        options: [
          "Solo sus obras externas y cumplimiento de mandamientos",
          "Sus obras y también el deseo de sus corazones",
          "Solo el grado de fidelidad a sus convenios del templo",
          "El testimonio de sus familiares y líderes de la Iglesia",
        ],
        correctAnswer: 1,
        explanation:
          "El Señor declara que juzgará «según sus obras, según el deseo de sus corazones». Tanto las acciones externas como las motivaciones internas son consideradas.",
      },
      {
        id: 3,
        type: "multiple",
        question:
          "Según el presidente Oaks, ¿qué evalúa principalmente el Juicio Final?",
        options: [
          "La suma total de obras buenas comparada con las malas",
          "El número de personas a quienes enseñamos el Evangelio",
          "Lo que hemos llegado a ser — el efecto transformador de nuestras elecciones",
          "El grado en que cumplimos nuestros llamamientos de la Iglesia",
        ],
        correctAnswer: 2,
        explanation:
          "El presidente Oaks enseñó que «el Juicio Final no es simplemente una evaluación de la suma total de las obras... Es un reconocimiento del efecto final que tienen nuestros hechos y pensamientos — lo que hemos llegado a ser.»",
      },
      {
        id: 4,
        type: "truefalse",
        question:
          "Verdadero o Falso: El Juez de toda la humanidad es un ser desconocido para nosotros que juzgará con perfecta imparcialidad.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation:
          "Falso. El Juez es Jesucristo — el mismo que realizó la Expiación por nosotros, que nos conoce íntimamente, y que actúa como nuestro Abogado ante el Padre. No es un juez extraño sino nuestro mejor defensor.",
      },
    ],
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La primera vez que Jesús dijo «sígueme» a Simón Pedro y a Andrés, estaba lanzando una invitación que cambiaría sus vidas para siempre. Ser discípulo de Jesucristo no es simplemente profesar una religión — es comprometerse a seguir a una Persona, aprender de Ella, llegar a ser como Ella. Es una identidad que se construye decisión por decisión, día a día.",
          },
          {
            tipo: "escritura",
            referencia: "Lucas 9:23",
            texto:
              "Y decía a todos: Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.",
            comentario:
              "Las palabras clave son «cada día». El discipulado no es un acto único — es una elección que se renueva diariamente. Negar a uno mismo no es supresión de la personalidad, sino alinear los deseos propios con los de Cristo.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 8:31–32",
            texto:
              "Dijo entonces Jesús a los judíos que habían creído en él: Si vosotros permaneciereis en mi palabra, seréis verdaderamente mis discípulos; y conoceréis la verdad, y la verdad os hará libres.",
            comentario:
              "El discipulado verdadero se prueba en la permanencia — no en los momentos de entusiasmo sino en la constancia a lo largo del tiempo. Y la promesa es liberación: la verdad que se recibe al permanecer en la palabra de Cristo nos hace verdaderamente libres.",
          },
          {
            tipo: "cita",
            autor: "Élder Dieter F. Uchtdorf",
            fuente: "«Los mejores tiempos y los peores tiempos», Liahona, noviembre de 2013, pág. 60",
            texto:
              "El discipulado no es una tarea que completamos sino un proceso continuo de llegar a ser. No es simplemente tomar el nombre de Cristo — es transformarse gradualmente hasta tener Sus atributos. El verdadero discípulo pregunta cada día: ¿Qué haría Cristo en mi lugar?",
          },
          {
            tipo: "parrafo",
            texto:
              "El discipulado tiene un costo real: Jesús habló de «tomar la cruz» y de «negarse a sí mismo». Pero también tiene recompensas que superan con creces el costo: una identidad clara, paz profunda, propósito eterno y la promesa de la exaltación. El apóstol Pablo, habiendo experimentado ambos lados, declaró: «Todo lo puedo en Cristo que me fortalece» (Filipenses 4:13).",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "El discipulado es una elección diaria de seguir a Cristo, no un acto único (Lucas 9:23).",
              "El discipulado verdadero se prueba en la permanencia y constancia en la palabra de Cristo (Juan 8:31–32).",
              "Ser discípulo implica transformación gradual hasta adquirir los atributos de Cristo.",
              "El discipulado tiene un costo real, pero sus recompensas — paz, propósito, identidad — superan ese costo.",
              "El verdadero discípulo pregunta constantemente: «¿Qué haría Cristo en mi lugar?»",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué significa para ti «tomar tu cruz cada día»? ¿Cuál es tu cruz específica en este momento de tu vida?",
              "Juan 8:31 dice que el discipulado verdadero se prueba en «permanecer» en la palabra de Cristo. ¿En qué áreas de tu vida te cuesta «permanecer»?",
              "¿Qué decisiones diarias concretas definen mejor tu discipulado en este momento?",
              "Si alguien observara tu vida esta semana sin conocerte, ¿qué evidencia vería de que eres discípulo de Jesucristo?",
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
          "Según Lucas 9:23, ¿con qué frecuencia debe un discípulo de Cristo tomar su cruz?",
        options: [
          "Una vez al año durante el ayuno",
          "Solo en momentos de crisis o tentación",
          "Cada día",
          "Cuando siente la inspiración del Espíritu Santo",
        ],
        correctAnswer: 2,
        explanation:
          "Jesús dijo: «tome su cruz cada día, y sígame.» El discipulado no es ocasional — es una elección que se renueva diariamente.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "Según Juan 8:31–32, ¿cuál es la señal de un verdadero discípulo de Cristo?",
        options: [
          "Realizar milagros y señales en el nombre de Cristo",
          "Permanecer en la palabra de Cristo",
          "Testificar públicamente de Cristo ante otros",
          "Observar perfectamente todos los mandamientos",
        ],
        correctAnswer: 1,
        explanation:
          "Jesús dijo: «Si vosotros permaneciereis en mi palabra, seréis verdaderamente mis discípulos.» La permanencia — la constancia a lo largo del tiempo — distingue al verdadero discípulo.",
      },
      {
        id: 3,
        type: "multiple",
        question:
          "Según el Élder Uchtdorf, ¿cómo describió el verdadero discipulado?",
        options: [
          "Una tarea que se completa al recibir todas las ordenanzas del templo",
          "Un proceso continuo de llegar a ser, transformándose hasta tener los atributos de Cristo",
          "El cumplimiento perfecto de todos los mandamientos del Evangelio",
          "Un estado de gracia que se recibe mediante la fe sola",
        ],
        correctAnswer: 1,
        explanation:
          "El Élder Uchtdorf enseñó: «El discipulado no es una tarea que completamos sino un proceso continuo de llegar a ser.» No es un punto de llegada sino un camino de transformación.",
      },
      {
        id: 4,
        type: "truefalse",
        question:
          "Verdadero o Falso: Jesús prometió que conocer la verdad como discípulo nos haría verdaderamente libres (Juan 8:32).",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. Jesús prometió: «conoceréis la verdad, y la verdad os hará libres.» El discipulado fiel trae como resultado la libertad espiritual.",
      },
    ],
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "El plan de salvación del Padre Celestial tiene un objetivo final extraordinario: que Sus hijos e hijas lleguen a ser como Él y como Su Hijo Jesucristo. No solo seguir a Cristo como modelo externo — sino desarrollar Sus atributos de manera que nuestro carácter se transforme. Este es el verdadero propósito de la mortalidad.",
          },
          {
            tipo: "escritura",
            referencia: "3 Nefi 27:27",
            texto:
              "Por tanto, ¿qué clase de hombres debéis ser? En verdad os digo que así como yo soy.",
            comentario:
              "Esta es quizás la invitación más audaz de todas las Escrituras. Cristo no dice «sé bueno» o «sé obediente» — dice «sé como yo soy». La meta del Evangelio es nada menos que la adquisición del carácter de Cristo.",
          },
          {
            tipo: "escritura",
            referencia: "Moroni 7:45, 47",
            texto:
              "Y la caridad sufre con paciencia, y es benigna, y no tiene envidia, no se jacta de sí misma, no se ensoberbece, no busca lo suyo, no se irrita fácilmente, no piensa el mal... Y la caridad es el amor puro de Cristo, y perdura para siempre; y a quien el Señor le concede esto, bien le va; y quien no la tuviere, no es nada.",
            comentario:
              "Moroni describe la caridad — el amor puro de Cristo — como el atributo supremo. No es solo sentir amor, sino tener la naturaleza de Cristo en cuanto al amor. Esta es la culminación de todos los demás atributos.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«Sé el mejor que puedas», Liahona, mayo de 2019, pág. 100",
            texto:
              "Nuestro Padre Celestial y Su Hijo Amado viven y nos aman. Su objetivo para cada uno de nosotros es que lleguemos a ser eternamente como Ellos. Eso no ocurrirá en un día, pero puede ocurrir con el tiempo si decidimos dejar que Cristo nos cambie.",
          },
          {
            tipo: "parrafo",
            texto:
              "El proceso de llegar a ser más semejante a Cristo es gradual y requiere la cooperación entre nuestro esfuerzo y la gracia de Cristo. Las virtudes de Cristo — fe, esperanza, caridad, mansedumbre, paciencia, diligencia — no se adquieren de golpe sino mediante la práctica deliberada y la influencia del Espíritu Santo que transforma el corazón.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "El objetivo final del plan de salvación es que lleguemos a ser como el Padre Celestial y Jesucristo.",
              "Cristo invita a Sus discípulos a ser «así como yo soy» — a adquirir Su carácter (3 Nefi 27:27).",
              "La caridad (el amor puro de Cristo) es el atributo supremo al que aspiramos (Moroni 7:45, 47).",
              "El proceso de llegar a ser como Cristo es gradual, requiriendo tanto esfuerzo personal como gracia divina.",
              "Las virtudes de Cristo se adquieren mediante práctica deliberada y la transformación del Espíritu Santo.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué atributo de Jesucristo sientes que más necesitas desarrollar en este momento de tu vida?",
              "Cristo dice «sé como yo soy». ¿Te parece esa meta alcanzable o imposible? ¿Por qué?",
              "¿Qué experiencia o situación difícil en tu vida actualmente podría ser una oportunidad para desarrollar un atributo de Cristo?",
              "¿Cómo puede la comprensión de que la caridad es «el amor puro de Cristo» cambiar la manera en que tratas a las personas difíciles en tu vida?",
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
          "Según 3 Nefi 27:27, ¿cuál es el estándar al que Cristo llama a Sus discípulos?",
        options: [
          "Ser buenas personas que ayudan a los demás",
          "Cumplir todos los mandamientos del Evangelio",
          "Ser «así como Él es» — desarrollar Su carácter",
          "Convertirse en misioneros activos en el mundo",
        ],
        correctAnswer: 2,
        explanation:
          "Cristo pregunta: «¿Qué clase de hombres debéis ser? En verdad os digo que así como yo soy.» La meta es el carácter de Cristo, no solo el cumplimiento de reglas.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "Según Moroni 7:47, ¿qué es la caridad?",
        options: [
          "La práctica del servicio voluntario en la Iglesia",
          "La generosidad material hacia los necesitados",
          "El amor puro de Cristo que perdura para siempre",
          "La virtud de perdonar a los que nos ofenden",
        ],
        correctAnswer: 2,
        explanation:
          "Moroni define la caridad como «el amor puro de Cristo» que «perdura para siempre». No es simplemente un sentimiento — es la naturaleza divina de Cristo en cuanto al amor.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según el presidente Nelson, llegar a ser como el Padre Celestial y el Salvador es el objetivo para cada uno de nosotros.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El presidente Nelson declaró: «Su objetivo para cada uno de nosotros es que lleguemos a ser eternamente como Ellos.»",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Cómo se adquieren los atributos de Cristo según la doctrina del Evangelio?",
        options: [
          "De manera instantánea mediante una experiencia espiritual de conversión",
          "Gradualmente mediante práctica deliberada y la transformación del Espíritu Santo",
          "Solo después de la resurrección cuando recibimos cuerpos glorificados",
          "Principalmente a través del estudio intensivo de las Escrituras",
        ],
        correctAnswer: 1,
        explanation:
          "Los atributos de Cristo se adquieren gradualmente, combinando el esfuerzo personal deliberado con la influencia transformadora del Espíritu Santo y la gracia de Cristo.",
      },
    ],
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "En un mundo que parece cada vez más oscuro, incierto y angustiante, la afirmación de Jesucristo cobra una relevancia nueva y urgente: «Yo soy la luz del mundo» (Juan 8:12). No es una metáfora poética — es una declaración de identidad. Cristo es la fuente de toda luz: física, espiritual, intelectual y moral.",
          },
          {
            tipo: "escritura",
            referencia: "Juan 8:12",
            texto:
              "Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.",
            comentario:
              "La promesa es directa y personal: «el que me sigue» tendrá la luz. No es una promesa vaga — es condicional sobre el seguimiento. Quienes siguen a Cristo no solo ven la luz; participan de ella.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 88:11–13",
            texto:
              "Y la luz que ilumina el sol fue hecha por Cristo; y también la luz que ilumina la luna, es por Él; y la luz que ilumina las estrellas, e ilumina a la tierra, y todo aquello que tiene vida, es tanto a través de la ley como en virtud de la voluntad del Hijo, del Padre. Y la luz que ilumina el sol es el mismo Cristo que ilumina vuestros entendimientos, que es en el sol, y en la luz del sol, y en el poder del sol mediante el cual es hecho.",
            comentario:
              "Esta es una de las revelaciones más profundas sobre la naturaleza de Cristo: Su luz no es solo espiritual. La misma luz del sol, la luna y las estrellas es una expresión del poder de Cristo. Estamos literalmente rodeados de Su presencia y poder.",
          },
          {
            tipo: "cita",
            autor: "«El Cristo Viviente: El Testimonio de los Apóstoles»",
            fuente: "La Iglesia de Jesucristo de los Santos de los Últimos Días, 2000",
            texto:
              "Él es la luz, la vida y la esperanza del mundo. Su camino es el sendero que lleva a la felicidad en esta vida y a la vida eterna en el mundo venidero.",
          },
          {
            tipo: "parrafo",
            texto:
              "La esperanza que ofrece Cristo no es optimismo ingenuo ante las dificultades — es la certeza fundamentada en quién es Él y en lo que ha prometido. La Resurrección ya ocurrió. La Expiación ya fue completada. El reino de Dios está siendo edificado. En medio de la oscuridad del mundo, estas realidades son faros inquebrantables.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Jesucristo es la fuente de toda luz — física, espiritual, intelectual y moral (Juan 8:12; DyC 88:11–13).",
              "La promesa de «tener la luz de la vida» está condicionada a seguir a Cristo.",
              "La luz de Cristo no es solo metáfora — es una realidad cósmica que permea toda la creación (DyC 88).",
              "La esperanza que Cristo ofrece está fundamentada en realidades históricas: Resurrección, Expiación completada, reino edificándose.",
              "«El Cristo Viviente» resume Su misión: es «la luz, la vida y la esperanza del mundo.»",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿En qué áreas de tu vida sientes más oscuridad o confusión ahora mismo? ¿Cómo puede Cristo ser específicamente la luz en esas áreas?",
              "DyC 88 enseña que la luz de Cristo permea toda la creación. ¿Cómo cambia eso la manera en que ves el mundo natural a tu alrededor?",
              "¿Cuándo has experimentado la «luz de la vida» prometida en Juan 8:12 al seguir a Cristo?",
              "¿Cómo puedes ser un instrumento para reflejar la luz de Cristo hacia alguien que está en oscuridad esta semana?",
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
          "Según Juan 8:12, ¿qué promete Cristo a quienes le siguen?",
        options: [
          "Prosperidad material y protección de las enfermedades",
          "No andarán en tinieblas sino que tendrán la luz de la vida",
          "Conocimiento perfecto de todas las verdades eternas",
          "La capacidad de obrar milagros en Su nombre",
        ],
        correctAnswer: 1,
        explanation:
          "Jesús prometió: «el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.» La promesa es de orientación y vida espiritual para quienes le siguen.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "Según DyC 88:11–13, ¿cuál es la fuente de la luz del sol, la luna y las estrellas?",
        options: [
          "Las leyes naturales establecidas por el Padre en la Creación",
          "La energía nuclear de las reacciones físicas del universo",
          "Cristo — cuya luz ilumina toda la Creación",
          "El poder del Espíritu Santo que está en todas las cosas",
        ],
        correctAnswer: 2,
        explanation:
          "DyC 88 revela que la luz del sol, la luna y las estrellas fue hecha por Cristo y son expresiones de Su poder. La luz de Cristo no es solo espiritual — permea toda la creación física.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según «El Cristo Viviente», Jesucristo es la luz, la vida y la esperanza del mundo.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. «El Cristo Viviente» concluye declarando: «Él es la luz, la vida y la esperanza del mundo. Su camino es el sendero que lleva a la felicidad en esta vida y a la vida eterna en el mundo venidero.»",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿En qué está fundamentada la esperanza que Cristo ofrece, según el contenido de la lección?",
        options: [
          "En promesas futuras que aún no han sido cumplidas",
          "En el optimismo personal de cada creyente",
          "En realidades históricas: Resurrección completada, Expiación realizada, reino edificándose",
          "En las experiencias espirituales subjetivas de los fieles",
        ],
        correctAnswer: 2,
        explanation:
          "La esperanza cristiana no es optimismo ingenuo — está fundamentada en eventos históricos reales: la Resurrección ya ocurrió, la Expiación fue completada, el reino de Dios está siendo edificado.",
      },
    ],
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

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La lección final del curso regresa al punto de partida con una nueva profundidad: hemos aprendido sobre el ministerio preterrenal, terrenal y posterrenal de Jesucristo. Ahora la invitación es convertirnos en Sus testigos — personas cuya vida entera dé testimonio de que Jesucristo vive, de que Su Evangelio es verdadero y de que Su amor transforma.",
          },
          {
            tipo: "escritura",
            referencia: "Hechos 1:8",
            texto:
              "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.",
            comentario:
              "Cristo comisionó a Sus discípulos antes de ascender al cielo. La misma comisión se extiende a nosotros: con el poder del Espíritu Santo, somos testigos en nuestro «Jerusalén» (familia y amigos cercanos) y en todo el mundo.",
          },
          {
            tipo: "escritura",
            referencia: "Mosíah 18:9",
            texto:
              "Sí, y a llevar los unos las cargas de los otros, para que sean ligeras; sí, y a estar de luto con los que están de luto; sí, y a consolar a los que estén necesitados de consuelo, y a pararte como testigo de Dios en todo tiempo y en todas cosas, y en todos los lugares en que estuvieres, hasta la muerte.",
            comentario:
              "Alma describe el convenio del bautismo: ser testigo «en todo tiempo y en todas cosas y en todos los lugares». No solo en la Iglesia, no solo en palabras — sino con toda nuestra vida, en todo contexto.",
          },
          {
            tipo: "cita",
            autor: "Élder D. Todd Christofferson",
            fuente: "«Levantémonos como hombres de Dios», Liahona, noviembre de 2006, pág. 47",
            texto:
              "Las demás personas deberían poder ver en nosotros algo de Jesucristo. Nuestra paciencia, nuestra bondad, nuestro servicio, nuestra honestidad, nuestra integridad — todo debería hablar de quién es nuestro Maestro. El mejor sermón es una vida bien vivida.",
          },
          {
            tipo: "parrafo",
            texto:
              "Ser testigos de Cristo no requiere condiciones perfectas ni elocuencia extraordinaria. Requiere autenticidad: compartir honestamente lo que hemos experimentado del Salvador en nuestra vida. El apóstol Juan escribió: «Lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos» (1 Juan 1:1) — un testimonio basado en experiencia personal, no en argumentos abstractos.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Como discípulos bautizados, tenemos el convenio de ser testigos de Dios «en todo tiempo, en todas cosas y en todos los lugares» (Mosíah 18:9).",
              "El poder para testificar viene del Espíritu Santo (Hechos 1:8).",
              "El testimonio más poderoso es una vida que refleja los atributos de Cristo (Élder Christofferson).",
              "Un testimonio auténtico está basado en experiencia personal con el Salvador, no solo en argumentos intelectuales.",
              "Somos testigos en nuestro «Jerusalén» (círculo cercano) y también hasta «lo último de la tierra» (misión global).",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "Al concluir este curso, ¿cómo ha cambiado o profundizado tu testimonio de Jesucristo?",
              "Mosíah 18:9 dice que debemos ser testigos «en todo tiempo, en todas cosas y en todos los lugares». ¿En qué contexto específico de tu vida te resulta más difícil ser testigo de Cristo?",
              "¿Qué verdad específica sobre Jesucristo que aprendiste en este curso deseas compartir con alguien cercano?",
              "Al terminar este estudio del Evangelio sempiterno de Jesucristo, ¿qué compromiso personal quieres hacer para ser un mejor testigo de Él en tu vida diaria?",
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
          "Según Mosíah 18:9, ¿cuándo y dónde debemos pararnos como testigos de Dios?",
        options: [
          "Solo en las reuniones de la Iglesia y actividades religiosas",
          "Principalmente en conversaciones sobre el Evangelio",
          "En todo tiempo, en todas cosas y en todos los lugares",
          "Cuando nos sintamos inspirados por el Espíritu Santo a hacerlo",
        ],
        correctAnswer: 2,
        explanation:
          "Alma describe el convenio del bautismo: «pararte como testigo de Dios en todo tiempo y en todas cosas, y en todos los lugares en que estuvieres, hasta la muerte.» No tiene limitaciones de contexto o circunstancia.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "Según Hechos 1:8, ¿cuál es la fuente del poder para ser testigos de Cristo?",
        options: [
          "El conocimiento profundo de las Escrituras",
          "La experiencia personal de conversión",
          "El Espíritu Santo",
          "La autorización del sacerdocio por parte de los líderes",
        ],
        correctAnswer: 2,
        explanation:
          "Cristo prometió: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos.» El poder para testificar proviene del Espíritu Santo.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según el Élder Christofferson, las demás personas deberían poder ver en nosotros algo de Jesucristo a través de nuestra conducta diaria.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El Élder Christofferson enseñó: «Las demás personas deberían poder ver en nosotros algo de Jesucristo... El mejor sermón es una vida bien vivida.»",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "Según la comisión de Cristo en Hechos 1:8, ¿cuál es el alcance geográfico de nuestro testimonio?",
        options: [
          "Solo en nuestra familia y comunidad local",
          "En nuestra nación y los países vecinos",
          "Desde Jerusalén (círculo cercano) hasta lo último de la tierra",
          "En los países donde la Iglesia ya está establecida",
        ],
        correctAnswer: 2,
        explanation:
          "Cristo comisionó a Sus discípulos a ser testigos «en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» — desde lo más cercano hasta el mundo entero.",
      },
      {
        id: 5,
        type: "truefalse",
        question:
          "Verdadero o Falso: Un testimonio auténtico de Cristo debe estar basado en experiencia personal con el Salvador, no solo en argumentos intelectuales.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El apóstol Juan testificó de «lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos» — un testimonio basado en experiencia personal vivida.",
      },
    ],
  },
]