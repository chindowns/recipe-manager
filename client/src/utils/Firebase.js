// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
// import "firebase/analytics";
import {firebaseConfig} from './config'
import axios from 'axios';

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

export const getUser = () => {
    return firebase.auth().onAuthStateChanged(function (fbuser) {
        if (fbuser) {
            // console.log(`User is signed in as: \n${fbuser.email}\n${fbuser.uid}\n${fbuser.displayName} `)
            // console.log(fbuser.providerData)
            // User is signed in.
            // var displayName = fbuser.displayName;
            // var email = fbuser.email;
            // var emailVerified = fbuser.emailVerified;
            // var photoURL = fbuser.photoURL;
            // var isAnonymous = fbuser.isAnonymous;
            // var uid = fbuser.uid;
            // var providerData = fbuser.providerData;

            console.log(`Setting User with fbuser`)
            axios.get(`/api/user/${fbuser.email}`)
                .then(response => {return(response.data)})
                .catch(error => console.log(error));
            }
    })
}

export default firebase;