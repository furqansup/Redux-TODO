// src/reducers/authReducer.js

import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT, SET_LOADING } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false, // New state property for loading indicator
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
