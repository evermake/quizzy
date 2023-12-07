import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { useGetQuestionByIdQuery } from '@/store/services/questionService'
import { updateUserAnswer } from '@/store/reducer/quizSlice'

function Question() {
  const { questionId } = useAppSelector(state => state.quizState)

  const { data: question, error, isLoading } = useGetQuestionByIdQuery(questionId)
  const dispatch = useAppDispatch()

  const [userAnswer, setAnswer] = useState<string>('')

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

  if (!question) {
    return <>No data for question!</>
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
                dispatch(updateUserAnswer(answer))
              }}
            >
              {answer}
            </li>
          ),
          )}
        </ul>
        <div>
          Current answer:
          {userAnswer}
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
          {' '}
          <input onChange={(event) => {
            dispatch(updateUserAnswer(event.target.value))
          }}
          >
          </input>
        </div>
      </div>
    )
  }
}

export default Question
