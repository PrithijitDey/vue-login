<template>
  <div>
    <div class="about">
      <p>ABOUT</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About'
})
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.about {
  margin: auto;
}
</style>
