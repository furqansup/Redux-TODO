// src/components/SignupForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/authActions'; // Import the signup action creator

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSignup = async () => {
    try {
      if (!loading) {
        // Only dispatch signup if not already loading
        await dispatch(signup({ username, password }));
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle signup failure, e.g., display an error message
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignup} disabled={loading}>
        {loading ? 'Signing up...' : 'Signup'}
      </button>
    </div>
  );
};

export default SignupForm;
