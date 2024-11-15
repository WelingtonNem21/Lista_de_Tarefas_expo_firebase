import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyBcQTcG2qAJP25eXCr-M23RVyzzTne0fTM",
    authDomain: "projetolista-c174a.firebaseapp.com",
    projectId: "projetolista-c174a",
    storageBucket: "projetolista-c174a.firebasestorage.app",
    messagingSenderId: "413596725089",
    appId: "1:413596725089:web:a9d77c639e90ab461f9f20",
    measurementId: "G-3FJ6Y75H32"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }