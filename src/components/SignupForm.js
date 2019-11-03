import React, { useState } from 'react';

export default function SignupForm({ signup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type='text'
        placeholder='Your name'
      />
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
      <button onClick={() => signup({ variables: { name, email, password } })}>
        Signup!
      </button>
    </div>
  );
}
