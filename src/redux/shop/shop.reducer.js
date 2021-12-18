import ShopActionTypes from "./shop.type";

import PLANTS_DATA from "./shop.data";

const INITIAL_STATE = {
    plants : PLANTS_DATA,
    isFetching:false,
    errorMessage:undefined
}

const plantReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                plants:action.payload
            }
        default:
            return state;
    }
}

export default plantReducer;