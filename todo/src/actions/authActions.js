// src/actions/authActions.js

import authService from '../services/authService';

// Action types
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const SET_LOADING = 'SET_LOADING'; // New action type

// Action creators
export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setLoading = (loading) => ({ // New action creator
  type: SET_LOADING,
  payload: loading,
});

// Async action creator for user signup
export const signup = (user) => async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const signedUpUser = await authService.signup(user);
    dispatch(signupSuccess(signedUpUser));
  } catch (error) {
    console.error('Signup failed:', error.message);
    // Handle signup failure, e.g., dispatch an error action
  } finally {
    dispatch(setLoading(false)); // Set loading to false, regardless of success or failure
  }
};

// Async action creator for user login
export const login = (user) => async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const loggedInUser = await authService.login(user);
    dispatch(loginSuccess(loggedInUser));
  } catch (error) {
    console.error('Login failed:', error.message);
    // Handle login failure, e.g., dispatch an error action
  } finally {
    dispatch(setLoading(false)); // Set loading to false, regardless of success or failure
  }
};

// Async action creator for user logout
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    await authService.logout();
    dispatch(logout());
  } catch (error) {
    console.error('Logout failed:', error.message);
    // Handle logout failure, e.g., dispatch an error action
  } finally {
    dispatch(setLoading(false)); // Set loading to false, regardless of success or failure
  }
};
