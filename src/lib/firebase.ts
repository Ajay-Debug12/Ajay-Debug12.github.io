// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt0vtx-GkaUj1hPTPFRQh120pISW0s6CM",
  authDomain: "portfolio-5e80c.firebaseapp.com",
  projectId: "portfolio-5e80c",
  storageBucket: "portfolio-5e80c.firebasestorage.app",
  messagingSenderId: "588784450818",
  appId: "1:588784450818:web:efb6ea113f347db66e961b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
