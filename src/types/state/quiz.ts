export enum QuizStatus {
  NOT_STARTED = 'not started',
  IN_PROGRESS = 'in progress',
  FINISHED = 'finished',
  REVIEW = 'review',
  MISSED = 'missed',
}

export type QuizState = {
  status: QuizStatus.NOT_STARTED | QuizStatus.IN_PROGRESS | QuizStatus.FINISHED
  userAnswers: NonNullable<unknown>
  userAnswersWithQuestionIds?: NonNullable<unknown>
  time?: number
  currentQuestionId?: number
  paginationId?: number
}
