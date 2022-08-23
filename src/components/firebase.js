import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAYgohUcOtGwgtDhdXlec99BJQ92rveJhk",
    authDomain: "landingpage-d70d6.firebaseapp.com",
    projectId: "landingpage-d70d6",
    storageBucket: "landingpage-d70d6.appspot.com",
    messagingSenderId: "356778437957",
    appId: "1:356778437957:web:6fb2e70693bc256952622c",
    measurementId: "G-F39TDMTB7G"
};

const appFire = initializeApp(firebaseConfig);
export const db = getFirestore(appFire);

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

async function getEvents(db) {
    const citiesCol = collection(db, 'events');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

let eventListUnfiltered = await getEvents(db);

eventListUnfiltered.forEach(element => {
    element["sortValue"] = element["year"] * 10000 + element["month"] * 100 + element["day"];
    element["month"] = months[element["month"] - 1]
});

eventListUnfiltered.sort(function(a, b) {
    return b.sortValue - a.sortValue
});

export const eventList = eventListUnfiltered.reverse()

export function addToFirebase(db, newEvent) {
    addDoc(collection(db, "events"), newEvent).then((refDoc) => {
        const docRef = doc(db, "events", refDoc.id);
        updateDoc(docRef, { id: refDoc.id })
    })
}

export async function deleteFromFirebase(dsb, id) {
    const db = getFirestore();
    const docRef = doc(db, "events", id);
    deleteDoc(docRef)
        .then(() => {
            console.log("Entire Document has been deleted successfully.")
        })
        .catch(error => {
            console.log(error);
        })
}