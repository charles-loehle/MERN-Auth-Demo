import { LOGIN_SUCCESS, SET_AUTH, SET_SIGNOUT } from './types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS reducer callled');
      // put the token in localStorage
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case SET_AUTH:
    case SET_SIGNOUT:
      console.log('SET_AUTH reducer callled');
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    default:
      return state;
  }
};
