import { title } from "process"
import type { Week } from "../types"

export const nuevoTestamentoWeeks: Week[] = [
  {
    id: 1,
    title: "Semana 1: Introducción al Nuevo Testamento",
    dateRange: "6-10 de marzo",
    lessons: [
      { id: "nt-s1-d1", title: "Introducción al Nuevo Testamento", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es el objetivo principal de Seminarios e Institutos de Religión?",
            options: [
              "Aprender historia antigua.",
              "Ayudar a los jóvenes a entender y confiar en Jesucristo y Su expiación.",
              "Memorizar todos los libros de la Biblia.",
              "Estudiar los idiomas originales de las Escrituras.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo se les llama a los primeros cuatro libros del Nuevo Testamento?",
            options: [
              "Epístolas.",
              "Libros de la Ley.",
              "Los Evangelios.",
              "Revelaciones.",
            ],
            correctAnswer: 2,
          },
          {
            id: 3,
            question: '¿Qué significa la palabra griega "evangelio"?',
            options: [
              "Mensaje antiguo.",
              "Buenas nuevas.",
              "Testimonio escrito.",
              "Ley de Dios.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué invitación ofrece el Salvador en Mateo 11:28 para recibir Su ayuda?",
            options: [
              "\"Leed las Escrituras\".",
              "\"Guardad los mandamientos\".",
              "\"Venid a mí\".",
              "\"Id por todo el mundo\".",
            ],
            correctAnswer: 2,
          },
        ]
      },
      { id: "nt-s1-d2", title: "El estudio de las Escrituras", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió el presidente Nelson a quienes se sumergen diariamente en la palabra de Dios?",
            options: [
              "Éxito económico inmediato.",
              "Poder adicional para lidiar con la tentación y la debilidad.",
              "Que nunca volverán a tener problemas.",
              "Conocimiento de todas las lenguas antiguas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué herramienta en las Escrituras aclara verdades perdidas o agrega claridad?",
            options: [
              "El diccionario bíblico.",
              "La Traducción de José Smith.",
              "Los mapas bíblicos.",
              "La concordancia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué significa la abreviatura "GR" en las notas al pie de página?',
            options: [
              "Gran Revelación.",
              "Griego (idioma original de la mayoría de los manuscritos).",
              "Guía Rápida.",
              "Glosario de Referencia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué sugiere el élder Christofferson sobre la calidad del estudio?",
            options: [
              "Leer la mayor cantidad de páginas posible.",
              "Prestar más atención al tiempo pasado en ellas que a la cantidad de texto leído.",
              "No detenerse a meditar.",
              "Estudiar sin orar.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s1-d3", title: "Aprender por el Espíritu", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la verdad más importante que el Espíritu Santo puede testificar?",
            options: [
              "La ubicación del Jardín de Edén.",
              "Que Jesús es el Cristo, el Hijo del Dios viviente.",
              "La fecha de la Segunda Venida.",
              "La genealogía de los profetas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo describe el presidente Ballard el efecto de los dispositivos inteligentes en la espiritualidad?",
            options: [
              "Son herramientas esenciales para el Espíritu.",
              "Pueden bloquear la voz suave y apacible del Espíritu.",
              "No tienen ningún impacto.",
              "Ayudan a escuchar mejor la revelación.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué requiere el proceso de recibir el Espíritu Santo según el élder Bednar?",
            options: [
              "Ningún esfuerzo personal.",
              "Un sincero y constante deseo de tener Su compañía.",
              "Solo asistir a las reuniones.",
              "Ser perfecto en todo momento.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué prometió el élder Soares si ponemos el Evangelio en el centro de nuestra vida?",
            options: [
              "Que seremos los más inteligentes.",
              "Que la influencia del Espíritu transmitirá la verdad a nuestro corazón.",
              "Que no tendremos más pruebas.",
              "Que recibiremos todas las bendiciones materiales.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: '¿Qué enseñó José Smith sobre el "espíritu de revelación"?',
            options: [
              "Que es algo que asusta.",
              "Que se percibe como una repentina corriente de ideas.",
              "Que solo los profetas lo reciben.",
              "Que nunca se puede explicar.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s1-d4", title: "Aprender mediante la fe en Jesucristo", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué tipo de esfuerzo requiere aprender por la fe según el élder Bednar?",
            options: [
              "Solo intelectual.",
              "Espiritual, mental y físico (no es solo recepción pasiva).",
              "Exclusivamente físico.",
              "Solo emocional.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué demuestran los alumnos al Espíritu cuando levantan la mano para participar?",
            options: [
              "Que saben más que los demás.",
              "Su deseo de aprender y el ejercicio de su albedrío moral.",
              "Que quieren terminar rápido la clase.",
              "Que tienen mucha confianza propia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál es la responsabilidad individual de cada miembro según el élder Bednar?",
            options: [
              "Esperar a que la Iglesia le diga todo qué hacer.",
              "Aprender y vivir las enseñanzas del Señor por sí mismos.",
              "Solo asistir a las reuniones los domingos.",
              "Criticar las enseñanzas que no le gustan.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué permite que el Espíritu comunique un mensaje personalizado al alumno?",
            options: [
              "Guardar silencio absoluto.",
              "La decisión del alumno de participar activamente.",
              "Leer solo el manual del maestro.",
              "No hacer preguntas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuál es un resultado de graduarse de Seminarios según el presidente Nelson?",
            options: [
              "Un certificado sin valor.",
              "Mayor capacidad para sobresalir en las cosas más importantes de la vida.",
              "No tener que estudiar más el Evangelio.",
              "Recibir un cargo automático en la Iglesia.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s1-d5", title: "Introducción al Dominio de la doctrina", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es uno de los dos fines principales del Dominio de la doctrina?",
            options: [
              "Memorizar fechas históricas.",
              "Ayudar a los alumnos a edificar su fundamento sobre Jesucristo.",
              "Ganar concursos de conocimiento.",
              "Aprender a debatir con otras religiones.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué significa "dominar" la doctrina en este programa?',
            options: [
              "Solo saber el número de página del versículo.",
              "Conocer, explicar y poner en práctica la doctrina en la vida diaria.",
              "Leer el pasaje una vez al mes.",
              "Repetirlo sin entender el significado.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿A qué comparó el élder Scott el memorizar un pasaje de las Escrituras?",
            options: [
              "A hacer una tarea aburrida.",
              "A crear una nueva amistad.",
              "A llenar un recipiente de agua.",
              "A aprender una fórmula matemática.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué principio NO forma parte de adquirir conocimiento espiritual?",
            options: [
              "Actuar con fe.",
              "Consultar fuentes solo en redes sociales.",
              "Analizar conceptos con perspectiva eterna.",
              "Procurar comprensión mediante fuentes divinas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: '¿Qué advirtió el élder Andersen sobre los "torbellinos espirituales"?',
            options: [
              "Que son fenómenos meteorológicos.",
              "Que pueden desarraigar a las personas de sus cimientos espirituales.",
              "Que no afectan a los jóvenes de hoy.",
              "Que solo ocurren en ciertos países.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Semana 2: Adquirir conocimiento espiritual",
    dateRange: "13-17 de marzo",
    lessons: [
      { id: "nt-s2-d1", title: "Adquirir conocimiento espiritual, Parte 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué debemos hacer cuando surgen dudas según el élder Uchtdorf?",
            options: [
              "Ignorarlas por completo.",
              "Dudar de nuestras dudas antes que dudar de nuestra fe.",
              "Dejar de asistir a la Iglesia.",
              "Buscar respuestas en sitios anti-mormones.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué sucede con la "semilla de la duda honesta" si se maneja correctamente?',
            options: [
              "Destruye el testimonio.",
              "Madura hasta convertirse en un gran roble de entendimiento.",
              "Nunca produce nada.",
              "Debe ser motivo de vergüenza.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo aumenta nuestra fe según el presidente Nelson?",
            options: [
              "Sin hacer nada.",
              "Cada vez que ejercemos la fe siendo obedientes, aun ante críticas.",
              "Leyendo solo libros de historia secular.",
              "Evitando pensar en Jesucristo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué prometió el Señor si actuamos con fe ante nuestras inquietudes?",
            options: [
              "Respuestas instantáneas a todo.",
              "Paz y fortaleza mientras buscamos respuestas.",
              "Que no tendremos más desafíos.",
              "Éxito material garantizado.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuál es el primer paso vital para aprender la verdad?",
            options: [
              "Aceptar lo que dice el mundo.",
              "Hacer preguntas y buscar respuestas del Señor.",
              "No cuestionar nada nunca.",
              "Leer solo noticias en internet.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d2", title: "Adquirir conocimiento espiritual, Parte 2", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa la palabra "miopía" en un contexto espiritual?',
            options: [
              "Tener visión de rayos X.",
              "Ser corto de vista o carecer de visión de futuro (eterna).",
              "Ver perfectamente el plan de Dios.",
              "No necesitar lentes.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál es el primer paso para analizar preguntas con una perspectiva eterna?",
            options: [
              "Buscar la respuesta en un buscador web.",
              "Reconocer suposiciones que puedan dar lugar a malentendidos sobre Dios.",
              "Cambiar de religión.",
              "No pensar en el Plan de Salvación.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué ayuda a Jill a sanar y encontrar paz tras la muerte de su padre?",
            options: [
              "Olvidar lo sucedido.",
              "Ampliar su perspectiva y buscar lo eterno.",
              "Criticar a los líderes.",
              "Dejar de orar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cómo ve el presidente Oaks la vida mortal?",
            options: [
              "Como una obra de un solo acto.",
              "Como el segundo acto de una obra de tres actos.",
              "Como el principio y el fin de todo.",
              "Como un evento al azar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué sucede si comenzamos con suposiciones mundanas?",
            options: [
              "Llegaremos a la verdad eterna.",
              "Llegaremos a conclusiones mundanas.",
              "No importa la premisa.",
              "El Espíritu nos corregirá sin esfuerzo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d3", title: "Adquirir conocimiento espiritual, Parte 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué es peligroso buscar respuestas espirituales en internet según el élder Andersen?",
            options: [
              "Porque internet no funciona.",
              "Porque la información no pasa por un \"filtro de verdad\".",
              "Porque es mejor no usar tecnología.",
              "Porque solo hay mentiras.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué son las "fuentes divinamente señaladas"?',
            options: [
              "Cualquier libro de la biblioteca.",
              "Fuentes que Dios ha proporcionado, como Escrituras y profetas.",
              "Comentarios en redes sociales.",
              "Opiniones de famosos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué advirtió el élder Maxwell sobre entrevistar a quienes abandonaron la Iglesia?",
            options: [
              "Que es la mejor forma de saber la verdad.",
              "Que es como entrevistar a Judas para comprender a Jesús.",
              "Que son fuentes neutrales.",
              "Que tienen la visión más clara.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué debemos hacer si no recibimos una respuesta inmediata?",
            options: [
              "Abandonar la fe.",
              "Procurar seguridad y valor para seguir adelante con lo que ya sabemos.",
              "Dejar de estudiar.",
              "Buscar en fuentes oscuras.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d4", title: "Lucas 2:1–14 — ", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue el primer título usado por el ángel para anunciar a Jesús?",
            options: [
              "Gran Maestro.",
              "Salvador.",
              "Rey de los Judíos.",
              "Hijo de José.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué significados adicionales tiene la palabra "Salvador" en griego?',
            options: [
              "Juez o Guerrero.",
              "Libertador o preservador.",
              "Líder o Guía.",
              "Creador o Formador.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Por qué necesitamos a Jesucristo según el élder Christofferson?",
            options: [
              "Para ser los más ricos.",
              "Para ser sanos y para ser santos.",
              "Para no tener problemas legales.",
              "Para ser famosos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿De qué nos salva Jesucristo si nos arrepentimos?",
            options: [
              "Solo de errores pequeños.",
              "De nuestros pecados y de la muerte física.",
              "De tener que estudiar.",
              "De cualquier consecuencia legal.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Aproximadamente cuánto duraba el viaje de Nazaret a Belén a pie?",
            options: [
              "Una hora.",
              "Por lo menos cuatro o cinco días.",
              "Un mes.",
              "Dos semanas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d5", title: "Dominio de la doctrina: Lucas 2:10–12", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave del pasaje Lucas 2:10–12?",
            options: [
              "\"Amarás a tu prójimo\".",
              "\"Os ha nacido hoy... un Salvador, que es CRISTO el Señor\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí y descansad\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Por qué el nacimiento del Salvador trae "gran gozo"?',
            options: [
              "Por las fiestas mundanas.",
              "Porque Él es el Hijo de Dios y Salvador del mundo.",
              "Porque nació en un palacio.",
              "Porque trajo regalos materiales.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué principio de conocimiento espiritual nos invita a acudir a Dios primeramente?",
            options: [
              "Perspectiva eterna.",
              "Actuar con fe.",
              "Fuentes divinas.",
              "Razonamiento humano.",
            ],
            correctAnswer: 2,
          },
          {
            id: 4,
            question: "¿Cuál es la función del Salvador en el Plan de Salvación según Lucas 2?",
            options: [
              "Solo ser un buen ejemplo histórico.",
              "Ser el Redentor y el centro del plan para nuestra salvación.",
              "Juez sin misericordia.",
              "No tiene función clara.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué significa actuar con fe ante una duda sobre la predicación misional?",
            options: [
              "Dejar de hablar con los misioneros.",
              "Confiar en Dios y en Su mandato de compartir el Evangelio.",
              "Ignorar la pregunta.",
              "Buscar solo opiniones negativas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Semana 3: Enseñanzas iniciales del ministerio del Salvador",
    dateRange: "20-24 de marzo",
    lessons: [
      { id: "nt-s3-d1", title: 'Mateo 5:13–16 — "Vosotros sois la luz del mundo"', description: "", 
        questions: [
          {
            id: 1,
            question: "¿A qué comparó el Salvador a Sus discípulos en Mateo 5:13?",
            options: [
              "A la arena del mar.",
              "A la sal de la tierra.",
              "A las nubes del cielo.",
              "A las piedras del camino.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué sucede cuando la sal se mezcla con otros elementos y pierde su sabor?",
            options: [
              "Se vuelve más valiosa.",
              "Se vuelve inservible o no sirve para nada.",
              "Se puede purificar sola.",
              "Sigue siendo útil para cocinar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué luz deben sostener en alto los discípulos según 3 Nefi 18:24?",
            options: [
              "Su propia inteligencia.",
              "La luz de Jesucristo (Su ejemplo y enseñanzas).",
              "Una antorcha de fuego.",
              "El éxito personal.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué efecto tiene nuestro ejemplo recto en los demás según Mateo 5:16?",
            options: [
              "Que nos tengan envidia.",
              "Que glorifiquen a nuestro Padre Celestial.",
              "Que nos den premios.",
              "Que se olviden de Dios.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué sucede cada vez que decidimos vivir más como el Salvador según el presidente Eyring?",
            options: [
              "Nos volvemos más populares.",
              "Nuestro testimonio se fortalecerá y sentiremos crecer Su luz.",
              "No notaremos ningún cambio.",
              "Se acaban todas nuestras deudas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s3-d2", title: "Dominio de la doctrina: Mateo 5:14–16", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Mateo 5:14–16?",
            options: [
              "\"Yo soy el pan de vida\".",
              "\"Así alumbre vuestra luz delante de los hombres\".",
              "\"Tú eres el Cristo\".",
              "\"Pedid y recibiréis\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué recomendación se da para actuar con fe en una situación de acoso escolar?",
            options: [
              "Unirse a las burlas para encajar.",
              "Defender lo que es correcto y actuar según los valores del Evangelio.",
              "No hacer nada y alejarse.",
              "Burlarse de quien agrede.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo impacta ver a los demás como el Señor los ve en nuestra respuesta al prójimo?",
            options: [
              "Nos hace sentir superiores.",
              "Nos ayuda a tratarlos con respeto y evitar chistes de mal gusto.",
              "No cambia nada.",
              "Nos hace ser más críticos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Por qué el Salvador comparó a Sus discípulos con una ciudad sobre un monte?",
            options: [
              "Porque es un lugar difícil de vivir.",
              "Porque el seguimiento a Cristo es difícil de esconder y debe ser un refugio.",
              "Porque solo los ricos vivían allí.",
              "Porque está lejos de la gente.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué debemos hacer con la luz que Dios nos da?",
            options: [
              "Esconderla bajo un almud.",
              "Ponerla en el candelero para que alumbre a todos.",
              "Apagarla para que nadie nos vea.",
              "Guardarla solo para nosotros.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s3-d3", title: "Mateo 13 — Jesucristo enseñó con parábolas", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué es una parábola según el manual?",
            options: [
              "Una historia de ficción sin significado.",
              "Una historia sencilla que compara objetos o acontecimientos comunes con verdades espirituales.",
              "Un mandato legal estricto.",
              "Una profecía sobre el fin del mundo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Por qué enseñaba Jesús en parábolas?",
            options: [
              "Para confundir a Sus enemigos.",
              "Para revelar misterios a los espirituales y esconder la verdad de quienes no buscan con fe.",
              "Porque no sabía hablar de otra manera.",
              "Para entretener a las multitudes.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál es el primer paso del modelo de cuatro pasos para estudiar parábolas?",
            options: [
              "Hacer un dibujo.",
              "Buscar detalles importantes (personas, lugares, objetos).",
              "Preguntar al maestro.",
              "Comparar con noticias actuales.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: '¿Qué representa el "tesoro" en la parábola de Mateo 13:44?',
            options: [
              "Oro enterrado.",
              "El Reino de los Cielos (La Iglesia de Jesucristo).",
              "El éxito financiero.",
              "La inteligencia humana.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s3-d4", title: "Mateo 13:3–8, 18–23 — La parábola del sembrador", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué representan las semillas que cayeron junto al camino?",
            options: [
              "Personas que no saben leer.",
              "Enseñanzas que caen en un corazón endurecido o sin preparación.",
              "Semillas de mala calidad.",
              "El éxito temporal.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué situación describe al "terreno pedregoso" según el presidente Oaks?',
            options: [
              "Alguien que olvida sus llaves.",
              "Alguien que usa su teléfono o juega videojuegos durante la Santa Cena.",
              "Alguien que vive en una montaña.",
              "Una persona que no tiene dinero.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué representan los "espinos" que ahogan la palabra?',
            options: [
              "Plantas venenosas de Israel.",
              "Los afanes, las riquezas y los placeres de esta vida.",
              "Críticas de personas extrañas.",
              "La falta de agua.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: '¿Qué se necesita para ser "buena tierra" según el manual?',
            options: [
              "Nacer en una familia rica.",
              "Establecer prioridades y estar firmemente arraigados en el Evangelio.",
              "Leer las Escrituras una vez al mes.",
              "Ser perfecto desde el nacimiento.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué promesa se da a los que reciben la palabra en buena tierra?",
            options: [
              "Que nunca sufrirán.",
              "Que darán fruto y tendrán una cosecha abundante.",
              "Que serán famosos.",
              "Que no tendrán que trabajar más.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s3-d5", title: "Evalúa tu aprendizaje 3", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Cuál es el propósito de las lecciones "Evalúa tu aprendizaje"?',
            options: [
              "Poner una calificación numérica.",
              "Reflexionar sobre las metas, el crecimiento personal y lo aprendido.",
              "Comparar el progreso de un alumno con otro.",
              "Terminar el manual más rápido.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué habilidad de estudio ayuda a comprender mejor el lenguaje de las Escrituras?",
            options: [
              "Leer solo los encabezados.",
              "Definir palabras difíciles y reconocer principios.",
              "Memorizar números de página.",
              "Leer sin detenerse.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Por qué el Salvador llama Apóstoles según Mateo 10?",
            options: [
              "Para tener amigos cerca.",
              "Como parte del proceso de establecer Su Iglesia y dirigir Su obra.",
              "Para que escriban libros de historia.",
              "Para recolectar impuestos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué indica que una técnica de estudio ha sido efectiva?",
            options: [
              "Que el alumno terminó rápido.",
              "Que ha ayudado al alumno a conocer mejor a Jesucristo.",
              "Que el diario de estudio tiene muchos colores.",
              "Que el maestro está contento.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 4,
    title: "Semana 4: Milagros y enseñanzas del Salvador",
    dateRange: "27-31 de marzo",
    lessons: [
      { id: "nt-s4-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué noticia recibió Jesús justo antes de ir al lugar solitario?",
            options: [
              "El nacimiento de un niño.",
              "La decapitación de Juan el Bautista.",
              "Que los romanos lo buscaban.",
              "Una invitación a una fiesta.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué atributo mostró Jesús al ver a la multitud a pesar de Su propio dolor?",
            options: [
              "Indiferencia.",
              "Compasión.",
              "Enojo.",
              "Curiosidad.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué ofreció el muchacho para alimentar a la multitud?",
            options: [
              "Nada, él tenía hambre.",
              "Cinco panes de cebada y dos pececillos.",
              "Una bolsa de monedas.",
              "Toda su herencia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué principio enseña la hermana Michelle D. Craig sobre nuestras ofrendas?",
            options: [
              "Solo las ofrendas grandes cuentan.",
              "Si damos lo que tenemos a Cristo, Él puede multiplicar nuestros esfuerzos.",
              "No debemos dar si tenemos poco.",
              "El Señor no necesita nuestra ayuda.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿A cuántos varones alimentó Jesús aproximadamente (sin contar mujeres y niños)?",
            options: [
              "500.",
              "5,000.",
              "12.",
              "100,000.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s4-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué causó que Pedro comenzara a hundirse?",
            options: [
              "Que no sabía nadar.",
              "Que sintió miedo al ver la fuerza del viento.",
              "Que Jesús lo empujó.",
              "Que la barca se rompió.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué oración corta hizo Pedro al hundirse?",
            options: [
              "\"Perdón por mis pecados\".",
              "\"¡Señor, sálvame!\".",
              "\"Ayúdame a nadar\".",
              "\"No vuelvo a salir de la barca\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál es el resultado de centrar nuestra vista en Jesucristo según el presidente Howard W. Hunter?",
            options: [
              "Que nunca tendremos problemas.",
              "Seremos capaces de caminar triunfantes sobre olas de incredulidad.",
              "Que seremos más ricos que Pedro.",
              "Que no necesitaremos barcas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s4-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué buscaban a Jesús muchas personas al día siguiente del milagro de los panes?",
            options: [
              "Para escuchar Su doctrina.",
              "Porque habían comido el pan y se habían saciado (por razones físicas).",
              "Para arrestarlo.",
              "Porque no tenían casa.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué prometió Jesús a quien venga a Él como el Pan de Vida?",
            options: [
              "Que tendrá mucho dinero.",
              "Que nunca tendrá hambre ni sed (espiritual).",
              "Que será el líder de su nación.",
              "Que no tendrá que volver a cocinar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué significa "comer la carne y beber la sangre de Cristo" según el élder Christofferson?',
            options: [
              "Un acto literal de canibalismo.",
              "Traer al Salvador a nuestra vida y recibir el poder de Su expiación.",
              "Leer la Biblia una vez al año.",
              "Ir al templo solo una vez.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: '¿Cuál es la "labor de servicio más sublime" de la Iglesia según el élder Amado?',
            options: [
              "Dar comida en desastres naturales.",
              "Bendecir a los hombres enseñándoles la doctrina de Cristo y las ordenanzas de salvación.",
              "Construir centros deportivos.",
              "Organizar fiestas para los jóvenes.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: '¿Qué significa procurar la "santidad" en el contexto de Juan 6?',
            options: [
              "Apartarse del mundo físico por completo.",
              "Adoptar las cualidades y el carácter de Cristo.",
              "No hablar con nadie que no sea religioso.",
              "Ser perfecto inmediatamente.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s4-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quién era Nicodemo?",
            options: [
              "Un pescador del mar de Galilea.",
              "Un fariseo y principal entre los judíos.",
              "Un soldado romano.",
              "El hermano de Lázaro.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Por qué fue Nicodemo a ver a Jesús de noche?",
            options: [
              "Porque no tenía luz en su casa.",
              "Probablemente para evitar críticas de otros líderes judíos.",
              "Porque Jesús solo enseñaba de noche.",
              "Porque quería ver las estrellas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué significa "nacer de nuevo" según el élder Bednar?',
            options: [
              "Cambiar de nombre.",
              "Un nacimiento espiritual y un cambio fundamental en lo que sentimos y somos.",
              "Volver a entrar en el vientre materno.",
              "Aprender un nuevo idioma.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué dos elementos son necesarios para entrar en el Reino de Dios según Juan 3:5?",
            options: [
              "Oro y plata.",
              "Agua y Espíritu (Bautismo y Confirmación).",
              "Fe y caridad solamente.",
              "Arrepentimiento y buena conducta sin ordenanzas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cómo describe Jesús el proceso de nacer de nuevo en relación con el viento?",
            options: [
              "Es destructivo como un huracán.",
              "Podemos ver sus efectos, aunque no siempre entendemos cuándo comienza o de dónde viene.",
              "Siempre es ruidoso y visible.",
              "Es algo que ocurre solo una vez en la vida.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s4-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Juan 3:5?",
            options: [
              "\"Porque de tal manera amó Dios al mundo\".",
              "\"El que no naciere de agua y del Espíritu no puede entrar en el reino de Dios\".",
              "\"Yo soy el camino\".",
              "\"Pedid y se os dará\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué papel cumple el Salvador en el proceso de nacer de nuevo según Alma 7:14?",
            options: [
              "Solo nos observa.",
              "Él nos ayuda a nacer de nuevo mediante Su poder.",
              "Es una tarea que debemos hacer solos.",
              "No tiene relación con el bautismo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué principio de conocimiento espiritual nos invita a analizar el bautismo en el contexto del Plan de Salvación?",
            options: [
              "Actuar con fe.",
              "Perspectiva eterna.",
              "Fuentes divinas.",
              "Razonamiento lógico.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué prometió el élder Christofferson sobre el proceso de nacer de nuevo?",
            options: [
              "Que es instantáneo.",
              "Que es más un proceso que un acontecimiento y dura toda la vida mortal.",
              "Que solo los Apóstoles pueden lograrlo.",
              "Que no requiere esfuerzo personal.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 5,
    title: "Semana 5: La fe y la Pascua de Resurrección",
    dateRange: "3-7 de abril",
    lessons: [
      { id: "nt-s5-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue la reacción de muchos discípulos ante la enseñanza del Pan de Vida?",
            options: [
              "Se bautizaron de inmediato.",
              "Dijeron: \"Dura es esta palabra\" y ya no andaban con Él.",
              "Le pidieron más pan físico.",
              "Invitaron a sus familias a escucharlo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta de Pedro a la pregunta de Jesús?",
            options: [
              "\"Iremos a los fariseos\".",
              "\"Nos quedaremos por la comida\".",
              "\"Señor, ¿a quién iremos? Tú tienes palabras de vida eterna\".",
              "\"Tenemos miedo de los romanos\".",
            ],
            correctAnswer: 2,
          },
          {
            id: 3,
            question: "¿Qué testificó Pedro sobre la identidad de Jesús en Juan 6:69?",
            options: [
              "Que era un buen maestro.",
              "Que Él es el Santo de Dios (el Cristo, el Hijo del Dios viviente).",
              "Que la Iglesia era perfecta.",
              "Que nunca tendrían problemas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s5-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿A qué acontecimiento del Antiguo Testamento comparó Jesús Su crucifixión?",
            options: [
              "Al arca de Noé.",
              "A Moisés levantando la serpiente en el desierto.",
              "A la entrega de las tablas de la ley.",
              "Al sacrificio de Isaac.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál es la promesa para quienes creen en Jesucristo según Juan 3:16?",
            options: [
              "Riquezas temporales.",
              "Que no se pierdan, mas tengan vida eterna.",
              "Que nunca serán perseguidos.",
              "Éxito social inmediato.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Para qué NO envió Dios a Su Hijo al mundo según Juan 3:17?",
            options: [
              "Para salvarlo.",
              "Para condenar al mundo.",
              "Para enseñar la verdad.",
              "Para sanar enfermos únicamente.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s5-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Juan 3:16?",
            options: [
              "\"Yo soy la luz del mundo\".",
              "\"Porque de tal manera amó Dios al mundo que ha dado a su Hijo Unigénito\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué principio de conocimiento espiritual nos invita a considerar conceptos en el contexto del Plan de Salvación?",
            options: [
              "Actuar con fe.",
              "Analizar conceptos con una perspectiva eterna.",
              "Fuentes seculares.",
              "Sabiduría humana.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Cómo ayuda el "actuar con fe" a Sarai en su situación difícil?',
            options: [
              "Haciéndola olvidar sus errores.",
              "Invitándola a confiar en Dios y hablar con sus padres a pesar del miedo.",
              "Dándole respuestas automáticas sin esfuerzo.",
              "Evitando cualquier consecuencia legal.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 6,
    title: "Semana 6: Autoridad y fe en Jesucristo",
    dateRange: "10-14 de abril",
    lessons: [
      { id: "nt-s6-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿De qué acusaban los fariseos a los discípulos de Jesús?",
            options: [
              "De robar comida.",
              "De quebrantar la tradición de los ancianos (lavado de manos).",
              "De no pagar impuestos.",
              "De hablar con samaritanos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué mandamiento usó Jesús para mostrar cómo las tradiciones invalidaban la palabra de Dios?",
            options: [
              "No matarás.",
              "Honrar a tu padre y a tu madre.",
              "No dirás falso testimonio.",
              "Acuérdate del día de reposo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué hacían algunas personas para evitar ayudar económicamente a sus padres?",
            options: [
              "Decían que eran pobres.",
              "Declaraban sus recursos como \"Corbán\" (ofrenda a Dios).",
              "Se mudaban a otra ciudad.",
              "Negaban conocer a sus padres.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué verdad enseñó Jesús sobre las tradiciones y los mandamientos?",
            options: [
              "Las tradiciones son más importantes.",
              "Debemos poner los mandamientos de Dios por sobre cualquier tradición mundana.",
              "Todas las tradiciones son malas.",
              "No debemos tener ninguna práctica cultural.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s6-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue el testimonio de Pedro en Mateo 16:16?",
            options: [
              "\"Tú eres un gran profeta\".",
              "\"Tú eres el Cristo, el Hijo del Dios viviente\".",
              "\"Tú eres Elías\".",
              "\"Tú eres un maestro de Dios\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Sobre qué "roca" dijo Jesús que edificaría Su Iglesia?',
            options: [
              "Sobre la persona física de Pedro.",
              "Sobre el lecho de roca de la revelación.",
              "Sobre los muros de Jerusalén.",
              "Sobre la sabiduría de los escribas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s6-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió Jesús dar a Pedro en Mateo 16:19?",
            options: [
              "Oro y plata.",
              "Las llaves del reino de los cielos.",
              "Un palacio en Jerusalén.",
              "Victoria sobre los romanos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué poder otorgan las llaves del reino según el versículo 19?",
            options: [
              "Poder para gobernar ejércitos.",
              "Poder para atar y desatar en la tierra y en los cielos.",
              "Poder para leer mentes.",
              "Poder para viajar por el mundo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Quiénes aparecieron en el Monte de la Transfiguración con Jesús?",
            options: [
              "Adán y Eva.",
              "Moisés y Elías.",
              "Abraham e Isaac.",
              "Juan el Bautista y José.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué sucedió en el Monte de la Transfiguración según la Guía para el Estudio de las Escrituras?",
            options: [
              "Jesús fue bautizado de nuevo.",
              "Los profetas entregaron las llaves del sacerdocio a Pedro, Santiago y Juan.",
              "Se organizó el primer quórum.",
              "Jesús fue coronado rey físico.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué se requiere para llevar a cabo ordenanzas de salvación según el élder Stevenson?",
            options: [
              "Solo buena voluntad.",
              "La administración apropiada por medio de las llaves del sacerdocio.",
              "Ser mayor de edad.",
              "Leer libros de historia.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s6-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Mateo 16:15–19?",
            options: [
              "\"Tú eres el Cristo\".",
              "\"Jesús dijo: '... a ti te daré las llaves del reino'\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué son las llaves del sacerdocio según el manual?",
            options: [
              "Llaves físicas de los edificios.",
              "La autoridad para dirigir el uso del sacerdocio a favor de los hijos de Dios.",
              "Un código secreto de las Escrituras.",
              "Títulos honoríficos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Quién posee todas las llaves del sacerdocio en la tierra hoy?",
            options: [
              "Cada miembro de la Iglesia.",
              "El Presidente de la Iglesia.",
              "Únicamente los maestros de Seminario.",
              "Los historiadores bíblicos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué principio de conocimiento espiritual nos invita a actuar con fe a pesar de la incertidumbre?",
            options: [
              "Perspectiva eterna.",
              "Actuar con fe.",
              "Fuentes seculares.",
              "Lógica humana.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Por qué son vitales las llaves del sacerdocio según el élder Stevenson?",
            options: [
              "Para ser famosos.",
              "Para acceder al vehículo necesario que nos lleva de regreso a Dios (ordenanzas).",
              "Para tener más reuniones.",
              "Para aprender idiomas antiguos.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s6-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué no pudieron los discípulos sanar al hijo del hombre?",
            options: [
              "Porque no tenían medicina.",
              "Por su falta de fe.",
              "Porque el niño no quería.",
              "Porque Jesús no estaba cerca.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta del padre ante la pregunta de Jesús sobre si creía?",
            options: [
              "\"No estoy seguro\".",
              "\"Creo; ayuda mi incredulidad\".",
              "\"Tengo mucha fe\".",
              "\"Mis amigos creen por mí\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué enseñó Jesús sobre el género de espíritus que no salía fácilmente?",
            options: [
              "Que requería más fuerza física.",
              "Que con nada puede salir sino con oración y ayuno.",
              "Que debían esperar un año.",
              "Que era imposible sanarlos.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 7,
    title: "Semana 7: Compasión y servicio cristiano",
    dateRange: "13-19 de abril",
    lessons: [
      { id: "nt-s7-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es el deseo misericordioso del Salvador según Mateo 18:11?",
            options: [
              "Juzgar a los pecadores.",
              "Salvar lo que se había perdido.",
              "Castigar a los injustos.",
              "Ser el rey de los romanos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo se siente el Padre Celestial si uno de estos pequeños se pierde?",
            options: [
              "Indiferente.",
              "No es Su voluntad que se pierda ni uno solo.",
              "Enojado.",
              "Satisfecho.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué representa la oveja descarriada según Isaías y el manual?",
            options: [
              "Solo a las personas malas.",
              "A cada uno de nosotros.",
              "Únicamente a los fariseos.",
              "A los niños pequeños.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s7-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Lucas 2:10–12?",
            options: [
              "\"Yo soy el camino\".",
              "\"[Q]ue os ha nacido hoy... un Salvador, que es CRISTO el Señor\".",
              "\"Nacer de agua y Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué frase clave pertenece a Juan 3:5?",
            options: [
              "\"Dios amó al mundo\".",
              "\"... [E]l que no naciere de agua y del Espíritu no puede entrar en el reino de Dios\".",
              "\"Venid a mí\".",
              "\"Amarás al Señor\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál es el propósito del Dominio de la doctrina?",
            options: [
              "Ganar competencias.",
              "Comprender las enseñanzas del Salvador y explicarlas con palabras propias.",
              "Aprender griego antiguo.",
              "Criticar otras doctrinas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué actividad sugiere el manual para profundizar la comprensión de un pasaje?",
            options: [
              "Leerlo rápido 100 veces.",
              "Utilizar la estrategia \"Línea por línea\" definiendo palabras clave.",
              "No pensar en el significado.",
              "Solo marcar el versículo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s7-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuántas veces preguntó Pedro que debía perdonar a su hermano?",
            options: [
              "Una vez.",
              "Tres veces.",
              "Hasta siete veces.",
              "Setenta veces.",
            ],
            correctAnswer: 2,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta de Jesús a la pregunta de Pedro sobre el perdón?",
            options: [
              "\"Siete veces basta\".",
              "\"No te digo hasta siete, sino aun hasta setenta veces siete\".",
              "\"Solo si se arrepiente una vez\".",
              "\"No perdones nunca\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué hizo el rey cuando el siervo le rogó paciencia?",
            options: [
              "Lo metió a la cárcel.",
              "Movido a compasión, le perdonó la deuda.",
              "Le pidió que trabajara 100 años.",
              "Vendió a su familia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál fue el pecado del siervo perdonado?",
            options: [
              "Volver a pedir dinero.",
              "No perdonar a su consiervo que le debía una cantidad pequeña (100 denarios).",
              "Escapar de la ciudad.",
              "Hablar mal del rey.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s7-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quiénes pasaron de largo al ver al hombre herido en el camino a Jericó?",
            options: [
              "Dos samaritanos.",
              "Un sacerdote y un levita.",
              "Dos soldados romanos.",
              "Sus propios hermanos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué hizo el samaritano al ver al herido?",
            options: [
              "Lo ignoró.",
              "Fue movido a misericordia, vendó sus heridas y lo llevó al mesón.",
              "Llamó a la guardia.",
              "Le robó lo poco que le quedaba.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿A quién representa simbólicamente el Buen Samaritano según el élder Andersen?",
            options: [
              "A Pedro.",
              "A Jesucristo, enviado a sanar a los quebrantados de corazón.",
              "A un buen vecino.",
              "Al intérprete de la ley.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s7-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿En qué casa entró Jesús al llegar a una aldea (Betania)?",
            options: [
              "En la de Pedro.",
              "En la de una mujer llamada Marta.",
              "En la de Zaqueo.",
              "En la de Judas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué hacía María mientras Jesús enseñaba?",
            options: [
              "Ayudaba con la limpieza.",
              "Sentada a los pies de Jesús, oía Su palabra.",
              "Dormía en otra habitación.",
              "Buscaba comida.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿De qué se quejó Marta ante el Señor?",
            options: [
              "De que Jesús hablaba mucho.",
              "De que su hermana la dejaba servir sola.",
              "De que no había suficiente comida.",
              "De que los discípulos eran ruidosos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál fue la respuesta de Jesús a Marta?",
            options: [
              "\"Ayuda a Marta, María\".",
              "\"Marta... turbada estás con muchas cosas... pero una sola cosa es necesaria\".",
              "\"No cocines más\".",
              "\"Idos de mi vista\".",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 8,
    title: "Semana 8: La luz del mundo y el Buen Pastor",
    dateRange: "20-26 de abril",
    lessons: [
      { id: "nt-s8-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué Jesús asistió inicialmente en secreto a la Fiesta de los Tabernáculos en Jerusalén?",
            options: [
              "Porque no tenía dinero para el viaje.",
              "Porque muchos en Jerusalén querían matarlo.",
              "Porque quería sorprender a Sus Apóstoles.",
              "Porque no le gustaban las fiestas públicas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué enseñó Jesús en Juan 7:17 sobre cómo saber si Su doctrina es de Dios?",
            options: [
              "Estudiando historia antigua.",
              "Haciendo la voluntad del Padre Celestial.",
              "Esperando una señal del cielo sin actuar.",
              "Debatiendo con los fariseos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué impacto tuvo la enseñanza de Jesús en los guardias enviados a arrestarlo?",
            options: [
              "Se burlaron de Él.",
              "Lo arrestaron inmediatamente.",
              "Dijeron: “¡Jamás hombre alguno ha hablado como este hombre!”.",
              "Se quedaron dormidos durante el discurso.",
            ],
            correctAnswer: 2,
          },
          {
            id: 4,
            question: "¿Qué recordaba el pueblo de Israel durante la Fiesta de los Tabernáculos?",
            options: [
              "La creación del mundo.",
              "Que Dios bendijo a Su pueblo durante 40 años en el desierto.",
              "El nacimiento de Moisés.",
              "La construcción del Templo de Salomón.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s8-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave del pasaje Juan 7:17?",
            options: [
              "\"Yo soy el pan de vida\".",
              "\"El que quiera hacer la voluntad de él conocerá si la doctrina es de Dios\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí y yo os haré descansar\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué enseñó el presidente Dallin H. Oaks sobre el proceso de adquirir un testimonio?",
            options: [
              "Que es un evento pasivo y automático.",
              "Que no es algo pasivo, sino un proceso en el que se espera que hagamos algo.",
              "Que solo los adultos pueden tenerlo.",
              "Que se recibe únicamente al nacer.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué principio ayuda a un alumno frustrado que siente que aún no tiene un testimonio?",
            options: [
              "Dejar de intentar.",
              "Seguir viviendo las enseñanzas aunque el testimonio no llegue de inmediato.",
              "Buscar respuestas en redes sociales.",
              "Criticar la doctrina.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál es un obstáculo común para obtener un testimonio según el manual?",
            options: [
              "Hacer demasiadas preguntas.",
              "La falta de disposición para actuar con fe en los mandamientos.",
              "Leer el Libro de Mormón.",
              "Orar con sinceridad.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué prometió el presidente Uchtdorf sobre el testimonio personal del Evangelio?",
            options: [
              "Que es opcional.",
              "Que es más importante que cualquier cosa que se pueda obtener en esta vida.",
              "Que no requiere ningún esfuerzo.",
              "Que se pierde si uno tiene dudas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s8-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué los escribas trajeron a la mujer ante Jesús de forma pública?",
            options: [
              "Para pedirle consejo sincero.",
              "Para poner a Jesús en una situación difícil y acusarlo.",
              "Porque querían que ella fuera sanada.",
              "Para celebrar una fiesta.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué atributo demostró Jesús al no condenar inmediatamente a la mujer?",
            options: [
              "Indiferencia hacia el pecado.",
              "Misericordia y paciencia divina.",
              "Miedo a los fariseos.",
              "Desconocimiento de la ley.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál fue la invitación final de Jesús a la mujer en Juan 8:11?",
            options: [
              "\"Eres perfecta tal como eres\".",
              "\"Vete, y no peques más\".",
              "\"Vuelve con tus acusadores\".",
              "\"Olvida lo que pasó\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: '¿Qué significa "misericordia" según el manual?',
            options: [
              "Justicia estricta.",
              "Trato compasivo más allá de lo que una persona merece.",
              "Ignorar las consecuencias de los actos.",
              "Castigar a los demás.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s8-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué hace el Buen Pastor por Sus ovejas según Juan 10:11?",
            options: [
              "Las abandona cuando viene el lobo.",
              "Su vida da por las ovejas.",
              "Les cobra por cuidarlas.",
              "Solo cuida a las ovejas más fuertes.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Cómo reacciona el "asalariado" cuando ve venir al lobo?',
            options: [
              "Defiende a las ovejas con valor.",
              "Huye y deja a las ovejas porque no son suyas.",
              "Llama al dueño del rebaño.",
              "Se esconde con las ovejas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué significa la frase de Jesús: "Yo soy la puerta de las ovejas"?',
            options: [
              "Que Él es un edificio físico.",
              "Que Él es el único camino para entrar al Reino de los Cielos.",
              "Que no permite que nadie pase.",
              "Que la puerta está cerrada para los pecadores.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 9,
    title: "Semana 9: Parábolas de misericordia y poder sobre la muerte",
    dateRange: "27 de abril-3 de mayo",
    lessons: [
      { id: "nt-s9-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué murmuraban los fariseos contra Jesús en Lucas 15?",
            options: [
              "Porque Jesús no pagaba impuestos.",
              "Porque Jesús recibía a los pecadores y comía con ellos.",
              "Porque Jesús no quería hablar con ellos.",
              "Porque Jesús estaba cansado.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo reacciona el Padre Celestial cuando un pecador se arrepiente?",
            options: [
              "Con indiferencia.",
              "Hay gran gozo en el cielo.",
              "Pide una compensación económica.",
              "Recuerda el pecado para siempre.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s9-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué demoró Jesús Su viaje a Betania después de saber que Lázaro estaba enfermo?",
            options: [
              "Porque estaba muy lejos.",
              "Para que el milagro glorificara a Dios y los discípulos creyeran.",
              "Porque se olvidó del mensaje.",
              "Porque tenía miedo de morir.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuánto tiempo llevaba Lázaro en la tumba cuando Jesús llegó?",
            options: [
              "Unas pocas horas.",
              "Un día.",
              "Cuatro días.",
              "Una semana.",
            ],
            correctAnswer: 2,
          },
          {
            id: 3,
            question: "¿Qué verdad enseñó Jesús a Marta en Juan 11:25?",
            options: [
              "\"El hombre no debe morir\".",
              "\"Yo soy la resurrección y la vida\".",
              "\"Lázaro dormirá para siempre\".",
              "\"Marta, no llores más\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué detalle muestra la profunda compasión del Salvador en este relato?",
            options: [
              "Que llegó tarde.",
              "Que Jesús lloró con María y Marta.",
              "Que pidió quitar la piedra.",
              "Que llamó a Lázaro en voz alta.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s9-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue la reacción de los principales sacerdotes al saber del milagro?",
            options: [
              "Se convirtieron todos.",
              "Conspiraron para matar a Jesús y también a Lázaro.",
              "Hicieron una fiesta en honor a Lázaro.",
              "Ignoraron la noticia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué invitación hizo el Salvador a Lázaro para que saliera de la tumba?",
            options: [
              "\"¡Levántate, mi amigo!\".",
              "\"¡Lázaro, ven fuera!\".",
              "\"Camina hacia la luz\".",
              "\"Despierta de tu sueño\".",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 10,
    title: "Semana 10: Discipulado y sacrificio",
    dateRange: "4-10 de mayo",
    lessons: [
      { id: "nt-s10-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué documento es central para entender la doctrina de la familia hoy?",
            options: [
              "El diccionario bíblico.",
              "La Familia: Una Proclamación para el Mundo.",
              "El manual de historia de la Iglesia.",
              "Un libro de leyes civiles.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Quién estableció la relación del matrimonio según Mateo 19?",
            options: [
              "Los gobiernos humanos.",
              "Dios, desde la creación del mundo.",
              "Los filósofos antiguos.",
              "Las tradiciones culturales.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué enseñó el presidente Dallin H. Oaks sobre los problemas matrimoniales?",
            options: [
              "Que el divorcio es la única solución rápida.",
              "Que para la mayoría, el remedio no es el divorcio sino el arrepentimiento.",
              "Que no tienen solución.",
              "Que es mejor no casarse.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s10-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué pregunta le hizo el joven rico al Salvador?",
            options: [
              "\"¿Cómo puedo ser más rico?\".",
              "\"¿Qué bien haré para tener la vida eterna?\".",
              "\"¿Quién es el más grande?\".",
              "\"¿Dónde vives?\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué pregunta debemos hacernos todos según el presidente Harold B. Lee?",
            options: [
              "\"¿Por qué me pasa esto?\".",
              "\"¿Qué más me falta?\".",
              "\"¿Cuándo terminará la clase?\".",
              "\"¿Soy mejor que mi prójimo?\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál fue la reacción de Jesús al mirar al joven rico según Marcos 10:21?",
            options: [
              "Lo juzgó severamente.",
              "Mirándole, le amó.",
              "Lo ignoró.",
              "Se rió de sus riquezas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué invitó el Salvador al joven a hacer para ser perfecto?",
            options: [
              "Comprar más tierras.",
              "Vender lo que tenía, darlo a los pobres y seguirle.",
              "Estudiar con los fariseos.",
              "Irse a vivir al desierto.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Por qué se fue triste el joven?",
            options: [
              "Porque no entendió la respuesta.",
              "Porque tenía muchas posesiones (y no quiso dejarlas).",
              "Porque Jesús no lo saludó.",
              "Porque el camino era largo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s10-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué representa la hipérbole de "un camello pasando por el ojo de una aguja"?',
            options: [
              "Una puerta pequeña en Jerusalén.",
              "La gran dificultad de que quienes confían en las riquezas entren al reino de Dios.",
              "Un truco de magia.",
              "Una técnica de costura antigua.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 11,
    title: "Semana 11: La última semana del ministerio público",
    dateRange: "11-17 de mayo",
    lessons: [
      { id: "nt-s11-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa la palabra hebrea "Hosanna" que la multitud exclamaba?',
            options: [
              "Rey de reyes.",
              "Sálvanos (usada en alabanza y súplica).",
              "Bendito sea el Señor.",
              "El Mesías ha llegado.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué profecía del Antiguo Testamento se cumplió cuando Jesús entró montado en un pollino?",
            options: [
              "Isaías 53:3.",
              "Zacarías 9:9.",
              "Salmos 22:1.",
              "Malaquías 3:1.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál dijo Jesús que era el propósito completo de Su venida a la tierra según Juan 12:23–33?",
            options: [
              "Organizar un ejército contra Roma.",
              "Llevar a cabo Su sacrificio expiatorio y atraer a todos hacia Él.",
              "Establecer un gobierno político en Jerusalén.",
              "Viajar a otras naciones para predicar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué simbolizan tradicionalmente las ramas de palmera usadas por la multitud?",
            options: [
              "Pobreza y humildad.",
              "Victoria, triunfo y gozo en el Señor.",
              "Una ofrenda de comida.",
              "El inicio de la cosecha.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s11-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué hizo Jesús al entrar al templo en Jerusalén (Mateo 21:12)?",
            options: [
              "Se sentó a descansar.",
              "Echó fuera a todos los que vendían y compraban allí.",
              "Pidió una ofrenda de oro.",
              "Organizó una fiesta.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Cuál es el "grande y el primer mandamiento" según la respuesta de Jesús a los fariseos?',
            options: [
              "No matarás.",
              "Amarás al Señor tu Dios con todo tu corazón, alma y mente.",
              "Guardarás el día de reposo.",
              "Pagarás tus diezmos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Cuál es el segundo mandamiento, que es "semejante" al primero?',
            options: [
              "Honrarás a tu padre.",
              "No dirás falso testimonio.",
              "Amarás a tu prójimo como a ti mismo.",
              "Irás al templo regularmente.",
            ],
            correctAnswer: 2,
          },
          {
            id: 4,
            question: "¿Qué dijo Jesús que depende de estos dos grandes mandamientos?",
            options: [
              "Solo la salvación de los judíos.",
              "Toda la ley y los profetas.",
              "El éxito material de la nación.",
              "La construcción del nuevo templo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s11-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave para el pasaje Mateo 22:36–39?",
            options: [
              "\"Venid a mí y yo os haré descansar\".",
              "\"Amarás al Señor tu Dios […]. Amarás a tu prójimo\".",
              "\"Tú eres el Cristo\".",
              "\"Nacer de agua y del Espíritu\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo demostramos que amamos a Dios sobre todas las cosas?",
            options: [
              "Solo diciéndolo en voz alta.",
              "Guardando Sus mandamientos y poniéndolo a Él primero.",
              "Comparándonos con los demás.",
              "Evitando cualquier contacto con el mundo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Quién es nuestro "prójimo" según las enseñanzas del Salvador?',
            options: [
              "Solo nuestra familia inmediata.",
              "Solo los miembros de nuestra Iglesia.",
              "Todos los hijos de Dios, incluyendo extraños y enemigos.",
              "Las personas que viven en nuestra misma calle.",
            ],
            correctAnswer: 2,
          },
          {
            id: 4,
            question: "¿Qué principio de conocimiento espiritual nos invita a actuar con fe para amar a alguien difícil?",
            options: [
              "Analizar con perspectiva eterna.",
              "Actuar con fe.",
              "Fuentes divinamente señaladas.",
              "Ignorar el problema.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s11-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa el término "hipócrita" en el contexto de las enseñanzas de Jesús?',
            options: [
              "Una persona que no sabe leer.",
              "Alguien que finge ser algo que no es, especialmente en lo religioso.",
              "Un soldado romano.",
              "Un pecador que no quiere cambiar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Por qué reprendió Jesús a los escribas y fariseos en Mateo 23?",
            options: [
              "Por ser demasiado pobres.",
              "Por hacer sus obras para ser vistos por los hombres.",
              "Por no saberse las leyes.",
              "Por viajar demasiado.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué metáfora usó Jesús para describir a los hipócritas que parecían limpios por fuera?",
            options: [
              "Un árbol sin frutos.",
              "Sepulcros blanqueados (hermosos por fuera, pero llenos de huesos por dentro).",
              "Una red de pesca rota.",
              "Una lámpara sin aceite.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál es la advertencia de Jesús para los que se ensalzan a sí mismos?",
            options: [
              "Que serán reyes.",
              "Que serán humillados.",
              "Que no pasará nada.",
              "Que recibirán más dinero.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 12,
    title: "Semana 12: Parábolas del reino y exhortaciones apostólicas",
    dateRange: "18-24 de mayo",
    lessons: [
      { id: "nt-s12-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿A qué comparó Pablo su vida pasada y sus logros mundanos frente a conocer a Cristo?",
            options: [
              "A un gran tesoro.",
              "A pérdida y a basura.",
              "A una corona de oro.",
              "A un camino fácil.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál era el objetivo principal de Pablo según Filipenses 3:10?",
            options: [
              "Volverse el hombre más rico.",
              "Conocer a Cristo y el poder de Su resurrección.",
              "Ser el líder de los fariseos.",
              "Viajar a Roma por diversión.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué actitud recomendó Pablo hacia los errores o el pasado?",
            options: [
              "Recordarlos siempre con amargura.",
              "Olvidar lo que queda atrás y extenderse a lo que está delante.",
              "Dejar de esforzarse.",
              "Culpar a los demás.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: '¿Cuál es el "premio" que Pablo buscaba alcanzar?',
            options: [
              "Una medalla de plata.",
              "El supremo llamamiento de Dios en Cristo Jesús.",
              "La aprobación de los romanos.",
              "Una vida larga en la tierra.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: '¿Dónde dijo Pablo que está nuestra verdadera "ciudadanía"?',
            options: [
              "En Jerusalén.",
              "En Roma.",
              "En los cielos.",
              "En cada nación del mundo.",
            ],
            correctAnswer: 2,
          },
        ]
      },
      { id: "nt-s12-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió Pablo que guardaría nuestros corazones y pensamientos?",
            options: [
              "El dinero ahorrado.",
              "La paz de Dios, que sobrepasa todo entendimiento.",
              "El conocimiento de idiomas.",
              "La fuerza física.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál es el secreto de Pablo para estar contento en cualquier situación?",
            options: [
              "Tener mucha comida siempre.",
              "Todo lo puedo en Cristo que me fortalece.",
              "No tener ningún desafío.",
              "Ignorar sus problemas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué tipo de cosas nos invitó Pablo a pensar en Filipenses 4:8?",
            options: [
              "Solo cosas negativas para estar prevenidos.",
              "Todo lo que es verdadero, honesto, justo, puro y virtuoso.",
              "En los errores de los vecinos.",
              "En el éxito mundano.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cómo debemos presentar nuestras peticiones delante de Dios según Pablo?",
            options: [
              "Con enojo.",
              "Mediante oración y ruego, con acción de gracias.",
              "Solo una vez al año.",
              "Sin esperanza.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s12-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué representan las lámparas en la parábola según el manual?",
            options: [
              "Nuestra ropa.",
              "Nuestros testimonios y la preparación espiritual.",
              "Objetos de decoración.",
              "La riqueza material.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Por qué a cinco de las vírgenes se les llamó "insensatas"?',
            options: [
              "Porque no tenían lámparas.",
              "Porque no tomaron aceite consigo en sus vasijas.",
              "Porque se quedaron dormidas.",
              "Porque no querían ir a la fiesta.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué representa el "aceite" para nuestras lámparas espirituales?',
            options: [
              "Solo la lectura de libros seculares.",
              "Las gotas de discipulado y obediencia acumuladas día a día.",
              "Dinero para la Iglesia.",
              "La fe de nuestros padres.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Por qué las vírgenes prudentes no pudieron compartir su aceite?",
            options: [
              "Porque eran egoístas.",
              "Porque la preparación espiritual no se puede compartir en el último momento.",
              "Porque el aceite se evaporó.",
              "Porque no les gustaban las otras vírgenes.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s12-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué le dijo el señor al siervo fiel que duplicó su talento?",
            options: [
              "\"¿Por qué no ganaste más?\".",
              "\"Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré\".",
              "\"Vuelve a trabajar\".",
              "\"Dame todo el dinero ahora\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Por qué fue reprendido el siervo que recibió un solo talento?",
            options: [
              "Por perder el dinero.",
              "Porque por miedo lo escondió en la tierra y no hizo nada con él.",
              "Porque era pobre.",
              "Porque no sabía contar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo separará el Rey a las personas en el juicio final (Mateo 25:31–33)?",
            options: [
              "Por su nacionalidad.",
              "Como el pastor separa las ovejas de los cabritos.",
              "Por su inteligencia académica.",
              "Por la cantidad de libros leídos.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 13,
    title: "Semana 13: La Pascua y la institución de la Santa Cena",
    dateRange: "25-31 de mayo",
    lessons: [
      { id: "nt-s13-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué lección de liderazgo dio Jesús al lavar los pies de Sus discípulos?",
            options: [
              "Que los líderes deben ser servidos.",
              "Que el que es el mayor debe ser el servidor de todos.",
              "Que no deben usar zapatos.",
              "Que la higiene es lo más importante.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál fue la reacción inicial de Pedro cuando Jesús intentó lavarle los pies?",
            options: [
              "Se alegró mucho.",
              "Se negó diciendo: \"No me lavarás los pies jamás\".",
              "Empezó a llorar.",
              "Salió corriendo de la habitación.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué "mandamiento nuevo" dio Jesús a Sus Apóstoles esa noche?',
            options: [
              "Que debían ayunar más.",
              "Que se amaran unos a otros como Él los ha amado.",
              "Que debían viajar a Roma.",
              "Que no debían hablar con extraños.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cómo sabrán todos que somos discípulos de Cristo según Juan 13:35?",
            options: [
              "Por nuestra ropa especial.",
              "Si tenemos amor los unos por los otros.",
              "Por cuánto sabemos de las Escrituras.",
              "Por los cargos que tenemos en la Iglesia.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s13-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué representa el pan en la Santa Cena?",
            options: [
              "Solo una comida común.",
              "El cuerpo del Salvador.",
              "El maná del desierto.",
              "La tierra de Israel.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué representa el vino (o agua) en la Santa Cena?",
            options: [
              "Un símbolo de alegría.",
              "La sangre de Cristo, que es derramada por muchos para remisión de pecados.",
              "El agua del bautismo solamente.",
              "La lluvia del cielo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Con qué propósito mandó Jesús participar de la Santa Cena?",
            options: [
              "Para no tener hambre física.",
              "En memoria de Él (Su sacrificio y vida).",
              "Como una tradición sin significado.",
              "Solo para los Apóstoles antiguos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué convenio renovamos al participar de la Santa Cena?",
            options: [
              "El convenio de ser ricos.",
              "Nuestros convenios bautismales.",
              "Un convenio de silencio.",
              "Un contrato laboral.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s13-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Lucas 22:19–20?",
            options: [
              "\"Amarás a tu prójimo\".",
              "Jesucristo mandó participar de la Santa Cena “en memoria de [Él]”.",
              "\"Nacer de agua y del Espíritu\".",
              "\"Tú eres el Cristo\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué sucede si participamos de la Santa Cena con un corazón sincero?",
            options: [
              "Nos volvemos perfectos al instante.",
              "Invitamos el poder de la Expiación para limpiarnos y fortalecernos.",
              "No necesitamos volver a orar.",
              "Se eliminan todas nuestras pruebas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo podemos prepararnos para la Santa Cena durante la semana?",
            options: [
              "Ignorando nuestros errores.",
              "Arrepintiéndonos y buscando formas de recordar al Salvador.",
              "Comprando ropa nueva cada vez.",
              "Solo pensando en ella el domingo por la mañana.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál es el beneficio de tener el Espíritu siempre con nosotros?",
            options: [
              "Seremos mejores deportistas.",
              "Recibiremos guía, consuelo y protección espiritual.",
              "No cometeremos ningún error nunca más.",
              "Sabremos los números de la lotería.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s13-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué evento se celebraba en Jerusalén cuando los principales sacerdotes conspiraron para matar a Jesús?",
            options: [
              "La Fiesta de los Tabernáculos.",
              "La Pascua.",
              "El Pentecostés.",
              "La Dedicación.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Quién fue la persona que ungió a Jesús con un perfume muy costoso en Betania?",
            options: [
              "María Magdalena.",
              "Una mujer (identificada en otros evangelios como María de Betania).",
              "Marta.",
              "Una mujer samaritana.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál fue la reacción de Judas Iscariote ante el gasto del perfume?",
            options: [
              "Se alegró por el honor a Jesús.",
              "Se indignó, sugiriendo que el dinero debió darse a los pobres.",
              "No dijo nada.",
              "Pidió un poco del perfume.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Por cuántas piezas de plata aceptó Judas entregar al Salvador?",
            options: [
              "10.",
              "50.",
              "30.",
              "100.",
            ],
            correctAnswer: 2,
          },
        ]
      },
      { id: "nt-s13-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué principio de la Santa Cena ayuda a renovar nuestros convenios?",
            options: [
              "El ayuno previo.",
              "Participar en memoria del cuerpo y la sangre del Salvador.",
              "Escuchar el coro.",
              "La limpieza del edificio.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Cuál es un resultado de "velar" espiritualmente según la parábola de las diez vírgenes?',
            options: [
              "No tener sueño físico.",
              "Estar preparados para la Segunda Venida del Señor.",
              "Saber la fecha exacta del fin del mundo.",
              "Ser mejores que los demás.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo demostramos amor al Salvador según Sus enseñanzas en la Última Cena?",
            options: [
              "Solo con palabras.",
              "Guardando Sus mandamientos.",
              "Con sacrificios de animales.",
              "Viajando a Jerusalén.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué tipo de liderazgo enseñó Jesús al lavar los pies de Sus Apóstoles?",
            options: [
              "Liderazgo autoritario.",
              "Liderazgo de servicio.",
              "Liderazgo político.",
              "Liderazgo militar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué invita el Señor a hacer a quienes han fallado en sus metas espirituales?",
            options: [
              "Rendirse.",
              "Arrepentirse y seguir intentándolo.",
              "Esperar al próximo año.",
              "Sentirse culpables para siempre.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 14,
    title: "Semana 14: Las enseñanzas finales del Salvador",
    dateRange: "5-9 de junio",
    lessons: [
      { id: "nt-s14-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué consuelo dio Jesús a Sus discípulos ante Su partida en Juan 14:1?",
            options: [
              "\"No estéis tristes\".",
              "\"No se turbe vuestro corazón; creéis en Dios, creed también en mí\".",
              "\"Volveré mañana\".",
              "\"Id a vuestras casas\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Quién dijo Jesús que es el único camino para llegar al Padre?",
            options: [
              "Moisés.",
              "Él mismo (Jesucristo).",
              "Pedro.",
              "Juan el Bautista.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿A qué comparó Jesús Su relación con los discípulos en Juan 15?",
            options: [
              "A un pastor y ovejas.",
              "A la vid y los pámpanos (ramas).",
              "A una red y peces.",
              "A un sembrador y semillas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué sucede con el pámpano que no permanece en la vid?",
            options: [
              "Crece más fuerte.",
              "No puede llevar fruto por sí mismo.",
              "Se convierte en vid.",
              "Da frutos amargos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué prometió Jesús si Sus palabras permanecen en nosotros?",
            options: [
              "Riquezas terrenales.",
              "Que pediremos lo que queramos y nos será hecho.",
              "Que no tendremos pruebas.",
              "Que seremos reyes.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s14-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió enviar el Salvador si Sus discípulos guardaban Sus mandamientos?",
            options: [
              "Un ejército ángel.",
              "Otro Consolador (el Espíritu Santo).",
              "Muchos tesoros.",
              "Un nuevo profeta.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo llamó Jesús a Sus discípulos si hacían lo que Él les mandaba?",
            options: [
              "Siervos útiles.",
              "Amigos.",
              "Alumnos.",
              "Seguidores.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué clase de paz ofrece Cristo a diferencia de la paz del mundo?",
            options: [
              "Una paz sin conflictos.",
              "Su paz propia que sobrepasa el entendimiento y calma el corazón.",
              "Una paz temporal.",
              "Paz política.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál es el mandamiento de Jesús en Juan 15:12?",
            options: [
              "Que ayunen mucho.",
              "Que se amen unos a otros como Él los ha amado.",
              "Que lean la ley.",
              "Que bauticen a todos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué prometió Jesús que haría el Espíritu Santo por los discípulos?",
            options: [
              "Les daría dinero.",
              "Les enseñaría todas las cosas y les recordaría Sus palabras.",
              "Les haría inmortales en ese momento.",
              "Les diría el futuro político.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s14-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué dijo Jesús que era conveniente que Él se fuera?",
            options: [
              "Porque estaba cansado.",
              "Porque si no se iba, el Consolador (Espíritu Santo) no vendría a ellos.",
              "Porque tenía que visitar otros mundos.",
              "Porque quería que ellos trabajaran solos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿De qué convencerá el Espíritu Santo al mundo cuando venga?",
            options: [
              "De historia.",
              "De pecado, de justicia y de juicio.",
              "De geografía sagrada.",
              "De política romana.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Cuál es la función del "Espíritu de Verdad" mencionada en Juan 16:13?',
            options: [
              "Castigar a los incrédulos.",
              "Guiar a los discípulos a toda la verdad.",
              "Escribir libros.",
              "Construir templos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿A quién glorificará el Espíritu Santo según las palabras de Jesús?",
            options: [
              "A Sí mismo.",
              "A Jesucristo.",
              "A los Apóstoles.",
              "A los líderes locales.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué prometió Jesús sobre la tristeza de los discípulos tras Su partida?",
            options: [
              "Que duraría para siempre.",
              "Que su tristeza se convertiría en gozo.",
              "Que no sentirían tristeza.",
              "Que la tristeza es pecado.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s14-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿A quién se dirigió Jesús en Su gran oración de Juan 17?",
            options: [
              "A los Apóstoles.",
              "A Su Padre Celestial.",
              "A la multitud.",
              "A los ángeles.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué pidió Jesús específicamente para Sus discípulos en cuanto a su unidad?",
            options: [
              "Que vivan en la misma casa.",
              "Que sean uno, así como el Padre y el Hijo son uno.",
              "Que piensen exactamente igual en todo.",
              "Que no hablen con extraños.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué ruego hizo Jesús al Padre respecto a los discípulos y el mundo?",
            options: [
              "Que los quite del mundo.",
              "Que los guarde del mal (del maligno).",
              "Que el mundo los ame.",
              "Que el mundo les de premios.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Por qué medio pidió Jesús que Sus discípulos fueran santificados?",
            options: [
              "Por el agua.",
              "Por la verdad (la palabra de Dios).",
              "Por el sacrificio de animales.",
              "Por el dinero.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Por quiénes más oró Jesús además de por los Apóstoles presentes?",
            options: [
              "Solo por Sus familiares.",
              "Por los que habrían de creer en Él por la palabra de ellos (nosotros).",
              "Por los romanos.",
              "Por los enemigos de la Iglesia.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s14-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave del pasaje Juan 17:3?",
            options: [
              "\"Yo soy el camino\".",
              "\"Y esta es la vida eterna: que te conozcan a ti […] y a Jesucristo\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Tú eres el Cristo\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Cómo define este pasaje la "vida eterna"?',
            options: [
              "Vivir para siempre sin hacer nada.",
              "Conocer al único Dios verdadero y a Jesucristo.",
              "No morir físicamente nunca.",
              "Tener muchas posesiones en el cielo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué tipo de "conocimiento" implica conocer a Dios según este contexto?',
            options: [
              "Solo saber datos biográficos.",
              "Tener una relación personal y ser como Él.",
              "Memorizar diccionarios.",
              "Saber historia antigua.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Por qué es vital conocer a Jesucristo para obtener la vida eterna?",
            options: [
              "Porque es un requisito académico.",
              "Porque Él es quien envió el Padre para salvarnos y darnos el ejemplo.",
              "Porque no hay otros libros que leer.",
              "Porque es una tradición social.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué principio de conocimiento espiritual nos ayuda a buscar este conocimiento?",
            options: [
              "Ignorar las dudas.",
              "Actuar con fe y buscar en fuentes divinamente señaladas.",
              "Esperar a que alguien nos lo diga.",
              "Consultar solo redes sociales.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 15,
    title: "Semana 15: Getsemaní y el arresto del Salvador",
    dateRange: "12-16 de junio",
    lessons: [
      { id: "nt-s15-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué le advirtió Jesús a Pedro que sucedería antes de que el gallo cantara?",
            options: [
              "Que Pedro huiría a Galilea.",
              "Que Pedro lo negaría tres veces.",
              "Que Pedro sería arrestado.",
              "Que Pedro se quedaría dormido.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué hizo Pedro inmediatamente después de negar al Salvador por tercera vez y que el gallo cantara?",
            options: [
              "Se fue a pescar al mar.",
              "Salió fuera y lloró amargamente.",
              "Fue a pedir perdón a los sacerdotes.",
              "Se escondió en el jardín.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Cuál fue la misión que Jesús le dio a Pedro después de que este se "convirtiera" (Lucas 22:32)?',
            options: [
              "Construir un templo.",
              "Fortalecer a sus hermanos.",
              "Escribir un libro.",
              "Viajar a Roma de inmediato.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Dónde se encontraba Pedro cuando negó al Salvador?",
            options: [
              "En el patio del sumo sacerdote.",
              "En el monte de los Olivos.",
              "En el templo de Jerusalén.",
              "En la barca en el mar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué atributo mostró Jesús al orar por Pedro para que su fe no faltara?",
            options: [
              "Indiferencia.",
              "Amor y preocupación individual por Sus discípulos.",
              "Enojo por la futura traición.",
              "Miedo a quedarse solo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s15-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa el nombre "Getsemaní"?',
            options: [
              "Lugar de descanso.",
              "Prensa de aceite.",
              "Monte de oración.",
              "Jardín de flores.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué pidió Jesús al Padre mientras oraba en el jardín?",
            options: [
              "Que destruyera a Sus enemigos.",
              "\"Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú\".",
              "Que los ángeles lo rescataran.",
              "Que Sus discípulos fueran castigados.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué detalle físico único del sufrimiento de Jesús registra Lucas (Lucas 22:44)?",
            options: [
              "Que no podía caminar.",
              "Que Su sudor era como grandes gotas de sangre que caían hasta la tierra.",
              "Que perdió la voz.",
              "Que se quedó dormido por el cansancio.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Por qué fue necesario el sufrimiento de Jesús en Getsemaní según el Plan de Salvación?",
            options: [
              "Para demostrar que era muy fuerte.",
              "Para tomar sobre Sí los pecados, dolores y aflicciones de toda la humanidad.",
              "Para que los discípulos tuvieran qué escribir.",
              "Para evitar la crucifixión.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Quién apareció del cielo para fortalecer al Salvador durante Su agonía?",
            options: [
              "Moisés y Elías.",
              "Un ángel.",
              "Juan el Bautista.",
              "Sus padres terrenales.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s15-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué estaban haciendo Pedro, Santiago y Juan mientras Jesús sufría en el jardín?",
            options: [
              "Orando fervientemente con Él.",
              "Durmiendo a causa de la tristeza.",
              "Preparando la huida.",
              "Discutiendo con los guardias.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué invitación hizo Jesús a Sus discípulos al encontrarlos dormidos?",
            options: [
              "\"Idos a vuestras casas\".",
              "\"Velad y orad, para que no entréis en tentación\".",
              "\"Haced una fogata\".",
              "\"Buscad a Judas\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo describió Jesús la condición de Sus discípulos esa noche?",
            options: [
              "\"Sois malos seguidores\".",
              "\"El espíritu a la verdad está dispuesto, pero la carne es débil\".",
              "\"Estáis llenos de fe\".",
              "\"Tenéis miedo de la oscuridad\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuántas veces se apartó Jesús para orar la misma petición en el jardín?",
            options: [
              "Una vez.",
              "Tres veces.",
              "Siete veces.",
              "Diez veces.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué actitud demostró el Salvador al someterse a la voluntad del Padre?",
            options: [
              "Resistencia.",
              "Obediencia perfecta y amor infinito.",
              "Tristeza sin esperanza.",
              "Confusión.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s15-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Con qué señal entregó Judas Iscariote al Salvador a la multitud armada?",
            options: [
              "Señalándole con la mano.",
              "Con un beso.",
              "Diciendo Su nombre en voz alta.",
              "Entregándole una bolsa de plata.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué milagro realizó Jesús en el momento de Su arresto (Lucas 22:50–51)?",
            options: [
              "Hizo caer fuego del cielo.",
              "Sanó la oreja del siervo del sumo sacerdote.",
              "Se volvió invisible.",
              "Hizo que los guardias se durmieran.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cuál fue la respuesta de Jesús cuando el sumo sacerdote le preguntó si era el Cristo?",
            options: [
              "\"No lo sé\".",
              "\"Tú lo has dicho\" o \"Yo soy\".",
              "\"Pregúntale a mis discípulos\".",
              "Guardó silencio absoluto.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿De qué delito acusaron inicialmente los líderes judíos a Jesús ante el Sanedrín?",
            options: [
              "De robo.",
              "De blasfemia.",
              "De traición a Roma.",
              "De no pagar impuestos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cómo reaccionó Jesús ante las burlas y los golpes de los guardias?",
            options: [
              "Los maldijo.",
              "Soportó con paciencia y dignidad divinas.",
              "Pidió ayuda a Pedro.",
              "Trató de escapar.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 16,
    title: "Semana 16: La Crucifixión y el sepultamiento",
    dateRange: "19-23 de junio",
    lessons: [
      { id: "nt-s16-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué se alegró Herodes Antipas al ver a Jesús?",
            options: [
              "Porque quería ser Su discípulo.",
              "Porque esperaba verle hacer algún milagro.",
              "Porque quería perdonarlo.",
              "Porque eran parientes.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál fue la reacción de Jesús ante las muchas preguntas de Herodes?",
            options: [
              "Le enseñó el Evangelio.",
              "No le respondió nada.",
              "Se burló de él.",
              "Pidió que lo liberara.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué prisionero eligió liberar la multitud en lugar de a Jesús?",
            options: [
              "Judas.",
              "Barrabás (un ladrón y asesino).",
              "Lázaro.",
              "Un soldado romano.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué declaró Pilato sobre Jesús después de interrogarlo?",
            options: [
              "\"Es culpable de muerte\".",
              "\"Ningún delito hallo en este hombre\".",
              "\"Debe ser enviado a Roma\".",
              "\"Es un gran profeta\".",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s16-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué nombre recibía el lugar donde crucificaron a Jesús?",
            options: [
              "Getsemaní.",
              "Gólgota (que significa Lugar de la Calavera).",
              "Belén.",
              "Monte de los Olivos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué inscripción puso Pilato en la cruz de Jesús?",
            options: [
              "\"El profeta de Galilea\".",
              "\"JESÚS NAZARENO, REY DE LOS JUDÍOS\".",
              "\"Blasfemo de Israel\".",
              "\"Hijo de José\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué suceso natural ocurrió durante las tres horas finales de la crucifixión?",
            options: [
              "Un gran arcoíris.",
              "Hubo tinieblas sobre toda la tierra.",
              "Una lluvia torrencial.",
              "Un eclipse de luna.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué sucedió en el templo de Jerusalén en el momento en que Jesús murió?",
            options: [
              "Se derrumbaron los muros.",
              "El velo del templo se rasgó en dos, de arriba abajo.",
              "Se apagaron las luces.",
              "Los sacerdotes huyeron.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Quién reconoció la divinidad de Jesús al ver cómo murió y el terremoto?",
            options: [
              "Los fariseos.",
              "El centurión romano y los que estaban con él.",
              "Pilato desde su palacio.",
              "Herodes.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s16-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué pidió Jesús por aquellos que lo estaban crucificando?",
            options: [
              "Que fueran castigados.",
              "\"Padre, perdónalos, porque no saben lo que hacen\".",
              "Que se arrepintieran pronto.",
              "Que fueran bendecidos con riquezas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué promesa le hizo Jesús al malhechor arrepentido que estaba a Su lado?",
            options: [
              "\"Te bajaré de la cruz\".",
              "\"De cierto te digo que hoy estarás conmigo en el paraíso\".",
              "\"Tus pecados son muchos\".",
              "\"No hay esperanza para ti\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿A quién encomendó Jesús el cuidado de Su madre María?",
            options: [
              "A Pedro.",
              "Al discípulo amado (Juan).",
              "A Santiago.",
              "A María Magdalena.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál fue la última frase que Jesús pronunció antes de morir según Juan 19:30?",
            options: [
              "\"Tengo sed\".",
              "\"Consumado es\" (o \"Todo se ha cumplido\").",
              "\"Padre, recíbeme\".",
              "\"Volveré en tres días\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿A quién encomendó Jesús Su espíritu en Sus momentos finales?",
            options: [
              "A los ángeles.",
              "A Su Padre.",
              "A la posteridad.",
              "A los profetas antiguos.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 17,
    title: "Semana 17: La Resurrección",
    dateRange: "26-30 de junio",
    lessons: [
      { id: "nt-s17-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quiénes fueron las primeras personas en descubrir la tumba vacía?",
            options: [
              "Pedro y Juan.",
              "Ciertas mujeres (incluida María Magdalena).",
              "Los soldados romanos.",
              "Pilato y su esposa.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo reaccionaron inicialmente los Apóstoles ante el informe de las mujeres?",
            options: [
              "Creyeron de inmediato.",
              "Les parecieron locura las palabras de ellas, y no las creyeron.",
              "Fueron a celebrar.",
              "Se escondieron en el templo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué comió Jesús ante Sus discípulos para demostrar que tenía un cuerpo físico?",
            options: [
              "Pan y vino.",
              "Parte de un pez asado y un panal de miel.",
              "Frutas de la región.",
              "Nada, Él no necesitaba comer.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cuál fue el mandamiento de Jesús a Sus discípulos tras Su resurrección?",
            options: [
              "Que se quedaran en Jerusalén para siempre.",
              "Que se predicase en Su nombre el arrepentimiento y la remisión de pecados en todas las naciones.",
              "Que no hablaran con nadie del milagro.",
              "Que buscaran a Judas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s17-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Lucas 24:36–39?",
            options: [
              "\"Yo soy el camino\".",
              "\"Un espíritu no tiene carne ni huesos, como veis que yo tengo\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué cualidad del cuerpo resucitado de Jesús se enfatiza en este pasaje?",
            options: [
              "Que es invisible.",
              "Que es un cuerpo tangible de carne y huesos.",
              "Que puede cambiar de forma.",
              "Que no tiene peso.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Por qué invitó Jesús a los discípulos a palparlo y verlo?",
            options: [
              "Porque Él estaba herido.",
              "Para que supieran que no era un espíritu, sino que había resucitado físicamente.",
              "Porque quería que vieran Su ropa.",
              "Para que le dieran comida.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué sentimientos tenían los discípulos cuando Jesús se les apareció (versículo 37)?",
            options: [
              "Alegría extrema solamente.",
              "Espantados y atemorizados, pensando que veían un espíritu.",
              "Indiferencia.",
              "Enojo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué verdad fundamental sobre la Resurrección enseña este pasaje?",
            options: [
              "Que solo Jesús resucitó.",
              "Que la resurrección implica la reunión eterna del espíritu con un cuerpo físico glorificado.",
              "Que el cuerpo no importa después de la muerte.",
              "Que es un proceso puramente simbólico.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 18,
    title: "Semana 18: El ministerio apostólico en Hechos",
    dateRange: "3-7 de julio",
    lessons: [
      { id: "nt-s18-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué promesa recibieron los Apóstoles antes de la ascensión de Jesús?",
            options: [
              "Que serían reyes de Israel inmediatamente.",
              "Que recibirían el poder del Espíritu Santo.",
              "Que no volverían a sufrir persecución.",
              "Que viajarían por todo el mundo en un día.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Quién fue elegido para ocupar el lugar de Judas Iscariote en el Quórum de los Doce?",
            options: [
              "Pablo.",
              "Bernabé.",
              "Matías.",
              "Esteban.",
            ],
            correctAnswer: 2,
          },
          {
            id: 3,
            question: "¿Cuál fue el método para elegir al nuevo Apóstol después de orar?",
            options: [
              "Una votación popular.",
              "Echaron suertes (buscando la voluntad del Señor).",
              "Un examen escrito.",
              "Lo decidió el soldado romano.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Hacia dónde ascendió Jesús después de dar Sus últimas instrucciones?",
            options: [
              "Al Templo.",
              "A los cielos.",
              "A Galilea.",
              "Al desierto.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué dijeron los ángeles a los Apóstoles tras la ascensión de Jesús?",
            options: [
              "Que Jesús no volvería.",
              "Que Jesús vendrá de la misma manera que lo vieron ir al cielo.",
              "Que debían esconderse.",
              "Que el mundo se acabaría ese día.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s18-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué señal física acompañó la venida del Espíritu Santo en Pentecostés?",
            options: [
              "Un terremoto violento.",
              "Un estruendo como de viento y lenguas de fuego.",
              "Una lluvia torrencial.",
              "Oscuridad total.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué milagro permitió que personas de diversas naciones entendieran a los Apóstoles?",
            options: [
              "Hablaron en un idioma inventado.",
              "Hablaron en otras lenguas según el Espíritu les daba.",
              "Usaron traductores romanos.",
              "Les dieron copias escritas de los discursos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Quién dio el primer gran discurso testificando de la resurrección de Cristo?",
            options: [
              "Juan.",
              "Santiago.",
              "Pedro.",
              "Lucas.",
            ],
            correctAnswer: 2,
          },
          {
            id: 4,
            question: '¿Cuál fue la respuesta de Pedro cuando el pueblo preguntó: "¿Qué haremos?"?',
            options: [
              '"Vuelvan a sus casas".',
              '"Arrepentíos, y bautícese cada uno... y recibiréis el don del Espíritu Santo".',
              '"Pagad vuestros impuestos".',
              '"Estudiad las leyes antiguas".',
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuántas personas aproximadamente se bautizaron ese día?",
            options: [
              "12.",
              "100.",
              "500.",
              "3,000.",
            ],
            correctAnswer: 3,
          },
        ]
      },
      { id: "nt-s18-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Dónde se encontraba el hombre que Pedro y Juan sanaron?",
            options: [
              "En el mercado.",
              "A la puerta del templo llamada la Hermosa.",
              "En la barca de Pedro.",
              "En casa de Pilato.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué frase famosa le dijo Pedro al hombre que pedía limosna?",
            options: [
              "\"Tengo mucho oro para ti\".",
              "\"No tengo plata ni oro, pero lo que tengo te doy... levántate y anda\".",
              "\"Pide ayuda a los sacerdotes\".",
              "\"Vuelve mañana por comida\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿A quién dio Pedro la gloria por el milagro de sanidad?",
            options: [
              "A su propia inteligencia.",
              "Al nombre y al poder de Jesucristo.",
              "A las leyes de la medicina.",
              "A los líderes del templo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué hizo el hombre después de ser sanado?",
            options: [
              "Se fue a dormir.",
              "Salió corriendo de la ciudad.",
              "Entró al templo andando, saltando y alabando a Dios.",
              "Volvió a pedir limosna.",
            ],
            correctAnswer: 2,
          },
          {
            id: 5,
            question: "¿Qué invitó Pedro a hacer al pueblo que estaba asombrado por el milagro?",
            options: [
              "Hacer una estatua de Pedro.",
              "Arrepentirse y convertirse para que sus pecados fueran borrados.",
              "Recolectar dinero para el hombre.",
              "Irse antes de que vinieran los guardias.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s18-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué arrestaron los líderes judíos a Pedro y a Juan?",
            options: [
              "Por robar en el templo.",
              "Por enseñar en el nombre de Jesús y la resurrección.",
              "Por no pagar impuestos.",
              "Por pelear con los guardias.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta valiente de Pedro ante el concilio que les prohibía enseñar?",
            options: [
              "\"Prometemos no volver a hacerlo\".",
              "\"Es necesario obedecer a Dios antes que a los hombres\".",
              "\"Pidan permiso a Roma\".",
              "Guardó silencio absoluto.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué pecado cometieron Ananías y Safira según Hechos 5?",
            options: [
              "Robaron el templo.",
              "Mintieron al Espíritu Santo sobre el precio de una propiedad.",
              "No quisieron bautizarse.",
              "Hablaron mal de los Apóstoles.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cómo fueron liberados los Apóstoles de la cárcel común?",
            options: [
              "Pedro rompió las cadenas.",
              "Un ángel del Señor abrió las puertas por la noche.",
              "Los seguidores pagaron el rescate.",
              "Los guardias se quedaron dormidos por accidente.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué consejo dio Gamaliel al concilio respecto a los discípulos?",
            options: [
              "Que debían matarlos a todos.",
              "Que si la obra es de Dios, no podrán destruirla.",
              "Que los enviaran a otra ciudad.",
              "Que los ignoraran para siempre.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 19,
    title: "Semana 19: La expansión inicial de la Iglesia",
    dateRange: "10-14 de julio",
    lessons: [
      { id: "nt-s19-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál era la función de los siete varones elegidos, entre ellos Esteban?",
            options: [
              "Ser los nuevos Apóstoles.",
              "Ayudar en el servicio diario a las viudas y necesitados.",
              "Escribir libros de historia.",
              "Dirigir los ejércitos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿De qué acusaron falsamente a Esteban ante el concilio?",
            options: [
              "De robar oro.",
              "De hablar palabras blasfemas contra Moisés y Dios.",
              "De querer ser rey.",
              "De no saber leer.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué vio Esteban cuando miró fijamente al cielo mientras lo juzgaban?",
            options: [
              "Un gran ángel con espada.",
              "La gloria de Dios y a Jesús a la diestra de Dios.",
              "Una paloma blanca.",
              "Nubes oscuras.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cómo murió Esteban, convirtiéndose en el primer mártir cristiano?",
            options: [
              "Decapitado.",
              "Apedreado.",
              "Crucificado.",
              "En la cárcel por enfermedad.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué pidió Esteban al Señor por sus verdugos antes de morir?",
            options: [
              "Que los destruyera.",
              "\"Señor, no les tomes en cuenta este pecado\".",
              "Que no lloviera sobre ellos.",
              "Que sus familias sufrieran.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s19-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quién consentía en la muerte de Esteban y perseguía a la Iglesia al inicio?",
            options: [
              "Pedro.",
              "Saulo.",
              "Pilato.",
              "Herodes.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿A qué región fue Felipe a predicar tras la persecución en Jerusalén?",
            options: [
              "Roma.",
              "Samaria.",
              "Egipto.",
              "Atenas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué intentó hacer Simón el mago al ver que los Apóstoles daban el Espíritu Santo?",
            options: [
              "Bautizarse de nuevo.",
              "Comprar el don de Dios con dinero.",
              "Huir de la ciudad.",
              "Retar a Pedro a un duelo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿A quién encontró Felipe en el camino de Jerusalén a Gaza?",
            options: [
              "A un centurión romano.",
              "A un oficial etíope (un eunuco).",
              "A Saulo de Tarso.",
              "A su propia familia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué estaba leyendo el etíope cuando Felipe se le acercó?",
            options: [
              "El Génesis.",
              "El libro del profeta Isaías.",
              "Los Salmos.",
              "El Evangelio de Mateo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s19-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál era el propósito de Saulo al viajar a Damasco?",
            options: [
              "Visitar a sus amigos.",
              "Arrestar a los seguidores de Jesús.",
              "Comprar seda.",
              "Estudiar con los escribas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué luz rodeó a Saulo en el camino y qué voz escuchó?",
            options: [
              "Una luz de antorchas y la voz de un soldado.",
              "Una luz del cielo y la voz de Jesús preguntando: \"¿Por qué me persigues?\".",
              "La luz de la luna y el canto de los pájaros.",
              "Una luz de fuego y la voz de Moisés.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué condición física tuvo Saulo durante tres días tras la visión?",
            options: [
              "Quedó mudo.",
              "Quedó ciego y no comió ni bebió.",
              "No podía caminar.",
              "Perdió la memoria.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿A quién envió el Señor para sanar a Saulo y bautizarlo?",
            options: [
              "A Pedro.",
              "A Ananías.",
              "A Felipe.",
              "A Bernabé.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué comenzó a hacer Saulo inmediatamente después de ser sanado y bautizado?",
            options: [
              "Volver a perseguir cristianos.",
              "Predicar en las sinagogas que Jesús es el Hijo de Dios.",
              "Huir a Roma.",
              "Trabajar como carpintero.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s19-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cómo escapó Saulo de Damasco cuando los judíos conspiraron para matarlo?",
            options: [
              "Se disfrazó de soldado.",
              "Los discípulos lo bajaron por el muro en una canasta por la noche.",
              "Nadó por el río.",
              "Peleó contra los guardias.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Quién presentó a Saulo a los Apóstoles cuando todos le tenían miedo?",
            options: [
              "Juan.",
              "Bernabé.",
              "Matías.",
              "María.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué milagro realizó Pedro en la ciudad de Lida con un hombre llamado Eneas?",
            options: [
              "Le dio vista.",
              "Lo sanó de una parálisis de ocho años.",
              "Lo resucitó.",
              "Multiplicó su comida.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Quién era Tabita (Dorcas) y por qué era tan amada en Jope?",
            options: [
              "Era una reina.",
              "Una discípula conocida por sus buenas obras y limosnas (hacer túnicas).",
              "Una vendedora de oro.",
              "La esposa de un centurión.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué hizo Pedro cuando llegó a la casa de Tabita tras su muerte?",
            options: [
              "Lloró con los demás y se fue.",
              "Oró, y dijo: \"Tabita, levántate\", y ella abrió los ojos y vivió.",
              "Pidió que la enterraran rápido.",
              "Dio un sermón sobre la muerte.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
]




/*
--- CUESTIONARIO VIEJO

import { title } from "process"
import type { Week } from "../types"

export const nuevoTestamentoWeeks: Week[] = [
  {
    id: 1,
    title: "Semana 1: Introducción al Nuevo Testamento",
    dateRange: "6-10 de marzo",
    lessons: [
      { id: "nt-s1-d1", title: "Introducción al Nuevo Testamento", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es el objetivo principal de Seminarios e Institutos de Religión?",
            options: [
              "Aprender historia antigua.",
              "Ayudar a los jóvenes a entender y confiar en Jesucristo y Su expiación.",
              "Memorizar todos los libros de la Biblia.",
              "Estudiar los idiomas originales de las Escrituras.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo se les llama a los primeros cuatro libros del Nuevo Testamento?",
            options: [
              "Epístolas.",
              "Libros de la Ley.",
              "Los Evangelios.",
              "Revelaciones.",
            ],
            correctAnswer: 2,
          },
          {
            id: 3,
            question: '¿Qué significa la palabra griega "evangelio"?',
            options: [
              "Mensaje antiguo.",
              "Buenas nuevas.",
              "Testimonio escrito.",
              "Ley de Dios.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué invitación ofrece el Salvador en Mateo 11:28 para recibir Su ayuda?",
            options: [
              "\"Leed las Escrituras\".",
              "\"Guardad los mandamientos\".",
              "\"Venid a mí\".",
              "\"Id por todo el mundo\".",
            ],
            correctAnswer: 2,
          },
        ]
      },
      { id: "nt-s1-d2", title: "El estudio de las Escrituras", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió el presidente Nelson a quienes se sumergen diariamente en la palabra de Dios?",
            options: [
              "Éxito económico inmediato.",
              "Poder adicional para lidiar con la tentación y la debilidad.",
              "Que nunca volverán a tener problemas.",
              "Conocimiento de todas las lenguas antiguas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué herramienta en las Escrituras aclara verdades perdidas o agrega claridad?",
            options: [
              "El diccionario bíblico.",
              "La Traducción de José Smith.",
              "Los mapas bíblicos.",
              "La concordancia.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: '¿Qué significa la abreviatura "GR" en las notas al pie de página?',
            options: [
              "Gran Revelación.",
              "Griego (idioma original de la mayoría de los manuscritos).",
              "Guía Rápida.",
              "Glosario de Referencia.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué sugiere el élder Christofferson sobre la calidad del estudio?",
            options: [
              "Leer la mayor cantidad de páginas posible.",
              "Prestar más atención al tiempo pasado en ellas que a la cantidad de texto leído.",
              "No detenerse a meditar.",
              "Estudiar sin orar.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s1-d3", title: "Aprender por el Espíritu", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la verdad más importante que el Espíritu Santo puede testificar?",
            options: [
              "La ubicación del Jardín de Edén.",
              "Que Jesús es el Cristo, el Hijo del Dios viviente.",
              "La fecha de la Segunda Venida.",
              "La genealogía de los profetas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Cómo describe el presidente Ballard el efecto de los dispositivos inteligentes en la espiritualidad?",
            options: [
              "Son herramientas esenciales para el Espíritu.",
              "Pueden bloquear la voz suave y apacible del Espíritu.",
              "No tienen ningún impacto.",
              "Ayudan a escuchar mejor la revelación.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué requiere el proceso de recibir el Espíritu Santo según el élder Bednar?",
            options: [
              "Ningún esfuerzo personal.",
              "Un sincero y constante deseo de tener Su compañía.",
              "Solo asistir a las reuniones.",
              "Ser perfecto en todo momento.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué prometió el élder Soares si ponemos el Evangelio en el centro de nuestra vida?",
            options: [
              "Que seremos los más inteligentes.",
              "Que la influencia del Espíritu transmitirá la verdad a nuestro corazón.",
              "Que no tendremos más pruebas.",
              "Que recibiremos todas las bendiciones materiales.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: '¿Qué enseñó José Smith sobre el "espíritu de revelación"?',
            options: [
              "Que es algo que asusta.",
              "Que se percibe como una repentina corriente de ideas.",
              "Que solo los profetas lo reciben.",
              "Que nunca se puede explicar.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s1-d4", title: "Aprender mediante la fe en Jesucristo", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué tipo de esfuerzo requiere aprender por la fe según el élder Bednar?",
            options: [
              "Solo intelectual.",
              "Espiritual, mental y físico (no es solo recepción pasiva).",
              "Exclusivamente físico.",
              "Solo emocional.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué demuestran los alumnos al Espíritu cuando levantan la mano para participar?",
            options: [
              "Que saben más que los demás.",
              "Su deseo de aprender y el ejercicio de su albedrío moral.",
              "Que quieren terminar rápido la clase.",
              "Que tienen mucha confianza propia.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál es la responsabilidad individual de cada miembro según el élder Bednar?",
            options: [
              "Esperar a que la Iglesia le diga todo qué hacer.",
              "Aprender y vivir las enseñanzas del Señor por sí mismos.",
              "Solo asistir a las reuniones los domingos.",
              "Criticar las enseñanzas que no le gustan.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué permite que el Espíritu comunique un mensaje personalizado al alumno?",
            options: [
              "Guardar silencio absoluto.",
              "La decisión del alumno de participar activamente.",
              "Leer solo el manual del maestro.",
              "No hacer preguntas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuál es un resultado de graduarse de Seminarios según el presidente Nelson?",
            options: [
              "Un certificado sin valor.",
              "Mayor capacidad para sobresalir en las cosas más importantes de la vida.",
              "No tener que estudiar más el Evangelio.",
              "Recibir un cargo automático en la Iglesia.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s1-d5", title: "Introducción al Dominio de la doctrina", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es uno de los dos fines principales del Dominio de la doctrina?",
            options: [
              "Memorizar fechas históricas.",
              "Ayudar a los alumnos a edificar su fundamento sobre Jesucristo.",
              "Ganar concursos de conocimiento.",
              "Aprender a debatir con otras religiones.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué significa "dominar" la doctrina en este programa?',
            options: [
              "Solo saber el número de página del versículo.",
              "Conocer, explicar y poner en práctica la doctrina en la vida diaria.",
              "Leer el pasaje una vez al mes.",
              "Repetirlo sin entender el significado.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿A qué comparó el élder Scott el memorizar un pasaje de las Escrituras?",
            options: [
              "A hacer una tarea aburrida.",
              "A crear una nueva amistad.",
              "A llenar un recipiente de agua.",
              "A aprender una fórmula matemática.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué principio NO forma parte de adquirir conocimiento espiritual?",
            options: [
              "Actuar con fe.",
              "Consultar fuentes solo en redes sociales.",
              "Analizar conceptos con perspectiva eterna.",
              "Procurar comprensión mediante fuentes divinas.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: '¿Qué advirtió el élder Andersen sobre los "torbellinos espirituales"?',
            options: [
              "Que son fenómenos meteorológicos.",
              "Que pueden desarraigar a las personas de sus cimientos espirituales.",
              "Que no afectan a los jóvenes de hoy.",
              "Que solo ocurren en ciertos países.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Semana 2: Adquirir conocimiento espiritual",
    dateRange: "13-17 de marzo",
    lessons: [
      { id: "nt-s2-d1", title: "Adquirir conocimiento espiritual, Parte 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué debemos hacer cuando surgen dudas según el élder Uchtdorf?",
            options: [
              "Ignorarlas por completo.",
              "Dudar de nuestras dudas antes que dudar de nuestra fe.",
              "Dejar de asistir a la Iglesia.",
              "Buscar respuestas en sitios anti-mormones.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Qué sucede con la "semilla de la duda honesta" si se maneja correctamente?',
            options: [
              "Destruye el testimonio.",
              "Madura hasta convertirse en un gran roble de entendimiento.",
              "Nunca produce nada.",
              "Debe ser motivo de vergüenza.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Cómo aumenta nuestra fe según el presidente Nelson?",
            options: [
              "Sin hacer nada.",
              "Cada vez que ejercemos la fe siendo obedientes, aun ante críticas.",
              "Leyendo solo libros de historia secular.",
              "Evitando pensar en Jesucristo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué prometió el Señor si actuamos con fe ante nuestras inquietudes?",
            options: [
              "Respuestas instantáneas a todo.",
              "Paz y fortaleza mientras buscamos respuestas.",
              "Que no tendremos más desafíos.",
              "Éxito material garantizado.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuál es el primer paso vital para aprender la verdad?",
            options: [
              "Aceptar lo que dice el mundo.",
              "Hacer preguntas y buscar respuestas del Señor.",
              "No cuestionar nada nunca.",
              "Leer solo noticias en internet.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d2", title: "Adquirir conocimiento espiritual, Parte 2", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa la palabra "miopía" en un contexto espiritual?',
            options: [
              "Tener visión de rayos X.",
              "Ser corto de vista o carecer de visión de futuro (eterna).",
              "Ver perfectamente el plan de Dios.",
              "No necesitar lentes.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál es el primer paso para analizar preguntas con una perspectiva eterna?",
            options: [
              "Buscar la respuesta en un buscador web.",
              "Reconocer suposiciones que puedan dar lugar a malentendidos sobre Dios.",
              "Cambiar de religión.",
              "No pensar en el Plan de Salvación.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué ayuda a Jill a sanar y encontrar paz tras la muerte de su padre?",
            options: [
              "Olvidar lo sucedido.",
              "Ampliar su perspectiva y buscar lo eterno.",
              "Criticar a los líderes.",
              "Dejar de orar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Cómo ve el presidente Oaks la vida mortal?",
            options: [
              "Como una obra de un solo acto.",
              "Como el segundo acto de una obra de tres actos.",
              "Como el principio y el fin de todo.",
              "Como un evento al azar.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué sucede si comenzamos con suposiciones mundanas?",
            options: [
              "Llegaremos a la verdad eterna.",
              "Llegaremos a conclusiones mundanas.",
              "No importa la premisa.",
              "El Espíritu nos corregirá sin esfuerzo.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d3", title: "Adquirir conocimiento espiritual, Parte 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué es peligroso buscar respuestas espirituales en internet según el élder Andersen?",
            options: [
              "Porque internet no funciona.",
              "Porque la información no pasa por un \"filtro de verdad\".",
              "Porque es mejor no usar tecnología.",
              "Porque solo hay mentiras.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué son las "fuentes divinamente señaladas"?',
            options: [
              "Cualquier libro de la biblioteca.",
              "Fuentes que Dios ha proporcionado, como Escrituras y profetas.",
              "Comentarios en redes sociales.",
              "Opiniones de famosos.",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué advirtió el élder Maxwell sobre entrevistar a quienes abandonaron la Iglesia?",
            options: [
              "Que es la mejor forma de saber la verdad.",
              "Que es como entrevistar a Judas para comprender a Jesús.",
              "Que son fuentes neutrales.",
              "Que tienen la visión más clara.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué debemos hacer si no recibimos una respuesta inmediata?",
            options: [
              "Abandonar la fe.",
              "Procurar seguridad y valor para seguir adelante con lo que ya sabemos.",
              "Dejar de estudiar.",
              "Buscar en fuentes oscuras.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d4", title: "Lucas 2:1–14 — ", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue el primer título usado por el ángel para anunciar a Jesús?",
            options: [
              "Gran Maestro.",
              "Salvador.",
              "Rey de los Judíos.",
              "Hijo de José.",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: '¿Qué significados adicionales tiene la palabra "Salvador" en griego?',
            options: [
              "Juez o Guerrero.",
              "Libertador o preservador.",
              "Líder o Guía.",
              "Creador o Formador.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Por qué necesitamos a Jesucristo según el élder Christofferson?",
            options: [
              "Para ser los más ricos.",
              "Para ser sanos y para ser santos.",
              "Para no tener problemas legales.",
              "Para ser famosos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿De qué nos salva Jesucristo si nos arrepentimos?",
            options: [
              "Solo de errores pequeños.",
              "De nuestros pecados y de la muerte física.",
              "De tener que estudiar.",
              "De cualquier consecuencia legal.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Aproximadamente cuánto duraba el viaje de Nazaret a Belén a pie?",
            options: [
              "Una hora.",
              "Por lo menos cuatro o cinco días.",
              "Un mes.",
              "Dos semanas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s2-d5", title: "Dominio de la doctrina: Lucas 2:10–12", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave del pasaje Lucas 2:10–12?",
            options: [
              "\"Amarás a tu prójimo\".",
              "\"Os ha nacido hoy... un Salvador, que es CRISTO el Señor\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí y descansad\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Por qué el nacimiento del Salvador trae "gran gozo"?',
            options: [
              "Por las fiestas mundanas.",
              "Porque Él es el Hijo de Dios y Salvador del mundo.",
              "Porque nació en un palacio.",
              "Porque trajo regalos materiales.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué principio de conocimiento espiritual nos invita a acudir a Dios primeramente?",
            options: [
              "Perspectiva eterna.",
              "Actuar con fe.",
              "Fuentes divinas.",
              "Razonamiento humano.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál es la función del Salvador en el Plan de Salvación según Lucas 2?",
            options: [
              "Solo ser un buen ejemplo histórico.",
              "Ser el Redentor y el centro del plan para nuestra salvación.",
              "Juez sin misericordia.",
              "No tiene función clara.",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué significa actuar con fe ante una duda sobre la predicación misional?",
            options: [
              "Dejar de hablar con los misioneros.",
              "Confiar en Dios y en Su mandato de compartir el Evangelio.",
              "Ignorar la pregunta.",
              "Buscar solo opiniones negativas.",
            ],
            correctAnswer: 1,
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Semana 3: Enseñanzas iniciales del ministerio del Salvador",
    dateRange: "20-24 de marzo",
    lessons: [
      { id: "nt-s3-d1", title: 'Mateo 5:13–16 — "Vosotros sois la luz del mundo"', description: "", 
        questions: [
          {
            id: 1,
            question: "¿A qué comparó el Salvador a Sus discípulos en Mateo 5:13?",
            options: [
              "A la arena del mar.",
              "A la sal de la tierra.",
              "A las nubes del cielo.",
              "A las piedras del camino.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué sucede cuando la sal se mezcla con otros elementos y pierde su sabor?",
            options: [
              "Se vuelve más valiosa.",
              "Se vuelve inservible o no sirve para nada.",
              "Se puede purificar sola.",
              "Sigue siendo útil para cocinar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué luz deben sostener en alto los discípulos según 3 Nefi 18:24?",
            options: [
              "Su propia inteligencia.",
              "La luz de Jesucristo (Su ejemplo y enseñanzas).",
              "Una antorcha de fuego.",
              "El éxito personal.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué efecto tiene nuestro ejemplo recto en los demás según Mateo 5:16?",
            options: [
              "Que nos tengan envidia.",
              "Que glorifiquen a nuestro Padre Celestial.",
              "Que nos den premios.",
              "Que se olviden de Dios.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué sucede cada vez que decidimos vivir más como el Salvador según el presidente Eyring?",
            options: [
              "Nos volvemos más populares.",
              "Nuestro testimonio se fortalecerá y sentiremos crecer Su luz.",
              "No notaremos ningún cambio.",
              "Se acaban todas nuestras deudas.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s3-d2", title: "Dominio de la doctrina: Mateo 5:14–16", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Mateo 5:14–16?",
            options: [
              "\"Yo soy el pan de vida\".",
              "\"Así alumbre vuestra luz delante de los hombres\".",
              "\"Tú eres el Cristo\".",
              "\"Pedid y recibiréis\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué recomendación se da para actuar con fe en una situación de acoso escolar?",
            options: [
              "Unirse a las burlas para encajar.",
              "Defender lo que es correcto y actuar según los valores del Evangelio.",
              "No hacer nada y alejarse.",
              "Burlarse de quien agrede.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cómo impacta ver a los demás como el Señor los ve en nuestra respuesta al prójimo?",
            options: [
              "Nos hace sentir superiores.",
              "Nos ayuda a tratarlos con respeto y evitar chistes de mal gusto.",
              "No cambia nada.",
              "Nos hace ser más críticos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Por qué el Salvador comparó a Sus discípulos con una ciudad sobre un monte?",
            options: [
              "Porque es un lugar difícil de vivir.",
              "Porque el seguimiento a Cristo es difícil de esconder y debe ser un refugio.",
              "Porque solo los ricos vivían allí.",
              "Porque está lejos de la gente.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué debemos hacer con la luz que Dios nos da?",
            options: [
              "Esconderla bajo un almud.",
              "Ponerla en el candelero para que alumbre a todos.",
              "Apagarla para que nadie nos vea.",
              "Guardarla solo para nosotros.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s3-d3", title: "Mateo 13 — Jesucristo enseñó con parábolas", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué es una parábola según el manual?",
            options: [
              "Una historia de ficción sin significado.",
              "Una historia sencilla que compara objetos o acontecimientos comunes con verdades espirituales.",
              "Un mandato legal estricto.",
              "Una profecía sobre el fin del mundo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Por qué enseñaba Jesús en parábolas?",
            options: [
              "Para confundir a Sus enemigos.",
              "Para revelar misterios a los espirituales y esconder la verdad de quienes no buscan con fe.",
              "Porque no sabía hablar de otra manera.",
              "Para entretener a las multitudes.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál es el primer paso del modelo de cuatro pasos para estudiar parábolas?",
            options: [
              "Hacer un dibujo.",
              "Buscar detalles importantes (personas, lugares, objetos).",
              "Preguntar al maestro.",
              "Comparar con noticias actuales.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: '¿Qué representa el "tesoro" en la parábola de Mateo 13:44?',
            options: [
              "Oro enterrado.",
              "El Reino de los Cielos (La Iglesia de Jesucristo).",
              "El éxito financiero.",
              "La inteligencia humana.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s3-d4", title: "Mateo 13:3–8, 18–23 — La parábola del sembrador", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué representan las semillas que cayeron junto al camino?",
            options: [
              "Personas que no saben leer.",
              "Enseñanzas que caen en un corazón endurecido o sin preparación.",
              "Semillas de mala calidad.",
              "El éxito temporal.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Qué situación describe al "terreno pedregoso" según el presidente Oaks?',
            options: [
              "Alguien que olvida sus llaves.",
              "Alguien que usa su teléfono o juega videojuegos durante la Santa Cena.",
              "Alguien que vive en una montaña.",
              "Una persona que no tiene dinero.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué representan los "espinos" que ahogan la palabra?',
            options: [
              "Plantas venenosas de Israel.",
              "Los afanes, las riquezas y los placeres de esta vida.",
              "Críticas de personas extrañas.",
              "La falta de agua.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: '¿Qué se necesita para ser "buena tierra" según el manual?',
            options: [
              "Nacer en una familia rica.",
              "Establecer prioridades y estar firmemente arraigados en el Evangelio.",
              "Leer las Escrituras una vez al mes.",
              "Ser perfecto desde el nacimiento.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué promesa se da a los que reciben la palabra en buena tierra?",
            options: [
              "Que nunca sufrirán.",
              "Que darán fruto y tendrán una cosecha abundante.",
              "Que serán famosos.",
              "Que no tendrán que trabajar más.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s3-d5", title: "Evalúa tu aprendizaje 3", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Cuál es el propósito de las lecciones "Evalúa tu aprendizaje"?',
            options: [
              "Poner una calificación numérica.",
              "Reflexionar sobre las metas, el crecimiento personal y lo aprendido.",
              "Comparar el progreso de un alumno con otro.",
              "Terminar el manual más rápido.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué habilidad de estudio ayuda a comprender mejor el lenguaje de las Escrituras?",
            options: [
              "Leer solo los encabezados.",
              "Definir palabras difíciles y reconocer principios.",
              "Memorizar números de página.",
              "Leer sin detenerse.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Por qué el Salvador llama Apóstoles según Mateo 10?",
            options: [
              "Para tener amigos cerca.",
              "Como parte del proceso de establecer Su Iglesia y dirigir Su obra.",
              "Para que escriban libros de historia.",
              "Para recolectar impuestos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué indica que una técnica de estudio ha sido efectiva?",
            options: [
              "Que el alumno terminó rápido.",
              "Que ha ayudado al alumno a conocer mejor a Jesucristo.",
              "Que el diario de estudio tiene muchos colores.",
              "Que el maestro está contento.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 4,
    title: "Semana 4: Milagros y enseñanzas del Salvador",
    dateRange: "27-31 de marzo",
    lessons: [
      { id: "nt-s4-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué noticia recibió Jesús justo antes de ir al lugar solitario?",
            options: [
              "El nacimiento de un niño.",
              "La decapitación de Juan el Bautista.",
              "Que los romanos lo buscaban.",
              "Una invitación a una fiesta.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué atributo mostró Jesús al ver a la multitud a pesar de Su propio dolor?",
            options: [
              "Indiferencia.",
              "Compasión.",
              "Enojo.",
              "Curiosidad.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué ofreció el muchacho para alimentar a la multitud?",
            options: [
              "Nada, él tenía hambre.",
              "Cinco panes de cebada y dos pececillos.",
              "Una bolsa de monedas.",
              "Toda su herencia.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué principio enseña la hermana Michelle D. Craig sobre nuestras ofrendas?",
            options: [
              "Solo las ofrendas grandes cuentan.",
              "Si damos lo que tenemos a Cristo, Él puede multiplicar nuestros esfuerzos.",
              "No debemos dar si tenemos poco.",
              "El Señor no necesita nuestra ayuda.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿A cuántos varones alimentó Jesús aproximadamente (sin contar mujeres y niños)?",
            options: [
              "500.",
              "5,000.",
              "12.",
              "100,000.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s4-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué causó que Pedro comenzara a hundirse?",
            options: [
              "Que no sabía nadar.",
              "Que sintió miedo al ver la fuerza del viento.",
              "Que Jesús lo empujó.",
              "Que la barca se rompió.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué oración corta hizo Pedro al hundirse?",
            options: [
              "\"Perdón por mis pecados\".",
              "\"¡Señor, sálvame!\".",
              "\"Ayúdame a nadar\".",
              "\"No vuelvo a salir de la barca\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál es el resultado de centrar nuestra vista en Jesucristo según el presidente Howard W. Hunter?",
            options: [
              "Que nunca tendremos problemas.",
              "Seremos capaces de caminar triunfantes sobre olas de incredulidad.",
              "Que seremos más ricos que Pedro.",
              "Que no necesitaremos barcas.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s4-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué buscaban a Jesús muchas personas al día siguiente del milagro de los panes?",
            options: [
              "Para escuchar Su doctrina.",
              "Porque habían comido el pan y se habían saciado (por razones físicas).",
              "Para arrestarlo.",
              "Porque no tenían casa.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué prometió Jesús a quien venga a Él como el Pan de Vida?",
            options: [
              "Que tendrá mucho dinero.",
              "Que nunca tendrá hambre ni sed (espiritual).",
              "Que será el líder de su nación.",
              "Que no tendrá que volver a cocinar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué significa "comer la carne y beber la sangre de Cristo" según el élder Christofferson?',
            options: [
              "Un acto literal de canibalismo.",
              "Traer al Salvador a nuestra vida y recibir el poder de Su expiación.",
              "Leer la Biblia una vez al año.",
              "Ir al templo solo una vez.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: '¿Cuál es la "labor de servicio más sublime" de la Iglesia según el élder Amado?',
            options: [
              "Dar comida en desastres naturales.",
              "Bendecir a los hombres enseñándoles la doctrina de Cristo y las ordenanzas de salvación.",
              "Construir centros deportivos.",
              "Organizar fiestas para los jóvenes.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: '¿Qué significa procurar la "santidad" en el contexto de Juan 6?',
            options: [
              "Apartarse del mundo físico por completo.",
              "Adoptar las cualidades y el carácter de Cristo.",
              "No hablar con nadie que no sea religioso.",
              "Ser perfecto inmediatamente.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s4-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quién era Nicodemo?",
            options: [
              "Un pescador del mar de Galilea.",
              "Un fariseo y principal entre los judíos.",
              "Un soldado romano.",
              "El hermano de Lázaro.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Por qué fue Nicodemo a ver a Jesús de noche?",
            options: [
              "Porque no tenía luz en su casa.",
              "Probablemente para evitar críticas de otros líderes judíos.",
              "Porque Jesús solo enseñaba de noche.",
              "Porque quería ver las estrellas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué significa "nacer de nuevo" según el élder Bednar?',
            options: [
              "Cambiar de nombre.",
              "Un nacimiento espiritual y un cambio fundamental en lo que sentimos y somos.",
              "Volver a entrar en el vientre materno.",
              "Aprender un nuevo idioma.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué dos elementos son necesarios para entrar en el Reino de Dios según Juan 3:5?",
            options: [
              "Oro y plata.",
              "Agua y Espíritu (Bautismo y Confirmación).",
              "Fe y caridad solamente.",
              "Arrepentimiento y buena conducta sin ordenanzas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Cómo describe Jesús el proceso de nacer de nuevo en relación con el viento?",
            options: [
              "Es destructivo como un huracán.",
              "Podemos ver sus efectos, aunque no siempre entendemos cuándo comienza o de dónde viene.",
              "Siempre es ruidoso y visible.",
              "Es algo que ocurre solo una vez en la vida.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s4-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Juan 3:5?",
            options: [
              "\"Porque de tal manera amó Dios al mundo\".",
              "\"El que no naciere de agua y del Espíritu no puede entrar en el reino de Dios\".",
              "\"Yo soy el camino\".",
              "\"Pedid y se os dará\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué papel cumple el Salvador en el proceso de nacer de nuevo según Alma 7:14?",
            options: [
              "Solo nos observa.",
              "Él nos ayuda a nacer de nuevo mediante Su poder.",
              "Es una tarea que debemos hacer solos.",
              "No tiene relación con el bautismo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué principio de conocimiento espiritual nos invita a analizar el bautismo en el contexto del Plan de Salvación?",
            options: [
              "Actuar con fe.",
              "Perspectiva eterna.",
              "Fuentes divinas.",
              "Razonamiento lógico.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué prometió el élder Christofferson sobre el proceso de nacer de nuevo?",
            options: [
              "Que es instantáneo.",
              "Que es más un proceso que un acontecimiento y dura toda la vida mortal.",
              "Que solo los Apóstoles pueden lograrlo.",
              "Que no requiere esfuerzo personal.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 5,
    title: "Semana 5: La fe y la Pascua de Resurrección",
    dateRange: "3-7 de abril",
    lessons: [
      { id: "nt-s5-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue la reacción de muchos discípulos ante la enseñanza del Pan de Vida?",
            options: [
              "Se bautizaron de inmediato.",
              "Dijeron: \"Dura es esta palabra\" y ya no andaban con Él.",
              "Le pidieron más pan físico.",
              "Invitaron a sus familias a escucharlo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta de Pedro a la pregunta de Jesús?",
            options: [
              "\"Iremos a los fariseos\".",
              "\"Nos quedaremos por la comida\".",
              "\"Señor, ¿a quién iremos? Tú tienes palabras de vida eterna\".",
              "\"Tenemos miedo de los romanos\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué testificó Pedro sobre la identidad de Jesús en Juan 6:69?",
            options: [
              "Que era un buen maestro.",
              "Que Él es el Santo de Dios (el Cristo, el Hijo del Dios viviente).",
              "Que la Iglesia era perfecta.",
              "Que nunca tendrían problemas.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s5-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿A qué acontecimiento del Antiguo Testamento comparó Jesús Su crucifixión?",
            options: [
              "Al arca de Noé.",
              "A Moisés levantando la serpiente en el desierto.",
              "A la entrega de las tablas de la ley.",
              "Al sacrificio de Isaac.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál es la promesa para quienes creen en Jesucristo según Juan 3:16?",
            options: [
              "Riquezas temporales.",
              "Que no se pierdan, mas tengan vida eterna.",
              "Que nunca serán perseguidos.",
              "Éxito social inmediato.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Para qué NO envió Dios a Su Hijo al mundo según Juan 3:17?",
            options: [
              "Para salvarlo.",
              "Para condenar al mundo.",
              "Para enseñar la verdad.",
              "Para sanar enfermos únicamente.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s5-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Juan 3:16?",
            options: [
              "\"Yo soy la luz del mundo\".",
              "\"Porque de tal manera amó Dios al mundo que ha dado a su Hijo Unigénito\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué principio de conocimiento espiritual nos invita a considerar conceptos en el contexto del Plan de Salvación?",
            options: [
              "Actuar con fe.",
              "Analizar conceptos con una perspectiva eterna.",
              "Fuentes seculares.",
              "Sabiduría humana.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Cómo ayuda el "actuar con fe" a Sarai en su situación difícil?',
            options: [
              "Haciéndola olvidar sus errores.",
              "Invitándola a confiar en Dios y hablar con sus padres a pesar del miedo.",
              "Dándole respuestas automáticas sin esfuerzo.",
              "Evitando cualquier consecuencia legal.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 6,
    title: "Semana 6: Autoridad y fe en Jesucristo",
    dateRange: "10-14 de abril",
    lessons: [
      { id: "nt-s6-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿De qué acusaban los fariseos a los discípulos de Jesús?",
            options: [
              "De robar comida.",
              "De quebrantar la tradición de los ancianos (lavado de manos).",
              "De no pagar impuestos.",
              "De hablar con samaritanos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué mandamiento usó Jesús para mostrar cómo las tradiciones invalidaban la palabra de Dios?",
            options: [
              "No matarás.",
              "Honrar a tu padre y a tu madre.",
              "No dirás falso testimonio.",
              "Acuérdate del día de reposo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué hacían algunas personas para evitar ayudar económicamente a sus padres?",
            options: [
              "Decían que eran pobres.",
              "Declaraban sus recursos como \"Corbán\" (ofrenda a Dios).",
              "Se mudaban a otra ciudad.",
              "Negaban conocer a sus padres.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué verdad enseñó Jesús sobre las tradiciones y los mandamientos?",
            options: [
              "Las tradiciones son más importantes.",
              "Debemos poner los mandamientos de Dios por sobre cualquier tradición mundana.",
              "Todas las tradiciones son malas.",
              "No debemos tener ninguna práctica cultural.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s6-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue el testimonio de Pedro en Mateo 16:16?",
            options: [
              "\"Tú eres un gran profeta\".",
              "\"Tú eres el Cristo, el Hijo del Dios viviente\".",
              "\"Tú eres Elías\".",
              "\"Tú eres un maestro de Dios\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Sobre qué "roca" dijo Jesús que edificaría Su Iglesia?',
            options: [
              "Sobre la persona física de Pedro.",
              "Sobre el lecho de roca de la revelación.",
              "Sobre los muros de Jerusalén.",
              "Sobre la sabiduría de los escribas.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s6-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió Jesús dar a Pedro en Mateo 16:19?",
            options: [
              "Oro y plata.",
              "Las llaves del reino de los cielos.",
              "Un palacio en Jerusalén.",
              "Victoria sobre los romanos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué poder otorgan las llaves del reino según el versículo 19?",
            options: [
              "Poder para gobernar ejércitos.",
              "Poder para atar y desatar en la tierra y en los cielos.",
              "Poder para leer mentes.",
              "Poder para viajar por el mundo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Quiénes aparecieron en el Monte de la Transfiguración con Jesús?",
            options: [
              "Adán y Eva.",
              "Moisés y Elías.",
              "Abraham e Isaac.",
              "Juan el Bautista y José.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué sucedió en el Monte de la Transfiguración según la Guía para el Estudio de las Escrituras?",
            options: [
              "Jesús fue bautizado de nuevo.",
              "Los profetas entregaron las llaves del sacerdocio a Pedro, Santiago y Juan.",
              "Se organizó el primer quórum.",
              "Jesús fue coronado rey físico.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué se requiere para llevar a cabo ordenanzas de salvación según el élder Stevenson?",
            options: [
              "Solo buena voluntad.",
              "La administración apropiada por medio de las llaves del sacerdocio.",
              "Ser mayor de edad.",
              "Leer libros de historia.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s6-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Mateo 16:15–19?",
            options: [
              "\"Tú eres el Cristo\".",
              "\"Jesús dijo: '... a ti te daré las llaves del reino'\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué son las llaves del sacerdocio según el manual?",
            options: [
              "Llaves físicas de los edificios.",
              "La autoridad para dirigir el uso del sacerdocio a favor de los hijos de Dios.",
              "Un código secreto de las Escrituras.",
              "Títulos honoríficos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Quién posee todas las llaves del sacerdocio en la tierra hoy?",
            options: [
              "Cada miembro de la Iglesia.",
              "El Presidente de la Iglesia.",
              "Únicamente los maestros de Seminario.",
              "Los historiadores bíblicos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué principio de conocimiento espiritual nos invita a actuar con fe a pesar de la incertidumbre?",
            options: [
              "Perspectiva eterna.",
              "Actuar con fe.",
              "Fuentes seculares.",
              "Lógica humana.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Por qué son vitales las llaves del sacerdocio según el élder Stevenson?",
            options: [
              "Para ser famosos.",
              "Para acceder al vehículo necesario que nos lleva de regreso a Dios (ordenanzas).",
              "Para tener más reuniones.",
              "Para aprender idiomas antiguos.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s6-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué no pudieron los discípulos sanar al hijo del hombre?",
            options: [
              "Porque no tenían medicina.",
              "Por su falta de fe.",
              "Porque el niño no quería.",
              "Porque Jesús no estaba cerca.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta del padre ante la pregunta de Jesús sobre si creía?",
            options: [
              "\"No estoy seguro\".",
              "\"Creo; ayuda mi incredulidad\".",
              "\"Tengo mucha fe\".",
              "\"Mis amigos creen por mí\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué enseñó Jesús sobre el género de espíritus que no salía fácilmente?",
            options: [
              "Que requería más fuerza física.",
              "Que con nada puede salir sino con oración y ayuno.",
              "Que debían esperar un año.",
              "Que era imposible sanarlos.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 7,
    title: "Semana 7: Compasión y servicio cristiano",
    dateRange: "13-19 de abril",
    lessons: [
      { id: "nt-s7-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es el deseo misericordioso del Salvador según Mateo 18:11?",
            options: [
              "Juzgar a los pecadores.",
              "Salvar lo que se había perdido.",
              "Castigar a los injustos.",
              "Ser el rey de los romanos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cómo se siente el Padre Celestial si uno de estos pequeños se pierde?",
            options: [
              "Indiferente.",
              "No es Su voluntad que se pierda ni uno solo.",
              "Enojado.",
              "Satisfecho.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué representa la oveja descarriada según Isaías y el manual?",
            options: [
              "Solo a las personas malas.",
              "A cada uno de nosotros.",
              "Únicamente a los fariseos.",
              "A los niños pequeños.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s7-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Lucas 2:10–12?",
            options: [
              "\"Yo soy el camino\".",
              "\"[Q]ue os ha nacido hoy... un Salvador, que es CRISTO el Señor\".",
              "\"Nacer de agua y Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué frase clave pertenece a Juan 3:5?",
            options: [
              "\"Dios amó al mundo\".",
              "\"... [E]l que no naciere de agua y del Espíritu no puede entrar en el reino de Dios\".",
              "\"Venid a mí\".",
              "\"Amarás al Señor\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál es el propósito del Dominio de la doctrina?",
            options: [
              "Ganar competencias.",
              "Comprender las enseñanzas del Salvador y explicarlas con palabras propias.",
              "Aprender griego antiguo.",
              "Criticar otras doctrinas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué actividad sugiere el manual para profundizar la comprensión de un pasaje?",
            options: [
              "Leerlo rápido 100 veces.",
              "Utilizar la estrategia \"Línea por línea\" definiendo palabras clave.",
              "No pensar en el significado.",
              "Solo marcar el versículo.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s7-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuántas veces preguntó Pedro que debía perdonar a su hermano?",
            options: [
              "Una vez.",
              "Tres veces.",
              "Hasta siete veces.",
              "Setenta veces.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta de Jesús a la pregunta de Pedro sobre el perdón?",
            options: [
              "\"Siete veces basta\".",
              "\"No te digo hasta siete, sino aun hasta setenta veces siete\".",
              "\"Solo si se arrepiente una vez\".",
              "\"No perdones nunca\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué hizo el rey cuando el siervo le rogó paciencia?",
            options: [
              "Lo metió a la cárcel.",
              "Movido a compasión, le perdonó la deuda.",
              "Le pidió que trabajara 100 años.",
              "Vendió a su familia.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál fue el pecado del siervo perdonado?",
            options: [
              "Volver a pedir dinero.",
              "No perdonar a su consiervo que le debía una cantidad pequeña (100 denarios).",
              "Escapar de la ciudad.",
              "Hablar mal del rey.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s7-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quiénes pasaron de largo al ver al hombre herido en el camino a Jericó?",
            options: [
              "Dos samaritanos.",
              "Un sacerdote y un levita.",
              "Dos soldados romanos.",
              "Sus propios hermanos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué hizo el samaritano al ver al herido?",
            options: [
              "Lo ignoró.",
              "Fue movido a misericordia, vendó sus heridas y lo llevó al mesón.",
              "Llamó a la guardia.",
              "Le robó lo poco que le quedaba.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿A quién representa simbólicamente el Buen Samaritano según el élder Andersen?",
            options: [
              "A Pedro.",
              "A Jesucristo, enviado a sanar a los quebrantados de corazón.",
              "A un buen vecino.",
              "Al intérprete de la ley.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s7-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿En qué casa entró Jesús al llegar a una aldea (Betania)?",
            options: [
              "En la de Pedro.",
              "En la de una mujer llamada Marta.",
              "En la de Zaqueo.",
              "En la de Judas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué hacía María mientras Jesús enseñaba?",
            options: [
              "Ayudaba con la limpieza.",
              "Sentada a los pies de Jesús, oía Su palabra.",
              "Dormía en otra habitación.",
              "Buscaba comida.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿De qué se quejó Marta ante el Señor?",
            options: [
              "De que Jesús hablaba mucho.",
              "De que su hermana la dejaba servir sola.",
              "De que no había suficiente comida.",
              "De que los discípulos eran ruidosos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál fue la respuesta de Jesús a Marta?",
            options: [
              "\"Ayuda a Marta, María\".",
              "\"Marta... turbada estás con muchas cosas... pero una sola cosa es necesaria\".",
              "\"No cocines más\".",
              "\"Idos de mi vista\".",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 8,
    title: "Semana 8: La luz del mundo y el Buen Pastor",
    dateRange: "20-26 de abril",
    lessons: [
      { id: "nt-s8-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué Jesús asistió inicialmente en secreto a la Fiesta de los Tabernáculos en Jerusalén?",
            options: [
              "Porque no tenía dinero para el viaje.",
              "Porque muchos en Jerusalén querían matarlo.",
              "Porque quería sorprender a Sus Apóstoles.",
              "Porque no le gustaban las fiestas públicas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué enseñó Jesús en Juan 7:17 sobre cómo saber si Su doctrina es de Dios?",
            options: [
              "Estudiando historia antigua.",
              "Haciendo la voluntad del Padre Celestial.",
              "Esperando una señal del cielo sin actuar.",
              "Debatiendo con los fariseos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué impacto tuvo la enseñanza de Jesús en los guardias enviados a arrestarlo?",
            options: [
              "Se burlaron de Él.",
              "Lo arrestaron inmediatamente.",
              "Dijeron: “¡Jamás hombre alguno ha hablado como este hombre!”.",
              "Se quedaron dormidos durante el discurso.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué recordaba el pueblo de Israel durante la Fiesta de los Tabernáculos?",
            options: [
              "La creación del mundo.",
              "Que Dios bendijo a Su pueblo durante 40 años en el desierto.",
              "El nacimiento de Moisés.",
              "La construcción del Templo de Salomón.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s8-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave del pasaje Juan 7:17?",
            options: [
              "\"Yo soy el pan de vida\".",
              "\"El que quiera hacer la voluntad de él conocerá si la doctrina es de Dios\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí y yo os haré descansar\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué enseñó el presidente Dallin H. Oaks sobre el proceso de adquirir un testimonio?",
            options: [
              "Que es un evento pasivo y automático.",
              "Que no es algo pasivo, sino un proceso en el que se espera que hagamos algo.",
              "Que solo los adultos pueden tenerlo.",
              "Que se recibe únicamente al nacer.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué principio ayuda a un alumno frustrado que siente que aún no tiene un testimonio?",
            options: [
              "Dejar de intentar.",
              "Seguir viviendo las enseñanzas aunque el testimonio no llegue de inmediato.",
              "Buscar respuestas en redes sociales.",
              "Criticar la doctrina.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál es un obstáculo común para obtener un testimonio según el manual?",
            options: [
              "Hacer demasiadas preguntas.",
              "La falta de disposición para actuar con fe en los mandamientos.",
              "Leer el Libro de Mormón.",
              "Orar con sinceridad.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué prometió el presidente Uchtdorf sobre el testimonio personal del Evangelio?",
            options: [
              "Que es opcional.",
              "Que es más importante que cualquier cosa que se pueda obtener en esta vida.",
              "Que no requiere ningún esfuerzo.",
              "Que se pierde si uno tiene dudas.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s8-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué los escribas trajeron a la mujer ante Jesús de forma pública?",
            options: [
              "Para pedirle consejo sincero.",
              "Para poner a Jesús en una situación difícil y acusarlo.",
              "Porque querían que ella fuera sanada.",
              "Para celebrar una fiesta.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué atributo demostró Jesús al no condenar inmediatamente a la mujer?",
            options: [
              "Indiferencia hacia el pecado.",
              "Misericordia y paciencia divina.",
              "Miedo a los fariseos.",
              "Desconocimiento de la ley.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál fue la invitación final de Jesús a la mujer en Juan 8:11?",
            options: [
              "\"Eres perfecta tal como eres\".",
              "\"Vete, y no peques más\".",
              "\"Vuelve con tus acusadores\".",
              "\"Olvida lo que pasó\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: '¿Qué significa "misericordia" según el manual?',
            options: [
              "Justicia estricta.",
              "Trato compasivo más allá de lo que una persona merece.",
              "Ignorar las consecuencias de los actos.",
              "Castigar a los demás.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s8-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué hace el Buen Pastor por Sus ovejas según Juan 10:11?",
            options: [
              "Las abandona cuando viene el lobo.",
              "Su vida da por las ovejas.",
              "Les cobra por cuidarlas.",
              "Solo cuida a las ovejas más fuertes.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Cómo reacciona el "asalariado" cuando ve venir al lobo?',
            options: [
              "Defiende a las ovejas con valor.",
              "Huye y deja a las ovejas porque no son suyas.",
              "Llama al dueño del rebaño.",
              "Se esconde con las ovejas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué significa la frase de Jesús: "Yo soy la puerta de las ovejas"?',
            options: [
              "Que Él es un edificio físico.",
              "Que Él es el único camino para entrar al Reino de los Cielos.",
              "Que no permite que nadie pase.",
              "Que la puerta está cerrada para los pecadores.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 9,
    title: "Semana 9: Parábolas de misericordia y poder sobre la muerte",
    dateRange: "27 de abril-3 de mayo",
    lessons: [
      { id: "nt-s9-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué murmuraban los fariseos contra Jesús en Lucas 15?",
            options: [
              "Porque Jesús no pagaba impuestos.",
              "Porque Jesús recibía a los pecadores y comía con ellos.",
              "Porque Jesús no quería hablar con ellos.",
              "Porque Jesús estaba cansado.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cómo reacciona el Padre Celestial cuando un pecador se arrepiente?",
            options: [
              "Con indiferencia.",
              "Hay gran gozo en el cielo.",
              "Pide una compensación económica.",
              "Recuerda el pecado para siempre.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s9-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué demoró Jesús Su viaje a Betania después de saber que Lázaro estaba enfermo?",
            options: [
              "Porque estaba muy lejos.",
              "Para que el milagro glorificara a Dios y los discípulos creyeran.",
              "Porque se olvidó del mensaje.",
              "Porque tenía miedo de morir.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuánto tiempo llevaba Lázaro en la tumba cuando Jesús llegó?",
            options: [
              "Unas pocas horas.",
              "Un día.",
              "Cuatro días.",
              "Una semana.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué verdad enseñó Jesús a Marta en Juan 11:25?",
            options: [
              "\"El hombre no debe morir\".",
              "\"Yo soy la resurrección y la vida\".",
              "\"Lázaro dormirá para siempre\".",
              "\"Marta, no llores más\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué detalle muestra la profunda compasión del Salvador en este relato?",
            options: [
              "Que llegó tarde.",
              "Que Jesús lloró con María y Marta.",
              "Que pidió quitar la piedra.",
              "Que llamó a Lázaro en voz alta.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s9-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál fue la reacción de los principales sacerdotes al saber del milagro?",
            options: [
              "Se convirtieron todos.",
              "Conspiraron para matar a Jesús y también a Lázaro.",
              "Hicieron una fiesta en honor a Lázaro.",
              "Ignoraron la noticia.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué invitación hizo el Salvador a Lázaro para que saliera de la tumba?",
            options: [
              "\"¡Levántate, mi amigo!\".",
              "\"¡Lázaro, ven fuera!\".",
              "\"Camina hacia la luz\".",
              "\"Despierta de tu sueño\".",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 10,
    title: "Semana 10: Discipulado y sacrificio",
    dateRange: "4-10 de mayo",
    lessons: [
      { id: "nt-s10-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué documento es central para entender la doctrina de la familia hoy?",
            options: [
              "El diccionario bíblico.",
              "La Familia: Una Proclamación para el Mundo.",
              "El manual de historia de la Iglesia.",
              "Un libro de leyes civiles.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Quién estableció la relación del matrimonio según Mateo 19?",
            options: [
              "Los gobiernos humanos.",
              "Dios, desde la creación del mundo.",
              "Los filósofos antiguos.",
              "Las tradiciones culturales.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué enseñó el presidente Dallin H. Oaks sobre los problemas matrimoniales?",
            options: [
              "Que el divorcio es la única solución rápida.",
              "Que para la mayoría, el remedio no es el divorcio sino el arrepentimiento.",
              "Que no tienen solución.",
              "Que es mejor no casarse.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s10-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué pregunta le hizo el joven rico al Salvador?",
            options: [
              "\"¿Cómo puedo ser más rico?\".",
              "\"¿Qué bien haré para tener la vida eterna?\".",
              "\"¿Quién es el más grande?\".",
              "\"¿Dónde vives?\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué pregunta debemos hacernos todos según el presidente Harold B. Lee?",
            options: [
              "\"¿Por qué me pasa esto?\".",
              "\"¿Qué más me falta?\".",
              "\"¿Cuándo terminará la clase?\".",
              "\"¿Soy mejor que mi prójimo?\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál fue la reacción de Jesús al mirar al joven rico según Marcos 10:21?",
            options: [
              "Lo juzgó severamente.",
              "Mirándole, le amó.",
              "Lo ignoró.",
              "Se rió de sus riquezas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué invitó el Salvador al joven a hacer para ser perfecto?",
            options: [
              "Comprar más tierras.",
              "Vender lo que tenía, darlo a los pobres y seguirle.",
              "Estudiar con los fariseos.",
              "Irse a vivir al desierto.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Por qué se fue triste el joven?",
            options: [
              "Porque no entendió la respuesta.",
              "Porque tenía muchas posesiones (y no quiso dejarlas).",
              "Porque Jesús no lo saludó.",
              "Porque el camino era largo.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s10-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué representa la hipérbole de "un camello pasando por el ojo de una aguja"?',
            options: [
              "Una puerta pequeña en Jerusalén.",
              "La gran dificultad de que quienes confían en las riquezas entren al reino de Dios.",
              "Un truco de magia.",
              "Una técnica de costura antigua.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 11,
    title: "Semana 11: La última semana del ministerio público",
    dateRange: "11-17 de mayo",
    lessons: [
      { id: "nt-s11-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa la palabra hebrea "Hosanna" que la multitud exclamaba?',
            options: [
              "Rey de reyes.",
              "Sálvanos (usada en alabanza y súplica).",
              "Bendito sea el Señor.",
              "El Mesías ha llegado.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué profecía del Antiguo Testamento se cumplió cuando Jesús entró montado en un pollino?",
            options: [
              "Isaías 53:3.",
              "Zacarías 9:9.",
              "Salmos 22:1.",
              "Malaquías 3:1.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál dijo Jesús que era el propósito completo de Su venida a la tierra según Juan 12:23–33?",
            options: [
              "Organizar un ejército contra Roma.",
              "Llevar a cabo Su sacrificio expiatorio y atraer a todos hacia Él.",
              "Establecer un gobierno político en Jerusalén.",
              "Viajar a otras naciones para predicar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué simbolizan tradicionalmente las ramas de palmera usadas por la multitud?",
            options: [
              "Pobreza y humildad.",
              "Victoria, triunfo y gozo en el Señor.",
              "Una ofrenda de comida.",
              "El inicio de la cosecha.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s11-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué hizo Jesús al entrar al templo en Jerusalén (Mateo 21:12)?",
            options: [
              "Se sentó a descansar.",
              "Echó fuera a todos los que vendían y compraban allí.",
              "Pidió una ofrenda de oro.",
              "Organizó una fiesta.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Cuál es el "grande y el primer mandamiento" según la respuesta de Jesús a los fariseos?',
            options: [
              "No matarás.",
              "Amarás al Señor tu Dios con todo tu corazón, alma y mente.",
              "Guardarás el día de reposo.",
              "Pagarás tus diezmos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Cuál es el segundo mandamiento, que es "semejante" al primero?',
            options: [
              "Honrarás a tu padre.",
              "No dirás falso testimonio.",
              "Amarás a tu prójimo como a ti mismo.",
              "Irás al templo regularmente.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué dijo Jesús que depende de estos dos grandes mandamientos?",
            options: [
              "Solo la salvación de los judíos.",
              "Toda la ley y los profetas.",
              "El éxito material de la nación.",
              "La construcción del nuevo templo.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s11-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave para el pasaje Mateo 22:36–39?",
            options: [
              "\"Venid a mí y yo os haré descansar\".",
              "\"Amarás al Señor tu Dios […]. Amarás a tu prójimo\".",
              "\"Tú eres el Cristo\".",
              "\"Nacer de agua y del Espíritu\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cómo demostramos que amamos a Dios sobre todas las cosas?",
            options: [
              "Solo diciéndolo en voz alta.",
              "Guardando Sus mandamientos y poniéndolo a Él primero.",
              "Comparándonos con los demás.",
              "Evitando cualquier contacto con el mundo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Quién es nuestro "prójimo" según las enseñanzas del Salvador?',
            options: [
              "Solo nuestra familia inmediata.",
              "Solo los miembros de nuestra Iglesia.",
              "Todos los hijos de Dios, incluyendo extraños y enemigos.",
              "Las personas que viven en nuestra misma calle.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué principio de conocimiento espiritual nos invita a actuar con fe para amar a alguien difícil?",
            options: [
              "Analizar con perspectiva eterna.",
              "Actuar con fe.",
              "Fuentes divinamente señaladas.",
              "Ignorar el problema.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s11-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa el término "hipócrita" en el contexto de las enseñanzas de Jesús?',
            options: [
              "Una persona que no sabe leer.",
              "Alguien que finge ser algo que no es, especialmente en lo religioso.",
              "Un soldado romano.",
              "Un pecador que no quiere cambiar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Por qué reprendió Jesús a los escribas y fariseos en Mateo 23?",
            options: [
              "Por ser demasiado pobres.",
              "Por hacer sus obras para ser vistos por los hombres.",
              "Por no saberse las leyes.",
              "Por viajar demasiado.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué metáfora usó Jesús para describir a los hipócritas que parecían limpios por fuera?",
            options: [
              "Un árbol sin frutos.",
              "Sepulcros blanqueados (hermosos por fuera, pero llenos de huesos por dentro).",
              "Una red de pesca rota.",
              "Una lámpara sin aceite.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál es la advertencia de Jesús para los que se ensalzan a sí mismos?",
            options: [
              "Que serán reyes.",
              "Que serán humillados.",
              "Que no pasará nada.",
              "Que recibirán más dinero.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 12,
    title: "Semana 12: Parábolas del reino y exhortaciones apostólicas",
    dateRange: "18-24 de mayo",
    lessons: [
      { id: "nt-s12-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿A qué comparó Pablo su vida pasada y sus logros mundanos frente a conocer a Cristo?",
            options: [
              "A un gran tesoro.",
              "A pérdida y a basura.",
              "A una corona de oro.",
              "A un camino fácil.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál era el objetivo principal de Pablo según Filipenses 3:10?",
            options: [
              "Volverse el hombre más rico.",
              "Conocer a Cristo y el poder de Su resurrección.",
              "Ser el líder de los fariseos.",
              "Viajar a Roma por diversión.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué actitud recomendó Pablo hacia los errores o el pasado?",
            options: [
              "Recordarlos siempre con amargura.",
              "Olvidar lo que queda atrás y extenderse a lo que está delante.",
              "Dejar de esforzarse.",
              "Culpar a los demás.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: '¿Cuál es el "premio" que Pablo buscaba alcanzar?',
            options: [
              "Una medalla de plata.",
              "El supremo llamamiento de Dios en Cristo Jesús.",
              "La aprobación de los romanos.",
              "Una vida larga en la tierra.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: '¿Dónde dijo Pablo que está nuestra verdadera "ciudadanía"?',
            options: [
              "En Jerusalén.",
              "En Roma.",
              "En los cielos.",
              "En cada nación del mundo.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s12-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió Pablo que guardaría nuestros corazones y pensamientos?",
            options: [
              "El dinero ahorrado.",
              "La paz de Dios, que sobrepasa todo entendimiento.",
              "El conocimiento de idiomas.",
              "La fuerza física.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál es el secreto de Pablo para estar contento en cualquier situación?",
            options: [
              "Tener mucha comida siempre.",
              "Todo lo puedo en Cristo que me fortalece.",
              "No tener ningún desafío.",
              "Ignorar sus problemas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué tipo de cosas nos invitó Pablo a pensar en Filipenses 4:8?",
            options: [
              "Solo cosas negativas para estar prevenidos.",
              "Todo lo que es verdadero, honesto, justo, puro y virtuoso.",
              "En los errores de los vecinos.",
              "En el éxito mundano.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cómo debemos presentar nuestras peticiones delante de Dios según Pablo?",
            options: [
              "Con enojo.",
              "Mediante oración y ruego, con acción de gracias.",
              "Solo una vez al año.",
              "Sin esperanza.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s12-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué representan las lámparas en la parábola según el manual?",
            options: [
              "Nuestra ropa.",
              "Nuestros testimonios y la preparación espiritual.",
              "Objetos de decoración.",
              "La riqueza material.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Por qué a cinco de las vírgenes se les llamó "insensatas"?',
            options: [
              "Porque no tenían lámparas.",
              "Porque no tomaron aceite consigo en sus vasijas.",
              "Porque se quedaron dormidas.",
              "Porque no querían ir a la fiesta.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué representa el "aceite" para nuestras lámparas espirituales?',
            options: [
              "Solo la lectura de libros seculares.",
              "Las gotas de discipulado y obediencia acumuladas día a día.",
              "Dinero para la Iglesia.",
              "La fe de nuestros padres.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Por qué las vírgenes prudentes no pudieron compartir su aceite?",
            options: [
              "Porque eran egoístas.",
              "Porque la preparación espiritual no se puede compartir en el último momento.",
              "Porque el aceite se evaporó.",
              "Porque no les gustaban las otras vírgenes.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s12-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué le dijo el señor al siervo fiel que duplicó su talento?",
            options: [
              "\"¿Por qué no ganaste más?\".",
              "\"Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré\".",
              "\"Vuelve a trabajar\".",
              "\"Dame todo el dinero ahora\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Por qué fue reprendido el siervo que recibió un solo talento?",
            options: [
              "Por perder el dinero.",
              "Porque por miedo lo escondió en la tierra y no hizo nada con él.",
              "Porque era pobre.",
              "Porque no sabía contar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cómo separará el Rey a las personas en el juicio final (Mateo 25:31–33)?",
            options: [
              "Por su nacionalidad.",
              "Como el pastor separa las ovejas de los cabritos.",
              "Por su inteligencia académica.",
              "Por la cantidad de libros leídos.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 13,
    title: "Semana 13: La Pascua y la institución de la Santa Cena",
    dateRange: "25-31 de mayo",
    lessons: [
      { id: "nt-s13-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué lección de liderazgo dio Jesús al lavar los pies de Sus discípulos?",
            options: [
              "Que los líderes deben ser servidos.",
              "Que el que es el mayor debe ser el servidor de todos.",
              "Que no deben usar zapatos.",
              "Que la higiene es lo más importante.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál fue la reacción inicial de Pedro cuando Jesús intentó lavarle los pies?",
            options: [
              "Se alegró mucho.",
              "Se negó diciendo: \"No me lavarás los pies jamás\".",
              "Empezó a llorar.",
              "Salió corriendo de la habitación.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué "mandamiento nuevo" dio Jesús a Sus Apóstoles esa noche?',
            options: [
              "Que debían ayunar más.",
              "Que se amaran unos a otros como Él los ha amado.",
              "Que debían viajar a Roma.",
              "Que no debían hablar con extraños.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cómo sabrán todos que somos discípulos de Cristo según Juan 13:35?",
            options: [
              "Por nuestra ropa especial.",
              "Si tenemos amor los unos por los otros.",
              "Por cuánto sabemos de las Escrituras.",
              "Por los cargos que tenemos en la Iglesia.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s13-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué representa el pan en la Santa Cena?",
            options: [
              "Solo una comida común.",
              "El cuerpo del Salvador.",
              "El maná del desierto.",
              "La tierra de Israel.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué representa el vino (o agua) en la Santa Cena?",
            options: [
              "Un símbolo de alegría.",
              "La sangre de Cristo, que es derramada por muchos para remisión de pecados.",
              "El agua del bautismo solamente.",
              "La lluvia del cielo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Con qué propósito mandó Jesús participar de la Santa Cena?",
            options: [
              "Para no tener hambre física.",
              "En memoria de Él (Su sacrificio y vida).",
              "Como una tradición sin significado.",
              "Solo para los Apóstoles antiguos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué convenio renovamos al participar de la Santa Cena?",
            options: [
              "El convenio de ser ricos.",
              "Nuestros convenios bautismales.",
              "Un convenio de silencio.",
              "Un contrato laboral.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s13-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Lucas 22:19–20?",
            options: [
              "\"Amarás a tu prójimo\".",
              "Jesucristo mandó participar de la Santa Cena “en memoria de [Él]”.",
              "\"Nacer de agua y del Espíritu\".",
              "\"Tú eres el Cristo\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué sucede si participamos de la Santa Cena con un corazón sincero?",
            options: [
              "Nos volvemos perfectos al instante.",
              "Invitamos el poder de la Expiación para limpiarnos y fortalecernos.",
              "No necesitamos volver a orar.",
              "Se eliminan todas nuestras pruebas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cómo podemos prepararnos para la Santa Cena durante la semana?",
            options: [
              "Ignorando nuestros errores.",
              "Arrepintiéndonos y buscando formas de recordar al Salvador.",
              "Comprando ropa nueva cada vez.",
              "Solo pensando en ella el domingo por la mañana.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál es el beneficio de tener el Espíritu siempre con nosotros?",
            options: [
              "Seremos mejores deportistas.",
              "Recibiremos guía, consuelo y protección espiritual.",
              "No cometeremos ningún error nunca más.",
              "Sabremos los números de la lotería.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s13-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué evento se celebraba en Jerusalén cuando los principales sacerdotes conspiraron para matar a Jesús?",
            options: [
              "La Fiesta de los Tabernáculos.",
              "La Pascua.",
              "El Pentecostés.",
              "La Dedicación.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Quién fue la persona que ungió a Jesús con un perfume muy costoso en Betania?",
            options: [
              "María Magdalena.",
              "Una mujer (identificada en otros evangelios como María de Betania).",
              "Marta.",
              "Una mujer samaritana.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál fue la reacción de Judas Iscariote ante el gasto del perfume?",
            options: [
              "Se alegró por el honor a Jesús.",
              "Se indignó, sugiriendo que el dinero debió darse a los pobres.",
              "No dijo nada.",
              "Pidió un poco del perfume.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Por cuántas piezas de plata aceptó Judas entregar al Salvador?",
            options: [
              "10.",
              "50.",
              "30.",
              "100.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s13-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué principio de la Santa Cena ayuda a renovar nuestros convenios?",
            options: [
              "El ayuno previo.",
              "Participar en memoria del cuerpo y la sangre del Salvador.",
              "Escuchar el coro.",
              "La limpieza del edificio.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Cuál es un resultado de "velar" espiritualmente según la parábola de las diez vírgenes?',
            options: [
              "No tener sueño físico.",
              "Estar preparados para la Segunda Venida del Señor.",
              "Saber la fecha exacta del fin del mundo.",
              "Ser mejores que los demás.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cómo demostramos amor al Salvador según Sus enseñanzas en la Última Cena?",
            options: [
              "Solo con palabras.",
              "Guardando Sus mandamientos.",
              "Con sacrificios de animales.",
              "Viajando a Jerusalén.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué tipo de liderazgo enseñó Jesús al lavar los pies de Sus Apóstoles?",
            options: [
              "Liderazgo autoritario.",
              "Liderazgo de servicio.",
              "Liderazgo político.",
              "Liderazgo militar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué invita el Señor a hacer a quienes han fallado en sus metas espirituales?",
            options: [
              "Rendirse.",
              "Arrepentirse y seguir intentándolo.",
              "Esperar al próximo año.",
              "Sentirse culpables para siempre.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 14,
    title: "Semana 14: Las enseñanzas finales del Salvador",
    dateRange: "5-9 de junio",
    lessons: [
      { id: "nt-s14-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué consuelo dio Jesús a Sus discípulos ante Su partida en Juan 14:1?",
            options: [
              "\"No estéis tristes\".",
              "\"No se turbe vuestro corazón; creéis en Dios, creed también en mí\".",
              "\"Volveré mañana\".",
              "\"Id a vuestras casas\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Quién dijo Jesús que es el único camino para llegar al Padre?",
            options: [
              "Moisés.",
              "Él mismo (Jesucristo).",
              "Pedro.",
              "Juan el Bautista.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿A qué comparó Jesús Su relación con los discípulos en Juan 15?",
            options: [
              "A un pastor y ovejas.",
              "A la vid y los pámpanos (ramas).",
              "A una red y peces.",
              "A un sembrador y semillas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué sucede con el pámpano que no permanece en la vid?",
            options: [
              "Crece más fuerte.",
              "No puede llevar fruto por sí mismo.",
              "Se convierte en vid.",
              "Da frutos amargos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué prometió Jesús si Sus palabras permanecen en nosotros?",
            options: [
              "Riquezas terrenales.",
              "Que pediremos lo que queramos y nos será hecho.",
              "Que no tendremos pruebas.",
              "Que seremos reyes.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s14-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué prometió enviar el Salvador si Sus discípulos guardaban Sus mandamientos?",
            options: [
              "Un ejército ángel.",
              "Otro Consolador (el Espíritu Santo).",
              "Muchos tesoros.",
              "Un nuevo profeta.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cómo llamó Jesús a Sus discípulos si hacían lo que Él les mandaba?",
            options: [
              "Siervos útiles.",
              "Amigos.",
              "Alumnos.",
              "Seguidores.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué clase de paz ofrece Cristo a diferencia de la paz del mundo?",
            options: [
              "Una paz sin conflictos.",
              "Su paz propia que sobrepasa el entendimiento y calma el corazón.",
              "Una paz temporal.",
              "Paz política.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál es el mandamiento de Jesús en Juan 15:12?",
            options: [
              "Que ayunen mucho.",
              "Que se amen unos a otros como Él los ha amado.",
              "Que lean la ley.",
              "Que bauticen a todos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué prometió Jesús que haría el Espíritu Santo por los discípulos?",
            options: [
              "Les daría dinero.",
              "Les enseñaría todas las cosas y les recordaría Sus palabras.",
              "Les haría inmortales en ese momento.",
              "Les diría el futuro político.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s14-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué dijo Jesús que era conveniente que Él se fuera?",
            options: [
              "Porque estaba cansado.",
              "Porque si no se iba, el Consolador (Espíritu Santo) no vendría a ellos.",
              "Porque tenía que visitar otros mundos.",
              "Porque quería que ellos trabajaran solos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿De qué convencerá el Espíritu Santo al mundo cuando venga?",
            options: [
              "De historia.",
              "De pecado, de justicia y de juicio.",
              "De geografía sagrada.",
              "De política romana.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Cuál es la función del "Espíritu de Verdad" mencionada en Juan 16:13?',
            options: [
              "Castigar a los incrédulos.",
              "Guiar a los discípulos a toda la verdad.",
              "Escribir libros.",
              "Construir templos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿A quién glorificará el Espíritu Santo según las palabras de Jesús?",
            options: [
              "A Sí mismo.",
              "A Jesucristo.",
              "A los Apóstoles.",
              "A los líderes locales.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué prometió Jesús sobre la tristeza de los discípulos tras Su partida?",
            options: [
              "Que duraría para siempre.",
              "Que su tristeza se convertiría en gozo.",
              "Que no sentirían tristeza.",
              "Que la tristeza es pecado.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s14-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿A quién se dirigió Jesús en Su gran oración de Juan 17?",
            options: [
              "A los Apóstoles.",
              "A Su Padre Celestial.",
              "A la multitud.",
              "A los ángeles.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué pidió Jesús específicamente para Sus discípulos en cuanto a su unidad?",
            options: [
              "Que vivan en la misma casa.",
              "Que sean uno, así como el Padre y el Hijo son uno.",
              "Que piensen exactamente igual en todo.",
              "Que no hablen con extraños.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué ruego hizo Jesús al Padre respecto a los discípulos y el mundo?",
            options: [
              "Que los quite del mundo.",
              "Que los guarde del mal (del maligno).",
              "Que el mundo los ame.",
              "Que el mundo les de premios.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Por qué medio pidió Jesús que Sus discípulos fueran santificados?",
            options: [
              "Por el agua.",
              "Por la verdad (la palabra de Dios).",
              "Por el sacrificio de animales.",
              "Por el dinero.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Por quiénes más oró Jesús además de por los Apóstoles presentes?",
            options: [
              "Solo por Sus familiares.",
              "Por los que habrían de creer en Él por la palabra de ellos (nosotros).",
              "Por los romanos.",
              "Por los enemigos de la Iglesia.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s14-d5", title: "Lección 5", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave del pasaje Juan 17:3?",
            options: [
              "\"Yo soy el camino\".",
              "\"Y esta es la vida eterna: que te conozcan a ti […] y a Jesucristo\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Tú eres el Cristo\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: '¿Cómo define este pasaje la "vida eterna"?',
            options: [
              "Vivir para siempre sin hacer nada.",
              "Conocer al único Dios verdadero y a Jesucristo.",
              "No morir físicamente nunca.",
              "Tener muchas posesiones en el cielo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Qué tipo de "conocimiento" implica conocer a Dios según este contexto?',
            options: [
              "Solo saber datos biográficos.",
              "Tener una relación personal y ser como Él.",
              "Memorizar diccionarios.",
              "Saber historia antigua.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Por qué es vital conocer a Jesucristo para obtener la vida eterna?",
            options: [
              "Porque es un requisito académico.",
              "Porque Él es quien envió el Padre para salvarnos y darnos el ejemplo.",
              "Porque no hay otros libros que leer.",
              "Porque es una tradición social.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué principio de conocimiento espiritual nos ayuda a buscar este conocimiento?",
            options: [
              "Ignorar las dudas.",
              "Actuar con fe y buscar en fuentes divinamente señaladas.",
              "Esperar a que alguien nos lo diga.",
              "Consultar solo redes sociales.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 15,
    title: "Semana 15: Getsemaní y el arresto del Salvador",
    dateRange: "12-16 de junio",
    lessons: [
      { id: "nt-s15-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué le advirtió Jesús a Pedro que sucedería antes de que el gallo cantara?",
            options: [
              "Que Pedro huiría a Galilea.",
              "Que Pedro lo negaría tres veces.",
              "Que Pedro sería arrestado.",
              "Que Pedro se quedaría dormido.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué hizo Pedro inmediatamente después de negar al Salvador por tercera vez y que el gallo cantara?",
            options: [
              "Se fue a pescar al mar.",
              "Salió fuera y lloró amargamente.",
              "Fue a pedir perdón a los sacerdotes.",
              "Se escondió en el jardín.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: '¿Cuál fue la misión que Jesús le dio a Pedro después de que este se "convirtiera" (Lucas 22:32)?',
            options: [
              "Construir un templo.",
              "Fortalecer a sus hermanos.",
              "Escribir un libro.",
              "Viajar a Roma de inmediato.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Dónde se encontraba Pedro cuando negó al Salvador?",
            options: [
              "En el patio del sumo sacerdote.",
              "En el monte de los Olivos.",
              "En el templo de Jerusalén.",
              "En la barca en el mar.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué atributo mostró Jesús al orar por Pedro para que su fe no faltara?",
            options: [
              "Indiferencia.",
              "Amor y preocupación individual por Sus discípulos.",
              "Enojo por la futura traición.",
              "Miedo a quedarse solo.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s15-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: '¿Qué significa el nombre "Getsemaní"?',
            options: [
              "Lugar de descanso.",
              "Prensa de aceite.",
              "Monte de oración.",
              "Jardín de flores.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué pidió Jesús al Padre mientras oraba en el jardín?",
            options: [
              "Que destruyera a Sus enemigos.",
              "\"Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú\".",
              "Que los ángeles lo rescataran.",
              "Que Sus discípulos fueran castigados.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué detalle físico único del sufrimiento de Jesús registra Lucas (Lucas 22:44)?",
            options: [
              "Que no podía caminar.",
              "Que Su sudor era como grandes gotas de sangre que caían hasta la tierra.",
              "Que perdió la voz.",
              "Que se quedó dormido por el cansancio.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Por qué fue necesario el sufrimiento de Jesús en Getsemaní según el Plan de Salvación?",
            options: [
              "Para demostrar que era muy fuerte.",
              "Para tomar sobre Sí los pecados, dolores y aflicciones de toda la humanidad.",
              "Para que los discípulos tuvieran qué escribir.",
              "Para evitar la crucifixión.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Quién apareció del cielo para fortalecer al Salvador durante Su agonía?",
            options: [
              "Moisés y Elías.",
              "Un ángel.",
              "Juan el Bautista.",
              "Sus padres terrenales.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s15-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué estaban haciendo Pedro, Santiago y Juan mientras Jesús sufría en el jardín?",
            options: [
              "Orando fervientemente con Él.",
              "Durmiendo a causa de la tristeza.",
              "Preparando la huida.",
              "Discutiendo con los guardias.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué invitación hizo Jesús a Sus discípulos al encontrarlos dormidos?",
            options: [
              "\"Idos a vuestras casas\".",
              "\"Velad y orad, para que no entréis en tentación\".",
              "\"Haced una fogata\".",
              "\"Buscad a Judas\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cómo describió Jesús la condición de Sus discípulos esa noche?",
            options: [
              "\"Sois malos seguidores\".",
              "\"El espíritu a la verdad está dispuesto, pero la carne es débil\".",
              "\"Estáis llenos de fe\".",
              "\"Tenéis miedo de la oscuridad\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuántas veces se apartó Jesús para orar la misma petición en el jardín?",
            options: [
              "Una vez.",
              "Tres veces.",
              "Siete veces.",
              "Diez veces.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué actitud demostró el Salvador al someterse a la voluntad del Padre?",
            options: [
              "Resistencia.",
              "Obediencia perfecta y amor infinito.",
              "Tristeza sin esperanza.",
              "Confusión.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s15-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Con qué señal entregó Judas Iscariote al Salvador a la multitud armada?",
            options: [
              "Señalándole con la mano.",
              "Con un beso.",
              "Diciendo Su nombre en voz alta.",
              "Entregándole una bolsa de plata.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué milagro realizó Jesús en el momento de Su arresto (Lucas 22:50–51)?",
            options: [
              "Hizo caer fuego del cielo.",
              "Sanó la oreja del siervo del sumo sacerdote.",
              "Se volvió invisible.",
              "Hizo que los guardias se durmieran.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál fue la respuesta de Jesús cuando el sumo sacerdote le preguntó si era el Cristo?",
            options: [
              "\"No lo sé\".",
              "\"Tú lo has dicho\" o \"Yo soy\".",
              "\"Pregúntale a mis discípulos\".",
              "Guardó silencio absoluto.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿De qué delito acusaron inicialmente los líderes judíos a Jesús ante el Sanedrín?",
            options: [
              "De robo.",
              "De blasfemia.",
              "De traición a Roma.",
              "De no pagar impuestos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Cómo reaccionó Jesús ante las burlas y los golpes de los guardias?",
            options: [
              "Los maldijo.",
              "Soportó con paciencia y dignidad divinas.",
              "Pidió ayuda a Pedro.",
              "Trató de escapar.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 16,
    title: "Semana 16: La Crucifixión y el sepultamiento",
    dateRange: "19-23 de junio",
    lessons: [
      { id: "nt-s16-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué se alegró Herodes Antipas al ver a Jesús?",
            options: [
              "Porque quería ser Su discípulo.",
              "Porque esperaba verle hacer algún milagro.",
              "Porque quería perdonarlo.",
              "Porque eran parientes.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál fue la reacción de Jesús ante las muchas preguntas de Herodes?",
            options: [
              "Le enseñó el Evangelio.",
              "No le respondió nada.",
              "Se burló de él.",
              "Pidió que lo liberara.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué prisionero eligió liberar la multitud en lugar de a Jesús?",
            options: [
              "Judas.",
              "Barrabás (un ladrón y asesino).",
              "Lázaro.",
              "Un soldado romano.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué declaró Pilato sobre Jesús después de interrogarlo?",
            options: [
              "\"Es culpable de muerte\".",
              "\"Ningún delito hallo en este hombre\".",
              "\"Debe ser enviado a Roma\".",
              "\"Es un gran profeta\".",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s16-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué nombre recibía el lugar donde crucificaron a Jesús?",
            options: [
              "Getsemaní.",
              "Gólgota (que significa Lugar de la Calavera).",
              "Belén.",
              "Monte de los Olivos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué inscripción puso Pilato en la cruz de Jesús?",
            options: [
              "\"El profeta de Galilea\".",
              "\"JESÚS NAZARENO, REY DE LOS JUDÍOS\".",
              "\"Blasfemo de Israel\".",
              "\"Hijo de José\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué suceso natural ocurrió durante las tres horas finales de la crucifixión?",
            options: [
              "Un gran arcoíris.",
              "Hubo tinieblas sobre toda la tierra.",
              "Una lluvia torrencial.",
              "Un eclipse de luna.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué sucedió en el templo de Jerusalén en el momento en que Jesús murió?",
            options: [
              "Se derrumbaron los muros.",
              "El velo del templo se rasgó en dos, de arriba abajo.",
              "Se apagaron las luces.",
              "Los sacerdotes huyeron.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Quién reconoció la divinidad de Jesús al ver cómo murió y el terremoto?",
            options: [
              "Los fariseos.",
              "El centurión romano y los que estaban con él.",
              "Pilato desde su palacio.",
              "Herodes.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s16-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué pidió Jesús por aquellos que lo estaban crucificando?",
            options: [
              "Que fueran castigados.",
              "\"Padre, perdónalos, porque no saben lo que hacen\".",
              "Que se arrepintieran pronto.",
              "Que fueran bendecidos con riquezas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué promesa le hizo Jesús al malhechor arrepentido que estaba a Su lado?",
            options: [
              "\"Te bajaré de la cruz\".",
              "\"De cierto te digo que hoy estarás conmigo en el paraíso\".",
              "\"Tus pecados son muchos\".",
              "\"No hay esperanza para ti\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿A quién encomendó Jesús el cuidado de Su madre María?",
            options: [
              "A Pedro.",
              "Al discípulo amado (Juan).",
              "A Santiago.",
              "A María Magdalena.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál fue la última frase que Jesús pronunció antes de morir según Juan 19:30?",
            options: [
              "\"Tengo sed\".",
              "\"Consumado es\" (o \"Todo se ha cumplido\").",
              "\"Padre, recíbeme\".",
              "\"Volveré en tres días\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿A quién encomendó Jesús Su espíritu en Sus momentos finales?",
            options: [
              "A los ángeles.",
              "A Su Padre.",
              "A la posteridad.",
              "A los profetas antiguos.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 17,
    title: "Semana 17: La Resurrección",
    dateRange: "26-30 de junio",
    lessons: [
      { id: "nt-s17-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quiénes fueron las primeras personas en descubrir la tumba vacía?",
            options: [
              "Pedro y Juan.",
              "Ciertas mujeres (incluida María Magdalena).",
              "Los soldados romanos.",
              "Pilato y su esposa.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cómo reaccionaron inicialmente los Apóstoles ante el informe de las mujeres?",
            options: [
              "Creyeron de inmediato.",
              "Les parecieron locura las palabras de ellas, y no las creyeron.",
              "Fueron a celebrar.",
              "Se escondieron en el templo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué comió Jesús ante Sus discípulos para demostrar que tenía un cuerpo físico?",
            options: [
              "Pan y vino.",
              "Parte de un pez asado y un panal de miel.",
              "Frutas de la región.",
              "Nada, Él no necesitaba comer.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cuál fue el mandamiento de Jesús a Sus discípulos tras Su resurrección?",
            options: [
              "Que se quedaran en Jerusalén para siempre.",
              "Que se predicase en Su nombre el arrepentimiento y la remisión de pecados en todas las naciones.",
              "Que no hablaran con nadie del milagro.",
              "Que buscaran a Judas.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s17-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál es la frase clave de Lucas 24:36–39?",
            options: [
              "\"Yo soy el camino\".",
              "\"Un espíritu no tiene carne ni huesos, como veis que yo tengo\".",
              "\"Nacer de agua y del Espíritu\".",
              "\"Venid a mí\".",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué cualidad del cuerpo resucitado de Jesús se enfatiza en este pasaje?",
            options: [
              "Que es invisible.",
              "Que es un cuerpo tangible de carne y huesos.",
              "Que puede cambiar de forma.",
              "Que no tiene peso.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Por qué invitó Jesús a los discípulos a palparlo y verlo?",
            options: [
              "Porque Él estaba herido.",
              "Para que supieran que no era un espíritu, sino que había resucitado físicamente.",
              "Porque quería que vieran Su ropa.",
              "Para que le dieran comida.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué sentimientos tenían los discípulos cuando Jesús se les apareció (versículo 37)?",
            options: [
              "Alegría extrema solamente.",
              "Espantados y atemorizados, pensando que veían un espíritu.",
              "Indiferencia.",
              "Enojo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué verdad fundamental sobre la Resurrección enseña este pasaje?",
            options: [
              "Que solo Jesús resucitó.",
              "Que la resurrección implica la reunión eterna del espíritu con un cuerpo físico glorificado.",
              "Que el cuerpo no importa después de la muerte.",
              "Que es un proceso puramente simbólico.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 18,
    title: "Semana 18: El ministerio apostólico en Hechos",
    dateRange: "3-7 de julio",
    lessons: [
      { id: "nt-s18-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué promesa recibieron los Apóstoles antes de la ascensión de Jesús?",
            options: [
              "Que serían reyes de Israel inmediatamente.",
              "Que recibirían el poder del Espíritu Santo.",
              "Que no volverían a sufrir persecución.",
              "Que viajarían por todo el mundo en un día.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Quién fue elegido para ocupar el lugar de Judas Iscariote en el Quórum de los Doce?",
            options: [
              "Pablo.",
              "Bernabé.",
              "Matías.",
              "Esteban.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cuál fue el método para elegir al nuevo Apóstol después de orar?",
            options: [
              "Una votación popular.",
              "Echaron suertes (buscando la voluntad del Señor).",
              "Un examen escrito.",
              "Lo decidió el soldado romano.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Hacia dónde ascendió Jesús después de dar Sus últimas instrucciones?",
            options: [
              "Al Templo.",
              "A los cielos.",
              "A Galilea.",
              "Al desierto.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué dijeron los ángeles a los Apóstoles tras la ascensión de Jesús?",
            options: [
              "Que Jesús no volvería.",
              "Que Jesús vendrá de la misma manera que lo vieron ir al cielo.",
              "Que debían esconderse.",
              "Que el mundo se acabaría ese día.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s18-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Qué señal física acompañó la venida del Espíritu Santo en Pentecostés?",
            options: [
              "Un terremoto violento.",
              "Un estruendo como de viento y lenguas de fuego.",
              "Una lluvia torrencial.",
              "Oscuridad total.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué milagro permitió que personas de diversas naciones entendieran a los Apóstoles?",
            options: [
              "Hablaron en un idioma inventado.",
              "Hablaron en otras lenguas según el Espíritu les daba.",
              "Usaron traductores romanos.",
              "Les dieron copias escritas de los discursos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Quién dio el primer gran discurso testificando de la resurrección de Cristo?",
            options: [
              "Juan.",
              "Santiago.",
              "Pedro.",
              "Lucas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: '¿Cuál fue la respuesta de Pedro cuando el pueblo preguntó: "¿Qué haremos?"?',
            options: [
              '"Vuelvan a sus casas".',
              '"Arrepentíos, y bautícese cada uno... y recibiréis el don del Espíritu Santo".',
              '"Pagad vuestros impuestos".',
              '"Estudiad las leyes antiguas".',
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuántas personas aproximadamente se bautizaron ese día?",
            options: [
              "12.",
              "100.",
              "500.",
              "3,000.",
            ],
            correctAnswer: 3,
          },
        ]
      },
      { id: "nt-s18-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Dónde se encontraba el hombre que Pedro y Juan sanaron?",
            options: [
              "En el mercado.",
              "A la puerta del templo llamada la Hermosa.",
              "En la barca de Pedro.",
              "En casa de Pilato.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué frase famosa le dijo Pedro al hombre que pedía limosna?",
            options: [
              "\"Tengo mucho oro para ti\".",
              "\"No tengo plata ni oro, pero lo que tengo te doy... levántate y anda\".",
              "\"Pide ayuda a los sacerdotes\".",
              "\"Vuelve mañana por comida\".",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿A quién dio Pedro la gloria por el milagro de sanidad?",
            options: [
              "A su propia inteligencia.",
              "Al nombre y al poder de Jesucristo.",
              "A las leyes de la medicina.",
              "A los líderes del templo.",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué hizo el hombre después de ser sanado?",
            options: [
              "Se fue a dormir.",
              "Salió corriendo de la ciudad.",
              "Entró al templo andando, saltando y alabando a Dios.",
              "Volvió a pedir limosna.",
            ],
            correctAnswer: 2,
          },
          {
            id: 5,
            question: "¿Qué invitó Pedro a hacer al pueblo que estaba asombrado por el milagro?",
            options: [
              "Hacer una estatua de Pedro.",
              "Arrepentirse y convertirse para que sus pecados fueran borrados.",
              "Recolectar dinero para el hombre.",
              "Irse antes de que vinieran los guardias.",
            ],
            correctAnswer: 1,
          },
        ]
      },
      { id: "nt-s18-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Por qué arrestaron los líderes judíos a Pedro y a Juan?",
            options: [
              "Por robar en el templo.",
              "Por enseñar en el nombre de Jesús y la resurrección.",
              "Por no pagar impuestos.",
              "Por pelear con los guardias.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Cuál fue la respuesta valiente de Pedro ante el concilio que les prohibía enseñar?",
            options: [
              "\"Prometemos no volver a hacerlo\".",
              "\"Es necesario obedecer a Dios antes que a los hombres\".",
              "\"Pidan permiso a Roma\".",
              "Guardó silencio absoluto.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué pecado cometieron Ananías y Safira según Hechos 5?",
            options: [
              "Robaron el templo.",
              "Mintieron al Espíritu Santo sobre el precio de una propiedad.",
              "No quisieron bautizarse.",
              "Hablaron mal de los Apóstoles.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cómo fueron liberados los Apóstoles de la cárcel común?",
            options: [
              "Pedro rompió las cadenas.",
              "Un ángel del Señor abrió las puertas por la noche.",
              "Los seguidores pagaron el rescate.",
              "Los guardias se quedaron dormidos por accidente.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué consejo dio Gamaliel al concilio respecto a los discípulos?",
            options: [
              "Que debían matarlos a todos.",
              "Que si la obra es de Dios, no podrán destruirla.",
              "Que los enviaran a otra ciudad.",
              "Que los ignoraran para siempre.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
  {
    id: 19,
    title: "Semana 19: La expansión inicial de la Iglesia",
    dateRange: "10-14 de julio",
    lessons: [
      { id: "nt-s19-d1", title: "Lección 1", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál era la función de los siete varones elegidos, entre ellos Esteban?",
            options: [
              "Ser los nuevos Apóstoles.",
              "Ayudar en el servicio diario a las viudas y necesitados.",
              "Escribir libros de historia.",
              "Dirigir los ejércitos.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿De qué acusaron falsamente a Esteban ante el concilio?",
            options: [
              "De robar oro.",
              "De hablar palabras blasfemas contra Moisés y Dios.",
              "De querer ser rey.",
              "De no saber leer.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué vio Esteban cuando miró fijamente al cielo mientras lo juzgaban?",
            options: [
              "Un gran ángel con espada.",
              "La gloria de Dios y a Jesús a la diestra de Dios.",
              "Una paloma blanca.",
              "Nubes oscuras.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cómo murió Esteban, convirtiéndose en el primer mártir cristiano?",
            options: [
              "Decapitado.",
              "Apedreado.",
              "Crucificado.",
              "En la cárcel por enfermedad.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué pidió Esteban al Señor por sus verdugos antes de morir?",
            options: [
              "Que los destruyera.",
              "\"Señor, no les tomes en cuenta este pecado\".",
              "Que no lloviera sobre ellos.",
              "Que sus familias sufrieran.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s19-d2", title: "Lección 2", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Quién consentía en la muerte de Esteban y perseguía a la Iglesia al inicio?",
            options: [
              "Pedro.",
              "Saulo.",
              "Pilato.",
              "Herodes.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿A qué región fue Felipe a predicar tras la persecución en Jerusalén?",
            options: [
              "Roma.",
              "Samaria.",
              "Egipto.",
              "Atenas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué intentó hacer Simón el mago al ver que los Apóstoles daban el Espíritu Santo?",
            options: [
              "Bautizarse de nuevo.",
              "Comprar el don de Dios con dinero.",
              "Huir de la ciudad.",
              "Retar a Pedro a un duelo.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿A quién encontró Felipe en el camino de Jerusalén a Gaza?",
            options: [
              "A un centurión romano.",
              "A un oficial etíope (un eunuco).",
              "A Saulo de Tarso.",
              "A su propia familia.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué estaba leyendo el etíope cuando Felipe se le acercó?",
            options: [
              "El Génesis.",
              "El libro del profeta Isaías.",
              "Los Salmos.",
              "El Evangelio de Mateo.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s19-d3", title: "Lección 3", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cuál era el propósito de Saulo al viajar a Damasco?",
            options: [
              "Visitar a sus amigos.",
              "Arrestar a los seguidores de Jesús.",
              "Comprar seda.",
              "Estudiar con los escribas.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué luz rodeó a Saulo en el camino y qué voz escuchó?",
            options: [
              "Una luz de antorchas y la voz de un soldado.",
              "Una luz del cielo y la voz de Jesús preguntando: \"¿Por qué me persigues?\".",
              "La luz de la luna y el canto de los pájaros.",
              "Una luz de fuego y la voz de Moisés.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué condición física tuvo Saulo durante tres días tras la visión?",
            options: [
              "Quedó mudo.",
              "Quedó ciego y no comió ni bebió.",
              "No podía caminar.",
              "Perdió la memoria.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿A quién envió el Señor para sanar a Saulo y bautizarlo?",
            options: [
              "A Pedro.",
              "A Ananías.",
              "A Felipe.",
              "A Bernabé.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué comenzó a hacer Saulo inmediatamente después de ser sanado y bautizado?",
            options: [
              "Volver a perseguir cristianos.",
              "Predicar en las sinagogas que Jesús es el Hijo de Dios.",
              "Huir a Roma.",
              "Trabajar como carpintero.",
            ],
            correctAnswer: 0,
          },
        ]
      },
      { id: "nt-s19-d4", title: "Lección 4", description: "", 
        questions: [
          {
            id: 1,
            question: "¿Cómo escapó Saulo de Damasco cuando los judíos conspiraron para matarlo?",
            options: [
              "Se disfrazó de soldado.",
              "Los discípulos lo bajaron por el muro en una canasta por la noche.",
              "Nadó por el río.",
              "Peleó contra los guardias.",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Quién presentó a Saulo a los Apóstoles cuando todos le tenían miedo?",
            options: [
              "Juan.",
              "Bernabé.",
              "Matías.",
              "María.",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué milagro realizó Pedro en la ciudad de Lida con un hombre llamado Eneas?",
            options: [
              "Le dio vista.",
              "Lo sanó de una parálisis de ocho años.",
              "Lo resucitó.",
              "Multiplicó su comida.",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Quién era Tabita (Dorcas) y por qué era tan amada en Jope?",
            options: [
              "Era una reina.",
              "Una discípula conocida por sus buenas obras y limosnas (hacer túnicas).",
              "Una vendedora de oro.",
              "La esposa de un centurión.",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué hizo Pedro cuando llegó a la casa de Tabita tras su muerte?",
            options: [
              "Lloró con los demás y se fue.",
              "Oró, y dijo: \"Tabita, levántate\", y ella abrió los ojos y vivió.",
              "Pidió que la enterraran rápido.",
              "Dio un sermón sobre la muerte.",
            ],
            correctAnswer: 0,
          },
        ]
      },
    ]
  },
]
*/