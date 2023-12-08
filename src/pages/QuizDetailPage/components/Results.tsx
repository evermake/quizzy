import React from 'react'
import { useAppSelector } from '@/store'

function Results({ questionIds }) {
  const { userAnswers } = useAppSelector(state => state.quizState)

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

      {results.map((res, id) => (<div>#{id + 1}:{res}</div>))}

      {Math.floor((posCounter / questionIds.length) * 100)}% of correct answers

    </div>
  )
}

export default Results
