<template class="">
  <ul>
    <li>
      <a class="button" href="#/">Home</a>
    </li>
    <li>
      <a class="button" href="#/about">About</a>
    </li>
  </ul>
  <div>
    <button class="logout-button" @click="userStore.logout()">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import userStore from '@/stores/user'
export default defineComponent({
  name: 'NavPanel',
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  },
  methods: {
    Logout() {
      console.log('logged out')
    },
    // navToHome(){
    // }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/variables';

ul{
  padding-inline-start: 0% !important;
  margin: 20px !important;
}
li{
  margin-bottom: 40px;
  width: 20%;
  background-color: rgb(184, 52, 4);
  border-bottom: 1px solid;
  border-color: rgb(184, 52, 4);
  border-radius: 4px;
  color: white;
  padding: 13px 85px 13px 85px;
  list-style: none;
}
a{
  text-decoration: none;
}
.button {
  
 color: white;

}
.logout-button {
  position: absolute;
  bottom: 20px;
  margin: 20px;
  width: 85%;
  height: 45px;
  background-color: rgb(184, 52, 4);
  border-bottom: 1px solid;
  border-color: rgb(184, 52, 4);
  border-radius: 4px;
  color: white;
}
</style>
