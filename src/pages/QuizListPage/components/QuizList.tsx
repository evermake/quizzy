import React from 'react'
import { QuizItem, StyledLink } from './QuizList.styled'
import { AppRoute } from '@/constants'
import type { Quiz } from '@/types/models/quiz'

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
          <StyledLink key={quiz.id} to={`${AppRoute.QUIZZES}/${quiz.id}`}>
            <div>
              {quiz.title}
            </div>
          </StyledLink>
        </QuizItem>
      ),
      )}
    </div>
  )
}

export default QuizList
