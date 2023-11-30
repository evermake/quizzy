import React, { useEffect } from 'react'
import { api } from '~/api/client'
import QuizList from "~/components/QuizList";

export const QuizListPage: React.FC = () => {
  useEffect(() => {
    api.ping.query().then(() => {
      // eslint-disable-next-line no-console
      console.log('ping')
    })
  }, [])

  return (
    <div>
      <h2>Quizzes</h2>
      <QuizList/>
    </div>
  )
}
