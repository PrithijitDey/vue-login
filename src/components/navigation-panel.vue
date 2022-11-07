<template class="">
  <div class=" ">
    <button @click="userStore.logout()">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import userStore from '@/stores/user'

export default defineComponent({
  name: 'NavPanel',
  setup() {
    onMounted(userStore.getUser)
        return { userStore };
    },
  methods: {
    Logout() {
      console.log('logged out')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/variables';
button {
  position: absolute;
  bottom: 20px;
  margin: 20px;
  width: 200px;
  height: 45px;
  background-color: rgb(184, 52, 4);
  border-bottom: 1px solid;
  border-color: rgb(184, 52, 4);
  border-radius: 4px;
  color: white;
}
</style>