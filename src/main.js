import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyAYgohUcOtGwgtDhdXlec99BJQ92rveJhk",
//     authDomain: "landingpage-d70d6.firebaseapp.com",
//     projectId: "landingpage-d70d6",
//     storageBucket: "landingpage-d70d6.appspot.com",
//     messagingSenderId: "356778437957",
//     appId: "1:356778437957:web:6fb2e70693bc256952622c",
//     measurementId: "G-F39TDMTB7G"
// };

// const appFire = initializeApp(firebaseConfig);
// const db = getFirestore(appFire);

// async function getEvents(db) {
//     const citiesCol = collection(db, 'events');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

// const eventList = getEvents(db);

// console.log(eventList)

const app = createApp(App);
app.mount("#app");