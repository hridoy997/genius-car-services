// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCKwpbLanWC3iSOhUt0niHkrqxPQvgRXGA",
  authDomain: "genius-car-services-12f1b.firebaseapp.com",
  projectId: "genius-car-services-12f1b",
  storageBucket: "genius-car-services-12f1b.appspot.com",
  messagingSenderId: "377987158638",
  appId: "1:377987158638:web:9194f1d65388e334c7cc7f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
