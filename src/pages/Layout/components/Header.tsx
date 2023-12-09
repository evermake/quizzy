import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/constants';
import React from 'react';

const HeaderContainer = styled.header`
  padding: 30px;
  background-color: #333;
  color: #fff;
`;

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HomeLink to={AppRoute.HOME}>
        Home
      </HomeLink>
    </HeaderContainer>
  );
}

export default Header;
