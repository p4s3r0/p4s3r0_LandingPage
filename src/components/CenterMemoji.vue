<script setup>
//import
</script>

<template>
<p>&nbsp;</p>
<div id="container">
    <div id="pictureContainer">
    <img src='./images/memoji_hi.png'>
    </div>
</div>

</template>

<style scoped>
#container {
    /* CONSTANTS*/
    --container-width: 150px;
    --container-height: 150px;
    /* CSS */
    width: var(--container-width);
    height: var(--container-height);
    background-color: rgba(177, 177, 195, 0.733);
    overflow: hidden;
    border-radius: 50%;
    right: 25px;
}

img {
    width: 140px;
    height: 170px;
}

#pictureContainer {
    position: absolute;
    right: 10px;
    top: 3px;
}
</style>

