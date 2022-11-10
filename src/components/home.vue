<template class="h-full w-full">
  <div class="homepage">
    <div class="navigation"><navigation-panel /></div>
    <div class="header"><AppHeader :loggeduser="username" /></div>
  </div>
  <div class="mounted">
    <component :is="currentView" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import NotFound from './NotFound.vue'
import userStore from '@/stores/user'
import NavigationPanel from './navigation-panel.vue'
import AppHeader from './app-header.vue'
import Table from './table.vue'
import About from './about.vue'

const routes: Record<string, any> = {
  '/': Table,
  '/about': About
}
export default defineComponent({
  props: ['username'],
  name: 'Home',

  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  },
  components: { NavigationPanel, AppHeader },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView(): string {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
})
</script>
<style lang="scss" scoped>
@import '../scss/variables'; // $text-primary would be defined in that file

.homepage {
  display: flex;
}
.navigation {
  background-color: rgb(37, 24, 24);
  width: 250px;
  height: 100vh;
  position: fixed;
}
.header {
  height: 67px;
  width: 100vw;
  text-align: center;
}
.mounted {
  margin-left: 300px;
}
</style>
