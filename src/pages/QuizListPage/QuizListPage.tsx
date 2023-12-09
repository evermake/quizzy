import React from 'react'
import QuizList from './components/QuizList'
import { useGetQuizzesQuery } from '@/store/services/quizService'
import { Container } from '../Pages.styled';

export const QuizListPage: React.FC = () => {
  const { data: quizList, error, isLoading } = useGetQuizzesQuery()

  return (
    <div>
      <Container>
        <h2>Quizzes</h2>
        <QuizList error={error} isLoading={isLoading} quizList={quizList} />
      </Container>
    </div>
  )
}
