// src/components/LogoutButton.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleLogout = async () => {
    try {
      if (!loading) {
        // Only dispatch logout if not already loading
        await dispatch(logoutUser());
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
      // Handle logout failure, e.g., display an error message
    }
  };

  return (
    <div>
      <button onClick={handleLogout} disabled={loading}>
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  );
};

export default LogoutButton;
