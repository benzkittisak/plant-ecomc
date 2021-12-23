import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer'
import userReducer from "./user/user.reducers";
import plantsReducer from "./plants/plants.reducer";
const persistConfig = {
    key:"root",
    storage,
    whitelist:['cart']
}


const rootReducer = combineReducers({
    shop:shopReducer,
    cart:cartReducer,
    user:userReducer,
    plants:plantsReducer
})

export default persistReducer(persistConfig , rootReducer);