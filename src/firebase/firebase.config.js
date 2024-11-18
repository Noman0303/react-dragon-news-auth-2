// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiXo1Zs9aggKRLyjoSR8UShj0RGRuvDF8",
  authDomain: "react-dragon-news-auth-f9fd4.firebaseapp.com",
  projectId: "react-dragon-news-auth-f9fd4",
  storageBucket: "react-dragon-news-auth-f9fd4.firebasestorage.app",
  messagingSenderId: "751185549796",
  appId: "1:751185549796:web:002e7a013d967e2eb50ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;