import type { Question } from "@/lib/types";

// DISTRIBUCIÓN DE correctAnswer (70 preguntas):
// 0 → 18 | 1 → 17 | 2 → 18 | 3 → 17
// Patrón por lección varía para evitar predecibilidad

// ============================================================================
// LECCIÓN 195: Superar la procrastinación
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/67-succeed-in-school/674-overcoming-procrastination?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 1
// ============================================================================
export const leccion195Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Alma 34:33 usa una imagen específica sobre el tiempo de la vida mortal para advertir contra la procrastinación espiritual. ¿Cuál es esa advertencia?",
    options: [
      "Que quien procrastina el arrepentimiento en esta vida no encontrará oportunidad de hacerlo en la siguiente.",
      "Que este día de la vida se ha vuelto, para muchos, un día de negligencia, de tentación, de desvío e inactividad.",
      "Que el arrepentimiento tardío pierde su poder porque la fe que lo acompaña ya es demasiado débil para ser efectiva.",
      "Que el Señor acepta el arrepentimiento en cualquier momento, pero sus frutos son mayores cuando se ejerce temprano.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El élder Randall K. Bennett enseñó una definición específica del fracaso en el contexto del esfuerzo continuo. ¿Cuál es?",
    options: [
      "Que fracasamos realmente solo cuando damos un paso fiel y el resultado no es el que esperábamos.",
      "Que el fracaso es simplemente información sobre qué cambiar en el siguiente intento y no tiene carga moral.",
      "Que fracasamos realmente solo si nos detenemos completamente y no damos otro paso fiel hacia adelante.",
      "Que el fracaso ante el Señor ocurre cuando sabemos lo correcto y elegimos conscientemente no hacerlo.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La lección conecta el maná de Éxodo 16 con el principio de la procrastinación. El maná que se recolectaba tarde se pudrió. ¿Qué enseña esa imagen sobre las oportunidades de actuar que el Señor provee?",
    options: [
      "Que el Señor siempre provee una segunda oportunidad igual de buena que la primera para quien reconoce su error.",
      "Que la obediencia oportuna aprovecha la provisión del Señor; las oportunidades tienen una ventana de acción que no se prolonga indefinidamente.",
      "Que las consecuencias de procrastinar son siempre reversibles si el arrepentimiento es genuino y oportuno.",
      "Que el maná podrido es una imagen del fracaso, pero como el élder Bennett enseñó, el fracaso solo ocurre si no se intenta de nuevo al día siguiente.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección sugiere determinar por qué procrastinamos antes de intentar superarlo. ¿Por qué ese diagnóstico previo es más útil que simplemente 'intentar más'?",
    options: [
      "Porque diferentes causas requieren diferentes estrategias; lo que funciona para procrastinación por miedo no funciona para procrastinación por falta de interés.",
      "Porque el Señor solo puede ayudar con la procrastinación cuando la persona entiende su propio problema con claridad.",
      "Porque intentar sin diagnóstico produce fracasos repetidos que dañan la autoestima y reducen la disposición a seguir intentando.",
      "Porque la procrastinación que no se diagnostica correctamente tiende a transformarse en otros problemas espirituales más graves.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Benjamín lleva semanas queriendo comenzar a estudiar las Escrituras diariamente pero siempre lo pospone 'para mañana'. El élder Bennett enseña que el único fracaso real es no dar otro paso fiel. ¿Qué paso concreto y pequeño podría dar Benjamín hoy?",
    options: [
      "Comprometerse con el maestro de Seminario a estudiar al menos 30 minutos diarios y rendir cuentas cada semana.",
      "Escribir en su teléfono un recordatorio para estudiar las Escrituras a la misma hora todos los días de la semana.",
      "Abrir las Escrituras ahora mismo —aunque sea por cinco minutos— sin esperar el momento ideal o la cantidad perfecta de tiempo.",
      "Pedir a sus padres que le recuerden estudiar hasta que el hábito esté formado y no necesite recordatorio externo.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Camila dice que procrastina porque 'las tareas le parecen demasiado grandes y no sabe por dónde empezar'. La lección sugiere una estrategia basada en el modelo de la Creación y el principio de la fe. ¿Cuál sería la respuesta más coherente con esos principios?",
    options: [
      "Dividir la tarea en pasos tan pequeños que ninguno sea intimidante y pedir al Señor ayuda para dar el primer paso hoy, aunque sea mínimo.",
      "Esperar a tener más energía o motivación para comenzar, ya que la calidad del trabajo sufre cuando se inicia sin el estado de ánimo adecuado.",
      "Pedir ayuda a un compañero para hacer la tarea juntos, porque el trabajo colaborativo reduce la sensación de enormidad del proyecto.",
      "Hablar con el maestro sobre reducir el alcance de la tarea para hacerla más manejable dado el nivel actual de la clase.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La procrastinación espiritual (Alma 34:33) y la procrastinación académica (Éxodo 16) son tratadas en la misma lección. ¿Cuál es el principio doctrinal que une ambas dimensiones?",
    options: [
      "Que el Señor se preocupa tanto por el éxito temporal como por el eterno, por lo que la procrastinación en cualquier área merece la misma seriedad.",
      "Que la procrastinación es siempre una forma de desobediencia, ya que el Señor siempre da instrucciones específicas sobre cuándo actuar.",
      "Que las oportunidades de actuar tienen un tiempo; la inacción —espiritual o académica— no es neutral sino que cierra puertas que no siempre vuelven a abrirse de la misma manera.",
      "Que la fe en Jesucristo es la única motivación verdaderamente efectiva para superar la procrastinación en ambas dimensiones de la vida.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 58: Deuteronomio 6:1–6
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/19-deuteronomy-6-34/191-deuteronomy-6-1-6?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 1, 3, 0
// ============================================================================
export const leccion58Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Moisés pronunció Deuteronomio 6 justo antes de que Israel entrara a Canaán. ¿Cuál fue el contexto que hace tan significativa la instrucción de amar a Dios 'con todo tu corazón, y con toda tu alma, y con todas tus fuerzas'?",
    options: [
      "Que Israel acababa de perder cuarenta años en el desierto por su falta de fe y necesitaba una instrucción más estricta.",
      "Que eran las últimas palabras que Moisés les daría antes de morir, convirtiendo esa instrucción en el resumen de todo su ministerio.",
      "Que Canaán estaba llena de tentaciones religiosas y el amor a Dios sería la protección más efectiva contra la idolatría.",
      "Que Josué aún no había recibido su llamamiento formal y Moisés quería asegurar la continuidad espiritual del liderazgo.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El presidente Jeffrey R. Holland enseñó sobre la 'primera gran verdad de la eternidad'. ¿Cuál es esa verdad según su enseñanza?",
    options: [
      "Que el amor de Dios hacia Sus hijos es perfecto y constante, independientemente del comportamiento de ellos.",
      "Que el Evangelio de Jesucristo es la única fuente de verdad completa disponible para la humanidad.",
      "Que el amor que Dios nos tiene es proporcional al amor que nosotros le mostramos a través de nuestra obediencia.",
      "Que Dios nos ama a nosotros con todo Su corazón, alma, mente y fuerza, y que ese amor es la fuente de toda la enseñanza del Evangelio.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Deuteronomio 6:7 instruye a hablar estas palabras a los hijos 'estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes'. ¿Qué modelo de enseñanza religiosa establece esa instrucción?",
    options: [
      "Que el amor a Dios no puede compartimentarse en momentos 'religiosos'; debe impregnar las conversaciones de la vida cotidiana en todos sus contextos.",
      "Que las familias deben tener sesiones formales de estudio religioso en cada una de esas cuatro instancias del día.",
      "Que los momentos más eficaces para la enseñanza espiritual son los de transición —al levantarse y al acostarse— por su carga emocional.",
      "Que la responsabilidad de la educación religiosa recae principalmente en los padres y los hijos son receptores pasivos de esa enseñanza.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Jesús citó Deuteronomio 6:5 cuando le preguntaron cuál era el primer gran mandamiento. Al conectar ese versículo con el segundo —'amarás a tu prójimo'— dijo que 'de estos dos mandamientos depende toda la ley'. ¿Qué implica eso sobre la estructura interna de todos los demás mandamientos?",
    options: [
      "Que los dos mandamientos del amor a Dios y al prójimo son más importantes que todos los demás juntos y pueden reemplazarlos.",
      "Que los demás mandamientos son derivaciones específicas de esos dos principios: todos se pueden entender como aplicaciones del amor a Dios o del amor al prójimo.",
      "Que los mandamientos específicos —como el sábado o la honestidad— son secundarios y pueden ignorarse si se está cumpliendo bien con el amor.",
      "Que el amor a Dios y al prójimo son condiciones previas que deben cumplirse antes de poder guardar los mandamientos específicos correctamente.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Nicolás dice que ama a Dios pero que 'no tiene ganas de orar todos los días ni de estudiar las Escrituras'. El presidente Holland enseña que Dios nos ama con todo Su corazón. ¿Cómo conecta esa verdad con la motivación para los hábitos espirituales?",
    options: [
      "Que cuando uno entiende profundamente cuánto es amado por Dios, buscar la conexión con Él a través de la oración y las Escrituras se convierte en una respuesta natural a ese amor, no solo en una obligación.",
      "Que el amor de Dios es incondicional y no depende de los hábitos espirituales de la persona; puede amarlo sin practicarlos.",
      "Que el amor a Dios se demuestra principalmente en el trato a las personas que nos rodean, no en las prácticas espirituales personales.",
      "Que si Nicolás orara con mayor frecuencia, sentiría más amor de Dios, lo que crearía un ciclo positivo de motivación.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sofía tiene miedo de que sus errores pasados hayan dañado su relación con Dios de manera permanente. El principio de Deuteronomio 6:5 —amar a Dios con todo el corazón— y la enseñanza del presidente Holland le hablan directamente. ¿Qué verdad podría cambiar su perspectiva?",
    options: [
      "Que el amor de Dios hacia ella es proporcional a su fidelidad actual, por lo que si mejora ahora, su relación puede restaurarse.",
      "Que el daño causado por los errores pasados requiere tiempo y esfuerzo sostenido para ser reparado completamente.",
      "Que el mandamiento de amar a Dios incluye recibirle a Él primero: confiar en que Él la ama con todo Su corazón antes de que ella haga nada para 'merecer' ese amor de vuelta.",
      "Que Sofía necesita un proceso formal de arrepentimiento antes de poder sentir el amor de Dios plenamente en su vida.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Deuteronomio 6 resume toda la ley en el amor a Dios. El presidente Holland añade que Dios también nos ama a nosotros con todo lo que tiene. ¿Cuál es la estructura relacional que emerge cuando esas dos verdades se sostienen juntas?",
    options: [
      "Que el amor entre Dios y Sus hijos es una relación de obligación mutua: Él cumple Su parte y nosotros cumplimos la nuestra mediante la obediencia.",
      "Que el amor de Dios hacia nosotros es el fundamento que hace posible y da sentido al amor que nosotros le devolvemos; no es una transacción sino una relación de amor iniciada por Él.",
      "Que ambos amores son equivalentes en importancia: el de Dios hacia nosotros y el nuestro hacia Él tienen el mismo peso en la relación.",
      "Que conocer el amor de Dios elimina el esfuerzo necesario para guardar los mandamientos porque la obediencia se vuelve completamente natural.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 59: Deuteronomio 6–8
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/19-deuteronomy-6-34/192-deuteronomy-6-8?lang=spa
// correctAnswer pattern: 3, 1, 2, 0, 3, 1, 2
// ============================================================================
export const leccion59Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Deuteronomio 8:11–14 contiene la advertencia central de Moisés a Israel antes de entrar a Canaán. ¿Cuál era el peligro específico que identificó?",
    options: [
      "Que los cananeos podían seducirlos con sus prácticas religiosas si Israel no mantenía sus rituales con exactitud.",
      "Que la escasez de recursos en Canaán tentaría a Israel a buscar ayuda de naciones vecinas antes que del Señor.",
      "Que la complejidad de gobernar un estado establecido les haría olvidar las lecciones aprendidas en el desierto.",
      "Que la prosperidad —casas, tierras, riquezas— podría llevarlos a atribuirse el mérito de su éxito y olvidarse de que todo vino del Señor.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El élder Dale G. Renlund enseñó que el Padre Celestial quiere que recordemos Su bondad y la de Su Hijo. ¿Qué efecto específico produce ese recuerdo según su enseñanza?",
    options: [
      "Que nos volvemos más agradecidos en general, lo que mejora nuestra actitud hacia las personas que nos rodean.",
      "Que nos volvemos más humildes, firmes y dedicados a la oración al reflexionar en la compasión de Dios hacia nosotros.",
      "Que el recuerdo de la bondad divina actúa como escudo contra las tentaciones que el mundo presenta.",
      "Que nuestra perspectiva y entendimiento del Plan de Salvación se amplían al ver cómo Dios ha actuado históricamente.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Deuteronomio 8:17 advierte contra decir 'mi poder y la fuerza de mi mano me han traído esta riqueza'. ¿Por qué esa actitud específica es espiritualmente peligrosa, según la lección?",
    options: [
      "Porque atribuirse el mérito de los propios logros es una forma de orgullo que el Señor equipara con la idolatría.",
      "Porque quien cree que sus logros son propios deja de orar y de buscar la guía del Señor, rompiendo así la dependencia que sostiene la relación con Él.",
      "Porque esa actitud invariablemente lleva a tratar con injusticia a las personas que contribuyeron al éxito de uno.",
      "Porque el Señor puede quitar lo que dio cuando Sus hijos dejan de reconocerlo como la fuente de sus bendiciones.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección sugiere llevar un registro de las bendiciones y evidencias del poder de Dios como herramienta espiritual. ¿Por qué ese registro funciona mejor que simplemente intentar 'recordar más' sin estructura?",
    options: [
      "Porque el registro escrito puede compartirse con otras personas que también necesitan recordar la bondad de Dios en sus vidas.",
      "Porque el Señor prometió en las Escrituras que quienes escriben sus experiencias espirituales recibirán más revelación.",
      "Porque la escritura activa la atención hacia lo que normalmente pasa desapercibido, convirtiendo el agradecimiento en un ejercicio habitual en lugar de ocasional.",
      "Porque los registros escritos pueden revisarse en momentos de prueba para recordar que el Señor ya actuó antes y puede hacerlo de nuevo.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia tuvo un año escolar excelente y dice: 'Me esforcé mucho y los resultados lo reflejan.' No menciona al Señor. Deuteronomio 8:17 habla directamente de esa actitud. ¿Qué le diría la lección?",
    options: [
      "Que su esfuerzo fue real y merece reconocimiento; atribuirlo todo a Dios sería deshonrar su propio trabajo y capacidad.",
      "Que el esfuerzo humano y la providencia divina coexisten sin contradicción; reconocer al Señor no niega su esfuerzo sino que lo ubica en la perspectiva correcta.",
      "Que debería orar de inmediato para pedir perdón por haberse atribuido los resultados antes de agradecérselos al Señor.",
      "Que el Señor puede quitar ese éxito si ella continúa sin reconocerlo, por lo que es urgente que cambie su actitud rápidamente.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás dice que 'las cosas van bien ahora, así que no necesito orar tanto'. La advertencia de Moisés en Deuteronomio 8 habla exactamente de ese momento. ¿Qué le diría la lección?",
    options: [
      "Que el momento de mayor prosperidad es precisamente el de mayor riesgo espiritual, porque la comodidad reduce la sensación de necesidad de Dios cuando en realidad esa necesidad no cambió.",
      "Que debería aprovechar el buen momento para prepararse espiritualmente para cuando lleguen tiempos difíciles.",
      "Que el Señor entiende que en tiempos de prosperidad la intensidad de la oración puede ser menor sin consecuencias espirituales significativas.",
      "Que el problema no es orar menos sino asegurarse de que cuando ora, lo hace con más profundidad y calidad.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Israel olvidó al Señor en la prosperidad (Deuteronomio 8). El ciclo de Jueces muestra que ese olvido produjo apostasía repetida. ¿Qué patrón sobre la memoria espiritual emerge de esos dos textos juntos?",
    options: [
      "Que la memoria espiritual es frágil por naturaleza y requiere estructuras deliberadas de renovación —rituales, registros, conversaciones— para mantenerse activa.",
      "Que el olvido de Dios en la prosperidad es una debilidad específica de Israel y no necesariamente un patrón universal de la naturaleza humana.",
      "Que el Señor diseñó las dificultades precisamente para que Israel no pudiera olvidarlo; en ausencia de pruebas, el olvido era inevitable.",
      "Que quienes tienen un testimonio genuino no experimentan el tipo de olvido que afectó a Israel, ya que la conversión real produce una memoria permanente.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 61: Josué 1
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/20-joshua-1-24/201-joshua-1?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 3
// ============================================================================
export const leccion61Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El Señor le repitió la misma frase a Josué tres veces en el mismo capítulo. ¿Cuál fue esa frase y en qué versículos aparece?",
    options: [
      "\"No te dejaré, ni te desampararé\", en Josué 1:5, 9 y 18.",
      "\"Esfuérzate y sé valiente\", en Josué 1:6, 7 y 9.",
      "\"Como estuve con Moisés, estaré contigo\", en Josué 1:5, 9 y 17.",
      "\"Mira que te mando que te esfuerces\", en Josué 1:7, 9 y 18.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El Señor le dio a Josué una instrucción específica sobre el libro de la ley como fuente de fortaleza. ¿Cuál fue exactamente esa instrucción?",
    options: [
      "Que lo leyera al pueblo completo en cada ocasión de asamblea general para mantener la memoria colectiva.",
      "Que lo guardara con el arca del convenio para que su santidad preservara la fidelidad del pueblo.",
      "Que meditara en él de día y de noche para que su camino prosperara y todo le saliese bien.",
      "Que lo estudiara con los ancianos de Israel antes de cada decisión militar importante que enfrentara.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Josué recibió el liderazgo justo después de la muerte de Moisés, el profeta más grande de Israel. El Señor le prometió 'como estuve con Moisés, estaré contigo'. ¿Qué enseña esa promesa sobre cómo el Señor transfiere Su apoyo a nuevos líderes?",
    options: [
      "Que el Señor está ligado a las personas que llama, no a los cargos; Su apoyo sigue al individuo fiel independientemente de su posición formal.",
      "Que la presencia del Señor con un nuevo líder depende de que el pueblo lo acepte plenamente como reemplazo del anterior.",
      "Que la fortaleza del Señor está disponible para quien acepta un llamado con humildad, independientemente de cuán grande fuera su predecesor.",
      "Que el Señor compara siempre a los nuevos líderes con los anteriores para motivarlos a alcanzar el mismo nivel de fidelidad.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El Señor no solo le prometió estar con Josué sino también le indicó acciones específicas que Josué debía tomar: meditar en la ley, no apartarse de ella. ¿Qué enseña esa combinación de promesa divina y responsabilidad humana?",
    options: [
      "Que la promesa del Señor de estar con Josué dependía condicionalmente de que él cumpliera las instrucciones al pie de la letra.",
      "Que el Señor acompaña, pero el éxito también requiere la fidelidad activa del llamado; la presencia de Dios no reemplaza el esfuerzo humano.",
      "Que meditar en la ley era más importante que la presencia del Señor como fuente de valentía para los desafíos que vendría.",
      "Que el Señor diseñó esas instrucciones para que Josué tuviera algo concreto que hacer mientras esperaba la manifestación visible del apoyo divino.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina acaba de ser llamada a presidir la clase de Mujeres Jóvenes de su barrio y se siente totalmente sin preparación. La promesa del Señor a Josué habla directamente a ese sentimiento. ¿Qué le diría?",
    options: [
      "Que el Señor estará con ella de la misma manera en que estuvo con quienes la precedieron; el llamado viene con la compañía del Señor, no solo con la responsabilidad.",
      "Que debería consultar con líderes más experimentadas antes de comenzar para asegurarse de no cometer errores en las primeras semanas.",
      "Que la sensación de no estar preparada es una señal de que necesita más estudio y preparación antes de asumir el llamado con confianza.",
      "Que el Señor generalmente llama a personas que ya tienen las habilidades necesarias, y su inseguridad probablemente refleja subestimación de sus propias capacidades.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sebastián tiene un examen difícil la próxima semana y dice: 'No importa cuánto estudie; siempre me congelo en los exámenes.' El principio de Josué 1:8 sobre meditar en la ley 'de día y de noche' ofrece una perspectiva. ¿Cómo aplicaría eso a su situación?",
    options: [
      "Que debería estudiar en forma de meditación reflexiva en lugar de memorización mecánica, integrando el material de manera más profunda.",
      "Que el Señor puede fortalecer su mente si estudia el material regularmente y pide ayuda divina específica para ese examen.",
      "Que la preparación constante y gradual —en lugar del estudio concentrado al final— reduce la ansiedad porque el material ya está integrado, no aprendido de emergencia.",
      "Que debería orar antes de cada sesión de estudio para invitar el Espíritu Santo como ayudante en el proceso de memorización.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "En Josué 1, el Señor da promesas ('estaré contigo') e instrucciones ('medita en la ley'). En Éxodo 3, le dio promesas ('Yo estaré contigo') e instrucciones ('ve a Faraón'). ¿Cuál es el patrón consistente en cómo el Señor llama y equipa a Sus siervos?",
    options: [
      "Que el Señor siempre da más instrucciones que promesas porque Su apoyo depende principalmente de la obediencia del llamado.",
      "Que el patrón varía según la personalidad del siervo: a Moisés le dio más instrucciones porque era más inseguro que Josué.",
      "Que el Señor combina Su presencia prometida con acciones concretas requeridas del llamado, porque la presencia de Dios no elimina la responsabilidad humana.",
      "Que las promesas son siempre más importantes que las instrucciones; las instrucciones son solo formas de fortalecer la confianza en la promesa.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 62: Josué 2–4
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/20-joshua-1-24/202-joshua-2-4?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 3, 1
// ============================================================================
export const leccion62Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Rahab ayudó a los espías israelitas en Jericó a pesar del riesgo personal que eso implicaba. ¿Cuál fue el argumento que dio para explicar su decisión?",
    options: [
      "Que Israel era más poderoso militarmente y apoyarlos era la decisión más inteligente para su supervivencia.",
      "Que los espías le prometieron protección y eso era suficiente garantía para confiar en ellos y ocultarlos.",
      "Que Jehová vuestro Dios es Dios arriba en los cielos y abajo en la tierra; la fama de Sus actos precedía al ejército israelita.",
      "Que ella ya no se sentía leal a su ciudad porque había sido tratada con injusticia por su propia gente durante años.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El cruce del Jordán requirió un acto de fe previo al milagro. ¿Cuál fue exactamente ese acto y cuándo se dividió el río?",
    options: [
      "El agua se dividió cuando Josué extendió su vara sobre el río, siguiendo el patrón del Mar Rojo con Moisés.",
      "Las aguas se detuvieron cuando los sacerdotes mojaron los pies en el río y comenzaron a avanzar; el milagro precedió al acto.",
      "El pueblo cruzó de noche mientras las aguas eran retenidas por el campamento de ángeles apostados corriente arriba.",
      "Las aguas se dividieron cuando las plantas de los pies de los sacerdotes que cargaban el arca se hundieron en las aguas; la acción de fe precedió al milagro.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El Señor instruyó a Israel a tomar doce piedras del río Jordán y construir un monumento. ¿Cuál fue el propósito específico declarado para ese monumento?",
    options: [
      "Que sirviera como ofrenda de dedicación al Señor por la victoria de cruzar el río en seco sin pérdidas.",
      "Que marcara el territorio de Israel desde el río, estableciendo un límite visible de la tierra prometida.",
      "Que cuando los hijos preguntaran el significado de esas piedras, los padres les enseñaran sobre el poder del Señor: una herramienta de transmisión espiritual intergeneracional.",
      "Que recordara al pueblo que el Señor los había detenido en ese lugar para renovar Sus convenios antes de entrar a Canaán.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Rahab era una persona de la cual nadie habría esperado que jugara un papel en la historia sagrada de Israel. ¿Qué enseña su inclusión —e incluso su aparición en la genealogía de Jesucristo en Mateo 1— sobre a quiénes incluye el Señor en Su obra?",
    options: [
      "Que el Señor puede usar a cualquier persona que tenga fe en Él, independientemente de su pasado, su origen o su lugar en la sociedad.",
      "Que el Señor recompensa a quienes ayudan a Su pueblo con inclusión en Su historia, independientemente de sus motivaciones.",
      "Que Rahab es un caso excepcional que demuestra la misericordia extrema del Señor, pero no representa un principio general.",
      "Que el Señor planificó desde antes que Rahab fuera incluida en la genealogía de Cristo, lo que justifica cualquier medio que ella usó.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Lucía quiere mejorar su relación con el Señor pero dice: 'Tengo demasiado pasado negativo; alguien como yo no puede formar parte de la historia del Señor.' El ejemplo de Rahab habla directamente a esa creencia. ¿Qué le diría?",
    options: [
      "Que el pasado de Rahab fue perdonado porque actuó heroicamente, y Lucía también puede hacerlo si encuentra la oportunidad correcta.",
      "Que el Señor incluye en Su historia a personas como Rahab —con pasado complejo— cuando eligen confiar en Él y actuar con fe; el pasado no descalifica a nadie del presente.",
      "Que el ejemplo de Rahab es uno de los casos más extremos y su situación personal probablemente no requiere tanto contraste.",
      "Que lo importante no es el pasado sino el futuro; si Lucía se compromete ahora con el Señor, el pasado dejará de ser relevante.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín tiene que dar su primer discurso en la reunión sacramental y tiene mucho miedo. El patrón del cruce del Jordán —actuar primero, recibir el milagro después— habla a esa situación. ¿Qué implicación práctica tiene?",
    options: [
      "Que debería prepararse perfectamente de antemano para reducir el margen de error y minimizar el riesgo de fracasar.",
      "Que el milagro de las palabras correctas y la calma llegarán si da el primer paso de ponerse de pie y comenzar, aunque no tenga certeza del resultado.",
      "Que la experiencia de hablar en público se acumula con el tiempo y no debe esperar un milagro para la primera vez.",
      "Que debería pedir al obispo que le permita posponer el discurso hasta que se sienta más preparado y con menos miedo.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Rahab actuó con fe sin garantía de sobrevivir. Los sacerdotes metieron los pies en el río antes de que se dividiera. Las doce piedras fueron para que las futuras generaciones supieran lo que el Señor hizo. ¿Qué patrón sobre la fe y la memoria emerge de esos tres elementos juntos?",
    options: [
      "Que la fe activa precede al milagro, el milagro confirma la fe, y los memoriales preservan esa fe para quienes no lo vivieron directamente.",
      "Que los milagros del Señor siempre requieren tres elementos: un acto de fe, una persona vulnerable y un memorial físico que preserve la experiencia.",
      "Que la fe de Rahab fue mayor que la de los sacerdotes porque ella actuó sin haber visto ninguno de los milagros previos de Israel.",
      "Que los memoriales físicos como las doce piedras son la principal manera en que el Señor preserva la fe entre generaciones.",
    ],
    correctAnswer: 1,
  },
];

// ============================================================================
// LECCIÓN 190: Superar los obstáculos para ampliar la formación académica
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/66-future-education-and-employment/663-overcoming-obstacles-to-furthering-education?lang=spa
// correctAnswer pattern: 1, 3, 0, 2, 1, 3, 0
// ============================================================================
export const leccion190Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 93:36 contiene la base doctrinal de por qué la educación importa espiritualmente. ¿Cuál es?",
    options: [
      "Que el aprendizaje es la preparación necesaria para el servicio en el templo y en la misión de tiempo completo.",
      "Que la gloria de Dios es la inteligencia, o en otras palabras, la luz y la verdad; por lo tanto, crecer en conocimiento es también crecer hacia Él.",
      "Que quienes más aprenden en esta vida tendrán mayor autoridad en el reino de Dios en la eternidad.",
      "Que el Señor prometió expandir la mente de quienes buscan el conocimiento con fe y oración en D&C 88:118.",
    ],
    correctAnswer: 1,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El élder Clark G. Gilbert enseñó sobre una transición espiritual importante en el camino del aprendizaje. ¿Cuál es esa transición?",
    options: [
      "De estudiar solo para aprobar exámenes a estudiar para servir a los demás con los conocimientos adquiridos.",
      "De depender de los maestros como fuente principal a buscar el Espíritu Santo como el verdadero maestro.",
      "De confiar únicamente en instituciones educativas formales a buscar también el aprendizaje informal y autodidacta.",
      "De actuar solo con determinación y esfuerzo propio a buscar también el poder fortalecedor de la gracia del Salvador.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El principio de los sacerdotes en el Jordán —avanzar con fe aunque el obstáculo no haya desaparecido— se aplica directamente a los obstáculos educativos. ¿Qué diferencia práctica produce aplicar ese principio frente a un obstáculo como la falta de recursos económicos?",
    options: [
      "Que el alumno da el primer paso de postularse, buscar becas o explorar opciones accesibles antes de tener garantía de que el obstáculo desaparecerá, en lugar de esperar que las condiciones sean perfectas primero.",
      "Que la fe garantiza que el obstáculo económico se resolverá si el alumno ora con suficiente intensidad y especificidad.",
      "Que el alumno acepta el obstáculo como parte del plan del Señor y busca otra vocación más compatible con sus circunstancias actuales.",
      "Que el esfuerzo propio es suficiente; el principio de los sacerdotes enseña que la acción humana precede a la ayuda divina, no que ambas van juntas.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "D&C 123:17 instruye a 'hacer con buen ánimo cuanta cosa esté a nuestro alcance'. ¿Qué implica la frase 'esté a nuestro alcance' para un joven con obstáculos reales en su camino educativo?",
    options: [
      "Que el Señor solo espera el esfuerzo posible dentro de las circunstancias reales, no un ideal imposible de alcanzar.",
      "Que el joven debe alcanzar el máximo nivel educativo posible en su contexto antes de recibir la ayuda del Señor.",
      "Que los obstáculos reales como la pobreza o la distancia excusan al joven de intentar avanzar educativamente.",
      "Que el buen ánimo es el factor más determinante; con la actitud correcta, los obstáculos dejan de ser obstáculos reales.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Rocío quiere estudiar una carrera universitaria pero sus padres no la apoyan económicamente y vive lejos de cualquier institución. Dice: 'No hay manera.' Usando el principio del Jordán y D&C 93:36, ¿cuál sería el primer paso de fe concreto?",
    options: [
      "Investigar activamente todas las opciones disponibles —educación a distancia, becas, programas de la Iglesia, trabajo nocturno— antes de concluir que no hay manera, y llevar esa búsqueda al Señor en oración.",
      "Hablar con sus padres nuevamente con más argumentos para convencerlos de que cambien de opinión sobre su educación.",
      "Esperar a que su situación económica mejore naturalmente para entonces comenzar el proceso educativo con más base.",
      "Buscar trabajo primero para ahorrar durante unos años y luego estudiar desde una posición económica más estable.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás siente que 'no es lo suficientemente inteligente' para seguir estudiando. El élder Gilbert enseñó sobre pasar de la determinación a la gracia. ¿Cómo cambiaría ese principio su perspectiva sobre sus propias capacidades?",
    options: [
      "Que la inteligencia académica no es innata sino que puede desarrollarse con esfuerzo suficiente y la motivación correcta.",
      "Que sus limitaciones percibidas son reales pero el Señor puede compensarlas si Tomás hace su parte con todo el esfuerzo posible.",
      "Que el Señor puede expandir sus capacidades más allá de lo que él mismo considera posible si combina su máximo esfuerzo con la gracia fortalecedora de Cristo.",
      "Que la sensación de no ser suficientemente inteligente es una mentira del adversario que debe rebatir con afirmaciones positivas sobre sí mismo.",
    ],
    correctAnswer: 3,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Esta lección conecta el relato de los sacerdotes en el Jordán (fe que actúa antes de ver el camino) con D&C 93:36 (la inteligencia como gloria de Dios) y D&C 123:17 (hacer lo que está al alcance). ¿Cuál es el principio integrador que une esos tres elementos?",
    options: [
      "Que la educación es una responsabilidad sagrada que el Señor apoya activamente cuando Sus hijos combinan fe activa con el máximo esfuerzo dentro de sus circunstancias reales.",
      "Que los tres textos enseñan el mismo principio con diferentes palabras: que la obediencia a los mandamientos del Señor incluye perseguir el aprendizaje.",
      "Que el apoyo divino en la educación es principalmente emocional: el Señor da paz y motivación mientras que el trabajo y las soluciones son responsabilidad humana.",
      "Que la gracia del Salvador puede reemplazar el esfuerzo humano cuando los obstáculos son genuinamente insuperables con recursos propios.",
    ],
    correctAnswer: 0,
  },
];

// ============================================================================
// LECCIÓN 63: Josué 23–24
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/20-joshua-1-24/203-joshua-23-24?lang=spa
// correctAnswer pattern: 3, 1, 0, 2, 3, 0, 2
// ============================================================================
export const leccion63Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Al final de su vida, Josué convocó a todas las tribus de Israel y les presentó una elección clara. ¿Cuáles fueron las dos alternativas que les presentó?",
    options: [
      "Seguir la ley de Moisés en su totalidad o adoptar las leyes más simples de los pueblos vecinos como compromiso.",
      "Permanecer en Canaán y someterse a los pueblos que quedaban o conquistar el resto de los territorios prometidos.",
      "Elegir a sus propios líderes tribales o mantener el liderazgo centralizado que Josué había establecido durante su gobierno.",
      "Servir a los dioses de sus antepasados o a los dioses de los amorreos en cuya tierra habitaban, o servir a Jehová.",
    ],
    correctAnswer: 3,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "La declaración de Josué 'pero yo y mi casa serviremos a Jehová' es una de las más citadas del Antiguo Testamento. ¿Cuál fue el contexto inmediato que la hizo más poderosa?",
    options: [
      "Que Josué la pronunció después de que la mayoría del pueblo ya había decidido servir a otros dioses, convirtiéndola en una declaración de resistencia solitaria.",
      "Que Josué la pronunció antes de presentar las opciones al pueblo, estableciendo así su posición personal antes de pedir la del pueblo.",
      "Que el pueblo ya había respondido que servirían a Jehová, y Josué les advirtió que no podrían hacerlo por sus propias fuerzas antes de confirmar su posición personal.",
      "Que Josué tenía ya más de cien años cuando la pronunció, lo que la convirtió en un testamento de toda una vida de servicio al Señor.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Josué advirtió al pueblo: 'No podréis servir a Jehová' (Josué 24:19), después de que ellos prometieron que lo harían. ¿Por qué esa advertencia, en lugar de simplemente aceptar su compromiso?",
    options: [
      "Porque Josué desconfiaba de la sinceridad del pueblo después de décadas de ver sus inconsistencias en el desierto.",
      "Porque el Señor es santo y el compromiso con Él es exigente; Josué quería que entendieran el peso real de lo que prometían antes de comprometerse.",
      "Porque la ley de Moisés era tan compleja que ningún pueblo podía guardarla completamente sin ayuda sobrenatural continua.",
      "Porque Josué sabía que moriría pronto y quería dejar al pueblo con una advertencia que los mantuviera humildes después de su muerte.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Josué usó la memoria histórica —todo lo que el Señor había hecho por sus padres— como argumento para motivar la elección de servirle. ¿Por qué la historia pasada es un argumento válido para una decisión presente?",
    options: [
      "Porque quien no recuerda la historia está condenado a repetir los errores del pasado, una verdad aplicable tanto a Israel como a cualquier individuo.",
      "Porque la historia de lo que el Señor hizo es evidencia de Su carácter: lo que hizo antes revela quién es Él y por qué merece la lealtad en el presente.",
      "Porque la gratitud al Señor por el pasado crea una deuda moral que hace que la obediencia futura sea una obligación justa.",
      "Porque los milagros históricos son la única forma de verificar objetivamente si el Señor es real y digno de ser seguido.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina dice que 'servir al Señor' es algo que decidirá 'cuando sea adulta y tenga todo más claro'. La pregunta de Josué —'escogeos hoy'— habla directamente a esa postura. ¿Qué le diría?",
    options: [
      "Que la decisión de servir al Señor es acumulativa: se toma y retoma cada día en elecciones pequeñas, no solo en un momento grande de claridad futura.",
      "Que debería esperar hasta recibir una revelación clara sobre su camino antes de comprometerse a servir al Señor con toda su vida.",
      "Que la decisión de servir al Señor es más fácil de tomar cuando se es joven porque hay menos compromisos que dificulten el camino.",
      "Que el Señor respeta el tiempo de cada persona y no exige una decisión en un momento en que todavía no hay claridad suficiente.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo dice que sirve al Señor los domingos pero el resto de la semana 'vive como cualquier otro'. Josué 24:15 plantea la elección como algo que define toda la vida, no solo un día. ¿Qué le diría esa perspectiva?",
    options: [
      "Que servir al Señor en el contexto familiar y religioso los domingos es lo esencial; las decisiones del resto de la semana son de naturaleza diferente.",
      "Que la elección de Josué no era sobre asistencia a ceremonias sino sobre a quién se obedece cuando nadie mira; la fidelidad que no cubre la semana entera no es fidelidad completa.",
      "Que reducir el servicio al Señor a un día es una etapa natural en el desarrollo de la fe y con el tiempo se expandirá a otros días.",
      "Que el Señor acepta la fidelidad parcial porque entiende las presiones del mundo y no espera que los adolescentes sean perfectamente consistentes.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Josué presentó la elección, advirtió que el compromiso era serio, recordó lo que el Señor había hecho y declaró su propia decisión personal. ¿Cuál es el modelo de invitación al convenio que emerge de esos cuatro elementos?",
    options: [
      "Que la invitación al convenio es más efectiva cuando quien invita tiene autoridad formal, recuerda la historia, presenta las alternativas con claridad y comparte primero su propia decisión.",
      "Que los cuatro elementos son igualmente importantes y cualquiera que falte invalida la efectividad de la invitación al convenio.",
      "Que la invitación más poderosa al compromiso combina claridad sobre las opciones, honestidad sobre la exigencia, memoria de la bondad de Dios y el testimonio personal de quien invita.",
      "Que Josué fue el modelo perfecto de discipulado porque combinó liderazgo político con liderazgo espiritual, algo que los líderes modernos también deben buscar.",
    ],
    correctAnswer: 2,
  },
];

// ============================================================================
// LECCIÓN 64: Práctica 4 del Dominio de la doctrina
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/20-joshua-1-24/202-doctrinal-mastery-practice-4?lang=spa
// correctAnswer pattern: 0, 2, 1, 3, 0, 2, 3
// ============================================================================
export const leccion64Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Esta cuarta práctica de Dominio de la Doctrina incluye un principio sobre buscar mayor comprensión mediante fuentes divinamente señaladas. ¿Cuáles son esas fuentes según la lección?",
    options: [
      "Las Escrituras, los discursos de la conferencia general, el Espíritu Santo y los líderes locales autorizados.",
      "Cualquier fuente que confirme la verdad que ya conocemos, porque el Señor puede hablar por cualquier medio.",
      "Solo las Escrituras canónicas, porque son las únicas que tienen garantía completa de exactitud doctrinal.",
      "Las obras de los apóstoles del siglo XIX, que fundaron la doctrina moderna de la Iglesia restaurada.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "El principio de actuar con fe mientras se buscan respuestas incluye una actitud específica ante la espera. ¿Cuál es esa actitud según la lección?",
    options: [
      "Detener toda actividad religiosa hasta recibir una respuesta clara para no comprometerse con algo todavía incierto.",
      "Buscar la respuesta con urgencia extrema porque la duda sin resolver debilita la fe de manera proporcional al tiempo transcurrido.",
      "Seguir confiando en Dios y en la verdad que ya se ha recibido, manteniendo la fidelidad mientras la comprensión crece.",
      "Compartir las dudas con otros miembros para que el problema sea resuelto por la comunidad antes de que dañe la fe individual.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Esta práctica enseña a analizar preguntas difíciles con perspectiva eterna. ¿Cuál es la diferencia entre analizar una pregunta difícil 'con perspectiva eterna' y simplemente 'buscar más información'?",
    options: [
      "Que la perspectiva eterna incluye el Plan de Salvación como marco interpretativo, lo que cambia el tipo de preguntas que se hacen y el tipo de respuestas que se aceptan.",
      "Que buscar más información es un proceso intelectual mientras que la perspectiva eterna es un proceso espiritual; ambos son necesarios pero distintos.",
      "Que la perspectiva eterna elimina la necesidad de buscar información porque todo puede entenderse desde el marco doctrinal ya conocido.",
      "No hay diferencia real; la perspectiva eterna es simplemente buscar información en fuentes que el Señor ha señalado.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La lección señala que el objetivo del Dominio de la Doctrina no es ganar debates sino ayudar a personas con preguntas sinceras. ¿Por qué esa distinción de propósito importa en la práctica?",
    options: [
      "Porque ganar debates destruye relaciones y el Señor valora más las relaciones que el conocimiento correcto.",
      "Porque cuando el objetivo es ganar, el tono y las estrategias cambian; cuando el objetivo es ayudar, la actitud, las preguntas y el rol del Espíritu Santo en la conversación son distintos.",
      "Porque los debates sobre doctrina siempre generan más preguntas que respuestas, mientras que las conversaciones de ayuda crean certeza.",
      "Porque el conocimiento doctrinal sin amor es hueco según 1 Corintios 13, y los debates tienden a eliminar el componente de amor.",
    ],
    correctAnswer: 3,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Un compañero de Sofía le pregunta: 'Si hay un Dios bueno, ¿por qué permite las guerras y el sufrimiento?' Sofía quiere responder bien. Según esta práctica, ¿cuál sería el primer paso más apropiado?",
    options: [
      "Escuchar con genuino interés y preguntar si hay algo específico detrás de esa pregunta antes de ofrecer cualquier explicación doctrinal.",
      "Citar D&C 58:26 para explicar que el sufrimiento existe porque las personas no usan bien su agencia.",
      "Reconocer que es una pregunta difícil y sugerirle que hable con el obispo, quien está mejor equipado para responderla.",
      "Explicar el Plan de Salvación completo desde el principio para que tenga el contexto necesario para entender la respuesta.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás tiene una pregunta sobre la historia de la Iglesia que lo perturba y no sabe cómo abordarla. La práctica sugiere un proceso de cuatro pasos. ¿Cuál es el orden correcto de esos pasos?",
    options: [
      "Buscar información externa → compartir con otros miembros → llevar al Señor en oración → aceptar si no hay respuesta.",
      "Estudiar en las fuentes divinamente señaladas → orar pidiendo guía del Espíritu → actuar con fe mientras la comprensión crece → adoptar perspectiva eterna.",
      "Preguntar al obispo → estudiar las Escrituras → orar por confirmación → dejar de pensar en el tema si no llega respuesta.",
      "Ignorar la pregunta si genera ansiedad → recuperar la estabilidad → estudiar cuando esté más tranquilo → compartir con alguien de confianza.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Esta lección integra cuatro principios: actuar con fe, perspectiva eterna, fuentes divinamente señaladas y tratar con amor a quien pregunta. ¿Cuál es el modelo de discipulado que esa combinación propone para nuestra época?",
    options: [
      "Que el discípulo de Cristo en nuestra época debe ser tanto un buscador serio de verdad como un testigo compasivo; no puede separar el saber del cómo relacionarse con quien pregunta.",
      "Que los cuatro principios son etapas secuenciales: primero la fe, luego la perspectiva, luego las fuentes, luego el amor.",
      "Que el amor a quien pregunta es el elemento más importante; los otros tres principios son herramientas al servicio de esa actitud central.",
      "Que el modelo propone que los alumnos de Seminario se conviertan en apologistas capaces de defender la Iglesia en cualquier conversación difícil.",
    ],
    correctAnswer: 3,
  },
];

// ============================================================================
// LECCIÓN 65: Jueces 2–4
// Link: https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/21-judges-2-16/211-judges-2-4?lang=spa
// correctAnswer pattern: 2, 0, 3, 1, 2, 0, 1
// ============================================================================
export const leccion65Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "El ciclo del libro de Jueces se repite con notable consistencia. ¿Cuáles son los cuatro elementos de ese ciclo en el orden correcto?",
    options: [
      "Prosperidad → orgullo → conflicto interno → búsqueda de Dios → nueva prosperidad.",
      "Obediencia → bendición → apostasía → juicio → clamor → liberación por medio de un juez → nueva apostasía.",
      "Apostasía → opresión por enemigos → clamor al Señor → liberación por medio de un juez → nueva apostasía.",
      "Apostasía → castigo → arrepentimiento → convenio renovado → período de paz antes de la siguiente caída.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Débora es una figura notable en el libro de Jueces. ¿Cuáles eran sus roles en Israel según el texto?",
    options: [
      "Era sacerdotisa del tabernáculo y a la vez esposa del sumo sacerdote, lo que le daba doble autoridad religiosa.",
      "Era profetisa, juez que resolvía disputas del pueblo, y líder militar que acompañó a Barac a la batalla.",
      "Era consejera del sumo sacerdote y guardiana del arca del convenio durante los períodos de guerra.",
      "Era maestra de la ley de Moisés y mediadora entre las tribus en conflictos sobre territorio y recursos.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Israel caía en el ciclo de Jueces repetidamente, generación tras generación. ¿Qué factor estructural permitía que el ciclo se repitiera aunque cada generación había visto la liberación anterior?",
    options: [
      "Que Israel tenía una cultura oral que no transmitía eficientemente las lecciones espirituales de una generación a la siguiente.",
      "Que la prosperidad que seguía a cada liberación producía olvido de la necesidad de Dios, y sin estructuras de memoria deliberadas, el ciclo era casi inevitable.",
      "Que los jueces no establecieron sistemas de gobierno estable, dejando a Israel sin liderazgo espiritual entre una liberación y la siguiente.",
      "Que las influencias religiosas de los pueblos vecinos eran demasiado poderosas para resistir sin la presencia de un profeta activo y visible.",
    ],
    correctAnswer: 3,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El libro de Jueces describe cómo el Señor respondió misericordiosamente cada vez que Israel clamó, aunque el ciclo se repitiera. ¿Qué revela esa respuesta repetida sobre el carácter de Dios hacia Sus hijos que fallan consistentemente?",
    options: [
      "Que el Señor no abandona a Sus hijos incluso cuando ellos lo abandonan a Él; la misericordia está disponible cada vez que hay un clamor sincero, sin importar el número de ciclos.",
      "Que el Señor tiene un límite de paciencia que Israel eventualmente alcanzó, lo cual explica la cautividad babilónica posterior.",
      "Que la misericordia del Señor hacia Israel era proporcional al sufrimiento que habían experimentado: cuanto más sufrían, más rápido respondía.",
      "Que el Señor respondía no por misericordia sino por fidelidad a los convenios que había hecho con Abraham, Isaac y Jacob.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Emilia siente que su vida espiritual sigue el mismo patrón: períodos de cercanía con el Señor seguidos de alejamiento. Le frustra repetirlo. El ciclo de Jueces le habla directamente. ¿Qué verdad podría reconfortarla y también motivarla?",
    options: [
      "Que el ciclo de Jueces demuestra que la inconsistencia espiritual es normal y el Señor no espera más de Sus hijos.",
      "Que el Señor responde cada vez que Israel clamó, sin excepción; Él hará lo mismo con ella cada vez que regrese, sin importar cuántas veces se haya ido.",
      "Que debería identificar qué etapa del ciclo está viviendo actualmente y actuar de manera proactiva para detenerlo antes de la próxima caída.",
      "Que el ciclo solo se rompe cuando el arrepentimiento es suficientemente profundo; los ciclos repetidos sugieren que su arrepentimiento anterior no fue completo.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Benjamín va bien espiritualmente cuando las cosas son difíciles pero se desconecta del Señor cuando todo va bien. Reconoce ese patrón en sí mismo. ¿Qué estructura concreta podría ayudarlo a romperlo?",
    options: [
      "Establecer hábitos espirituales —oración, Escrituras, servicio— que funcionen independientemente de cómo se sientan las circunstancias externas, para que la conexión con el Señor no dependa del nivel de necesidad sentida.",
      "Pedir al Señor que le envíe más dificultades durante los períodos buenos para mantener activa su dependencia espiritual.",
      "Revisar semanalmente si está en la etapa de prosperidad del ciclo y tomar medidas preventivas si siente que la espiritualidad está bajando.",
      "Hablar con su maestro de Seminario para que le recuerde regularmente la importancia de mantenerse conectado durante los buenos tiempos.",
    ],
    correctAnswer: 0,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El ciclo de Jueces y la advertencia de Deuteronomio 8 sobre olvidar al Señor en la prosperidad forman juntos un diagnóstico de la naturaleza humana. ¿Cuál es ese diagnóstico y qué prescriben juntos como solución?",
    options: [
      "Que la naturaleza humana es irremediablemente inconstante y la única solución es la intervención divina directa que cambia el corazón.",
      "Que el peligro espiritual es mayor en la prosperidad que en la adversidad; la solución no es más fe sino mejores instituciones religiosas que sostengan la memoria.",
      "Que el ser humano tiende a olvidar a Dios cuando no lo necesita urgentemente; la solución es construir memoriales deliberados —hábitos, registros, conversaciones— que mantengan activa la memoria espiritual.",
      "Que ambos textos enseñan que Israel era un pueblo especialmente débil espiritualmente; las generaciones modernas con el Evangelio restaurado enfrentan un desafío diferente.",
    ],
    correctAnswer: 1,
  },
];