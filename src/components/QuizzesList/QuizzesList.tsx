import React from 'react'
import ListItem from './ListItem'

const QuizList: React.FC = () => {
  const data = [
    {
      name: 'Quiz',
      slug: '1',
      description: 'starts soon...',
    },
    {
      name: 'Quiz 2',
      slug: '2',
      description: 'done',
    },
  ]

  return (
    <>
      {data.map(quiz => (
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
