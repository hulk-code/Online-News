// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHCCXO1HHboC_aX_GjBeS7IGn-zKbzAJY",
  authDomain: "online-newspaper-4bd0c.firebaseapp.com",
  projectId: "online-newspaper-4bd0c",
  storageBucket: "online-newspaper-4bd0c.firebasestorage.app",
  messagingSenderId: "66554870489",
  appId: "1:66554870489:web:18d1df1734778d0f749cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;