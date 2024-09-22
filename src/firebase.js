// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBeqt8WwPg_xQ7XgBaNgQtLfFaAiXcbCco",
    authDomain: "linkedin-clone-react-red-c4d2b.firebaseapp.com",
    projectId: "linkedin-clone-react-red-c4d2b",
    storageBucket: "linkedin-clone-react-red-c4d2b.appspot.com",
    messagingSenderId: "129763211940",
    appId: "1:129763211940:web:6783d5eb6a263734d04431",
    measurementId: "G-16SW7LNXNH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};