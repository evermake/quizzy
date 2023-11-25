import React from 'react'
import ListItem from './ListItem'

export type QuizListProps = {
  quizzes: {
    name: string
    slug: string
    description: string
  }[]
}

const QuizList: React.FC<QuizListProps> = ({ quizzes }) => {
  return (
    <>
      {quizzes.map(quiz => (
        <ListItem
          key={quiz.slug}
          slug={quiz.slug}
          name={quiz.name}
          description={quiz.description}
        />
      ))}
    </>
  )
}

export default QuizList
