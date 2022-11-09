<template>
  <div>
    <div class="header-text">
      <h2>Welcome,{{ loggeduser }}</h2>

      <!-- <button class="btn btn-primary" @click="userStore.logout()">
      Logout
    </button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed, reactive } from 'vue'
import userStore from '@/stores/user'

const state = reactive({
  username: ''
})
const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})
export default defineComponent({
  props: ['loggeduser'],
  name: 'Header',
  setup() {
    return { userStore }
  },
  methods: {
    header() {
      console.log('logged out')
    }
  },
  data() {
    return {
      // name: userStore.UserName()
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
