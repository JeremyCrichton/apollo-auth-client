import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export default function Users() {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
