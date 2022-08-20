<script setup>
//import
</script>

<template>
<div id="container">
    <p>~ $</p>
</div>
<div id="topBar">
    <div class="actionButton" style="background-color: #FF5E57;"> </div>
    <div class="actionButton" style="background-color: #FFBB2E;"> </div>
    <div class="actionButton" style="background-color: #38C149;"> </div>
    <p>About Me</p>
</div>
</template>

<style scoped>
#container {    
    position: absolute;
    right: 10px;
    left: 70vw;
    height: 300px;
    top: 40px;
    background-color: #282828;
    border-radius: 10px; 
    padding-top: 25px;
    padding-left: 10px;
}

#topBar {
    position: absolute;
    right: 10px;
    left: 70vw;
    height: 25px;
    top: 40px;
    background-color: #1E1E1E;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;

}

.actionButton {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    margin-top: 6.5px;
    border-radius: 6px;
}

#topBar p {
    position: absolute;
    right: calc(10px + 15vw - 50px); 
}
</style>

