import React, { useState } from 'react'
import type { Question } from '@/types/models/question'

function OptionQuestion({ question, handleChangeAnswer, userAnswers, paginationId }: {
  question: Question
  handleChangeAnswer: (answer, isCorrect) => void
  userAnswers: NonNullable<unknown>
  paginationId: number
}) {
  const [userAnswer, setAnswer] = useState<string>('')

  return (
    <div>
      <>{question.content}</>
      <ul>
        {question.answers.map(answer => (
          <li
            key={answer}
            onClick={() => {
              setAnswer(answer)
              handleChangeAnswer(answer, answer === question.correctAnswer)
            }}
          >
            {answer}
          </li>
        ),
        )}
      </ul>
      <div>
        Current answer:
        {userAnswers[paginationId]?.answer ?? userAnswer}
      </div>
    </div>
  )
}

export default OptionQuestion
