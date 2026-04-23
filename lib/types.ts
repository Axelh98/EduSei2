export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  reference?: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  questions: Question[]
  chapterUrl?: string
}

export interface Week {
  id: number
  title: string
  dateRange: string
  lessons: Lesson[]
}

export interface Category {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  weeks: Week[]
}

export interface QuizState {
  currentQuestion: number
  answers: (number | null)[]
  isFinished: boolean
  score: number
}

export interface CrosswordWord {
  number: number;
  direction: 'horizontal' | 'vertical';
  answer: string;
  clue: string;
  row: number;
  col: number;
}

export interface LessonCrossword {
  lessonId: string;
  gridSize: number;
  words: CrosswordWord[];
}