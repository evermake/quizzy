import React from 'react'
import type { Question } from '@/types/models/question'
import { useGetQuestionByIdQuery } from '@/store/services/questionService'
import QuestionInfo from '@/pages/QuizDetailPage/QuestionContainer/components/QuestionInfo'

function QuestionContainer({ questionId, handleChangeAnswer, userAnswers, paginationId }: {
  questionId: number
  handleChangeAnswer: (answer, isCorrect) => void
  userAnswers: NonNullable<unknown>
  paginationId
}) {
  const { data: questionData, questionError, isQuestionLoading } = useGetQuestionByIdQuery<Question>(questionId)

  return (
    <div>
      <QuestionInfo
        question={questionData}
        error={questionError}
        isLoading={isQuestionLoading}
        handleChangeAnswer={handleChangeAnswer}
        userAnswers={userAnswers}
        paginationId={paginationId}
      />
    </div>
  )
}

export default QuestionContainer
