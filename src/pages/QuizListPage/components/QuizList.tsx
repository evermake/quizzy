import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '@/constants'
import type { Quiz } from '@/types/models/quiz'
import {QuizItem} from './QuizList.styled';
function QuizList({ quizList, error, isLoading }: { quizList: Quiz[], error: string, isLoading: boolean }) {
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
        <QuizItem>
        <Link key={quiz.id} to={`${AppRoute.QUIZZES}/${quiz.id}`}>
          <div>
            {quiz.title}
          </div>
        </Link>
        </QuizItem>
      ),
      )}
    </div>
  )
}

export default QuizList
