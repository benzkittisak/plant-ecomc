import {all , call} from 'redux-saga/effects'

import { userSaga } from './user/user.sagas'
import { cartSaga } from './cart/cart.sagas'
import { shopSaga } from './shop/shop.saga'

export default function* rootSaga() {
        yield all([
            call(shopSaga),
            call(userSaga),
            call(cartSaga),
        ])
}