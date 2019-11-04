import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Login from './Login';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin: 0 auto;
`;

export default function Dashboard() {
  function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? (
      <Container>
        <Heading>Welcome!</Heading>
      </Container>
    ) : (
      <Login />
    );
  }

  return <IsLoggedIn />;
}
