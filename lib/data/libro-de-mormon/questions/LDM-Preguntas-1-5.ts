import type { Question } from "@/lib/types";

// ============================================================================
// SEMANA 1
// ============================================================================

// Lección: El Plan de Salvación
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/01-introductory-materials/011-teacher?lang=spa
export const planDeSalvacionQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El manual señala que el Libro de Mormón responde preguntas clave de la vida. Según el presidente Russell M. Nelson, ¿a qué tipo de interrogantes responde específicamente?",
    options: [
      "Solo preguntas sobre historia antigua",
      "Los interrogantes más acuciantes de la vida",
      "Únicamente preguntas sobre ciencia y religión",
      "Preguntas sobre el comportamiento de otras personas"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según Alma 34:32–33, ¿cuándo es el momento en que el hombre debe prepararse para comparecer ante Dios?",
    options: [
      "En la vida preterrenal, antes de nacer",
      "En el mundo espiritual, después de morir",
      "En esta vida mortal, el día de hoy",
      "En la resurrección, cuando todos serán juzgados"
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El presidente Ballard enseñó que conocer de dónde venimos, por qué estamos aquí y hacia dónde vamos nos protege de las tentaciones de Satanás. ¿Por qué ese conocimiento tendría ese efecto?",
    options: [
      "Porque hace que las tentaciones dejen de existir",
      "Porque cuando conocemos nuestra identidad eterna, las propuestas del mundo pierden atractivo comparadas con el destino que tenemos",
      "Porque el conocimiento del plan automáticamente nos hace perfectos",
      "Porque nos convierte en personas que no sienten deseos ni emociones"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "Alma 40:11–12 enseña que los espíritus de los justos son recibidos en un estado llamado paraíso. ¿Qué nos enseña esto sobre la continuidad de la persona después de la muerte física?",
    options: [
      "Que la muerte es el fin absoluto de la conciencia individual",
      "Que todos los espíritus, sin importar sus elecciones, van al mismo lugar",
      "Que la persona sigue existiendo de forma consciente entre la muerte y la resurrección",
      "Que el paraíso es idéntico a la exaltación en el reino celestial"
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Valentina tiene 16 años y su abuela acaba de fallecer. Sus compañeros de clase le dicen que 'simplemente se acabó todo' para ella. Según lo que enseña el Plan de Salvación sobre la vida después de la muerte, ¿qué podría compartir Valentina con ellos?",
    options: [
      "Que nadie sabe nada sobre lo que pasa después de la muerte, así que es mejor no pensar en ello",
      "Que su abuela sigue existiendo como espíritu en un estado de paz, esperando la resurrección",
      "Que solo las personas que vivieron perfectamente siguen existiendo después de morir",
      "Que la vida después de la muerte es solo una creencia subjetiva sin respaldo revelado"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Mateo siente que sus decisiones de hoy no importan demasiado porque 'siempre habrá tiempo para arrepentirse'. Según Alma 34:32–33, ¿cuál sería la respuesta más fiel a la doctrina del Plan de Salvación?",
    options: [
      "Que el arrepentimiento es posible en cualquier etapa de la existencia, incluso después de morir",
      "Que esta vida es el tiempo asignado para prepararse, y procrastinar el arrepentimiento tiene consecuencias reales",
      "Que las decisiones pequeñas de hoy no tienen impacto eterno significativo",
      "Que Dios siempre compensará el tiempo perdido sin importar el momento en que nos arrepintamos"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "La lección presenta tres preguntas fundamentales: '¿De dónde vengo? ¿Por qué estoy aquí? ¿Hacia dónde voy?' Tanto las Escrituras citadas (Alma 12, Alma 34, Alma 40) como la cita del presidente Ballard apuntan al mismo principio. ¿Cuál es ese principio común que une todas estas enseñanzas?",
    options: [
      "Que la vida mortal es solo una prueba aleatoria sin conexión con el pasado ni el futuro",
      "Que la vida tiene un propósito eterno estructurado por el plan del Padre, y ese conocimiento cambia cómo vivimos hoy",
      "Que solo los líderes de la Iglesia pueden entender el plan de salvación en su totalidad",
      "Que el sufrimiento en esta vida carece de propósito dentro del plan divino"
    ],
    correctAnswer: 1,
  }
];

// Lección: El estudio de las Escrituras
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/01-introductory-materials/012-teacher?lang=spa
export const estudioEscriturasQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "En la lección sobre el estudio de las Escrituras, el manual usa la imagen de hacer flexiones de brazos. ¿Qué principio ilustra esa imagen?",
    options: [
      "Que el estudio de las Escrituras requiere esfuerzo físico",
      "Que el esfuerzo constante a lo largo del tiempo produce fortaleza real, no el esfuerzo esporádico",
      "Que solo los que son fuertes pueden estudiar las Escrituras",
      "Que el estudio de las Escrituras es una actividad deportiva"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según 1 Nefi 15:24, ¿qué sucede con quienes escuchan la palabra de Dios y se aferran a ella?",
    options: [
      "Siempre tendrán salud y prosperidad material",
      "No perecerán jamás, ni los vencerán las tentaciones ni los ardientes dardos del adversario",
      "Nunca tendrán preguntas ni dudas sobre el Evangelio",
      "Recibirán visiones y manifestaciones espirituales continuas"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El élder Christofferson sugiere leer pocos versículos pero detenerse a meditar, releer, orar y anotar impresiones. ¿Qué diferencia a este enfoque del simple hábito de 'cumplir con leer' cada día?",
    options: [
      "Que el enfoque del élder Christofferson es más lento y por tanto menos efectivo",
      "Que pone el propósito en la conversión y la revelación personal, no en terminar páginas",
      "Que elimina la necesidad de leer sistemáticamente el texto de las Escrituras",
      "Que es un método diseñado solo para líderes y maestros, no para jóvenes"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "Alma 17:2–3 describe que los hijos de Mosíah 'escudriñaron las Escrituras' y también se dedicaron a 'mucha oración y ayuno'. ¿Por qué el texto menciona ambas cosas juntas como causa de su éxito misionero?",
    options: [
      "Porque cualquiera de los dos por separado es suficiente para recibir el Espíritu",
      "Porque el conocimiento intelectual de las Escrituras basta sin necesidad de práctica espiritual",
      "Porque el conocimiento de las Escrituras y la disciplina espiritual trabajan juntos para recibir el poder del Espíritu",
      "Porque la oración sola, sin estudio, es la práctica más efectiva"
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Luca lee las Escrituras cada noche antes de dormir pero siempre termina sin recordar nada porque tiene sueño. Según los principios de esta lección, ¿qué ajuste concreto le recomendarías?",
    options: [
      "Que deje de leer hasta que encuentre un horario perfecto",
      "Que cambie el horario a un momento en que esté más alerta, y que lea menos pero con más atención y oración",
      "Que aumente la cantidad de páginas para compensar la distracción",
      "Que escuche un audio del libro en lugar de leer, porque el efecto es idéntico"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Sofía dice que no encuentra nada útil cuando lee las Escrituras porque 'son historias de personas que vivieron hace miles de años'. Según 2 Nefi 32:3, ¿cuál sería la mejor respuesta a su inquietud?",
    options: [
      "Que tiene razón y las Escrituras son principalmente para académicos y estudiosos",
      "Que las palabras de Cristo en las Escrituras nos dicen todas las cosas que debemos hacer hoy, porque son la voz viva de Dios",
      "Que lo importante es asistir a la Iglesia, no necesariamente leer las Escrituras personalmente",
      "Que debería buscar un libro de autoayuda moderno que le sea más relevante"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "Julie B. Beck dijo que es imposible aprender las lecciones de las Escrituras leyéndolas solo una vez, y el presidente Nelson prometió que el estudio diario 'vacuna' contra los males de la época. ¿Qué principio común une estas dos declaraciones?",
    options: [
      "Que las Escrituras son principalmente útiles para tiempos de crisis, no para el día a día",
      "Que el contacto diario y sostenido con las palabras de Cristo produce una protección y formación que la lectura ocasional no puede dar",
      "Que las promesas del estudio de las Escrituras solo aplican a los adultos maduros en la fe",
      "Que cualquier frecuencia de lectura produce los mismos beneficios espirituales"
    ],
    correctAnswer: 1,
  }
];

// Lección: Aprender por el Espíritu
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/01-introductory-materials/013-teacher?lang=spa
export const aprenderEspirituQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El élder Rasband describió cómo se comunica el Espíritu Santo. ¿Cuál de las siguientes describe mejor lo que él enseñó?",
    options: [
      "El Espíritu habla principalmente mediante visiones dramáticas y manifestaciones físicas",
      "El Espíritu se comunica con mayor frecuencia como un suave impulso a actuar, a decir algo o a reaccionar de cierta manera",
      "El Espíritu solo habla a quienes han recibido todos los convenios del templo",
      "El Espíritu se comunica exclusivamente a través de las palabras de los profetas vivientes"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según 1 Nefi 2:16, ¿qué fue lo que cambió en Nefi después de que habló con el Señor?",
    options: [
      "Recibió una visión del árbol de la vida igual a la de su padre",
      "El Señor le ablandó el corazón de modo que creyó todas las palabras de su padre",
      "Fue llamado como profeta para guiar a la familia",
      "Recibió instrucción directa sobre cómo obtener las planchas de bronce"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El manual compara el Espíritu Santo con la herramienta de comunicación más importante, más que un teléfono inteligente. ¿Qué aspecto de esa comparación describe mejor el papel del Espíritu?",
    options: [
      "Que el Espíritu es tecnología avanzada disponible solo para quienes saben usarla correctamente",
      "Que así como un teléfono conecta personas, el Espíritu nos conecta con el Padre Celestial y nos ayuda a comprender todo lo necesario para nuestra felicidad y salvación",
      "Que el Espíritu es útil principalmente para recibir información, no para guiar decisiones",
      "Que la comunicación espiritual requiere un 'dispositivo' externo para funcionar"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "Moroni 10:5 promete que el Espíritu Santo nos permite conocer la verdad de todas las cosas. 1 Nefi 10:19 añade que 'el que diligentemente busca, hallará'. ¿Qué condición une ambos versículos?",
    options: [
      "Que el Espíritu actúa automáticamente sin importar nuestra actitud o esfuerzo",
      "Que la revelación espiritual requiere búsqueda sincera y diligente de nuestra parte",
      "Que solo quienes tienen cargos de liderazgo pueden buscar y hallar verdad espiritual",
      "Que la verdad espiritual está disponible sin condiciones para todas las personas"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Camila dice que no siente nada especial cuando ora o estudia, así que dejó de hacerlo. Basándote en lo que enseña el élder Rasband sobre cómo se comunica el Espíritu, ¿qué le dirías?",
    options: [
      "Que tiene razón, y si no siente emociones intensas, probablemente no esté recibiendo el Espíritu",
      "Que el Espíritu frecuentemente habla como pensamientos familiares o impulsos suaves, y que cesar la práctica elimina la posibilidad de reconocerlo",
      "Que debería buscar experiencias espirituales en contextos más dramáticos como ayunos prolongados",
      "Que el Espíritu Santo solo habla a quienes ya tienen un testimonio completamente desarrollado"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Tomás tiene dudas sobre el Evangelio y un amigo le dice que confíe solo en su propia razón porque 'nadie puede probar cosas espirituales'. Según Moroni 10:4–5, ¿qué proceso real existe para conocer la verdad espiritual?",
    options: [
      "Que la razón humana, si se aplica correctamente, es suficiente para confirmar verdades espirituales",
      "Que preguntar a Dios con corazón sincero, verdadera intención y fe en Cristo activa la manifestación del Espíritu Santo",
      "Que la única forma de saber es haber vivido muchos años en la Iglesia",
      "Que las verdades espirituales no pueden conocerse con certeza y deben aceptarse sin confirmación"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "El presidente Nelson dijo que 'en los días futuros no será posible sobrevivir espiritualmente sin el Espíritu Santo'. El élder Rasband describió al Espíritu como impulsos suaves que guían. ¿Qué habilidad específica necesitamos desarrollar para que esa promesa del presidente Nelson sea posible en nuestra vida?",
    options: [
      "La capacidad de tener visiones y experiencias espirituales dramáticas con regularidad",
      "La habilidad de reconocer y responder a señales sutiles del Espíritu: pensamientos, sentimientos y suaves impulsos a actuar",
      "El conocimiento académico de teología y doctrina de la Iglesia",
      "La disciplina de asistir a todas las reuniones de la Iglesia sin faltar ninguna"
    ],
    correctAnswer: 1,
  }
];

// Lección: Aprender por la fe
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/01-introductory-materials/014-teacher?lang=spa
export const aprenderPorFeQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "¿Cuál es la frase exacta del presidente Russell M. Nelson citada en esta lección sobre el esfuerzo?",
    options: [
      "El Señor recompensa a quienes se esfuerzan más que a los demás",
      "El esfuerzo sin dirección divina no produce resultados espirituales",
      "El Señor ama el esfuerzo, porque el esfuerzo brinda recompensas que no pueden recibirse sin él",
      "Todo esfuerzo honesto eventualmente conduce al mismo resultado espiritual"
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según Éter 12:6, ¿en qué momento se recibe el testimonio?",
    options: [
      "Antes de ser probada la fe, como don gratuito del Señor",
      "Solo cuando la persona es suficientemente perfecta en su comportamiento",
      "No antes de la prueba de la fe; el testimonio viene después de demostrarla",
      "Automáticamente al momento del bautismo y confirmación"
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El élder Bednar dijo que aprender por la fe requiere 'esfuerzo espiritual, mental y físico'. ¿Por qué menciona las tres dimensiones y no solo la espiritual?",
    options: [
      "Porque el crecimiento espiritual es secundario al desarrollo intelectual y físico",
      "Porque el aprendizaje del Evangelio que lleva a la conversión involucra a la persona completa, no solo un aspecto",
      "Porque las personas solo aprenden espiritualmente si primero han desarrollado sus capacidades mentales",
      "Porque Dios requiere agotamiento físico como condición previa para recibir revelación"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "2 Nefi 28:30 enseña que el Señor da conocimiento 'línea por línea, precepto por precepto'. ¿Cómo se conecta este principio con la idea de 'aprender por la fe' en Seminario?",
    options: [
      "Que si esperamos el tiempo suficiente, el conocimiento llegará sin necesidad de esfuerzo",
      "Que el crecimiento espiritual es gradual y requiere que actuemos con fe en lo que ya aprendimos para recibir más",
      "Que el Señor da el mismo conocimiento a todos al mismo tiempo sin importar el esfuerzo individual",
      "Que el aprendizaje gradual aplica solo para los profetas, no para los jóvenes en Seminario"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Sofía asiste a Seminario pero siempre está en su teléfono durante la clase y no participa en las discusiones. Según lo que enseña el élder Bednar sobre el aprendizaje activo, ¿qué está perdiendo Sofía?",
    options: [
      "Solo está perdiendo puntos de asistencia, pero el Espíritu igual le enseñará",
      "Está perdiendo la oportunidad de recibir mensajes del Espíritu personalizados a sus necesidades, que llegan cuando participa activamente",
      "No está perdiendo nada porque el contenido está disponible en línea",
      "Solo pierde la oportunidad social de hacer amigos en la clase"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Luca dice que no siente que Dios le hable directamente, así que para qué esforzarse en estudiar el Evangelio. Según los principios de esta lección, ¿qué le dirías?",
    options: [
      "Que tiene razón, y que el esfuerzo solo vale si ya siente la presencia de Dios",
      "Que el esfuerzo sincero es precisamente lo que demuestra al Padre Celestial que estamos listos para aprender, y abre la puerta a la instrucción del Espíritu",
      "Que los sentimientos espirituales son la condición previa para estudiar, no el resultado",
      "Que debería esperar hasta que Dios le envíe una señal clara antes de comprometerse con el estudio"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "El presidente Nelson dijo que 'el Señor ama el esfuerzo'. El élder Bednar añadió que la sinceridad y constancia de nuestros actos de fe le indican al Padre Celestial nuestra disposición a aprender. ¿Qué relación establecen estas dos enseñanzas entre el esfuerzo y la revelación?",
    options: [
      "Que la revelación viene primero y el esfuerzo es solo la respuesta agradecida",
      "Que el esfuerzo y la revelación son fenómenos completamente independientes entre sí",
      "Que el esfuerzo activo y sincero es una señal de fe que activa la disposición de Dios a enseñarnos más",
      "Que cualquier tipo de esfuerzo, sea sincero o no, produce el mismo resultado espiritual"
    ],
    correctAnswer: 2,
  }
];

// Lección: Adquirir conocimiento espiritual: Parte 1
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/01-introductory-materials/015-teacher?lang=spa
export const conocimientoEspiritual1Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El presidente Uchtdorf invitó a 'dudar de las dudas antes de dudar de la fe'. ¿A qué tipo específico de preguntas sobre el Evangelio se refería esta lección?",
    options: [
      "Solo a las preguntas que surgen de la lectura de fuentes anti-mormonas",
      "A cualquier pregunta sobre el Evangelio o la Iglesia, independientemente de su origen o motivación",
      "Solo a las preguntas sobre historia de la Iglesia, no sobre doctrina",
      "Únicamente a las preguntas que tienen respuesta en las Escrituras"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según 1 Nefi 3:7, Nefi expresó confianza en que el Señor prepara la vía. Pero en esta lección, este versículo se usa para ilustrar qué principio sobre el conocimiento espiritual específicamente.",
    options: [
      "Que el conocimiento espiritual llega sin que hagamos ningún esfuerzo",
      "Que actuar con fe —avanzar aunque no tengamos todas las respuestas— es el primer principio para adquirir conocimiento espiritual",
      "Que debemos buscar señales milagrosas antes de actuar en situaciones difíciles",
      "Que el Señor siempre responde las preguntas antes de que demos el primer paso"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "La lección describe cuatro razones por las que alguien podría tener preguntas sobre el Evangelio. ¿Por qué el manual enfatiza que cualquiera de esas razones 'podría ser correcta o incorrecta dependiendo de la actitud de la persona'?",
    options: [
      "Porque las preguntas honestamente son siempre buenas, sin importar la actitud",
      "Porque lo que determina si una pregunta fortalece o debilita la fe no es el tema sino cómo decidimos manejarla",
      "Porque las preguntas motivadas por curiosidad intelectual son siempre peligrosas para la fe",
      "Porque la razón detrás de una pregunta es irrelevante para el crecimiento espiritual"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "El presidente Nelson invitó a 'estudiar con el deseo de creer más que con la esperanza de encontrar una falla'. ¿Cómo cambiaría esa actitud los resultados del estudio del Evangelio?",
    options: [
      "No cambiaría nada porque la verdad es la misma independientemente de la actitud del estudiante",
      "Una actitud de búsqueda sincera abre el corazón al Espíritu, mientras que buscar fallas crea resistencia al aprendizaje espiritual",
      "Estudiar para encontrar fallas es en realidad más honesto intelectualmente que estudiar con fe",
      "La actitud solo importa para personas emocionalmente débiles, no para quienes razonan bien"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Valentina encontró en internet un artículo que cuestiona un aspecto de la historia de la Iglesia. Lo leyó y ahora siente que toda su fe se derrumba. Según el primer principio para adquirir conocimiento espiritual, ¿cuál sería el primer paso recomendado?",
    options: [
      "Dejar de investigar el tema para proteger su fe",
      "Continuar guardando los mandamientos y aferrarse a lo que ya sabe que es verdad, mientras busca respuestas en fuentes confiables",
      "Aceptar las conclusiones del artículo porque fueron publicadas en internet",
      "Pedir a alguien que le explique el tema sin leer nada al respecto ella misma"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Mateo tiene una pregunta que no puede resolver sobre por qué Dios permitió algo difícil en su vida. Sus amigos le dicen que si Dios fuera bueno, no habría permitido eso. Según 1 Nefi 9:5–6, ¿qué perspectiva podría ayudar a Mateo?",
    options: [
      "Que las dificultades de la vida prueban que Dios no existe",
      "Que el Señor sabe todas las cosas desde el principio y prepara el camino, aunque Mateo no entienda el propósito todavía",
      "Que Mateo debería buscar otra religión que explique mejor el sufrimiento",
      "Que las preguntas sobre el sufrimiento nunca tienen respuesta, así que es mejor no hacerlas"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "Tanto el presidente Uchtdorf ('duda de tus dudas antes de dudar de tu fe') como el presidente Nelson ('estudia con el deseo de creer') enseñan sobre cómo manejar preguntas difíciles. ¿Cuál es el principio común que une ambas invitaciones?",
    options: [
      "Que debemos suprimir las preguntas difíciles para proteger la fe",
      "Que la actitud con que enfrentamos las preguntas determina si nos acercan o alejan de Cristo",
      "Que las preguntas solo son válidas si ya tenemos la respuesta antes de hacerlas",
      "Que la duda y la fe son estados permanentes que no pueden coexistir en la misma persona"
    ],
    correctAnswer: 1,
  }
];

// ============================================================================
// SEMANA 2
// ============================================================================

// Lección: Portada del Libro de Mormón
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/02-introductory-pages/021-teacher?lang=spa
export const portadaLibroMormonQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El manual pregunta: '¿Por qué necesitamos el Libro de Mormón si ya tenemos la Biblia?' Según el élder Soares, ¿cuál es el rol específico del Libro de Mormón que la Biblia no cumple de la misma manera?",
    options: [
      "El Libro de Mormón es simplemente una versión más moderna y fácil de leer de la Biblia",
      "El Libro de Mormón es el instrumento de Dios para lograr el recogimiento de Israel en los últimos días",
      "El Libro de Mormón reemplaza a la Biblia para los miembros de la Iglesia",
      "El Libro de Mormón solo añade información histórica que le falta a la Biblia"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según la portada del Libro de Mormón, ¿para quiénes fue escrito y con qué dos propósitos principales?",
    options: [
      "Para los lamanitas; para preservar su historia y sus tradiciones culturales",
      "Para el resto de la casa de Israel, judíos y gentiles; para recoger a Israel y convencer a todos de que Jesús es el Cristo",
      "Para los miembros de la Iglesia; para fortalecer su fe y guiar su vida cotidiana",
      "Para el mundo académico; para demostrar la autenticidad de la revelación moderna"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El presidente Nelson dijo que 'si no existiera el Libro de Mormón, la promesa del recogimiento de Israel no podría ocurrir'. ¿Qué nos enseña eso sobre la relación entre este libro y la misión de la Iglesia hoy?",
    options: [
      "Que el Libro de Mormón es principalmente un documento histórico sin impacto misionero actual",
      "Que el Libro de Mormón es una herramienta activa e insustituible en la obra de Dios en estos días, no solo un texto de estudio",
      "Que el recogimiento de Israel depende principalmente de los misioneros, y el Libro de Mormón es secundario",
      "Que el recogimiento de Israel ya ocurrió y el Libro de Mormón cumplió su función"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "La lección usa el ejemplo de una herramienta desconocida para ilustrar la importancia de entender el propósito del Libro de Mormón antes de usarlo. ¿Qué implica esa analogía para cómo deberíamos acercarnos al libro?",
    options: [
      "Que el Libro de Mormón es tan complicado que necesitamos expertos para entenderlo",
      "Que conocer los propósitos del libro transforma cómo lo leemos y qué buscamos en él",
      "Que el Libro de Mormón tiene un solo uso correcto y todos los demás son equivocados",
      "Que solo los que ya conocen la Iglesia pueden beneficiarse de leerlo"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Camila tiene un amigo que le pregunta: '¿Por qué tu Iglesia se enfoca tanto en el Libro de Mormón si ya tienen la Biblia?' Según los propósitos de la portada y la enseñanza del élder Soares, ¿cuál sería la respuesta más completa?",
    options: [
      "Que la Biblia tiene errores y el Libro de Mormón los corrige",
      "Que el Libro de Mormón tiene un propósito único: recoger a Israel y testificar de Cristo de una manera que la Biblia sola no puede cumplir en los últimos días",
      "Que el Libro de Mormón es más fácil de leer que la Biblia para los jóvenes modernos",
      "Que ambos libros son idénticos en propósito y contenido, solo que el Libro de Mormón es más reciente"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Tomás nunca ha leído el Libro de Mormón y lo ve como un libro religioso más. Después de estudiar esta lección, ¿qué podría hacer esta semana que demostraría que entendió su propósito?",
    options: [
      "Comprar una edición más bonita del libro para tenerlo en su habitación",
      "Empezar a leerlo con la intención de conocer a Jesucristo y con la promesa de Moroni 10:4–5 en mente",
      "Recomendarle a un amigo que lo lea sin haberlo leído él mismo primero",
      "Asistir a la Iglesia más frecuentemente para aprender sobre el libro de segunda mano"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "La portada declara que el libro se escribió para 'convencer a todos de que Jesús es el Cristo'. El élder Soares añade que es el instrumento para el recogimiento de Israel. ¿Cuál es el principio que une ambos propósitos?",
    options: [
      "Que el libro tiene dos propósitos contradictorios que se equilibran entre sí",
      "Que el libro tiene un único propósito central: llevar personas a Jesucristo, tanto al testificar de Él como al recoger a Su pueblo convenantal",
      "Que el recogimiento de Israel y el testimonio de Cristo son objetivos independientes del libro",
      "Que el libro tiene un propósito histórico y otro espiritual que no se relacionan entre sí"
    ],
    correctAnswer: 1,
  }
];

// Lección: Introducción al Libro de Mormón
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/02-introductory-pages/022-teacher?lang=spa
export const introduccionLibroMormonQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El presidente Ezra Taft Benson usó la imagen de la 'piedra clave' de un arco para describir el Libro de Mormón. ¿Qué característica específica de una piedra clave hace que esa analogía sea tan poderosa?",
    options: [
      "Que es la piedra más grande del arco",
      "Que es la piedra más antigua de la construcción",
      "Que es la piedra central que sostiene todas las demás; si se retira, el arco entero se derrumba",
      "Que es la piedra más visible y decorativa del arco"
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según el élder Stevenson, ¿con qué frecuencia aparece el nombre de Cristo o alguna referencia a Él en el Libro de Mormón?",
    options: [
      "Cada 10 versículos en promedio",
      "Cada 5 versículos aproximadamente",
      "Una vez por capítulo",
      "Cada 1.7 versículos en promedio"
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El presidente Benson dijo que en el Libro de Mormón 'hay un poder que empezará a fluir' cuando se estudia seriamente. ¿Por qué el libro tiene ese efecto más allá de simplemente informar doctrina?",
    options: [
      "Porque está escrito en un estilo literario que afecta positivamente las emociones",
      "Porque como palabra de Dios, al recibirla con fe activa el poder del Espíritu Santo que testifica y transforma",
      "Porque contiene fórmulas mágicas que actúan independientemente de la fe del lector",
      "Porque su contenido histórico inspira admiración y eso produce cambio de comportamiento"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "El presidente Nelson prometió que estudiar el Libro de Mormón cada día 'vacuna' contra adicciones y males de la época. ¿Qué mecanismo doctrinal explicaría ese efecto de protección?",
    options: [
      "Que leer el libro elimina automáticamente los deseos pecaminosos sin esfuerzo personal",
      "Que el contacto diario con las palabras de Cristo fortalece el Espíritu, el cual resiste al hombre natural y sus tentaciones",
      "Que el libro tiene propiedades psicológicas similares a una terapia cognitiva",
      "Que la promesa del presidente Nelson es solo para personas que ya tienen un testimonio fuerte"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Luca lee el Libro de Mormón solo cuando tiene tiempo, unas pocas veces al mes. El presidente Nelson prometió beneficios específicos para quienes lo estudian cada día. Según esta lección, ¿qué diferencia haría el cambio de 'ocasional' a 'diario'?",
    options: [
      "Ninguna diferencia significativa, porque la cantidad no importa tanto como la calidad ocasional",
      "La frecuencia diaria crea una exposición constante a las palabras de Cristo que produce las promesas específicas: mejores decisiones, respuestas a preguntas y protección espiritual",
      "Solo importaría si Luca también ayuna simultáneamente mientras lee",
      "La diferencia sería solo en cuántas páginas conoce, no en el impacto espiritual"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Un compañero le dice a Valentina: 'Si el Libro de Mormón fuera verdadero, la Iglesia no necesitaría seguir insistiendo tanto en que la gente lo lea'. ¿Cómo respondería Valentina usando lo que aprendió sobre la 'piedra clave'?",
    options: [
      "Que tiene razón, y que una fe madura no necesita el libro tanto como los principiantes",
      "Que precisamente porque es la piedra clave que sostiene el testimonio de la Restauración, su lectura continua es lo que mantiene el arco de la fe en pie",
      "Que la Iglesia insiste en leerlo por tradición, no necesariamente por razones doctrinales",
      "Que el libro ya cumplió su propósito histórico y ahora es más un símbolo que una guía práctica"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "El presidente Benson dijo que el Libro de Mormón 'testifica de Cristo con poder y claridad'. El presidente Nelson añadió que las ventanas del cielo se abren cuando se estudia con oración. ¿Cuál es el principio que conecta ambas promesas?",
    options: [
      "Que el libro actúa como un talismán que produce bendiciones independientemente de cómo se use",
      "Que el libro es tanto fuente de revelación personal como testigo de Cristo, y ambas funciones se activan juntas mediante el estudio con oración y fe",
      "Que la promesa de ventanas abiertas aplica solo a la lectura pública y colectiva del libro",
      "Que el testimonio de Cristo y la revelación personal son beneficios alternativos, no simultáneos"
    ],
    correctAnswer: 1,
  }
];

// Lección: El testimonio de José Smith
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/02-introductory-pages/023-teacher?lang=spa
export const testimonioJoseSmithQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El élder Soares explicó que el proceso de traducción del Libro de Mormón fue diferente a una traducción académica normal. ¿Cómo lo describió específicamente?",
    options: [
      "Como un proceso de decodificación mediante conocimiento del idioma egipcio reformado",
      "Como una revelación asistida por instrumentos físicos proporcionados por el Señor, no una traducción por experto en idiomas",
      "Como un proceso de escritura automática guiada por el Espíritu sin instrumentos",
      "Como una traducción colectiva hecha por José Smith y Oliver Cowdery trabajando juntos"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Emma Smith, esposa de José, describió el proceso de dictado. ¿Qué característica específica del proceso mencionó que evidencia su naturaleza divina?",
    options: [
      "Que José siempre tenía las planchas abiertas frente a él mientras dictaba",
      "Que José escribía primero y luego dictaba lo escrito",
      "Que José dictaba sin ver el manuscrito y al retomar el trabajo continuaba exactamente donde lo había dejado, sin releer",
      "Que Emma verificaba cada palabra con el texto original en el idioma antiguo"
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "D. y C. 135:3 dice que José produjo el Libro de Mormón 'por el don y el poder de Dios'. ¿Por qué es significativa esa descripción a la luz de lo que sabemos sobre las capacidades educativas de José Smith en ese momento?",
    options: [
      "Porque José era un erudito experto en literatura y teología, por lo que necesitaba ayuda divina para un libro tan sencillo",
      "Porque José tenía educación limitada, lo que hace aún más notable producir un texto tan extenso y teológicamente coherente",
      "Porque José había estudiado idiomas antiguos en la universidad antes de recibir las planchas",
      "Porque la complejidad del libro es indiferente al nivel educativo del traductor"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "El presidente Oaks mencionó que José enfrentó rechazos de varias imprentas antes de publicar el libro. ¿Qué principio ilustra ese proceso de dificultades antes del éxito?",
    options: [
      "Que Dios abandona a Sus siervos cuando el camino se pone difícil",
      "Que el Señor hace el camino posible aunque no siempre lo hace fácil, y las dificultades forman parte del proceso",
      "Que José debería haber buscado otra forma de publicar sin perseverar en los rechazos",
      "Que los rechazos de las imprentas prueban que el libro no era de origen divino"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Sofía tiene un amigo que le dice: 'José Smith simplemente inventó el Libro de Mormón; era un hombre inteligente que leyó mucho'. Basándote en el testimonio de Emma y el análisis del proceso de traducción, ¿qué evidencia concreta podría compartir Sofía?",
    options: [
      "Que José era demasiado joven para inventar algo así, lo cual prueba que fue divino",
      "Que José dictaba sin ver el manuscrito y retomaba exactamente donde había dejado, sin notas, lo que no es consistente con una invención o plagio",
      "Que el libro es demasiado largo para haberlo inventado, lo cual es evidencia suficiente",
      "Que otros profetas también escribieron libros extensos, así que no es sorprendente"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Mateo enfrenta algo muy difícil que Dios le ha pedido hacer, pero siente que el obstáculo es demasiado grande. Según el principio que ilustra la historia de las imprentas rechazadas, ¿qué podría recordar?",
    options: [
      "Que si Dios realmente lo quisiera, no habría obstáculos en el camino",
      "Que el Señor no prometió que el camino sería fácil, pero sí que lo haría posible para quienes confían en Él y perseveran",
      "Que los obstáculos son señal de que debería buscar un camino diferente",
      "Que la dificultad del camino indica que Dios cambió Su plan para él"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "Tanto el proceso milagroso de traducción descrito por Emma como las profecías de 2 Nefi 27 sobre los testigos del libro apuntan a lo mismo. ¿Cuál es el principio unificador?",
    options: [
      "Que el Libro de Mormón fue diseñado para ser difícil de creer y así probar la fe de las personas",
      "Que Dios preparó múltiples evidencias de la autenticidad divina del libro, desde el proceso de producción hasta los testigos, para que nadie tuviera que creer solo en una palabra",
      "Que los milagros relacionados con el libro son principalmente para fortalecer la fe de los que ya creen",
      "Que el proceso de traducción y los testimonios de los testigos son independientes y no se refuerzan entre sí"
    ],
    correctAnswer: 1,
  }
];

// Lección: Los Testimonios de Tres Testigos y Ocho Testigos
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/02-introductory-pages/024-teacher?lang=spa
export const testigosLibroMormonQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El manual menciona que David Whitmer, Martin Harris y Oliver Cowdery contribuyeron de formas concretas a la salida a luz del Libro de Mormón. ¿Cuál de los siguientes describe la contribución de Martin Harris?",
    options: [
      "Permitió que José y Emma vivieran en su casa durante la traducción",
      "Sirvió como escribiente principal durante la mayor parte de la traducción",
      "Hipotecó su granja para pagar los costos de impresión del libro",
      "Proveyó los materiales de escritura usados durante la traducción"
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según el manual, ¿cuántos de los once testigos (Tres y Ocho) negaron eventualmente su testimonio de las planchas, incluso aquellos que se alejaron de la Iglesia?",
    options: [
      "Todos los que se alejaron de la Iglesia negaron su testimonio",
      "Aproximadamente la mitad lo negó bajo presión",
      "Solo uno de los once negó su testimonio antes de morir",
      "Ninguno de los once testigos negó jamás su testimonio de las planchas"
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "Los Tres Testigos vieron un ángel y oyeron la voz de Dios. Los Ocho Testigos tocaron físicamente las planchas. ¿Por qué es significativo que Dios proveyera dos tipos distintos de experiencia testimonial?",
    options: [
      "Porque Dios quería dar más información a unos que a otros según su nivel espiritual",
      "Porque cubrir tanto la experiencia espiritual-angelical como la física hace más difícil rechazar ambos testimonios simultáneamente con el mismo argumento",
      "Porque los Ocho Testigos no eran suficientemente dignos para ver al ángel como los Tres",
      "Porque el ángel se negó a mostrarse a más de tres personas al mismo tiempo"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "El presidente Faust dijo que llegar al conocimiento del Salvador mediante la fe y el Espíritu 'es aún más importante que ver ángeles'. ¿Qué implicación tiene eso para nosotros hoy, que no tenemos acceso físico a las planchas?",
    options: [
      "Que estamos en desventaja espiritual respecto a los once testigos",
      "Que nuestro testimonio obtenido mediante fe y el Espíritu Santo puede ser igual o más profundo que el de quienes tuvieron manifestaciones físicas",
      "Que deberíamos pedir señales físicas similares a las que recibieron los testigos",
      "Que la experiencia de los testigos es irrelevante para nuestra fe personal"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Luca dice: 'Si yo hubiera visto las planchas como los testigos, entonces sí creería sin dudas'. Según la enseñanza del presidente Faust y el ejemplo de algunos testigos que se alejaron de la Iglesia, ¿qué problema tiene ese razonamiento?",
    options: [
      "Ninguno, ver las planchas garantizaría una fe permanente e inamovible",
      "Que algunos testigos las vieron o tocaron y aun así se alejaron temporalmente, mostrando que la experiencia física no reemplaza al testimonio espiritual sostenido por el Espíritu",
      "Que las planchas ya no existen, así que ese escenario es imposible de considerar",
      "Que el argumento de Luca es perfectamente válido y Dios debería proveer señales físicas a quienes las piden sinceramente"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Valentina quiere obtener su propio testimonio del Libro de Mormón. Según lo que aprendió sobre los testigos y la promesa de Moroni 10:4–5, ¿qué pasos concretos podría dar esta semana?",
    options: [
      "Investigar en internet la evidencia arqueológica que apoya el libro",
      "Leer el Libro de Mormón con sinceridad, registrar lo que siente, y preguntar a Dios con fe si es verdadero",
      "Esperar a que alguien le comparta su propio testimonio para ver si se siente bien con él",
      "Completar la lectura completa del libro antes de pedir confirmación al Señor"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "2 Nefi 27:12–14 profetizó siglos antes que habría testigos de las planchas. El hecho de que esa profecía se cumplió exactamente, ¿qué añade a la evidencia de la autenticidad del Libro de Mormón?",
    options: [
      "Nada, porque cualquier profecía general sobre testigos podría cumplirse por coincidencia",
      "Que el mismo libro que profetizó los testigos fue traducido con ellos presentes, creando un bucle de autenticación mutuamente reforzado",
      "Que las profecías de Nefi fueron escritas después de los hechos para que parecieran predicciones",
      "Que la profecía solo aplica a los Tres Testigos, no a los Ocho"
    ],
    correctAnswer: 1,
  }
];

// Lección: Adquirir conocimiento espiritual: Parte 2
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/02-introductory-pages/025-teacher?lang=spa
export const conocimientoEspiritual2Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "El manual describe el segundo principio para adquirir conocimiento espiritual. ¿Cuál es ese principio?",
    options: [
      "Procurar comprensión mediante fuentes divinamente señaladas",
      "Actuar con fe antes de tener todas las respuestas",
      "Analizar los conceptos y las preguntas con una perspectiva eterna",
      "Buscar la guía de los profetas locales antes de orar"
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "El presidente Dallin H. Oaks usó la imagen de una obra de teatro de tres actos para describir la perspectiva eterna. ¿En qué acto dijo que se encuentra la vida mortal?",
    options: [
      "En el primer acto, que define el propósito de todo lo que viene después",
      "En el segundo acto, cuyo propósito viene definido por el primero y el tercero",
      "En el tercer acto, donde se revelan todos los resultados finales",
      "En una pausa entre el primer y el segundo acto"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El manual describe el ejercicio de 'reformular preguntas': identificar supuestos detrás de una pregunta y evaluarlos en el contexto del Plan de Salvación. ¿Cuál sería un ejemplo de cómo eso funciona en una pregunta real?",
    options: [
      "Cambiar '¿por qué Dios permitió este sufrimiento?' por '¿cómo puedo evitar el sufrimiento?'",
      "Cambiar '¿por qué la vida es injusta?' por '¿qué está aprendiendo mi espíritu en esta circunstancia eterna?'",
      "Ignorar la pregunta difícil y reemplazarla por una más sencilla",
      "Buscar en internet una respuesta académica a la pregunta original"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "La lección usa el ejercicio de mirar a través de un agujero pequeño en un papel y luego tratar de atrapar un objeto. ¿Qué ilustra ese ejercicio sobre la perspectiva limitada sin el Plan de Salvación?",
    options: [
      "Que la perspectiva más pequeña siempre es más precisa que la visión amplia",
      "Que sin el contexto del plan eterno, tomamos decisiones importantes con información drásticamente incompleta",
      "Que la perspectiva eterna nos hace ignorar los problemas terrenales inmediatos",
      "Que solo los líderes de la Iglesia tienen acceso a la perspectiva completa"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Camila está enojada porque su oración por sanar a su abuela no fue contestada como esperaba. Desde una perspectiva solo terrenal, siente que Dios no existe o no le importa. ¿Cómo podría el principio de 'perspectiva eterna' ayudarle a reformular su pregunta?",
    options: [
      "Diciéndole que sus sentimientos no son válidos y que debe aceptar todo sin cuestionarlo",
      "Ayudándola a considerar que la vida mortal es el segundo acto de tres, y que la muerte de su abuela tiene un contexto eterno que incluye la resurrección y la continuidad del amor",
      "Diciéndole que Dios no contesta todas las oraciones porque algunas no son lo suficientemente sinceras",
      "Sugiriéndole que deje de orar hasta que tenga más fe"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Mateo tiene un amigo que le pregunta: '¿Para qué sirve el Plan de Salvación en la vida real?' Según lo que aprendió en esta lección sobre la perspectiva eterna, ¿qué ejemplo concreto podría dar?",
    options: [
      "Que el Plan de Salvación es principalmente para después de morir, no para la vida cotidiana",
      "Que el Plan de Salvación cambia cómo interpretamos las dificultades presentes, porque las vemos en el contexto de quiénes somos y hacia dónde vamos eternamente",
      "Que el Plan de Salvación es un conjunto de reglas que nos dice cómo comportarnos en situaciones específicas",
      "Que el Plan de Salvación solo importa a las personas mayores que están más cerca de la muerte"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "Alma respondió las preguntas difíciles de Coriantón (Alma 40–42) sobre la resurrección y la justicia de Dios usando el contexto del Plan de Salvación. ¿Cómo ejemplifica eso el principio de esta lección?",
    options: [
      "Que las preguntas difíciles deben ignorarse para proteger la fe",
      "Que las preguntas espirituales difíciles tienen respuestas más satisfactorias cuando se analizan dentro del marco del plan eterno de Dios, no solo desde la perspectiva terrenal",
      "Que solo los profetas como Alma pueden responder preguntas difíciles sobre el Evangelio",
      "Que las preguntas de Coriantón eran simplemente señal de falta de fe, no de pensamiento genuino"
    ],
    correctAnswer: 1,
  }
];

// ============================================================================
// SEMANA 3
// ============================================================================

// Lección: 2 Nefi 31:14–21
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/13-2-nephi-31-33/132-teacher?lang=spa
export const nefi31_14_21Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "Según 2 Nefi 31:20, ¿con qué tres elementos debemos seguir adelante en el camino hacia la vida eterna?",
    options: [
      "Con sabiduría, poder y conocimiento de las Escrituras",
      "Con perfecta claridad de esperanza, amor a Dios y amor a todos los hombres",
      "Con ayuno, oración y asistencia a las reuniones",
      "Con humildad, paciencia y obediencia a los líderes"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "La lección menciona el ejemplo de una maratón para ilustrar el mensaje de 2 Nefi 31. ¿Qué lección específica ilustra esa analogía sobre el trayecto hacia la vida eterna?",
    options: [
      "Que el camino espiritual requiere entrenamiento físico además del espiritual",
      "Que el camino es largo y requiere perseverancia sostenida, no solo un buen comienzo",
      "Que solo los que son naturalmente fuertes pueden completar el camino",
      "Que el destino final no importa tanto como el disfrute del trayecto"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "2 Nefi 31:20 dice que debemos seguir adelante 'deleitándonos en la palabra de Cristo'. ¿Por qué el texto usa 'deleitarnos' en lugar de simplemente 'leer' o 'estudiar' la palabra?",
    options: [
      "Porque 'deleitarse' es solo una forma más poética de decir lo mismo que 'leer'",
      "Porque el deleite implica una relación activa, gozosa y personal con la palabra, no solo su recepción pasiva",
      "Porque la palabra de Cristo solo beneficia a quienes la leen con emociones positivas",
      "Porque el deleite espiritual requiere haber alcanzado un nivel avanzado de fe"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "Nefi pregunta en 2 Nefi 31:19: '¿Hemos hecho bastante?' y luego responde que no, que debemos seguir. ¿Qué enseña eso sobre la naturaleza del progreso espiritual en la mortalidad?",
    options: [
      "Que nunca podremos hacer suficiente y eso debería desesperanzarnos",
      "Que el progreso espiritual en la mortalidad es un proceso continuo que no termina con un solo logro o decisión",
      "Que los mandamientos son una carga imposible de cumplir completamente",
      "Que solo al final de la vida podremos evaluar si hicimos suficiente"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Tomás se bautizó hace tres años pero desde entonces siente que 'ya cumplió' y se relaja cada vez más en sus hábitos espirituales. Según 2 Nefi 31:19–20, ¿qué problema identifica esa actitud?",
    options: [
      "Ninguno; el bautismo garantiza las bendiciones prometidas independientemente de lo que haga después",
      "Que el bautismo es el comienzo del camino, no la meta; seguir adelante con firmeza en Cristo es lo que conduce a la vida eterna",
      "Que debería bautizarse de nuevo para renovar su compromiso",
      "Que la relajación espiritual solo afecta a quienes tienen una fe débil desde el inicio"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Sofía siente que el camino del Evangelio es demasiado difícil y considera renunciar. Según el principio de esta lección sobre perseverar hasta el fin, ¿qué recordatorio concreto le daría?",
    options: [
      "Que el camino debería ser fácil, y si es difícil probablemente no es el camino correcto",
      "Que el Padre Celestial y Cristo no la han dejado sola; que siguen adelante juntos y que la dificultad no es señal de abandono divino",
      "Que debería bajar sus expectativas espirituales para que el camino se sienta menos agotador",
      "Que solo las personas con fe perfecta pueden perseverar, y si le cuesta es señal de que no tiene la fe suficiente"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "2 Nefi 31:20 menciona 'perfecta claridad de esperanza' y 'amor a Dios y a todos los hombres' como ingredientes del seguir adelante. ¿Por qué necesitamos los dos juntos, y qué pasa si tenemos solo uno?",
    options: [
      "Son equivalentes y cualquiera de los dos por separado produce el mismo efecto",
      "La esperanza sin amor puede volverse egoísta; el amor sin esperanza puede agotarse; juntos se sostienen mutuamente en el camino largo",
      "El amor es más importante que la esperanza y puede reemplazarla en situaciones difíciles",
      "La esperanza y el amor son virtudes independientes que no se relacionan entre sí en el camino espiritual"
    ],
    correctAnswer: 1,
  }
];

// Lección: 2 Nefi 32:1–7
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/13-2-nephi-31-33/133-teacher?lang=spa
export const nefi32_1_7Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "Según 2 Nefi 32:3, ¿qué promesa hace este versículo a quienes se deleitan en las palabras de Cristo?",
    options: [
      "Que recibirán visions y manifestaciones del Espíritu Santo con frecuencia",
      "Que las palabras de Cristo les dirán todas las cosas que deben hacer",
      "Que serán protegidos de todas las pruebas de la vida mortal",
      "Que sus oraciones serán contestadas inmediatamente"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según 2 Nefi 32:5, ¿qué papel tiene el Espíritu Santo después del bautismo y la confirmación?",
    options: [
      "Verificar que hemos guardado todos los mandamientos correctamente",
      "Comunicar solo información doctrinal sin guía práctica personal",
      "Enseñarnos todo lo que debemos hacer, como extensión del don recibido por confirmación",
      "Actuar únicamente cuando pedimos ayuda en situaciones de emergencia"
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "Nefi pregunta en 2 Nefi 32:7: '¿De qué manera es posible que no habléis la palabra de Cristo?' ¿Qué actitud está cuestionando Nefi con esa pregunta retórica?",
    options: [
      "La costumbre de hablar demasiado sobre el Evangelio en contextos inapropiados",
      "El silencio o la inacción de quienes conocen las palabras de Cristo pero no las comparten ni las aplican",
      "La tendencia a citar las Escrituras sin entender su contexto histórico",
      "La práctica de predicar el Evangelio a personas que no lo han pedido"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "La lección plantea que quienes reciben el don del Espíritu Santo tienen acceso a guía personal constante. ¿Por qué muchas personas que tienen ese don no experimentan esa guía de manera regular?",
    options: [
      "Porque el don del Espíritu Santo solo funciona en personas con experiencia religiosa avanzada",
      "Porque el don requiere que nos deleitemos en las palabras de Cristo para crear las condiciones que permiten al Espíritu enseñarnos",
      "Porque la guía del Espíritu solo se activa en momentos de crisis o peligro extremo",
      "Porque Dios reserva la guía específica del Espíritu para situaciones que afectan a muchas personas"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Valentina enfrenta una decisión difícil —cambiar de escuela o no— y no sabe qué hacer. Según 2 Nefi 32:3 y 32:5, ¿qué proceso concreto podría seguir para recibir guía?",
    options: [
      "Preguntar a todos sus amigos y familiares para tomar la decisión más popular",
      "Estudiar las Escrituras para entender los principios relevantes, orar al respecto, y estar atenta a los impulsos del Espíritu que le mostrarán qué hacer",
      "Esperar hasta que la situación se resuelva sola sin necesidad de decidir",
      "Hacer una lista de pros y contras y elegir la opción que tenga más ventajas materiales"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Luca dice que lee las Escrituras todos los días pero nunca siente guía específica para sus problemas cotidianos. Según los principios de esta lección, ¿qué elemento podría estar faltando?",
    options: [
      "Que necesita leer más páginas por día para recibir guía específica",
      "Que quizás lee de forma mecánica sin deleitarse genuinamente; la guía del Espíritu llega al que lee buscando activamente las palabras de Cristo para aplicarlas",
      "Que las Escrituras no están diseñadas para dar guía en problemas cotidianos específicos",
      "Que necesita esperar más tiempo después de leer para que la guía llegue"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "2 Nefi 32:3 (las palabras de Cristo nos dirán qué hacer) y 2 Nefi 32:5 (el Espíritu Santo nos enseñará todo) describen dos fuentes de guía. ¿Cuál es la relación entre ambas?",
    options: [
      "Son alternativas independientes: podemos elegir una u otra según nuestra preferencia",
      "Las palabras de Cristo en las Escrituras y la guía del Espíritu Santo trabajan juntas, siendo el Espíritu quien ilumina las palabras y las aplica a nuestra situación personal",
      "Las palabras de Cristo son para situaciones generales y el Espíritu solo habla en emergencias",
      "El Espíritu Santo hace innecesario el estudio de las Escrituras porque puede revelarnos todo directamente"
    ],
    correctAnswer: 1,
  }
];

// Lección: Dominio de la doctrina: 2 Nefi 32:3
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/13-2-nephi-31-33/134-teacher?lang=spa
export const ddNefi32_3Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "Completa el versículo: '___; porque he aquí, las palabras de Cristo os dirán todas las cosas que debéis hacer.'",
    options: [
      "Leed las palabras de Cristo con diligencia",
      "Deleitaos en las palabras de Cristo",
      "Escuchad las palabras de Cristo con atención",
      "Guardaréis las palabras de Cristo en vuestro corazón"
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "¿Cuál es la referencia exacta de este pasaje de Dominio de la doctrina?",
    options: [
      "1 Nefi 15:24",
      "2 Nefi 31:20",
      "2 Nefi 32:3",
      "Moroni 10:4"
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El versículo promete que las palabras de Cristo nos dirán 'todas las cosas que debemos hacer'. ¿Esto significa que encontraremos respuestas explícitas a cada situación específica de nuestra vida en las Escrituras?",
    options: [
      "Sí, la Biblia y el Libro de Mormón contienen instrucciones explícitas para cada decisión posible",
      "No exactamente; las Escrituras enseñan principios que, junto con el Espíritu Santo, nos guían en situaciones específicas que el texto nunca menciona",
      "Solo si leemos el texto en el idioma original en que fue escrito",
      "Solo para decisiones espirituales, no para decisiones prácticas cotidianas"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "El manual sugiere explicar este versículo a alguien que no es miembro de la Iglesia. ¿Cuál sería el elemento más sorprendente de la promesa para esa persona?",
    options: [
      "Que existe un libro llamado Libro de Mormón además de la Biblia",
      "Que Dios se comunica directamente con las personas ordinarias a través de Sus palabras, no solo a través de intermediarios religiosos",
      "Que la Iglesia tiene reuniones donde se estudian las Escrituras",
      "Que hay versículos que deben memorizarse en el programa de Seminario"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Camila está en una situación en la que no sabe si decir la verdad o no decir nada para no herir a una amiga. No encuentra un versículo exacto sobre esa situación. Según el principio de 2 Nefi 32:3, ¿qué proceso podría usar?",
    options: [
      "Buscar en internet qué dice la Iglesia sobre casos similares",
      "Leer pasajes sobre honestidad, veracidad y amor en las Escrituras, meditar en los principios que emergen, y pedir guía del Espíritu para su situación específica",
      "Ignorar las Escrituras porque no hablan directamente de su caso",
      "Preguntarle al obispo antes de tomar cualquier decisión personal"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Tomás tiene que elegir entre dos actividades: ir al partido de fútbol de sus amigos o asistir a una actividad de la Iglesia. ¿Cómo podría usar 2 Nefi 32:3 en esta semana para que le ayude en ese tipo de decisiones?",
    options: [
      "Leer el versículo una vez para sentir que cumplió con su estudio y luego decidir por intuición",
      "Estudiar las Escrituras deliberadamente esta semana para cultivar el contacto con las palabras de Cristo, que formarán su criterio cuando lleguen decisiones como esa",
      "Buscar en las Escrituras un versículo que diga explícitamente qué hacer en esa situación",
      "Delegar la decisión a sus padres porque no es su responsabilidad aún"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "2 Nefi 32:3 dice que las palabras de Cristo nos dirán 'todas las cosas'. 2 Nefi 32:5 dice que el Espíritu nos enseñará 'todo'. ¿Son dos promesas redundantes o tienen roles distintos?",
    options: [
      "Son completamente redundantes; cualquiera de las dos sola es suficiente",
      "Las palabras de Cristo forman el fundamento de principios y el Espíritu los aplica personalmente a cada situación; ambas fuentes son necesarias y se complementan",
      "Las palabras de Cristo son superiores al Espíritu y bastan solas para guiarnos",
      "El Espíritu es superior a las palabras escritas y hace innecesario el estudio constante de las Escrituras"
    ],
    correctAnswer: 1,
  }
];

// Lección: 2 Nefi 32:8–9
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/13-2-nephi-31-33/135-teacher?lang=spa
export const nefi32_8_9Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "Según 2 Nefi 32:8, ¿qué hace el diablo para alejarnos de la oración?",
    options: [
      "Nos da demasiadas cosas buenas para que no necesitemos pedir ayuda",
      "Nos enseña que no debemos orar, sino actuar por nuestra propia cuenta",
      "Nos tienta a creer que no debemos orar, endureciendo nuestro corazón contra el Padre",
      "Nos convence de que somos indignos de hablar con el Padre Celestial"
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según 2 Nefi 32:9, ¿qué efecto tiene la oración sobre las acciones que realizamos?",
    options: [
      "Garantiza que todas nuestras decisiones serán correctas sin importar nuestra intención",
      "El Padre consagrará nuestras acciones para el bienestar de nuestras almas",
      "Nos hace invulnerables a las tentaciones durante ese día",
      "Elimina las consecuencias de los errores que cometamos después de orar"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "Nefi pregunta retóricamente por qué no hablan la palabra de Cristo. ¿Cómo se conecta esa pregunta con la exhortación de 'orar siempre' en el versículo 9?",
    options: [
      "No se conectan; son enseñanzas independientes sobre temas distintos",
      "Tanto hablar la palabra de Cristo como orar son formas de mantener una comunicación viva y constante con el Padre, no solo en momentos formales",
      "La oración constante reemplaza la necesidad de hablar las palabras de Cristo",
      "Hablar la palabra de Cristo es una forma de oración que hace innecesaria la oración formal"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "La lección enseña que el Espíritu Santo nos muestra lo que debemos orar. ¿Qué implica eso sobre la naturaleza de la oración sincera?",
    options: [
      "Que nuestras propias palabras no tienen valor en la oración si no están inspiradas",
      "Que la oración más efectiva no es solo un monólogo preparado, sino una comunicación receptiva donde el Espíritu ayuda a articular lo que realmente necesitamos",
      "Que deberíamos usar solo fórmulas de oración prescritas para asegurar su efectividad",
      "Que las oraciones improvisadas son superiores a las preparadas de antemano"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Sofía tiene el hábito de rezar brevemente cada noche antes de dormir pero nunca siente que sus oraciones sean reales o útiles. Según los principios de 2 Nefi 32:8–9, ¿qué podría cambiar en su práctica?",
    options: [
      "Aumentar la duración de sus oraciones a al menos 30 minutos por noche",
      "Orar en momentos del día cuando está más alerta, pedir guía del Espíritu sobre qué decir, y buscar que sus acciones diarias estén consagradas al bien de su alma",
      "Usar un libro de oraciones escritas para que sus palabras sean más perfectas",
      "Dejar de orar formalmente y solo hablar con Dios de manera mental durante el día"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Mateo tuvo un día muy ocupado y cuando llega a casa se da cuenta de que nunca oró. Su amigo le dice: 'No importa, Dios sabe lo que necesitas aunque no le pidas'. ¿Cómo responde el principio de 2 Nefi 32:8–9 a esa perspectiva?",
    options: [
      "Que el amigo tiene razón, y que Dios da las bendiciones de igual manera con o sin oración",
      "Que el diablo enseña exactamente eso para endurecernos el corazón; la oración no es solo transmitir información a Dios sino mantener la conexión activa que consagra nuestras acciones",
      "Que Dios solo ayuda a quienes oran formalmente al menos dos veces al día",
      "Que la oración es opcional para personas que ya tienen un testimonio fuerte"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "Las tres lecciones de la semana 3 cubren seguir adelante (2 Nefi 31), deleitarse en las palabras de Cristo (2 Nefi 32:3), y orar siempre (2 Nefi 32:8–9). ¿Cuál es el principio que une las tres enseñanzas?",
    options: [
      "Que el camino espiritual depende de un conjunto de rituales religiosos externos",
      "Que la perseverancia en el camino del Evangelio requiere una relación activa y continua con Cristo: a través de Sus palabras, a través de la oración, y con claridad de esperanza y amor",
      "Que las tres son enseñanzas independientes que deben aplicarse en diferentes etapas de la vida",
      "Que solo una de las tres es verdaderamente esencial y las otras son complementarias"
    ],
    correctAnswer: 1,
  }
];

// Lección: Dominio de la doctrina: 2 Nefi 32:8–9
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/14-jacob-1-4/141-teacher?lang=spa
export const ddNefi32_8_9Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "Completa el versículo: 'Y ahora bien, hijos míos, ____ siempre al Padre en mi nombre; y lo que sea que pidáis que sea justo, en fe creyendo que recibiréis, he aquí, os será dado.'",
    options: [
      "alabad",
      "escuchad",
      "orad",
      "buscad"
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "Según 2 Nefi 32:8, ¿qué les enseña el diablo específicamente a los hombres para alejarlos de Dios?",
    options: [
      "Que deben orar solo en lugares sagrados",
      "Que no deben orar, endureciendo su corazón",
      "Que la oración es solo para los débiles que no pueden resolver sus problemas solos",
      "Que la oración formal es menos efectiva que los pensamientos mentales"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El versículo dice que el Padre 'consagrará' nuestras acciones cuando oramos. ¿Qué significa 'consagrar' una acción en este contexto?",
    options: [
      "Hacer que la acción sea perfecta y sin defectos",
      "Transformar nuestros esfuerzos imperfectos para que obren para el bienestar de nuestra alma, añadiendo el poder de Dios a lo que hacemos",
      "Garantizar que la acción tendrá éxito desde una perspectiva mundana",
      "Hacer que otras personas aprueben y valoren lo que hacemos"
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "El manual sugiere que este versículo puede usarse para ayudar a alguien que pregunta: '¿Para qué sirve orar si Dios ya sabe lo que necesito?' ¿Cuál sería la respuesta más fiel a la doctrina de este versículo?",
    options: [
      "Que la oración es principalmente para informar a Dios de nuestras necesidades, ya que aunque lo sabe, necesita que lo digamos",
      "Que la oración no es solo comunicar información sino una conexión activa que el diablo busca interrumpir y que, cuando se mantiene, consagra nuestra vida",
      "Que Dios en realidad no sabe todo y la oración le provee información necesaria",
      "Que la oración es una tradición religiosa útil psicológicamente pero sin impacto espiritual real"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Valentina tiene un amigo que le dice que no ora porque 'no siente que sirva de algo'. Ella quiere usar 2 Nefi 32:8–9 para ayudarle. ¿Cuál sería el punto más importante que podría compartir?",
    options: [
      "Que si ora suficientes veces, eventualmente sentirá algo que le convencerá de que funciona",
      "Que el diablo específicamente enseña que la oración no sirve para endurecer el corazón, lo cual sugiere que la oración tiene un poder real que él quiere bloquear",
      "Que la oración es obligatoria para los miembros de la Iglesia, independientemente de si sirve o no",
      "Que la oración solo sirve si se hace en el idioma correcto y con las palabras adecuadas"
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Luca memoriza 2 Nefi 32:9 para el Dominio de la doctrina pero nunca ora formalmente. ¿Cuál es la diferencia entre dominar el versículo y dominarlo realmente?",
    options: [
      "No hay diferencia; memorizar el versículo es la meta del Dominio de la doctrina",
      "Dominar el versículo realmente significa que su promesa se está experimentando en la vida porque se practica la oración que describe",
      "El Dominio de la doctrina solo requiere poder recitar el versículo, no aplicarlo",
      "Aplicar el versículo es opcional una vez que se lo ha memorizado"
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "2 Nefi 32:3 dice que las palabras de Cristo nos dicen qué hacer. 2 Nefi 32:9 dice que la oración consagra nuestras acciones. ¿Qué imagen completa de la vida discipular emergen al combinar estas dos promesas?",
    options: [
      "Que podemos elegir una de las dos según nuestra preferencia personal",
      "Que el discipulado requiere tanto recibir dirección a través de las palabras de Cristo como someter esas acciones a Dios mediante la oración, creando un ciclo de guía y consagración",
      "Que las palabras de Cristo son para la cabeza y la oración es para el corazón, y los dos no necesitan conectarse",
      "Que la oración reemplaza eventualmente la necesidad de leer las Escrituras"
    ],
    correctAnswer: 1,
  }
];