import * as actionTypes from './actionTypes.js';

export const toggleFilter = () => {
  const action = {
    type: actionTypes.TOGGLEFILTER,
  }
  return action;
}
export const handleFilterChange = (name, value) => {

  const action = {
    type: actionTypes.HANDLEFILTERCHANGE,
    name,
    value,
  }
  return action;
}
