"use client";

import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import type { Question } from "@/lib/types";
import { QuestionCard } from "./question-card";
import { QuizResults } from "./quiz-results";
import { useSearchParams } from "next/navigation";

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
  
  // Si hay recoveryData, el link de volver debe ir a /recuperar, si no, a la categoría normal
  const backUrl = recoveryData 
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null),
  );
  const [submittedQuestions, setSubmittedQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false),
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
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion, questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleFinish = useCallback(() => {
    // Submit any unsubmitted answers
    setSubmittedQuestions(new Array(questions.length).fill(true));
    setIsFinished(true);
  }, [questions.length]);

  const handleRetry = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setSubmittedQuestions(new Array(questions.length).fill(false));
    setIsFinished(false);
  }, [questions.length]);

  const score = selectedAnswers.reduce((acc, answer, index) => {
    if (answer === questions[index].correctAnswer) return acc + 1;
    return acc;
  }, 0);

  const allSubmitted = submittedQuestions.every(Boolean);
  const currentAnswered = selectedAnswers[currentQuestion] !== null;
  const currentSubmitted = submittedQuestions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  if (isFinished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
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
      </div>

      {/* Question dots */}
      <div className="mb-6 flex flex-wrap gap-2">
        {questions.map((_, index) => {
          const isAnswered = selectedAnswers[index] !== null;
          const isSubmitted = submittedQuestions[index];
          const isCorrect =
            isSubmitted &&
            selectedAnswers[index] === questions[index].correctAnswer;
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
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
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
