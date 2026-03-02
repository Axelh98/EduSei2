import { id } from "date-fns/locale";
import type { Week } from "../types";

export const bloqueDeEscriturasWeeks: Week[] = [
  {
    id: 1,
    title: "Antiguo Testamento",
    dateRange: "Escrituras del Antiguo Testamento",
    lessons: [
      {
        id: "bloque-at-1",
        title: "Moises 1-5",
        description:
          "Cuestionario de opción múltiple sobre Moisés capítulos 1 al 5",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Dónde fue arrebatado Moisés cuando vio a Dios?",
            options: [
              "A un valle profundo",
              "Al Jardín de Edén",
              "A una montaña extremadamente alta",
              "Al Desierto de Sinaí",
            ],
            correctAnswer: 2,
          },
          {
            id: 2,
            question: "¿Qué aprendió Moisés después de ver la gloria de Dios?",
            options: [
              "Que el hombre es poderoso",
              "Que el hombre no es nada",
              "Que Satanás tiene gloria",
              "Que la tierra es infinita",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué le pidió Satanás a Moisés?",
            options: [
              "Que lo adorara",
              "Que ofreciera sacrificios",
              "Que escribiera un libro",
              "Que lo siguiera al desierto",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Cómo logró Moisés vencer la tentación de Satanás?",
            options: [
              "Guardando silencio",
              "Invocando a Dios en el nombre del Unigénito",
              "Con su propia fuerza",
              "Huyendo de la montaña",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Cuál es la obra y la gloria de Dios según Moisés 1:39?",
            options: [
              "Multiplicar las generaciones",
              "Destruir a Satanás",
              "Crear mundos sin número",
              "Llevar a cabo la inmortalidad y la vida eterna del hombre",
            ],
            correctAnswer: 3,
          },
          {
            id: 6,
            question: "¿Qué creó Dios en el primer día según Moisés 2?",
            options: [
              "La tierra seca",
              "Los animales",
              "La luz",
              "El firmamento",
            ],
            correctAnswer: 2,
          },
          {
            id: 7,
            question: "¿Quién engañó a Eva en Moisés 4?",
            options: ["Un ángel caído", "Un querubín", "Satanás", "El dragón"],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: "bloque-at-2",
        title: "Abraham 1-3",
        description:
          "Cuestionario de opción múltiple sobre Abraham capítulos 1 al 3",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/1?lang=spa",
        questions: [
          {
            id: 1,
            question:
              "¿Qué intentaron hacer los sacerdotes idólatras con Abraham en Abraham 1?",
            options: [
              "Ofrecerlo en sacrificio",
              "Expulsarlo de Egipto",
              "Nombrarlo sumo sacerdote",
              "Convertirlo en rey",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué recibió Abraham de Dios en Abraham 1?",
            options: [
              "El sacerdocio",
              "Una tierra prometida",
              "Un nuevo nombre",
              "Un libro de leyes",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué promesa hizo Dios a Abraham en Abraham 2?",
            options: [
              "Que sería padre de muchas naciones",
              "Que gobernaría Egipto",
              "Que destruiría a sus enemigos",
              "Que tendría riquezas abundantes",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué mandamiento recibió Abraham en Abraham 2?",
            options: [
              "Salir de su tierra y viajar a Canaán",
              "Construir un altar en Egipto",
              "Guardar el día de reposo",
              "Ofrecer sacrificios diarios",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué vio Abraham en su visión de Abraham 3?",
            options: [
              "El orden de las estrellas y planetas",
              "El diluvio venidero",
              "La torre de Babel",
              "La destrucción de Sodoma",
            ],
            correctAnswer: 0,
          },
          {
            id: 6,
            question: "¿Qué estrella fue llamada la mayor en Abraham 3?",
            options: ["Kolob", "Orion", "Pleiades", "Sirius"],
            correctAnswer: 0,
          },
          {
            id: 7,
            question:
              "¿Qué aprendió Abraham acerca de los espíritus en Abraham 3?",
            options: [
              "Que algunos eran más inteligentes que otros",
              "Que todos eran iguales en inteligencia",
              "Que no existían antes de la vida terrenal",
              "Que fueron creados al mismo tiempo que la tierra",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-at-3",
        title: "Genesis 37, 39, 41",
        description:
          "Cuestionario de opción múltiple sobre la historia de José en Génesis",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/37?lang=spa",
        questions: [
          {
            id: 1,
            question:
              "¿Qué regalo especial recibió José de su padre Jacob en Génesis 37?",
            options: [
              "Un anillo de oro",
              "Una túnica de muchos colores",
              "Un bastón de mando",
              "Un libro sagrado",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question:
              "¿Qué hicieron los hermanos de José por envidia en Génesis 37?",
            options: [
              "Lo vendieron como esclavo",
              "Lo nombraron líder",
              "Lo enviaron a Egipto como mensajero",
              "Lo coronaron rey",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué hizo la esposa de Potifar en Génesis 39?",
            options: [
              "Acusó falsamente a José",
              "Lo liberó de prisión",
              "Le dio un nuevo cargo",
              "Lo protegió de sus enemigos",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question:
              "¿Qué resultado tuvo la falsa acusación contra José en Génesis 39?",
            options: [
              "Fue encarcelado",
              "Fue expulsado de Egipto",
              "Fue condenado a muerte",
              "Fue vendido nuevamente",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué interpretó José en Génesis 41?",
            options: [
              "El sueño del faraón",
              "El sueño de sus hermanos",
              "El sueño de Potifar",
              "El sueño de Jacob",
            ],
            correctAnswer: 0,
          },
          {
            id: 6,
            question:
              "¿Qué significaban las vacas gordas y flacas en el sueño del faraón en Génesis 41?",
            options: [
              "Años de guerra y paz",
              "Años de abundancia y hambre",
              "Años de esclavitud y libertad",
              "Años de lluvia y sequía",
            ],
            correctAnswer: 1,
          },
          {
            id: 7,
            question:
              "¿Qué cargo recibió José después de interpretar el sueño del faraón en Génesis 41?",
            options: [
              "Gobernador de Egipto",
              "Sumo sacerdote",
              "Capitán del ejército",
              "Consejero real",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-at-4",
        title: "Isaias 1-12",
        description:
          "Cuestionario de opción múltiple sobre Isaías capítulos 1, 2, 6, 9, 11 y 12",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/1?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Qué denuncia Isaías en el capítulo 1?",
            options: [
              "La idolatría y corrupción del pueblo",
              "La falta de templos",
              "La escasez de alimentos",
              "La ausencia de líderes",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué visión presenta Isaías en el capítulo 2?",
            options: [
              "El monte de la casa de Jehová exaltado",
              "La destrucción de Babilonia",
              "El regreso del pueblo de Egipto",
              "La caída de Jerusalén",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question:
              "¿Qué vio Isaías en su llamado profético en el capítulo 6?",
            options: [
              "Al Señor sentado en un trono alto y sublime",
              "Un ejército celestial",
              "Un río de fuego",
              "Un ángel con espada",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué símbolo profético aparece en Isaías 9?",
            options: [
              "Un niño que nacería",
              "Un cordero sacrificado",
              "Un templo reconstruido",
              "Un rey destronado",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Cómo se llama el niño profetizado en Isaías 9:6?",
            options: [
              "Príncipe de Paz",
              "Hijo de David",
              "Salvador del mundo",
              "Rey de reyes",
            ],
            correctAnswer: 0,
          },
          {
            id: 6,
            question: "¿Qué describe Isaías en el capítulo 11?",
            options: [
              "Un retoño del tronco de Isaí",
              "La caída de Asiria",
              "El regreso de los exiliados",
              "La destrucción del templo",
            ],
            correctAnswer: 0,
          },
          {
            id: 7,
            question: "¿Qué expresa Isaías en el capítulo 12?",
            options: [
              "Un cántico de alabanza a Jehová",
              "Una lamentación por Jerusalén",
              "Un juicio contra las naciones",
              "Una profecía sobre Egipto",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-at-5",
        title: "Isaias 29, 49, 53, 58, 61",
        description:
          "Cuestionario de opción múltiple sobre Isaías capítulos seleccionados",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/29?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Qué profecía se encuentra en Isaías 29?",
            options: [
              "Un libro sellado que no se puede leer",
              "La caída de Babilonia",
              "El regreso de Israel de Egipto",
              "La destrucción del templo",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué promesa hace Jehová en Isaías 49?",
            options: [
              "Nunca olvidará a su pueblo",
              "Destruirá a todas las naciones",
              "Construirá un nuevo templo",
              "Nombrará un nuevo rey",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Cómo describe Isaías al Siervo sufriente en Isaías 53?",
            options: [
              "Despreciado y desechado entre los hombres",
              "Un rey glorioso",
              "Un guerrero poderoso",
              "Un sacerdote rico",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question:
              "¿Qué llevó sobre sí el Siervo sufriente según Isaías 53?",
            options: [
              "Nuestras enfermedades y pecados",
              "Las riquezas de las naciones",
              "El poder del mundo",
              "La gloria de Israel",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué enseña Isaías 58 sobre el ayuno verdadero?",
            options: [
              "Compartir el pan con el hambriento",
              "Guardar silencio todo el día",
              "Encender incienso en el templo",
              "Vestirse de saco y ceniza",
            ],
            correctAnswer: 0,
          },
          {
            id: 6,
            question:
              "¿Qué bendición promete Jehová en Isaías 58 a los que ayunan correctamente?",
            options: [
              "Su luz nacerá como el alba",
              "Recibirán riquezas abundantes",
              "Serán reyes sobre las naciones",
              "No tendrán enemigos",
            ],
            correctAnswer: 0,
          },
          {
            id: 7,
            question: "¿Qué anuncia Isaías 61?",
            options: [
              "Buenas nuevas a los pobres",
              "La caída de Jerusalén",
              "La destrucción de Egipto",
              "El regreso de Babilonia",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-at-6",
        title: "Salmos 23-24",
        description: "Cuestionario de opción múltiple sobre Salmos 23 y 24",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/23?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Cómo describe el salmista al Señor en el Salmo 23?",
            options: [
              "Como un rey poderoso",
              "Como un pastor que guía y cuida",
              "Como un juez severo",
              "Como un guerrero invencible",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question:
              "Según el Salmo 24, ¿quién podrá subir al monte de Jehová?",
            options: [
              "El que tiene manos limpias y corazón puro",
              "El que es fuerte en batalla",
              "El que ofrece sacrificios diarios",
              "El que guarda silencio en el templo",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-at-7",
        title: "Daniel 1-6",
        description:
          "Cuestionario de opción múltiple sobre Daniel capítulos 1, 2, 3 y 6",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/dan/1?lang=spa",
        questions: [
          {
            id: 1,
            question:
              "¿Qué decisión tomaron Daniel y sus amigos en el capítulo 1?",
            options: [
              "No contaminarse con la comida del rey",
              "Aprender la lengua de los caldeos",
              "Servir como sacerdotes",
              "Huir de Babilonia",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué reveló Dios a Daniel en el capítulo 2?",
            options: [
              "El sueño de Nabucodonosor y su interpretación",
              "La caída de Babilonia",
              "La visión de los cuatro animales",
              "El regreso de Israel",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question:
              "¿Qué representaba la estatua en el sueño de Nabucodonosor en Daniel 2?",
            options: [
              "Los reinos que surgirían en la tierra",
              "Los profetas de Israel",
              "Los ángeles del cielo",
              "Los sacerdotes de Babilonia",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué hicieron Sadrac, Mesac y Abed-nego en Daniel 3?",
            options: [
              "Se negaron a adorar la estatua de oro",
              "Construyeron un altar",
              "Huyeron de Babilonia",
              "Se convirtieron en sacerdotes",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question:
              "¿Qué sucedió cuando los tres jóvenes fueron lanzados al horno de fuego en Daniel 3?",
            options: [
              "No sufrieron daño y apareció un cuarto ser con ellos",
              "Fueron consumidos inmediatamente",
              "El horno se apagó solo",
              "El rey los liberó antes de tiempo",
            ],
            correctAnswer: 0,
          },
          {
            id: 6,
            question:
              "¿Por qué fue arrojado Daniel al foso de los leones en Daniel 6?",
            options: [
              "Por orar a Dios a pesar del decreto del rey",
              "Por interpretar sueños sin permiso",
              "Por negarse a servir al rey",
              "Por predicar contra Babilonia",
            ],
            correctAnswer: 0,
          },
          {
            id: 7,
            question: "¿Qué ocurrió con Daniel en el foso de los leones?",
            options: [
              "Dios envió un ángel que cerró la boca de los leones",
              "Fue devorado por los leones",
              "El rey lo liberó antes de entrar",
              "Los leones huyeron del foso",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-at-8",
        title: "Malaquías 3",
        description:
          "Cuestionario de opción múltiple sobre Malaquías capítulo 3",
          chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/ot/mal/3?lang=spa",
        questions: [
          {
            id: 1,
            question:
              "¿Qué mandamiento da Jehová en Malaquías 3 respecto a los diezmos?",
            options: [
              "Traer todos los diezmos al alfolí",
              "Ofrecer sacrificios diarios",
              "Guardar silencio en el templo",
              "Dar limosna a los pobres",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question:
              "¿Qué promesa hace Jehová si Israel obedece con los diezmos?",
            options: [
              "Les enviará un nuevo profeta",
              "Abrirá las ventanas de los cielos y derramará bendición",
              "Les concederá riquezas materiales inmediatas",
              "Les dará dominio sobre las naciones",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué se escribe delante de Jehová según Malaquías 3:16?",
            options: [
              "Un registro de las ofrendas",
              "Un decreto contra las naciones",
              "Un libro de memorias para los que temen a Jehová",
              "Un pacto nuevo con Israel",
            ],
            correctAnswer: 2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Nuevo Testamento",
    dateRange: "Escrituras del Nuevo Testamento",
    lessons: [
      {
        id: "bloque-nt-1",
        title: "Mateo 5-7",
        description:"Cuestionario de opción múltiple sobre el Sermón del Monte",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Cómo comienza Jesús el Sermón del Monte en Mateo 5?",
            options: [
              "Con las Bienaventuranzas",
              "Con la parábola del sembrador",
              "Con la oración del Padre Nuestro",
              "Con la parábola del buen samaritano",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question:
              "¿Qué dijo Jesús acerca de ser la sal de la tierra en Mateo 5?",
            options: [
              "Que la sal sin sabor no sirve para nada",
              "Que la sal debe guardarse en el templo",
              "Que la sal representa la riqueza",
              "Que la sal se usa solo en sacrificios",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question: "¿Qué instrucción da Jesús sobre la oración en Mateo 6?",
            options: [
              "Orar en público para ser vistos",
              "Orar en secreto al Padre",
              "Orar solo en el templo",
              "Orar tres veces al día",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué oración enseña Jesús en Mateo 6?",
            options: [
              "El Padre Nuestro",
              "El Ave María",
              "El Credo",
              "El Shemá",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué dijo Jesús sobre acumular tesoros en Mateo 6?",
            options: [
              "No acumular tesoros en la tierra, sino en el cielo",
              "Acumular riquezas para compartir",
              "Guardar oro en el templo",
              "Invertir en tierras y ganado",
            ],
            correctAnswer: 0,
          },
          {
            id: 6,
            question: "¿Qué regla enseña Jesús en Mateo 7:12?",
            options: [
              "La regla de oro: hacer a los demás lo que queremos que nos hagan",
              "La regla de guardar el sábado",
              "La regla de diezmar",
              "La regla de ayunar cada semana",
            ],
            correctAnswer: 0,
          },
          {
            id: 7,
            question:
              "¿Qué comparación hace Jesús sobre los dos fundamentos en Mateo 7?",
            options: [
              "El hombre prudente construye sobre la roca y el insensato sobre la arena",
              "El sabio planta un árbol y el necio lo corta",
              "El justo guarda la ley y el impío la rechaza",
              "El rico da limosna y el pobre la recibe",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-nt-2",
        title: "Lucas 2",
        description: "Cuestionario de opción múltiple sobre Lucas capítulo 2",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/2?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Dónde nació Jesús según Lucas 2?",
            options: ["En Nazaret", "En Jerusalén", "En Belén", "En Galilea"],
            correctAnswer: 2,
          },
          {
            id: 2,
            question:
              "¿Qué señal dio el ángel a los pastores para reconocer al Salvador?",
            options: [
              "Un niño envuelto en pañales y acostado en un pesebre",
              "Una estrella brillante en el cielo",
              "Un cordero junto al templo",
              "Un ángel con espada de fuego",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            question:
              "¿Qué himno de alabanza pronunció Simeón al ver al niño Jesús en el templo?",
            options: [
              "Magníficat",
              "Nunc dimittis",
              "Gloria in excelsis Deo",
              "Aleluya",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question:
              "¿Qué profetisa también dio testimonio de Jesús en el templo?",
            options: ["Débora", "Ana", "Rut", "Abigaíl"],
            correctAnswer: 1,
          },
          {
            id: 5,
            question:
              "¿Qué hacía Jesús a los doce años en el templo según Lucas 2?",
            options: [
              "Oraba en silencio",
              "Discutía con los doctores de la ley",
              "Ofrecía sacrificios",
              "Cantaba salmos",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "bloque-nt-3",
        title: "Lucas 22:1-20",
        description: "Cuestionario de opción múltiple sobre Lucas 22:1-20",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Qué fiesta se acercaba según Lucas 22:1?",
            options: [
              "La Pascua",
              "El Pentecostés",
              "La Fiesta de los Tabernáculos",
              "El Día de Expiación",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question:
              "¿Quién conspiró con los principales sacerdotes para entregar a Jesús?",
            options: ["Pedro", "Judas Iscariote", "Andrés", "Tomás"],
            correctAnswer: 1,
          },
          {
            id: 3,
            question:
              "¿Qué instrucción dio Jesús a Pedro y Juan para preparar la Pascua?",
            options: [
              "Seguir a un hombre que llevaba un cántaro de agua",
              "Buscar un cordero en el mercado",
              "Reunir a todos los discípulos en el templo",
              "Encender lámparas en la casa",
            ],
            correctAnswer: 0,
          },
          {
            id: 4,
            question: "¿Qué dijo Jesús sobre el pan durante la última cena?",
            options: [
              "Esto es mi cuerpo, que por vosotros es dado",
              "Este pan representa la ley de Moisés",
              "Este pan es símbolo de la Pascua",
              "Este pan es para recordar a Abraham",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            question: "¿Qué dijo Jesús sobre la copa en la última cena?",
            options: [
              "Esta copa es el nuevo pacto en mi sangre",
              "Esta copa representa la abundancia de la tierra",
              "Esta copa es símbolo de la fiesta de los tabernáculos",
              "Esta copa recuerda la salida de Egipto",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-nt-4",
        title: "Juan 10-21",
        description:
          "Cuestionario de opción múltiple sobre Juan capítulos 10 al 21",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/10?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Cómo se presenta Jesús en Juan 10?",
            options: [
              "Como el buen pastor",
              "Como el rey de Israel",
              "Como el juez del mundo",
              "Como el maestro de la ley",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question: "¿Qué milagro realiza Jesús en Juan 11?",
            options: [
              "Multiplica los panes",
              "Camina sobre el agua",
              "Resucita a Lázaro",
              "Sana a un ciego de nacimiento",
            ],
            correctAnswer: 2,
          },
          {
            id: 3,
            question: "¿Qué hizo María en Juan 12 para honrar a Jesús?",
            options: [
              "Le dio pan y vino",
              "Ungió sus pies con perfume",
              "Le ofreció un sacrificio",
              "Le lavó las manos",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question:
              "¿Qué acto realizó Jesús en Juan 13 como ejemplo de humildad?",
            options: [
              "Ayunó cuarenta días",
              "Se vistió de saco",
              "Lavó los pies de sus discípulos",
              "Oró en el templo",
            ],
            correctAnswer: 2,
          },
          {
            id: 5,
            question: "¿Qué enseñanza central da Jesús en Juan 14?",
            options: [
              "Bienaventurados los mansos",
              "El que quiera ser el primero sea siervo",
              "Yo soy el camino, la verdad y la vida",
              "Amarás a tu prójimo como a ti mismo",
            ],
            correctAnswer: 2,
          },
          {
            id: 6,
            question: "¿Qué metáfora usa Jesús en Juan 15?",
            options: [
              "Yo soy la roca firme",
              "Yo soy la puerta del templo",
              "Yo soy la vid verdadera",
              "Yo soy el agua viva",
            ],
            correctAnswer: 2,
          },
          {
            id: 7,
            question: "¿Qué promete Jesús en Juan 16?",
            options: [
              "La paz política en Israel",
              "La llegada de un nuevo profeta",
              "El envío del Consolador (Espíritu Santo)",
              "La destrucción del templo",
            ],
            correctAnswer: 2,
          },
          {
            id: 8,
            question: "¿Qué oración hace Jesús en Juan 17?",
            options: [
              "Ora por riquezas materiales",
              "Ora por un nuevo templo",
              "Ora por sus discípulos y por todos los creyentes",
              "Ora por la destrucción de Roma",
            ],
            correctAnswer: 2,
          },
          {
            id: 9,
            question: "¿Qué ocurre en Juan 19?",
            options: [
              "El bautismo de Jesús",
              "La crucifixión de Jesús",
              "La transfiguración de Jesús",
              "La ascensión de Jesús",
            ],
            correctAnswer: 1,
          },
          {
            id: 10,
            question: "¿Qué hace Jesús en Juan 21 después de resucitar?",
            options: [
              "Se aparece en Nazaret",
              "Se aparece en el templo de Jerusalén",
              "Se aparece en el monte Sinaí",
              "Se aparece a sus discípulos junto al mar y les da de comer",
            ],
            correctAnswer: 3,
          },
        ],
      },
      {
        id: "bloque-nt-5",
        title: "Hechos 1-12",
        description:
          "Cuestionario de opción múltiple sobre Hechos capítulos 1 al 12",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/1?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Qué ocurrió en Hechos 1 antes de Pentecostés?",
            options: [
              "La elección de Esteban",
              "La conversión de Saulo",
              "La visión de Pedro",
              "La ascensión de Jesús",
            ],
            correctAnswer: 3,
          },
          {
            id: 2,
            question: "¿Qué milagro sucedió en Hechos 2 el día de Pentecostés?",
            options: [
              "Pedro caminó sobre el agua",
              "Los discípulos hablaron en otras lenguas",
              "Juan sanó a un paralítico",
              "Felipe bautizó al eunuco",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué sanó Pedro en Hechos 3?",
            options: [
              "A un endemoniado",
              "A un paralítico en la puerta del templo",
              "A un leproso",
              "A un ciego de nacimiento",
            ],
            correctAnswer: 1,
          },
          {
            id: 4,
            question: "¿Qué hicieron los creyentes en Hechos 4?",
            options: [
              "Nombraron diáconos",
              "Compartían todas las cosas en común",
              "Construyeron un templo nuevo",
              "Se dispersaron por Judea",
            ],
            correctAnswer: 1,
          },
          {
            id: 5,
            question: "¿Qué ocurrió con Ananías y Safira en Hechos 5?",
            options: [
              "Se convirtieron en diáconos",
              "Murieron por mentir al Espíritu Santo",
              "Fueron enviados a Samaria",
              "Fueron encarcelados por predicar",
            ],
            correctAnswer: 1,
          },
          {
            id: 6,
            question:
              "¿Qué función tuvieron los siete varones elegidos en Hechos 6?",
            options: [
              "Predicar en el templo",
              "Servir a las mesas y ayudar en la distribución",
              "Escribir cartas a las iglesias",
              "Dirigir la alabanza",
            ],
            correctAnswer: 1,
          },
          {
            id: 7,
            question: "¿Qué visión tuvo Esteban en Hechos 7 antes de morir?",
            options: [
              "Vio un río de fuego",
              "Vio a Jesús de pie a la diestra de Dios",
              "Vio un ángel con espada",
              "Vio el templo lleno de gloria",
            ],
            correctAnswer: 1,
          },
          {
            id: 8,
            question: "¿Qué ocurrió con Saulo en Hechos 9?",
            options: [
              "Fue nombrado diácono",
              "Se convirtió tras ver a Jesús camino a Damasco",
              "Predicó en Roma",
              "Fue encarcelado en Jerusalén",
            ],
            correctAnswer: 1,
          },
          {
            id: 9,
            question: "¿Qué visión tuvo Pedro en Hechos 10?",
            options: [
              "Un río de agua viva",
              "Un templo reconstruido",
              "Un lienzo con animales impuros que descendía del cielo",
              "Un ángel con un libro",
            ],
            correctAnswer: 2,
          },
          {
            id: 10,
            question: "¿Qué milagro ocurrió en Hechos 12?",
            options: [
              "Felipe bautizó a Cornelio",
              "Esteban resucitó a un muerto",
              "Pedro fue liberado de la cárcel por un ángel",
              "Juan sanó a un paralítico",
            ],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: "bloque-nt-6",
        title: "Romanos 8",
        description: "Cuestionario de opción múltiple sobre Romanos capítulo 8",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Qué afirma Pablo al inicio de Romanos 8?",
            options: [
              "Que la circuncisión es necesaria",
              "Que no hay condenación para los que están en Cristo Jesús",
              "Que el templo debe ser reconstruido",
              "Que la ley de Moisés salva",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué asegura Pablo en Romanos 8:38-39?",
            options: [
              "Que nada podrá separarnos del amor de Dios en Cristo Jesús",
              "Que la ley traerá salvación eterna",
              "Que los ángeles traerán nuevas revelaciones",
              "Que Israel dominará sobre las naciones",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: "bloque-nt-7",
        title: "1 Corintios 13",
        description:
          "Cuestionario de opción múltiple sobre 1 Corintios capítulo 13",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/13?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Qué afirma Pablo sobre el amor en 1 Corintios 13:2?",
            options: [
              "Que sin amor nada soy",
              "Que el amor trae riquezas",
              "Que el amor reemplaza la fe",
              "Que el amor es solo un sentimiento",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            question:
              "¿Cuál es la mayor de las tres virtudes mencionadas en 1 Corintios 13:13?",
            options: ["La esperanza", "La fe", "El amor", "La paciencia"],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: "bloque-nt-8",
        title: "Hebreos 11",
        description:
          "Cuestionario de opción múltiple sobre Hebreos capítulo 11",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/11?lang=spa",
        questions: [
          {
            id: 1,
            question: "¿Cómo define Pablo la fe en Hebreos 11:1?",
            options: [
              "La obediencia a la ley de Moisés",
              "La certeza de lo que se espera y la convicción de lo que no se ve",
              "La esperanza en las riquezas terrenales",
              "La confianza en los sacrificios del templo",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question: "¿Qué hizo Abel por la fe según Hebreos 11:4?",
            options: [
              "Construyó un altar en Jerusalén",
              "Ofreció a Dios un sacrificio más excelente que Caín",
              "Predicó a las naciones",
              "Escribió un libro de leyes",
            ],
            correctAnswer: 1,
          },
          {
            id: 3,
            question: "¿Qué logró Moisés por la fe según Hebreos 11:29?",
            options: [
              "Recibió las tablas de la ley",
              "Construyó el tabernáculo",
              "Cruzó el Mar Rojo con los israelitas",
              "Derrotó a los egipcios en batalla",
            ],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: "bloque-nt-9",
        title: "2 Timoteo 3",
        description:
          "Cuestionario de opción múltiple sobre 2 Timoteo capítulo 3",
        chapterUrl: "https://www.churchofjesuschrist.org/study/scriptures/nt/2-tim/3?lang=spa",
        questions: [
          {
            id: 1,
            question:
              "¿Qué describe Pablo como características de los últimos días en 2 Timoteo 3:1-2?",
            options: [
              "La fe y la paciencia",
              "La impiedad y la desconfianza",
              "La justicia y la humildad",
              "La obediencia y el amor",
            ],
            correctAnswer: 1,
          },
          {
            id: 2,
            question:
              "¿Qué dice Pablo sobre las Escrituras en 2 Timoteo 3:16-17?",
            options: [
              "Que son útiles para enseñar, para reprender, para corregir y para instruir en justicia",
              "Que son útiles solo para la fe",
              "Que son útiles solo para la obediencia",
              "Que son útiles solo para la justicia",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Libro de Mormón",
    dateRange: "Escrituras del Libro de Mormón",
    lessons: [
      {
        id: "bloque-lm-1",
        title: "1 Nefi 1, 8, 11",
        description: "",
        questions: [],
      },
      {
        id: "bloque-lm-2",
        title: "2 Nefi 9: 1-29",
        description: "",
        questions: [],
      },
      {
        id: "bloque-lm-3",
        title: "Mosiah 2-5",
        description: "",
        questions: [],
      },
      {
        id: "bloque-lm-4",
        title: "Alma 5, 7",
        description: "",
        questions: [],
      },
      {
        id: "bloque-lm-5",
        title: "Alma 32-34",
        description: "",
        questions: [],
      },
      {
        id: "bloque-lm-6",
        title: "3 Nefi 11, 15-21",
        description: "",
        questions: [],
      },
      {
        id: "bloque-lm-7",
        title: "Moroni 10",
        description: "",
        questions: [],
      },
    ],
  },
  {
    id: 4,
    title: "Doctrina y Convenios",
    dateRange: "Revelaciones de la Restauración",
    lessons: [],
  },
]; // Aquí se pueden agregar lecciones seleccionadas de las otras categorías relacionadas con la fe
