// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByo2ElMnSEOCsCJyCq7N5ujr3wpLuCM1M",
  authDomain: "linkedin-clone-a0e89.firebaseapp.com",
  projectId: "linkedin-clone-a0e89",
  storageBucket: "linkedin-clone-a0e89.appspot.com",
  messagingSenderId: "341190684006",
  appId: "1:341190684006:web:67f193a8cd7fa3f7bf2ca7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
