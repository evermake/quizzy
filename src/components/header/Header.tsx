import React from 'react'
import { HeaderStyled } from './Header.styled'
import Link from '@/components/Link'

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </HeaderStyled>
  )
}

export default Header
