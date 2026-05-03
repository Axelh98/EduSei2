import type { FlatLesson } from "../types"

const BASE_URL =
  "https://www.churchofjesuschrist.org/study/manual/foundations-of-the-restoration-class-preparation-material-2019"

export const religion225Lessons: FlatLesson[] = [
  {
    id: "r225-l01",
    title: "El preludio de la Restauración",
    type: "Religión 225",
    description: "El contexto histórico y espiritual que preparó el mundo para la Restauración del Evangelio.",
    chapterUrl: `${BASE_URL}/lesson-1-class-preparation-material-prelude-to-the-restoration?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La Restauración del Evangelio en 1820 no ocurrió en un vacío histórico. Durante siglos, el Señor había estado preparando el mundo para el retorno de la plenitud de Su Evangelio. Desde la invención de la imprenta hasta las luchas por la libertad religiosa, desde la traducción de la Biblia a idiomas vernáculos hasta el surgimiento de naciones con libertades constitucionales — todo fue parte de un plan divino para preparar el escenario de la Restauración.",
          },
          {
            tipo: "escritura",
            referencia: "Amós 8:11–12",
            texto:
              "He aquí vienen días, dice Jehová el Señor, en los cuales enviaré hambre a la tierra, no hambre de pan, ni sed de agua, sino de oír la palabra de Jehová. E irán errantes de mar a mar; desde el norte hasta el oriente discurrirán buscando palabra de Jehová, y no la hallarán.",
            comentario:
              "El profeta Amós predijo una hambruna espiritual — no física sino de oír la palabra del Señor. Esta profecía se cumplió durante la Gran Apostasía, cuando la autoridad del sacerdocio y muchas verdades claras y preciosas se perdieron de la tierra. El mundo quedó en oscuridad espiritual, preparando la necesidad de una restauración.",
          },
          {
            tipo: "escritura",
            referencia: "1 Nefi 13:34–35",
            texto:
              "Y aconteció que vi al ángel del Señor que habló, y me dijo: Estos últimos anales que has visto entre los gentiles testificarán de las cosas que hay escritas en el primero, que son de los doce apóstoles del Cordero; y testificarán de la veracidad de las primeras, las cuales son del Cordero de Dios; y después que proceden por mano de los doce apóstoles del Cordero de los judíos a los gentiles, verás el fundamento de una grande y abominable iglesia.",
            comentario:
              "Nefi vio en visión que en los últimos días el Señor sacaría a luz registros adicionales (el Libro de Mormón) que restaurarían verdades perdidas y testificarían de la Biblia. La Restauración no fue solo el regreso de la organización de la Iglesia — fue la restauración de verdad.",
          },
          {
            tipo: "parrafo",
            texto:
              "Durante la Edad Media, la Biblia estaba bajo el control de la iglesia institucional y solo existía en latín, un idioma que el pueblo común no leía. Reformadores valientes como John Wycliffe, William Tyndale, Martin Lutero y otros arriesgaron sus vidas para traducir las Escrituras a idiomas que la gente pudiera entender. Muchos fueron martirizados por su esfuerzo. Estos reformadores abrieron las puertas para que millones pudieran leer la palabra de Dios por sí mismos.",
          },
          {
            tipo: "cita",
            autor: "Presidente Dallin H. Oaks",
            fuente: "«La Apostasía y la Restauración», Liahona, julio de 1995, pág. 84",
            texto:
              "Muchos profetas predijeron la Gran Apostasía. También predijeron que la autoridad y la verdad divinas serían restauradas. Estamos viviendo en esa época prometida. La Restauración del Evangelio de Jesucristo es la prueba de que Dios todavía habla a Sus hijos.",
          },
          {
            tipo: "parrafo",
            texto:
              "El establecimiento de los Estados Unidos de América con su Constitución que garantizaba la libertad religiosa fue un evento crucial. José Smith enseñó que la Constitución fue establecida «por la mano de hombres sabios» que el Señor levantó precisamente para este propósito (DyC 101:80). Sin la libertad religiosa garantizada en América, la Restauración habría enfrentado la misma persecución que sofocó intentos anteriores de reforma.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "La Gran Apostasía fue profetizada por profetas antiguos y resultó en la pérdida de la autoridad del sacerdocio y de muchas verdades claras (Amós 8:11–12).",
              "Durante siglos, el Señor preparó el mundo para la Restauración mediante reformadores, la traducción de la Biblia, la invención de la imprenta y el establecimiento de naciones con libertad religiosa.",
              "La Constitución de los Estados Unidos fue establecida por la mano de Dios para proveer el marco legal necesario para la Restauración (DyC 101:80).",
              "La Restauración no fue simplemente la reorganización de una iglesia — fue el retorno de la autoridad divina y la revelación de verdades perdidas.",
              "Los reformadores, aunque inspirados, no tenían la autoridad del sacerdocio para restaurar plenamente la Iglesia de Cristo.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Por qué crees que el Señor permitió la Gran Apostasía en lugar de preservar continuamente Su Iglesia en la tierra?",
              "¿Qué papel jugaron los reformadores religiosos en preparar el camino para la Restauración, aunque ellos mismos no la completaron?",
              "¿Cómo ves la mano del Señor guiando eventos históricos (la imprenta, la Reforma, la fundación de América) hacia el propósito de la Restauración?",
              "¿Qué paralelos ves entre el hambre espiritual descrita en Amós 8:11 y las condiciones del mundo actual?",
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
          "Según Amós 8:11–12, ¿qué tipo de hambre profetizó el Señor que vendría sobre la tierra?",
        options: [
          "Hambre de pan y sed de agua debido a sequías severas",
          "Hambre de oír la palabra de Jehová — una hambruna espiritual",
          "Hambre de justicia social y reformas políticas",
          "Hambre física que llevaría a las naciones a la guerra",
        ],
        correctAnswer: 1,
        explanation:
          "Amós profetizó: «enviaré hambre a la tierra, no hambre de pan, ni sed de agua, sino de oír la palabra de Jehová.» Esta hambruna espiritual fue el resultado de la Gran Apostasía.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Cuál fue uno de los eventos clave que preparó el mundo para la Restauración permitiendo que la gente común leyera las Escrituras?",
        options: [
          "La conquista romana que unificó el idioma del imperio",
          "La traducción de la Biblia a idiomas vernáculos por reformadores como Tyndale y Lutero",
          "El establecimiento de escuelas públicas en toda Europa",
          "La invención del telescopio que reveló la vastedad del universo",
        ],
        correctAnswer: 1,
        explanation:
          "Reformadores como Wycliffe, Tyndale y Lutero arriesgaron sus vidas para traducir la Biblia del latín a idiomas que el pueblo pudiera leer, abriendo el acceso a las Escrituras.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: José Smith enseñó que la Constitución de los Estados Unidos fue establecida por hombres sabios levantados por Dios para ese propósito.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. DyC 101:80 enseña que la Constitución fue establecida «por la mano de hombres sabios» que el Señor levantó. La libertad religiosa fue esencial para la Restauración.",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Qué perdió la tierra durante la Gran Apostasía?",
        options: [
          "Solo algunos rituales y prácticas secundarias de la Iglesia primitiva",
          "La autoridad del sacerdocio y muchas verdades claras y preciosas",
          "El conocimiento de que Dios existe y ama a Sus hijos",
          "La capacidad de los seres humanos de orar directamente a Dios",
        ],
        correctAnswer: 1,
        explanation:
          "Durante la Gran Apostasía se perdieron la autoridad del sacerdocio y muchas verdades claras y preciosas del Evangelio. Esto creó la necesidad de una restauración completa.",
      },
      {
        id: 5,
        type: "truefalse",
        question:
          "Verdadero o Falso: Los reformadores religiosos como Lutero y Calvino tenían la autoridad del sacerdocio para restaurar plenamente la Iglesia de Cristo.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation:
          "Falso. Aunque fueron inspirados y prepararon el camino, los reformadores no poseían la autoridad del sacerdocio. Se requirió una restauración divina mediante mensajeros celestiales.",
      },
    ],
  },
  {
    id: "r225-l02",
    title: "La Primera Visión",
    type: "Religión 225",
    description: "La visita del Padre Celestial y Jesucristo al joven José Smith en la arboleda sagrada.",
    chapterUrl: `${BASE_URL}/lesson-2-class-preparation-material-the-first-vision?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una mañana de primavera de 1820, un joven de 14 años llamado José Smith entró en una arboleda cerca de su casa en Palmyra, Nueva York. Lo que ocurrió allí cambió el curso de la historia humana. Por primera vez desde los tiempos del Nuevo Testamento, el Padre Celestial y Jesucristo se aparecieron juntos a un ser humano, iniciando lo que llamamos la dispensación del cumplimiento de los tiempos.",
          },
          {
            tipo: "escritura",
            referencia: "José Smith—Historia 1:15–17",
            texto:
              "Vi una columna de luz, más brillante que el sol, directamente arriba de mi cabeza; y esta luz gradualmente descendió hasta descansar sobre mí... Al reposar sobre mí la luz, vi en el aire arriba de mí a dos Personajes, cuyo fulgor y gloria no admiten descripción. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Éste es mi Hijo Amado: ¡Escúchalo!",
            comentario:
              "El relato de José es directo y poderoso. Vio al Padre y al Hijo como seres separados y distintos con cuerpos glorificados. El Padre presentó al Hijo y dirigió a José hacia Él. Esta visión restauró verdades fundamentales sobre la naturaleza de Dios que se habían perdido.",
          },
          {
            tipo: "escritura",
            referencia: "José Smith—Historia 1:18–19",
            texto:
              "Mi objeto al dirigirme al Señor fue saber cuál de todas las sectas era la verdadera, a fin de saber a cuál unirme. Por tanto, tan luego como me hube recobrado lo suficiente para poder hablar, pregunté a los Personajes que estaban en la luz arriba de mí, cuál de todas las sectas era la verdadera y a cuál debía unirme. Se me contestó que no debía unirme a ninguna, porque todas estaban en error.",
            comentario:
              "José recibió una respuesta directa a su pregunta: ninguna de las iglesias existentes tenía la plenitud de la verdad ni la autoridad del sacerdocio. Se necesitaba una restauración completa, no una reforma.",
          },
          {
            tipo: "cita",
            autor: "Presidente Gordon B. Hinckley",
            fuente: "«Testimonios perdurables», Liahona, noviembre de 1995, pág. 72",
            texto:
              "Nuestra religión entera se sustenta o cae en el testimonio de la Primera Visión. O sucedió o no sucedió. Si no sucedió, entonces esta obra es un fraude. Si sucedió, entonces es la obra más grande y maravillosa bajo el cielo.",
          },
          {
            tipo: "parrafo",
            texto:
              "La Primera Visión restauró verdades fundamentales: (1) que Dios el Padre y Jesucristo son seres separados, distintos y glorificados; (2) que los cielos no están cerrados — Dios sigue hablando a Sus hijos; (3) que la plenitud del Evangelio no estaba sobre la tierra y necesitaba ser restaurada; (4) que Dios conoce a cada uno de Sus hijos por nombre y responde oraciones sinceras. Estas verdades forman el fundamento de la fe restaurada.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "En la primavera de 1820, José Smith vio al Padre Celestial y a Jesucristo en una arboleda cerca de Palmyra, Nueva York (JS—H 1:15–17).",
              "El Padre presentó al Hijo, confirmando que son dos seres separados, distintos y glorificados.",
              "José fue instruido a no unirse a ninguna iglesia existente porque todas estaban en error y carecían de la plenitud del Evangelio.",
              "La Primera Visión inaugura la dispensación del cumplimiento de los tiempos — la última dispensación antes de la Segunda Venida de Cristo.",
              "El testimonio de la Primera Visión es fundamental para la Iglesia restaurada. Si sucedió, esta obra es divina; si no sucedió, es un fraude (Presidente Hinckley).",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Qué significa para ti personalmente que el Padre Celestial conoció a José Smith por nombre? ¿Qué implica eso sobre Su conocimiento de ti?",
              "¿Cómo afecta tu fe la enseñanza de que el Padre y el Hijo son seres separados con cuerpos glorificados?",
              "José tenía 14 años cuando tuvo esta experiencia sagrada. ¿Qué te enseña eso sobre la capacidad de los jóvenes de tener experiencias espirituales profundas?",
              "Si alguien te preguntara por qué crees que la Primera Visión realmente ocurrió, ¿qué evidencias espirituales o históricas compartirías?",
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
          "Según José Smith—Historia 1:17, ¿qué dijo el Padre Celestial cuando apareció con Jesucristo a José Smith?",
        options: [
          "«Soy el Alfa y la Omega, el principio y el fin»",
          "«Éste es mi Hijo Amado: ¡Escúchalo!»",
          "«Yo soy Jehová, el Dios de tus padres»",
          "«Prepárate para recibir mi palabra»",
        ],
        correctAnswer: 1,
        explanation:
          "El Padre presentó al Hijo con las palabras: «Éste es mi Hijo Amado: ¡Escúchalo!», dirigiendo la atención y la fe de José hacia Jesucristo.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Qué pregunta específica llevó José Smith a la arboleda sagrada?",
        options: [
          "Cómo podría saber si Dios existía realmente",
          "Cuál de todas las iglesias era la verdadera y a cuál debía unirse",
          "Si sus pecados podían ser perdonados",
          "Cuándo vendría Jesucristo nuevamente",
        ],
        correctAnswer: 1,
        explanation:
          "José Smith—Historia 1:18 registra: «Mi objeto al dirigirme al Señor fue saber cuál de todas las sectas era la verdadera, a fin de saber a cuál unirme.»",
      },
      {
        id: 3,
        type: "multiple",
        question:
          "¿Qué le dijo el Salvador a José Smith acerca de las iglesias existentes en 1820?",
        options: [
          "Que debía unirse a la iglesia más cercana a su casa",
          "Que debía crear una nueva denominación basada en sus creencias",
          "Que no debía unirse a ninguna porque todas estaban en error",
          "Que todas las iglesias tenían parte de la verdad y debía aprender de todas",
        ],
        correctAnswer: 2,
        explanation:
          "José fue instruido claramente: «Se me contestó que no debía unirme a ninguna, porque todas estaban en error» (JS—H 1:19). Se requería una restauración, no una reforma.",
      },
      {
        id: 4,
        type: "truefalse",
        question:
          "Verdadero o Falso: El presidente Hinckley enseñó que toda nuestra religión se sustenta o cae en el testimonio de la Primera Visión.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El presidente Hinckley declaró: «Nuestra religión entera se sustenta o cae en el testimonio de la Primera Visión. O sucedió o no sucedió.»",
      },
      {
        id: 5,
        type: "multiple",
        question:
          "¿Qué edad tenía José Smith cuando recibió la Primera Visión?",
        options: [
          "17 años",
          "14 años",
          "21 años",
          "19 años",
        ],
        correctAnswer: 1,
        explanation:
          "José tenía 14 años cuando recibió la Primera Visión en la primavera de 1820. Esto demuestra que los jóvenes pueden tener experiencias espirituales profundas.",
      },
    ],
  },
  {
    id: "r225-l03",
    title: "Cómo adquirir conocimiento espiritual",
    type: "Religión 225",
    description: "Principios y procesos para obtener conocimiento por medio del Espíritu Santo.",
    chapterUrl: `${BASE_URL}/lesson-3-class-preparation-material-acquiring-spiritual-knowledge?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Vivimos en una era de información sin precedentes. Con unos pocos clics podemos acceder a más datos de los que nuestros ancestros conocieron en toda su vida. Sin embargo, información no es lo mismo que conocimiento, y conocimiento no es lo mismo que sabiduría. El Evangelio restaurado enseña que existe un tipo especial de conocimiento — conocimiento espiritual — que solo puede adquirirse mediante el Espíritu Santo y que es más valioso que todo el conocimiento secular del mundo.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 8:2–3",
            texto:
              "Sí, he aquí, yo te diré en tu mente y en tu corazón, por medio del Espíritu Santo que vendrá sobre ti y que morará en tu corazón. Ahora, he aquí, este es el espíritu de revelación; he aquí, este es el espíritu mediante el cual Moisés condujo a los hijos de Israel por el Mar Rojo sobre tierra seca.",
            comentario:
              "El Señor enseña que la revelación viene tanto a la mente como al corazón. No es solo un sentimiento ni solo un pensamiento — es una combinación de entendimiento intelectual e impresión espiritual. El mismo poder que dividió el Mar Rojo está disponible para guiarnos hoy.",
          },
          {
            tipo: "escritura",
            referencia: "1 Corintios 2:11, 14",
            texto:
              "Porque ¿quién de los hombres sabe las cosas del hombre, sino el espíritu del hombre que está en él? Así tampoco nadie conoció las cosas de Dios, sino el Espíritu de Dios... Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente.",
            comentario:
              "Pablo establece una verdad fundamental: las cosas espirituales solo pueden discernirse espiritualmente. El método científico, por útil que sea, tiene límites inherentes. No puede medir el amor, probar la existencia de Dios ni evaluar la autenticidad de una escritura. Se requiere un método diferente.",
          },
          {
            tipo: "cita",
            autor: "Élder Dallin H. Oaks",
            fuente: "«Enseñar y aprender por el Espíritu», Liahona, mayo de 1999, pág. 22",
            texto:
              "El conocimiento espiritual no se puede lograr mediante el uso exclusivo del intelecto, ni siquiera al combinar el intelecto con la capacidad o con la experiencia humana. El conocimiento espiritual se logra únicamente mediante el Espíritu Santo.",
          },
          {
            tipo: "parrafo",
            texto:
              "El proceso para adquirir conocimiento espiritual incluye tres elementos esenciales: (1) Actuar con fe — hacer preguntas sinceras, estudiar diligentemente y obedecer lo que ya sabemos; (2) Examinar conceptos e ideas con una perspectiva eterna — no solo con lógica humana sino considerando las verdades del Evangelio; (3) Buscar mayor comprensión mediante la revelación — orar, meditar, ayunar y estar dispuesto a recibir respuestas del Espíritu. Este patrón fue el que siguió José Smith cuando leyó Santiago 1:5 y decidió preguntarle a Dios.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "El conocimiento espiritual solo puede adquirirse mediante el Espíritu Santo (1 Corintios 2:14).",
              "La revelación viene tanto a la mente (entendimiento) como al corazón (sentimientos espirituales) (DyC 8:2–3).",
              "El proceso para adquirir conocimiento espiritual incluye: actuar con fe, examinar conceptos con perspectiva eterna y buscar revelación mediante oración y estudio.",
              "El Espíritu Santo testifica de la verdad, no solo de hechos — puede confirmar realidades espirituales que la ciencia no puede medir.",
              "Cada persona puede recibir revelación personal para guiar su propia vida; no necesitamos depender solo de expertos humanos.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuándo has sentido que recibiste conocimiento espiritual que no podrías haber obtenido mediante el estudio o la lógica sola?",
              "¿Qué diferencia hay entre «saber» que algo es verdad mediante evidencia y «saber» mediante el Espíritu Santo?",
              "DyC 8:2 dice que la revelación viene a la mente y al corazón. ¿Cómo reconoces cuando ambos están alineados en una impresión espiritual?",
              "¿Qué pregunta espiritual tienes ahora mismo para la cual necesitas buscar conocimiento mediante el Espíritu?",
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
          "Según DyC 8:2, ¿cómo viene la revelación del Espíritu Santo?",
        options: [
          "Solo como un sentimiento de paz en el corazón",
          "Exclusivamente como pensamientos claros en la mente",
          "En la mente y en el corazón — ambos juntos",
          "Principalmente a través de sueños durante la noche",
        ],
        correctAnswer: 2,
        explanation:
          "El Señor declaró: «yo te diré en tu mente y en tu corazón, por medio del Espíritu Santo.» La revelación verdadera incluye tanto entendimiento mental como impresión espiritual en el corazón.",
      },
      {
        id: 2,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según 1 Corintios 2:14, el hombre natural puede entender las cosas del Espíritu de Dios mediante el intelecto y la lógica sola.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation:
          "Falso. Pablo enseña que «el hombre natural no percibe las cosas que son del Espíritu de Dios... se han de discernir espiritualmente.» El método secular tiene límites inherentes para conocer verdades espirituales.",
      },
      {
        id: 3,
        type: "multiple",
        question:
          "Según el Élder Oaks, ¿cómo se logra el conocimiento espiritual?",
        options: [
          "Mediante el estudio académico riguroso de las Escrituras",
          "Combinando el intelecto con experiencia humana extensa",
          "Únicamente mediante el Espíritu Santo",
          "A través de la tradición transmitida de generación en generación",
        ],
        correctAnswer: 2,
        explanation:
          "El Élder Oaks declaró que «el conocimiento espiritual se logra únicamente mediante el Espíritu Santo», no mediante el intelecto solo ni la experiencia humana.",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Cuál es el patrón correcto para adquirir conocimiento espiritual?",
        options: [
          "Esperar pasivamente hasta que Dios nos revele todo lo que necesitamos",
          "Actuar con fe, examinar conceptos con perspectiva eterna y buscar revelación",
          "Confiar solo en el razonamiento lógico y la evidencia empírica",
          "Aceptar sin cuestionar todo lo que dicen las autoridades religiosas",
        ],
        correctAnswer: 1,
        explanation:
          "El proceso incluye: (1) Actuar con fe, (2) Examinar conceptos con perspectiva eterna, y (3) Buscar revelación mediante oración y estudio. Requiere esfuerzo activo, no pasividad.",
      },
    ],
  },
  {
    id: "r225-l04",
    title: "La doctrina de la revelación",
    type: "Religión 225",
    description: "Cómo Dios comunica Su voluntad a Sus hijos mediante la revelación personal y profética.",
    chapterUrl: `${BASE_URL}/lesson-4-class-preparation-material-the-doctrine-of-revelation?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una de las doctrinas más distintivas de La Iglesia de Jesucristo de los Santos de los Últimos Días es la creencia en la revelación continua. No creemos en un Dios que habló en el pasado y luego guardó silencio. Creemos en un Padre Celestial que todavía habla — tanto a profetas vivientes para guiar a Su Iglesia como a cada individuo para guiar su vida personal. La revelación no es una reliquia del pasado bíblico; es una realidad presente y accesible.",
          },
          {
            tipo: "escritura",
            referencia: "Artículos de Fe 1:9",
            texto:
              "Creemos todo lo que Dios ha revelado, todo lo que actualmente revela, y creemos que aún revelará muchos grandes e importantes asuntos pertenecientes al reino de Dios.",
            comentario:
              "Esta declaración resume la doctrina de la revelación continua: pasado («ha revelado»), presente («actualmente revela») y futuro («aún revelará»). Dios no ha terminado de hablar a Sus hijos.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 121:26, 33",
            texto:
              "Dios dará a conocer a los hijos de los hombres conocimiento concerniente a los tiempos y las épocas, en el debido tiempo del Señor... ¿Cuántas veces he llamado a vosotros por la boca de mis siervos, y por el ministerio de ángeles, y por mi propia voz, y por la voz de truenos?",
            comentario:
              "El Señor tiene múltiples formas de comunicarse: mediante profetas, ángeles, Su propia voz y el Espíritu Santo. No está limitado a un solo canal ni a una sola época. La comunicación divina es constante para quienes tienen oídos para oír.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«Revelación para la Iglesia, revelación para nuestras vidas», Liahona, mayo de 2018, pág. 93",
            texto:
              "Nunca en mi vida he sentido una necesidad mayor de que cada miembro de la Iglesia escuche al Espíritu Santo. La revelación personal es absolutamente esencial en estos días en que Satanás está usando cada herramienta imaginable para destruir el testimonio y llevar al error.",
          },
          {
            tipo: "parrafo",
            texto:
              "Hay dos tipos de revelación: profética (para guiar a la Iglesia) y personal (para guiar a los individuos). El profeta y presidente de la Iglesia es el único que recibe revelación para toda la Iglesia, pero cada miembro puede recibir revelación para su propia vida, su familia y sus responsabilidades. Padres, madres, maestros, líderes — todos pueden recibir revelación dentro de su esfera de responsabilidad. Un obispo puede recibir revelación para su barrio, pero no para otro barrio. Una madre puede recibir revelación para sus hijos, pero no para los hijos de otra familia.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "Dios continúa revelando Su voluntad hoy — la revelación no terminó con la Biblia (Artículos de Fe 1:9).",
              "Hay revelación profética (para la Iglesia entera) y revelación personal (para individuos y familias).",
              "El profeta y presidente de la Iglesia es el único que recibe revelación para toda la Iglesia.",
              "Cada miembro puede recibir revelación personal dentro de su esfera de responsabilidad — para su vida, familia y llamamientos.",
              "El Señor se comunica de múltiples formas: mediante profetas, ángeles, Su propia voz y el Espíritu Santo (DyC 121:26).",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Cuándo has recibido revelación personal que te guió en una decisión importante de tu vida?",
              "¿Por qué es importante entender los límites de la revelación personal — que no podemos recibir revelación fuera de nuestra esfera de responsabilidad?",
              "El presidente Nelson enseñó que la revelación personal es «absolutamente esencial» en nuestros días. ¿Por qué crees que esto es más urgente ahora que nunca?",
              "¿Qué estás haciendo para aumentar tu capacidad de recibir y reconocer revelación personal?",
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
          "Según los Artículos de Fe 1:9, ¿cuál es la posición de la Iglesia sobre la revelación?",
        options: [
          "Que Dios solo reveló verdades en los tiempos bíblicos",
          "Que Dios ha revelado, actualmente revela y aún revelará muchos grandes asuntos",
          "Que la revelación terminó con la muerte de los apóstoles originales",
          "Que solo el profeta puede recibir revelación, no los miembros individuales",
        ],
        correctAnswer: 1,
        explanation:
          "Artículos de Fe 1:9 declara: «Creemos todo lo que Dios ha revelado, todo lo que actualmente revela, y creemos que aún revelará muchos grandes e importantes asuntos.» Es revelación continua: pasado, presente y futuro.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Quién es el único que puede recibir revelación para toda la Iglesia?",
        options: [
          "Cualquier apóstol ordenado",
          "El Quórum de los Doce actuando en conjunto",
          "El profeta y presidente de la Iglesia",
          "Cualquier poseedor del Sacerdocio de Melquisedec",
        ],
        correctAnswer: 2,
        explanation:
          "Solo el profeta y presidente de la Iglesia puede recibir revelación para toda la Iglesia. Otros líderes reciben revelación dentro de sus responsabilidades, pero no para la Iglesia entera.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: Según DyC 121:26, el Señor ha llamado a Sus hijos mediante profetas, ángeles y Su propia voz — no solo de una forma.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation:
          "Verdadero. El Señor pregunta: «¿Cuántas veces he llamado a vosotros por la boca de mis siervos, y por el ministerio de ángeles, y por mi propia voz...?» Dios usa múltiples canales de comunicación.",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Cuál es el ámbito correcto de la revelación personal?",
        options: [
          "Cualquier tema sobre el cual una persona desee recibir guía",
          "Solo asuntos relacionados con la Iglesia y llamamientos",
          "Dentro de la esfera de responsabilidad de la persona — su vida, familia y llamamientos",
          "Únicamente para tomar decisiones de importancia eterna",
        ],
        correctAnswer: 2,
        explanation:
          "Cada persona puede recibir revelación para su propia vida, familia y llamamientos — su esfera de responsabilidad. No podemos recibir revelación para áreas fuera de nuestra responsabilidad.",
      },
    ],
  },
  {
    id: "r225-l05",
    title: "La salida a luz del Libro de Mormón",
    type: "Religión 225",
    description: "La traducción y publicación del Libro de Mormón mediante el don y el poder de Dios.",
    chapterUrl: `${BASE_URL}/lesson-5-class-preparation-material-the-coming-forth-of-the-book-of-mormon?lang=spa`,

    secciones: [
      {
        tipo: "resumen",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "En septiembre de 1823, tres años después de la Primera Visión, un mensajero celestial llamado Moroni apareció a José Smith y le habló de un registro antiguo escrito en planchas de oro. Estas planchas contenían la historia de pueblos antiguos de las Américas y, lo más importante, la plenitud del Evangelio sempiterno de Jesucristo. Pasarían cuatro años de preparación antes de que José recibiera las planchas, y casi dos años más antes de que se completara la traducción mediante el don y el poder de Dios.",
          },
          {
            tipo: "escritura",
            referencia: "José Smith—Historia 1:33–34",
            texto:
              "También me dijo que cuando yo recibiese las planchas de que él había hablado —porque aún no había llegado el tiempo de obtenerlas— no se las debía mostrar a ninguna persona; ni el peto y el Urim y Tumim, sino solamente a aquellos a quienes se me mandara mostrárselos; y que si lo hacía, sería destruido. Mientras hablaba conmigo acerca de las planchas, se manifestó a mi mente la visión de tal modo que pude ver el lugar donde estaban depositadas.",
            comentario:
              "Moroni estableció las condiciones claramente: las planchas eran sagradas y solo debían mostrarse según instrucción divina. José recibió una visión del lugar donde estaban escondidas — el cerro Cumorah — pero tendría que esperar cuatro años antes de poder llevarlas consigo.",
          },
          {
            tipo: "escritura",
            referencia: "Doctrina y Convenios 10:4",
            texto:
              "No corras más aprisa ni trabajes más de lo que tus fuerzas y medios te permitan, y de lo que la casa de mi Padre requiera; y sé diligente hasta el fin.",
            comentario:
              "Durante el proceso de traducción, José aprendió lecciones de paciencia y confianza en el tiempo del Señor. El Señor tenía un propósito en cada demora y cada dificultad. La traducción no era solo un proyecto intelectual — era una experiencia de formación espiritual.",
          },
          {
            tipo: "cita",
            autor: "Presidente Russell M. Nelson",
            fuente: "«Testimonio del Libro de Mormón», Liahona, enero de 2000, pág. 8",
            texto:
              "La traducción del Libro de Mormón fue un milagro. Fue traducido mediante el don y el poder de Dios. José Smith no tenía la educación ni la capacidad lingüística para producir semejante obra por sus propios medios. El libro es evidencia de la realidad de la Restauración.",
          },
          {
            tipo: "parrafo",
            texto:
              "José tradujo usando instrumentos sagrados llamados «intérpretes» o Urim y Tumim, y también usando una piedra vidente. El proceso exacto no está completamente documentado, pero sabemos que no fue una traducción académica palabra por palabra. José miraba los instrumentos y recibía el texto en inglés mediante revelación. Oliver Cowdery sirvió como escriba principal, escribiendo mientras José dictaba. Oliver testificó que las palabras fluían tan rápidamente que apenas podía escribir con suficiente velocidad.",
          },
          {
            tipo: "doctrinal",
            puntos: [
              "El ángel Moroni apareció a José Smith en septiembre de 1823 y le habló de las planchas de oro (JS—H 1:30–33).",
              "José recibió las planchas cuatro años después, en 1827, después de preparación y pruebas.",
              "La traducción se realizó mediante el don y el poder de Dios usando el Urim y Tumim y una piedra vidente — no fue una traducción académica.",
              "Oliver Cowdery sirvió como escriba principal durante la mayor parte de la traducción.",
              "El Libro de Mormón se publicó en marzo de 1830 — la primera edición de 5,000 ejemplares.",
            ],
          },
          {
            tipo: "reflexion",
            preguntas: [
              "¿Por qué crees que el Señor hizo que José esperara cuatro años entre la visita de Moroni y la recepción de las planchas?",
              "¿Qué lecciones de paciencia y confianza en el tiempo del Señor puedes aprender del proceso de traducción del Libro de Mormón?",
              "José tradujo el libro mediante revelación, no mediante conocimiento lingüístico. ¿Qué te enseña eso sobre cómo Dios obra mediante personas imperfectas y limitadas?",
              "Si alguien te preguntara cómo José Smith pudo traducir registros antiguos sin conocer el idioma, ¿cómo explicarías el proceso de traducción?",
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
          "¿Cuándo apareció por primera vez el ángel Moroni a José Smith?",
        options: [
          "En la primavera de 1820, inmediatamente después de la Primera Visión",
          "En septiembre de 1823, tres años después de la Primera Visión",
          "En 1827, cuando José recibió las planchas",
          "En 1830, cuando se publicó el Libro de Mormón",
        ],
        correctAnswer: 1,
        explanation:
          "El ángel Moroni apareció por primera vez a José Smith en septiembre de 1823, tres años después de la Primera Visión, para hablarle de las planchas de oro.",
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Cuánto tiempo pasó entre la visita de Moroni y la recepción de las planchas por parte de José?",
        options: [
          "Un año",
          "Dos años",
          "Cuatro años",
          "Siete años",
        ],
        correctAnswer: 2,
        explanation:
          "José tuvo que esperar cuatro años (de 1823 a 1827) entre la primera visita de Moroni y el momento en que finalmente recibió las planchas. Este fue un período de preparación y prueba.",
      },
      {
        id: 3,
        type: "truefalse",
        question:
          "Verdadero o Falso: José Smith tradujo el Libro de Mormón usando su conocimiento académico de idiomas antiguos.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation:
          "Falso. José tradujo mediante el don y el poder de Dios usando instrumentos sagrados (Urim y Tumim y piedra vidente), no mediante conocimiento lingüístico académico. Fue un proceso de revelación.",
      },
      {
        id: 4,
        type: "multiple",
        question:
          "¿Quién sirvió como escriba principal durante la traducción del Libro de Mormón?",
        options: [
          "Martin Harris",
          "Hyrum Smith",
          "Oliver Cowdery",
          "Emma Smith",
        ],
        correctAnswer: 2,
        explanation:
          "Oliver Cowdery sirvió como escriba principal durante la mayor parte de la traducción, escribiendo mientras José dictaba el texto que recibía por revelación.",
      },
      {
        id: 5,
        type: "multiple",
        question:
          "¿Cuándo se publicó la primera edición del Libro de Mormón?",
        options: [
          "1820",
          "1823",
          "1827",
          "1830",
        ],
        correctAnswer: 3,
        explanation:
          "El Libro de Mormón se publicó en marzo de 1830. La primera edición constó de 5,000 ejemplares y marcó un hito importante en la Restauración.",
      },
    ],
  },
  {
    id: "r225-l06",
    title: "El Libro de Mormón — La piedra clave de nuestra religión",
    type: "Religión 225",
    description: "El papel central del Libro de Mormón como testimonio de Jesucristo y fundamento de la fe restaurada.",
    chapterUrl: `${BASE_URL}/lesson-6-class-preparation-material-the-book-of-mormon-the-keystone-of-our-religion?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l07",
    title: "La restauración del sacerdocio",
    type: "Religión 225",
    description: "El restablecimiento del sacerdocio de Aarón y de Melquisedec mediante mensajeros celestiales.",
    chapterUrl: `${BASE_URL}/lesson-7-class-preparation-material-restoration-of-the-priesthood?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l08",
    title: "La organización de la Iglesia de Jesucristo",
    type: "Religión 225",
    description: "El establecimiento formal de la Iglesia restaurada el 6 de abril de 1830.",
    chapterUrl: `${BASE_URL}/lesson-8-class-preparation-material-the-organization-of-the-church-of-jesus-christ?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l09",
    title: "Jesucristo, nuestro divino Redentor",
    type: "Religión 225",
    description: "La naturaleza divina de Jesucristo y Su papel central como Redentor de la humanidad.",
    chapterUrl: `${BASE_URL}/lesson-9-class-preparation-material-jesus-christ-our-divine-redeemer?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l10",
    title: "Seguir a los profetas vivientes del Señor",
    type: "Religión 225",
    description: "La importancia de escuchar y obedecer la voz de los profetas y apóstoles vivientes.",
    chapterUrl: `${BASE_URL}/lesson-10-class-preparation-material-following-the-lords-living-prophets?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l11",
    title: "El recogimiento de Israel",
    type: "Religión 225",
    description: "El cumplimiento de las profecías sobre el recogimiento de Israel en los últimos días.",
    chapterUrl: `${BASE_URL}/lesson-11-class-preparation-material-the-gathering-of-israel?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l12",
    title: "El establecimiento de la causa de Sion",
    type: "Religión 225",
    description: "El mandamiento de edificar Sion y crear comunidades consagradas centradas en Cristo.",
    chapterUrl: `${BASE_URL}/lesson-12-class-preparation-material-establishing-the-cause-of-zion?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l13",
    title: "Las leyes de Dios",
    type: "Religión 225",
    description: "Los principios y mandamientos que Dios ha dado a Su pueblo para guiar su vida.",
    chapterUrl: `${BASE_URL}/lesson-13-class-preparation-material-the-laws-of-god?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l14",
    title: "El Señor revela Escrituras adicionales",
    type: "Religión 225",
    description: "Las revelaciones modernas que ampliaron el canon de las Escrituras en la Restauración.",
    chapterUrl: `${BASE_URL}/lesson-14-class-preparation-material-the-lord-reveals-additional-scripture?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l15",
    title: "El plan del Padre Celestial y nuestro potencial divino",
    type: "Religión 225",
    description: "El plan de salvación y la doctrina de la exaltación y el potencial divino del ser humano.",
    chapterUrl: `${BASE_URL}/lesson-15-class-preparation-material-heavenly-fathers-plan-and-our-divine-potential?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l16",
    title: "El Templo de Kirtland y las llaves del sacerdocio",
    type: "Religión 225",
    description: "La dedicación del Templo de Kirtland y la restauración de llaves del sacerdocio por Moisés, Elías y Elías.",
    chapterUrl: `${BASE_URL}/lesson-16-class-preparation-material-the-kirtland-temple-and-priesthood-keys?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l17",
    title: "Permanecer fieles en medio de la oposición y la aflicción",
    type: "Religión 225",
    description: "Lecciones de los primeros santos que mantuvieron su fe a pesar de persecuciones y dificultades.",
    chapterUrl: `${BASE_URL}/lesson-17-class-preparation-material-remaining-faithful-amid-opposition-and-affliction?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l18",
    title: "Las mujeres Santos de los Últimos Días y la Sociedad de Socorro",
    type: "Religión 225",
    description: "El papel de las mujeres en la Iglesia y la fundación y misión de la Sociedad de Socorro.",
    chapterUrl: `${BASE_URL}/lesson-18-class-preparation-material-latter-day-saint-women-and-the-relief-society?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l19",
    title: "La redención de los muertos",
    type: "Religión 225",
    description: "La doctrina del trabajo vicario por los muertos y la salvación de las generaciones pasadas.",
    chapterUrl: `${BASE_URL}/lesson-19-class-preparation-material-redemption-of-the-dead?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l20",
    title: "Las ordenanzas y la adoración en el templo",
    type: "Religión 225",
    description: "Las ordenanzas sagradas del templo y su significado en el plan de salvación.",
    chapterUrl: `${BASE_URL}/lesson-20-class-preparation-material-temple-ordinances-and-worship?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l21",
    title: "La doctrina del matrimonio eterno y la familia",
    type: "Religión 225",
    description: "El sellamiento eterno y el rol central de la familia en el plan del Padre Celestial.",
    chapterUrl: `${BASE_URL}/lesson-21-class-preparation-material-the-doctrine-of-eternal-marriage-and-family?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l22",
    title: "El matrimonio plural",
    type: "Religión 225",
    description: "El contexto histórico y doctrinal del matrimonio plural practicado en la Iglesia primitiva restaurada.",
    chapterUrl: `${BASE_URL}/lesson-22-class-preparation-material-plural-marriage?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l23",
    title: "La misión profética y el martirio de José Smith",
    type: "Religión 225",
    description: "Los logros del profeta José Smith y su muerte como mártir en Carthage, Illinois.",
    chapterUrl: `${BASE_URL}/lesson-23-class-preparation-material-the-prophetic-mission-and-the-martyrdom-of-joseph-smith?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l24",
    title: "El profeta José Smith, un vidente escogido",
    type: "Religión 225",
    description: "El llamamiento y la misión única de José Smith como profeta, vidente y revelador de los últimos días.",
    chapterUrl: `${BASE_URL}/lesson-24-class-preparation-material-the-prophet-joseph-smith-a-choice-seer?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l25",
    title: "La sucesión en la Presidencia y el éxodo hacia el oeste",
    type: "Religión 225",
    description: "La transición del liderazgo a Brigham Young y la migración de los santos al Valle del Lago Salado.",
    chapterUrl: `${BASE_URL}/lesson-25-class-preparation-material-succession-in-the-presidency-and-the-trek-west?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l26",
    title: "La Iglesia en el oeste",
    type: "Religión 225",
    description: "El establecimiento y crecimiento de la Iglesia en Utah y su expansión internacional.",
    chapterUrl: `${BASE_URL}/lesson-26-class-preparation-material-the-church-in-the-west?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l27",
    title: "La revelación sobre el sacerdocio",
    type: "Religión 225",
    description: "La revelación de 1978 que extendió las bendiciones del sacerdocio a todos los miembros dignos.",
    chapterUrl: `${BASE_URL}/lesson-27-class-preparation-material-the-revelation-on-the-priesthood?lang=spa`,
    secciones: [],
    questions: [],
  },
  {
    id: "r225-l28",
    title: "El Señor está apresurando Su obra",
    type: "Religión 225",
    description: "El crecimiento global de la Iglesia y el papel de cada miembro en llevar adelante la obra del Señor.",
    chapterUrl: `${BASE_URL}/lesson-28-class-preparation-material-the-lord-is-hastening-his-work?lang=spa`,
    secciones: [],
    questions: [],
  },
]