<template>
<img src='./images/memoji_hi.png'/>
</template>

<style scoped>
* {
  border-radius: 10px;
  overflow: hidden;
  perspective: 1px;
  border: white solid 1pt;
  margin-left: 5px;
}

img {
  /* CONSTANTS*/
  --app-size: 50px;
  /* CSS */
  width: var(--app-size);
  height: var(--app-size);
  background-color: #fff;
}

*:hover {
  cursor: pointer;
}


</style>
