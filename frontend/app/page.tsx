'use client';
import React from 'react';
import { useState } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://backend:5000/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ msg: 'Hello from frontend' }),
    });
    const data = await res.json();
    setMessage(data.response);
  };

  return (
    <main style={{ padding: '20px' }}>
      <h1>Welcome to the DevOps Assignment</h1>
      <button onClick={sendMessage}>Send Message</button>
      <p>{message}</p>
    </main>
  );
}

