import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import SignupForm from './SignupForm';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
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

export default function Signup(props) {
  const client = useApolloClient();

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted({ signup }) {
      localStorage.setItem('token', signup.token);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>An error occurred</p>;

  return (
    <Container>
      <h2>Let's get started</h2>
      <SignupForm signup={signup} />
    </Container>
  );
}
