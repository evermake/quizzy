import React from 'react'
import QuizList from './components/QuizList'
import { useGetQuizzesQuery } from '@/store/services/quizService'

export const QuizListPage: React.FC = () => {
  const { data: quizList, error, isLoading } = useGetQuizzesQuery()

  return (
    <div>
      <h2>Quizzes</h2>
      <QuizList error={error} isLoading={isLoading} quizList={quizList} />
    </div>
  )
}
