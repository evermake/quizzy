import React from 'react'
import type { Question } from '@/types/models/question'
import OptionQuestion from '@/pages/QuizDetailPage/QuestionContainer/components/OptionQuestion'
import ShortQuestion from '@/pages/QuizDetailPage/QuestionContainer/components/ShortQuestion'

function QuestionInfo(
  { question, error, isLoading, paginationId, handleChangeAnswer, userAnswers }:
  {
    question: Question
    error: string
    isLoading: boolean
    handleChangeAnswer: (answer, isCorrect) => void
    paginationId: number
    userAnswers: NonNullable<unknown>
  },
) {
  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return (
      <>
        Error
        {error}
      </>
    )
  }

  if (question && question.type === 'option') {
    return (
      <>
        <OptionQuestion
          question={question}
          handleChangeAnswer={handleChangeAnswer}
          paginationId={paginationId}
          userAnswers={userAnswers}
        />
      </>
    )
  }

  if (question && question.type === 'short') {
    return (
      <>
        <ShortQuestion
          question={question}
          handleChangeAnswer={handleChangeAnswer}
          paginationId={paginationId}
          userAnswers={userAnswers}
        />
      </>
    )
  }
}

export default QuestionInfo
