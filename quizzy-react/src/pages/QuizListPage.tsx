import React, { useEffect } from 'react'
import { api } from '~/api/client'

export const QuizListPage: React.FC = () => {
  useEffect(() => {
    api.login.mutate({ username: 'admin', password: 'admin' })
      // eslint-disable-next-line no-console
      .then(quizzes => console.log(quizzes))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h1>Quiz List</h1>
    </div>
  )
}
