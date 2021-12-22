import { takeLatest, all, call, put } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

import {
  auth,
  googleProvider,
  createProfileDocument,
  getCurrentUser,
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

export function* isUserAuthenticated() {
  try {
    const userRef = yield getCurrentUser();
    if (!userRef) return;
    yield getSnapshotFromUserAuth(userRef);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUpStarting( {payload: {email , password , displayName}}){
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email , password);
    yield put(signUpSuccess({user , additionalData:{displayName}}))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({payload : {user ,additionalData}}){
  yield getSnapshotFromUserAuth(user , additionalData);
}


// Function for call

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckingUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpStarting);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS , signInAfterSignUp)
}

// Master Function
export function* userSaga() {
  yield all([
    call(onGoogleSignStart),
    call(onCheckingUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
