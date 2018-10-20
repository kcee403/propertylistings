import * as actionTypes from '../actions/actionTypes';

const initialState = {// TIP initial state does not need to be here in order to
                      // manipulate the state below. you may start manipulate below w/out
  propertyData: "empty",
}

const propertiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCHPROPERTIES:
          console.log("Fetch Properties from 'propertyReducer': ", action.data);
          return {
            ...state,
            propertyData: action.data,
          }
        default:
        return state;
    }
}
export default propertiesReducer;
 
