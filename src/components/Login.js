import React from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from './LoginForm';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
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
    <>
      <h2>Login</h2>
      <LoginForm login={login} />
      <Link to='/signup'>Or Signup...</Link>
    </>
  );
}
