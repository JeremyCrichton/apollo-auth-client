import React from 'react';
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import SignupForm from './SignupForm';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
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

  const { data } = useQuery(IS_LOGGED_IN);

  console.log(data);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <h2>Signup</h2>
      <SignupForm signup={signup} />
    </>
  );
}
