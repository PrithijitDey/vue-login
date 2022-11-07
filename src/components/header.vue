<template>
  <div>
    <div class="header-text">
      <h2>Welcome,name</h2>

      <!-- <button class="btn btn-primary" @click="userStore.logout()">
      Logout
    </button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    setTimeout(() => {
      console.log('log out')
    }, 0)
  },
  methods: {
    header() {
      console.log('logged out')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.header-text {
  border-bottom: 1px solid;
  border-color: rgb(145, 144, 142);
}
</style>
