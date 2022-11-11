<template class="">
  <ul>
    <li>
      <button class="button" @click="(e) => navToHome(e)">Home</button>
    </li>
    <li>
      <button class="button" @click="(e) => navToAbout(e)">About</button>
    </li>
  </ul>

  <button class="logout-button" @click="logout()">Logout</button>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import router from "../router";
export default defineComponent({
  name: "NavPanel",

  methods: {
    Logout() {
      console.log("logged out");
    },
    navToHome(e: any) {
      console.log(e);
      router.push("/table");
    },
    navToAbout(e: any) {
      console.log(e);
      router.push("/about");
    },
    logout() {
      router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/variables";

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}
li {
  list-style: none;
}

.button {
  width: 85%;
  height: 45px;
  background-color: rgb(184, 52, 4);
  border-bottom: 1px solid;
  border-color: rgb(184, 52, 4);
  border-radius: 4px;
  color: white;
}
.logout-button {
  margin: auto auto 20px;
  width: 85%;
  height: 45px;
  background-color: rgb(184, 52, 4);
  border-bottom: 1px solid;
  border-color: rgb(184, 52, 4);
  border-radius: 4px;
  color: white;
}
</style>
