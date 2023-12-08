import React from 'react'

function Review(
  {
    questionIds,
    userAnswers,
    handleReturnBtn,
    handleFinishBtn,
  }: {
    questionIds: number[]
    userAnswers: { answer: string, isCorrect: boolean }
    handleReturnBtn: () => void
    handleFinishBtn: () => void
  },
) {
  const emptyArr = Array.from({ length: questionIds.length }, () => 'No answer')

  const keys = Object.keys(userAnswers)

  const answers = emptyArr.map((answer, id) => {
    if (keys.includes(String(id)) && userAnswers[id]) {
      return userAnswers[id].answer
    }
    return emptyArr[id]
  })

  return (
    <div>
      <h2>Review quiz</h2>
      {answers.map((answer, id) => (<div>#{id + 1}:{answer}</div>
      ))}
      <button onClick={handleReturnBtn}>Return to quiz</button>
      <button onClick={handleFinishBtn}>Finish</button>
    </div>
  )
}

export default Review
