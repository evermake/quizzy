import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import { Wrapper } from './styled'

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  )
}

export default Layout
