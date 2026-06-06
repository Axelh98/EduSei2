import type { Question } from "@/lib/types";

// ============================================================================
// SEMANA 11 — 12 al 18 de Mayo
// Lecciones: Preparar exámenes, D&C 46:1-6, D&C 46:7-33 P1, D&C 46:7-33 P2
// ============================================================================

// Prepararse para los exámenes y proyectos difíciles
export const preparar_examenesQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 9:7–8 describe el proceso de recibir confirmación del Señor. ¿Qué paso es obligatorio antes de preguntar al Señor, según esos versículos?",
    options: [
      "Estudiar el asunto en la mente primero — el Señor confirma el esfuerzo previo, no lo reemplaza.",
      "Ayunar un día completo antes de cada pregunta importante.",
      "Consultar con el obispo antes de llevar cualquier inquietud directamente al Señor.",
      "Memorizar los versículos del Dominio de la Doctrina relevantes al tema.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Santiago 1:5 promete que Dios dará sabiduría al que la pida. ¿Qué dos características del Señor describe ese versículo al dar esa sabiduría?",
    options: [
      "Con condiciones estrictas y registro previo de méritos.",
      "Con abundancia y sin reproche.",
      "Con lentitud y con consideración del historial de la persona.",
      "Con suficiencia pero solo después de múltiples intentos.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 88:118 manda buscar conocimiento 'con el estudio y también con la fe'. ¿Por qué el Señor combina esas dos cosas en lugar de pedir solo una?",
    options: [
      "Porque quiere que trabajemos el doble en todo lo que hacemos.",
      "Porque la fe reemplaza al estudio cuando uno tiene mucha confianza en el Señor.",
      "Porque el estudio sin fe puede volverse arrogante, y la fe sin estudio puede volverse superficial — cada uno solo es incompleto.",
      "Porque la combinación es una norma académica sin implicaciones espirituales específicas.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El élder Bednar enseñó que el Señor 'amplifica nuestra capacidad' cuando lo reconocemos. ¿Por qué amplificar es diferente a reemplazar el esfuerzo?",
    options: [
      "Amplificar significa que el esfuerzo propio sigue siendo necesario y el Señor lo multiplica; reemplazar significaría que el esfuerzo no importa.",
      "No hay diferencia real — cualquier ayuda del Señor termina haciendo el trabajo por nosotros.",
      "Amplificar aplica al estudio académico; reemplazar aplica solo al estudio espiritual.",
      "La diferencia es solo semántica y el resultado final es el mismo en ambos casos.",
    ],
    correctAnswer: 0,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Tomás reza antes de cada examen pidiendo que le 'vaya bien' pero estudia muy poco durante la semana. Según D&C 9:7–8, ¿qué parte del proceso está invirtiendo Tomás?",
    options: [
      "Está haciendo exactamente lo correcto — primero la fe, después el esfuerzo.",
      "Está pidiendo sin haber estudiado primero — el Señor confirma el esfuerzo previo, no lo suple cuando se omite.",
      "No hay problema con su proceso siempre que ore con suficiente fe y convicción.",
      "Debería orar solo después del examen para agradecer, no antes.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Lucía estudia con disciplina pero nunca ora antes de comenzar. Tiene buenas notas pero siente que olvida el material rápido. Según Santiago 1:5, ¿qué podría cambiar si incorporara la oración?",
    options: [
      "Sus calificaciones subirían automáticamente porque el Señor intervendría en los exámenes.",
      "No cambiaría nada — la oración no tiene efecto en procesos académicos.",
      "Recibiría sabiduría — no solo información memorizable — que le ayudaría a integrar lo aprendido de manera más duradera.",
      "El Señor le mostraría qué temas estudiar para que no tenga que revisar todo el material.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 9:7–8 (estudiar primero, luego preguntar) y Santiago 1:5 (pedir sabiduría sin reproche) juntos describen un proceso completo. ¿Cuál es el principio unificador de esas dos enseñanzas?",
    options: [
        "Que el Señor hace el trabajo real y el esfuerzo humano es solo una señal de buena intención.",
        "Que la fe elimina la necesidad de esfuerzo sostenido cuando la petición es sincera.",
        "Que el Señor solo ayuda cuando el alumno llega al límite total de sus capacidades.",
        "Que el esfuerzo va primero y el Señor lo confirma y amplifica — no es esfuerzo sin fe ni fe sin esfuerzo, sino los dos en secuencia.",
      ],
    correctAnswer: 3,
  },
];

// D&C 46:1–6
export const dc46_1_6Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 46:2 establece una instrucción sobre a quiénes se permite asistir a las reuniones de la Iglesia. ¿Cuál es esa instrucción?",
    options: [
      "No expulsar de los lugares de adoración a quien sinceramente busca el reino.",
      "Permitir la entrada solo a los miembros bautizados con membresía activa.",
      "Invitar únicamente a personas ya comprometidas a bautizarse.",
      "Reservar las reuniones sagradas para quienes han recibido el Espíritu Santo.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "¿Cuál fue el problema concreto en las reuniones de Ohio que motivó la revelación de D&C 46?",
    options: [
      "Los miembros se quedaban dormidos durante las reuniones.",
      "Algunos excluían visitantes y no miembros de las reuniones.",
      "Las reuniones se extendían demasiado y los miembros se quejaban.",
      "Faltaban líderes para dirigir las reuniones correctamente.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 46:7 instruye a buscar los 'mejores dones' siempre recordando para qué son dados. ¿Qué implica ese 'para qué' sobre el propósito de los dones espirituales?",
    options: [
      "Que los dones son para la exhibición personal y el fortalecimiento de la propia reputación.",
      "Que los dones son dados para el beneficio de todos, no para el lucimiento individual.",
      "Que los dones solo tienen valor cuando son de naturaleza milagrosa y visible.",
      "Que el propósito de los dones es probar la fe de quien los recibe.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "La instrucción de D&C 46:2 de no excluir a quienes buscan sinceramente ¿qué nos dice sobre la actitud que debemos tener al ir nosotros mismos a la Iglesia?",
    options: [
      "Que ir a la Iglesia es suficiente con solo estar físicamente presente.",
      "Que debemos ir con la disposición de dar y recibir por el Espíritu, no solo de cumplir una obligación.",
      "Que la actitud personal no importa mientras se asista regularmente.",
      "Que solo importa la actitud de los líderes, no de los miembros.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Agustín va a la Iglesia cada semana pero mentalmente ya está en otra cosa desde que empieza la reunión. Según D&C 46:2 y 7, ¿qué cambio concreto podría hacer Agustín?",
    options: [
      "Sentarse más cerca del frente para distraerse menos con los demás.",
      "Pedir al maestro que haga las clases más entretenidas.",
      "Llegar con la intención real de buscar el Espíritu y abrirse a recibir algo específico del Señor ese día.",
      "No hay mucho que pueda hacer — la experiencia espiritual depende principalmente del maestro.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sofía está pensando en no invitar a su amiga no miembro a la actividad de la Iglesia porque 'no va a entender nada'. Según D&C 46:2, ¿qué le respondería el Señor?",
    options: [
      "Que tiene razón y es mejor esperar a que su amiga exprese interés primero.",
      "Que no se debe expulsar a quien sinceramente busca — y Sofía ni siquiera le está dando la oportunidad de hacerlo.",
      "Que primero debe preparar a su amiga estudiando con ella antes de invitarla.",
      "Que las actividades sociales están bien para no miembros pero no las reuniones espirituales.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 46:2 (no excluir a quien busca) y D&C 46:7 (buscar los mejores dones para el beneficio de todos) pertenecen a la misma revelación. ¿Cuál es el principio común que las une?",
    options: [
        "Que las reuniones de la Iglesia deben ser accesibles económicamente para todos.",
        "Que el Señor pone reglas de conducta para proteger a los miembros de influencias externas.",
        "Que los dones espirituales y la asistencia a reuniones son temas completamente separados.",
        "Que la Iglesia funciona como comunidad orientada hacia afuera — tanto la apertura a los que buscan como el uso de dones para beneficio mutuo reflejan un pueblo que sirve en lugar de excluir.",
      ],
    correctAnswer: 3,
  },
];

// D&C 46:7–33, Parte 1
export const dc46_7_33_parte1Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Según D&C 46:11–12, ¿a cuántas personas se les dan dones por el Espíritu de Dios?",
    options: [
      "A todos — a cada persona se le da un don para que todos sean beneficiados.",
      "Solo a los que tienen el Sacerdocio Melquisedec activo.",
      "A los que han estado en la Iglesia por más de cinco años.",
      "Solo a quienes los buscan mediante ayuno y oración prolongada.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 46:13–26 lista varios dones del Espíritu. ¿Cuáles de los siguientes aparecen explícitamente en esa lista?",
    options: [
      "Fe, sabiduría, salud perfecta y riqueza material.",
      "Fe para sanar, fe para ser sanado, hacer milagros, profecía, discernimiento de espíritus, lenguas e interpretación.",
      "Obediencia, humildad, paciencia y gratitud.",
      "Memorización de Escrituras, elocuencia, popularidad y liderazgo natural.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 46:12 dice que los dones son dados 'para que todos sean beneficiados'. ¿Qué implica eso sobre para qué NO son los dones espirituales?",
    options: [
      "Los dones no son para el estudio personal de las Escrituras.",
      "Los dones no son para el lucimiento o la exhibición personal — su propósito es el servicio mutuo, no la autopromoción.",
      "Los dones no aplican fuera del contexto formal de las reuniones de la Iglesia.",
      "Los dones no pueden usarse si no se tiene un llamamiento específico que los requiera.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El élder Ashton enseñó que los dones del Espíritu incluyen 'escuchar con compasión' y 'ver el bien en los demás'. ¿Qué amplía esa enseñanza sobre la lista de D&C 46?",
    options: [
      "Que la lista de D&C 46 está incompleta y necesita ser actualizada.",
      "Que los dones más dramáticos como milagros y lenguas son los únicos que realmente importan.",
      "Que los dones del Espíritu incluyen capacidades cotidianas de carácter, no solo manifestaciones sobrenaturales visibles.",
      "Que el élder Ashton contradice a D&C 46 y sus enseñanzas no deben tomarse en cuenta.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Renata dice que no tiene dones espirituales porque nunca sanó a nadie ni habló en lenguas. Según D&C 46:11–12, ¿qué le respondería el Señor directamente?",
    options: [
      "Que tiene razón y debe orar con más intensidad para recibir un don visible.",
      "Que espere — los dones espirituales solo llegan después de años de membresía activa.",
      "Que a todos se les da un don — el problema no es que no tenga sino que todavía no lo identificó.",
      "Que los dones solo se manifiestan en momentos de crisis extrema.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás tiene el don de escuchar y hacer sentir a las personas valoradas. Nunca lo consideró espiritual. ¿Cómo lo usaría esta semana si entendiera que es un don dado para 'beneficio de todos'?",
    options: [
      "Registrándolo en un formulario de llamamientos para que el obispo lo use oficialmente.",
      "Buscando activamente a alguien en su entorno que necesite ser escuchado y ofreciéndole ese don.",
      "Guardándolo para cuando tenga un llamamiento que lo requiera formalmente.",
      "Esperando que alguien le pida explícitamente que los escuche antes de usar ese don.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 46:11 ('a todos se les dan dones') y D&C 46:12 ('para que todos sean beneficiados') forman un binomio. ¿Qué tensión espiritual resuelven juntos?",
    options: [
        "La tensión entre los miembros activos y los menos activos sobre el acceso a los dones.",
        "La tensión entre el Padre y el Hijo sobre quién otorga los dones.",
        "La tensión entre los dones espirituales y los talentos naturales que la persona desarrolló sola.",
        "La tensión entre la fe individual y la comunidad — todos tienen dones, pero su valor se realiza cuando se usan para otros.",
      ],
    correctAnswer: 3,
  },
];

// D&C 46:7–33, Parte 2
export const dc46_7_33_parte2Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 46:8 instruye a buscar los dones 'con diligencia'. ¿Qué actitud contraria a la diligencia condena el Señor en ese mismo versículo?",
    options: [
      "Que debemos alejarnos de todo lo que no es bueno y no pedir más de lo que creemos que podemos recibir.",
      "Que debemos buscar solo los dones que aparecen primero en la lista.",
      "Que debemos esperar a que el obispo asigne los dones antes de buscarlos.",
      "Que los dones solo se obtienen mediante el ayuno semanal.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 50:23 establece el criterio para reconocer si algo viene de Dios. ¿Cuál es ese criterio?",
    options: [
      "Que produce una emoción muy intensa e inmediata.",
      "Que tiene el respaldo de un líder de la Iglesia con llamamiento.",
      "Que edifica — todo lo que no edifica no viene de Dios.",
      "Que aparece en un sueño o visión nocturna.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El élder Bednar enseñó que el Espíritu actúa de manera 'suave, tranquila, edificante y clara'. ¿Por qué ese patrón es importante para discernir entre un don espiritual genuino y una manifestación falsa?",
    options: [
      "Porque las emociones fuertes siempre indican la presencia del Espíritu.",
      "Porque lo que genera confusión, orgullo o división no tiene las marcas del Espíritu — el carácter de la manifestación revela su origen.",
      "Porque los dones genuinos siempre producen llanto y quietud en la sala.",
      "Porque el Espíritu nunca actúa con fuerza, solo con suavidad extrema.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "D&C 46:26 menciona el 'discernimiento de espíritus' como un don. ¿Por qué ese don es especialmente valioso para jóvenes que consumen mucho contenido digital y espiritual de diversas fuentes?",
    options: [
      "Porque permite bloquear automáticamente el contenido dañino en los dispositivos.",
      "Porque en un mundo saturado de mensajes espirituales contradictorios, poder evaluar si algo edifica o destruye es una habilidad de supervivencia espiritual.",
      "Porque es el don más fácil de obtener y por eso es el más común entre los jóvenes.",
      "Porque solo aplica al contenido de la Iglesia, no al contenido secular.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina sigue una cuenta de espiritualidad en redes sociales que la hace sentir 'bien' emocionalmente pero que contradice varios principios del evangelio. Según D&C 50:23, ¿qué pregunta debería hacerse Valentina?",
    options: [
      "'¿Cuántos seguidores tiene esta cuenta? Si tiene muchos, probablemente sea confiable.'",
      "'¿Me edifica esto — me acerca al Salvador, fortalece mi fe, me inspira a ser mejor — o solo me hace sentir bien momentáneamente?'",
      "'¿Lo aprueba mi maestro de Seminario?' Si no, hay que desconectarse de inmediato.",
      "'¿Tiene versículos de las Escrituras en los posts?' Si sí, probablemente sea espiritual.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo tiene el don de la fe — cree con profundidad y eso anima a los demás cuando atraviesan dudas. Pero nunca lo consideró un 'don espiritual' porque no es dramático. ¿Qué debería hacer con ese don esta semana?",
    options: [
      "Esperar a que alguien le pida explícitamente que comparta su fe antes de usarlo.",
      "Buscar activamente a alguien que esté dudando y ser un ancla de fe para esa persona — eso es exactamente para lo que ese don fue dado.",
      "Inscribirse en un curso de apologética para complementar ese don con argumentos.",
      "Reservarlo para cuando sea llamado como maestro o líder con responsabilidad formal.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 46:8 (buscar dones con diligencia) y D&C 50:23 (lo que no edifica no es de Dios) juntos protegen al discípulo de dos errores opuestos. ¿Cuáles son esos dos errores?",
    options: [
        "Creer demasiado en los dones versus no creer en ellos — ambos extremos son igualmente peligrosos.",
        "Los errores de los líderes versus los errores de los miembros comunes.",
        "Buscar demasiados dones versus conformarse con solo uno.",
        "La pasividad — no buscar los dones — y la ingenuidad — aceptar cualquier manifestación emocional como espiritual sin discernir.",
      ],
    correctAnswer: 3,
  },
];

// ============================================================================
// SEMANA 12 — 19 al 25 de Mayo
// Lecciones: D&C 49, D&C 50 P1, D&C 50 P2, Evalúa aprendizaje 4
// ============================================================================

// D&C 49
export const dc49Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 49 corrige doctrinas específicas de los Shakers. ¿Cuáles eran dos de esas doctrinas erróneas que el Señor corrigió directamente?",
    options: [
      "Que el matrimonio era pecaminoso y que abstenerse de carne era señal de santidad.",
      "Que debían bautizarse repetidamente y que no existían los profetas.",
      "Que la Segunda Venida ya había ocurrido y que no se debía pagar diezmo.",
      "Que las mujeres no podían predicar y que la Biblia era inútil.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Según D&C 49:15–16, ¿qué declara el Señor sobre el matrimonio entre hombre y mujer?",
    options: [
      "Que es una institución temporal que termina con la muerte.",
      "Que es lícito y ordenado por Dios — cualquier enseñanza contraria viene del adversario.",
      "Que es una tradición cultural sin base doctrinal específica.",
      "Que aplica solo a los miembros de la Iglesia con convenios del templo.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "Los Shakers eran personas sinceras que creían que sus doctrinas venían de Dios. ¿Qué nos enseña D&C 49 sobre la relación entre la sinceridad y la verdad?",
    options: [
      "Que la sinceridad siempre garantiza que las creencias son verdaderas.",
      "Que la sinceridad es suficiente — Dios acepta cualquier creencia mientras sea genuina.",
      "Que se puede ser completamente sincero y estar completamente equivocado — la verdad no depende de la intensidad de la creencia.",
      "Que los Shakers no eran sinceros, solo pretendían creer.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "D&C 49:24 profetizó que 'los lamanitas florecerán como la rosa' antes del gran día del Señor. ¿Qué dice ese tipo de profecía sobre la naturaleza de las revelaciones del Señor?",
    options: [
      "Que el Señor solo da profecías sobre el pasado para confirmar lo que ya ocurrió.",
      "Que el Señor conoce el futuro con certeza y revela Su plan con precisión — cada profecía cumplida confirma Su autoridad.",
      "Que las profecías son metáforas poéticas sin cumplimiento literal esperado.",
      "Que esa profecía todavía no tiene relevancia porque los lamanitas no han florecido.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Luca escucha en un podcast espiritual de moda que 'el matrimonio es una construcción social obsoleta'. Según D&C 49:15–16, ¿cómo evaluaría el Señor esa enseñanza?",
    options: [
      "Que es una perspectiva cultural válida que los miembros pueden adoptar según su criterio.",
      "Que esa enseñanza tiene partes correctas que podrían complementar la doctrina del evangelio.",
      "Que esa doctrina viene del adversario — el Señor declaró el matrimonio como ordenado por Él desde la creación.",
      "Que el matrimonio es importante pero los miembros deben decidir por sí mismos si es 'para ellos'.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Camila tiene un amigo que dice 'no necesito la Iglesia para ser espiritual — soy sincero en mis creencias y eso basta'. Según el principio de D&C 49, ¿cuál es el problema de ese argumento?",
    options: [
      "Que la espiritualidad sin la Iglesia no existe en ninguna forma.",
      "Que la sinceridad no garantiza la verdad — los Shakers eran sinceros y doctrinalmente erróneos. La fuente de autoridad importa, no solo la intensidad de la creencia.",
      "Que su amigo está en lo correcto y la Iglesia no debería ser necesaria.",
      "Que debe mostrarle a su amigo estadísticas sobre cuántos miembros son más felices que los no miembros.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 49 corrige doctrinas sobre el matrimonio y la alimentación, y D&C 67 (que veremos después) desafía a los hombres a imitar las revelaciones. Ambas revelaciones defienden lo mismo. ¿Cuál es ese principio?",
    options: [
        "Que las revelaciones de la Restauración son superiores en extensión a las de otras religiones.",
        "Que los apóstoles tienen autoridad sobre los profetas en asuntos doctrinales.",
        "Que toda doctrina debe ser verificada científicamente antes de ser enseñada en la Iglesia.",
        "Que las revelaciones del Señor no pueden ser imitadas ni reemplazadas por la inteligencia humana — tienen origen y autoridad que ninguna tradición o argumento humano puede duplicar.",
      ],
    correctAnswer: 3,
  },
];

// D&C 50, Parte 1
export const dc50_parte1Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 50:21–23 establece tres condiciones relacionadas con la enseñanza por el Espíritu. ¿Cuál es el criterio central que el Señor da para reconocer si algo viene de Dios?",
    options: [
        "Que edifique — todo lo que no edifica no viene de Dios, es oscuridad.",
        "Que la enseñanza produzca una emoción muy intensa en quienes la escuchan.",
        "Que el maestro tenga un llamamiento formal y aprobado por el obispo.",
        "Que cite correctamente versículos de las Escrituras en cada punto.",
      ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "¿Qué problema concreto en las reuniones de Ohio motivó la revelación de D&C 50?",
    options: [
      "Los miembros no pagaban el diezmo regularmente.",
      "Algunos actuaban de maneras extravagantes afirmando que el Espíritu los guiaba, cuando en realidad no era así.",
      "Las reuniones terminaban muy tarde y los miembros se quejaban.",
      "El profeta José Smith estaba ausente y los miembros no sabían cómo conducir las reuniones.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 50:24 dice que quien recibe la Palabra de Dios 'recibe luz, y esa luz crece más y más hasta el día perfecto'. ¿Qué implica ese principio sobre la naturaleza del crecimiento espiritual?",
    options: [
      "Que hay un momento único de iluminación completa y después ya no se necesita crecer.",
      "Que el crecimiento espiritual es acumulativo — cada elección de recibir la luz añade más luz, y ese proceso es gradual y continuo.",
      "Que la luz espiritual llega de golpe en experiencias de conversión intensas, no gradualmente.",
      "Que solo los profetas reciben esa luz creciente; los miembros comunes mantienen una luz constante.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué D&C 50:22 dice que si alguien predica 'por otro espíritu, no es de Dios'? ¿Qué implica eso sobre la responsabilidad del que enseña?",
    options: [
      "Que cualquier enseñanza equivocada descalifica al maestro permanentemente.",
      "Que enseñar el evangelio no es una tarea casual — requiere preparación espiritual genuina, no solo conocimiento del tema.",
      "Que el Espíritu garantiza automáticamente que no se cometan errores doctrinales.",
      "Que solo los llamados a tiempo completo pueden enseñar sin el riesgo de un 'espíritu incorrecto'.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Sofía sigue una cuenta de espiritualidad que le produce emociones intensas pero que la aleja del estudio de las Escrituras y de la oración. Según D&C 50:23, ¿cómo evalúa el Señor esa influencia?",
    options: [
      "Que las emociones intensas son siempre una señal de la presencia del Espíritu.",
      "Que si produce emociones positivas, debe venir del Espíritu independientemente de sus efectos.",
      "Que lo que no edifica no viene de Dios — si aleja de las fuentes espirituales reales, es oscuridad aunque se sienta bien.",
      "Que la Iglesia exagera al evaluar negativamente contenido emocional de otras fuentes espirituales.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Joaquín está por enseñar una lección en Seminario y planea hablar sin prepararse porque 'el Espíritu me dará las palabras'. Según D&C 50:21–22, ¿qué parte del proceso está omitiendo?",
    options: [
      "Nada — confiar en el Espíritu es exactamente lo que D&C 50 pide.",
      "Está omitiendo la preparación previa — el Espíritu enseña a través del maestro preparado, no en lugar del maestro que no se preparó.",
      "Solo debería omitir la preparación si ya tiene años de experiencia enseñando.",
      "El problema no es la falta de preparación sino no haber pedido permiso al obispo.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 50:23 ('lo que no edifica no es de Dios') y D&C 50:24 ('quien recibe la Palabra recibe luz que crece') forman un sistema. ¿Cómo funcionan juntos para guiar la vida espiritual de un joven?",
    options: [
        "Uno aplica a las reuniones de la Iglesia y el otro al estudio personal, pero no interactúan.",
        "Solo aplican a maestros y líderes, no a los alumnos que reciben las enseñanzas.",
        "El primero es más importante que el segundo porque el discernimiento precede al crecimiento.",
        "El primero da el filtro para discernir qué recibir; el segundo promete que recibir bien construye una vida de luz creciente — juntos describen tanto cómo elegir como qué sucede cuando se elige bien.",
      ],
    correctAnswer: 3,
  },
];

// D&C 50, Parte 2
export const dc50_parte2Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 50:31–32 instruye sobre qué predicar. ¿Cuál es la fuente que el Señor señala específicamente para la doctrina?",
    options: [
      "Los principios de la Biblia y el Libro de Mormón, de los cuales el evangelio está lleno.",
      "Las tradiciones de la comunidad y las costumbres locales de la Iglesia.",
      "Las opiniones del maestro más experimentado de la congregación.",
      "Cualquier texto inspirador aunque no sea Escritura canónica.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Según D&C 50:21–22, ¿qué condición deben cumplir tanto el maestro como el oyente para que la enseñanza sea por el Espíritu?",
    options: [
      "El maestro debe tener un título universitario en teología y el oyente debe tomar notas.",
      "El maestro enseña por el Espíritu y el oyente recibe por el Espíritu — ambos deben participar con esa disposición.",
      "Solo el maestro necesita el Espíritu; el oyente solo necesita estar presente físicamente.",
      "La condición es solo cronológica — que el maestro hable antes y el oyente escuche después.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El presidente Eyring enseñó que la luz 'crece una chispa a la vez, una revelación a la vez, una elección fiel a la vez'. ¿Qué implica eso sobre cómo funciona la conversión?",
    options: [
      "Que la conversión es un evento único e instantáneo que no requiere mantenimiento.",
      "Que la conversión es un proceso acumulativo — no hay un momento mágico único, sino una construcción gradual de elecciones que van añadiendo luz.",
      "Que solo las personas con dones especiales pueden experimentar una conversión genuina.",
      "Que la conversión depende principalmente de las emociones intensas en momentos de crisis.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Cuál es la diferencia doctrinal entre 'predicar por el Espíritu' y simplemente dar una buena charla bien preparada, según D&C 50?",
    options: [
      "No hay diferencia — una buena preparación siempre produce una charla espiritual.",
      "La charla bien preparada transmite información; la predicación por el Espíritu transmite convicción, edifica al oyente y deja la luz del Señor en él.",
      "Solo los apóstoles pueden predicar verdaderamente por el Espíritu.",
      "La diferencia es solo de estilo — la charla más informal siempre es más espiritual.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Camila lleva meses estudiando el evangelio activamente y nota que la fe le resulta cada vez más natural y las dudas le afectan menos. Según D&C 50:24, ¿qué está experimentando?",
    options: [
      "Que se está volviendo demasiado confiada en su fe y debería tener más dudas.",
      "El principio de la luz que crece — cada elección de recibir la Palabra añade más luz, y ese proceso acumulativo se manifiesta como mayor firmeza y paz.",
      "Que sus dudas son menos importantes, no que su fe esté creciendo realmente.",
      "Un fenómeno psicológico de acostumbramiento que no tiene dimensión espiritual.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín dice que no aprende nada en las clases del Seminario porque el maestro no es muy interesante. Según D&C 50:21–22, ¿qué parte de la responsabilidad tiene Agustín en esa experiencia?",
    options: [
      "Ninguna — toda la responsabilidad de la experiencia espiritual recae en el maestro.",
      "Tanto el maestro como el oyente necesitan el Espíritu — si Agustín no llega con disposición de recibir por el Espíritu, el proceso no se completa aunque el maestro enseñe bien.",
      "La responsabilidad de Agustín es solo asistir físicamente — lo demás no depende de él.",
      "Agustín debería cambiar de clase para encontrar un maestro más entretenido.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 50 (parte 1 y 2) enseña tanto sobre el discernimiento espiritual como sobre la enseñanza y recepción por el Espíritu. ¿Cuál es el principio unificador de toda esta sección?",
    options: [
        "Que las reuniones de la Iglesia tienen reglas estrictas que deben seguirse o serán inválidas.",
        "Que el Espíritu Santo actúa solo en contextos de asamblea formal, no en la vida personal.",
        "Que solo los líderes con llamamientos formales pueden participar en experiencias espirituales genuinas.",
        "Que la autenticidad espiritual — en el maestro, en el oyente y en las manifestaciones — depende del Espíritu, y el criterio práctico de esa autenticidad es si edifica o no.",
      ],
    correctAnswer: 3,
  },
];

// Evalúa tu aprendizaje 4
export const evalua_aprendizaje_4Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "De las semanas 11–12, ¿a cuál de estos principios pertenece la frase 'todo lo que no edifica no viene de Dios'?",
    options: [
        "Al criterio de D&C 50:23 para discernir si una manifestación o enseñanza viene del Espíritu.",
        "Al principio sobre la importancia de la asistencia a las reuniones.",
        "Al principio sobre cómo buscar los dones con diligencia en D&C 46.",
        "Al principio del examen de preparación de D&C 9.",
      ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 50:24 describe la luz del Señor creciendo 'hasta el día perfecto'. ¿Qué condición activa ese crecimiento según el versículo?",
    options: [
      "Recibir la Palabra de Dios — y continuar en Dios después de recibirla.",
      "Ayunar semanalmente y asistir a todas las reuniones sin faltar.",
      "Memorizar los versículos del Dominio de la Doctrina del semestre.",
      "Tener un llamamiento activo en la Iglesia que requiera servicio regular.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 46 y D&C 49 tratan temas aparentemente distintos — dones espirituales y corrección doctrinal. ¿Qué preocupación común del Señor revela el hecho de que ambas revelaciones se dieran en el mismo período?",
    options: [
      "Que el Señor quería establecer todas las leyes de la Iglesia antes de moverse a Misuri.",
      "Que la Iglesia en Ohio enfrentaba simultáneamente confusión espiritual interna y error doctrinal externo — y el Señor respondió ambos con revelación directa.",
      "Que D&C 46 y 49 son repeticiones del mismo principio expresadas de manera diferente.",
      "Que el Señor prefería dar revelaciones largas para cubrir múltiples problemas a la vez.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Cuál es la diferencia entre buscar los 'mejores dones' (D&C 46:8) y simplemente esperar que el Señor los asigne sin buscarlos?",
    options: [
      "No hay diferencia — el Señor los asigna independientemente de si los buscamos.",
      "Buscar activamente implica orar, identificar la necesidad de quienes nos rodean y actuar con los dones que ya tenemos mientras pedimos los que necesitamos.",
      "Solo los líderes deben buscar dones; los miembros comunes deben esperar la asignación.",
      "Buscar los dones es una señal de ambición espiritual que el Señor desaprueba.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina siente que las semanas 11–12 del Seminario le enseñaron mucho sobre discernimiento y dones, pero no sabe cómo aplicarlo esta semana. ¿Cuál sería la aplicación más directa y concreta?",
    options: [
      "Escribir un ensayo sobre D&C 46 y 50 para el maestro de Seminario.",
      "Identificar un don que tiene, buscar a alguien que lo necesite, y usar el criterio de 'edificar' para evaluar una influencia espiritual en su vida esta semana.",
      "Hablar con el obispo sobre sus dones espirituales para que los registre formalmente.",
      "Esperar a la siguiente evaluación para decidir cómo aplicar lo aprendido.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás tiene miedo de que su fe 'no sea suficiente' porque no ha tenido experiencias espirituales dramáticas. ¿Qué le dice D&C 50:24 directamente a esa angustia?",
    options: [
      "Que tiene razón en preocuparse — las experiencias dramáticas son evidencia necesaria de la fe.",
      "Que la luz crece gradualmente — el problema no es la ausencia de experiencias dramáticas sino si cada día está eligiendo recibir la Palabra y continuar en el Señor.",
      "Que debería buscar experiencias más intensas para confirmar su fe.",
      "Que la fe sin experiencias visibles no es válida para la vida eterna.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Las semanas 11–12 cubrieron dones espirituales (D&C 46), discernimiento (D&C 50) y corrección doctrinal (D&C 49). ¿Cuál es el principio unificador de esas tres secciones?",
    options: [
        "Que el Señor estableció en ese período todas las reglas de conducta necesarias para la Iglesia.",
        "Que la organización formal de la Iglesia es más importante que las manifestaciones espirituales individuales.",
        "Que las revelaciones de ese período aplican solo al contexto histórico de Ohio en 1831.",
        "Que el Espíritu Santo es el árbitro de lo que es genuino — en los dones, en la enseñanza y en la doctrina — y el discípulo fiel aprende a reconocer Su presencia por los frutos que produce.",
      ],
    correctAnswer: 3,
  },
];

// ============================================================================
// SEMANA 13 — 26 de Mayo al 1 de Junio
// Lecciones: D&C 51, D&C 57, Dominio práctica 4,
//            Mentalidad de crecimiento, Autosuficiencia a la manera del Señor
// ============================================================================

// D&C 51
export const dc51Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 51 fue revelada para organizar la distribución de recursos entre los santos que llegaban a Ohio. ¿A quién le dio el Señor instrucciones específicas sobre esa administración?",
    options: [
      "A Edward Partridge, el primer obispo de la Iglesia.",
      "Al profeta José Smith como presidente de la Iglesia.",
      "A Sidney Rigdon como escribano y consejero del profeta.",
      "A un comité de líderes locales elegidos por los santos.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 51:3 establece el principio de distribución según las 'necesidades y deseos' de cada familia. ¿Qué distingue ese principio de dar exactamente lo mismo a todos?",
    options: [
      "Que dar lo mismo a todos siempre produce mejores resultados que atender necesidades individuales.",
      "Que la equidad según necesidades reales es diferente a la igualdad de cantidades — el Señor diseñó un sistema que responde a lo que cada familia necesita, no un reparto uniforme.",
      "Que el sistema era puramente económico y no tenía principios espirituales detrás.",
      "Que el obispo tenía autoridad ilimitada para decidir qué merecía cada familia.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 51:9 instruye que todo se haga 'de acuerdo con el consejo del obispo'. ¿Qué principio de gobierno eclesiástico establece eso?",
    options: [
      "Que el obispo tiene autoridad absoluta sobre todos los asuntos de la Iglesia.",
      "Que el orden y la autoridad eclesiástica protegen a los santos de la confusión — la administración ordenada es parte del diseño divino.",
      "Que los miembros no tienen voz en las decisiones temporales de la Iglesia.",
      "Que el consejo del obispo es opcional y puede ignorarse si uno tiene mejores ideas.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El presidente Uchtdorf enseñó que el Señor no da lo mismo a todos sino lo perfectamente adaptado a cada uno. ¿Cómo conecta eso con el principio de D&C 51:3?",
    options: [
      "Son principios contradictorios — D&C 51 pide igualdad estricta, no adaptación.",
      "Ambos enseñan que la equidad divina no es uniformidad sino una respuesta perfecta a la necesidad específica de cada persona.",
      "El principio del presidente Uchtdorf aplica a lo espiritual y D&C 51 solo a lo temporal.",
      "No hay conexión — D&C 51 es una instrucción administrativa, no un principio doctrinal.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Tomás siente resentimiento porque su amigo recibió más ayuda de la Iglesia que él cuando ambos tenían problemas. Según el principio de D&C 51:3, ¿qué perspectiva podría aliviar ese resentimiento?",
    options: [
      "Que tiene razón — el sistema de bienestar debería dar lo mismo a todos para ser justo.",
      "Que la distribución responde a necesidades diferentes, no a favoritismos — su amigo y él tienen situaciones distintas que requieren respuestas distintas.",
      "Que debería quejarse con el obispo para recibir la misma cantidad que su amigo.",
      "Que las necesidades de los demás nunca deberían influir en la cantidad que cada uno recibe.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Valentina compara constantemente sus circunstancias con las de sus amigos y siempre siente que otros tienen más. Según D&C 51 y el principio de mayordomía del Señor, ¿qué cambiaría en su perspectiva si lo aplicara?",
    options: [
      "Que la comparación es inevitable y el Señor la comprende.",
      "Que el Señor adapta Sus bendiciones a lo que cada persona necesita para crecer — lo que tiene Valentina es exactamente lo que el Señor consideró que ella necesita ahora.",
      "Que debería pedir más hasta igualar lo que tienen los demás.",
      "Que la comparación solo es problema cuando genera envidia visible, no cuando es solo interna.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 51 y D&C 42:29–39 (lección anterior) tratan ambos sobre la administración de bienes en la Iglesia. ¿Cuál es el principio doctrinal común que los une?",
    options: [
        "Que la Iglesia debe acumular recursos para ser independiente del mundo.",
        "Que la igualdad perfecta de bienes es el único estándar aceptable para los santos.",
        "Que los principios económicos del Señor son incompatibles con las sociedades modernas.",
        "Que somos mayordomos — no dueños — de lo que Dios nos da, y la administración fiel de esos recursos para el beneficio de quienes tienen necesidad es una expresión del amor al Salvador.",
      ],
    correctAnswer: 3,
  },
];

// D&C 57
export const dc57Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 57:1–3 identifica Independence, Misuri como el lugar central de algo. ¿De qué?",
    options: [
        "De Sion, donde el templo debía ser edificado.",
        "De las operaciones comerciales de la Iglesia en el oeste de los Estados Unidos.",
        "Del cuartel general del ejército de los santos en los últimos días.",
        "De la misión más grande que la Iglesia tenía asignada en ese período.",
      ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 57:5 instruye a Sidney Gilbert sobre cómo establecerse en Independence. ¿Qué debía obtener y para qué propósito?",
    options: [
      "Una licencia para establecer una imprenta y distribuir el evangelio.",
      "Permiso del gobierno local para predicar en las calles de la ciudad.",
      "Una licencia para establecer un almacén y que los santos pudieran comprar la tierra en paz.",
      "Un contrato de arrendamiento para construir el primer templo de Sion.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El presidente Nelson enseñó que 'Sion no es solo un lugar geográfico sino un pueblo'. ¿Qué implica eso sobre lo que los santos debían construir en Independence?",
    options: [
      "Que la ciudad era lo único importante y el carácter personal era secundario.",
      "Que la ciudad física era el símbolo — lo que realmente había que edificar era un pueblo de corazón puro que eligiera al Señor sobre todo.",
      "Que la ubicación geográfica no tenía ninguna importancia real en el plan del Señor.",
      "Que cualquier ciudad podía ser Sion con suficiente financiamiento y organización.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El mandato de comprar terrenos y organizarse de manera práctica en D&C 57 enseña algo sobre cómo el Señor avanza Su obra. ¿Qué principio ilustra eso?",
    options: [
      "Que el Señor hace todo milagrosamente sin que Sus discípulos deban trabajar.",
      "Que la visión del reino de Dios requiere trabajo práctico, organización y fe en acción — las visiones gloriosas se edifican con esfuerzo ordinario y fiel.",
      "Que el trabajo temporal es una carga que el Señor impone a los santos como prueba.",
      "Que la Iglesia debe ser autosuficiente económicamente antes de poder avanzar su misión.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Agustín piensa que 'Sion es algo del futuro que no tiene que ver con mi vida hoy'. Según el principio del presidente Nelson, ¿qué le respondería el Señor?",
    options: [
      "Que tiene razón y debe esperar las instrucciones del profeta antes de hacer nada.",
      "Que Sion empieza hoy, en el hogar de Agustín y en su barrio — ser de 'corazón puro' es algo que puede elegir ahora mismo, no cuando venga una ciudad futura.",
      "Que la construcción de Sion es responsabilidad de los líderes, no de los jóvenes.",
      "Que primero debe terminar su educación antes de preocuparse por contribuir a Sion.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sofía sabe dónde está Independence pero nunca pensó que eso tuviera impacto en su fe. ¿Cómo podría el conocimiento de D&C 57 cambiar cómo entiende el propósito del evangelio en su vida?",
    options: [
      "Haciéndola querer mudarse físicamente a Misuri para estar más cerca de Sion.",
      "Recordándole que es parte de una historia y un plan que trasciende su vida individual — hay una obra de edificación en marcha donde ella tiene un rol.",
      "Convenciéndola de que la historia de la Iglesia es más importante que la doctrina.",
      "Generando en ella ansiedad por los eventos del fin del mundo que se acercan.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 51 organiza la comunidad temporal en Ohio y D&C 57 establece el lugar de Sion en Misuri. ¿Qué patrón del Señor revelan esas dos revelaciones juntas sobre cómo Él edifica Su reino?",
    options: [
        "Que el Señor siempre revela primero los lugares y después organiza a las personas.",
        "Que la organización eclesiástica es más importante que el carácter personal en la construcción del reino.",
        "Que Ohio y Misuri son igualmente importantes en el plan del Señor para los últimos días.",
        "Que el reino de Dios se edifica con orden concreto y práctico — tanto en las personas (D&C 51) como en los lugares (D&C 57) — la visión gloriosa requiere organización fiel en los detalles pequeños.",
      ],
    correctAnswer: 3,
  },
];

// Práctica del Dominio de la doctrina 4
export const dominioPractica4Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 46:11–12 es un pasaje del Dominio de la Doctrina. ¿Cuál es su declaración central?",
    options: [
      "A todos se les dan dones por el Espíritu de Dios, para que todos sean beneficiados.",
      "El Señor está obligado cuando hacemos lo que Él dice.",
      "La luz de Cristo da luz a todo hombre que viene al mundo.",
      "Si no sois uno, no sois míos.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Si alguien te pregunta '¿por qué confías en que el Señor cumplirá Sus promesas?', ¿cuál de los pasajes del Dominio de la Doctrina responde eso más directamente?",
    options: [
      "D&C 6:36 — 'No temas, pequeño rebaño.'",
      "D&C 8:2–3 — habla a la mente y al corazón.",
      "D&C 82:10 — 'Yo, el Señor, estoy obligado cuando hacéis lo que os digo.'",
      "D&C 18:10–11 — el valor de las almas.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 50:23 ('lo que no edifica no viene de Dios') se estudió en este bloque. ¿Cómo usarías ese versículo si un amigo te comparte algo espiritual que te genera confusión?",
    options: [
      "Rechazándolo de inmediato sin considerarlo porque la confusión ya es señal suficiente.",
      "Aceptándolo porque cualquier cosa espiritual tiene valor aunque genere confusión.",
      "Aplicando el criterio del versículo: si no edifica — si no te acerca al Señor, no fortalece tu fe ni te inspira a ser mejor — no viene de Dios.",
      "Consultando primero las redes sociales para ver qué opina la mayoría.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Qué hace que un versículo del Dominio esté 'dominado' de verdad, más allá de poder recitarlo de memoria?",
    options: [
      "Haberlo copiado a mano tres veces como técnica de memorización.",
      "Poder explicar su principio central con tus propias palabras, ubicarlo en su contexto y aplicarlo a una situación real sin necesitar buscarlo.",
      "Saber cuántos versículos tiene la sección en la que aparece.",
      "Haber escuchado tres sermones diferentes sobre ese versículo.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Nicolás memorizó D&C 46:11–12 pero nunca lo usó fuera del Seminario. Esta semana su hermana menor le dice que siente que no tiene ningún don especial. ¿Cómo podría Nicolás usar ese versículo?",
    options: [
      "Recitándoselo en voz alta para que ella lo memorice también.",
      "Diciéndole que el versículo dice que a todos se les da un don — y ayudándola a identificar cuál podría ser el suyo.",
      "Guardándolo para una situación más importante porque el problema de su hermana es menor.",
      "Enviándole el versículo por mensaje de texto sin explicación para que ella lo interprete.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Renata quiere usar un versículo del Dominio de la Doctrina en su próxima lección de Seminario. ¿Cuál es la señal de que lo usó bien, no solo que lo citó?",
    options: [
      "Que la clase aplaudió después de la cita.",
      "Que recitó el versículo sin errores y dio la referencia completa.",
      "Que el versículo iluminó el principio de la lección y los alumnos pudieron conectarlo con su propia vida.",
      "Que usó el versículo más largo disponible para impresionar al maestro.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "El Dominio de la Doctrina no es solo memorizar — es equiparse para la vida. ¿Cuál es la diferencia entre un versículo que 'aprendiste' y uno que realmente 'dominas'?",
    options: [
        "No hay diferencia práctica — ambos producen el mismo resultado espiritual.",
        "El versículo aprendido fue revisado una vez; el dominado fue revisado más de diez veces.",
        "El versículo aprendido está en el corazón; el dominado solo está en la mente.",
        "El versículo aprendido puede recitarse; el dominado puede usarse — aparece naturalmente en conversaciones, decisiones y momentos de necesidad, sin tener que buscarlo.",
      ],
    correctAnswer: 3,
  },
];

// Mentalidad de crecimiento
export const mentalidad_crecimientoQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 93:12–13 describe que el Salvador 'no recibió de la plenitud al principio, sino que continuó de gracia en gracia'. ¿Qué principio doctrinal sobre el crecimiento establece eso?",
    options: [
        "Que incluso el Salvador creció gradualmente — el crecimiento progresivo es el patrón eterno, no la perfección instantánea.",
        "Que el Salvador era imperfecto y necesitó corrección divina.",
        "Que la gracia es un don pasivo que no requiere ningún esfuerzo de nuestra parte.",
        "Que solo el Salvador podía crecer de esa manera; los mortales no tienen esa capacidad.",
      ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 130:18–19 promete que la inteligencia adquirida en esta vida 'se levantará con nosotros en la resurrección'. ¿Qué condición menciona el versículo para recibir 'muy grande ventaja en el mundo venidero'?",
    options: [
      "Adquirir conocimiento mediante diligencia y obediencia — ambas juntas.",
      "Memorizar el mayor número posible de versículos de las Escrituras.",
      "Completar un título universitario antes de los treinta años.",
      "Dedicar más de dos horas diarias al estudio personal.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "La mentalidad fija dice 'así soy y no puedo cambiar'. La mentalidad de crecimiento dice 'puedo aprender y mejorar'. ¿Qué doctrina del evangelio hace que la mentalidad fija sea doctrinalmente incorrecta?",
    options: [
      "La doctrina de la predestinación — el Señor ya decidió quién crecerá y quién no.",
      "La doctrina de la Expiación y la naturaleza eterna del alma — somos seres capaces de crecimiento eterno, y la Expiación hace posible cambiar incluso las debilidades más profundas.",
      "La doctrina de los dones espirituales — cada uno nace con un conjunto fijo de capacidades.",
      "La doctrina del libre albedrío — podemos elegir no crecer y eso es igualmente válido.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "Éter 12:27 promete que el Señor puede convertir las debilidades en fortalezas. ¿Qué condición exige ese versículo para que eso ocurra?",
    options: [
      "Que la persona sea perfecta en todos los demás aspectos primero.",
      "Que la persona se humille ante el Señor — la humildad abre la puerta para la transformación.",
      "Que la debilidad sea de origen genético y no de decisiones personales.",
      "Que la persona haya guardado todos los mandamientos por al menos un año.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Mateo reprobó matemáticas y ahora dice 'soy malo para los números y no tiene caso intentarlo'. Según D&C 93:12–13 y el principio de mentalidad de crecimiento, ¿qué perspectiva más fiel podría tener?",
    options: [
      "Que tiene razón — no todos tienen capacidad para las matemáticas y es mejor aceptarlo.",
      "Que si el Salvador creció de gracia en gracia, Mateo también puede mejorar en matemáticas con esfuerzo — su situación actual no define su capacidad futura.",
      "Que debería cambiar de carrera para evitar las matemáticas completamente.",
      "Que la mentalidad de crecimiento aplica a lo espiritual pero no a las materias académicas.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Camila tiene una debilidad en su carácter — se irrita fácilmente y lastima a su familia. Siente que 'así es ella' y no puede cambiar. ¿Qué le diría Éter 12:27 directamente?",
    options: [
      "Que tiene razón y que el Señor acepta su carácter tal cual es sin esperar cambio.",
      "Que si se humilla ante el Señor, Él puede convertir esa debilidad específica en una fortaleza — la irritabilidad no es un destino, es un punto de partida.",
      "Que primero debe resolver todas sus otras debilidades antes de trabajar en esa.",
      "Que la transformación del carácter solo ocurre después de la muerte y la resurrección.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 93:12–13 (el Salvador creció de gracia en gracia) y Éter 12:27 (el Señor convierte debilidades en fortalezas) juntos construyen la base doctrinal de la mentalidad de crecimiento. ¿Cuál es el principio completo que forman?",
    options: [
        "Que el crecimiento es automático para quien tiene fe sin necesidad de esfuerzo personal.",
        "Que la mentalidad de crecimiento es solo un principio psicológico moderno sin base doctrinal real.",
        "Que el crecimiento espiritual es más importante que el intelectual o emocional.",
        "Que el Señor tanto modela el crecimiento con Su ejemplo como lo hace posible con Su poder — no estamos solos en el proceso de llegar a ser, y ninguna debilidad ni fracaso es permanente.",
      ],
    correctAnswer: 3,
  },
];

// Desarrollar autosuficiencia a la manera del Señor
export const autosuficiencia_senorQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 78:14 declara que el Señor quiere que Su pueblo no sea dependiente de los reinos del mundo. ¿Qué tipo de dependencia tiene en mente ese versículo específicamente?",
    options: [
        "La dependencia temporal y el poder de los reinos del mundo sobre los santos.",
        "La dependencia espiritual de las doctrinas del mundo, no la temporal.",
        "La dependencia emocional de otros miembros de la Iglesia para el bienestar personal.",
        "La dependencia de los gobiernos para el funcionamiento interno de la Iglesia.",
      ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 58:26–27 describe al siervo perezoso como aquel que espera ser mandado en todo. ¿Qué actitud opuesta promueve el Señor en esos versículos?",
    options: [
      "Ser ansiosamente dedicado a toda buena causa y hacer muchas cosas por propia voluntad.",
      "Esperar siempre la instrucción del obispo antes de tomar cualquier iniciativa.",
      "Actuar solo cuando el beneficio personal está garantizado.",
      "Delegar todas las responsabilidades a quienes tienen llamamientos formales.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El presidente Hinckley dijo que la autosuficiencia 'no es orgullo; es preparación para el servicio'. ¿Qué diferencia hay entre la autosuficiencia del evangelio y el individualismo orgulloso?",
    options: [
      "No hay diferencia real — ambos buscan la independencia económica personal.",
      "La autosuficiencia del evangelio se desarrolla para poder servir y dar más; el individualismo orgulloso busca la independencia para no necesitar de nadie ni dar a nadie.",
      "El individualismo orgulloso es mejor porque produce más riqueza y eso beneficia a todos.",
      "La autosuficiencia del evangelio se limita a los asuntos económicos; el individualismo abarca la vida entera.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué la autosuficiencia es descrita en el evangelio como un principio espiritual y no solo económico?",
    options: [
      "Porque el Señor quiere que los santos tengan más dinero que los no miembros.",
      "Porque quien depende constantemente de otros para lo básico tiene poca capacidad de dar — y el propósito del evangelio es formar personas que puedan servir, contribuir y cuidar a otros.",
      "Porque la autosuficiencia económica garantiza automáticamente la autosuficiencia espiritual.",
      "Porque el Señor prefiere a los miembros ricos sobre los pobres para Su obra.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Renata tiene 17 años y todavía pide dinero a sus padres para todo aunque podría trabajar algunas horas. Según D&C 58:26–27, ¿qué perspectiva sobre su situación promueve el Señor?",
    options: [
      "Que es normal depender de los padres hasta los 25 años en la cultura actual.",
      "Que ser ansiosamente dedicada al bien incluye tomar iniciativa para desarrollar su propia capacidad económica — esperar que otros provean cuando puede empezar a hacerlo es el patrón del 'siervo perezoso'.",
      "Que debe esperar a terminar el colegio antes de pensar en la independencia económica.",
      "Que su situación económica depende completamente de las circunstancias y el Señor no espera iniciativa cuando las condiciones son difíciles.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Mateo dice que 'no puede servir más en la Iglesia porque no tiene tiempo, dinero ni energía'. Según el principio de D&C 78:14 y la autosuficiencia como base del servicio, ¿qué le diría el evangelio?",
    options: [
      "Que tiene razón y debe esperar hasta tener más recursos antes de intentar servir.",
      "Que debe donar todo lo que tiene ahora aunque no le alcance para sus propias necesidades.",
      "Que desarrollar autosuficiencia — incluyendo administrar bien su tiempo y energía — es precisamente lo que le daría capacidad de servir; la autosuficiencia precede al servicio.",
      "Que el servicio en la Iglesia requiere solo buena voluntad, no recursos ni tiempo real.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 78:14 (independencia del mundo) y D&C 58:26–27 (iniciativa personal en el bien) son dos principios de autosuficiencia. ¿Cuál es la conexión profunda entre ellos?",
    options: [
        "Ambos hablan de dinero — uno de no deber y el otro de ganar.",
        "Son principios independientes que el Señor reveló en contextos separados sin relación directa.",
        "Uno es para hombres y el otro para mujeres según los roles del evangelio.",
        "Ambos apuntan al mismo objetivo: un discípulo capaz de actuar desde la libertad — libre del mundo para no depender de él, y libre en el carácter para actuar sin necesitar ser compelido.",
      ],
    correctAnswer: 3,
  },
];

// ============================================================================
// SEMANA 14 — 2 al 8 de Junio
// Lecciones: D&C 58:26-29, D&C 58:38-60, D&C 59,
//            Descubre fortalezas, Desarrollar habilidades
// ============================================================================

// D&C 58:26–29
export const dc58_26_29Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 58:26 describe a un tipo de siervo que el Señor desaprueba. ¿Cuáles son las dos características que ese versículo le atribuye?",
    options: [
      "Perezoso y no sabio — el que espera ser mandado en todo.",
      "Impaciente y orgulloso — el que actúa antes de recibir instrucciones.",
      "Distraído y deshonesto — el que actúa solo cuando lo observan.",
      "Temeroso y dependiente — el que nunca toma decisiones por sí mismo.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 58:28 declara: 'el poder está en ellos, mediante los cuales son agentes para sí mismos'. ¿A qué don divino se refiere ese 'poder'?",
    options: [
      "Al poder del sacerdocio que permite hacer milagros.",
      "Al libre albedrío — la agencia divina que hace al ser humano responsable de sus acciones.",
      "Al poder económico que viene de la prosperidad material.",
      "Al poder del Espíritu Santo recibido en la confirmación.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El élder Cook enseñó que el Señor no nos diseñó para ser 'siervos pasivos que esperan instrucciones en cada detalle'. ¿Qué implica eso sobre la madurez espiritual que el Señor busca en Sus discípulos?",
    options: [
      "Que la obediencia ya no es importante cuando uno alcanza cierto nivel de madurez.",
      "Que un discípulo maduro actúa por amor y visión del bien, no solo porque le dijeron — su iniciativa nace del carácter, no de la presión externa.",
      "Que la madurez espiritual significa no necesitar líderes ni estructura eclesiástica.",
      "Que los discípulos maduros pueden ignorar los mandamientos cuando lo consideran conveniente.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Cuál es la diferencia entre actuar porque 'me van a pedir cuentas' y actuar porque 'veo una necesidad y tengo el poder de ayudar'?",
    options: [
      "No hay diferencia — el resultado de la acción es el mismo en ambos casos.",
      "El primero es obediencia por miedo; el segundo es discipulado por amor — D&C 58:27 apunta al segundo como el estándar del Señor.",
      "El primero es más valioso porque demuestra sujeción a la autoridad.",
      "El segundo es peligroso porque puede llevar a acciones no autorizadas.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Joaquín está en casa y ve que su mamá está agotada y la cocina está sucia. Espera a que le pidan que ayude antes de hacer algo. Según D&C 58:26–27, ¿qué nombre tiene exactamente esa actitud?",
    options: [
      "Prudencia — es mejor esperar instrucciones para no hacer las cosas mal.",
      "La actitud del siervo perezoso y no sabio — tiene el poder de actuar y la necesidad es visible, pero espera ser mandado.",
      "Respeto a los límites del hogar — no es su rol actuar sin que se lo pidan.",
      "Una reacción normal para un adolescente que no sabe cómo ayudar.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sofía dice que no hace nada en la Iglesia porque 'nadie me ha llamado a nada'. D&C 58:27 le habla directamente. ¿Qué le diría el Señor?",
    options: [
      "Que tiene razón y debe esperar un llamamiento formal antes de actuar.",
      "Que los discípulos deben ser ansiosamente dedicados a toda buena causa por propia voluntad — el bien no necesita un llamamiento previo para ser hecho.",
      "Que primero debe completar el programa de Seminario antes de servir.",
      "Que el obispo es el único que puede asignar servicio y Sofía debe respetarlo.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 58:26–27 (no esperar ser mandado en todo) y el principio de D&C 41:5 (recibir la ley y hacerla) apuntan al mismo tipo de discípulo. ¿Cuál es ese perfil?",
    options: [
        "Alguien que obedece solo cuando la autoridad lo presiona y espera a que le digan exactamente qué hacer.",
        "Alguien que cumple externamente los mandamientos aunque su corazón esté en otro lado.",
        "Alguien que actúa sin consultar a los líderes y toma todas las decisiones de forma independiente.",
        "Alguien que ha internalizado los principios del evangelio hasta el punto de que su iniciativa en el bien nace del carácter, no de la presión externa — que hace porque quiere, no solo porque le dijeron.",
      ],
    correctAnswer: 3,
  },
];

// D&C 58:38–60
export const dc58_38_60Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 58:42–43 describe el arrepentimiento genuino con dos componentes. ¿Cuáles son?",
    options: [
      "Confesar los pecados y abandonarlos — los dos son necesarios.",
      "Sentir remordimiento y recibir una bendición del obispo.",
      "Orar durante cuarenta días y leer las Escrituras sin interrupción.",
      "Pagar una ofrenda especial y ayunar tres veces consecutivas.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 58:42 contiene una de las promesas más poderosas sobre el perdón. ¿Cuál es?",
    options: [
      "Que el Señor perdonará según la gravedad del pecado y el tiempo transcurrido.",
      "Que 'yo, el Señor, no los recuerdo más' — el perdón es completo cuando el arrepentimiento es genuino.",
      "Que el perdón llega automáticamente después de suficiente tiempo sin cometer el mismo error.",
      "Que el Señor perdona solo los pecados que otros no conocen.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El presidente Nelson enseñó que el arrepentimiento 'no es un castigo sino una liberación'. ¿Qué implica esa perspectiva sobre la función real del arrepentimiento en la vida del discípulo?",
    options: [
      "Que el arrepentimiento es opcional para quienes cometen errores menores.",
      "Que el arrepentimiento no es la puerta a la vergüenza sino a la libertad — libera del peso del pecado y restaura la capacidad plena de recibir el Espíritu.",
      "Que el arrepentimiento solo es liberación cuando no hay consecuencias visibles del pecado.",
      "Que el arrepentimiento es una liberación solo para los miembros activos, no para quienes están alejados.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué el arrepentimiento genuino requiere tanto confesar como abandonar — y no basta con solo una de las dos?",
    options: [
      "Porque la confesión sola demuestra honestidad y eso es suficiente para el perdón.",
      "Porque confesar sin abandonar es reconocer el problema sin resolverlo; abandonar sin confesar puede ser orgullo que evita la humildad — los dos juntos completan la transformación.",
      "Porque son requisitos formales de la Iglesia sin razón espiritual profunda.",
      "Porque el abandono es más difícil que la confesión y por eso el Señor requiere ambos.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Valentina lleva meses sintiéndose culpable por algo que hizo y ya se arrepintió con el obispo. Sigue cargando esa culpa como si el perdón no fuera real. D&C 58:42 le habla directamente. ¿Qué le diría?",
    options: [
      "Que la culpa prolongada es una señal de que el arrepentimiento no fue completo.",
      "Que 'yo, el Señor, no los recuerdo más' — si el arrepentimiento fue genuino, la culpa que sigue cargando no viene del Señor sino de ella misma.",
      "Que debe seguir sintiéndose mal como evidencia de que tomó el asunto en serio.",
      "Que necesita arrepentirse nuevamente porque la culpa indica que algo quedó sin resolver.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín siente que su error fue 'demasiado grave' para que el Señor lo olvide de verdad. Según D&C 58:42, ¿qué condición establece el Señor para ese olvido completo?",
    options: [
      "Que el pecado no sea de cierto tipo que el Señor considera imperdonable.",
      "Que hayan pasado suficientes años desde el error para que su impacto se haya borrado.",
      "Que el arrepentimiento sea genuino — que haya confesión y abandono real. La promesa no pone límite de gravedad; pone condición de sinceridad.",
      "Que Agustín haya compensado el daño causado completamente antes de recibir el perdón.",
    ],
    correctAnswer: 2,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 58:42 ('el Señor no los recuerda más') y D&C 19:16–19 (Cristo sufrió para que nosotros no suframos si nos arrepentimos) juntos forman la doctrina completa del arrepentimiento. ¿Cuál es ese mensaje completo?",
    options: [
        "Que el pecado tiene consecuencias inevitables que el arrepentimiento no puede eliminar completamente.",
        "Que el perdón del Señor es provisional y puede retirarse si se cometen nuevos errores.",
        "Que el sufrimiento de Cristo fue solo simbólico y el arrepentimiento tiene valor independiente de Él.",
        "Que el Salvador ya pagó el precio para que el arrepentimiento genuino produzca perdón real y completo — Su sufrimiento fue exactamente para que nosotros pudiéramos librarnos del nuestro, y ese perdón es tan completo que Él no lo recuerda más.",
      ],
    correctAnswer: 3,
  },
];

// D&C 59
export const dc59Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 59 fue revelada el mismo día en que falleció Polly Knight, la primera persona miembro en morir en Misuri. ¿Sobre qué dos temas centrales trata esa revelación?",
    options: [
      "El día de reposo y la gratitud por las creaciones de Dios.",
      "El arrepentimiento y el cuidado de los pobres en Sion.",
      "La organización del sacerdocio y el llamado a la misión.",
      "Las señales de los tiempos y la preparación para la Segunda Venida.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 59:9–10 describe cómo debe guardarse el día de reposo. ¿Cuál de las siguientes actividades menciona explícitamente ese versículo?",
    options: [
      "Ir a la casa de oración y ofrecer oblaciones al Altísimo.",
      "Descansar todo el día evitando cualquier actividad física.",
      "Leer el Libro de Mormón durante al menos tres horas.",
      "Hacer el almuerzo más elaborado de la semana para honrar el día.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El presidente Nelson enseñó que cuando hacemos del domingo un 'deleite', 'la actitud lo cambia todo'. ¿Qué diferencia práctica hace esa actitud entre guardar el día de reposo por obligación versus por amor?",
    options: [
      "No hay diferencia — el resultado externo es el mismo independientemente de la motivación.",
      "Guardar el domingo por obligación es una carga que se cumple; guardarlo por amor es una fuente de renovación que uno busca — la motivación transforma la experiencia.",
      "La obligación produce más frutos espirituales porque implica más sacrificio.",
      "Solo los adultos pueden sentir el deleite del domingo; los jóvenes deben guardar por obligación primero.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "D&C 59:15–16 promete que los santos que guardan los mandamientos recibirán 'la plenitud de la tierra'. ¿Qué tipo de bendición describe ese lenguaje — material, espiritual o ambas?",
    options: [
      "Solo material — el Señor promete prosperidad económica a los obedientes.",
      "Solo espiritual — es una metáfora de paz interior sin implicaciones temporales.",
      "Ambas — las bendiciones del Señor a quienes guardan Sus mandamientos incluyen tanto dimensiones temporales como espirituales, y con gratitud como condición central.",
      "Solo aplica a los santos que vivieron en Misuri en el siglo XIX.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Luca describe su domingo típico: asistir a la Iglesia por obligación, volver a casa y pasar el resto del día en el celular. Según D&C 59:9–10, ¿qué pregunta concreta debería hacerse sobre ese domingo?",
    options: [
      "'¿Cuántas horas exactamente debo estar en modo espiritual para que el día sea válido?'",
      "'¿Qué actividades del domingo me están acercando a renovar mi relación con el Señor y cuáles simplemente llenan el tiempo?'",
      "'¿Hay alguna regla oficial de la Iglesia que prohíba usar el celular los domingos?'",
      "'¿Mis padres me están observando para ver si guardo bien el día de reposo?'",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás dice que preferiría hacer otra cosa los domingos pero que 'no queda otra'. Si aplicara la perspectiva del presidente Nelson de que el domingo debe ser un 'deleite', ¿qué cambiaría?",
    options: [
      "Que ya no tendría que asistir a la Iglesia porque la asistencia obligatoria contradice el deleite.",
      "Que en lugar de preguntarse '¿qué no puedo hacer hoy?', se preguntaría '¿qué puedo hacer hoy que renueve mi conexión con el Señor y con mi familia?'",
      "Que buscaría actividades más entretenidas dentro del marco del día de reposo.",
      "Que el deleite llegaría automáticamente si simplemente cambia su actitud sin cambiar sus hábitos.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 59 trata el día de reposo y la gratitud como temas relacionados. ¿Cuál es el principio que los une?",
    options: [
        "Que la gratitud se expresa principalmente mediante el diezmo y las ofrendas, no en el reposo.",
        "Que ambos son obligaciones formales que el Señor requiere sin mayor conexión entre ellas.",
        "Que la gratitud aplica a lo material y el reposo a lo espiritual, y por eso aparecen juntos.",
        "Que el día de reposo es la expresión semanal de la gratitud más profunda — un tiempo dedicado a reconocer que Dios es la fuente de todo lo que tenemos, incluida la vida misma.",
      ],
    correctAnswer: 3,
  },
];

// Descubre tus fortalezas y habilidades
export const descubre_fortalezasQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Éter 12:27 promete que el Señor puede convertir las debilidades en fortalezas. ¿A qué condición está ligada esa promesa?",
    options: [
      "A que la persona se humille ante el Señor.",
      "A que la persona tenga al menos cinco años de membresía activa.",
      "A que la debilidad sea de carácter y no de habilidades prácticas.",
      "A que la persona ya haya recibido el sacerdocio o las ordenanzas del templo.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 46:11–12 establece que a todos se les dan dones. ¿Qué implica eso directamente sobre la persona que dice 'no tengo ningún don especial'?",
    options: [
      "Que probablemente tiene razón y sus dones son tan pequeños que no cuentan.",
      "Que el versículo le responde directamente: a todos — sin excepción — se les da un don; el problema es que todavía no lo identificó.",
      "Que debe orar más intensamente para recibir dones que todavía no le fueron dados.",
      "Que sus dones se revelarán solo después de cumplir ciertos requisitos de membresía.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El élder Ashton mencionó dones como 'escuchar con compasión' o 'ver el bien en los demás'. ¿Por qué identificar esos dones silenciosos es tan importante como identificar los más visibles?",
    options: [
      "Porque los dones silenciosos son más valiosos que los dramáticos según el evangelio.",
      "Porque si solo valoramos los dones visibles, ignoramos la mayoría de los dones reales que el Señor distribuyó — y dejamos de usarlos para el beneficio de quienes nos rodean.",
      "Porque los dones silenciosos son los únicos que el Señor realmente otorga a los jóvenes.",
      "Porque identificarlos permite presumir de humildad ante los demás.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué conocer las propias fortalezas no es arrogancia sino 'mayordomía responsable', según el principio de la lección?",
    options: [
      "Porque la mayordomía implica administrar lo de otros, no lo propio.",
      "Porque el Señor nos dio esas fortalezas con un propósito — conocerlas es el primer paso para ponerlas al servicio de ese propósito, no para enorgullecerse de ellas.",
      "Porque la arrogancia solo existe cuando se exhiben las fortalezas en público.",
      "Porque la mayordomía responsable consiste en esconder las fortalezas para no generar envidia.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Sofía es muy buena conectando a personas que se sienten solas con grupos de amigos. Nunca pensó en eso como un don espiritual. Según D&C 46 y el principio de la lección, ¿qué debería entender Sofía sobre esa habilidad?",
    options: [
      "Que es solo una habilidad social sin dimensión espiritual.",
      "Que es un don dado para el beneficio de todos — una capacidad que el Señor le dio con el propósito específico de que otros sean beneficiados por ella.",
      "Que debe esperar a ser llamada oficialmente para usar ese don en la Iglesia.",
      "Que primero debe desarrollarlo más antes de considerarlo un don genuino.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Tomás tiene una debilidad: se rinde fácilmente cuando algo se pone difícil. Según Éter 12:27, ¿qué podría ocurrir con esa debilidad si Tomás se humilla ante el Señor?",
    options: [
      "Que la debilidad desaparecerá automáticamente con el tiempo sin esfuerzo adicional.",
      "Que el Señor puede convertir esa tendencia a rendirse en una fortaleza — quizás en empatía profunda por los que luchan, o en una fe más arraigada que nace de haber aprendido a perseverar.",
      "Que la debilidad seguirá siendo una limitación que él debe simplemente aceptar.",
      "Que la conversión de la debilidad ocurrirá solo en la siguiente vida, no en esta.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 46:11 ('a todos se les da un don') y Éter 12:27 ('el Señor convierte debilidades en fortalezas') juntos presentan una visión completa del potencial personal. ¿Cuál es esa visión?",
    options: [
        "Que cada persona nace con fortalezas fijas y debilidades permanentes que no se pueden cambiar.",
        "Que solo quienes no tienen debilidades visibles pueden descubrir y usar sus dones plenamente.",
        "Que los dones son más importantes que trabajar en las debilidades.",
        "Que somos seres con dones reales que debemos descubrir y usar, y con debilidades que el Señor puede transformar — ningún punto de partida define el destino cuando hay humildad y el Señor de por medio.",
      ],
    correctAnswer: 3,
  },
];

// Desarrollar habilidades y destrezas
export const desarrollar_habilidadesQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Mateo 25:21 cierra la parábola de los talentos con las palabras del señor al siervo fiel. ¿Qué le dijo?",
    options: [
      "'Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.'",
      "'Bien hecho; tu esfuerzo fue suficiente aunque no multiplicaste los talentos.'",
      "'Bien; ve y descansa ahora que cumpliste con lo que te di.'",
      "'Buen trabajo; tus talentos serán distribuidos entre quienes tienen menos.'",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 58:27 dice que los hombres deben ser 'ansiosamente dedicados a toda buena causa'. ¿Qué implica la palabra 'ansiosamente' sobre la actitud que el Señor espera?",
    options: [
      "Que el Señor quiere que Sus discípulos estén siempre ansiosos y estresados.",
      "Que la dedicación al bien debe ser activa, entusiasta y proactiva — no tibia ni pasiva.",
      "Que solo las causas urgentes merecen dedicación ansiosamente activa.",
      "Que la ansiedad es una virtud espiritual que produce mejores resultados.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El presidente Uchtdorf enseñó que los grandes logros son el resultado de 'cientos de horas de práctica cuando nadie está mirando'. ¿Qué dice eso sobre dónde ocurre realmente el desarrollo de habilidades?",
    options: [
      "Que el desarrollo ocurre principalmente en los eventos públicos donde hay retroalimentación.",
      "Que ocurre en la constancia cotidiana invisible — en las horas de práctica que nadie ve pero que construyen la competencia real.",
      "Que ocurre más rápido con un buen maestro que con horas de práctica individual.",
      "Que ocurre solo cuando hay presión externa de exámenes o evaluaciones.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué la parábola de los talentos (Mateo 25) es doctrinalmente diferente a simplemente decir 'trabaja duro'?",
    options: [
      "No es diferente — la parábola solo es un ejemplo ilustrativo del principio de trabajar duro.",
      "Porque la parábola enmarca el desarrollo de habilidades como una responsabilidad ante el Señor — los talentos son Suyos y Él espera que los multipliquemos, no solo que los conservemos.",
      "Porque la parábola aplica solo a talentos económicos, no a habilidades personales.",
      "Porque la parábola es solo para líderes que administran recursos de la Iglesia.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Camila empezó a aprender guitarra pero lo dejó después de dos semanas porque 'no sonaba bien todavía'. Según la parábola de los talentos y el principio de D&C 58:27, ¿qué perspectiva le falta a Camila?",
    options: [
      "Que la guitarra no es un talento dado por el Señor y puede dejarlo sin consecuencias.",
      "Que el desarrollo real requiere la constancia invisible de horas de práctica cuando todavía no sale bien — rendirse en dos semanas es enterrar el talento, no multiplicarlo.",
      "Que primero debe tener instrucción formal antes de practicar por su cuenta.",
      "Que no vale la pena desarrollar habilidades artísticas porque no tienen valor eterno.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Agustín tiene facilidad para hablar en público pero nunca la practica porque 'ya nació así'. Según el principio de la lección, ¿qué está perdiendo con esa actitud?",
    options: [
      "Nada — si el don es natural, no necesita desarrollo adicional.",
      "Está enterrando parte del talento — los dones naturales que no se desarrollan se atrofian; multiplicarlos require práctica intencional igual que cualquier otro talento.",
      "Solo tiempo — el don estará disponible cuando lo necesite sin práctica previa.",
      "La popularidad — si no practica, la gente dejará de admirar su facilidad.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "La lección sobre descubrir fortalezas y esta sobre desarrollar habilidades son dos pasos de un mismo proceso. ¿Cuál es el principio completo que forman juntas?",
    options: [
        "Primero el Señor te da los dones y luego tú los disfrutas — el proceso es receptivo, no activo.",
        "Descubrir es suficiente — identificar el talento ya cumple con la responsabilidad ante el Señor.",
        "El desarrollo de habilidades es responsabilidad del maestro, no del alumno.",
        "Descubrir el don es solo el principio — el Señor espera que lo multipliques con trabajo constante; el talento identificado pero no desarrollado queda enterrado como en la parábola.",
      ],
    correctAnswer: 3,
  },
];

// ============================================================================
// SEMANA 15 — 9 al 15 de Junio
// Lecciones: Fe y autosuficiencia, Administración recursos,
//            D&C 60-62, D&C 63:1-23, D&C 63:57-64
// ============================================================================

// Fe en Jesucristo para desarrollar la autosuficiencia
export const fe_autosuficienciaQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "Proverbios 3:5–6 da un mandato sobre cómo tomar decisiones. ¿Cuál es?",
    options: [
      "Confiar en el Señor con todo el corazón y reconocerlo en todos los caminos.",
      "Consultar primero con los padres y después con los líderes de la Iglesia.",
      "Estudiar todas las opciones antes de involucrar al Señor en la decisión.",
      "Actuar con determinación propia para demostrar madurez espiritual.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 78:13–14 conecta la igualdad temporal con un propósito espiritual. ¿Cuál es ese propósito según el versículo 14?",
    options: [
      "Para que el pueblo del Señor no sea dependiente de los reinos del mundo ni de sus poderes.",
      "Para que la Iglesia pueda construir más templos sin deuda externa.",
      "Para que los líderes de la Iglesia puedan ser elegidos con base en el mérito, no en la riqueza.",
      "Para que los santos puedan vivir en comunidades separadas del mundo sin necesitar contacto.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El élder Hales enseñó que la autosuficiencia verdadera combina diligencia con fe. ¿Cuál es la diferencia entre trabajar solo con diligencia y trabajar con diligencia más fe?",
    options: [
      "No hay diferencia práctica — el esfuerzo produce los mismos resultados con o sin fe.",
      "La fe sin diligencia produce milagros sin esfuerzo; la diligencia sin fe produce resultados mediocres.",
      "La fe multiplica el esfuerzo con bendiciones que la diligencia sola no puede producir — el Señor amplifica lo que uno construye con Su ayuda.",
      "La diligencia es más importante que la fe en asuntos prácticos y económicos.",
    ],
    correctAnswer: 2,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué la autosuficiencia en el evangelio no es lo mismo que la independencia orgullosa?",
    options: [
      "Porque la autosuficiencia del evangelio requiere vivir el diezmo, que la independencia orgullosa no hace.",
      "Porque la autosuficiencia del evangelio se desarrolla con el Señor como socio activo y para poder servir a otros — no es autonomía de Dios sino colaboración con Él.",
      "Porque la independencia orgullosa produce más riqueza y eso es equivalente a más bendiciones.",
      "No son diferentes — la Iglesia simplemente llama 'autosuficiencia' a lo que el mundo llama 'independencia'.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Renata enfrenta una decisión importante sobre su educación futura y está muy ansiosa. Según Proverbios 3:5–6, ¿cuál es el primer paso que debería dar?",
    options: [
      "Hacer una lista de pros y contras de cada opción antes de involucrar al Señor.",
      "Confiar en el Señor con todo su corazón y reconocerlo en esa decisión — orar pidiendo guía específica antes de decidir.",
      "Consultar con sus padres y maestros para tener suficiente información primero.",
      "Esperar una señal clara antes de tomar cualquier decisión sobre su futuro.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Nicolás dice que 'si oro suficiente, el Señor me dará un buen trabajo sin que yo me esfuerce demasiado'. ¿Cómo corrige ese razonamiento el principio de la autosuficiencia del evangelio?",
    options: [
      "Que tiene razón — la oración suficiente siempre produce los resultados temporales deseados.",
      "Que la fe amplifica el esfuerzo pero no lo reemplaza — el Señor bendice la diligencia, no la pasividad; la oración sin trabajo no produce los mismos resultados que la oración con trabajo.",
      "Que la oración nunca tiene efecto en los resultados económicos o laborales.",
      "Que debería orar más para ver si funciona antes de juzgar el principio.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "Proverbios 3:5–6 (confiar en el Señor) y D&C 78:14 (no depender de los reinos del mundo) juntos describen una posición espiritual. ¿Cuál es?",
    options: [
        "Depender totalmente del Señor para todo sin desarrollar capacidades propias.",
        "Ser independiente tanto del mundo como del Señor para tomar las mejores decisiones.",
        "Ignorar el mundo completamente y vivir solo de lo que la Iglesia provee.",
        "Una autosuficiencia paradójica: dependiente del Señor e independiente del mundo — la fe en Cristo es el fundamento de la libertad temporal, no dos cosas separadas.",
      ],
    correctAnswer: 3,
  },
];

// La administración prudente de los recursos económicos
export const administracion_recursosQuestions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 104:78 da una instrucción económica específica al pueblo del Señor. ¿Cuál es?",
    options: [
      "Saldar todas las deudas en la medida en que se hayan incurrido en ellas.",
      "Ahorrar el diez por ciento de todos los ingresos antes del diezmo.",
      "Invertir en propiedades para no depender del trabajo asalariado.",
      "Dar el cien por ciento de los excedentes al fondo de bienestar de la Iglesia.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Malaquías 3:10 desafía al pueblo a probar al Señor en el diezmo. ¿Qué promete el Señor a quienes lo hagan?",
    options: [
      "Abrir las ventanas de los cielos y derramar una bendición hasta que sobreabunde.",
      "Proteger sus bienes de todo robo y pérdida económica.",
      "Darles propiedades en Independence, Misuri para el Milenio.",
      "Eliminar todas sus deudas en el transcurso de un año.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El élder Wirthlin enseñó que 'el principio de gastar menos de lo que ganamos parece trivial pero pocas cosas impactan más la calidad de vida familiar'. ¿Por qué ese principio tan simple tiene ese impacto tan profundo?",
    options: [
      "Porque el ahorro produce interés compuesto que multiplica la riqueza automáticamente.",
      "Porque vivir dentro de los medios elimina la fuente principal de estrés financiero — y ese estrés destruye la paz familiar y la capacidad de servir con libertad.",
      "Porque los que ahorran más reciben mayores bendiciones económicas del Señor.",
      "Porque el impacto es solo económico, no espiritual ni relacional.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "¿Por qué el diezmo es descrito en el evangelio como un principio de fe y no solo como una obligación económica?",
    options: [
      "Porque el Señor necesita ese dinero para financiar Sus operaciones.",
      "Porque pagar el diezmo cuando es ajustado económicamente demuestra que el Señor está primero — y el Señor prometió en Malaquías 3:10 responder a esa prioridad con bendiciones.",
      "Porque el diezmo es la única forma de saber si alguien tiene fe genuina.",
      "Porque el diezmo reemplaza al ayuno como la principal demostración de fe en el evangelio.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Tomás recibe dinero de su trabajo de medio tiempo y lo gasta todo en la semana en entretenimiento. Según D&C 104:78 y el principio de administración del evangelio, ¿qué hábito concreto debería desarrollar?",
    options: [
      "Dejar de trabajar hasta que tenga suficiente disciplina para administrar bien el dinero.",
      "Guardar todo el dinero sin gastar nada hasta tener una cantidad significativa.",
      "Separar el diezmo primero, después establecer un porcentaje para ahorro, y administrar el resto — vivir dentro de lo que tiene, no dentro de lo que desea tener.",
      "Consultar con el obispo para que le diga exactamente cómo gastar cada peso.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Valentina dice que 'cuando tenga más dinero empezaré a pagar el diezmo'. Según Malaquías 3:10, ¿qué problema tiene ese razonamiento?",
    options: [
      "Ningún problema — el Señor entiende que primero hay que alcanzar estabilidad económica.",
      "Que el Señor dijo 'probadme' precisamente cuando parece difícil — la fe se demuestra pagando el diezmo cuando el dinero es ajustado, no cuando sobra.",
      "Que el diezmo es opcional hasta que los ingresos superen cierto umbral.",
      "Que debería esperar a consultar con el obispo antes de tomar esa decisión.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 104:78 (saldar deudas) y Malaquías 3:10 (probar al Señor en el diezmo) juntos describen dos dimensiones de la administración fiel. ¿Cuál es el principio integrador?",
    options: [
        "Que el Señor solo bendice económicamente a quienes no tienen deudas.",
        "Que pagar el diezmo y saldar deudas son obligaciones independientes sin relación doctrinal.",
        "Que el principio económico del evangelio es idéntico a los principios de finanzas personales seculares.",
        "Que la administración fiel pone al Señor primero (diezmo) y elimina la dependencia del mundo (deudas) — ambas juntas construyen la libertad económica y espiritual que el evangelio promueve.",
      ],
    correctAnswer: 3,
  },
];

// D&C 60–62
export const dc60_62Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 60:2–3 contiene una reprensión del Señor a algunos de los santos que viajaban de regreso a Ohio. ¿Cuál fue el motivo de esa reprensión?",
    options: [
      "No abrieron sus bocas para testificar durante el viaje — ocultaron el talento que el Señor les dio.",
      "Viajaron por una ruta diferente a la que el Señor indicó.",
      "No cuidaron bien a los enfermos del grupo durante el trayecto.",
      "Gastaron más dinero del que el Señor consideraba apropiado en el viaje.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 62:3 contiene una promesa de aliento del Señor a los santos que viajaban desde el este. ¿Cuál es esa promesa?",
    options: [
      "Que su viaje estaría libre de peligros y enfermedades.",
      "Que sus testimonios habían sido registrados en el cielo y los ángeles se habían regocijado.",
      "Que recibirían tierra en Sion sin costo alguno.",
      "Que serían llamados a cargos de liderazgo cuando llegaran a Misuri.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "D&C 61 reveló que el río Misuri tenía poderes destructivos que hacían peligroso viajar por él más de lo necesario. ¿Qué nos enseña eso sobre el nivel de detalle con que el Señor guía a Sus discípulos?",
    options: [
      "Que el Señor solo interviene en decisiones grandes y espirituales, no en detalles de logística.",
      "Que el Señor está presente en los detalles prácticos del camino — Su guía cubre tanto lo espiritual como las decisiones concretas de la vida cotidiana.",
      "Que los santos debían consultar a expertos locales antes de confiar en la revelación.",
      "Que la revelación de D&C 61 fue una excepción única y no establece un patrón.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "El élder Holland enseñó que 'no existe el testimonio pequeño o sin importancia — cada vez que lo das, es registrado en el cielo'. ¿Qué implicación práctica tiene eso para un joven que siente que su testimonio no vale la pena compartir?",
    options: [
      "Ninguna — si el testimonio no es elocuente, es mejor no compartirlo.",
      "Que el Señor registra y valora cada testimonio dado, independientemente de su tamaño o elocuencia — ningún testimonio es invisible ante el Señor.",
      "Que debe esperar a tener un testimonio más desarrollado antes de compartirlo.",
      "Que solo cuenta el testimonio dado en contextos formales de la Iglesia.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Mateo tuvo una oportunidad de testificar a un amigo durante el recreo pero se quedó callado porque 'no era el momento perfecto'. Según D&C 60:2–3, ¿cómo evalúa el Señor esa decisión?",
    options: [
      "Que fue una buena decisión — la prudencia en el testimonio es una virtud.",
      "Que ocultó el talento que el Señor le dio — la oportunidad de testificar existía y la dejó pasar.",
      "Que el Señor entiende que esperar el momento perfecto es señal de discernimiento.",
      "Que debería haber pedido una señal primero para confirmar que era el momento correcto.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Lucía dice que 'de nada sirve mi testimonio porque nadie lo escucha de todos modos'. D&C 62:3 le responde directamente. ¿Qué le diría el Señor?",
    options: [
      "Que tiene razón y debe esperar hasta tener más impacto antes de testificar.",
      "Que los testimonios dados en fe son registrados en el cielo y los ángeles se regocijan — el impacto visible en otros no es el único ni el más importante criterio.",
      "Que debe buscar un foro más grande para que su testimonio tenga más alcance.",
      "Que el testimonio solo tiene valor cuando produce conversiones verificables.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 60:2–3 (reprensión por no testificar) y D&C 62:3 (aliento porque los testimonios son registrados) son las dos caras de la misma moneda. ¿Cuál es el principio completo que forman?",
    options: [
        "Que testificar es una obligación con consecuencias negativas si no se cumple, pero sin beneficios espirituales reales.",
        "Que el testimonio formal en la reunión de la Iglesia es el único que cuenta para el registro celestial.",
        "Que el Señor solo corrige y no alienta, o solo alienta y no corrige, según la situación.",
        "Que cada oportunidad de testimoniar tiene peso eterno — tanto por lo que se pierde si se calla como por lo que se gana si se habla; y el Señor registra ambas.",
      ],
    correctAnswer: 3,
  },
];

// D&C 63:1–23
export const dc63_1_23Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 63:9–10 establece la secuencia correcta entre fe y señales. ¿Cuál es esa secuencia?",
    options: [
      "Las señales siguen a los que creen — la fe precede a las señales, no al revés.",
      "Las señales deben buscarse primero para confirmar que la fe es correcta.",
      "Las señales y la fe se desarrollan simultáneamente sin un orden específico.",
      "Las señales solo siguen a los que tienen cargos de sacerdocio activos.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "D&C 63:16 advierte sobre una consecuencia espiritual específica. ¿Cuál es?",
    options: [
      "Que quien mira a alguien para codiciar pierde la luz y la gracia de Dios.",
      "Que quien busca señales sin fe perderá su membresía en la Iglesia.",
      "Que quien no paga el diezmo regularmente no puede recibir el Espíritu.",
      "Que quien no asiste a las reuniones pierde el derecho a las bendiciones del sacerdocio.",
    ],
    correctAnswer: 0,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "¿Por qué buscar señales antes de creer no produce fe duradera, según el principio de D&C 63:9–10?",
    options: [
      "Porque las señales siempre son falsas y engañosas por naturaleza.",
      "Porque la fe basada en señales externas depende de que las señales continúen — cuando dejan de venir, la fe colapsa; la fe basada en el Espíritu es independiente de las circunstancias.",
      "Porque las señales solo se dan una vez y después ya no están disponibles.",
      "Porque buscar señales es una señal de deshonestidad espiritual que el Señor no recompensa.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "D&C 63:16 conecta la impureza mental con la pérdida del Espíritu. ¿Qué implica eso sobre la relación entre la pureza moral y la capacidad de recibir guía espiritual?",
    options: [
      "Que la impureza moral solo afecta las relaciones humanas, no la relación con el Espíritu.",
      "Que el Espíritu Santo necesita un templo limpio para habitar — la impureza mental cierra el canal de comunicación espiritual más importante que el discípulo tiene.",
      "Que la impureza mental es un pecado menor que el Señor comprende dada la cultura actual.",
      "Que solo la impureza en actos físicos afecta la presencia del Espíritu, no los pensamientos.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "Agustín dice que no puede creer en el evangelio hasta que tenga una experiencia sobrenatural que lo convenza. Según D&C 63:9–10, ¿qué está haciendo Agustín sin darse cuenta?",
    options: [
      "Siendo razonable — la evidencia espiritual es una demanda legítima antes de creer.",
      "Buscando señales antes de tener fe — y el Señor dice que las señales siguen a los que creen, no a los que primero quieren ver para después creer.",
      "Aplicando el principio de D&C 9:7–8 correctamente — estudiar primero, luego preguntar.",
      "Teniendo exactamente la actitud de humildad que el Señor valora antes de dar señales.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Sofía consume contenido digital que sabe que compromete su pureza mental pero dice que 'no tiene consecuencias porque solo son imágenes'. D&C 63:16 le responde directamente. ¿Qué le diría?",
    options: [
      "Que tiene razón — las imágenes mentales no tienen el mismo impacto que los actos físicos.",
      "Que lo que mira para codiciar le quita la luz y la gracia de Dios — la pureza empieza en lo que se permite en la mente, no solo en lo que se hace físicamente.",
      "Que debería hablar con el obispo antes de preocuparse por el contenido digital.",
      "Que el problema solo existirá si esas imágenes mentales llevan a acciones físicas.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 63:9–10 (fe antes que señales) y D&C 63:16 (pureza mental preserva la luz) son principios del mismo capítulo. ¿Cuál es la condición espiritual que ambos protegen?",
    options: [
        "La posición social del discípulo dentro de la comunidad de la Iglesia.",
        "La confianza de los líderes locales en el discípulo como miembro confiable.",
        "La preparación para recibir el sacerdocio o las ordenanzas del templo.",
        "La capacidad de recibir y mantener el Espíritu Santo — tanto la mentalidad de señales como la impureza mental cierran esa capacidad; ambos principios protegen el acceso al Espíritu.",
      ],
    correctAnswer: 3,
  },
];

// D&C 63:57–64
export const dc63_57_64Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question:
      "D&C 63:61–62 da instrucciones sobre cómo compartir el nombre de Sion y las cosas sagradas. ¿Cuál es la instrucción principal?",
    options: [
      "No divulgar el nombre de Sion a los inicuos para no provocarles ira contra los santos.",
      "Compartir el nombre de Sion con todo el mundo para acelerar el cumplimiento de la profecía.",
      "Mantener el nombre de Sion en absoluto secreto hasta la Segunda Venida.",
      "Usar el nombre de Sion solo en las reuniones formales del sacerdocio.",
    ],
    correctAnswer: 0,
  },
  // RECUERDO 2
  {
    id: 2,
    question:
      "Éxodo 20:7 prohíbe tomar el nombre de Dios en vano. ¿Qué abarca ese mandamiento según su significado más amplio — más allá de decir 'malas palabras'?",
    options: [
      "Cualquier uso del nombre de Dios que no sea reverente o que lo trivialice.",
      "Solo el uso del nombre 'Jehová' en contextos no religiosos.",
      "Solo la maldición usando el nombre de Cristo o del Padre Celestial.",
      "El uso del nombre de Dios en conversaciones informales con no miembros.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question:
      "El élder Oaks enseñó que usar el nombre del Salvador de manera frívola revela que 'ese nombre no le parece sagrado' a quien lo hace. ¿Qué dice eso sobre la relación entre el lenguaje y el estado del corazón?",
    options: [
      "Que el lenguaje es solo una convención social sin implicaciones espirituales reales.",
      "Que el lenguaje que usamos sobre lo sagrado refleja — y también forma — nuestra relación real con ello; lo que decimos con regularidad revela y moldea lo que valoramos.",
      "Que solo importa el lenguaje en contextos religiosos formales, no en conversaciones cotidianas.",
      "Que el problema es solo de educación y cortesía, no de fe.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question:
      "D&C 63:61–62 instruye compartir las cosas sagradas 'a los rectos y a los que se arrepienten', no a los que las tomarían a la ligera. ¿Qué principio sobre la enseñanza del evangelio ilustra eso?",
    options: [
      "Que hay personas que no merecen escuchar el evangelio.",
      "Que no toda verdad debe compartirse en todo contexto — el discernimiento sobre cuándo y cómo compartir lo sagrado es parte de la sabiduría del discípulo.",
      "Que el evangelio es un secreto que solo se revela después de un período largo de prueba.",
      "Que los no miembros nunca deben escuchar las doctrinas más profundas del evangelio.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question:
      "En la escuela de Valentina es muy común usar el nombre de 'Dios' y de 'Jesús' como expresiones de sorpresa o frustración. ¿Cómo podría Valentina responder a eso según el principio de esta lección?",
    options: [
      "Corrigiendo públicamente a todos sus compañeros cada vez que lo hacen.",
      "Ignorándolo porque es una práctica cultural sin implicaciones espirituales.",
      "Eligiendo conscientemente no usar esas expresiones en su propio lenguaje, y si alguien le pregunta por qué, explicarle con respeto.",
      "Denunciándolo al director de la escuela como una falta de respeto institucional.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question:
      "Joaquín dice que 'Dios mío' y expresiones similares son 'solo palabras sin intención'. Según el élder Oaks, ¿qué problema tiene ese argumento?",
    options: [
      "Ninguno — la intención es todo lo que importa, no las palabras específicas.",
      "Que las palabras que usamos habitualmente forman hábitos de pensamiento — y usar el nombre del Señor frivolamente, aunque sea 'sin intención', entrena el corazón a no reverenciarlo.",
      "Que el problema es solo cultural y no tiene base en las Escrituras.",
      "Que tiene razón — el Señor solo juzga los actos físicos, no el lenguaje.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question:
      "D&C 63:57–64 y Éxodo 20:7 tratan el mismo principio con dos mil años de distancia. ¿Cuál es el principio que trasciende el tiempo y conecta ambos textos?",
    options: [
        "Que el nombre de Dios tiene poderes mágicos que se liberan si se usa incorrectamente.",
        "Que el problema del uso del nombre de Dios es principalmente un asunto de educación formal.",
        "Que el tercer mandamiento es más importante que los otros nueve.",
        "Que la reverencia por el nombre de Dios no es una formalidad religiosa anticuada — es la expresión externa de una relación interna de amor y respeto hacia el Señor, y ese principio es eterno.",
      ],
    correctAnswer: 3,
  },
];