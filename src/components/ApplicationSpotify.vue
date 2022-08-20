<template>
<a href="//open.spotify.com/user/chri.pasero?si=8dc08ab60bb8480b">
<img src='./images/spotify.png'/>
</a>
</template>

<style scoped>
* {
  border-radius: 25px;
  overflow: hidden;
  perspective: 1px;
  margin-left: 5px;
}

img {
  /* CONSTANTS*/
  --app-size: 50px;
  /* CSS */
  width: var(--app-size);
  height: var(--app-size);
  background-color: #fff;
  border: white solid 1pt;
}

*:hover {
  cursor: pointer;
}

a {
font-size: 0;  
padding: 0;
}


</style>
