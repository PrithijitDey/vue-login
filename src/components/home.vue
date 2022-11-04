

<template class="">
  <div  class="grid h-screen w-screen place-items-center text-center">
    <h2>Welcome, {{ userStore.state.name }}</h2>
    
    <button class="btn btn-primary" @click="userStore.logout()">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import userStore from '@/stores/user'
import App from '@/App.vue'


export default defineComponent({
    setup() {
        onMounted(userStore.getUser);
        return { userStore };
    },
    components: {  }
})
</script>
