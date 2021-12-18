import { combineReducers } from "redux";

import plantReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
    plants:plantReducer
})

export default rootReducer;