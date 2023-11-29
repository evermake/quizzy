import React, { useEffect } from 'react'
import { api } from '~/api/client'
import QuizList from "~/containers/quizList";

export const QuizListPage: React.FC = () => {
  useEffect(() => {
    api.ping.query().then(() => {
      // eslint-disable-next-line no-console
      console.log('ping')
    })
  }, [])

  return (
    <div>
      <QuizList/>
    </div>
  )
}
