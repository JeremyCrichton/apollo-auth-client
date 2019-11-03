import React from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import LoginForm from './LoginForm';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupContainer = styled.div`
  margin-top: 1rem;
`;

export default function Login() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true } });
    }
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>An error occurred</p>;

  return (
    <Container>
      <h2>Login</h2>
      <LoginForm login={login} />
      <SignupContainer>
        <Link to='/signup'>Or Signup...</Link>
      </SignupContainer>
    </Container>
  );
}
