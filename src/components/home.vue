<template class="h-full w-full">
  <div class="homepage">
    <div class="navigation"><navigation-panel /></div>
    <div class="header"><Header /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import userStore from '@/stores/user'
import NavigationPanel from './navigation-panel.vue'
import Header from './header.vue'

export default defineComponent({
  name: 'Home',
  props: { loggedUsername: String },

  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  },

  components: { NavigationPanel, Header }
})
</script>
<style lang="scss" scoped>
@import '../scss/variables'; // $text-primary would be defined in that file

.homepage {
  display: flex;
}
.navigation{
  background-color: rgb(37, 24, 24);
  width: 250px;
  height: 100vh;
  position: fixed;
}
.header{
  height: 30px;
  width: 100vw;
  text-align: center;
  
}
</style>
