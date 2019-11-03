import React, { useState } from 'react';

export default function LoginForm({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type='text'
        placeholder='Your email address'
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
        placeholder='Your password'
      />
      <button onClick={() => login({ variables: { email, password } })}>
        Login
      </button>
    </div>
  );
}
