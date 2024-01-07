// src/components/LoginForm.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions"; // Import the login action creator

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleLogin = async () => {
    try {
      if (!loading) {
        // Only dispatch login if not already loading
        await dispatch(login({ username, password }));
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login failure, e.g., display an error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default LoginForm;
