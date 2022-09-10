<script setup>
//import
</script>

<template>
<div id="container">
    <div id="topBar">
        <div class="actionButton" style="background-color: #FF5E57;"> </div>
        <div class="actionButton" style="background-color: #FFBB2E;"> </div>
        <div class="actionButton" style="background-color: #38C149;"> </div>
        <p>About Me</p>
    </div>
    <span style="color: #38C149">~ $ </span> 
    <span>&nbsp &nbsp Hey 👋🏻, this is my homepage, so I have to say something about myself 🙇🏻‍♂️. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with 💬. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes: <br><br>
    My PP big 🍆. </span>
</div>

</template>

<style scoped>
#container {    
    position: absolute;
    right: 10px;
    left: 70vw;
    top: 40px;
    background-color: #282828;
    border-radius: 10px; 
    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
}

#topBar {
    position: absolute;
    height: 25px;
    right: 0px;
    left: 0px;
    top: 0px;
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

/* MOBILE VERSION */
@media only screen and (max-width: 1000px) {
    #container {
        /* CSS */
        position: relative;
        left: calc(50vw - 400px/2);
        width: 400px;
        top: 110px;
        padding-top: 10px;
        margin-bottom: 40px;
    }

    #topBar {
        position: relative;
        width: 400px;
        height: 25px;
        right: auto;
        left: -15px;
        top: -10px;
    }

    #topBar p {
        right: 170px;
    }

}
</style>

