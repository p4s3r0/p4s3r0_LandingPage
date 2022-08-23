<template #fallback>

<div id="containerEvents">
    <div id="topBar">
        <div class="actionButton" style="background-color: #FF5E57;"> </div>
        <div class="actionButton" style="background-color: #FFBB2E;"> </div>
        <div class="actionButton" style="background-color: #38C149;"> </div>
        <p>Events</p>
    </div>
    <event v-for="event in eventList" 
                :key="event.id" 
                :month="event.month" 
                :day="event.day" 
                :time="event.time" 
                :event="event.description" />
</div>

</template>

<script setup>
import Event from "./Event.vue"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


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
const db = getFirestore(appFire);

async function getEvents(db) {
    const citiesCol = collection(db, 'events');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let eventListUnfiltered = await getEvents(db);

eventListUnfiltered.forEach( element => {
    element["sortValue"] = element["year"]*10000 + element["month"]*100 + element["day"];
    element["month"] = months[element["month"]]
})
eventListUnfiltered.sort(function(a,b) {
    return b.sortValue - a.sortValue
});

let eventList = eventListUnfiltered.reverse()

console.log(eventList)
</script>





<style scoped>
#containerEvents {
    /* CSS */
    position: absolute;
    left: 10px;
    bottom: 10px;
    /* BLURRY BACKGROUND*/
    background-color: rgba(40, 40, 40, 0.6);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.2px);
    -webkit-backdrop-filter: blur(14.2px);
    padding-bottom: 10px;
}


#topBar {
    position: relative;
    width: 320px;
    height: 25px;
    background-color: #1E1E1E;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
}

#topBar p {
    margin-left: 80px;
}

.actionButton {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    margin-top: 6.5px;
    border-radius: 6px;
}


/* MOBILE VERSION */
@media only screen and (max-width: 1000px) {
#containerEvents {
    /* CSS */
    position: relative;
    left: calc(50vw - 330px/2);
    width: 320px;
    top: 80px;
}
}



</style>

