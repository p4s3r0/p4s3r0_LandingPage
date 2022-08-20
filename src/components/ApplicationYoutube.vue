<template>
<a href="//youtube.com">
<img src='./images/youtube.png'/>
</a>
</template>

<style scoped>
* {
  border-radius: 25px;
  overflow: hidden;
  perspective: 1px;
  margin-left: 2.5px;
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

a {
font-size: 0;  
padding: 0;
}


</style>
