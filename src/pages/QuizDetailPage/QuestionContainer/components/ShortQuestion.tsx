import React from 'react'
import type { Question } from '@/types/models/question'

function ShortQuestion({
  question,
  handleChangeAnswer,
  userAnswers,
  paginationId,
}: {
  question: Question
  handleChangeAnswer: (answer, isCorrect) => void
  userAnswers: NonNullable<unknown>
  paginationId: number
}) {
  return (
    <div>
      <div>{question.content}</div>
      <div>
        Current answer:
        <input
          onChange={(event) => {
            const answer = event.target.value
            handleChangeAnswer(answer, answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim())
          }}
          value={userAnswers[paginationId]?.answer ?? ''}
        >
        </input>
      </div>

    </div>
  )
}

export default ShortQuestion
