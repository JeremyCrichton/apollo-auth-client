import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export default function Logout() {
  const client = useApolloClient();

  return (
    <button
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
      }}
    >
      Logout
    </button>
  );
}
