// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-M9di0vlRQJ0zmtGk0VqLmGbAncGsRg",
  authDomain: "netflix-gpt-65cb3.firebaseapp.com",
  projectId: "netflix-gpt-65cb3",
  storageBucket: "netflix-gpt-65cb3.appspot.com",
  messagingSenderId: "644696814887",
  appId: "1:644696814887:web:75a4c09b1f447daf4ae502",
  measurementId: "G-CPXC3FPMXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();