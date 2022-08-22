
<script setup>
import ApplicationSpotify from "./ApplicationSpotify.vue";
import ApplicationGithub from "./ApplicationGithub.vue";
import ApplicationDiscord from "./ApplicationDiscord.vue";
import ApplicationLinkedin from "./ApplicationLinkedin.vue";
import ApplicationCloud from "./ApplicationCloud.vue";
import ApplicationYoutube from "./ApplicationYoutube.vue";
</script>

<template>
<div id="containerDock">
  <application-spotify/>
  <application-github/>
  <application-youtube/>
  <application-discord/>
  <application-linkedin/>
  <application-cloud/>
</div>
</template>

<style scoped>
#containerDock {
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
  left: calc(50vw - (var(--num-apps) * (var(--app-size) + 5px) )/2);
  /* BLURRY BACKGROUND*/
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.2px);
  -webkit-backdrop-filter: blur(14.2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

@media only screen and (max-width: 1000px) {
    #containerDock {
        position: relative;
        bottom: 10px;
        top: 100px;
        width: calc(var(--num-apps) * var(--app-size) + var(--num-apps) * 5px + 2 * 5px);
    }
}
</style>

