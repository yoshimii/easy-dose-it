import ReactNative from 'react-native';
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBH3aJT_yiIvKsoGd8RRYRgqDDmck7Mf8c",
  authDomain: "easydoseit.firebaseapp.com",
  databaseURL: "https://easydoseit-98199.firebaseio.com",
  projectId: "easydoseit-98199",
  storageBucket: "easydoseit-98199.appspot.com",
  messagingSenderId: "622044171543",
  appId: "1:622044171543:android:cd4f11864b9a4668aefb52"
}

//Initialize Firebase

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

// export const provider = new firebase.auth.GoogleAuthProvider()
// export const fbProvider = new firebase.auth.FacebookAuthProvider()
//export const signInWithGoogle = () => auth.signInWithPopup(provider) //*provides the pop up window when loggin in with google
//export const signInWithFacebook = () => auth.signInWithPopup(fbProvider) //attempt at fb login

firebase.firestore()
export default firebase
