// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxueXdu2Bxa398ixlCb79LPmbRtg17r9k",
  authDomain: "shoppingcart-76b93.firebaseapp.com",
  projectId: "shoppingcart-76b93",
  storageBucket: "shoppingcart-76b93.appspot.com",
  messagingSenderId: "84348394847",
  appId: "1:84348394847:web:7ec9061505b4a940342aea",
  measurementId: "G-YPRLD1F6VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

 