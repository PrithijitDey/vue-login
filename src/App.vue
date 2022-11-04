<template>
  <div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 col-6 mx-auto">
  <form @submit.prevent="onSubmit">
    <div class="form-group my-2">
      <label>Username</label>
      <input
        v-model="form.username"
        class="form-control"
        placeholder="Username"
        required
      />
    </div>
    <div class="form-group my-2">
      <label>Password</label>
      <input
        v-model="form.password"
        class="form-control"
        type="password"
        placeholder="Password"
        required
      />
    </div>
    <div class="text-danger my-2">{{ userStore.state.error }}</div>
    <button class="btn btn-success btn-block my-2" type="submit">Login</button>
  </form>
</div>
<div v-else><Home/></div>

  
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import userStore from '@/stores/user'
import FormLogin from '@/components/FormLogin.vue'
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
      form.username = ''
      form.password = ''
    }
    console.log(form.username)

    return { form, userStore, onSubmit }
  }
})
</script>
