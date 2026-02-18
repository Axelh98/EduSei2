import type { Week } from "../types"

export const nuevoTestamentoWeeks: Week[] = [
  {
    id: 1,
    title: "Semana 1",
    dateRange: "Lecciones introductorias",
    lessons: [
      {
        id: "nt-leccion-1",
        title: "Lección 1: Introducción al Nuevo Testamento",
        description: "Conoce el contexto del ministerio de Jesucristo y sus apóstoles.",
        questions: [
          { id: 1, question: "¿Cuál es el tema central del Nuevo Testamento?", options: ["La historia de los reyes de Israel.", "La vida, las enseñanzas, la Expiación y la Resurrección de Jesucristo.", "Las guerras entre los romanos y los griegos."], correctAnswer: 1 },
          { id: 2, question: "¿Cuántos libros componen el Nuevo Testamento?", options: ["22", "27", "39"], correctAnswer: 1 },
          { id: 3, question: "¿Qué significa la palabra 'Evangelio'?", options: ["Historia antigua.", "Buenas nuevas.", "Ley sagrada."], correctAnswer: 1 },
          { id: 4, question: "¿Cuáles son los cuatro Evangelios?", options: ["Mateo, Marcos, Lucas y Juan.", "Hechos, Romanos, Gálatas y Efesios.", "Apocalipsis, Hebreos, Santiago y Judas."], correctAnswer: 0 },
          { id: 5, question: "¿Por qué es importante estudiar el Nuevo Testamento en Seminario?", options: ["Para memorizar datos históricos.", "Para acercarte más al Salvador y fortalecer tu fe en Él.", "Solo para cumplir un requisito."], correctAnswer: 1 },
        ],
      },
      {
        id: "nt-leccion-2",
        title: "Lección 2: El nacimiento de Jesucristo",
        description: "El cumplimiento de las profecías mesiánicas.",
        questions: [
          { id: 1, question: "¿En qué ciudad nació Jesucristo?", options: ["Nazaret.", "Belén.", "Jerusalén."], correctAnswer: 1 },
          { id: 2, question: "¿Quién fue la madre terrenal de Jesús?", options: ["Elisabet.", "María.", "Ana."], correctAnswer: 1 },
          { id: 3, question: "¿Qué ángel anunció a María que sería la madre del Hijo de Dios?", options: ["Miguel.", "Gabriel.", "Rafael."], correctAnswer: 1 },
          { id: 4, question: "¿Quiénes visitaron al niño Jesús guiados por una estrella?", options: ["Los pastores.", "Los sabios del oriente.", "Los sacerdotes del templo."], correctAnswer: 1 },
          { id: 5, question: "¿Qué profecía del Antiguo Testamento se cumplió con el nacimiento de Jesús en Belén?", options: ["Isaías 53.", "Miqueas 5:2.", "Salmos 23."], correctAnswer: 1 },
        ],
      },
    ],
  },
]
