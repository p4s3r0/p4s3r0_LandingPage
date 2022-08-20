<script setup>
import MessageBubble from "./MessageBubble.vue";
import Memoji from "./CenterMemoji.vue";
</script>

<template>
<div id="container">
    <p id="name">Christian Pasero</p>
    <div id="line"></div>
    <a href="//bachelor.p4s3r0.com">
        <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none">
            <path d="M4 13L24 8L44 13L24 18L4 13Z"  stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 14V36" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="4" y="34" width="6" height="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
<p id="svgNameing"> Bsc Thesis</p>
</div>

<div id="messageBubble">
    <message-bubble/>
</div>

<div id="memoji">
    <memoji/>
</div>



</template>

<style scoped>

#container {
    /* CONSTANTS*/
    --container-width: 400px;
    --container-height: 400px;
    /* CSS */
    position: absolute;
    width: var(--container-width);
    height: var(--container-height);
    background-color: rgb(100, 100, 100);
    left: calc(50vw - var(--container-width) / 2);
    bottom: calc(50vh + 60px - var(--container-height) / 2);
    border-radius: 20px;
    /* BLURRY BACKGROUND*/
    background-color: rgba(40, 40, 40, 0.6);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.2px);
    -webkit-backdrop-filter: blur(14.2px);
}

#messageBubble {
    position: relative;
    margin-left: 27vw;
    margin-top: 25vh;
}

#line {
    /* CONSTANTS*/
    --container-width: 400px;
    /* CSS */
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    width: var(--container-width);
    margin-top: 20px;
}

#name {
    position: relative;
    margin-top: 10px;
    margin-bottom: -10px;
    text-align: center;
}

#memoji {
    position: absolute;
    left: calc(50vw - 150px / 2);
}

svg {
    position: absolute;
    width: 50px;
    height: 50px;
    border: solid white 1px;
    border-radius: 17.5px;
    padding: 5px;
    stroke: white;
    stroke-width: 1px;
    left: calc(400px/2 - 50px/2);
    bottom: 25px;
}

svg:hover {
    cursor: pointer;
}

#svgNameing {
    position: absolute;
    font-size: 0.8em;
    left: calc(400px/2 - 50px/2 - 6px);
    bottom: 5px;
}
</style>

