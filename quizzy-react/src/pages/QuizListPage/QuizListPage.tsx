import React, { useEffect } from 'react'
import { api } from '~/api/client'
import QuizList from "./components/QuizList";

export const QuizListPage: React.FC = () => {
  useEffect(() => {
    api.login.mutate({ username: 'admin', password: 'admin' })
      // eslint-disable-next-line no-console
      .then(quizzes => console.log(quizzes))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h2>Quizzes</h2>
      <QuizList/>
    </div>
  )
}
