import React from 'react'
import QuizItem from './quizitem/QuizItem'

const QuizList: React.FC = () => {
  const data = [
    { name: 'Quiz', status: 'starts soon...' },
    { name: 'Quiz 2', status: 'done' },
  ]

  return (
    <>
      {
                data.map(quiz => <QuizItem key={quiz.name} name={quiz.name} status={quiz.status} />)
            }
    </>
  )
}

export default QuizList
