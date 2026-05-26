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

export function useShuffledQuestions(questions: Question[], attemptKey: number): Question[] {
  return useMemo(() => {
    return questions.map((q) => {
      if (q.type !== "multiple" || !q.options) return q;

      const { shuffled, originalIndices } = shuffleArray(q.options);
      const newCorrectAnswer = originalIndices.indexOf(q.correctAnswer);

      return {
        ...q,
        options: shuffled,
        correctAnswer: newCorrectAnswer,
      };
    });
  }, [attemptKey]);
}