<script setup lang="ts">
import {ref} from "vue";
import {useEventListener, useFullscreen} from "@vueuse/core"

const el = ref<HTMLElement | null>(null)

const { isFullscreen, enter, exit, toggle } = useFullscreen(el)

useEventListener(document, 'keydown', (e) => {
  if (e.key === 'f') toggle()
})

</script>

<template>
  <video @click="exit"></video>
  <button v-show="!isFullscreen" @click="enter">enter fullscreen</button>
</template>

<style scoped>
html, body, video {
  background: black;
}
</style>
