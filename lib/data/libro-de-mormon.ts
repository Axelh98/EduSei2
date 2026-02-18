import type { Week } from "../types"

export const libroDeMormonWeeks: Week[] = [
  {
    id: 1,
    title: "Semana 1",
    dateRange: "Lecciones introductorias",
    lessons: [
      {
        id: "lm-leccion-1",
        title: "Lección 1: Introducción al Libro de Mormón",
        description: "Otro testamento de Jesucristo para nuestros días.",
        questions: [
          { id: 1, question: "¿Quién fue el profeta que compiló y abrevió la mayoría de los registros del Libro de Mormón?", options: ["Nefi.", "Mormón.", "Moroni."], correctAnswer: 1 },
          { id: 2, question: "¿Cuál es el propósito principal del Libro de Mormón según su portada?", options: ["Enseñar historia americana antigua.", "Convencer a judíos y gentiles de que Jesús es el Cristo.", "Ser un libro de ciencia."], correctAnswer: 1 },
          { id: 3, question: "¿Quién tradujo el Libro de Mormón al inglés por el don y poder de Dios?", options: ["Oliver Cowdery.", "José Smith.", "Brigham Young."], correctAnswer: 1 },
          { id: 4, question: "¿Qué promesa se encuentra en Moroni 10:3-5?", options: ["Que si oramos con fe sincera, Dios nos manifestará la verdad del libro por el Espíritu Santo.", "Que el libro nos dará riquezas materiales.", "Que no necesitamos estudiar, solo leer una vez."], correctAnswer: 0 },
          { id: 5, question: "¿De qué ciudad partió la familia de Lehi según 1 Nefi?", options: ["Zarahemla.", "Jerusalén.", "Bountiful."], correctAnswer: 1 },
        ],
      },
      {
        id: "lm-leccion-2",
        title: "Lección 2: 1 Nefi 1-7 (La obediencia de Nefi)",
        description: "Iré y haré lo que el Señor ha mandado.",
        questions: [
          { id: 1, question: "¿Qué dijo Nefi cuando su padre le pidió regresar a Jerusalén por las planchas de bronce?", options: ["Que era muy peligroso.", "\"Iré y haré lo que el Señor ha mandado\".", "Que enviaría a sus hermanos."], correctAnswer: 1 },
          { id: 2, question: "¿Quién era Labán?", options: ["El hermano mayor de Nefi.", "Un hombre que tenía las planchas de bronce.", "El padre de Lehi."], correctAnswer: 1 },
          { id: 3, question: "¿Cuántos intentos hicieron los hijos de Lehi para obtener las planchas de bronce?", options: ["Uno.", "Dos.", "Tres."], correctAnswer: 2 },
          { id: 4, question: "¿Qué contenían las planchas de bronce?", options: ["Los registros y las escrituras de los profetas y la genealogía de Lehi.", "Un mapa del tesoro.", "Las leyes de los romanos."], correctAnswer: 0 },
          { id: 5, question: "¿Qué aprendemos de la fe de Nefi al obedecer mandamientos difíciles?", options: ["Que los mandamientos son opcionales.", "Que el Señor prepara un camino para que cumplamos lo que nos manda.", "Que solo los profetas deben obedecer."], correctAnswer: 1 },
        ],
      },
    ],
  },
]
