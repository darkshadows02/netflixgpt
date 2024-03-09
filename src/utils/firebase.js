// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZRFrOlPCH4IBLs7-xP3j69FHHsF0VBlI",
  authDomain: "netflixgpt-3aab4.firebaseapp.com",
  projectId: "netflixgpt-3aab4",
  storageBucket: "netflixgpt-3aab4.appspot.com",
  messagingSenderId: "681441709863",
  appId: "1:681441709863:web:18924066f85735c8bf2302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();