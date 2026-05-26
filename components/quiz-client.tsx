"use client";

import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import type { Question } from "@/lib/types";
import { QuestionCard } from "./question-card";
import { QuizResults } from "./quiz-results";
import { useSearchParams } from "next/navigation";
import { useShuffledQuestions } from "@/hooks/use-shuffled-questions";
import { useQuizAttempts } from "@/hooks/use-quiz-attempts";

interface QuizClientProps {
  questions: Question[];
  categoryName: string;
  categoryId: string;
  lessonTitle: string;
}

export function QuizClient({
  questions,
  categoryName,
  categoryId,
  lessonTitle,
}: QuizClientProps) {

  const searchParams = useSearchParams();
  const recoveryData = searchParams.get("data");
  const [attemptKey, setAttemptKey] = useState(0);

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`;

  // Mezclar opciones de las preguntas
  const shuffledQuestions = useShuffledQuestions(questions, attemptKey);

  // Control de intentos
  const { attempts, maxAttempts, isBlocked, registerAttempt, loaded } =
    useQuizAttempts(categoryId, lessonTitle);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(shuffledQuestions.length).fill(null),
  );
  const [submittedQuestions, setSubmittedQuestions] = useState<boolean[]>(
    new Array(shuffledQuestions.length).fill(false),
  );
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectAnswer = useCallback(
    (index: number) => {
      setSelectedAnswers((prev) => {
        const next = [...prev];
        next[currentQuestion] = index;
        return next;
      });
    },
    [currentQuestion],
  );

  const handleSubmitAnswer = useCallback(() => {
    setSubmittedQuestions((prev) => {
      const next = [...prev];
      next[currentQuestion] = true;
      return next;
    });
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion, shuffledQuestions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleFinish = useCallback(() => {
    setSubmittedQuestions(new Array(shuffledQuestions.length).fill(true));
    registerAttempt();
    setIsFinished(true);
  }, [shuffledQuestions.length, registerAttempt]);

  const handleRetry = useCallback(() => {
    setAttemptKey((prev) => prev + 1);
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(shuffledQuestions.length).fill(null));
    setSubmittedQuestions(new Array(shuffledQuestions.length).fill(false));
    setIsFinished(false);
  }, [shuffledQuestions.length]);

  const score = selectedAnswers.reduce<number>((acc, answer, index) => {
    if (answer === shuffledQuestions[index].correctAnswer) return acc + 1;
    return acc;
  }, 0);

  const allSubmitted = submittedQuestions.every(Boolean);
  const currentAnswered = selectedAnswers[currentQuestion] !== null;
  const currentSubmitted = submittedQuestions[currentQuestion];
  const isLast = currentQuestion === shuffledQuestions.length - 1;

  // Evitar flash mientras carga localStorage
  if (!loaded) return null;

  // Pantalla de bloqueo por límite de intentos
  if (isBlocked) {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <span className="text-3xl">🔒</span>
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Límite alcanzado
        </h2>
        <p className="mt-3 text-muted-foreground">
          Ya realizaste este quiz{" "}
          <strong>
            {maxAttempts} {maxAttempts === 1 ? "vez" : "veces"}
          </strong>
          . Consultá a tu instructor para continuar.
        </p>
        <p className="mt-1 text-sm text-muted-foreground/60">
          {attempts} de {maxAttempts} intentos usados
        </p>
        <Link
          href={backUrl}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Link>
      </div>
    );
  }

  if (isFinished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={shuffledQuestions.length}
        categoryName={categoryName}
        categoryId={categoryId}
        lessonTitle={lessonTitle}
        onRetry={handleRetry}
        recoveryData={recoveryData}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Botón Volver dinámico */}
      <Link
        href={backUrl}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {recoveryData ? "Volver a mi plan" : `Volver a ${categoryName}`}
      </Link>

      {/* Lesson title */}
      <div className="mb-8">
        <p className="mb-1 text-sm font-medium text-primary">{categoryName}</p>
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {lessonTitle}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Responde cada pregunta y verifica tu respuesta antes de continuar.
        </p>
        {/* Contador de intentos */}
        <p className="mt-1 text-xs text-muted-foreground/60">
          Intento {attempts + 1} de {maxAttempts}
        </p>
      </div>

      {/* Question dots */}
      <div className="mb-6 flex flex-wrap gap-2">
        {shuffledQuestions.map((_, index) => {
          const isAnswered = selectedAnswers[index] !== null;
          const isSubmitted = submittedQuestions[index];
          const isCorrect =
            isSubmitted &&
            selectedAnswers[index] === shuffledQuestions[index].correctAnswer;
          const isCurrent = index === currentQuestion;

          return (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                isCurrent
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : isSubmitted && isCorrect
                    ? "bg-success text-success-foreground"
                    : isSubmitted && !isCorrect
                      ? "bg-destructive text-destructive-foreground"
                      : isAnswered
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
              }`}
              aria-label={`Ir a pregunta ${index + 1}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* Question card */}
      <QuestionCard
        question={shuffledQuestions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={shuffledQuestions.length}
        selectedAnswer={selectedAnswers[currentQuestion]}
        hasSubmitted={currentSubmitted}
        onSelectAnswer={handleSelectAnswer}
      />

      {/* Action buttons */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </button>

        <div className="flex items-center gap-3">
          {!currentSubmitted && currentAnswered && (
            <button
              onClick={handleSubmitAnswer}
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              <Check className="h-4 w-4" />
              Verificar
            </button>
          )}

          {currentSubmitted && !isLast && (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </button>
          )}

          {isLast && allSubmitted && (
            <button
              onClick={handleFinish}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver Resultados
            </button>
          )}

          {isLast && !allSubmitted && currentSubmitted && (
            <span className="text-xs text-muted-foreground">
              Responde todas las preguntas para ver tus resultados
            </span>
          )}
        </div>
      </div>
    </div>
  );
}