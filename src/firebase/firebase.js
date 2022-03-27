// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChbwE7ePwSnZer2k-W0nq4DMUy9Y--Ijo",
  authDomain: "fir-booklist-website.firebaseapp.com",
  projectId: "fir-booklist-website",
  storageBucket: "fir-booklist-website.appspot.com",
  messagingSenderId: "270278811474",
  appId: "1:270278811474:web:953a5807633a370958e48b",
  measurementId: "G-F7VFM36P8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};