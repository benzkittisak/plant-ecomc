import { takeLatest, all, call, put } from "redux-saga/effects";

import userActionTypes from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createProfileDocument,
} from "../../firebase/firebase.util";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createProfileDocument, userAuth, additionalData);
    const snapShot = yield userRef.get();
    yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignStart)]);
}
