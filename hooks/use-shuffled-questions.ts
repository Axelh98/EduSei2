import { useMemo } from "react";
import type { Question } from "@/lib/types";

function shuffleArray<T>(arr: T[]): { shuffled: T[]; originalIndices: number[] } {
  const indices = arr.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    shuffled: indices.map((i) => arr[i]),
    originalIndices: indices,
  };
}

/**
 * Baraja las opciones de cada pregunta en cada intento.
 *
 * `type` es opcional en el contenido y casi ninguna pregunta lo trae, así que
 * se baraja todo lo que tenga opciones salvo lo que explícitamente no se debe
 * tocar: las de respuesta escrita y las de verdadero/falso (que van siempre en
 * ese orden). Antes el guard era `type !== "multiple"` y dejaba sin barajar
 * al 90 % de las preguntas, que en algunos cursos tienen la correcta casi
 * siempre en la misma posición.
 *
 * Ninguna opción del corpus depende de su posición ("todas las anteriores",
 * "A y B"); si alguna vez se agrega una, habrá que excluirla acá.
 */
export function useShuffledQuestions(questions: Question[], attemptKey: number): Question[] {
  return useMemo(() => {
    return questions.map((q) => {
      if (q.type === "written" || q.type === "truefalse") return q;
      if (!q.options || q.options.length < 2) return q;

      const { shuffled, originalIndices } = shuffleArray(q.options);
      const newCorrectAnswer = originalIndices.indexOf(q.correctAnswer);

      return {
        ...q,
        options: shuffled,
        correctAnswer: newCorrectAnswer,
      };
    });
    // Solo `attemptKey` a propósito: si se re-barajara cada vez que llega un
    // array nuevo de `questions`, un re-render a mitad del quiz desalinearía
    // las respuestas ya marcadas. Para barajar de nuevo se sube attemptKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptKey]);
}