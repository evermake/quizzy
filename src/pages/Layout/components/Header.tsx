import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '@/constants'

function Header() {
  return (
    <>
      <Link to={AppRoute.HOME}>
        Home
      </Link>
    </>
  )
}

export default Header
