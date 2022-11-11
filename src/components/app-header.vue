<template>
  <div class="header-container">
    <div class="header-text">
      <h2>Welcome,{{loggeduser}}</h2>
      <div class="online"></div>
      <!-- <button class="btn btn-primary" @click="userStore.logout()">
      Logout
    </button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed, reactive } from 'vue'

const state = reactive({
  username: ''
})
const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})
export default defineComponent({
  props: ['loggeduser'],
  name: 'Header',

})
</script>

<style lang="scss" scoped>

.header-text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  vertical-align: middle;
}
h2{
  margin-left: 30px;
}
.online {
  height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 15px;
  margin-right: 30px;
}
</style>
