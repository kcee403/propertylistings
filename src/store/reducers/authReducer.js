import * as actionTypes from '../actions/actionTypes';
const initialState = {
  isAuthenticated: false,
  isAttemptingLogin: false,
  userId: null,
  username: null,
  authRedirectPath: '/',
}

const authenticate = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ATTEMPTLOGIN:
      console.log("ATTEMPTING SWITCHED TO ", action.isAttemptingLogin);
      return {
        ...state,
        isAttemptingLogin: true,
      }

    case actionTypes.LOGOUT:
      console.log("LOGOUT REDUCER! ");
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      }

    case actionTypes.LOGIN:
      console.log("LOGIN REDUCER! ");
      return {
        ...state,
        isAuthenticated: true,
      }

    case actionTypes.LOGIN_SUCCESS:
      console.log("LOGIN SUCCESS REDUCER! ", action.username);
      return {
        ...state,
        userId: action.userId,
        username: action.username,
      }

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path
      }

    case actionTypes.CLOSEMODAL:
      return {
        ...state,
        isAttemptingLogin: false,
      }

    default:
    return state;
  }
}

export default authenticate;
