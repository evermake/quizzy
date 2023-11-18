import React from 'react'
import {
  DescriptionStyled,
  RootStyled,
  TitleStyled,
} from './ListItem.styled'
import Link from '@/components/Link'

export type ListItemProps = {
  name: string
  slug: string
  description: string
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  slug,
  description,
}) => {
  return (
    <RootStyled>
      <TitleStyled>{name}</TitleStyled>
      <DescriptionStyled>{description}</DescriptionStyled>
      <Link to={`/quizzes/${slug}`}>Go to quiz →</Link>
    </RootStyled>
  )
}

export default ListItem
