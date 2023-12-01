export enum QuizStatus {
    NOT_STARTED = "not started",
    IN_PROGRESS = "in progress",
    FINISHED = "finished",
    MISSED = "missed",
}

export interface QuizState {
    status: QuizStatus.NOT_STARTED | QuizStatus.IN_PROGRESS | QuizStatus.FINISHED;
    userAnswers: {};
    time?: number;
    currentQuestionId?: number;
    paginationId?: number;
}
