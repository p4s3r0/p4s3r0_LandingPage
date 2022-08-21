<template>
<button onclick="window.location.href='//discordapp.com/users/257140712494202890'">
<img src='./images/discord.png'/>
</button>
</template>

<style scoped>
* {
  border-radius: 12px;
  overflow: hidden;
}

img {
  /* CONSTANTS*/
  --app-size: 50px;
  /* CSS */
  width: var(--app-size);
  height: var(--app-size);
  background-color: #fff;
  object-fit: cover;
  border: white solid 1pt;
}

*:hover {
  cursor: pointer;
}

button {
  font-size: 0;  
  padding: 0;
  border: none;
  margin-left: 5px;
  margin-top: 0px;
  background-color: rgba(0,0,0,0);
}


</style>
