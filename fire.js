
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdjcRfpU1fvPZsFr_7U03zrrJtmQO1erg",
  authDomain: "nettside-domas.firebaseapp.com",
  projectId: "nettside-domas",
  storageBucket: "nettside-domas.firebasestorage.app",
  messagingSenderId: "260489160705",
  appId: "1:260489160705:web:311fefc2e0ee8a42eb3800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();