<template class="h-full w-full">
  <div class="container">
    <h2 id="head">WELCOME TO THE ABOUT PAGE</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

export default defineComponent({
  name: 'about',
  mounted() {
    gsap.registerPlugin(Draggable)

    console.log('hi mounted')

    Draggable.create('#head', {
      type: 'x,y',
      bounds: document.getElementsByClassName('mounted'),
      inertia: true,
      onClick: function () {
        console.log('clicked')
      },
      onDragEnd: function (e:any) {
        console.log('drag ended')
        console.log(e);
        
      }
    })
  }
})
</script>
<style lang="scss" scoped>
@import '../scss/variables';
</style>
