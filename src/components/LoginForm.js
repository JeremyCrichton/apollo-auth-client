import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin-bottom: 1rem;
`;

export default function LoginForm({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type='text'
        placeholder='Your email address'
      />
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
        placeholder='Your password'
      />
      <button onClick={() => login({ variables: { email, password } })}>
        Login
      </button>
    </>
  );
}
