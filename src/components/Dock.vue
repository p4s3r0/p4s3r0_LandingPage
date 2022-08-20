
<script setup>
import Application from "./Application.vue";
</script>

<template>
<div id="container">
  <application/>
  <application/>
  <application/>
  <application/>
  <application/>
  <application/>
</div>
</template>

<style scoped>
#container {
  /* CONSTANTS*/
  --num-apps: 6;
  --app-size: 50px;
  /* CSS */
  position: absolute;
  border-radius: 15px;
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  display: flex;
  bottom: 5px;
  left: calc(50vw - (var(--num-apps) * (var(--app-size) + 5px) )/2);/* calc(50vw - (num_applications * 50px)/2) */
  /* BLURRY BACKGROUND*/
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.2px);
  -webkit-backdrop-filter: blur(14.2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>

