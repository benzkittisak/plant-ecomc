import ShopActionTypes from "./shop.type";

import PLANTS_DATA from "./shop.data";

const INITIAL_STATE = {
    plants : PLANTS_DATA
}

const plantReducer = (state = INITIAL_STATE , action) => {
    switch(ShopActionTypes.FETCH_COLLECTIONS_START){
        default:
            return state;
    }
}

export default plantReducer;