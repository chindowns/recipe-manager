// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
// import "firebase/analytics";
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export const signout = () => {
    firebase.auth().signOut().catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        console.log(`Error: ${errorCode} : ${errorMessage}`);
        // [END_EXCLUDE]
    });
}

export default firebase;