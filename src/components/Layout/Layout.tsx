import React from 'react'
import { Outlet } from 'react-router-dom'
import { RootStyled } from './Layout.styled'
import Header from '@/components/Header'

const Layout: React.FC = () => {
  return (
    <RootStyled>
      <Header />
      <Outlet />
    </RootStyled>
  )
}

export default Layout
