<template>
<button onclick="window.location.href='//p4s3r0.com/nextcloud'">
<img src='./images/cloud.png'/>
</button>
</template>

<style scoped>
* {
  border-radius: 12px;
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
  object-fit: cover;
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
