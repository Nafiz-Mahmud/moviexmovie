// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw66OHAwmKjcpCAtg1Up79PNaqaiaGHh8",
  authDomain: "movie-x-movie-e9fc9.firebaseapp.com",
  projectId: "movie-x-movie-e9fc9",
  storageBucket: "movie-x-movie-e9fc9.appspot.com",
  messagingSenderId: "892768602824",
  appId: "1:892768602824:web:71c2d3bc2dc676fdfe33fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
