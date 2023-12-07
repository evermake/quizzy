import React, { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as any

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h1>Oops!</h1>
      <h2>{error.statusText || error.message}</h2>
    </>
  )
}
