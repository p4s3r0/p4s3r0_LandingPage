<template>
<div id="container">
    <h1> {{ month }} </h1>
    <h2> {{ day }} </h2>
    <svg version="1.1" viewBox="0 0 512 512">
        <g>
            <g>
            <path d="m256,51.8c-112.6,0-204.2,91.6-204.2,204.2s91.6,204.2 204.2,204.2 204.2-91.6 204.2-204.2-91.6-204.2-204.2-204.2v-1.42109e-14zm0,449.2c-135.1,0-245-109.9-245-245s109.9-245 245-245 245,109.9 245,245-109.9,245-245,245z"/>
            <path d="m344.1,276.4h-88.1c-11.3,0-20.4-9.1-20.4-20.4v-157.8c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v137.4h67.7c11.3,0 20.4,9.1 20.4,20.4 5.68434e-14,11.3-9.1,20.4-20.4,20.4z"/>
            </g>
        </g>
    </svg>
    <h3> {{ time }} </h3>
    <p> {{ event }} </p>
    <button @click="deleteFromDatabase">DEL</button>
</div>
</template>

<style scoped>
#container {
    /* CONSTANTS*/
    --container-width: 300px;
    --container-height: 65px;
    /* CSS */
    width: var(--container-width);
    height: var(--container-height);
    /* BLURRY BACKGROUND*/
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.2px);
    -webkit-backdrop-filter: blur(14.2px);
    margin-top: 5px;
    color: black;
    margin-left: 10px;
}

h1 {
    position: relative;
    top: 10px;
    width: 50px;
    text-align: center;
    color: rgba(0,0,0,0.5);
    font-size: 1em;
}

h2 {
    position: absolute;
    color: black;
    font-size: 1.5em;
    font-weight: 700;
    width: 50px;
    text-align: center;
}

h3 {
    position: relative;
    width: 200px;
    top: -38px;
    left: 92px;
    font-size: 1em;
    font-weight: 200;
}

p {
    position: relative;
    left: 70px;
    top: -40px;
    font-weight: 500;
    width: 200px;
}

svg {
    position: relative;
    width: 15px;
    margin-left: 70px;
    top: -12px;
}

button {
    position: relative;
    top: -80px;
    left: 305px;
    height: 40px;
    width: 40px;
    background-color: rgb(233, 73, 73);
    border: none;
    border-radius: 10px;
}
</style>

<script>
import {deleteFromFirebase, db} from './firebase.js'

export default {
    props: ['month', 'day', 'time', 'event', 'eventID'],
    methods: {
        deleteFromDatabase() {
            deleteFromFirebase(db, this.eventID)
            setTimeout(function(){
                window.location.reload(1);
            }, 1000);
            },
    },
}


</script>
