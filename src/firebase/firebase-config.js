import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBP76lutRf_B0SPlEssvTVNRAOIZuJ0ua0",
    authDomain: "cra-journal.firebaseapp.com",
    projectId: "cra-journal",
    storageBucket: "cra-journal.appspot.com",
    messagingSenderId: "525580294101",
    appId: "1:525580294101:web:9592411d94e3ff97b40f5c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}