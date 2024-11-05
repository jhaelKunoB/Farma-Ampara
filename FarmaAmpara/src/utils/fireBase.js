// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDArnHi9WUGdiIAMMKeC9lIKuXZRy0vg",
  authDomain: "farmacia-77662.firebaseapp.com",
  databaseURL: "https://farmacia-77662-default-rtdb.firebaseio.com",
  projectId: "farmacia-77662",
  storageBucket: "farmacia-77662.appspot.com",
  messagingSenderId: "462794672859",
  appId: "1:462794672859:web:e368c3c35bfe9445e61afe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);  // Para usar Firestore

export { db };