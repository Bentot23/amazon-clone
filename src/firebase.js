import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBB7ATUGrwxuWiDfN9M0CUPGkdoSYzS7ng",
    authDomain: "clone-273b4.firebaseapp.com",
    projectId: "clone-273b4",
    storageBucket: "clone-273b4.appspot.com",
    messagingSenderId: "441680239551",
    appId: "1:441680239551:web:067102b24b0ac3321c5f0a",
    measurementId: "G-H3CQ4CKMF2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }