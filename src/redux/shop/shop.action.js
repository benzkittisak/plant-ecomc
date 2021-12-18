import ShopActionTypes from './shop.type'

export const fetchCollectionStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = plants => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:plants
})