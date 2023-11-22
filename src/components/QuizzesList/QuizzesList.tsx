import React from 'react'
import ListItem from './ListItem'

const QuizList: React.FC = ({quizzes}) => {
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
