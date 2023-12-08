import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { useGetQuestionByIdQuery } from '@/store/services/questionService'
import { updateUserAnswer } from '@/store/reducer/quizSlice'
import type { Question } from '@/types/models/question'

function QuestionInfo() {
  const { questionId, userAnswers, paginationId } = useAppSelector(state => state.quizState)

  const { data: question, error, isLoading } = useGetQuestionByIdQuery<Question>(questionId)
  const dispatch = useAppDispatch()

  const [userAnswer, setAnswer] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get(question) || searchParams.get(question) !== paginationId + 1) {
      setSearchParams({ question: paginationId + 1 })
    }
  }, [])

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

  if (question.type === 'option') {
    return (
      <>
        <>{question.content}</>
        <ul>
          {question.answers.map(answer => (
            <li
              key={answer}
              onClick={() => {
                setAnswer(answer)
                dispatch(updateUserAnswer({ answer, isCorrect: answer === question.correctAnswer }))
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
      </>
    )
  }

  if (question.type === 'short') {
    return (
      <div>
        <div>{question.content}</div>
        <div>
          Current answer:
          <input
            onChange={(event) => {
              const answer = event.target.value
              dispatch(updateUserAnswer({
                answer,
                isCorrect: answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim(),
              }))
            }}
            value={userAnswers[paginationId]?.answer ?? ''}
          >
          </input>
        </div>
      </div>
    )
  }
}

export default QuestionInfo
