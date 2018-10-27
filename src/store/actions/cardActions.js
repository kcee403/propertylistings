import * as actionTypes from './actionTypes.js';

export const viewSummary = (property) => {
  const action = {
    type: actionTypes.VIEWSUMMARY,
    property
  }
  return action;
}

export function closeModal() {
  const action = {
    type: actionTypes.CLOSEMODAL,
  }
  return action;
}
