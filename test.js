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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
 
async function hentBok() {
    const bokRef = doc(db, "varm-mat", id);
    const bokSnap = await getDoc(bokRef);
 
    const bokDisplay = document.getElementById("bokDisplay");
 
 
    const data = bokSnap.data();
 
    bokDisplay.innerHTML = `
    <div class="dagens-mat">
      <img src=${data.bildet} class="varm-bildet">
      <h3 class="varmtekst"> ${data.ingredienser} </h3>
      <h3 class="alergi-kort"> ${data.alergender} </h3>
    <div>
    `;
}
 
hentBok();

async function hentBok2() {
    const bokRef = doc(db, "kiosk-mat", id);
    const bokSnap = await getDoc(bokRef);
 
    const bokDisplay = document.getElementById("bokDisplay");
 
 
    const data = bokSnap.data();
 
    bokDisplay.innerHTML = `
    <div class="kiosk-mat">
      <div class="kiosk-bildet">
        <img src=${data.bildet} class="kiosk-mat-bildet">
      </div>
      <div class="kiosk-tekst">
        <h3>${data.navn}</h3>
      </div>
      <div class="kiosk-tekst">
        <h3>---</h3>
        <h3>${data.pris}</h3>
        <h3>KR</h3>
      </div>
    <div>
    `;
}
 
hentBok2();