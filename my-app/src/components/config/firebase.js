import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdi6zs8qLN1pIMoEx_SbATyytuFRiUZp4",
  authDomain: "turo-36c8f.firebaseapp.com",
  projectId: "turo-36c8f",
  storageBucket: "turo-36c8f.appspot.com",
  messagingSenderId: "199211377774",
  appId: "1:199211377774:web:ddb5d145f2111d8d1db27f",
  measurementId: "G-ZCKMKB2MF3"
 };


const app = initializeApp(firebaseConfig);
const facebook_provider = new FacebookAuthProvider();
const  google_provider = new GoogleAuthProvider();
export{
    getAuth,
    createUserWithEmailAndPassword,
    facebook_provider,
    google_provider,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
}