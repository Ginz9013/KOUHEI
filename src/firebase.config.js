// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXJYWphcNbkpGLMyg6K3LSU8IbUuBORJ4",
  authDomain: "stuido-6am.firebaseapp.com",
  projectId: "stuido-6am",
  storageBucket: "stuido-6am.appspot.com",
  messagingSenderId: "975872979577",
  appId: "1:975872979577:web:827a4fea801de715fadaa8",
  measurementId: "G-W8ZSPL8VXC",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
