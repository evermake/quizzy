import React, { useEffect } from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { AppRoute } from '@/constants'

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as any

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h1>Oops!</h1>
      <h2>{error.statusText || error.message}</h2>
      <Link to={AppRoute.HOME}>Go to home</Link>
    </>
  )
}
