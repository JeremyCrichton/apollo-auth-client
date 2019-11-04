import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Logout from './Logout';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const StyledHeader = styled.header`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 1rem;
  }
`;

export default function Header() {
  const { data } = useQuery(IS_LOGGED_IN);
  const isLoggedIn = data.isLoggedIn;

  return (
    <StyledHeader>
      <Link to='/'>My App</Link>
      <Nav>
        {isLoggedIn && (
          <NavItem>
            <Logout />
          </NavItem>
        )}
        {!isLoggedIn && (
          <NavItem>
            <Link to='/login'>Log in</Link>
          </NavItem>
        )}
        {!isLoggedIn && (
          <NavItem>
            <Link to='/signup'>Sign up</Link>
          </NavItem>
        )}
      </Nav>
    </StyledHeader>
  );
}
