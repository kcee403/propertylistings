import filterReducer from "./filterReducer";
// import Reducer from "./Reducer";
import cardReducer from "./cardReducer";
import propertiesReducer from "./propertiesReducer";
import authReducer from './authReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filter: filterReducer,
    prprts: propertiesReducer,
    crd: cardReducer,
    auth: authReducer,
});

export default rootReducer;
