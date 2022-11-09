<template>
  <div v-if="!userStore.getters.isLoggedIn" class="app">
    <form @submit.prevent="onSubmit" class="form">
      <div class=" creds">
        <br />
        <input
          v-model="form.username"
          class="input"
          placeholder="Username"
          required
        />
      </div>
      <div class="creds">
        <br />
        <input
          v-model="form.password"
          class="input"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="error">{{ userStore.state.error }}</div>
      <button class="button" type="submit">
        Login
      </button>
    </form>
  </div>
  <div v-else>
    <Home :username="form.username" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import userStore from '@/stores/user'
import Home from './components/home.vue'

export default defineComponent({
  name: 'App',
  components: { Home },

  setup() {
    const form = reactive({
      username: '',
      password: ''
    })

    const onSubmit = () => {
      userStore.login(form.username, form.password)
      console.log(form.username)
      return { checking: true, Username: form.username }
    }

    return { form, userStore, onSubmit }
  }
  // emitToParent() {
  //     this.$emit("childToParent", this.loggedUsername);
  //   },
})
</script>
<style lang="scss" scoped>
@import './scss/variables';

.app{
  height: 100vh ;
  width: 100vw;
  display: grid;
  place-content: center;
  align-items: center;
  margin: -10px;
}
.form{
  display: grid;
  place-items: center;
}
.creds{
  margin-top: px;
  text-align: center;
}
.input {
  width: 200px;
  height: 30px;
  border: 2px solid;
  border-radius: 4px;
  border-color: rgb(117, 170, 245);
}
.error{}
.button{
  height: 40px;
  width: 90px;
  border: 1px;
  border-radius: 4px;
  margin-top: 20px;
  background-color: rgb(117, 170, 245);
}
</style>
