<template>
<button onclick="window.location.href='//linkedin.com/in/christian-pasero-b47911218'">
  <img src='./images/linkedin.png'/>
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
