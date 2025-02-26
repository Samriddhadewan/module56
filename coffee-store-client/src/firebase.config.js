// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiPn9ECYjebROrL7Y52k6SquKYMTpsJrU",
  authDomain: "coffee-house-ee52f.firebaseapp.com",
  projectId: "coffee-house-ee52f",
  storageBucket: "coffee-house-ee52f.firebasestorage.app",
  messagingSenderId: "82104852087",
  appId: "1:82104852087:web:6854971ebdd0a42eb3b072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
