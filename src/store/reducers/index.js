import filterReducer from "./filterReducer";
import propertiesReducer from "./propertiesReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filter: filterReducer,
    prprts: propertiesReducer,
});

export default rootReducer;
