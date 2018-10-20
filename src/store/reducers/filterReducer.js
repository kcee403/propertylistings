import * as actionTypes from '../actions/actionTypes';
import propertiesReducer from "./propertiesReducer";

const initialState = {// TIP initial state does not need to be here in order to
                      // manipulate the state below. you may start manipulate below w/out
  filterName: null,
  filterIsVisible: false,
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.TOGGLEFILTER:
        console.log("TOGGLING FILTER, from 'filterReducer' ");
        console.log("Properties Data being brought over to filterReducer :", propertiesReducer.propertyData );
        return {
          ...state,
          filterIsVisible: !state.filterIsVisible,
        }
      case actionTypes.HANDLEFILTERCHANGE:
        console.log("FILTER Reducer handleFilterChange: ", action.name + action.value);
        return {
          ...state,
          [action.name]: action.value,//[name] strictly referring to input elements by name=""
        }
      default:
      return state;
    }
}
export default filterReducer;
