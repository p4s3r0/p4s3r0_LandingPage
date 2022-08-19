<script setup>
import MessageBubble from "./MessageBubble.vue";
import Memoji from "./CenterMemoji.vue";
</script>

<template>
<div id="container">
    <p id="name">Christian Pasero</p>
    <div id="line"></div>
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
    --container-height: 480px;
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
    margin-top: 21vh;
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
    top: 10px;
    text-align: center;
}

#memoji {
    position: absolute;
    left: calc(50vw - 100px / 2);
}
</style>

