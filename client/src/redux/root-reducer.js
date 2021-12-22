import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import plantReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer'
import userReducer from "./user/user.reducers";

const persistConfig = {
    key:"root",
    storage,
    whitelist:['cart']
}


const rootReducer = combineReducers({
    shop:plantReducer,
    cart:cartReducer,
    user:userReducer
})

export default persistReducer(persistConfig , rootReducer);