import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { SET_SIGNOUT, SET_AUTH } from './types';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Logout
  const setSignout = () => {
    // console.log('setSignout()');
    dispatch({ type: SET_SIGNOUT });
  };

  const setIsAuthenticated = () => {
    // console.log('setIsAuthenticated()');
    dispatch({ type: SET_AUTH });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        setIsAuthenticated,
        setSignout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
