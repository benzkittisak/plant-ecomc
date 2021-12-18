import { combineReducers } from "redux";

import plantReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer'

const rootReducer = combineReducers({
    shop:plantReducer,
    cart:cartReducer
})

export default rootReducer;