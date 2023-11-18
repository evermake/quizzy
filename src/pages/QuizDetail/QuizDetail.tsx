import React from 'react'
import { useParams } from 'react-router-dom'

const QuizDetail: React.FC = () => {
  const params = useParams()

  return (
    <h1>
      Quiz:
      {' '}
      { params.quizSlug }
    </h1>
  )
}

export default QuizDetail
