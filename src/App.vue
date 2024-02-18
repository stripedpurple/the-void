<script setup lang="ts">
import {ref} from "vue";
import {useEventListener, useFullscreen, useIntervalFn} from "@vueuse/core"

const el = ref<HTMLElement | null>(null)
const counter = ref(10)


const { isFullscreen, enter, exit, toggle } = useFullscreen(el)

useEventListener(document, 'keydown', (e) => {
  if (e.key === 'f') toggle()
})

const {pause} = useIntervalFn(() => {
  counter.value--
  if (counter.value === 0){
    pause()
    enter()
  }

}, 1000)

</script>

<template>
  <video @click="exit"></video>
  <div class="flex items-center justify-center flex-col" v-show="!isFullscreen">
    <p style="font-size: 4rem; ">{{counter}}</p>
    <button v-focus @click="enter">enter fullscreen</button>
  </div>
</template>

