import React from 'react'
import { useRouteError } from 'react-router-dom'
import { SubtitleStyled, TitleStyled } from './styled'

const ErrorPage: React.FC = () => {
  const error = useRouteError() as any
  console.error(error)

  return (
    <>
      <TitleStyled>Oops!</TitleStyled>
      <SubtitleStyled>{error.statusText || error.message}</SubtitleStyled>
    </>
  )
}

export default ErrorPage
