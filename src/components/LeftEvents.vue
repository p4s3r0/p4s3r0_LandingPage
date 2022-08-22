<script setup>
import Event from "./Event.vue"
</script>

<template>

<div id="containerEvents">
    <div id="topBar">
        <div class="actionButton" style="background-color: #FF5E57;"> </div>
        <div class="actionButton" style="background-color: #FFBB2E;"> </div>
        <div class="actionButton" style="background-color: #38C149;"> </div>
        <p>Events</p>
    </div>
    <event month="AUG" day="22" time="19:00 - 20:00" event="Tennis mit Papa 🎾"/>
    <event month="AUG" day="24" time="ALL DAY" event="KTE 💁🏻‍♀️ Urlaub buchen "/>
    <event month="AUG" day="28" time="ALL DAY" event="Ina Geburtstag 🥳"/>
</div>

</template>

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

