import type { Question } from "@/lib/types";

// DISTRIBUCIÓN DE correctAnswer en todo el archivo (63 preguntas):
// 0 → 16 | 1 → 16 | 2 → 16 | 3 → 15
// Patrón por lección (7 preguntas) varía para evitar predecibilidad

// ============================================================================
// LECCIÓN DE PASCUA: Pascua de Resurrección
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/71-easter/711-easter?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 1
// ============================================================================
export const leccionPascuaQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El presidente Nelson describe un cambio específico que Jesucristo produjo en la historia de la humanidad. ¿Cuál es?",
    options: [
      "Que eliminó para siempre el sufrimiento físico de quienes creen en Él.",
      "Que estableció un nuevo sistema de gobierno basado en los principios del Evangelio.",
      "Que reescribió el desenlace de la historia humana al vencer el pecado y la muerte mediante Su Expiación y Resurrección.",
      "Que reunió a todas las naciones bajo una sola fe antes de Su segunda venida.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Muchos discípulos de Jesús reaccionaron de cierta manera al ver la Crucifixión, antes de saber que Él resucitaría. ¿Cómo describe la lección esa reacción?",
    options: [
      "Se sintieron tentados a abandonar la fe porque el Salvador había muerto y sus expectativas se rompieron.",
      "Permanecieron confiados porque Jesús les había prometido que resucitaría al tercer día.",
      "Se organizaron inmediatamente para difundir las enseñanzas del Salvador antes de que fueran prohibidas.",
      "Buscaron refugio en las Escrituras del Antiguo Testamento para entender el significado de lo ocurrido.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La Resurrección de Jesús transforma el significado de la muerte para todos Sus discípulos. ¿Qué cambio específico produce esa verdad en la manera de enfrentar la pérdida de un ser querido?",
    options: [
      "Que el dolor por la pérdida desaparece cuando se tiene suficiente fe en la Resurrección.",
      "Que los discípulos de Cristo no necesitan llorar porque saben que la muerte es solo temporal.",
      "Que la Resurrección es una promesa exclusiva para quienes vivieron todos los mandamientos perfectamente.",
      "Que la muerte ya no es el final de la historia de una persona; hay esperanza fundada en una promesa real y cumplida.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El presidente Nelson invita a centrarse en el Salvador durante el domingo de Pascua. ¿Por qué ese enfoque específico en Cristo y no simplemente en celebrar la vida o la primavera, como hacen otras tradiciones culturales?",
    options: [
      "Porque la Iglesia tiene reglas específicas sobre cómo los miembros deben celebrar los días festivos importantes.",
      "Porque centrarse en Cristo conecta la celebración con la fuente real de la esperanza que el día conmemora.",
      "Porque las tradiciones culturales de Pascua son de origen pagano y deben ser evitadas por los miembros fieles.",
      "Porque la conferencia general siempre coincide con la Pascua y los discursos son la forma oficial de celebrarla.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Lucía perdió recientemente a su abuela y siente que 'la muerte no tiene sentido'. La Pascua de Resurrección responde directamente a ese sentimiento. ¿Qué verdad de esta lección podría ofrecerle esperanza concreta?",
    options: [
      "Que el tiempo sana el dolor y eventualmente podrá recordar a su abuela sin tristeza.",
      "Que debería evitar pensar en la muerte y enfocarse en los momentos felices que compartieron.",
      "Que la Resurrección de Cristo no es solo una doctrina histórica, sino la garantía de que su abuela también resucitará y podrán estar juntas de nuevo.",
      "Que la fe genuina elimina el dolor del duelo para quienes confían en las promesas del Señor.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo pasa por una situación personal muy difícil y dice que 'no ve salida'. La lección describe lo que el Salvador ofrece en momentos de 'tinieblas'. ¿Qué puede ofrecerle Cristo específicamente según esta lección?",
    options: [
      "Esperanza y paz que otras personas considerarían imposibles en circunstancias como las suyas.",
      "Una respuesta inmediata que resolverá su situación si ora con suficiente fe.",
      "La certeza de que sus problemas actuales son una prueba pasajera que terminará pronto.",
      "Un conjunto de pasos prácticos revelados por el Espíritu Santo para resolver su situación específica.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La Pascua de Resurrección y la Pascua hebrea del Éxodo comparten un elemento central: la liberación. ¿En qué se diferencia fundamentalmente la liberación que cada una celebra?",
    options: [
      "La Pascua hebrea liberó solo al pueblo de Israel; la Resurrección liberó a toda la humanidad, sin distinción de nación o época.",
      "La Pascua hebrea fue una liberación física y temporal; la Resurrección es una liberación espiritual y permanente del pecado y la muerte.",
      "La Pascua hebrea requirió un cordero físico; la Resurrección requirió solo la fe de los creyentes sin ningún sacrificio.",
      "Son fundamentalmente idénticas porque ambas fueron ordenadas por el mismo Señor con el mismo propósito redentor.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 205: Prepararse para la conferencia general
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/70-teachings-of-church-leaders/701-preparing-for-general-conference?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 1, 3, 2
// ============================================================================
export const leccion205Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El élder Neil L. Andersen ofrece una sugerencia concreta para prepararse antes de la conferencia general. ¿Cuál es?",
    options: [
      "Hacer una lista de los oradores que más te gustan para anticipar sus temas.",
      "Escribir las preguntas o preocupaciones que tienes y llevarlas al Señor en oración antes de que comience.",
      "Leer todos los discursos de la conferencia anterior para tener contexto comparativo.",
      "Ayunar el día antes de la conferencia para estar más receptivo al Espíritu.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "¿Cómo describe el élder Andersen quién guía los asuntos de la Iglesia y da dirección en la conferencia general?",
    options: [
      "El Consejo de los Doce, que delibera y vota sobre los temas que se presentarán al pueblo.",
      "La Primera Presidencia, cuya sabiduría y experiencia combinada orienta los mensajes del evento.",
      "Un comité de comunicación que determina los temas según las necesidades globales de la Iglesia.",
      "Jesucristo mismo, por medio de Sus siervos a quienes guía e inspira para hablar lo que Él quiere que el pueblo escuche.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección invita a prepararse para la conferencia con preguntas personales escritas. ¿Por qué escribirlas en lugar de solo tenerlas en mente?",
    options: [
      "Escribir las preguntas demuestra al Señor que el estudio es intencional y merece una respuesta más clara.",
      "Porque el manual de Seminario requiere evidencia escrita de la preparación previa a la conferencia.",
      "Porque la escritura ayuda a clarificar lo que realmente se busca, hace la oración más específica y facilita reconocer la respuesta cuando llega.",
      "Porque las preguntas escritas pueden compartirse con el maestro de Seminario para recibir orientación adicional.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Escuchar la conferencia 'por el Espíritu' es diferente a simplemente escuchar los discursos con atención. ¿Qué diferencia específica produce el Espíritu Santo en esa experiencia?",
    options: [
      "Permite recordar más citas textuales de los oradores para usarlas en conversaciones posteriores.",
      "Hace que la persona permanezca despierta durante toda la sesión sin distracciones externas.",
      "Ilumina y confirma la verdad de lo que se escucha, y puede señalar qué mensaje es especialmente relevante para la situación personal del oyente.",
      "Garantiza que toda la familia presente pueda escuchar sin conflictos ni interrupciones durante las sesiones.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina ve la conferencia general como 'dos horas de discursos que no tienen nada que ver con mi vida'. Según el principio de preparación que enseña esta lección, ¿qué cambio podría transformar esa experiencia?",
    options: [
      "Ver la conferencia con amigos para que el ambiente social haga el evento más atractivo y memorable.",
      "Llevar preguntas reales de su vida a la conferencia y buscar activamente si algún discurso las responde, con el Espíritu como guía.",
      "Elegir solo una sesión —la que tenga los oradores más conocidos— para no saturarse con tanto contenido.",
      "Leer los discursos escritos en lugar de ver la transmisión en vivo, porque la lectura permite mayor concentración.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Benjamín escucha la conferencia pero nunca toma notas y al cabo de dos semanas no recuerda casi nada. El presidente Nelson habla de las notas como herramienta espiritual. ¿Qué debería cambiar Benjamín en su práctica?",
    options: [
      "Grabar toda la conferencia para poder revisarla después cuando tenga más tiempo disponible.",
      "Pedirle a alguien de la familia que tome notas por él para no perder el hilo de los discursos.",
      "Copiar textualmente cada discurso para tener un registro fiel de lo que cada orador dijo durante el evento.",
      "Escribir las ideas que captan su atención durante la conferencia y pedirle al Señor que confirme cuáles son relevantes para él.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La preparación antes de la conferencia, la escucha con el Espíritu durante ella, y el estudio posterior de los discursos forman un proceso completo. ¿Qué principio sobre la revelación personal une esas tres etapas?",
    options: [
      "Que la revelación personal requiere esfuerzo activo en cada etapa: preparar la pregunta, abrir el corazón para recibir, y actuar sobre lo recibido.",
      "Que las tres etapas son igualmente importantes y omitir cualquiera de ellas invalida la experiencia completa de la conferencia.",
      "Que el Espíritu Santo actúa principalmente durante la escucha en vivo, y las otras dos etapas son complementos opcionales.",
      "Que prepararse, escuchar y estudiar son formas de honrar el llamado de los Apóstoles y Profetas como representantes del Señor.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 206: Estudiar los mensajes de los siervos del Señor
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/70-teachings-of-church-leaders/702-studying-the-messages?lang=spa
// correctAnswer pattern: 3, 1, 2, 0, 3, 1, 0
// ============================================================================
export const leccion206Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El presidente Nelson expresa una expectativa concreta sobre qué deberían hacer los miembros con los mensajes de la conferencia en los meses siguientes. ¿Cuál es?",
    options: [
      "Compartirlos en redes sociales para que más personas fuera de la Iglesia puedan acceder a ellos.",
      "Archivarlos ordenadamente junto con los discursos de conferencias anteriores para referencia futura.",
      "Resumirlos en una página para presentarlos en la reunión familiar de Evangelio del hogar.",
      "Estudiarlos repetidamente durante los meses siguientes a la conferencia, no solo leerlos una vez.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "¿Cuál es el propósito principal de continuar estudiando los discursos después de que termina la conferencia general?",
    options: [
      "Prepararse para responder preguntas en la siguiente lección de Seminario sobre los discursos.",
      "Seguir escuchando la voz del Señor de manera continua en la vida, no solo durante el evento.",
      "Demostrar a los líderes locales que el miembro tomó en serio la conferencia y sus enseñanzas.",
      "Acumular citas de los apóstoles que puedan usarse en discursos sacramentales y clases de la Iglesia.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Estudiar los discursos repetidamente durante meses es diferente a leerlos una sola vez. ¿Qué produce específicamente esa repetición que una lectura única no puede lograr?",
    options: [
      "Que el miembro puede citar de memoria los discursos completos en conversaciones con no miembros.",
      "Que se cumplen los requisitos de estudio establecidos por el programa de Seminario e Instituto.",
      "Que el Espíritu Santo puede aplicar diferentes aspectos del mensaje a distintos momentos y situaciones de la vida a lo largo del tiempo.",
      "Que el miembro desarrolla una preferencia por ciertos apóstoles cuya enseñanza le resulta más útil y accesible.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección menciona que el Espíritu Santo puede ayudar durante el estudio personal de los discursos. ¿De qué manera específica puede hacerlo según el principio de la lección?",
    options: [
      "Ayudándote a reconocer por qué ese mensaje es importante para tu vida en este momento particular.",
      "Dándote la capacidad de leer los discursos mucho más rápido de lo normal para poder estudiarlos todos.",
      "Indicándote cuáles discursos son los más importantes para que no pierdas tiempo en los menos relevantes.",
      "Compensando la falta de esfuerzo personal cuando estás cansado o sin motivación para estudiar.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Sofía terminó de ver la conferencia pero dice que 'ya pasó' y no siente necesidad de releer los discursos. Según el principio de esta lección, ¿qué oportunidad está perdiendo sin darse cuenta?",
    options: [
      "La oportunidad de cumplir con el requisito de estudio que el Seminario establece para este período.",
      "La chance de compartir un discurso favorito antes de que el tema deje de ser relevante en la conversación.",
      "La posibilidad de mejorar su puntaje en las evaluaciones de Dominio de la Doctrina del trimestre.",
      "Que el Señor puede seguir hablándole a través de esos discursos durante semanas, aplicándolos a situaciones que aún no habían ocurrido cuando los escuchó.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás quiere estudiar los discursos pero dice que 'no sabe por dónde empezar'. La lección menciona ese obstáculo. ¿Qué estrategia concreta podría ayudarlo?",
    options: [
      "Elegir el discurso del orador que le resultó más interesante durante la conferencia y comenzar por ahí, pidiéndole al Espíritu que guíe su estudio.",
      "Estudiar todos los discursos en orden cronológico para no perderse ningún detalle del evento.",
      "Pedirle al maestro de Seminario que le asigne el discurso específico que debe estudiar ese mes.",
      "Esperar a que sus padres lo guíen en la selección del discurso más apropiado para su edad y situación.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La Lección 205 enseña a prepararse para la conferencia y la Lección 206 enseña a estudiar sus mensajes después. Juntas forman un ciclo. ¿Cuál es el principio doctrinal que sostiene ese ciclo completo?",
    options: [
      "Que el Señor habla a Su pueblo continuamente a través de Sus siervos, y aprovechar esa voz requiere esfuerzo intencional antes, durante y después de cada oportunidad de escucharla.",
      "Que la obediencia al calendario de la Iglesia —conferencias, reuniones, eventos— es en sí misma una forma de fe activa.",
      "Que la conferencia general es el evento espiritual más importante del año y debe recibir más atención que cualquier otro estudio.",
      "Que los discursos de la conferencia reemplazan la lectura de las Escrituras durante los meses en que se estudian.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 41: Éxodo 7–11
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/14-exodus-7-13/141-exodus-7-11?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 3, 0
// ============================================================================
export const leccion41Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Las diez plagas de Egipto no fueron castigos aleatorios. ¿Cuál era el propósito doble que el Señor declaró al enviarlas, según Éxodo 7:5?",
    options: [
      "Destruir la economía egipcia para debilitar militarmente a Faraón antes de la salida de Israel.",
      "Castigar a Egipto por siglos de esclavitud y demostrar que los dioses egipcios eran falsos.",
      "Que tanto los israelitas como los egipcios supieran y creyeran que Él es Jehová, el único Dios verdadero.",
      "Liberar a Israel lo más rápido posible para que pudieran llegar a la tierra prometida antes del invierno.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La Traducción de José Smith aclara un detalle importante sobre el endurecimiento del corazón de Faraón. ¿Qué aclara específicamente?",
    options: [
      "Que fue el propio Faraón quien endureció su corazón repetidamente, ejerciendo su agencia ante cada señal del Señor.",
      "Que el endurecimiento fue causado directamente por el Señor para cumplir una profecía específica sobre Egipto.",
      "Que los magos de Faraón endurecieron su corazón con hechizos para que no cediera ante Moisés.",
      "Que el endurecimiento fue progresivo y comenzó solo después de la séptima plaga, no desde el principio.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Cada plaga atacó específicamente a una deidad del panteón egipcio. El Nilo a Hapi, las ranas a Heqet, las tinieblas a Ra. ¿Qué enseña esa estructura sobre el mensaje que el Señor enviaba a Egipto?",
    options: [
      "Que el Señor quería mostrar Su superioridad militar sobre el ejército de Faraón antes de la batalla del Mar Rojo.",
      "Que el Señor diseñó las plagas para causar el mayor daño económico posible a la nación más poderosa del mundo.",
      "Que el Señor estaba fundamentalmente interesado en destruir la cultura egipcia para que Israel no la adoptara en el desierto.",
      "Que el Señor demostraba sistemáticamente que ninguno de los dioses de Egipto tenía poder real frente a Él, invitando a toda la nación a conocerlo.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Faraón tuvo diez oportunidades de reconocer el poder del Señor y eligió endurecer su corazón cada vez. ¿Qué enseña ese patrón sobre la relación entre las evidencias de Dios y la respuesta del ser humano?",
    options: [
      "Que el Señor da múltiples oportunidades de creer, pero la evidencia por sí sola no produce fe si el corazón no está dispuesto a recibirla.",
      "Que la fe basada en señales visibles es siempre más débil que la fe basada en las Escrituras y la oración personal.",
      "Que las personas que rechazan al Señor repetidamente pierden permanentemente la capacidad de arrepentirse.",
      "Que el Señor debería haber dado menos oportunidades a Faraón para evitar tanto sufrimiento al pueblo egipcio.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia dice que 'nunca ha visto ningún milagro' y por eso le cuesta creer que el Señor actúa hoy. Según el principio de esta lección, ¿qué podría estar pasando por alto?",
    options: [
      "Que los milagros modernos ocurren solo en contextos misioneros y no en la vida cotidiana de los adolescentes.",
      "Que debería pedir al Señor una señal visible específica antes de pedirle que fortalezca su fe.",
      "Que el poder del Señor se manifiesta hoy en formas que requieren atención activa para reconocerse: paz en la oración, guía del Espíritu, perdón, momentos de claridad inesperada.",
      "Que su falta de fe es la causa de que el Señor no se manifieste en su vida como lo hizo en el Antiguo Testamento.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás ora, va a la Iglesia y estudia las Escrituras, pero siente que 'Dios está callado' en su vida. El presidente Nelson invita a 'pedir tener ojos para ver la mano de Dios'. ¿Qué cambio concreto podría hacer Tomás esta semana?",
    options: [
      "Orar más tiempo cada día hasta que sienta una respuesta emocional clara e inequívoca del Señor.",
      "Pedir en su oración específicamente la capacidad de reconocer la presencia del Señor en lo cotidiano, y luego registrar lo que note durante el día.",
      "Hablar con su obispo para que le explique por qué Dios puede parecer distante en ciertos períodos de la vida.",
      "Leer los testimonios de otras personas sobre experiencias espirituales para recordarse que el Señor sí actúa en la vida de Sus hijos.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Las plagas de Egipto, la zarza ardiente en Éxodo 3, y la promesa del Señor en Éxodo 6 forman juntas el inicio del relato de Éxodo. ¿Qué patrón consistente sobre cómo el Señor se revela a Sí mismo emerge de esos tres elementos?",
    options: [
      "Que el Señor usa principalmente el sufrimiento como canal para revelarse, porque el dolor abre el corazón más que cualquier otra experiencia.",
      "Que el Señor se revela de manera gradual: primero a los líderes individualmente, luego a la nación, y finalmente a las naciones vecinas.",
      "Que el Señor actúa para que Sus hijos lo conozcan —su nombre, su poder, su fidelidad a los convenios— y usa tanto momentos íntimos como demostraciones públicas para lograrlo.",
      "Que las revelaciones del Señor en el Antiguo Testamento eran siempre dramáticas y visibles, a diferencia de las revelaciones más interiores y personales de nuestra época.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 42: Éxodo 12–13, Parte 1
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/14-exodus-7-13/142-exodus-12-13-part-1?lang=spa
// correctAnswer pattern: 3, 1, 0, 2, 3, 0, 2
// ============================================================================
export const leccion42Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Las instrucciones del Señor para la Pascua hebrea especificaban características precisas del cordero. ¿Cuáles eran esas características según Éxodo 12?",
    options: [
      "Debía ser el animal más grande del rebaño, de al menos dos años, para que su sacrificio fuera significativo.",
      "Debía ser elegido por el sacerdote, no por la familia, para asegurar que no hubiera favoritismos en la selección.",
      "Podía ser cualquier animal doméstico disponible, con tal de que fuera sacrificado al atardecer según el horario establecido.",
      "Debía ser un macho sin defecto de un año, escogido y guardado cuatro días antes de ser sacrificado.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La sangre del cordero debía aplicarse en un lugar específico de cada casa israelita. ¿Dónde?",
    options: [
      "En el umbral del suelo de la entrada, para que todos los que entraran la pisaran como señal de fe.",
      "En los dos postes y el dintel de la puerta, de manera que la entrada de la casa quedara marcada.",
      "En la puerta trasera de la casa, que era por donde el ángel pasaría según las instrucciones divinas.",
      "En el centro de la puerta principal, en forma de una señal visible para los vecinos que pasaran.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El cordero pascual debía ser sin defecto, escogido con cuidado y guardado cuatro días. ¿Qué aspectos específicos de la misión de Jesucristo prefigura esa descripción?",
    options: [
      "Cristo fue sin pecado, fue designado desde antes de la fundación del mundo, y Su misión fue preparada cuidadosamente a lo largo de siglos de historia sagrada.",
      "Cristo fue el más humilde de todos, vivió exactamente cuatro años de ministerio público antes de Su sacrificio.",
      "Cristo fue elegido por los apóstoles como su líder antes de que comenzara Su ministerio público en Galilea.",
      "Cristo fue separado del mundo durante cuarenta días en el desierto antes de iniciar Su misión entre el pueblo.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La familia debía permanecer dentro de la casa con la sangre en el dintel durante la noche de la plaga. ¿Qué principio sobre la salvación ilustra esa instrucción de quedarse dentro?",
    options: [
      "Que la salvación requiere aislarse del mundo completamente para no ser contaminado por su influencia negativa.",
      "Que el Señor protege a quienes obedecen Sus instrucciones específicas, aunque parezcan arbitrarias o difíciles de entender.",
      "Que la salvación se recibe permaneciendo dentro de los convenios del Señor, no solo haciéndolos una vez y luego alejándose.",
      "Que la fe verdadera siempre incluye un componente de sacrificio visible que otros puedan reconocer desde afuera.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Diego fue bautizado hace tres años pero ya no participa activamente de la Iglesia. Le dice a un amigo: 'Ya hice el convenio; eso es lo que importa'. La lección sobre quedarse dentro de la casa habla directamente a esa actitud. ¿Qué le diría?",
    options: [
      "Que la participación activa es un requisito de la Iglesia, no una parte esencial del convenio bautismal.",
      "Que el bautismo solo es válido si se renueva regularmente mediante la ordenanza de la confirmación.",
      "Que los convenios se viven, no solo se hacen; quedarse dentro significa seguir renovando el convenio de la Santa Cena y mantenerse activo en la fe.",
      "Que debería hablar con sus líderes locales para determinar si su bautismo necesita ser revalidado formalmente.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Camila tiene una semana muy difícil y decide saltarse la reunión sacramental porque 'no tiene ganas y total el Señor la entiende'. Usando el símbolo de la sangre en el dintel, ¿qué perspectiva ofrece la lección?",
    options: [
      "Que participar de la Santa Cena cuando no tenemos ganas es exactamente cuando más la necesitamos: es renovar la señal del convenio en el umbral de nuestra vida.",
      "Que el Señor efectivamente entiende y la Santa Cena tiene el mismo valor espiritual independientemente de si asistimos físicamente o no.",
      "Que saltarse una sola semana no tiene consecuencias espirituales significativas si el patrón general de su vida es fiel.",
      "Que debería orar en casa en lugar de asistir, porque la sinceridad de la oración supera el valor de la asistencia rutinaria.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El cordero pascual es descrito por Pablo en 1 Corintios 5:7 como 'nuestra pascua, que es Cristo'. ¿Qué cambio doctrinal fundamental señala esa identificación entre el cordero físico y Jesucristo?",
    options: [
      "Que la Ley de Moisés fue anulada por completo con la llegada de Cristo y ya no tiene ningún valor doctrinal para los creyentes.",
      "Que los símbolos del Antiguo Testamento no apuntaban a Cristo sino que eran leyes independientes con propósito propio.",
      "Que el sacrificio físico de animales cumplió su propósito de preparar la comprensión del pueblo; la Expiación de Cristo es el cumplimiento real de todo lo que esos sacrificios prometían.",
      "Que Pablo interpretó la Pascua de manera alegórica, no histórica, para hacer el Evangelio más accesible a la cultura griega.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 43: Éxodo 12–13, Parte 2
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/14-exodus-7-13/143-exodus-12-13-part-2?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 3
// ============================================================================
export const leccion43Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El Señor instruyó a Israel que celebrara la Pascua 'durante sus generaciones, como institución para siempre'. ¿Cuál fue el propósito declarado de esa repetición anual?",
    options: [
      "Que Israel mantuviera vivo el recuerdo de que Jehová los libró de Egipto y honrara así Su poder y fidelidad.",
      "Que las generaciones futuras aprendieran las leyes dietéticas que el Señor estableció para el pueblo de Israel.",
      "Que Israel tuviera un evento festivo anual que los diferenciara claramente de las culturas vecinas paganas.",
      "Que el sacerdocio tuviera una oportunidad anual de instruir al pueblo sobre la ley de los sacrificios.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Durante la última cena pascual que Jesús celebró con Sus apóstoles, instituyó una nueva ordenanza. ¿Cuál fue la instrucción central que les dio al hacerlo?",
    options: [
      "Que debían celebrar la Pascua hebrea y la Santa Cena juntas cada año en el aposento alto.",
      "Que Judas debía retirarse antes de que comenzara la ordenanza para no contaminar el rito con su traición.",
      "Que debían hacerlo 'en memoria de Él', vinculando así la nueva ordenanza con Su sacrificio expiatorio.",
      "Que Pedro, como cabeza de los apóstoles, sería el único autorizado para administrar la Santa Cena después de Su muerte.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La Pascua anual fue reemplazada por la Santa Cena semanal. ¿Por qué el Señor cambió de una frecuencia anual a una semanal en lugar de mantener la misma frecuencia?",
    options: [
      "Porque las semanas eran la unidad de tiempo más común en la cultura romana donde vivían los primeros cristianos.",
      "Porque el Salvador quería que Sus discípulos lo recordaran no una vez al año sino siempre, integrando ese recuerdo en el ritmo regular de su vida.",
      "Porque la frecuencia semanal permitía que más personas pudieran administrar la ordenanza por turnos en las congregaciones.",
      "Porque la celebración anual generaba demasiadas expectativas emocionales que distraían del verdadero propósito del rito.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La oración sacramental de Moroni 4:3 promete que quienes recuerden al Salvador 'siempre' tendrán Su Espíritu con ellos. ¿Qué implica esa promesa sobre la relación entre la Santa Cena y el Espíritu Santo durante la semana?",
    options: [
      "Que el Espíritu solo está disponible para quienes participan de la Santa Cena con perfecta preparación espiritual.",
      "Que la Santa Cena es principalmente un rito simbólico cuyo valor principal es la instrucción doctrinal que recuerda.",
      "Que participar fielmente de la Santa Cena cada semana renueva el convenio que hace posible tener el Espíritu como compañero durante toda la semana, no solo el domingo.",
      "Que la promesa del Espíritu aplica solo durante la reunión sacramental, y que su presencia durante la semana depende de otros factores.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Rocío participa de la Santa Cena cada domingo pero admite que mientras se pasan el pan y el agua generalmente está revisando su teléfono. La lección habla de la Santa Cena como momento de recordar al Salvador. ¿Qué podría hacer Rocío para que ese momento sea real?",
    options: [
      "Guardar el teléfono durante la reunión sacramental y usar ese tiempo para pensar en algo específico del Salvador que haya aprendido esa semana.",
      "Pedir a sus padres que le quiten el teléfono antes de entrar al edificio para eliminar la tentación completamente.",
      "Sentarse en una fila diferente donde no haya amigos que la distraigan durante la administración del sacramento.",
      "Participar de la Santa Cena solo cuando se sienta realmente preparada, para que cada experiencia sea genuinamente significativa.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín siente que sus semanas espirituales son 'irregulares': a veces muy bien y a veces muy mal, sin que sepa por qué. La lección conecta la Santa Cena semanal con el Espíritu Santo como compañero. ¿Qué podría explicar esa irregularidad desde el principio de la lección?",
    options: [
      "Que la espiritualidad es naturalmente variable y no hay manera de estabilizarla completamente durante la adolescencia.",
      "Que necesita encontrar un estilo de oración diferente que se adapte mejor a su personalidad y ritmo de vida.",
      "Que participar de la Santa Cena con mayor intención cada semana —recordando realmente al Salvador y renovando el convenio— podría ser la fuente de mayor estabilidad espiritual que busca.",
      "Que debería evaluar qué actividades de los domingos le generan más paz y construir su rutina semanal alrededor de ellas.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La Pascua hebrea recordaba la liberación de la esclavitud física de Egipto. La Santa Cena recuerda la liberación del pecado y la muerte. Ambas son memoriales instituidos por el Señor. ¿Qué dice esa continuidad sobre la naturaleza del Señor y Su relación con Sus hijos a lo largo del tiempo?",
    options: [
      "Que el Señor diseña repetidamente memoriales porque Sus hijos tienden a olvidar, y Él quiere que recuerden quién es Él y lo que ha hecho por ellos.",
      "Que la liberación espiritual es más importante que la física, lo que explica por qué el Señor reemplazó el memorial de Egipto con uno de mayor valor.",
      "Que el Señor prefiere las ordenanzas sencillas a los rituales elaborados porque son más accesibles para todas las culturas.",
      "Que los memoriales divinos son temporales y siempre son reemplazados por versiones más completas a medida que avanza la historia de la salvación.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 44: Práctica 3 del Dominio de la doctrina
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/14-exodus-7-13/144-doctrinal-mastery-practice-3?lang=spa
// correctAnswer pattern: 1, 3, 2, 0, 1, 3, 2
// ============================================================================
export const leccion44Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Esta práctica de Dominio de la Doctrina incluye el principio de adoptar una 'perspectiva eterna' al analizar preguntas difíciles. ¿Qué significa eso según la lección?",
    options: [
      "Ignorar las preguntas difíciles porque su respuesta solo se revelará en la vida después de la muerte.",
      "Esforzarse por ver un concepto como Dios lo ve y comprender Sus sentimientos sobre el tema.",
      "Comparar la pregunta difícil con otras preguntas similares que han sido respondidas por los profetas.",
      "Aceptar que algunas preguntas no tienen respuesta y avanzar con fe sin necesitar entenderlas.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La lección usa el ejemplo de José de Egipto en Génesis 39:9 como modelo para la práctica. ¿Cuál es el principio que José ilustra en ese versículo?",
    options: [
      "Que la obediencia a los superiores es una virtud incluso cuando sus órdenes son injustas.",
      "Que evitar la tentación requiere alejarse físicamente de la fuente de presión sin mirar atrás.",
      "Que el sufrimiento injusto eventualmente produce exaltación si se soporta con paciencia y sin amargura.",
      "Que nuestras decisiones están directamente conectadas con nuestra devoción a Dios, no solo con normas sociales.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El Dominio de la Doctrina busca que los alumnos sepan manejar preguntas difíciles con fe. ¿Por qué 'con fe' y no simplemente 'con información'?",
    options: [
      "Porque la información doctrinal puede cambiar con nuevas revelaciones, mientras que la fe es el fundamento estable.",
      "Porque la mayoría de las preguntas difíciles sobre el Evangelio no tienen respuesta informacional disponible.",
      "Porque responder con información sola puede ganar un debate pero no ayuda a la persona que pregunta a crecer espiritualmente; la fe incluye cómo se responde, no solo qué se responde.",
      "Porque el Señor instruye a Sus hijos a evitar los debates académicos sobre doctrina y enfocarse solo en el testimonio personal.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección señala que al ayudar a alguien con preguntas o dudas, debemos tratarlos con el mismo amor y respeto que el Padre Celestial y Jesucristo mostrarían. ¿Por qué ese principio es especialmente importante en una conversación sobre dudas religiosas?",
    options: [
      "Porque el amor y el respeto hacen que la persona con dudas sea más receptiva a los argumentos doctrinales que se le presenten.",
      "Porque muchas veces detrás de una pregunta doctrinal hay una experiencia personal dolorosa, y el amor puede ser más necesario que la información correcta.",
      "Porque la Iglesia enseña que las conversaciones sobre religión siempre deben ser formales y respetuosas, independientemente del contenido.",
      "Porque mostrar amor evita que la conversación se convierta en un conflicto que dañe la relación de amistad.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Un compañero de escuela le dice a Valentina: 'Si Dios es bueno, ¿por qué permite tanto sufrimiento?' Valentina quiere responder bien. Según la práctica de esta lección, ¿cuál sería el mejor primer paso?",
    options: [
      "Darle una lista de referencias bíblicas que explican por qué el sufrimiento existe según el plan de Dios.",
      "Escuchar con genuino interés para entender si detrás de la pregunta hay algo personal que le está pesando a su compañero.",
      "Decirle que esa pregunta es difícil y que lo invita a venir al Seminario donde podría encontrar respuestas.",
      "Explicarle el Plan de Salvación completo para que entienda el propósito del sufrimiento en la vida mortal.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo tiene un amigo que dice que 'la ley de castidad es anticuada y solo hace daño a la gente'. Según el principio de perspectiva eterna que enseña esta lección, ¿cómo podría Mateo responder desde ese marco?",
    options: [
      "Explicarle que la ley de castidad tiene beneficios psicológicos comprobados por investigaciones científicas recientes.",
      "Pedirle que respete sus creencias sin necesidad de debatir el tema, ya que es algo muy personal para él.",
      "Compartir que la ley de castidad vista desde el Plan de Salvación no es una restricción sino una protección que honra algo sagrado: el poder de dar vida y la intimidad del convenio.",
      "Señalarle que las estadísticas muestran que las personas que viven la ley de castidad tienen matrimonios más estables y felices.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Esta práctica conecta el uso de las Escrituras (Génesis 39:9), el principio de perspectiva eterna, y el trato amoroso hacia quien pregunta. ¿Cuál es el modelo completo de discipulado que esa combinación propone?",
    options: [
      "Memorizar, debatir y persuadir: las tres habilidades que un discípulo necesita para defender el Evangelio en el mundo moderno.",
      "Conocer la doctrina, verla desde el marco eterno de Dios, y comunicarla con el amor que el Salvador mostraría: información, perspectiva y amor juntos.",
      "Estudiar, enseñar y testificar: el ciclo que todo alumno de Seminario debe dominar antes de terminar el año.",
      "Prepararse, escuchar y responder: el patrón que asegura que cada conversación sobre el Evangelio termine de manera positiva.",
    ],
    correctAnswer: 2,
  },
];