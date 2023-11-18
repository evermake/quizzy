import React from 'react'
import type { Path } from '@remix-run/router/history'
import { StyledLink } from '../link/styled'
import { QuizItemDescr, QuizItemTitle, QuizItemWrapper } from './styled'

export type QuizItemProps = {
  name: string
  status: string | 'starts soon...' | 'done' | 'missed'
  url?: string | Partial<Path>
}

const QuizItem: React.FC<QuizItemProps> = (props) => {
  return (
    <QuizItemWrapper>
      <QuizItemTitle>{props.name}</QuizItemTitle>
      <QuizItemDescr>{props.status}</QuizItemDescr>
      <StyledLink to={props.url || '/'}>Go to quiz →</StyledLink>
    </QuizItemWrapper>
  )
}

export default QuizItem
