import { useState, useEffect } from "react";

const MAX_ATTEMPTS = 3; 

export function useQuizAttempts(categoryId: string, lessonTitle: string) {
  const storageKey = `quiz-attempts-${categoryId}-${encodeURIComponent(lessonTitle)}`;

  const [attempts, setAttempts] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    setAttempts(stored ? parseInt(stored, 10) : 0);
    setLoaded(true);
  }, [storageKey]);

  const registerAttempt = () => {
    const next = attempts + 1;
    setAttempts(next);
    localStorage.setItem(storageKey, String(next));
  };

  const isBlocked = loaded && attempts >= MAX_ATTEMPTS;

  return { attempts, maxAttempts: MAX_ATTEMPTS, isBlocked, registerAttempt, loaded };
}