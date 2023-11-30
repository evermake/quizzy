import { Button } from '@mantine/core'
import React, { useEffect } from 'react'
import { api } from '~/api/client'

export const QuizListPage: React.FC = () => {
  useEffect(() => {
    api.ping.query().then(() => {
      // eslint-disable-next-line no-console
      console.log('ping')
    })
  }, [])

  return (
    <div>
      <h1>Quiz List</h1>
      <Button>Click me!</Button>
    </div>
  )
}
