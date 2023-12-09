import React from 'react'
import { Text } from '@mantine/core'
import { Button_ } from './Button.styled'

function Results(
  { questionIds, userAnswers, handleResetQuizBtn }: {
    questionIds: number[]
    userAnswers: { answer: string, isCorrect: boolean }
    handleResetQuizBtn: () => void
  },
) {
  const emptyArr = Array.from({ length: questionIds.length }, () => 'No answer')
  const keys = Object.keys(userAnswers)

  let posCounter = 0

  const results = emptyArr.map((answer, id) => {
    if (keys.includes(String(id)) && userAnswers[id]) {
      const { answer, isCorrect } = userAnswers[id]
      if (isCorrect) {
        posCounter++
      }
      return `${answer} ${isCorrect ? 'correct' : 'not correct'}`
    }
    return `${emptyArr[id]} ` + `not correct`
  })

  return (
    <div>
      <h2>Results</h2>
      <div>
        {results.map((res, id) => (
          <div>
            <b>№{id + 1}</b> {res}

          </div>
        ))}
        <Text>
          {Math.floor((posCounter / questionIds.length) * 100)} % of correct answers
        </Text>
      </div>
      <Button_ onClick={() => handleResetQuizBtn()}>Reset quiz</Button_>
    </div>
  )
}

export default Results
