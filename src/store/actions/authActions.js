import * as actionTypes from './actionTypes.js';

export function logout(isAuthenticated) {
  const action = {
    type: actionTypes.LOGOUT,
    isAuthenticated
  }
  return action;
}

export function login(isAuthenticated) {
  const action = {
    type: actionTypes.LOGIN,
    isAuthenticated
  }
  return action;
}

export function attemptLogin(isAttemptingLogin) {
  const action = {
    type: actionTypes.ATTEMPTLOGIN,
    isAttemptingLogin,
  }
  return action;
}

export function loginSuccess(userId, username) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    userId,
    username,
  };
}

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path,
  }
};

// export const closeLogin = () => {
//   return {
//     type: actionTypes.CLOSELOGIN,
//   };
// }
