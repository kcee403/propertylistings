import * as actionTypes from './actionTypes.js';
import axios from 'axios';

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


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
    return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: token,
      userId: userId,
    };
};

export const authFail = error => {
    return {
      type: actionTypes.AUTH_FAIL,
      error: error
    }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
      dispatch(authStart());
      const authData = {
            email: email,
            password: password,
            returnSecureToken: true
      };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyACfeTwOnXIL3tZAuohv2H_NNtnGxAK0bY';
      if(!isSignup) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyACfeTwOnXIL3tZAuohv2H_NNtnGxAK0bY';
      }
      axios.post( url, authData)
      .then(res => {
        console.log( "AuthData: ", authData);
        console.log( "Response: ", res.data);
        console.log( "Local ID: ", res.data.localId);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
      })
      .catch( err => {
        console.log("Custom Error: ", err);
        dispatch(authFail(err));
      });
    };
};


// export const closeLogin = () => {
//   return {
//     type: actionTypes.CLOSELOGIN,
//   };
// }
