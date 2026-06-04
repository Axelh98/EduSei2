import type { Question } from "@/lib/types";

// DISTRIBUCIÓN DE correctAnswer en todo el archivo (70 preguntas):
// 0 → 18 | 1 → 18 | 2 → 17 | 3 → 17
// Patrón por lección (7 preguntas) varía para evitar predecibilidad

// ============================================================================
// LECCIÓN 45: Éxodo 14
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/15-exodus-14-18/151-exodus-14?lang=spa
// correctAnswer pattern: 2, 1, 3, 0, 2, 1, 0
// ============================================================================
export const leccion45Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El Señor no guió a Israel por la ruta más corta hacia Canaán sino hacia Pi-hajirot, junto al Mar Rojo. ¿Por qué ese lugar era estratégicamente desfavorable para Israel?",
    options: [
      "Porque era un terreno pantanoso que ralentizaba la marcha y hacía imposible escapar rápidamente.",
      "Porque los habitantes locales eran hostiles y bloqueaban todos los caminos de salida posibles.",
      "Porque tenían el mar al frente, montañas a los costados y el ejército de Faraón aproximándose por detrás.",
      "Porque no había agua ni alimento en ese lugar y el pueblo estaba físicamente agotado del viaje.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Cuando el pueblo entró en pánico al ver el ejército de Faraón acercarse, Moisés les dio una respuesta memorable. ¿Cuáles fueron sus palabras exactas según Éxodo 14:13–14?",
    options: [
      "\"Corred hacia las montañas; el Señor abrirá un camino por los cerros antes de que el ejército llegue.\"",
      "\"No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros... Jehová peleará por vosotros.\"",
      "\"Buscad refugio en el agua; la profundidad del mar nos protegerá mejor que cualquier otro lugar.\"",
      "\"Rendíos ante Faraón con condiciones; el Señor puede obrar incluso desde la esclavitud si es necesario.\"",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El hermano Milton Camargo contó que su padre solía decirle: 'No te centres tanto en tus problemas que no puedas ver la solución.' ¿Cómo aplica ese principio específicamente a la situación de Israel en Pi-hajirot?",
    options: [
      "Israel debería haber ignorado el peligro real del ejército y del mar para poder confiar mejor en el Señor.",
      "El ejército de Faraón era en realidad menos poderoso de lo que parecía, y Moisés lo sabía por revelación.",
      "La diferencia entre Israel y Moisés no eran los datos —ambos veían el mismo ejército y el mismo mar— sino el marco desde el que los interpretaban: uno centrado en el problema, otro en el Señor.",
      "Moisés tenía más fe que el pueblo porque ya había visto milagros directamente, mientras ellos solo oían de ellos.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El Señor no liberó a Israel antes de que llegaran a Pi-hajirot sino precisamente ahí. ¿Qué principio sobre la actuación de Dios en nuestra vida ilustra que eligiera ese momento y ese lugar aparentemente imposibles?",
    options: [
      "Que el Señor a veces permite que lleguemos al límite para que la liberación que produce sea imposible de atribuir a causas humanas.",
      "Que el Señor prefiere actuar en lugares cercanos al agua porque tiene poder especial sobre los elementos naturales.",
      "Que la fe de Moisés fue tan grande que el Señor aceleró Su plan original para no hacerlo esperar demasiado.",
      "Que Pi-hajirot tenía propiedades geográficas específicas que hacían el milagro del mar técnicamente posible.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina enfrenta una situación familiar muy difícil y dice: 'No veo ninguna salida posible. Es demasiado tarde para que algo cambie.' Usando el principio de esta lección, ¿qué le diría Moisés si pudiera hablarle?",
    options: [
      "Que debería pedir ayuda a otras personas primero antes de esperar que el Señor intervenga directamente.",
      "Que su sensación de 'no hay salida' podría ser exactamente el tipo de situación donde el Señor obra con mayor claridad, si mantiene la mirada en Él.",
      "Que debería aceptar la situación y encontrar paz dentro de ella en lugar de buscar un cambio de circunstancias.",
      "Que el Señor solo actúa cuando la persona afectada ha hecho primero todo lo humanamente posible por cambiar la situación.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sebastián está en medio de un conflicto serio con un compañero que lo acusa injustamente ante los profesores. Se siente acorralado. La lección enseña que 'centrarse en Cristo puede aumentar la esperanza durante las pruebas'. ¿Qué significaría eso concretamente para Sebastián esta semana?",
    options: [
      "Que debería ignorar el conflicto y confiar en que el Señor lo resolverá sin que él haga nada al respecto.",
      "Que podría orar pidiendo paz y perspectiva, y luego actuar con integridad aunque no tenga garantía del resultado, confiando en que el Señor pelea por los que lo buscan.",
      "Que debería hablar con el sacerdocio para que sus líderes intercedan directamente en el conflicto escolar.",
      "Que la solución más fiel es reconocer públicamente el error aunque no lo haya cometido, para poner fin al conflicto.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "En Éxodo 14, Moisés dice 'estad firmes' cuando todo indicaba que debían correr. En Éxodo 3, el Señor le dijo a Moisés 'Yo estaré contigo' cuando él dudaba de su propia capacidad. ¿Cuál es el principio común que une esos dos momentos del Éxodo?",
    options: [
      "Que la presencia del Señor con Su pueblo y con Sus siervos transforma lo que humanamente parece imposible en el escenario de un milagro, si se mantiene la confianza en lugar del pánico.",
      "Que Moisés fue el único líder del Antiguo Testamento capaz de mantener la calma en situaciones de peligro extremo.",
      "Que el Señor siempre advierte de antemano cuándo va a actuar para que Su pueblo esté listo para recibir el milagro.",
      "Que los milagros del Éxodo son casos excepcionales que no se repiten en la vida de los creyentes de épocas posteriores.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 46: Éxodo 15; 17
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/15-exodus-14-18/152-exodus-15-17?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 3, 1, 2
// ============================================================================
export const leccion46Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "En Mara, el agua era amarga e imposible de beber. ¿Cuántos días habían pasado desde el cruce del Mar Rojo cuando Israel llegó a ese lugar?",
    options: [
      "Cuarenta días, lo mismo que Moisés pasaría luego en el monte Sinaí.",
      "Tres días, lo cual hace que la rapidez de la murmuración resulte significativa.",
      "Siete días, el tiempo simbólico de una semana completa en el calendario hebreo.",
      "Un día, porque el desierto era mucho más pequeño de lo que los relatos sugieren.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Pablo identifica en 1 Corintios 10:4 la roca de Refidim de la cual brotó agua como un símbolo de Jesucristo. ¿Qué instrucción específica recibió Moisés para que el agua brotara?",
    options: [
      "Orar sobre la roca durante toda una noche hasta que el agua emergiera por la fe del pueblo.",
      "Tocar la roca con la mano de manera suave para que la acción fuera completamente de Dios.",
      "Pedirle al pueblo que cavara alrededor de la roca para que el agua subterránea pudiera salir.",
      "Golpear la roca con su vara, el mismo instrumento que había extendido sobre el Mar Rojo.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "En la batalla contra Amalec, cuando Moisés mantenía las manos en alto, Israel prevalecía; cuando las bajaba, Amalec prevalecía. Aarón y Hur lo sostuvieron sentado en una piedra con los brazos levantados. ¿Qué enseña ese episodio sobre el papel del sostenimiento en la obra del Señor?",
    options: [
      "Que el éxito de la obra del Señor puede depender de si Su pueblo sostiene activamente a quienes El llama para dirigirla.",
      "Que los líderes nunca deben mostrar señales de debilidad física frente a los enemigos del pueblo.",
      "Que la oración con los brazos levantados es la forma más efectiva de petición en el Antiguo Testamento.",
      "Que Aarón y Hur eran más fieles que el resto del pueblo y por eso fueron elegidos para ayudar a Moisés.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El Señor reveló Su nombre como 'Jehová Raphah' —Jehová tu sanador— en el episodio de Mara. ¿Qué dimensión de la sanación divina apunta más allá de la sanación física del agua amarga?",
    options: [
      "Que el Señor tiene poder sobre los elementos naturales del mundo, incluyendo el agua, la tierra y el fuego.",
      "Que la sanación del agua prefiguraba los milagros de sanación física que Jesús realizaría en Su ministerio.",
      "Que el Señor puede sanar las amarguras espirituales —el dolor, la desilusión, el resentimiento— de la misma manera que sanó el agua de Mara.",
      "Que la sanación del Señor siempre requiere que la persona afectada lleve al Señor algo físico como ofrenda.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia guarda rencor hacia una amiga que la traicionó hace meses. Lo describe como 'un sabor amargo que no se va'. Usando el símbolo de las aguas de Mara, ¿qué le diría esta lección?",
    options: [
      "Que debería confrontar a su amiga directamente para resolver el conflicto antes de pedirle ayuda al Señor.",
      "Que el tiempo sana sola esa clase de amargura; la única acción necesaria es esperar con paciencia.",
      "Que el mismo 'árbol' —la Expiación de Jesucristo— que hizo dulces las aguas de Mara puede sanar la amargura emocional si ella se lo lleva al Señor.",
      "Que debería alejarse de su amiga definitivamente porque las relaciones que generan amargura no son saludables.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás tiene un obispo nuevo al que no conoce bien y dice que 'no le ve el punto' a asistir a las reuniones porque el anterior le parecía mucho mejor. Según el principio del sostenimiento en la batalla de Amalec, ¿qué perspectiva ofrece la lección?",
    options: [
      "Que debería hablar con el obispo anterior para que lo ayude a relacionarse mejor con el nuevo líder.",
      "Que sostener a los líderes llamados por el Señor —incluso cuando no los conocemos bien— es parte de cómo la obra del Señor prospera, no una preferencia personal.",
      "Que tiene razón en ser selectivo sobre a cuáles reuniones asistir mientras evalúa el estilo del nuevo obispo.",
      "Que el Señor entiende sus preferencias y eventualmente llamará a alguien que se adapte mejor a su estilo.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Mara (agua amarga), Refidim (sin agua) y la batalla contra Amalec son tres pruebas distintas que Israel enfrentó en el mismo período. ¿Qué patrón emerge sobre cómo el Señor responde a las necesidades de Su pueblo en esas tres situaciones?",
    options: [
      "Que el Señor elimina siempre el problema de raíz para que no vuelva a ocurrir la misma prueba en el futuro.",
      "Que el Señor responde cuando el pueblo clama, pero la forma de respuesta varía: a veces sana directamente, a veces instruye a actuar, a veces requiere el esfuerzo sostenido del pueblo.",
      "Que el Señor solo responde a las necesidades físicas en el desierto; las espirituales requieren un contexto diferente.",
      "Que las tres pruebas muestran que el pueblo no aprendía de sus experiencias previas y el Señor tuvo que repetir la misma lección de maneras distintas.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 47: Éxodo 16
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/15-exodus-14-18/153-exodus-16?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 3
// ============================================================================
export const leccion47Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El Señor estableció reglas específicas sobre cuánto maná podía recogerse y cuándo. ¿Qué ocurría con el maná que se guardaba de más, contrariando esas instrucciones?",
    options: [
      "Se pudrió y se llenó de gusanos, haciéndolo incomible al día siguiente.",
      "Desaparecía misteriosamente durante la noche sin dejar rastro visible.",
      "Se endurecía como piedra y ya no podía consumirse de ninguna manera.",
      "Se volvía amargo pero seguía siendo comestible, como lección de las consecuencias.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Jesús usó directamente el episodio del maná para explicar algo sobre Sí mismo en Juan 6. ¿Cuál fue la declaración específica que hizo?",
    options: [
      "\"Yo soy el camino, la verdad y la vida; igual que el maná sostuvo a Israel, Yo los sostendré a ustedes.\"",
      "\"El maná fue la provisión de Moisés; la Mía es el perdón de los pecados que ningún pan puede dar.\"",
      "\"Yo soy el pan de vida; el que a Mí viene, nunca tendrá hambre; y el que en Mí cree, no tendrá sed jamás.\"",
      "\"El maná que cayó en el desierto prefiguraba Mi cuerpo que daré por ustedes en la última cena.\"",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El maná era dado diariamente y no podía acumularse. El élder Bednar enseñó que la espiritualidad tampoco puede almacenarse. ¿Qué implica eso específicamente para un alumno de Seminario que tuvo una experiencia espiritual poderosa en el campamento de la Iglesia hace un mes?",
    options: [
      "Que esa experiencia fue real pero no suficiente como fundamento; cada día requiere su propia conexión con el Señor para mantener la espiritualidad viva.",
      "Que las experiencias espirituales intensas duran más que las cotidianas, por lo que un mes es un tiempo razonable de beneficio.",
      "Que el Señor envía experiencias intensas precisamente para que sirvan de reserva durante períodos de menor actividad espiritual.",
      "Que las experiencias espirituales grupales son menos duraderas que las personales, por lo que debería buscar más tiempo en privado con el Señor.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El día sexto Israel debía recoger doble porción de maná porque el sábado no caería. ¿Qué enseña ese detalle específico sobre la relación entre el día de reposo y la provisión del Señor?",
    options: [
      "Que el Señor no puede proveer en el día de reposo por las leyes que Él mismo estableció desde la creación.",
      "Que el sábado era principalmente un día de prueba para ver si el pueblo tenía suficiente fe para confiar en la doble porción del día anterior.",
      "Que el trabajo del sexto día era más abundante para compensar el descanso del séptimo, enseñando equilibrio.",
      "Que el Señor proveyó de antemano para que el día de reposo pudiera guardarse sin ansiedad por las necesidades; santificar ese día era compatible con ser sostenido.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Rocío dice: 'No tengo tiempo para orar ni estudiar las Escrituras todos los días; hago lo que puedo y el Señor entiende.' Usando el principio del maná, ¿cuál es la respuesta más honesta que le daría esta lección?",
    options: [
      "Que el Señor efectivamente entiende y la fe sincera aunque irregular es suficiente para mantener la conexión espiritual.",
      "Que la espiritualidad no funciona con acumulación: cada día que pasa sin esa conexión es un día sin 'maná', independientemente de lo ocupada que esté.",
      "Que debería establecer un tiempo mínimo de cinco minutos por día, que es suficiente para mantener la conexión con el Señor.",
      "Que estudiar los fines de semana de manera más intensa puede compensar los días de semana en que no tiene tiempo.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín lleva tres semanas orando y estudiando diariamente, pero dice que 'no siente diferencia'. La lección del maná enseña algo sobre la acumulación invisible. ¿Cómo le respondería?",
    options: [
      "Que debería cambiar de tipo de estudio porque el formato actual claramente no le funciona a su estilo de aprendizaje.",
      "Que la sensación de 'no diferencia' es una señal de que su oración y su estudio no son todavía lo suficientemente profundos.",
      "Que el maná alimentaba al pueblo aunque no siempre sintieran la nutrición en el momento de comerlo; la espiritualidad diaria trabaja muchas veces de manera invisible antes de ser evidente.",
      "Que tres semanas es poco tiempo; el Señor responde siempre en Su propio tiempo, que puede ser meses o años.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El maná sostenía el cuerpo de Israel un día a la vez. Jesús se declaró el Pan de Vida que sostiene el alma para la eternidad. El president Nelson enseñó que en los días que vienen no será posible sobrevivir espiritualmente sin el Espíritu Santo. ¿Qué dice esa cadena de tres verdades sobre la urgencia de los hábitos espirituales diarios?",
    options: [
      "Que la espiritualidad diaria no es una recomendación opcional sino una necesidad de supervivencia, igual que lo fue el maná en el desierto; y que Jesucristo es la fuente de esa nutrición.",
      "Que las tres verdades se refieren a épocas distintas: el maná al Antiguo Testamento, Jesús al Nuevo, y el Espíritu Santo a nuestra época.",
      "Que el Señor da formas distintas de sustento espiritual en cada dispensación, adaptadas a las necesidades específicas de cada época.",
      "Que la urgencia del presidente Nelson aplica principalmente a los líderes de la Iglesia, cuyas responsabilidades son mayores que las de los miembros comunes.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 162: Buscar revelación personal
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/61-doctrinal-mastery/612-seeking-personal-revelation?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 0, 2, 1
// ============================================================================
export const leccion162Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "3 Nefi 11:1–7 narra que la voz del Padre presentó a Jesucristo resucitado ante el pueblo. ¿Qué detalle sobre esa voz es especialmente significativo para entender cómo llega la revelación?",
    options: [
      "Que era tan poderosa que todos los presentes cayeron al suelo de inmediato por su intensidad.",
      "Que solo pudieron escucharla los apóstoles nefilitas que estaban en el círculo interior del grupo.",
      "Que la voz no era fuerte sino apacible, y el pueblo tuvo que prestar atención antes de entender lo que decía.",
      "Que las palabras fueron pronunciadas tres veces para que todos pudieran escucharlas con claridad.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El presidente Nelson afirma que el Padre Celestial quiere hablar a Sus hijos. Según esa enseñanza, ¿cuál es la actitud correcta del Señor hacia la revelación personal de cada miembro?",
    options: [
      "Que el Señor desea revelar Su voluntad a todos Sus hijos, no solo a los líderes con llamamiento formal.",
      "Que el Señor revela Su voluntad principalmente a través de los líderes, quienes después la comunican al pueblo.",
      "Que la revelación personal se da solo cuando la persona ha alcanzado un nivel suficiente de madurez espiritual.",
      "Que el Señor espera que sus hijos demuestren fe perfecta antes de comenzar a comunicarse con ellos directamente.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Doctrina y Convenios 8:2–3 describe que el Señor comunica Su voluntad 'en la mente y en el corazón'. ¿Qué diferencia práctica produce recibir revelación por ambos canales simultáneamente?",
    options: [
      "Que las revelaciones que llegan solo a la mente son más confiables que las que llegan solo al corazón.",
      "Que la revelación que involucra la mente es doctrinal mientras que la del corazón es siempre de naturaleza emocional.",
      "Que cuando una impresión es solo mental puede ser un pensamiento propio, pero cuando involucra tanto la mente como el corazón la posibilidad de que sea revelación aumenta.",
      "Que la revelación a la mente es suficiente para tomar decisiones, y el corazón se involucra solo en decisiones especialmente importantes.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección enseña que reconocer las diferentes maneras en que el Espíritu se comunica ayuda a recibir revelación. ¿Por qué no reconocer esas formas puede llevar a perder revelaciones reales?",
    options: [
      "Porque una persona que solo espera sentir emociones intensas puede ignorar los pensamientos claros o la paz que el Espíritu también usa para comunicarse.",
      "Porque el Espíritu solo se comunica de una manera específica por persona y hay que descubrir cuál es la propia.",
      "Porque las formas del Espíritu cambian con la edad y lo que funcionaba de adolescente no sirve de adulto.",
      "Porque quien no conoce las formas del Espíritu terminará confundiendo revelación con intuición humana en todos los casos.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Lucía dice: 'Nunca escucho nada cuando oro; creo que no funciona para mí.' Según el principio de 3 Nefi 11 y de D&C 8:2, ¿qué podría estar pasando por alto?",
    options: [
      "Que la revelación personal requiere preparar el corazón y estar atenta a formas sutiles como pensamientos, paz o impresiones, no solo esperar una voz audible.",
      "Que debería orar más tiempo cada día porque la cantidad de oración está directamente relacionada con la frecuencia de la revelación.",
      "Que posiblemente hay algo en su vida que está bloqueando la revelación y necesita arrepentirse antes de que el Señor le hable.",
      "Que la revelación personal no es para todos en la misma medida y ella probablemente recibe guía de otras maneras que no reconoce como revelación.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo tiene que tomar una decisión importante sobre qué carrera estudiar y espera 'una señal clara' antes de decidir. Lleva meses esperando sin actuar. Según el proceso de revelación de D&C 9:7–8, ¿qué le falta a su enfoque?",
    options: [
      "Que debería pedir una bendición patriarcal específica sobre su carrera antes de tomar cualquier decisión definitiva.",
      "Que debería consultar con su obispo, ya que las decisiones sobre educación requieren orientación de liderazgo local.",
      "Que la revelación de D&C 9 requiere estudiar el asunto primero en la mente, formular una propuesta concreta, y luego preguntar al Señor; esperar sin actuar no es el proceso correcto.",
      "Que el Señor ya le dio la respuesta pero él no la reconoció porque estaba buscando algo más espectacular de lo que el Espíritu normalmente usa.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El Señor habla en voz apacible (3 Nefi 11), en la mente y el corazón (D&C 8:2), y requiere que estudiemos primero y luego preguntemos (D&C 9:7–8). ¿Cuál es el patrón sobre la revelación personal que emerge de esos tres elementos juntos?",
    options: [
      "Que el Señor prefiere comunicarse de manera íntima y gradual, y que recibir revelación requiere tanto disposición interior como esfuerzo activo del receptor.",
      "Que la revelación divina siempre exige un período de preparación de varios días antes de llegar, sin excepción.",
      "Que la voz apacible, la mente y el corazón son tres canales separados que el Señor usa en distintas circunstancias según lo que necesita comunicar.",
      "Que el proceso de D&C 9 es para decisiones importantes, mientras que 3 Nefi 11 describe cómo funciona la revelación para el pueblo en general.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 163: Actuar con fe para encontrar respuestas
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/61-doctrinal-mastery/613-acting-in-faith?lang=spa
// correctAnswer pattern: 3, 1, 0, 2, 3, 0, 1
// ============================================================================
export const leccion163Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Éter 12:6 establece una secuencia específica sobre la relación entre fe y testimonio. ¿Cuál es?",
    options: [
      "Que el testimonio llega primero para que la persona tenga suficiente fe para actuar con seguridad.",
      "Que la fe y el testimonio se desarrollan simultáneamente en el proceso de estudio y oración.",
      "Que el testimonio solo puede venir después de una experiencia espiritual de alta intensidad emocional.",
      "Que no se recibe testimonio sino hasta después que la fe haya sido probada; la prueba precede a la confirmación.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La lección describe el ejemplo de israelitas del Antiguo Testamento que tomaron decisiones fieles mientras esperaban respuestas. ¿Cuál de estas actitudes describe mejor lo que hicieron?",
    options: [
      "Detuvieron toda actividad y esperaron en silencio hasta que el Señor les diera una respuesta clara y definitiva.",
      "Siguieron guardando los mandamientos y viviendo el Evangelio mientras buscaban activamente respuestas a sus dudas.",
      "Compartieron sus dudas con otros miembros para que el grupo encontrara respuestas colectivamente.",
      "Aceptaron que algunas preguntas no tenían respuesta y siguieron adelante sin necesitar resolverlas.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección invita a 'confiar en lo que ya sabemos que es verdadero' mientras esperamos respuestas a preguntas difíciles. ¿Por qué ese principio es más que simplemente 'ignorar las dudas'?",
    options: [
      "Porque construir sobre lo que ya se sabe crea un cimiento sólido desde el que explorar preguntas sin poner en riesgo toda la fe al mismo tiempo.",
      "Porque el Señor requiere que demostremos gratitud por lo que ya sabemos antes de darnos conocimiento adicional.",
      "Porque las dudas que no se resuelven desaparecen solas con el tiempo si uno se enfoca en las certezas que ya tiene.",
      "Porque compartir lo que sabemos con otros ayuda a clarificar las propias preguntas antes de llevarlas al Señor.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Actuar con fe cuando no se tiene respuesta completa puede sentirse arriesgado. Alma 32:27 dice que basta con 'tan solo un deseo de creer'. ¿Qué hace ese versículo con el umbral de entrada a la fe activa?",
    options: [
      "Lo eleva, porque exige al menos el deseo genuino antes de que el Señor pueda hacer algo por la persona.",
      "Lo mantiene igual porque el deseo de creer y la fe son esencialmente lo mismo en la doctrina del Evangelio.",
      "Lo reduce radicalmente: no se necesita certeza ni sentimiento fuerte para comenzar; incluso un deseo pequeño es suficiente punto de partida.",
      "Lo condiciona a que el deseo sea acompañado de arrepentimiento, porque sin arrepentimiento el deseo no tiene poder.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Benjamín tiene preguntas sobre la historia de la Iglesia que no ha podido resolver. Dice: 'Hasta que no encuentre las respuestas, no voy a seguir comprometiéndome.' Según el principio de Éter 12:6 y la lección, ¿qué falla en ese razonamiento?",
    options: [
      "Que está cometiendo el mismo error que los israelitas cuando murmuraron en el desierto en lugar de confiar.",
      "Que su condición invierte el patrón de la fe: esperar certeza antes de actuar es exactamente lo opuesto a cómo funciona el testimonio según Éter 12:6.",
      "Que sus preguntas son señal de falta de oración y debería orar más antes de buscar respuestas en fuentes históricas.",
      "Que debería hablar con un líder de la Iglesia para que le dé las respuestas correctas antes de tomar una decisión.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Camila tiene dudas sobre si la Iglesia es verdadera pero sigue yendo a las reuniones, orando y estudiando las Escrituras aunque no sienta certeza. Según esta lección, ¿cómo se describe lo que está haciendo?",
    options: [
      "Está actuando con fe genuina: mantiene sus compromisos y sigue buscando mientras espera que el testimonio llegue después de la prueba de la fe.",
      "Está siendo hipócrita porque participa externamente sin tener convicción interna real de lo que está haciendo.",
      "Está tomando el camino más fácil al no tomar una decisión definitiva en ninguna dirección.",
      "Está postergando una decisión que eventualmente tendrá que tomar de todas formas, lo que solo hace más difícil el proceso.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Esta lección enseña a actuar con fe ante preguntas sin respuesta, y la Lección 164 enseñará a analizarlas con perspectiva eterna. ¿Cuál es la diferencia de enfoque entre ambas lecciones y cómo se complementan?",
    options: [
      "Esta lección trata las preguntas doctrinales y la Lección 164 trata los problemas personales; son independientes y aplican a situaciones distintas.",
      "Esta lección se enfoca en actuar mientras se espera —no paralizarse— y la Lección 164 se enfoca en el marco mental desde el que se sostienen las preguntas; juntas forman una respuesta completa a la duda.",
      "Esta lección es más importante porque la acción precede siempre a la perspectiva en el proceso de crecimiento espiritual.",
      "Ambas lecciones enseñan exactamente el mismo principio con ejemplos distintos; no hay diferencia real de enfoque entre ellas.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 48: Éxodo 19
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/16-exodus-19-20-24-31-34/161-exodus-19?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 1, 3, 2
// ============================================================================
export const leccion48Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El término hebreo segullah aparece en Éxodo 19:5 cuando el Señor describe a Israel. ¿Qué significa específicamente esa palabra?",
    options: [
      "Una nación que ha salido de la esclavitud y merece ser liberada por sus propios méritos.",
      "Propiedad preciada o especial tesoro, con la connotación de algo que el dueño valora de manera única y personal.",
      "Un pueblo que ha guardado todos los mandamientos y por eso fue elegido entre las naciones.",
      "Una comunidad de sacerdotes dedicada exclusivamente al servicio en el tabernáculo del Señor.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Antes de que el Señor hablara desde el monte Sinaí, instruyó a Moisés que preparara al pueblo de una manera específica. ¿Qué mandó hacer?",
    options: [
      "Que ayunaran tres días completos y presentaran ofrendas ante el tabernáculo como señal de arrepentimiento.",
      "Que construyeran un altar de doce piedras representando las doce tribus antes de escuchar la voz del Señor.",
      "Que Moisés subiera solo al monte primero para recibir la ley y luego bajara a transmitirla al pueblo reunido.",
      "Que el pueblo se santificara durante tres días, lavara sus ropas y se abstuviera de ciertos actos como preparación.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El Señor ofreció a Israel convertirse en 'un reino de sacerdotes y nación santa' si guardaban Su convenio. ¿Qué implicaba ese llamado colectivo para cada israelita individualmente?",
    options: [
      "Que todo Israel debía dedicarse al servicio del templo como lo hacían los sacerdotes levitas designados.",
      "Que cada israelita tenía el potencial y la responsabilidad de vivir en un nivel de santidad que fuera un testimonio del carácter de Jehová ante las naciones.",
      "Que el llamado era principalmente para los líderes del pueblo, que luego transmitirían esa santidad al resto de la nación.",
      "Que el convenio los protegía automáticamente de las consecuencias del pecado mientras pertenecieran a la nación elegida.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El presidente Nelson enseñó que después de hacer un convenio, la relación con Dios 'se vuelve mucho más estrecha y Él jamás cejará en Sus esfuerzos por ayudarnos'. ¿Qué cambia en esa relación que no existía antes del convenio?",
    options: [
      "Que el Señor comienza a conocer personalmente a la persona, mientras que antes del convenio solo la conocía de manera general.",
      "Que el Señor puede hablar directamente a la persona mediante el Espíritu Santo, algo que no era posible antes del bautismo.",
      "Que el convenio crea un vínculo de obligación mutua: la persona se compromete con el Señor y Él se compromete a nunca abandonarla en ese camino.",
      "Que la persona pasa a recibir protección especial de los ángeles asignados a quienes tienen convenios formales con el Señor.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Nicolás siente que 'no vale mucho' después de una serie de fracasos en la escuela y en las relaciones. La lección sobre el segullah habla directamente a ese sentimiento. ¿Qué verdad podría cambiar cómo se ve a sí mismo?",
    options: [
      "Que el Señor lo ve como Su especial tesoro —Su propiedad más valorada— independientemente de sus fracasos recientes o de cómo lo evalúan los demás.",
      "Que el valor de una persona está determinado por sus convenios, y si él guardó su convenio bautismal, tiene valor ante el Señor.",
      "Que la sensación de no valer es una prueba temporal que el Señor usa para fortalecer el carácter antes de enviar las bendiciones.",
      "Que debería buscar confirmación de su valor en las bendiciones externas que el Señor le da, porque esas son la señal de que Él lo aprecia.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sofía fue bautizada pero siente que el convenio fue 'algo que sus padres querían' y que ella nunca eligió realmente. La lección sobre el Sinaí habla del convenio como una oferta que el pueblo podía aceptar o rechazar. ¿Qué le diría ese principio?",
    options: [
      "Que su bautismo puede ser revalidado formalmente si ella decide aceptarlo como adulta, con plena comprensión doctrinal.",
      "Que el convenio de sus padres la cubre hasta que alcance la madurez para tomar su propia decisión independiente.",
      "Que en cualquier momento puede hacer suyo ese convenio eligiéndolo activamente —viviendo sus promesas, renovándolo en la Santa Cena— convirtiendo la decisión de sus padres en la suya propia.",
      "Que debería hablar con su obispo sobre si necesita repetir el bautismo como acto de elección personal genuina.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El Señor llamó a Israel 'mi especial tesoro' antes de darles los mandamientos. Pedro repite casi las mismas palabras para los primeros cristianos en 1 Pedro 2:9. ¿Qué dice esa repetición a través de los siglos sobre cómo el Señor ve a las personas que hacen convenios con Él?",
    options: [
      "Que el valor del segullah es contingente al desempeño: Israel lo perdió cuando apostató, y los creyentes lo mantienen solo si son fieles.",
      "Que el Señor usa el mismo lenguaje para cada dispensación como forma de unir simbólicamente a todos Sus pueblos de convenio.",
      "Que ser el segullah de Dios no es un privilegio temporal de una nación particular sino una verdad permanente sobre cómo el Señor ve a todos quienes entran en convenio con Él, en cualquier época.",
      "Que el término segullah aplicaba literalmente a Israel como nación pero para los cristianos es solo una metáfora espiritual sin el mismo peso doctrinal.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 49: Éxodo 20:1–11
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/16-exodus-19-20-24-31-34/162-exodus-20-1-11?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 3
// ============================================================================
export const leccion49Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Los Diez Mandamientos fueron proclamados en un contexto específico. ¿Con qué frase comenzó el Señor antes de enunciar el primer mandamiento?",
    options: [
      "\"Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de la casa de servidumbre.\"",
      "\"Oye, Israel: Jehová nuestro Dios, Jehová uno es; y amarás a Jehová tu Dios.\"",
      "\"Escríbete estas palabras en tu corazón y en el de tus hijos para que las guarden para siempre.\"",
      "\"Soy el Señor Dios Omnipotente; no hay otro Dios ante mí ni lo habrá después de mí.\"",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El cuarto mandamiento sobre el día de reposo incluye una razón teológica específica de por qué ese día es sagrado. ¿Cuál es?",
    options: [
      "Porque el séptimo día el Señor descansó de toda la creación que había hecho durante los seis días anteriores.",
      "Porque el séptimo día es el día en que el Señor visita personalmente a Sus hijos y requiere que estén disponibles.",
      "Porque el reposo físico semanal garantiza que el pueblo tenga energía suficiente para servir al Señor los otros seis días.",
      "Porque el Señor separó ese día antes de la creación del mundo y lo bendijo como el día más sagrado de toda la semana.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El primer mandamiento dice 'No tendrás dioses ajenos delante de mí'. En el contexto del mundo actual, ¿qué formas podría tomar un 'dios ajeno' para un adolescente de 15 años?",
    options: [
      "Solo las religiones que explícitamente adoran a deidades distintas del Dios de Israel y los Santos.",
      "Cualquier cosa que ocupe el primer lugar en tiempo, atención y lealtad por encima del Señor: redes sociales, popularidad, la opinión de los demás o el entretenimiento.",
      "Las supersticiones y creencias folk que combinan elementos religiosos con prácticas culturales locales.",
      "Los libros, películas o músicos a los que se admira profundamente porque crean una forma de dependencia emocional.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Los mandamientos fueron dados inmediatamente después de la declaración 'yo soy Jehová tu Dios que te saqué de Egipto'. ¿Por qué ese orden —liberación primero, mandamientos después— es doctrinalmente significativo?",
    options: [
      "Para que el pueblo entendiera que los mandamientos eran la compensación que debían dar al Señor por haberlos liberado.",
      "Para que los mandamientos fueran interpretados desde una relación de amor y gratitud, no desde el miedo o la obligación ante un ser desconocido.",
      "Para demostrar que el Señor solo da mandamientos después de haber demostrado Su poder con milagros visibles.",
      "Porque el orden cronológico de los eventos históricos determina cómo deben interpretarse las leyes que derivan de ellos.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Diego pasa los domingos principalmente en redes sociales y dice que 'santifica el sábado en su corazón' aunque externamente haga lo mismo que cualquier otro día. El presidente Nelson enseñó que si el sábado es sagrado para ti, 'será imposible hacer actividades mundanas ese día'. ¿Qué dice eso del enfoque de Diego?",
    options: [
      "Que la santificación del sábado es un proceso gradual y Diego está en una etapa temprana de ese desarrollo espiritual.",
      "Que la santificación interior que Diego describe eventualmente se manifestará en cambios externos cuando esté listo.",
      "Que hay una contradicción en su planteamiento: si el día fuera realmente sagrado para él, eso se vería en sus elecciones concretas, no solo en una actitud interior declarada.",
      "Que el presidente Nelson habla de adultos con más responsabilidades; para adolescentes hay más flexibilidad en cómo guardar el día de reposo.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Valentina dice que obedece los mandamientos pero 'sin ganas', como si fueran una carga. La lección sugiere ver los mandamientos como guía de alguien que nos ama. ¿Qué cambio de perspectiva podría transformar esa experiencia?",
    options: [
      "Recordar que los mandamientos tienen consecuencias serias si no se guardan, lo que hace que valga la pena el esfuerzo.",
      "Entender que los mandamientos vienen del mismo Dios que la sacó de Egipto —o de cualquier esclavitud moderna— y fueron diseñados para llevarla hacia la libertad y la plenitud, no para limitarla.",
      "Comparar su obediencia con la de otros miembros más jóvenes para recordarse que sus esfuerzos son significativos.",
      "Pedirle al Señor que quite el peso emocional de los mandamientos para que guardarlos se sienta más natural.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Los primeros cuatro mandamientos regulan la relación con Dios; los últimos seis regulan la relación con los demás. Jesús resumió todo en dos: amar a Dios y amar al prójimo. ¿Qué dice esa estructura sobre la lógica interna de los mandamientos?",
    options: [
      "Que los mandamientos sobre las relaciones humanas son secundarios y derivados de los que tratan la relación con Dios.",
      "Que los mandamientos no son una lista independiente de reglas sino la descripción de cómo vive alguien que realmente ama a Dios y a las personas que lo rodean.",
      "Que el resumen de Jesús simplificó los mandamientos para culturas que no podían cumplir los diez en toda su complejidad.",
      "Que los diez mandamientos y el resumen de Jesús son dos sistemas distintos de ética que se complementan pero no se pueden reducir el uno al otro.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 51: Éxodo 24; 32–34
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/16-exodus-19-20-24-31-34/164-exodus-24-31-34?lang=spa
// correctAnswer pattern: 3, 1, 2, 0, 3, 1, 0
// ============================================================================
export const leccion51Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Mientras Moisés estaba cuarenta días en el monte recibiendo la ley, Israel cometió uno de sus mayores errores. ¿En qué consistió ese error y con qué palabras lo justificaron?",
    options: [
      "Atacaron a las tribus vecinas en ausencia de Moisés, diciendo que era para proteger el campamento.",
      "Volvieron a Egipto con la mayoría del pueblo, diciendo que Moisés los había abandonado y no tenía sentido seguir esperando.",
      "Fabricaron un becerro de oro y dijeron: 'Este es tu dios, Israel, que te sacó de la tierra de Egipto.'",
      "Dividieron la comunidad en dos grupos que siguieron a líderes distintos, causando una crisis de liderazgo.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "En Éxodo 34:6–7, el Señor proclamó Su propio carácter ante Moisés. ¿Cuáles son los atributos específicos que se mencionan en esos versículos?",
    options: [
      "Justo, recto y omnipotente; que ejecuta el juicio con exactitud sobre todos los que lo merecen.",
      "Misericordioso, piadoso, tardo para la ira y grande en misericordia y verdad; que perdona la iniquidad, la rebelión y el pecado.",
      "Santo, perfecto e inmutable; que no puede mirar el pecado con ningún grado de permisividad.",
      "Omnisciente, todopoderoso y eterno; que conoce el fin desde el principio sin ninguna limitación.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Moisés rompió las primeras tablas de la ley al ver el becerro de oro. Ese gesto no fue un arrebato impulsivo. ¿Qué significaba simbólicamente?",
    options: [
      "Que Moisés estaba furioso con el pueblo y quería demostrar su disgusto de manera visible ante todos.",
      "Que las tablas eran frágiles y se rompieron accidentalmente cuando Moisés bajó corriendo del monte.",
      "Que Israel había roto el convenio que las tablas sellaban; las tablas rotas señalaban que el convenio ya no estaba en pie.",
      "Que Moisés quería que el Señor escribiera una segunda versión de la ley más adaptada a la debilidad del pueblo.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Después del pecado del becerro de oro, el Señor dio a Israel segundas tablas. ¿Qué enseña ese acto sobre la naturaleza del arrepentimiento y la misericordia divina?",
    options: [
      "Que el Señor le dio segundas tablas a Israel porque consideró que el pecado no había sido tan grave como parecía inicialmente.",
      "Que el convenio renovado en las segundas tablas era de menor exigencia que el original para adaptarse a la realidad del pueblo.",
      "Que el Señor siempre está dispuesto a renovar el convenio con quien genuinamente se arrepiente; las segundas tablas son un símbolo de que hay camino de regreso.",
      "Que las primeras tablas fueron rotas para que las segundas, escritas por Moisés, tuvieran más valor espiritual que las escritas por el dedo de Dios.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia cometió un error serio hace meses y siente que 'ya no puede volver a ser la misma'. El episodio de las segundas tablas habla directamente a ese sentimiento. ¿Qué le diría esta lección?",
    options: [
      "Que el nivel de su culpa actual es señal de que su arrepentimiento fue insuficiente y necesita hacer más antes de sentirse perdonada.",
      "Que el tiempo es el mejor sanador y eventualmente el sentimiento de 'ya no ser la misma' desaparecerá sin que tenga que hacer nada especial.",
      "Que el mismo Señor que le dio a Israel segundas tablas le ofrece a ella también un convenio renovado; el arrepentimiento no la deja sin tablas sino que le da las segundas.",
      "Que debería comparar su situación con la de Israel para ver que su error fue mucho menor y no necesita cargar con tanto peso emocional.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás siente que 'Dios es estricto y no perdona los errores reales'. Éxodo 34:6–7 le presenta un retrato del carácter divino. ¿Cuál es el rasgo de ese retrato que más contradice directamente la creencia de Tomás?",
    options: [
      "Que el Señor es 'tardo para la ira' y 'grande en misericordia': no es el juez impaciente que Tomás imagina sino alguien que extiende perdón a quien se acerca con sinceridad.",
      "Que el Señor es omnisciente y conoce todos los errores de Tomás, lo que paradójicamente hace que el perdón sea más significativo.",
      "Que la justicia del Señor garantiza que si Tomás hace lo correcto de ahora en adelante, los errores pasados serán borrados del registro.",
      "Que el Señor 'guarda misericordia a millares', lo que significa que hay muchas personas en peor situación que Tomás que también han recibido perdón.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Israel rompió el convenio con el becerro de oro. El Señor proclamó Su misericordia y dio segundas tablas. Moisés intercedió por el pueblo apelando al carácter de Dios. ¿Cuál es el patrón sobre la intercesión y la misericordia que emerge de esos tres elementos juntos?",
    options: [
      "Que la misericordia de Dios responde a la intercesión de los justos más que a las acciones de quienes pecaron directamente.",
      "Que la misericordia divina está disponible cuando hay arrepentimiento genuino y alguien que intercede apelan do al carácter fiel de Dios, no solo a las reglas.",
      "Que el Señor necesita ser persuadido por Sus siervos para extender misericordia, porque Su inclinación natural es hacia la justicia estricta.",
      "Que las segundas tablas representan una versión degradada del Evangelio diseñada para personas que demostraron no poder vivir el nivel más alto.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 164: Analizar temas con perspectiva eterna
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/61-doctrinal-mastery/614-examining-gospel-topics?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 3
// ============================================================================
export const leccion164Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Isaías 55:8–9 es una de las escrituras clave de esta lección. ¿Cuál es la afirmación central de ese pasaje sobre la diferencia entre la perspectiva de Dios y la del ser humano?",
    options: [
      "Que el ser humano no puede entender los caminos de Dios, y por eso el Señor no espera que sus hijos comprendan Su voluntad.",
      "Que la diferencia es temporal: a medida que el ser humano crece espiritualmente, su pensamiento se acerca al de Dios.",
      "Que los pensamientos y los caminos del Señor son más elevados que los del ser humano de la misma manera que el cielo es más alto que la tierra.",
      "Que el ser humano puede alcanzar la perspectiva divina mediante el estudio de las Escrituras y la oración continua.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La lección propone que el Plan de Salvación es el marco desde el cual deben analizarse los temas difíciles del Evangelio. ¿Por qué ese marco específico y no simplemente el sentido común o la lógica?",
    options: [
      "Porque el Plan de Salvación incluye una perspectiva de eternidades —preterrenal, mortal y posmortal— que el sentido común limitado a la vida mortal no puede ofrecer.",
      "Porque el Plan de Salvación fue diseñado por el Padre Celestial para responder todas las preguntas posibles sobre el Evangelio.",
      "Porque usar el sentido común en asuntos espirituales siempre lleva a conclusiones erróneas que dañan la fe.",
      "Porque el Plan de Salvación es la única doctrina que todos los miembros tienen en común y puede servir como base compartida para el diálogo.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección invita a adoptar una 'perspectiva eterna' al enfrentar preguntas difíciles sobre el Evangelio. ¿Qué hace esa perspectiva que simplemente 'tener más información' no puede hacer?",
    options: [
      "La perspectiva eterna garantiza que la pregunta difícil tendrá una respuesta satisfactoria en el corto plazo.",
      "La información puede resolver algunas preguntas, pero la perspectiva eterna transforma la manera de sostener las que no tienen respuesta inmediata, reemplazando la ansiedad por confianza.",
      "La perspectiva eterna es simplemente otra forma de tener más información, solo que organizada desde el marco del Plan de Salvación.",
      "La perspectiva eterna elimina la necesidad de buscar información porque todo se puede entender desde el marco doctrinal que ya se tiene.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección afirma que el Padre Celestial 'nos ama perfectamente y ve lo que nosotros no podemos ver'. ¿Qué implicación práctica tiene ese atributo cuando el Señor da mandamientos o permite experiencias que no entendemos?",
    options: [
      "Que podemos confiar en que incluso lo que no entendemos tiene sentido desde Su perspectiva completa, lo que hace que la obediencia sea razonable aunque no tengamos toda la información.",
      "Que nunca deberíamos hacer preguntas sobre los mandamientos porque el Señor sabe mejor y cuestionarlo sería señal de poca fe.",
      "Que el amor perfecto del Padre garantiza que eventualmente El explicará todo lo que permitió, aunque la explicación pueda tardar hasta la eternidad.",
      "Que las experiencias dolorosas que el Señor permite son siempre proporcionales al crecimiento que producen, lo que hace que valgan la pena en términos de beneficio espiritual.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Rocío tiene preguntas sobre por qué ciertas políticas de la Iglesia cambiaron históricamente y siente que 'si fuera verdadera, nunca cambiaría nada'. Usando la perspectiva eterna, ¿cómo respondería esta lección a ese razonamiento?",
    options: [
      "Que las políticas de la Iglesia son perfectas desde el inicio y lo que parece un cambio es en realidad una aclaración de algo que siempre fue así.",
      "Que debería investigar más sobre esos cambios históricos antes de intentar aplicar una perspectiva eterna al tema.",
      "Que la perspectiva eterna distingue entre doctrina eterna —que no cambia— y políticas o procedimientos que el Señor puede ajustar según las necesidades de Su pueblo en cada época, como lo hizo en el Antiguo Testamento.",
      "Que esa pregunta requiere respuesta de un líder con autoridad apostólica y no debería intentar resolverla por cuenta propia.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín no puede entender por qué el Señor permitió que su familia pasara por una prueba muy dolorosa si supuestamente los ama. La lección ofrece un principio concreto para sostener esa pregunta. ¿Cuál es?",
    options: [
      "Que confiar en que el Padre Celestial ve lo que él no puede ver —incluyendo el resultado de la prueba— permite sostener la pregunta sin que destruya la fe, aunque no la resuelva de inmediato.",
      "Que las pruebas difíciles son siempre señal de que el Señor confía profundamente en la persona y la está preparando para algo mayor.",
      "Que el dolor de la prueba disminuirá naturalmente con el tiempo, y cuando eso ocurra la perspectiva eterna será más fácil de adoptar.",
      "Que debería estudiar los casos del Antiguo Testamento donde el Señor permitió pruebas similares para encontrar el patrón de respuesta que Dios usa.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La Lección 163 enseñó a actuar con fe ante preguntas sin respuesta. Esta lección enseña a analizarlas con perspectiva eterna. Juntas forman un enfoque completo ante la duda. ¿Cuál es la diferencia de función entre el principio de cada lección?",
    options: [
      "La Lección 163 aplica a dudas sobre conducta personal y esta a dudas sobre doctrina; son complementarias pero no se superponen.",
      "La Lección 163 trata la actitud externa ante la duda —seguir actuando— y esta trata el marco mental desde el que se sostiene la duda; una es sobre qué hacer y la otra sobre cómo pensar.",
      "Ambas enseñan exactamente el mismo principio: que la fe es más importante que la información en el proceso de resolver dudas espirituales.",
      "Esta lección es más avanzada que la Lección 163 y está diseñada para quienes ya practicaron actuar con fe y necesitan un siguiente nivel de comprensión.",
    ],
    correctAnswer: 3,
  },
];