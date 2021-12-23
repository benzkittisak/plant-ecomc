import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsFromFirebaseToMap,
} from "../../firebase/firebase.util";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";

import ShopActionTypes from "./shop.type";

export function* startFetchingColletions() {
  try {
    const collectionRef = yield firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(
      convertCollectionsFromFirebaseToMap,
      snapShot
    );
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

export function* onFetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    startFetchingColletions
  );
}

export function* shopSaga() {
  yield all([call(onFetchCollectionStart)]);
}
