
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

/*
await updateDoc(
  doc(db, "varm-mat", "1 mandag"), {
    matrett: "lasagne",
    ingredienser: "ost, kjøttdeig, løk, tomat, kvitløk, chilli, pasta, krydder",
    alergender: "G, L",
    pris: 45,
    bildet: "https://static.vecteezy.com/system/resources/previews/047/084/688/non_2x/lasagna-on-transparent-background-free-png.png"
});


*/
/*
await updateDoc(
  doc(db, "varm-mat", "2 tirsdag"), {
    matrett: "pizza",
    ingredienser: "ost, kjøttdeig, løk, tomat, kvitløk, chilli, mel, krydder, pizzabunn",
    alergender: "G, L",
    pris: 45,
    bildet: "https://png.pngtree.com/png-vector/20250124/ourmid/pngtree-mouth-watering-pepperoni-pizza-slice-png-image_15317290.png"
});
/*

await updateDoc(
  doc(db, "varm-mat", "3 onsdag"), {
    matrett: "pasta bolognese",
    ingredienser: "egg, melk, mel, kjøttdeig, tomat saus, løk, krydder",
    alergender: "G, L",
    pris: 45,
    bildet: "https://png.pngtree.com/png-vector/20231001/ourmid/pngtree-spaghetti-bolognese-spaghetti-food-catering-fast-food-decorative-pattern-clip-art-png-image_10141556.png"
});


await updateDoc(
  doc(db, "varm-mat", "4 torsdag"), {
    matrett: "pasta bolognese",
    ingredienser: "egg, melk, mel, kjøttdeig, tomat saus, løk, krydder",
    alergender: "G, L",
    pris: 45,
    bildet: "https://png.pngtree.com/png-vector/20231001/ourmid/pngtree-spaghetti-bolognese-spaghetti-food-catering-fast-food-decorative-pattern-clip-art-png-image_10141556.png"
});



await updateDoc(
  doc(db, "varm-mat", "5 fredag"), {
    matrett: "hamburger",
    ingredienser: "kjøtteig, brød, ost, argurk, salat, ketchup",
    alergender: "G",
    pris: 45,
    bildet: "https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-hamburger-png-image_13094305.png"
});
*/

/*
await updateDoc(
  doc(db, "kiosk-mat", "baguett-ost og skinke"), {
    navn: "baguett ost og skinke",
    bildet: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png",
    pris: 37
});

await updateDoc(
  doc(db, "kiosk-mat", "baguett kylling"), {
    navn: "baguett kylling",
    bildet: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png",
    pris: 45
});

await updateDoc(
  doc(db, "kiosk-mat", "baguett ost"), {
    navn: "baguett ost",
    bildet: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png",
    pris: 37
});

await updateDoc(
  doc(db, "kiosk-mat", "baguett egg og bacon"), {
    navn: "baguett ost og skinke",
    bildet: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png",
    pris: 45
});

await updateDoc(
  doc(db, "kiosk-mat", "mr lee biff"), {
    navn: "mr lee biff",
    bildet: "https://www.orklafoods.no/wp-content/uploads/sites/2/2024/09/159735.webp",
    pris: 20
});

await updateDoc(
  doc(db, "kiosk-mat", "mr lee kylling"), {
    navn: "mr lee kylling",
    bildet: "https://www.orklafoods.no/wp-content/uploads/sites/2/2024/09/159734.webp",
    pris: 20
});

await updateDoc(
  doc(db, "kiosk-mat", "iste"), {
    navn: "iste",
    bildet: "https://www.holdbart.no/images/thumbs/0002362_iste-fersken-1l_550.png",
    pris: 25
});

await updateDoc(
  doc(db, "kiosk-mat", "iste uten sukker"), {
    navn: "iste uten sukker",
    bildet: "https://www.holdbart.no/images/thumbs/0002362_iste-fersken-1l_550.png",
    pris: 25
});

await updateDoc(
  doc(db, "kiosk-mat", "litago sjokolade"), {
    navn: "litago skjokolade melk",
    bildet: "https://www.tine.no/_/packshot/160x160/262.png",
    pris: 27
});

await updateDoc(
  doc(db, "kiosk-mat", "litago jordbær"), {
    navn: "litago jordbær melk",
    bildet: "https://www.tine.no/_/packshot/160x160/266.png",
    pris: 27
});
*/
/* await setDoc(
  doc(db, "kiosk-mat", "urge"), {
    navn: "urge",
    bildet: "https://engrosnett.no/image/kalde-drikker/mineralvann/2642791-2642791.jpg?v=638181011918700000",
    pris: 23
});

await setDoc(
  doc(db, "kiosk-mat", "fanta exotic"), {
    navn: "fanta exotic",
    bildet: "https://cdn.dittsvenskaskafferi.com/media/iopt/catalog/product/cache/c23e908376fe6a9669f84048ef0b1af0/image/81542cac/fanta-exotic-flaska-1500ml.webp",
    pris: 20
});
await setDoc(
  doc(db, "kiosk-mat", "pepsi max"), {
    navn: "pespi max",
    bildet: "https://www.pepsi.co.uk/prod/s3fs-public/2024-02/_MAX.png",
    pris: 23
});
await setDoc(
  doc(db, "kiosk-mat", "iskaffe"), {
    navn: "iskaffe",
    bildet: "https://norwegianfoodstore.com/cdn/shop/products/tine-iskaffe-iced-coffee-kaffe-mocca-mocha-original-norwegian-norway-norsk-traditional-buy-online.jpg?v=1760716810",
    pris: 20
});
await setDoc(
  doc(db, "kiosk-mat", "rett i koppen"), {
    navn: "pasta di parma",
    bildet: "https://bilder.ngdata.no/7037610059930/meny/large.jpg",
    pris: 27
});
*/

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
    <div class="dagens-mat">
      <img src=${data.bildet} class="varm-bildet">
      <h3 class="varmtekst"> ${data.ingredienser} </h3>
      <h3 class="alergi-kort"> ${data.alergender} </h3>
    <div>
    `;
  });
}

displayData()

async function kioskdisplayData() {
  // Henter alle dokumentene fra "elever"-samlingen
  const querySnapshot = await getDocs(collection(db, "kiosk-mat"));
 
  // Henter referansen til <div>-elementet
  const kioskdataDisplay = document.getElementById("kioskdataDisplay");
 
  // Looper gjennom hvert dokument i samlingen
  querySnapshot.forEach((doc) => {
    const data = doc.data();
 
    // Legger til HTML-innhold for hvert dokument
    kioskdataDisplay.innerHTML += `
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
  });
}

kioskdisplayData()