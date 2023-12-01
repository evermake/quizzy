export interface Question {
    id: number,
    content: string,
    type: string,
    answers: string[],
    correctAnswer: string,
}
