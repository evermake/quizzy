import React from 'react'
import { StyledLink } from '../link/styled'
import { StyledHeader } from './styled'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        Home
      </StyledLink>
      <StyledLink to="/">
        Login
      </StyledLink>
    </StyledHeader>
  )
}

export default Header
