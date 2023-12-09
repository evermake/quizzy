import styled from '@emotion/styled'
import React from 'react'
import { Button_ } from './Button.styled'

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px; 
`
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
      <ButtonsContainer>
        <Button_ onClick={handleReturnBtn}>Return to quiz</Button_>
        <Button_ onClick={handleFinishBtn}>Finish</Button_>
      </ButtonsContainer>
    </div>
  )
}

export default Review
