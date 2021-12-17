import { combineReducers } from "redux";

import plantReducer from './plant/plants.reducer';

const rootReducer = combineReducers({
    plants:plantReducer
})

export default rootReducer;