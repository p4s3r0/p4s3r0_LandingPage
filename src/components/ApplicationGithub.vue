<template>
<button onclick="window.location.href='//github.com/p4s3r0'">
  <img src='./images/github.png'/>
</button>
</template>

<style scoped>
* {
  border-radius: 25px;
  overflow: hidden;
  perspective: 1px;
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

button {
  font-size: 0;  
  padding: 0;
  border: none;
  margin-left: 5px;
  background-color: rgba(0,0,0,0);
}


</style>
