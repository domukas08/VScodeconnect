// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc_TOnikLevFAVw8Hl5YiWRY92TlZ4YSc",
  authDomain: "kantine-d8545.firebaseapp.com",
  projectId: "kantine-d8545",
  storageBucket: "kantine-d8545.firebasestorage.app",
  messagingSenderId: "991632546037",
  appId: "1:991632546037:web:4b012359193507572b0dbc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

import { addDoc, collection, updateDoc, deleteDoc, doc, setDoc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";







async function displayData() {
  // Henter alle dokumentene fra "elever"-samlingen
  const querySnapshot = await getDocs(collection(db, "varm-mat"));
 
  // Henter referansen til <div>-elementet
  const dataDisplay = document.getElementById("dataDisplay");
 
  // Looper gjennom hvert dokument i samlingen
  querySnapshot.forEach((doc) => {
    const data = doc.data();
 
    // Legger til HTML-innhold for hvert dokument
    dataDisplay.innerHTML += `
    <h1>${data.matrett} </h1>
    <img src="${data.bildet}" alt="bildet av ${data.matrett}">
    `;
  });
}

displayData()