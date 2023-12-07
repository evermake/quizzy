import React from 'react'
import { Link } from 'react-router-dom'
import { useGetUserQuery } from '@/store/services/userService'
import { AppRoute } from '@/constants'

function Header() {
  const { data: user, error, isLoading } = useGetUserQuery()

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    )
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to={AppRoute.HOME}>
        Home
      </Link>
      {user
        ? <div>{user.name}</div>
        : <Link to={AppRoute.LOGIN}>Login</Link>}
    </div>
  )
}

export default Header