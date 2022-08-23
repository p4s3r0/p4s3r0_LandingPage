<script setup>
import Terminal from "./components/Terminal.vue"
import LeftEvents from "./components/LeftEvents.vue"
</script>

<template>
    <terminal/>
    <Suspense>
        <left-events/>
    </Suspense>
</template>
