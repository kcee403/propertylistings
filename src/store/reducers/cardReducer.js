import * as actionTypes from '../actions/actionTypes';

const initialState = {// TIP initial state does not need to be here in order to
                      // manipulate the state below. you may start manipulate below w/out
  isViewingSummary: false,
  property: {},
}

const cardReducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.VIEWSUMMARY:
        return {
          ...state,
          isViewingSummary: true,
          property: action.property,
        }

      case actionTypes.CLOSEMODAL:
        return {
          ...state,
          isViewingSummary: false,
        }
      default:
      return state;
    }
}
export default cardReducer;
