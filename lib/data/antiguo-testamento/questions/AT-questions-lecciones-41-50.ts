import type { Question } from "@/lib/types";

// DISTRIBUCIÓN DE correctAnswer (70 preguntas):
// 0 → 18 | 1 → 17 | 2 → 18 | 3 → 17
// Patrón por lección varía para evitar predecibilidad

// ============================================================================
// LECCIÓN 52: Éxodo 25; 35–40
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/17-exodus-35-40-leviticus-1-4-16-19/171-exodus-25-35-40?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 1, 3, 2
// ============================================================================
export const leccion52Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El tabernáculo era la primera estructura sagrada que el Señor mandó construir para habitar entre Su pueblo. ¿Qué lo diferenciaba fundamentalmente de los templos egipcios de la misma época?",
    options: [
      "Que era más grande y ornamentado para demostrar la superioridad del Dios de Israel.",
      "Que era portátil, diseñado para acompañar a un pueblo en movimiento, no para impresionar desde un lugar fijo.",
      "Que estaba construido con materiales extraídos del Mar Rojo como símbolo de la liberación reciente.",
      "Que solo podían entrar los levitas y el resto del pueblo lo contemplaba desde afuera a distancia.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Éxodo 25:8 expresa el propósito central del tabernáculo en las propias palabras del Señor. ¿Cuál fue ese propósito?",
    options: [
      "Que el pueblo tuviera un lugar central donde ofrecer sus diezmos y ofrendas de manera organizada.",
      "Que los sacerdotes levitas tuvieran un espacio dedicado para administrar las leyes del sacrificio.",
      "Que las tribus de Israel tuvieran un símbolo de unidad nacional visible durante los cuarenta años de viaje.",
      "Que el Señor pudiera habitar en medio de Su pueblo, tener una morada entre ellos.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El velo que separaba el lugar santo del lugar santísimo en el tabernáculo fue el mismo tipo de velo que se rasgó de arriba abajo en el momento de la muerte de Jesús (Mateo 27:51). ¿Qué cambio doctrinal señalaba ese desgarre?",
    options: [
      "Que la Expiación de Cristo abrió el acceso directo a la presencia de Dios para todos, no solo para el sumo sacerdote una vez al año.",
      "Que el sistema de sacrificios de animales había terminado y debía ser reemplazado por las ordenanzas del bautismo.",
      "Que el templo físico ya no era necesario porque la Iglesia podía reunirse en cualquier lugar sagrado.",
      "Que el sumo sacerdote judío perdió su autoridad y esa autoridad pasó directamente a los apóstoles de Cristo.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Cada elemento del tabernáculo —el arca, el candelabro, la mesa del pan, el propiciatorio— fue diseñado personalmente por el Señor. ¿Qué enseña eso sobre cómo el Señor usó el tabernáculo para comunicar verdades sobre Jesucristo?",
    options: [
      "Que el Señor prefería las enseñanzas visuales y simbólicas a las palabras escritas durante ese período de la historia.",
      "Que los israelitas eran un pueblo visual que necesitaba objetos tangibles para creer en Dios efectivamente.",
      "Que el tabernáculo era una lección doctrinal tridimensional: cada símbolo apuntaba a algún aspecto de la misión de Cristo que Israel estaba aprendiendo.",
      "Que el diseño divino del tabernáculo garantizaba que cualquier persona que lo visitara recibiría revelación automáticamente.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Agustín visita el templo por primera vez y sale sintiéndose 'confundido porque no entendió todo lo que vio'. El presidente Nelson enseña que todo en el templo está centrado en Jesucristo. ¿Qué podría hacer Agustín para que su próxima visita sea diferente?",
    options: [
      "Pedir a alguien que ya fue que le explique en detalle todo lo que va a ver antes de entrar.",
      "Ir varias veces seguidas hasta que el contenido le resulte familiar y deje de confundirlo.",
      "Prepararse buscando en cada símbolo y ordenanza la conexión con Jesucristo, en lugar de intentar entender todo como información nueva.",
      "Esperar a ser mayor y tener más experiencia espiritual antes de intentar comprender el significado del templo.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Valentina dice que 'el templo queda lejos y no tiene mucho sentido ir si no lo entiende'. El principio de Éxodo 25:8 —que el Señor desea habitar entre Su pueblo— habla directamente a esa actitud. ¿Qué perspectiva le ofrece?",
    options: [
      "Que la distancia física al templo es la principal razón por la que los jóvenes no lo visitan con frecuencia.",
      "Que el templo no es principalmente un lugar de instrucción sino el lugar donde el Señor ha prometido encontrarse con Su pueblo; ir es responder a Su deseo de estar con ella.",
      "Que debería esperar hasta haber estudiado toda la doctrina del templo antes de visitarlo para aprovecharlo mejor.",
      "Que la Iglesia debería construir más templos en lugares accesibles para que los jóvenes puedan ir sin tanto esfuerzo.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El tabernáculo en el desierto y los templos modernos comparten Éxodo 25:8 como su fundamento: 'habitaré en medio de ellos'. Milenios después, el Señor renovó esa promesa en D&C 110:7 cuando aceptó el templo de Kirtland. ¿Qué dice esa continuidad sobre la naturaleza del deseo de Dios hacia Sus hijos?",
    options: [
      "Que el Señor necesita lugares físicos consagrados para poder manifestarse porque Su gloria es demasiado grande para los espacios ordinarios.",
      "Que el número de templos es la señal más confiable del estado espiritual de la Iglesia en cada dispensación.",
      "Que el deseo del Señor de habitar entre Su pueblo no ha cambiado a lo largo de milenios; el templo es Su manera de acercarse en cada época, no solo una institución religiosa.",
      "Que los templos modernos son versiones mejoradas del tabernáculo porque la humanidad es ahora más capaz de recibir revelación que Israel en el desierto.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 53: Levítico, Parte 1
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/17-exodus-35-40-leviticus-1-4-16-19/172-leviticus-part-1?lang=spa
// correctAnswer pattern: 3, 0, 2, 1, 3, 0, 1
// ============================================================================
export const leccion53Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "En Moisés 5:6–7, Adán ofrecía sacrificios de animales por mandamiento divino sin entender completamente el porqué. Cuando un ángel le explicó el significado, ¿cuál fue la razón declarada?",
    options: [
      "Que los sacrificios enseñaban a Israel a valorar lo que poseía al entregarlo al Señor.",
      "Que el derramamiento de sangre era necesario para purificar la tierra que había sido maldita por la caída.",
      "Que el rito los preparaba para la ley de Moisés que vendría siglos después con propósitos adicionales.",
      "Que era 'semejanza del sacrificio del Unigénito del Padre', apuntando desde el principio hacia la Expiación de Cristo.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El animal ofrecido en el holocausto tenía que cumplir requisitos específicos según Levítico 1. ¿Cuáles eran las dos condiciones más importantes para que fuera aceptado?",
    options: [
      "Debía ser macho y sin defecto, ofrecido voluntariamente por el oferente.",
      "Debía ser el animal más valioso del rebaño y entregado al sacerdote antes del amanecer.",
      "Debía ser el primogénito del rebaño y haber cumplido al menos dos años de vida.",
      "Debía ser elegido por el sumo sacerdote y no por la familia que ofrecía el sacrificio.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El oferente ponía sus manos sobre la cabeza del animal antes de que fuera sacrificado (Levítico 1:4). ¿Qué principio sobre la Expiación enseñaba ese gesto específico?",
    options: [
      "Que el sacerdote tenía autoridad para transferir la bendición divina desde el animal hacia la familia.",
      "Que el animal debía ser inspeccionado físicamente antes de ser aceptado como ofrenda válida.",
      "Que los pecados del oferente eran transferidos simbólicamente al animal, que moría en su lugar: un sustituto que prefiguraba a Cristo.",
      "Que el sacrificio era un acto comunitario que involucraba tanto al individuo como a la tribu representada por el sacerdote.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Los sacrificios de Levítico eran repetidos continuamente: diariamente, semanalmente, mensualmente, anualmente. ¿Qué limitación de esos sacrificios repetidos señalaba indirectamente la necesidad de una Expiación diferente?",
    options: [
      "Que el sacrificio del Salvador tendría que realizarse 'una vez para siempre' (Hebreos 9:12) porque ninguna repetición podía cubrir el pecado permanentemente.",
      "Que los animales disponibles eran insuficientes para mantener el ritmo de sacrificios requerido por toda la nación.",
      "Que los sacerdotes cometían errores en la administración de los ritos, lo que hacía que algunos sacrificios fueran inválidos.",
      "Que el costo económico de los sacrificios era demasiado alto para las familias israelitas más pobres.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Adán ofreció sacrificios por mandamiento sin entender completamente el porqué, y obedeció de todas formas. Nicolás dice que no quiere obedecer los mandamientos que 'no tienen sentido todavía'. ¿Qué le diría el ejemplo de Adán?",
    options: [
      "Que debería pedir una explicación a su obispo antes de comprometerse a obedecer mandamientos que no entiende.",
      "Que estudiar más sobre el origen histórico de los mandamientos le ayudaría a entenderlos antes de seguirlos.",
      "Que confiar en el Señor y obedecer aunque no se entienda completamente es también un acto de fe; el entendimiento a menudo viene después de la obediencia, no antes.",
      "Que los mandamientos que no se entienden son probablemente de menor importancia y pueden esperar hasta tener más madurez espiritual.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "3 Nefi 9:19–20 indica que el Señor ya no pide sacrificios de animales sino 'un corazón quebrantado y un espíritu contrito'. ¿Qué significa eso en términos prácticos para Lucía, que siente que 'no tiene nada valioso que ofrecerle al Señor'?",
    options: [
      "Que lo que el Señor más valora no son logros ni dones externos sino la disposición honesta a rendirle la voluntad propia, algo que cualquier persona puede ofrecer.",
      "Que debería buscar maneras de servir en la Iglesia para compensar la falta de otras ofrendas más visibles.",
      "Que el corazón quebrantado es una señal de debilidad espiritual que necesita ser sanado antes de poder acercarse al Señor con confianza.",
      "Que el Señor comprende sus limitaciones actuales y no espera nada de ella hasta que esté en mejor posición de dar.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Levítico establece cinco tipos de ofrendas: holocausto, paz, pecado, culpa y cereales. Cada una aborda un aspecto distinto de la relación entre el ser humano y Dios. ¿Qué dice esa variedad sobre la naturaleza de la Expiación de Cristo que prefiguraban?",
    options: [
      "Que la Expiación de Cristo es suficientemente amplia para cubrir adoración, comunión, pecado, culpa y gratitud: toda la dimensión de la relación rota entre el ser humano y Dios.",
      "Que las cinco ofrendas representan las cinco etapas del proceso de arrepentimiento que Cristo establecería en el Nuevo Testamento.",
      "Que la variedad de ofrendas refleja la diversidad de culturas dentro de Israel que tenían distintas formas de adorar.",
      "Que Cristo instituyó cinco ordenanzas del Evangelio como equivalentes espirituales de los cinco tipos de ofrenda levítica.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 54: Levítico, Parte 2
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/17-exodus-35-40-leviticus-1-4-16-19/173-leviticus-part-2?lang=spa
// correctAnswer pattern: 0, 2, 3, 1, 0, 2, 3
// ============================================================================
export const leccion54Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El gran Día de la Expiación (Yom Kippur) usaba dos machos cabríos con roles distintos. ¿Cuál era la función específica del segundo macho cabrío, el llamado 'azazel' o chivo expiatorio?",
    options: [
      "El sumo sacerdote confesaba sobre él todas las iniquidades de Israel y lo enviaba al desierto, alejando simbólicamente los pecados del pueblo.",
      "Era sacrificado al finalizar el día como segunda ofrenda expiatoria para cubrir los pecados más graves.",
      "Era preservado vivo como símbolo de que Dios guardaba vida a pesar del juicio que merecían los pecados.",
      "Era devuelto al pueblo como señal de que el sacrificio del primer macho cabrío había sido aceptado.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Levítico 19:18 contiene uno de los mandamientos más citados del Antiguo Testamento. ¿Cuál es?",
    options: [
      "Honrarás a tu padre y a tu madre para que tus días se alarguen sobre la tierra que Jehová tu Dios te da.",
      "No tendrás dioses ajenos delante de mí, porque Yo soy Jehová tu Dios celoso.",
      "Amarás a tu prójimo como a ti mismo, porque Yo soy Jehová.",
      "No tomarás el nombre de Jehová tu Dios en vano, porque no lo tendrá por inocente.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El Salmo 103:12 dice que el Señor alejó las rebeliones del pueblo 'cuanto está lejos el oriente del occidente'. ¿Qué imagen geográfica usa ese versículo y qué verdad sobre el perdón comunica?",
    options: [
      "Que el perdón divino es condicional: los pecados son alejados solo mientras el arrepentimiento dure.",
      "Que el oriente y el occidente son las direcciones en que el pueblo de Israel fue dispersado como castigo por sus pecados.",
      "Que la distancia entre el oriente y el occidente es finita pero muy grande, lo que señala que el perdón es inmenso aunque no ilimitado.",
      "Que el Señor no solo perdona los pecados sino que los elimina en una dirección sin punto de retorno: una imagen de que el perdón es total y definitivo.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El mandamiento de Levítico 19:18 —'amarás a tu prójimo como a ti mismo'— aparece en una sección sobre la santidad del pueblo. ¿Qué conexión doctrinal establece esa ubicación entre la santidad personal y el amor al prójimo?",
    options: [
      "Que amar al prójimo es la consecuencia natural de haber recibido el perdón divino; quien ha experimentado la misericordia de Dios puede extenderla a los demás.",
      "Que la santidad personal es principalmente una cualidad interior que no necesariamente se manifiesta en las relaciones con otras personas.",
      "Que el amor al prójimo es más importante que cualquier ritual religioso y debería reemplazar las ordenanzas formales.",
      "Que la santidad del pueblo dependía de sus líderes religiosos, mientras que el amor al prójimo era responsabilidad individual.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Sofía se arrepintió de algo serio hace varios meses, habló con su obispo y recibió el perdón, pero todavía no puede 'sentir' que está perdonada. El Salmo 103:12 y el símbolo del chivo expiatorio hablan directamente a esa situación. ¿Qué le diría esta lección?",
    options: [
      "Que el sentimiento de perdón llega solo después de un período adicional de prueba que demuestra que el arrepentimiento fue genuino.",
      "Que la imagen del chivo que se aleja sin regresar y el oriente que no alcanza el occidente son imágenes de un perdón que ya ocurrió: no necesita un segundo sentimiento para confirmar lo que el Señor ya hizo.",
      "Que debería hablar nuevamente con su obispo para que le confirme que el proceso de perdón fue completo y válido.",
      "Que la ausencia de sentimiento de perdón podría ser una señal de que necesita pasar por el proceso de arrepentimiento nuevamente.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo tiene un compañero que lo trató muy mal el año pasado y dice: 'Lo perdono en mi corazón pero no necesito tratarlo bien.' Levítico 19:18 habla a esa posición. ¿Qué le diría la lección?",
    options: [
      "Que el perdón interior es suficiente si la relación fue dañada de manera irreparable; no todas las relaciones deben restaurarse.",
      "Que debería consultar con un consejero para determinar si la situación es lo suficientemente grave como para justificar el alejamiento.",
      "Que 'amar al prójimo como a sí mismo' incluye un componente de trato activo, no solo una actitud interna; el mandamiento tiene dimensión relacional concreta.",
      "Que el perdón genuino siempre resulta en la restauración completa de la relación, sin excepciones.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El primer macho cabrío era sacrificado como ofrenda por el pecado; el segundo era enviado al desierto cargando las iniquidades. Juntos forman un símbolo de la Expiación. ¿Qué aspecto de la Expiación de Cristo representa cada uno?",
    options: [
      "El primero representa la justicia y el segundo la misericordia; juntos muestran que la Expiación satisface ambas a la vez.",
      "El primero representa el Getsemaní y el segundo la Resurrección; los dos momentos clave del sacrificio expiatorio.",
      "El primero representa el sacrificio de Cristo que paga el precio del pecado; el segundo representa que ese mismo Cristo toma los pecados y los elimina completamente, sin que regresen.",
      "El primero representa la obediencia de Cristo al Padre y el segundo representa la libertad que la Expiación da a los que se arrepienten.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 55: Evalúa tu aprendizaje 3 (Éxodo y Levítico)
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/17-exodus-35-40-leviticus-1-4-16-19/174-assess-your-learning-3?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 1
// ============================================================================
export const leccion55Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El élder J. Devn Cornish enseñó un principio específico sobre cómo medir el progreso espiritual. ¿Cuál es?",
    options: [
      "Que el progreso espiritual debe medirse en relación con los estándares de los profetas del Antiguo Testamento.",
      "Que la asistencia regular a las reuniones de la Iglesia es el indicador más confiable del crecimiento espiritual.",
      "Que debemos compararnos con nosotros mismos —cómo éramos versus cómo somos ahora— y no con los demás.",
      "Que el progreso espiritual solo puede medirlo el Señor, y nosotros no debemos intentar evaluarnos.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El período de Éxodo a Levítico que se evalúa en esta lección cubre varios temas centrales. ¿Cuál de los siguientes forma el arco narrativo principal de ese bloque?",
    options: [
      "La liberación de la esclavitud egipcia, el convenio en el Sinaí, el tabernáculo y el sistema de sacrificios que apuntaba a Cristo.",
      "El nacimiento de Moisés, su educación en el palacio de Faraón y su huida al desierto de Madián.",
      "La conquista de Canaán, la distribución de las tribus y la construcción del primer templo permanente.",
      "El ciclo de apostasía, opresión y liberación que define el período de los jueces de Israel.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Las lecciones de evaluación invitan a hacer una pausa honesta en lugar de simplemente avanzar al siguiente contenido. ¿Cuál es el propósito doctrinal de esa pausa según la lección?",
    options: [
      "Que el Seminario necesita tiempo para revisar qué lecciones fueron más efectivas y cuáles deben mejorarse.",
      "Que los alumnos descansen del contenido intenso antes de comenzar un nuevo bloque temático más exigente.",
      "Que una pausa honesta permite verificar si el estudio está produciendo cambio real, no solo acumulación de información.",
      "Que la evaluación genera un sentido de logro que motiva a los alumnos a continuar con el programa.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Alma 5:26 pregunta: '¿Podéis sentir eso ahora?' —no '¿lo sentiste en algún momento del pasado?'. ¿Qué diferencia práctica produce esa pregunta en tiempo presente para la evaluación espiritual?",
    options: [
      "Que la fe espiritual presente es más importante que cualquier experiencia espiritual previa, por muy intensa que haya sido.",
      "Que la pregunta en presente invita a evaluar si la fe está activa hoy, no si fue real ayer; el crecimiento genuino tiene presencia continua, no solo recuerdo.",
      "Que el estado emocional del momento de la evaluación determina si el crecimiento espiritual del período fue real o superficial.",
      "Que Alma enseñó que las experiencias espirituales pasadas pierden validez con el tiempo y necesitan renovarse constantemente.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Camila termina el bloque de estudio sintiendo que 'aprendió muchas cosas pero no cambió nada en su vida'. Santiago 1:22 advierte contra ser 'solamente oidores'. ¿Qué le diría esa advertencia?",
    options: [
      "Que debería volver a leer todas las lecciones del bloque hasta que sienta que el contenido le produjo un cambio emocional claro.",
      "Que la sensación de no haber cambiado es siempre incorrecta: el estudio del Evangelio siempre produce cambio, aunque no siempre se perciba de inmediato.",
      "Que el conocimiento sin aplicación concreta es exactamente lo que Santiago advierte; la siguiente pregunta debería ser qué acción específica tomará esta semana.",
      "Que quizás el nivel de las lecciones no fue adecuado para su etapa espiritual actual y necesita un enfoque diferente.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás se compara con un compañero del Seminario que parece tener mayor conocimiento doctrinal y siente que 'se quedó atrás'. El élder Cornish enseñó a compararse con uno mismo. ¿Cómo cambia esa perspectiva la evaluación de Nicolás?",
    options: [
      "Reconocer que él creció respecto a quien era al inicio del bloque es lo que importa, independientemente de dónde esté su compañero.",
      "Que debería esforzarse por alcanzar el nivel de su compañero porque ese es el estándar real del Seminario.",
      "Que la comparación con otros es útil solo cuando el otro es un ejemplo positivo que puede inspirar a mejorar.",
      "Que la solución es evitar todo contacto con compañeros durante el período de evaluación para no sentir presión externa.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El bloque Éxodo–Levítico va desde la esclavitud en Egipto hasta la casa de Dios en el desierto. ¿Qué arco espiritual describe ese trayecto que también aplica a la vida de un discípulo de Cristo hoy?",
    options: [
      "Que el camino del discipulado va de la ignorancia al conocimiento; cuanto más se estudia el Evangelio, más cerca se está de Dios.",
      "Que el Señor libera primero —de la esclavitud, del pecado, de las cadenas del mundo— y luego establece Su morada en el corazón de quien responde al convenio.",
      "Que el tabernáculo representa la meta final del camino espiritual: construir una vida sagrada donde Dios pueda habitar permanentemente.",
      "Que el Éxodo y el Levítico son etapas distintas: el primero para la juventud y el segundo para la madurez espiritual adulta.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 56: Números 11–14
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/18-numbers-11-14/181-numbers-11-14?lang=spa
// correctAnswer pattern: 3, 1, 0, 2, 3, 1, 0
// ============================================================================
export const leccion56Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Moisés envió doce espías a explorar Canaán durante cuarenta días. Al regresar, diez de ellos dieron un reporte negativo. ¿Con qué imagen específica describieron su propia situación frente a los habitantes de la tierra?",
    options: [
      "Como corderos entre lobos: indefensos pero esperando la protección divina prometida por el Señor.",
      "Como extranjeros sin tierra: sin derecho histórico a reclamar lo que el Señor había prometido darles.",
      "Como soldados mal equipados: con armas insuficientes para enfrentar ejércitos con tecnología superior.",
      "Como langostas: así se veían a sí mismos y así creían que los veían los habitantes de la tierra.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Caleb y Josué dieron un reporte completamente diferente al de los otros diez espías. ¿Cuál fue el argumento central de su reporte favorable?",
    options: [
      "Que el ejército israelita era más numeroso de lo que los otros espías habían calculado correctamente.",
      "Que si el Señor se agradare de ellos, los llevaría a esa tierra y les ayudaría a prevalecer: el factor determinante era la presencia del Señor, no el tamaño del ejército.",
      "Que los habitantes de Canaán estaban debilitados por enfermedades y no representaban una amenaza real.",
      "Que la tierra era tan fértil que compensaba cualquier riesgo militar: valía la pena intentarlo por los beneficios.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Los doce espías vieron exactamente las mismas ciudades y los mismos habitantes. Sin embargo, sus conclusiones fueron radicalmente distintas. ¿Qué factor, según la lección, determinó la diferencia entre los dos reportes?",
    options: [
      "El marco desde el que interpretaron los datos: los diez midieron el desafío con escala humana; Caleb y Josué lo midieron con la escala del Señor que había dividido el Mar Rojo.",
      "Que Caleb y Josué recibieron una revelación privada del Señor que los otros diez no recibieron durante la exploración.",
      "Que los diez espías exploraron zonas más peligrosas de Canaán y vieron situaciones que Caleb y Josué no llegaron a ver.",
      "Que la experiencia previa en combate de Caleb y Josué les daba una perspectiva más realista sobre las posibilidades reales de éxito.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Israel eligió el reporte de los diez espías sobre el de Caleb y Josué, y como consecuencia vagó cuarenta años más en el desierto. ¿Qué enseña ese resultado sobre la relación entre la perspectiva de fe y las consecuencias prácticas de la vida?",
    options: [
      "Que el miedo nunca tiene consecuencias en el largo plazo si eventualmente la persona se arrepiente de haberlo cedido.",
      "Que los grandes milagros solo ocurren cuando todo el pueblo tiene fe unánime, no cuando solo unos pocos confían.",
      "Que cómo interpretamos los desafíos —desde el miedo o desde la fe en el Señor— determina las decisiones que tomamos, y esas decisiones tienen consecuencias reales y duraderas.",
      "Que el Señor castiga directamente a quienes muestran falta de fe enviándoles más dificultades como consecuencia inmediata.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia quiere postularse a una carrera universitaria competitiva pero dice: 'Alguien como yo no llega a esos lugares.' Su 'reporte interno' sobre sí misma suena al de los diez espías. ¿Qué le diría Caleb y Josué si pudieran hablarle?",
    options: [
      "Que debería elegir una carrera más accesible para no arriesgarse a un fracaso que dañe su confianza.",
      "Que consulte con personas exitosas de su entorno para determinar si sus capacidades son realmente suficientes.",
      "Que avance con fe: el factor determinante no es solo su capacidad actual sino lo que el Señor puede hacer con ella si se esfuerza y confía.",
      "Que el Señor tiene un plan específico para ella y ese plan no incluye fracasos, así que puede avanzar sin miedo a las consecuencias.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Benjamín enfrenta un conflicto con sus padres sobre sus decisiones de vida y dice: 'Es demasiado difícil; nunca van a entenderme.' Usando el contraste entre los diez espías y Caleb y Josué, ¿qué primer paso de fe podría dar?",
    options: [
      "Pedir a un líder de la Iglesia que hable con sus padres en su lugar para reducir la tensión del conflicto.",
      "Elegir ver la situación no como un gigante imposible sino como un desafío donde el Señor puede ayudarlo a encontrar palabras y caminos que no ve todavía.",
      "Esperar a que sus padres tomen la iniciativa de entender, porque el primer movimiento debería venir de quienes tienen más experiencia.",
      "Aceptar que algunas diferencias familiares no tienen solución y aprender a vivir con el conflicto de manera saludable.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Los espías temerosos se vieron como 'langostas'. Caleb y Josué se vieron como el pueblo del Señor que dividió el Mar Rojo. La lección también menciona a Débora en Jueces, quien lideró a Israel con fe cuando Barac dudó. ¿Cuál es el patrón común en esas tres figuras de fe —Caleb, Josué y Débora— frente a quienes cedieron al miedo?",
    options: [
      "Que la fe genuina nunca experimenta miedo; la presencia del miedo es siempre señal de falta de fe en el Señor.",
      "Que los tres tenían experiencias espirituales previas más intensas que el resto del pueblo, lo que explica su mayor confianza.",
      "Que la fe activa —que mide la situación desde la perspectiva de un Dios que actúa— permite avanzar donde otros se paralizan, independientemente del género, el cargo o la experiencia.",
      "Que el éxito de los tres dependió de haber persuadido al resto del pueblo de que los siguiera; sin ese apoyo colectivo, su fe individual no habría servido.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 57: Números 21
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/18-numbers-11-14-21/182-numbers-21?lang=spa
// correctAnswer pattern: 1, 3, 2, 0, 1, 3, 2
// ============================================================================
export const leccion57Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Israel murmuró contra el Señor y contra Moisés, y el Señor envió serpientes ardientes. Cuando el pueblo se arrepintió, el Señor instruyó a Moisés a fabricar un remedio específico. ¿En qué consistía exactamente?",
    options: [
      "Que Moisés orase sobre cada persona mordida y la ungiera con aceite como señal de fe colectiva.",
      "Que hiciera una serpiente de bronce y la pusiera sobre un asta, de modo que quien mirara a ella viviera.",
      "Que el pueblo ayunara durante tres días como señal de arrepentimiento genuino antes de recibir la sanación.",
      "Que construyeran un altar y ofrecieran sacrificios expiatorios hasta que las serpientes se fueran del campamento.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Jesús citó directamente el episodio de la serpiente de bronce en Juan 3:14–15 para explicar algo sobre Sí mismo. ¿Qué declaró exactamente?",
    options: [
      "Que así como Israel tuvo que obedecer para ser sanado, Sus seguidores también deberían obedecer para recibir vida eterna.",
      "Que así como Moisés levantó la serpiente en el desierto, así necesitaba ser levantado el Hijo del Hombre, para que todo aquel que cree en Él tenga vida eterna.",
      "Que la serpiente de bronce fue el símbolo más poderoso del Antiguo Testamento, por lo que Él lo eligió para describir Su propia misión.",
      "Que mirando a Cristo con fe, las personas podrían ser sanadas de sus enfermedades físicas tal como Israel fue sanado de las mordeduras.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Alma 33:19–20 señala que algunos israelitas rehusaron mirar la serpiente de bronce 'por la sencillez del camino'. ¿Qué dice ese detalle sobre la naturaleza de la resistencia humana al Evangelio?",
    options: [
      "Que las personas con mayor educación tienden a rechazar el Evangelio porque lo encuentran demasiado simple para sus capacidades intelectuales.",
      "Que la sencillez de la fe no significa que sea fácil de aceptar; el orgullo y la expectativa de algo más complicado pueden impedir recibir una solución real.",
      "Que el Evangelio necesita presentarse de maneras más complejas para que las personas lo tomen en serio en nuestra época.",
      "Que quienes rechazan el Evangelio por su sencillez nunca habrían creído de todas formas, independientemente de cómo se les presentara.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La serpiente de bronce era el símbolo de la misma cosa que estaba matando al pueblo —pero levantada sobre un asta. ¿Qué enseña ese simbolismo aparentemente paradójico sobre la Expiación de Cristo?",
    options: [
      "Que Cristo tomó sobre Sí mismo el pecado —lo que estaba destruyendo a la humanidad— y al ser levantado en la cruz convirtió esa misma imagen en la fuente de la salvación.",
      "Que el Señor usa los símbolos del enemigo para confundirlo, una estrategia espiritual que también debemos aprender.",
      "Que el pecado y la gracia coexisten en el Evangelio sin resolverse completamente en esta vida mortal.",
      "Que la forma visual del sacrificio no importa mientras la intención del corazón sea sincera y el acto sea obediente.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Tomás siente una carga pesada de culpa por errores pasados y dice que 'ya probó arrepentirse pero no funciona; sigue sintiéndose igual'. La lección habla de simplemente 'mirar' a Cristo. ¿Qué le diría?",
    options: [
      "Que quizás su arrepentimiento anterior no fue suficientemente profundo y necesita repetir el proceso con mayor intensidad.",
      "Que el proceso de arrepentimiento requiere tiempo proporcional a la gravedad del error, y quizás simplemente necesita esperar más.",
      "Que el remedio es el mismo que para Israel: mirar a Cristo con fe —no resolver el problema con más esfuerzo propio— y confiar en que Su poder es suficiente para sanar lo que él no puede sanar solo.",
      "Que debería hablar con un líder de la Iglesia que pueda confirmale si su arrepentimiento fue aceptado antes de seguir adelante.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Rocío tiene un amigo que dice: 'El Evangelio me parece demasiado simple; necesito algo con más profundidad intelectual para creer.' Alma 33:20 habla de quienes murieron 'por la sencillez del camino'. ¿Cómo respondería la lección?",
    options: [
      "Que el Evangelio también tiene complejidad doctrinal profunda que puede satisfacer la búsqueda intelectual; debería estudiar más antes de juzgarlo.",
      "Que la sencillez del Evangelio no es superficialidad sino accesibilidad; quienes lo rechazan por 'demasiado simple' repiten el error de quienes murieron por no querer simplemente mirar la serpiente.",
      "Que debería respetar la posición de su amigo y no insistir porque cada persona llega al Evangelio en su propio tiempo y manera.",
      "Que la Iglesia tiene programas de estudio avanzado que podrían satisfacer las necesidades intelectuales de su amigo antes de que tome una decisión definitiva.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Israel murmuró, recibió consecuencias, se arrepintió, y el Señor proveyó un remedio sencillo que algunos no quisieron usar. ¿En qué se diferencia ese patrón del patrón del ciclo de Jueces (apostasía, opresión, clamor, liberación) y qué tiene de único el episodio de Números 21?",
    options: [
      "No hay diferencia real: ambos patrones muestran que el Señor siempre libera a quien clama, independientemente de las circunstancias.",
      "En el ciclo de Jueces el Señor envía un liberador externo; en Números 21 el remedio requiere una acción de fe personal e individual: nadie podía mirar por otro, cada persona debía hacer ese acto por sí misma.",
      "El ciclo de Jueces aplica a toda la nación y Números 21 aplica solo a los individuos que murmuran personalmente sin involucrar al pueblo.",
      "En Números 21 el Señor fue más rápido en responder porque el arrepentimiento del pueblo fue más sincero que en los ciclos de Jueces posteriores.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 165: Recurrir a las fuentes divinamente señaladas
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/61-doctrinal-mastery/615-turning-to-divinely-appointed-sources?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 3
// ============================================================================
export const leccion165Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 1:38 establece algo fundamental sobre la relación entre la voz del Señor y la voz de Sus siervos. ¿Cuál es esa declaración?",
    options: [
      "Ya sea por la voz del Señor mismo o por la voz de Sus siervos, es lo mismo para quienes tienen fe suficiente para reconocerla.",
      "Que los profetas hablan en nombre del Señor pero Sus palabras deben ser confirmadas por el Espíritu Santo antes de ser seguidas.",
      "Que la voz de los profetas vivientes tiene mayor autoridad que las Escrituras cuando hay aparente contradicción entre ambas.",
      "Que el Señor habla directamente a Sus hijos en las cosas personales y por medio de Sus siervos en las cosas de la Iglesia.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "2 Nefi 32:3 describe el papel de las palabras de Cristo en la vida del discípulo. ¿Qué promete ese versículo específicamente?",
    options: [
      "Que las palabras de Cristo producen fe cuando se memorizan y se repiten durante la oración diaria.",
      "Que quien festeje en las palabras de Cristo recibirá luz suficiente para guiar a otras personas a la verdad.",
      "Que las palabras de Cristo dirán al discípulo todas las cosas que debe hacer, convirtiendo las Escrituras en guía práctica.",
      "Que Cristo habló por medio de todos los profetas, por lo que cualquier Escritura contiene Sus palabras sin excepción.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección distingue entre fuentes 'divinamente señaladas' y fuentes 'no autorizadas'. ¿Por qué esa distinción importa especialmente en nuestra época de acceso masivo a información?",
    options: [
      "Porque las fuentes no autorizadas son siempre falsas y malintencionadas, mientras que las fuentes divinamente señaladas son siempre correctas.",
      "Porque la abundancia de información hace que sea más fácil que nunca encontrar la verdad sin necesitar fuentes autorizadas.",
      "Porque una fuente puede contener información verdadera y útil sobre muchos temas pero carecer de la autoridad espiritual para guiar hacia la salvación, y confundir ambas cosas es peligroso.",
      "Porque el Señor solo bendice el estudio de fuentes que tienen aprobación oficial de la Iglesia, y otras fuentes bloquean la revelación.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Las tres fuentes divinamente señaladas —Escrituras, profetas vivientes y Espíritu Santo— funcionan juntas. ¿Qué ocurre cuando una impresión que parece del Espíritu contradice lo que enseñan las Escrituras o los profetas?",
    options: [
      "Que la impresión probablemente no viene del Espíritu Santo; las tres fuentes se verifican mutuamente y no se contradicen.",
      "Que las Escrituras tienen prioridad sobre las impresiones del Espíritu en todos los casos sin excepción.",
      "Que el profeta viviente tiene más autoridad que las Escrituras antiguas, por lo que debe seguirse su enseñanza sobre la impresión.",
      "Que es señal de que las Escrituras necesitan ser reinterpretadas para el contexto actual, y el Espíritu está dando esa reinterpretación.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina tiene dudas sobre una doctrina de la Iglesia y las primeras fuentes que consultó fueron comentarios en YouTube y foros de internet. Según el principio de la lección, ¿qué debería cambiar en su proceso?",
    options: [
      "Consultar primero las fuentes divinamente señaladas —Escrituras, discursos de profetas, Gospel Topics Essays— y llevar lo que encuentre al Señor en oración antes de recurrir a otras fuentes.",
      "Dejar de buscar respuestas por su cuenta y llevar la pregunta directamente a su obispo para recibir una respuesta autorizada.",
      "Evitar completamente fuentes externas a la Iglesia porque todas carecen de la perspectiva espiritual necesaria para responder preguntas de fe.",
      "Buscar un equilibrio entre fuentes de la Iglesia y fuentes externas para tener una visión completa antes de formarse una opinión.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sebastián lee en redes sociales una crítica severa sobre la historia de la Iglesia y la comparte con sus amigos diciendo: 'Esto viene de una fuente muy seria; deberían leerlo.' Según el principio de la lección, ¿qué pregunta debería hacerse antes de compartirlo?",
    options: [
      "Si la fuente tiene suficientes seguidores como para ser considerada confiable en estos temas históricos.",
      "Si él mismo ha leído la respuesta de la Iglesia al mismo tema para poder presentar una perspectiva equilibrada.",
      "Si esa fuente tiene autoridad espiritual para hablar sobre el Evangelio o si solo tiene credibilidad académica o popular, que son cosas distintas.",
      "Si alguno de sus amigos podría sentirse perturbado por el contenido, para decidir si es apropiado compartirlo con ese grupo.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El patrón del Antiguo Testamento es consistente: la serpiente de bronce tenía una fuente (Jehová), la Pascua tenía instrucciones de una fuente (Jehová), los mandamientos venían de una fuente (Jehová). ¿Qué dice ese patrón sobre la confianza en las fuentes divinamente señaladas hoy?",
    options: [
      "Que el Señor siempre ha operado mediante fuentes autorizadas, y confiar en esas fuentes por encima de las populares es simplemente seguir el mismo patrón de todos Sus pueblos de convenio.",
      "Que la autoridad de las fuentes divinamente señaladas es mayor en el Antiguo Testamento que en nuestra época porque entonces el Señor hablaba directamente con los profetas.",
      "Que el patrón demuestra que el Señor prefería la obediencia ciega en la antigüedad, pero hoy espera que Sus hijos desarrollen discernimiento crítico independiente.",
      "Que las fuentes del Antiguo Testamento (Moisés, los profetas) tienen igual autoridad que las fuentes modernas (profetas vivientes) y pueden usarse indistintamente.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 193: Asumir la responsabilidad de tu aprendizaje
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/67-succeed-in-school/672-taking-responsibility-for-your-learning?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 1
// ============================================================================
export const leccion193Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 58:26–28 describe el tipo de discípulo que el Señor llama 'siervo flojo'. ¿Cuál es la característica específica de ese tipo de persona según el versículo?",
    options: [
      "Que no ora con suficiente frecuencia ni intensidad para recibir la guía que necesita en su vida.",
      "Que depende de otros para hacer el trabajo espiritual que solo ella puede hacer para sí misma.",
      "Que espera mandamientos en todas las cosas en lugar de actuar por su propia cuenta dentro del marco de los principios del Evangelio.",
      "Que entiende los principios del Evangelio pero no los aplica de manera consistente en su vida diaria.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Alma 37:35 contiene una instrucción específica de Alma a su hijo Helamán sobre el aprendizaje. ¿Cuál es?",
    options: [
      "Que aprenda sabiduría en su juventud, incluyendo guardar los mandamientos de Dios durante ese período formativo.",
      "Que estudie primero las Escrituras y luego el conocimiento secular para mantener las prioridades correctas.",
      "Que busque mentores sabios en lugar de intentar aprender solo porque la sabiduría se transmite de persona a persona.",
      "Que la sabiduría espiritual es superior a la académica y debe priorizarse en todas las decisiones de estudio.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección distingue entre 'ser actuado' y 'actuar'. ¿Cuál es la diferencia práctica entre un alumno que 'es actuado' por su entorno y uno que 'actúa' como agente en su aprendizaje?",
    options: [
      "El que es actuado estudia porque hay evaluaciones y presión externa; el que actúa estudia porque entiende el propósito eterno del conocimiento y lo busca activamente.",
      "El que es actuado aprende de manera lenta y superficial; el que actúa aprende más rápido porque tiene motivación intrínseca.",
      "El que es actuado necesita ayuda de maestros y padres constantemente; el que actúa puede aprender completamente solo sin apoyo externo.",
      "No hay diferencia real en los resultados: ambos aprenden; la diferencia es solo en la motivación interna que los lleva a estudiar.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección menciona el ejemplo de José en Egipto como modelo de responsabilidad activa en el aprendizaje. ¿Cuál es el patrón de José que se aplica al aprendizaje?",
    options: [
      "Que José estudió activamente las costumbres egipcias para poder ascender en el sistema sin depender de favores o de ayuda divina directa.",
      "Que en cada nueva circunstancia —la casa de Potifar, la cárcel, el palacio— José tomó responsabilidad de su situación y trabajó con excelencia en lugar de esperar pasivamente a ser rescatado.",
      "Que el talento de José para interpretar sueños era innato, pero su éxito dependió de encontrar las personas correctas que lo ayudaran a avanzar.",
      "Que José nunca se quejó de sus circunstancias, lo que demuestra que la actitud positiva es el principal requisito del éxito.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Lucía espera que el maestro de Seminario le haga el contenido 'más interesante' antes de esforzarse en participar. D&C 58:26 llama a eso 'siervo flojo'. ¿Qué cambio concreto podría hacer Lucía para convertirse en agente de su propio aprendizaje esta semana?",
    options: [
      "Hablar con el maestro para sugerirle dinámicas más atractivas que le ayuden a comprometerse con el material.",
      "Pedirle a un compañero que le explique el contenido de manera más clara y accesible antes de clase.",
      "Llegar a la siguiente clase habiendo leído el capítulo asignado y formulado al menos una pregunta propia que genuinamente quiera responder.",
      "Buscar en internet versiones más entretenidas de las historias del Antiguo Testamento para tener mejor contexto antes de clase.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín dice: 'Aprendo mejor cuando el maestro explica bien; si la clase es aburrida, no es mi culpa que no aprenda nada.' Usando el principio de esta lección, ¿qué falla en ese razonamiento?",
    options: [
      "Que él es el principal responsable de su propio aprendizaje; aunque la calidad de la enseñanza importa, su agencia determina cuánto aprovecha incluso las clases menos dinámicas.",
      "Que todos los maestros de Seminario reciben capacitación y si la clase le parece aburrida es probable que el problema sea su propia falta de concentración.",
      "Que comparar maestros es una actitud que el Señor desaprueba; todos los siervos llamados merecen el mismo nivel de compromiso del alumno.",
      "Que debería buscar un grupo de Seminario diferente donde el maestro se adapte mejor a su estilo de aprendizaje.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Asumir la responsabilidad del propio aprendizaje (Lección 193) y organizar las tareas con prioridades (Lección 194) son dos habilidades distintas pero relacionadas. ¿Cuál es el principio común que las une?",
    options: [
      "Que ambas lecciones enseñan estrategias de productividad académica que tienen aplicación doctrinal secundaria.",
      "Que la agencia divina se ejerce tanto en qué se decide hacer como en cómo se organiza el tiempo para hacerlo; ambas son expresiones de actuar en lugar de ser actuado.",
      "Que organizar prioridades es la condición previa para poder asumir responsabilidad; sin organización, la responsabilidad no puede ejercerse efectivamente.",
      "Que ambas lecciones tienen como objetivo principal mejorar el rendimiento académico de los alumnos de Seminario.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 194: Organizar las tareas y prioridades
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/67-succeed-in-school/673-organizing-tasks-and-priorities?lang=spa
// correctAnswer pattern: 3, 1, 2, 0, 3, 1, 0
// ============================================================================
export const leccion194Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 88:119 contiene una instrucción directa sobre el orden como principio espiritual. ¿Cuál es esa instrucción?",
    options: [
      "Que los Santos deben establecer un lugar de reunión ordenado donde el Espíritu pueda habitar con comodidad.",
      "Que cada miembro debe llevar un registro escrito de sus tareas y responsabilidades para dar cuentas al Señor.",
      "Que el Espíritu Santo no puede operar en ambientes de desorden físico o mental porque Su naturaleza es de orden.",
      "Organizaos; preparaos en todo lo necesario, y estableced una casa de orden, una casa de Dios.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La lección usa el relato de la Creación en Abraham 4–5 como modelo de organización. ¿Qué característica específica del proceso creativo señala como aplicable a las tareas cotidianas?",
    options: [
      "Que la Creación fue completada por el Señor sin ayuda humana, lo que enseña que el Señor puede organizar nuestra vida si se lo pedimos.",
      "Que la Creación avanzó dividida en etapas ordenadas: un paso a la vez, con descanso al final, antes de pasar al siguiente.",
      "Que el Señor comenzó la Creación con lo más difícil —la luz— y fue avanzando hacia lo más sencillo, un patrón para las tareas difíciles.",
      "Que la Creación fue perfecta desde el primer intento, mostrando que la preparación elimina la necesidad de correcciones.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección conecta el principio de organización con Mateo 6:33: 'Buscad primeramente el reino de Dios'. ¿Cuál es la implicación práctica de ese versículo para cómo un adolescente debería organizar su semana?",
    options: [
      "Que las actividades religiosas deben ocupar al menos la mitad del tiempo de la semana para cumplir con el mandamiento correctamente.",
      "Que las responsabilidades espirituales —oración, Escrituras, Seminario— deben programarse primero en la agenda, no llenarse con lo que sobre.",
      "Que el reino de Dios es un ideal a largo plazo y las prioridades de la semana actual pueden organizarse según las necesidades prácticas inmediatas.",
      "Que el versículo aplica principalmente a los adultos con responsabilidades de liderazgo, no tanto a los adolescentes en etapa de formación.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección menciona que el descanso —como el sábado en la Creación— debe incluirse en la planificación. ¿Por qué eso no es simplemente 'tiempo libre' sino un principio doctrinal del orden?",
    options: [
      "Que el descanso planificado honra el patrón que el Señor estableció en la Creación: el descanso es parte del diseño divino del tiempo, no una interrupción de él.",
      "Que el descanso físico mejora el rendimiento académico, lo que justifica incluirlo en la planificación desde una perspectiva práctica.",
      "Que el Señor ordenó el descanso sabático principalmente para los israelitas del Antiguo Testamento; en nuestra época es más una recomendación de salud.",
      "Que incluir descanso en la planificación demuestra madurez y autoconocimiento, virtudes que el Señor aprecia en Sus hijos.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia tiene cuatro tareas urgentes, una prueba, entrenamiento deportivo y quiere estudiar las Escrituras, todo en la misma semana. Dice: 'No sé por dónde empezar.' Usando el principio de Mateo 6:33 y el modelo de la Creación, ¿cuál sería el primer paso?",
    options: [
      "Hacer primero las tareas más fáciles para generar momentum antes de enfrentar lo más difícil de la semana.",
      "Consultar con sus padres cuáles actividades pueden eliminarse para reducir la carga total de la semana.",
      "Escribir todo lo que tiene que hacer, identificar qué es verdaderamente urgente versus importante, y programar el Señor primero aunque parezca que no hay tiempo.",
      "Hablar con sus maestros para conseguir extensiones en las tareas y así poder dedicar tiempo a todo sin tanta presión.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás organiza su semana siempre dejando el Seminario, la oración y las Escrituras para 'si sobra tiempo'. Con frecuencia no sobra nada. La lección ofrece un principio que explica directamente por qué ese enfoque falla. ¿Cuál es?",
    options: [
      "Que buscar primero el reino de Dios en la agenda —programarlo al inicio y no al final— es la única manera de garantizar que tenga un lugar consistente en la semana.",
      "Que la solución es levantarse más temprano para tener tiempo extra antes de que el día se llene de otras actividades.",
      "Que el Señor promete añadir tiempo sobrenatural a quien lo pone primero, de modo que las demás tareas también se completan.",
      "Que la oración, el Seminario y las Escrituras deberían reducirse a su mínima expresión durante semanas particularmente cargadas.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 88:119 dice 'estableced una casa de orden' y la Creación avanzó etapa por etapa con descanso incluido. ¿Qué dice ese patrón combinado sobre la relación entre el orden y la presencia del Señor en la vida de una persona?",
    options: [
      "Que el orden es la condición que el Señor pone para bendecir a Sus hijos; sin organización, las bendiciones prometidas quedan bloqueadas.",
      "Que el orden facilita la presencia del Señor no como un requisito burocrático sino porque una vida organizada crea espacio para que Él pueda actuar y guiar con claridad.",
      "Que la Creación demuestra que el Señor mismo necesita orden para operar, lo que implica que el desorden en la vida de Sus hijos lo limita a Él también.",
      "Que establecer orden en la vida es principalmente una virtud de carácter que el Señor aprecia por su valor moral, independientemente de sus efectos prácticos.",
    ],
    correctAnswer: 0,
  },
];