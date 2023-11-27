import React from 'react'
import { useParams } from 'react-router-dom'

export const QuizDetailPage: React.FC = () => {
  const params = useParams()

  return (
    <div>
      <h1>Quiz Detail</h1>
      <p>
        Slug:
        {' '}
        { params.slug }
      </p>
    </div>
  )
}
