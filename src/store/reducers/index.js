import filterReducer from "./filterReducer";
// import Reducer from "./Reducer";
import cardReducer from "./cardReducer";
import propertiesReducer from "./propertiesReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filter: filterReducer,
    prprts: propertiesReducer,
    crd: cardReducer
});

export default rootReducer;
