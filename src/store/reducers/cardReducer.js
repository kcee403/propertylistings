import * as actionTypes from '../actions/actionTypes';

const initialState = {// TIP initial state does not need to be here in order to
                      // manipulate the state below. you may start manipulate below w/out
  isViewingSummary: false,
  property: {},
  // price: 0,
  // address: '',
  // city: '',
  // bedrooms: 0,
  // bathrooms: 0,
  // index: 0,
  // carSpaces: 0,
}

const cardReducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.VIEWSUMMARY:
        return {
          ...state,
          isViewingSummary: true,
          property: action.property,
          // price: action.property.price,
          // address: action.property.address,
          // city: action.property.city,
          // bedrooms: action.property.bedrooms,
          // bathrooms: action.property.bathrooms,
          // index: action.property.index,
          // carSpaces: action.property.carSpaces,
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
