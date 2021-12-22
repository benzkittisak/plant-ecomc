import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyACRZ8EMw90TTnHCqqgWtk8U1EPqJjlsFk",
  authDomain: "plant-ecom.firebaseapp.com",
  projectId: "plant-ecom",
  storageBucket: "plant-ecom.appspot.com",
  messagingSenderId: "959610779882",
  appId: "1:959610779882:web:69a9c09c4cc705b29ebf93",
};

export const createProfileDocument = async (userAuth , additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const {displayName , email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log("error creating user" , error.message);
      }
  }
  return userRef;
}

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unsubscibe = auth.onAuthStateChanged(userAuth => {
      unsubscibe();
      res(userAuth)
    } , rej)
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({prompt : "select_account"});
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;