// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtktjJsd49HNbrdSVk3xJiNaUFi4bKdA",
  authDomain: "ecommerce-react-a9f42.firebaseapp.com",
  projectId: "ecommerce-react-a9f42",
  storageBucket: "ecommerce-react-a9f42.appspot.com",
  messagingSenderId: "304453619916",
  appId: "1:304453619916:web:99ec40a89176d9dddab269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore (app)