import React from 'react'
import { Link } from 'react-router-dom'
import { useGetQuizzesQuery } from '@/store/services/quizService'
import { AppRoute } from '@/constants'

function QuizList() {
  const { data: quizList, error, isLoading } = useGetQuizzesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        error:
        {error}
      </div>
    )
  }

  return (
    <div>
      {quizList.map(quiz => (
        <Link key={quiz.id} to={`${AppRoute.QUIZZES}/${quiz.id}`}>
          <div>
            {quiz.title}
          </div>
        </Link>
      ),
      )}
    </div>
  )
}

export default QuizList
