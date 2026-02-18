import type { Week } from "../types"

export const doctrinaYConveniosWeeks: Week[] = [
  {
    id: 1,
    title: "Semana 1",
    dateRange: "Lecciones introductorias",
    lessons: [
      {
        id: "dyc-leccion-1",
        title: "Lección 1: Introducción a Doctrina y Convenios",
        description: "Revelaciones para los últimos días.",
        questions: [
          { id: 1, question: "¿Qué es Doctrina y Convenios?", options: ["Un libro de historia universal.", "Una recopilación de revelaciones dadas en esta dispensación.", "Un manual de ciencia."], correctAnswer: 1 },
          { id: 2, question: "¿A quién se dieron la mayoría de las revelaciones contenidas en Doctrina y Convenios?", options: ["A Moisés.", "Al profeta José Smith.", "A Brigham Young."], correctAnswer: 1 },
          { id: 3, question: "¿Cuál es la importancia de Doctrina y Convenios para nuestra época?", options: ["Solo tiene valor histórico.", "Contiene la voz del Señor dirigida a nosotros en los últimos días.", "Es un libro opcional para los miembros."], correctAnswer: 1 },
          { id: 4, question: "¿Qué evento descrito en José Smith - Historia fue el inicio de la Restauración?", options: ["La dedicación del Templo de Kirtland.", "La Primera Visión de José Smith.", "La llegada de los pioneros a Utah."], correctAnswer: 1 },
          { id: 5, question: "¿Por qué se llama 'Doctrina y Convenios'?", options: ["Porque contiene doctrinas del evangelio y convenios que el Señor hace con Su pueblo.", "Porque es un acuerdo legal.", "Porque solo enseña convenios del templo."], correctAnswer: 0 },
        ],
      },
      {
        id: "dyc-leccion-2",
        title: "Lección 2: DyC 1 (El prefacio del Señor)",
        description: "La voz de amonestación para todo el mundo.",
        questions: [
          { id: 1, question: "¿Quién es el autor del prefacio de Doctrina y Convenios (Sección 1)?", options: ["José Smith.", "El Señor Jesucristo.", "Oliver Cowdery."], correctAnswer: 1 },
          { id: 2, question: "Según DyC 1:38, ¿qué sucederá con las palabras del Señor?", options: ["Se perderán con el tiempo.", "\"Todas se cumplirán\".", "Solo algunas son importantes."], correctAnswer: 1 },
          { id: 3, question: "¿Cuál es uno de los propósitos de Doctrina y Convenios según la Sección 1?", options: ["Que todo hombre hable en el nombre de Dios el Señor.", "Entretener a los lectores.", "Reemplazar la Biblia."], correctAnswer: 0 },
          { id: 4, question: "¿Qué advertencia da el Señor a los habitantes de la tierra en DyC 1?", options: ["Que deben escuchar Su voz y prepararse para Su Segunda Venida.", "Que ya no habrá más revelación.", "Que las Escrituras antiguas son suficientes."], correctAnswer: 0 },
          { id: 5, question: "¿Qué enseña DyC 1:30 sobre La Iglesia de Jesucristo de los Santos de los Últimos Días?", options: ["Que es una de muchas iglesias verdaderas.", "Que es la única iglesia verdadera y viviente sobre la faz de la tierra.", "Que es una iglesia temporal."], correctAnswer: 1 },
        ],
      },
    ],
  },
]
