import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin-bottom: 1rem;
`;

export default function SignupForm({ signup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        type='text'
        placeholder='Your name'
      />
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
      <button onClick={() => signup({ variables: { name, email, password } })}>
        Signup!
      </button>
    </>
  );
}
