// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlp0OEw4WC3A0OOEo4dMWyhwqajAV5mn8",
  authDomain: "inventory-manager-4686f.firebaseapp.com",
  projectId: "inventory-manager-4686f",
  storageBucket: "inventory-manager-4686f.appspot.com",
  messagingSenderId: "776648841792",
  appId: "1:776648841792:web:ed901aa16fb85a573a1da5",
  measurementId: "G-1N5DK1G3NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
//const analytics = getAnalytics(app);

export {firestore}

