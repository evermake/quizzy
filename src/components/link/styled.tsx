import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledLink = styled(NavLink)`
  color: #333;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  : hover {
    color: #6A9B59;
    .a {
      color: #6A9B59;
    }
  }
  :active {
    color: #417D2B;
  }
`
