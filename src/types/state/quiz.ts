export enum QuizStatus {
  NOT_STARTED = 'not started',
  IN_PROGRESS = 'in progress',
  FINISHED = 'finished',
  REVIEW = 'review',
  MISSED = 'missed',
}

export type QuizState = {
  status: QuizStatus
  userAnswers: NonNullable<unknown>
  userAnswersWithQuestionIds?: NonNullable<unknown>
  time?: number
  questionId?: number
  quizId?: number
  questionIds?: number
  paginationId?: number
}
