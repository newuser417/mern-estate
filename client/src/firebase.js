// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-fc46f.firebaseapp.com",
    projectId: "mern-estate-fc46f",
    storageBucket: "mern-estate-fc46f.appspot.com",
    messagingSenderId: "662942023018",
    appId: "1:662942023018:web:68bf8667bc260c14fcb913"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);