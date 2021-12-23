import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    plants : null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer = (state = INITIAL_STATE , action) => {
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

export default shopReducer;