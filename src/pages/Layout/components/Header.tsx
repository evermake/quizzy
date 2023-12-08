import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '@/constants'
import {StaticRouter} from "react-router-dom/server";

function Header() {
  return (
    <StaticRouter location={""}>
      <Link to={AppRoute.HOME}>
        Home
      </Link>
    </StaticRouter>
  )
}

export default Header
