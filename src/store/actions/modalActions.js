import * as actionTypes from './actionTypes.js';

export const closeModal = () => {// This is an action without an reducer because it's used in other reducers
  return {
    type: actionTypes.CLOSELOGIN,
  };
}
