<script setup>
import Dock from "./components/Dock.vue";
import CenterWidget from "./components/CenterWidget.vue"
import Terminal from "./components/Terminal.vue"
import LeftEvents from "./components/LeftEvents.vue"
</script>

<template>
    <center-widget/>
    <Suspense>
        <left-events/>
    </Suspense>
    <terminal/>
    <dock/>
</template>

<style scoped>

</style>
