import type { Question } from "@/lib/types";

// DISTRIBUCIÓN DE correctAnswer en todo el archivo (70 preguntas):
// 0 → 17 | 1 → 18 | 2 → 18 | 3 → 17
// Patrón por lección (7 preguntas) varía para evitar predecibilidad

// ============================================================================
// LECCIÓN 35: Génesis 42–50
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/12-genesis-42-50/121-genesis-42-45?lang=spa
// correctAnswer pattern: 2, 0, 1, 3, 2, 0, 3
// ============================================================================
export const leccion35Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Cuando los hermanos de José llegaron a Egipto a comprar alimento, José los reconoció inmediatamente. ¿Cuál fue su reacción inicial ante ellos?",
    options: [
      "Los mandó ejecutar para que no lo reconocieran como esclavo vendido.",
      "Los abrazó de inmediato y les reveló quién era frente a toda su corte.",
      "Los reconoció, pero ellos no a él; sintió compasión y los puso a prueba antes de revelarse.",
      "Los ignoró deliberadamente y los hizo esperar varios días sin atenderlos.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Al revelar su identidad, José explicó a sus hermanos por qué habían ocurrido esas cosas. ¿Qué razón específica les dio sobre quién lo había enviado a Egipto?",
    options: [
      "Que Dios lo había enviado delante de ellos para preservar la vida de su familia mediante ese cargo.",
      "Que ellos mismos lo habían enviado sin saberlo, y eso era parte del plan divino.",
      "Que el faraón fue el instrumento del Señor para sacarlo de Canaán cuando era necesario.",
      "Que los mercaderes ismaelitas actuaron por inspiración del Señor al comprarlo como esclavo.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "José fue vendido, esclavizado y encarcelado injustamente por sus propios hermanos. Sin embargo, cuando tuvo el poder de vengarse, eligió perdonar. ¿Qué verdad sobre el perdón ilustra esa decisión?",
    options: [
      "Que el perdón genuino llega solo cuando el tiempo borra el dolor de lo ocurrido.",
      "Que perdonar a quienes nos dañaron es una forma de llegar a ser como el Padre Celestial y Jesucristo, independientemente de lo que merezcamos.",
      "Que el perdón solo es posible cuando la otra persona reconoce su error y pide disculpas directamente.",
      "Que perdonar es una señal de debilidad en quienes tienen poder para hacer justicia por sí mismos.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Judá se ofreció como esclavo en lugar de Benjamín. Al ver ese sacrificio voluntario, José rompió en llanto y se reveló. ¿Qué estaba observando José en Judá que lo conmovió tan profundamente?",
    options: [
      "Que Judá había madurado físicamente y se veía diferente a cuando lo vendieron.",
      "Que Judá recordaba los detalles exactos de lo que habían hecho años antes con José.",
      "Que Judá era ahora el de mayor rango entre los hermanos y tenía autoridad para tomar esa decisión.",
      "Una disposición genuina de sacrificarse por otro, el tipo de cambio de corazón que solo el Señor puede producir.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Sebastián fue traicionado por su mejor amigo, quien difundió información privada sobre él en la escuela. Ahora su amigo le pide perdón. Según el principio de esta lección, ¿cuál sería la respuesta más coherente con el ejemplo de José?",
    options: [
      "Esperar a que el tiempo sane completamente la herida antes de hablar sobre el perdón.",
      "Aceptar la disculpa en privado pero mantener la distancia para protegerse de nuevas traiciones.",
      "Elegir perdonar activamente, no porque el daño no importa, sino porque hacerlo lo acerca a quien el Señor quiere que sea.",
      "Exigir primero que su amigo reconozca públicamente lo que hizo, para que el perdón tenga testigos.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Valentina guarda rencor hacia un familiar que la trató mal durante años y dice: 'No puedo perdonar porque lo que hizo fue demasiado grave'. La historia de José habla directamente a eso. ¿Qué le diría esta lección?",
    options: [
      "Que tiene razón: hay daños que superan la capacidad humana de perdonar sin intervención divina directa.",
      "Que perdonar no minimiza lo ocurrido, sino que la libera a ella; y que el ejemplo de José muestra que incluso las traiciones más profundas pueden ser perdonadas.",
      "Que debería compartir más tiempo con ese familiar para recordar los momentos buenos antes de decidir perdonar.",
      "Que el perdón genuino requiere primero resolver el conflicto directamente con la persona que la dañó.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "José perdonó a sus hermanos y atribuyó todo a la providencia de Dios. Judá se ofreció en lugar de Benjamín. Ambas acciones apuntan a algo mayor. ¿Qué tipo de Cristo representa cada uno en esta historia?",
    options: [
      "José representa la obediencia al Padre y Judá representa la fe que salva al pueblo.",
      "José representa el sufrimiento injusto que termina en exaltación, y Judá representa la intercesión —alguien que se ofrece en lugar de otro, prefigurando a Cristo.",
      "José representa la paciencia en la adversidad y Judá representa el arrepentimiento que todo pecador necesita.",
      "Ambos representan la misma verdad: que el éxito viene después de la humillación, sin distinción entre sus roles.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 36: Traducción de José Smith, Génesis 50
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/12-genesis-42-50/122-jst-genesis-50?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 1, 3, 0
// ============================================================================
export const leccion36Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Según la Traducción de José Smith de Génesis 50, ¿qué nombre pronunció José de Egipto en su profecía sobre el futuro libertador de Israel?",
    options: [
      "Moisés, el libertador que sacaría a Israel de la esclavitud física de Egipto.",
      "José, llamado como él mismo, que sería un vidente escogido para traer luz a Israel.",
      "Aarón, el sacerdote que hablaría por el nuevo profeta ante el pueblo.",
      "Efraín, hijo de José, por cuya descendencia vendría la restauración.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La profecía de José de Egipto describió la misión del futuro vidente llamado José. ¿Cuál era el núcleo de esa misión según la Traducción de José Smith?",
    options: [
      "Construir un pueblo nación donde los convenios antiguos pudieran vivirse sin persecución.",
      "Descubrir registros perdidos que confirmaran la veracidad de la Biblia para el mundo moderno.",
      "Escribir nuevas revelaciones que reemplazaran las Escrituras anteriores dadas a Moisés.",
      "Sacar al pueblo de las tinieblas espirituales y traerle el conocimiento de los convenios del Señor.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La profecía de José de Egipto fue dada siglos antes de que José Smith naciera. ¿Qué enseña el hecho de que el Señor revelara esa información con tanta anticipación sobre Su naturaleza y Sus planes?",
    options: [
      "Que el Señor prepara con antelación a Sus instrumentos y Su obra, y Sus propósitos no dependen del azar ni de las circunstancias históricas.",
      "Que solo los patriarcas del Antiguo Testamento recibían el tipo de revelación profética que incluía nombres y detalles específicos.",
      "Que la profecía era condicionada: si Israel fallaba, el Señor cambiaría el instrumento que elegiría para restaurar Su Evangelio.",
      "Que el conocimiento del futuro fue dado a José de Egipto como recompensa por su fidelidad a lo largo de su vida difícil.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "José de Egipto, Moisés y José Smith son presentados en la lección como 'libertadores' en distintas épocas. ¿En qué se diferencia la liberación que José Smith trajo de la que trajo Moisés?",
    options: [
      "José Smith liberó a más personas que Moisés porque vivió en una época con comunicación más amplia.",
      "Moisés liberó de una esclavitud física y geográfica; José Smith liberó de la esclavitud espiritual mediante la restauración del Evangelio y los convenios.",
      "No hay diferencia real entre los dos tipos de liberación, ya que ambos incluían componentes físicos y espirituales combinados.",
      "Moisés fue un libertador temporal mientras que José Smith fue un libertador permanente sin necesidad de sucesores.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Lucía siente que su testimonio de José Smith es débil y que eso no importa tanto porque 'lo que importa es Jesucristo'. La lección conecta explícitamente ambos. ¿Qué le diría este principio?",
    options: [
      "Que tiene razón: el testimonio de José Smith es secundario y no afecta el testimonio de Cristo directamente.",
      "Que un testimonio de José Smith como profeta restaurador fortalece el de Jesucristo, porque sin la restauración no tendríamos el Evangelio completo ni los convenios del templo.",
      "Que debería priorizar estudiar la vida de José Smith antes de profundizar en las enseñanzas de Jesucristo.",
      "Que el testimonio de José Smith es más importante que el de Jesucristo porque sin él no habría Iglesia restaurada.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo encontró en redes sociales críticas serias sobre la historia de José Smith y siente que su fe tambalea. Según el principio de la lección sobre cómo obtener testimonio, ¿cuál sería el paso más coherente?",
    options: [
      "Evitar completamente esas fuentes y confiar en lo que le enseñaron sus padres y líderes hasta ahora.",
      "Buscar en fuentes apologéticas de la Iglesia que refuten punto por punto cada crítica específica que encontró.",
      "Consultar con un amigo de confianza que conozca bien la historia de la Iglesia para que lo oriente en el tema.",
      "Prestar atención a las impresiones del Espíritu mientras estudia y pedirle directamente a Dios saber por sí mismo si José Smith fue un profeta.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La Traducción de José Smith de Génesis 50 conecta a José de Egipto, Moisés y José Smith en un patrón de libertadores. ¿Qué dice ese patrón sobre cómo el Señor conduce Su obra a lo largo de la historia?",
    options: [
      "Que el Señor siempre elige personas de circunstancias humildes para demostrar que el poder no viene del rango social.",
      "Que el Señor repite patrones de preparación, sufrimiento, llamado y misión en distintas épocas porque Sus propósitos son eternos y coherentes.",
      "Que cada libertador que el Señor levanta tiene exactamente el mismo tipo de misión, solo adaptada al idioma y la cultura de su tiempo.",
      "Que la historia sagrada es cíclica: siempre hay apostasía, libertador, restauración y nueva apostasía en secuencia predecible.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 37: Evalúa tu aprendizaje 2
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/12-genesis-42-50/123-assess-your-learning-2?lang=spa
// correctAnswer pattern: 3, 1, 0, 2, 3, 1, 2
// ============================================================================
export const leccion37Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Según el élder Larry R. Lawrence citado en esta lección de evaluación, ¿qué es más importante que la velocidad de nuestro progreso espiritual?",
    options: [
      "La cantidad de Escrituras que memorizamos durante el año de estudio.",
      "El número de actividades de la Iglesia a las que asistimos con regularidad.",
      "La constancia en la oración diaria, sin importar cuánto dure cada sesión.",
      "La dirección en la que vamos, es decir, si estamos avanzando hacia el Señor.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Las lecciones de evaluación incluyen una imagen de dos árboles: uno joven y uno maduro. ¿Qué simboliza esa comparación en el contexto del crecimiento espiritual?",
    options: [
      "Que los jóvenes tienen menos responsabilidad espiritual que los adultos de la Iglesia.",
      "Que el crecimiento espiritual es un proceso gradual que requiere tiempo, esfuerzo y cuidado constante.",
      "Que el árbol maduro representa al maestro de Seminario y el joven al alumno que aprende de él.",
      "Que el Evangelio es como la naturaleza: tiene estaciones de crecimiento y de descanso alternadas.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Las lecciones de evaluación no tienen el objetivo de calificarte ni compararte con otros. ¿Cuál es entonces su propósito real dentro del programa de Seminario?",
    options: [
      "Hacer una pausa honesta para reconocer el propio crecimiento espiritual con la ayuda del Espíritu Santo.",
      "Prepararte para los exámenes formales que el programa de Seminario aplica al final del año.",
      "Revisar qué contenido fue más popular entre los alumnos para planificar las próximas lecciones.",
      "Identificar qué alumnos necesitan atención adicional por parte del maestro de la clase.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Esta evaluación invita a reflexionar sobre el deseo de guardar convenios y el matrimonio eterno, temas estudiados en Génesis. ¿Por qué evaluar el 'deseo' y no solo el 'conocimiento' de esos principios?",
    options: [
      "Porque el conocimiento doctrinal es menos importante que los sentimientos en el proceso de conversión.",
      "Porque el Seminario no puede medir el conocimiento, pero sí puede medir los deseos mediante preguntas de reflexión.",
      "Porque los convenios se viven desde el corazón; saber y querer son cosas distintas, y ambas importan para el crecimiento real.",
      "Porque los alumnos tienden a responder mejor las preguntas sobre deseos que las preguntas sobre datos específicos.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Rocío termina el bloque de Génesis sintiéndose 'igual que al principio' y piensa que no aprendió nada. El élder Lawrence enseña que la dirección importa más que la velocidad. ¿Qué podría hacer Rocío para evaluar su crecimiento real?",
    options: [
      "Comparar sus respuestas actuales con las de sus compañeros para tener una referencia externa objetiva.",
      "Preguntarse si su deseo de acercarse al Señor, guardar convenios y seguir aprendiendo creció aunque sea un poco.",
      "Releer todas las lecciones del bloque desde el principio para asegurarse de haber captado el contenido.",
      "Hablar con el maestro de Seminario para que le dé una evaluación honesta de su progreso como alumna.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín siente que su fe 'creció mucho' este bloque pero no puede nombrar nada concreto que haya cambiado en su vida. La lección invita a evaluar el crecimiento real. ¿Qué señal concreta indicaría que el crecimiento es genuino?",
    options: [
      "Que puede responder preguntas doctrinales difíciles con mayor seguridad que antes del bloque.",
      "Que repasó al menos dos veces todos los versículos del Dominio de la Doctrina del período.",
      "Que su relación con el Señor mejoró de manera observable: ora de distinta manera, trata a otros diferente, o tomó decisiones más alineadas con el Evangelio.",
      "Que asistió a más clases de Seminario que el semestre anterior y participó más activamente.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Las lecciones de evaluación ocurren después de bloques de estudio intenso sobre temas como el matrimonio eterno, el perdón, y la providencia de Dios en la vida de José. ¿Por qué tiene sentido hacer una pausa evaluativa precisamente después de esos temas?",
    options: [
      "Porque esos temas son los más difíciles del programa y los alumnos necesitan un descanso antes de continuar.",
      "Porque el estudio de Génesis contiene la mayor cantidad de versículos del Dominio de la Doctrina del año.",
      "Porque esos temas tocan decisiones eternas —convenios, familia, perdón— que no pueden quedarse solo en información; la evaluación invita a convertirlos en compromisos personales.",
      "Porque el calendario del programa establece evaluaciones cada cierto número de semanas, independientemente del contenido estudiado.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 166: Centrarse en Jesucristo en las Escrituras
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/62-scripture-study-skills/621-focusing-on-the-savior?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 1
// ============================================================================
export const leccion166Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "La lección presenta una técnica específica de estudio para encontrar a Jesucristo en las Escrituras. ¿En qué consiste concretamente?",
    options: [
      "Buscar símbolos, atributos y acciones de Jesucristo en los versículos, incluso cuando Su nombre no aparece explícitamente.",
      "Leer primero el índice topográfico de Cristo antes de estudiar cualquier capítulo del Antiguo Testamento.",
      "Subrayar en azul cada versículo que mencione directamente el nombre de Jehová o de Cristo.",
      "Comparar cada pasaje del Antiguo Testamento con su versículo paralelo en el Nuevo Testamento.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Juan 5:39 dice que las Escrituras 'dan testimonio' de Jesucristo. ¿Qué implica eso para cómo debe leerse el Antiguo Testamento específicamente?",
    options: [
      "Que el Antiguo Testamento es principalmente un libro de historia con aplicaciones morales, no doctrinales.",
      "Que solo los capítulos proféticos del Antiguo Testamento contienen testimonio directo de Jesucristo.",
      "Que cada relato, tipo, símbolo y personaje puede apuntar hacia Jesucristo si se lee con esa perspectiva activa.",
      "Que el Antiguo Testamento fue escrito específicamente para los israelitas y su testimonio de Cristo solo aplica a ellos.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección sugiere hacerse preguntas como '¿Cómo me ayuda esta acción a entender al Salvador?' al leer. ¿Por qué esa pregunta transforma la experiencia de lectura?",
    options: [
      "Porque obliga al lector a buscar una aplicación práctica en lugar de leer pasivamente el relato histórico.",
      "Porque conecta el relato antiguo con los atributos de Cristo que son relevantes para la vida actual del lector.",
      "Porque esa pregunta está diseñada específicamente para las lecciones de Dominio de la Doctrina del año.",
      "Porque hace que la lectura sea más lenta y así se retiene mejor el contenido de cada capítulo.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Al estudiar la liberación de Israel en el Mar Rojo, un alumno identifica el atributo del Señor de 'librar a Su pueblo en situaciones imposibles'. ¿Cómo debería ese hallazgo cambiar su oración esa semana?",
    options: [
      "Podría orar con mayor confianza sabiendo que el mismo Señor que liberó a Israel puede obrar en su situación específica.",
      "Debería citar ese versículo en su oración para recordarle al Señor Su promesa de liberación.",
      "Ese hallazgo es principalmente académico y no tiene aplicación directa en cómo ora una persona.",
      "Debería compartirlo en la siguiente clase de Seminario antes de aplicarlo personalmente a su oración.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Camila dice que el Antiguo Testamento 'le aburre porque son solo historias de guerras y castigos'. Según la técnica de esta lección, ¿qué podría hacer para que su experiencia de lectura cambie?",
    options: [
      "Buscar activamente en cada relato —incluso en los de guerra y juicio— qué atributo de Cristo o qué verdad sobre Su Expiación se refleja en esa historia.",
      "Enfocarse solo en los Salmos y Proverbios que tienen lenguaje más poético y accesible para alguien como ella.",
      "Leer primero el comentario de un líder de la Iglesia sobre cada capítulo antes de leer el texto mismo.",
      "Saltearse los capítulos que le resultan difíciles y concentrarse en los que ya le generan interés.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Diego estudia las Escrituras diariamente pero siente que 'no le saca nada' porque lee rápido para cumplir con el hábito. La lección ofrece una técnica concreta que podría cambiar eso. ¿Cuál es la aplicación más específica para su situación?",
    options: [
      "Aumentar el tiempo de estudio de 10 a 20 minutos para poder leer con mayor calma y detalle.",
      "Elegir un capítulo por semana para leerlo varias veces hasta memorizarlo en lugar de leer varios capítulos.",
      "Al leer, pausar cada pocos versículos y preguntar: '¿Qué aprendo aquí sobre Jesucristo o sobre cómo Él actúa?', y registrar la respuesta.",
      "Leer en voz alta para activar más sentidos y así retener mejor el contenido de lo que estudia.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Esta lección enseña a buscar a Cristo en las Escrituras, y la Lección 161 enseña a edificar un cimiento espiritual en Cristo. Ambas hablan de centrar el estudio en el Salvador. ¿Cuál es el principio común que las une?",
    options: [
      "Que la fe en Jesucristo crece cuando lo buscamos activamente —tanto en las páginas de las Escrituras como en las decisiones de la vida diaria— y no solo cuando recibimos enseñanza pasiva.",
      "Que el conocimiento doctrinal sobre Cristo es suficiente para construir la fe; las experiencias personales son complementarias.",
      "Que las Escrituras y los hábitos espirituales son igualmente importantes pero sirven propósitos completamente distintos en el crecimiento espiritual.",
      "Que el Dominio de la Doctrina es el punto de encuentro entre ambas lecciones, ya que conecta el estudio de las Escrituras con la vida práctica.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 192: Éxito en la escuela
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/67-succeed-in-school/671-involving-the-lord?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 3
// ============================================================================
export const leccion192Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "La lección enseña un principio específico sobre la relación entre el Señor y los estudios académicos. ¿Cuál es?",
    options: [
      "Que Dios solo se involucra en el aprendizaje espiritual, no en el académico.",
      "Que si oramos correctamente, el Señor nos dará las respuestas de los exámenes sin necesidad de estudiar.",
      "Que al hacer que el Señor forme parte de nuestro aprendizaje, Él magnificará y fortalecerá nuestros esfuerzos.",
      "Que el éxito académico depende principalmente del talento natural que el Señor nos dio al nacer.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El material de la lección menciona que el Espíritu Santo puede ayudarte durante un examen difícil. ¿De qué manera específica puede hacerlo?",
    options: [
      "Iluminando tu mente para recordar lo que estudiaste y dándote paz durante la prueba.",
      "Indicándote cuáles respuestas marcar incluso si no estudiaste el contenido del examen.",
      "Haciéndote sentir con más sueño para que no te paralice la ansiedad antes de comenzar.",
      "Revelándote cuáles preguntas tendrá el examen para que te prepares mejor en las horas previas.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección señala que el proceso de aprendizaje con el Señor ocurre 'línea por línea'. ¿Qué significa eso en la práctica del estudio cotidiano?",
    options: [
      "Que debes leer los libros escolares en voz alta, línea por línea, para mayor comprensión.",
      "Que el Señor solo te ayuda si cumples primero con una cuota mínima de horas de estudio propio.",
      "Que el aprendizaje es gradual: el Señor da dirección a medida que actuás con fe en cada paso pequeño, no todo de golpe.",
      "Que debes estudiar una sola materia a la vez de manera completamente lineal, sin saltar temas.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección invita a pedir al Señor cosas muy específicas relacionadas con la escuela, como 'el valor de hacer preguntas en clase'. ¿Por qué esa especificidad en la oración es importante?",
    options: [
      "Porque el Señor solo responde oraciones que incluyen peticiones muy detalladas y concretas.",
      "Porque orar sobre necesidades concretas del estudio muestra al Señor que realmente incluimos nuestra vida escolar en nuestra relación con Él.",
      "Porque las peticiones generales como 'ayúdame en la escuela' no tienen suficiente poder espiritual.",
      "Porque el Señor necesita información detallada para saber exactamente dónde intervenir en nuestra educación.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia tiene un examen importante mañana pero no estudió bien. Antes de dormir piensa: 'Ya oré, el Señor me ayudará'. Según el principio de esta lección, ¿qué le falta a su razonamiento?",
    options: [
      "Que debería orar más tiempo para compensar las horas de estudio que no hizo durante la semana.",
      "Que el Señor ayuda a quien se esfuerza primero; la promesa no reemplaza el estudio, sino que lo magnifica cuando existe.",
      "Que debería pedirle al Espíritu Santo que le revele las preguntas exactas que tendrá el examen.",
      "Que la oración antes de un examen no es tan efectiva como la oración durante el proceso de estudio previo.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás tiene dificultades con matemáticas y siente vergüenza de preguntar al profesor. Según la lección, ¿qué podría pedirle específicamente al Señor que lo ayude en esa área?",
    options: [
      "Que le dé comprensión matemática directamente mediante el Espíritu Santo sin necesitar explicaciones adicionales.",
      "Que lo libere del miedo a preguntar en clase o a pedir ayuda, de manera que pueda recibir la instrucción que necesita.",
      "Que cambie las circunstancias de la clase para que el profesor explique el tema de una manera que él pueda entender mejor.",
      "Que haga que las matemáticas le resulten innecesarias, ya que el Señor puede guiarlo hacia una carrera donde no las use.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Esta lección enseña que el Señor puede ayudar en los estudios académicos, y la Lección 188 enseña que la educación es un principio del Evangelio. ¿Cómo se complementan esas dos verdades?",
    options: [
      "La primera explica el cómo recibir ayuda divina en el estudio; la segunda explica el por qué estudiar importa eternamente. Juntas forman una visión completa del aprendizaje como acto de fe.",
      "Ambas lecciones enseñan exactamente lo mismo con diferentes ejemplos: que el Señor valora la educación académica tanto como la espiritual.",
      "La Lección 188 es más fundamental porque sin el por qué, la Lección 192 sobre el cómo pierde su base doctrinal.",
      "Son complementarias solo para los jóvenes que planean ir a la universidad; para quienes no planean hacerlo, la Lección 192 es más relevante.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 38: Éxodo 1
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/13-exodus-1-6/131-exodus-1?lang=spa
// correctAnswer pattern: 1, 3, 2, 0, 1, 3, 2
// ============================================================================
export const leccion38Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Faraón ordenó a las parteras israelitas matar a los hijos varones de las mujeres hebreas al nacer. ¿Qué hicieron las parteras y por qué?",
    options: [
      "Obedecieron la orden pero registraron cada caso para luego denunciar a Faraón ante el pueblo hebreo.",
      "Desobedecieron a Faraón porque temían a Dios más que a las consecuencias de no obedecer al rey.",
      "Fingieron obedecer pero se reunieron en secreto para planear cómo escapar de Egipto con las madres.",
      "Pidieron a Faraón más tiempo para considerar la orden antes de actuar, lo que permitió salvar a muchos niños.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Mateo 5:10–12 promete algo específico para quienes son perseguidos por causa de la justicia. ¿Cuál es esa promesa?",
    options: [
      "Que el Señor eliminará la persecución si su fe es suficientemente fuerte.",
      "Que recibirán compensación económica por el daño que sufran por su fidelidad.",
      "Que sus perseguidores eventualmente se arrepentirán al ver su ejemplo de vida.",
      "Que son bienaventurados y su galardón en los cielos será grande.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Las parteras enfrentaron una orden directa de Faraón —la autoridad más poderosa de su mundo— y eligieron desobedecer. ¿Qué principio sobre la obediencia a Dios versus la obediencia a las autoridades humanas ilustra esa decisión?",
    options: [
      "Que las autoridades civiles nunca deben ser obedecidas si pertenecen a una religión diferente a la del creyente.",
      "Que la desobediencia a las autoridades siempre está justificada cuando genera un resultado positivo visible.",
      "Que cuando los mandamientos de Dios y las exigencias humanas entran en conflicto directo, la fidelidad a Dios tiene prioridad.",
      "Que las parteras actuaron bien solo porque el resultado fue positivo; si hubiera fallado, la decisión habría sido incorrecta.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El texto dice que el Señor hizo bien a las parteras a causa de su valentía. ¿Qué enseña eso sobre la relación entre la fidelidad bajo presión y las bendiciones divinas?",
    options: [
      "Que el Señor recompensa la fidelidad, aunque esa recompensa no siempre es inmediata ni en la forma que esperamos.",
      "Que las bendiciones divinas solo llegan cuando la obediencia a Dios no tiene ningún costo personal para quien la ejerce.",
      "Que el Señor bendice exclusivamente a quienes enfrentan persecución por causas religiosas formalmente reconocidas.",
      "Que las parteras merecían la bendición principalmente por el resultado de sus acciones, no por el principio que las motivó.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Sofía está en un grupo de amigos que decide copiar en un examen. Le dicen que 'si no lo hace, la delatarán por otra cosa'. Según el principio de las parteras, ¿qué debería hacer Sofía?",
    options: [
      "Negarse a copiar aunque eso tenga consecuencias, confiando en que el Señor puede ayudarla a manejar la presión que venga después.",
      "Copiar esta vez para no generar conflicto, pero hablar con el maestro más adelante cuando sea más seguro hacerlo.",
      "Pedir a un adulto de confianza que intervenga antes de tomar cualquier decisión por sí sola.",
      "Delatarlos primero al maestro para neutralizar la amenaza antes de que puedan usarla contra ella.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás siente presión de sus amigos para ver contenido que sabe que va contra sus valores. Ellos le dicen que 'es solo entretenimiento y no le hace daño a nadie'. La lección habla del Espíritu Santo como ayuda en esos momentos. ¿Cómo podría el Espíritu ayudarlo concretamente?",
    options: [
      "Haciéndolo sentir culpable después de ver el contenido para que se arrepienta rápidamente.",
      "Dándole las palabras exactas que necesita decirle a sus amigos para que cambien de actitud.",
      "Permitiéndole que vea el contenido sin que le afecte espiritualmente, porque su intención es buena.",
      "Preparándolo de antemano con la fortaleza para decir no y actuar conforme a sus valores antes de que llegue la presión.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Las parteras desobedecieron a Faraón. Más adelante, Moisés también desafiaría la autoridad de Faraón. ¿Qué patrón sobre cómo el Señor avanza Su obra establece el libro de Éxodo desde sus primeros capítulos?",
    options: [
      "Que el Señor siempre necesita que haya una figura de autoridad civil que colabore con Sus propósitos para que puedan cumplirse.",
      "Que Dios frecuentemente usa a personas aparentemente sin poder —mujeres, pastores, extranjeros— para iniciar movimientos que ninguna fuerza humana podía prever ni detener.",
      "Que el conflicto entre el bien y el mal siempre involucra a naciones enteras, nunca a individuos que actúan por cuenta propia.",
      "Que el Señor retrasa Su intervención hasta que alguien con suficiente fe actúa primero, sin importar el costo de esa acción.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 39: Éxodo 2–4
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/13-exodus-1-6/132-exodus-2-4?lang=spa
// correctAnswer pattern: 0, 2, 3, 1, 0, 2, 3
// ============================================================================
export const leccion39Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Cuando el Señor se apareció a Moisés en la zarza ardiendo, ¿cómo demostró que lo conocía de manera personal e individual?",
    options: [
      "Lo llamó por su nombre antes de revelarle Su identidad y Su misión.",
      "Le mostró una visión de toda su vida pasada en Egipto y en el desierto.",
      "Le explicó exactamente por qué había huido de Egipto y adónde debía regresar.",
      "Le mostró el rostro del Padre Celestial para que supiera a quién servía.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "En Éxodo 3:7, el Señor describe Su reacción ante el sufrimiento de Israel en Egipto. ¿Qué tres cosas dice que hizo en respuesta a ese sufrimiento?",
    options: [
      "Esperó el momento correcto, eligió al libertador adecuado y preparó las plagas necesarias.",
      "Envió a Sus ángeles, fortaleció a los israelitas físicamente y debilitó al ejército de Faraón.",
      "Vio sus aflicciones, escuchó su clamor y conoció sus pesares.",
      "Se compadeció de ellos, recordó Su convenio con Abraham y comenzó a preparar la liberación.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Moisés respondió al llamado del Señor con dudas sobre su propia capacidad: '¿Quién soy yo para ir a Faraón?' El Señor respondió con una promesa, no con argumentos sobre las habilidades de Moisés. ¿Qué revela esa respuesta sobre cómo el Señor equipa a quienes llama?",
    options: [
      "Que el Señor llama solo a quienes ya tienen las habilidades necesarias, aunque no las reconozcan todavía.",
      "Que las dudas de Moisés eran una señal de que no era el candidato correcto para esa misión tan importante.",
      "Que el Señor espera que Sus siervos superen sus inseguridades antes de confirmarles el llamado divino.",
      "Que la promesa 'Yo estaré contigo' es la credencial suficiente: la capacidad del llamado viene de Dios, no del llamado.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El Señor instruyó a Moisés a quitarse las sandalias porque el suelo donde estaba era sagrado. ¿Qué principio sobre la presencia divina enseña ese detalle específico?",
    options: [
      "Que caminar descalzo era la señal de respeto que el Señor requería de todos Sus profetas en el Antiguo Testamento.",
      "Que la presencia del Señor santifica el lugar donde está; acercarse a Él requiere reconocer esa santidad y prepararse apropiadamente.",
      "Que el suelo del desierto del Sinaí tenía propiedades sagradas únicas que lo distinguían de otros lugares de la región.",
      "Que las sandalias de Moisés representaban su vida pasada en Egipto, de la cual debía desprenderse antes de aceptar el llamado.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Lucía se siente llamada a dar su testimonio en clase de Seminario pero piensa: 'No soy buena para hablar en público y no tengo palabras elegantes'. Usando el ejemplo de Moisés, ¿qué le diría esta lección?",
    options: [
      "Que el Señor puede estar con ella y darle las palabras cuando actúa con fe, igual que prometió estar con Moisés aunque él tampoco se sentía capaz.",
      "Que debería esperar hasta sentirse más segura de sí misma antes de compartir su testimonio públicamente.",
      "Que puede escribir su testimonio primero y leerlo en clase para no tener que hablar de manera improvisada.",
      "Que el Señor no llama a las personas tímidas a tareas que requieren hablar en público.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo está pasando por una situación muy difícil en su familia y siente que 'Dios está demasiado lejos para escuchar'. Éxodo 3:7 habla directamente a ese sentimiento. ¿Cómo responde ese versículo a la creencia de Mateo?",
    options: [
      "Le muestra que sus circunstancias son similares a las de Israel en Egipto, lo que garantiza que el Señor enviará a alguien que lo ayude pronto.",
      "Le recuerda que el sufrimiento prolongado es en sí mismo una prueba de que Dios está trabajando activamente en su situación.",
      "Le revela que el mismo Señor que vio las aflicciones de Israel, escuchó su clamor y conoció sus pesares, también ve, escucha y conoce lo que él está viviendo.",
      "Le enseña que Israel también creyó que Dios estaba lejos antes de la zarza, pero luego entendió que el Señor siempre estuvo presente.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Moisés pasó 40 años en el desierto antes del llamado en la zarza. El Señor describió Su conocimiento profundo del sufrimiento de Israel antes de actuar. ¿Qué patrón sobre el tiempo y la preparación divina emerge de esos dos elementos juntos?",
    options: [
      "Que el Señor actúa siempre en múltiplos de 40, un número que en el Antiguo Testamento siempre indica período de prueba.",
      "Que la aparente demora de Dios es siempre en realidad un período de preparación: del instrumento que usará y de la situación en que actuará.",
      "Que cuanto más tiempo espera el Señor para actuar, mayor será la magnitud del milagro que realizará para compensar la espera.",
      "Que Moisés necesitaba los 40 años para olvidar su vida en Egipto y así poder representar a Israel sin conflictos de identidad.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 40: Éxodo 5–6
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/13-exodus-1-6/133-exodus-5-6?lang=spa
// correctAnswer pattern: 2, 0, 1, 3, 2, 1, 0
// ============================================================================
export const leccion40Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Cuando Moisés y Aarón pidieron a Faraón que dejara ir al pueblo de Israel, ¿cuál fue la respuesta inmediata de Faraón?",
    options: [
      "Pidió tiempo para consultar con sus sacerdotes y magos antes de tomar una decisión.",
      "Se negó de plano y también amenazó con matar a Moisés si volvía a presentarse ante él.",
      "Se negó y además aumentó la carga de trabajo de los israelitas, quitándoles la paja para hacer ladrillos.",
      "Aceptó inicialmente pero luego cambió de opinión al consultar con sus consejeros y generales.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "En Éxodo 6:3–5, el Señor reiteró algo crucial a Moisés en el momento más difícil de la misión. ¿Qué le recordó?",
    options: [
      "Que Él recordaba Su convenio con Abraham, Isaac y Jacob y lo cumpliría sin importar las circunstancias presentes.",
      "Que Moisés debía ser más valiente y no dudar de la misión que el Señor le había dado en la zarza ardiendo.",
      "Que el tiempo de espera casi había terminado y las plagas comenzarían de inmediato si Faraón no cedía.",
      "Que el pueblo de Israel había pedido ayuda y el Señor nunca deja sin respuesta las oraciones de los justos.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Después del primer fracaso ante Faraón, los propios israelitas se quejaron de Moisés. Él se encontró solo, sin apoyo ni del faraón ni de su pueblo. ¿Qué verdad sobre la fidelidad al llamado ilustra ese momento?",
    options: [
      "Que seguir a Dios siempre trae la aprobación de las personas que nos rodean a mediano plazo.",
      "Que la fidelidad a Dios puede requerir avanzar incluso cuando los resultados inmediatos son negativos y quienes dependían de ti te cuestionan.",
      "Que Moisés cometió un error al confrontar a Faraón sin haber obtenido primero el apoyo de los líderes israelitas.",
      "Que el sufrimiento adicional del pueblo fue una señal de que Moisés se había adelantado al tiempo que el Señor había previsto para actuar.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El Señor le dijo a Moisés en Éxodo 6 que sería el 'dios de Faraón' y que Aarón sería su 'profeta'. ¿Qué modelo de la relación entre profeta y mensajero establece ese arreglo?",
    options: [
      "Que los profetas deben siempre tener un asistente que hable por ellos porque la revelación los deja sin voz.",
      "Que el liderazgo religioso siempre debe separar la autoridad espiritual de la comunicación pública.",
      "Que Dios usa a personas con diferentes dones en roles complementarios: quien recibe la revelación y quien la comunica.",
      "Que Aarón tenía mejor oratoria que Moisés y el Señor prefirió usar la habilidad natural de cada uno.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina empezó a leer las Escrituras diariamente, pero después de dos semanas sus calificaciones bajaron y tuvo un conflicto con su mejor amiga. Está tentada a pensar que 'hacer lo correcto lo empeora todo'. Según el principio de la lección, ¿qué perspectiva le ofrece la experiencia de Moisés?",
    options: [
      "Que debería revisar si sus nuevos hábitos le están quitando tiempo al estudio y así identificar la causa real del problema.",
      "Que las dificultades inmediatas no son evidencia de que Dios no apoya sus decisiones; la historia de Moisés muestra que el camino correcto a veces empeora antes de mejorar.",
      "Que el Señor permite esas pruebas para ver si su compromiso es genuino antes de enviarle las bendiciones prometidas.",
      "Que quizás la lectura diaria no es el hábito espiritual correcto para ella en este momento de su vida.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Benjamín oró pidiendo ayuda para mejorar sus notas, pero las siguientes semanas todo siguió igual. Ya no sabe si el Señor escucha. Usando el principio de Éxodo 6:3–5, ¿qué verdad podría reconfortarlo?",
    options: [
      "Que el Señor recuerda Sus convenios y Sus promesas no tienen fecha de vencimiento; que Él no olvidó su oración aunque la respuesta tarde.",
      "Que posiblemente no oró con suficiente fe, y por eso la respuesta aún no llegó a su situación específica.",
      "Que el Señor está esperando que él tome primero alguna acción concreta antes de responder su oración directamente.",
      "Que las respuestas a las oraciones siempre llegan, pero muchas veces en maneras completamente diferentes a las que pedimos.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Moisés actuó con fe en Éxodo 7:6 y 'como Jehová les mandó, así lo hicieron'. Pero en Éxodo 5 las consecuencias de su primera acción fiel fueron negativas. ¿Cuál es el principio central que une esos dos momentos?",
    options: [
      "Que la obediencia fiel al mandato de Dios no garantiza resultados positivos inmediatos, pero el Señor cumple Sus promesas en Su tiempo y manera propios.",
      "Que Moisés aprendió de su primer fracaso y ajustó su estrategia antes de actuar la segunda vez con Faraón.",
      "Que la diferencia entre el fracaso del capítulo 5 y el éxito del capítulo 7 fue la participación de Aarón como vocero.",
      "Que Dios necesitaba que Israel sufriera más antes de actuar para que la liberación tuviera mayor impacto en la memoria colectiva del pueblo.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 201: Jesucristo en el centro de la adoración en el templo
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/69-temple-preparation/691-christ-in-temple-worship?lang=spa
// correctAnswer pattern: 3, 1, 0, 2, 3, 1, 2
// ============================================================================
export const leccion201Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Según el élder Allen D. Haynie, ¿cuál es la razón más fundamental por la que los Santos de los Últimos Días van al templo?",
    options: [
      "Para completar las ordenanzas que el plan de salvación requiere antes de la muerte.",
      "Para encontrar un lugar de paz y silencio lejos de las distracciones del mundo.",
      "Para cumplir con las expectativas de la Iglesia de asistencia regular al templo.",
      "Debido a Jesucristo: Él es a quien el Padre desea que Sus hijos conozcan en el templo.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Éxodo 25:8 registra un deseo específico que el Señor expresó al mandar construir el tabernáculo. ¿Cuál fue?",
    options: [
      "Que Israel tuviera un lugar central donde ofrecer los sacrificios que Su ley requería.",
      "Que Él pudiera habitar en medio de Su pueblo a través de una morada sagrada construida por ellos.",
      "Que las tribus de Israel tuvieran un punto de reunión que reforzara su unidad como nación.",
      "Que el sumo sacerdote tuviera un lugar apropiado para administrar las ordenanzas de la ley de Moisés.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección afirma que 'cada símbolo, ordenanza y convenio' del templo está centrado en Jesucristo. ¿Qué implica eso para cómo debería prepararse un joven antes de ir al templo por primera vez?",
    options: [
      "Aprender a reconocer a Cristo en cada elemento de la adoración del templo, para que la experiencia sea un encuentro con el Salvador y no solo un ritual.",
      "Memorizar los nombres y funciones de cada sala del templo para entender su significado simbólico específico.",
      "Haber leído todos los capítulos del Antiguo Testamento relacionados con el tabernáculo de Moisés antes de ir.",
      "Hablar con alguien que ya fue al templo para que le cuente con detalle lo que va a vivir allí.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El presidente Nelson prometió bendiciones específicas a quienes adoran fielmente en el templo. Esas bendiciones incluyen respuestas a la oración, revelación personal y mayor fe. ¿Por qué el templo —en lugar de otro lugar— sería el contexto para recibir esas bendiciones específicas?",
    options: [
      "Porque el Señor prometió estar en el templo de manera especial, y Su presencia potencia la revelación y la fe de quienes lo buscan ahí.",
      "Porque las ordenanzas del templo activan automáticamente las bendiciones prometidas por el simple hecho de recibirlas.",
      "Porque la arquitectura sagrada del templo reduce las distracciones y permite una concentración que no es posible en otros lugares.",
      "Porque el templo es el único lugar donde el Espíritu Santo puede manifestarse con plena intensidad a los miembros de la Iglesia.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Rocío va a recibir su dotación próximamente y le tiene un poco de miedo a 'lo desconocido'. Según el principio central de la lección, ¿qué podría cambiar en su actitud si recuerda que el templo es un encuentro con Jesucristo?",
    options: [
      "Que debería pedir a alguien que ya fue al templo que le cuente exactamente qué va a pasar para eliminar el miedo a lo desconocido.",
      "Que puede acercarse con expectativa y apertura, porque no es un ritual desconocido sino una oportunidad de conocer mejor al Salvador.",
      "Que el miedo a lo desconocido es una señal espiritual de que todavía no está lista para recibir esas ordenanzas.",
      "Que su miedo desaparecerá completamente cuando cruce la puerta del templo y sienta la presencia del Señor allí.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Emilio fue al templo una vez pero no sintió 'nada especial' y ahora no tiene motivación para volver. La lección habla de 'pensar de manera celestial' como efecto del templo. ¿Qué podría hacer diferente en su próxima visita?",
    options: [
      "Ir con la expectativa concreta de encontrarse con Cristo en cada símbolo y ordenanza, en lugar de ir esperando una emoción intensa como señal de algo real.",
      "Invitar a un amigo la próxima vez para que la experiencia compartida produzca mayor impacto emocional.",
      "Hacer una lista de preguntas personales antes de ir y meditar en ellas durante la sesión, pidiendo respuestas específicas.",
      "Asistir con más frecuencia porque la sensibilidad espiritual en el templo crece en proporción a la cantidad de visitas acumuladas.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El tabernáculo de Moisés en Éxodo y los templos modernos comparten el mismo deseo del Señor: habitar entre Su pueblo. ¿Qué dice esa continuidad a lo largo de milenios sobre la naturaleza de Dios y Su relación con Sus hijos?",
    options: [
      "Que el Señor necesita lugares físicos sagrados para manifestarse, porque Su presencia no puede habitar en espacios no consagrados.",
      "Que la construcción de templos es la señal más confiable de que una dispensación está viviendo el Evangelio en plenitud.",
      "Que el deseo de Dios de habitar cerca de Sus hijos no ha cambiado a través del tiempo; el templo es Su manera de acercarse a nosotros en cada época.",
      "Que el templo físico es una preparación necesaria para el templo espiritual que cada persona debe construir en su corazón mediante los convenios.",
    ],
    correctAnswer: 2,
  },
];