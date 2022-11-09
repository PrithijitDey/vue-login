<template class="h-full w-full">
  <div class="homepage">
    <div class="navigation"><navigation-panel /></div>
    <div class="header"><AppHeader :loggeduser="username" /></div>
  </div>
  <div>
    <table class="table">
      <tr class="table-header">
        <th>S/N</th>
        <th>Username</th>
        <th>Email</th>
        <th>Group Role</th>
      </tr>
      <tr>
        <td><div class="table-cell">1</div></td>
        <td><div class="table-cell" contenteditable>claire</div></td>
        <td>
          <div class="table-cell" contenteditable>ksjdnfrkjfh@dkfng.com</div>
        </td>
        <td><div class="table-cell" contenteditable>tester</div></td>
      </tr>
      <tr>
        <td><div class="table-cell">2</div></td>
        <td><div class="table-cell" contenteditable>stephen</div></td>
        <td>
          <div class="table-cell" contenteditable>ksjdnfrkjfh@dkfng.com</div>
        </td>
        <td><div class="table-cell" contenteditable>manager</div></td>
      </tr>
      <tr>
        <td><div class="table-cell">3</div></td>
        <td><div class="table-cell" contenteditable>graham</div></td>
        <td>
          <div class="table-cell" contenteditable>ksjdnfrkjfh@dkfng.com</div>
        </td>
        <td><div class="table-cell" contenteditable>head</div></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import userStore from '@/stores/user'
import NavigationPanel from './navigation-panel.vue'
import AppHeader from './app-header.vue'

export default defineComponent({
  props: ['username'],
  name: 'Home',

  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  },
  components: { NavigationPanel, AppHeader }
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
.table {
  margin: auto;
  margin-top: 250px;
  border-collapse: separate;
}
tr {
  border-bottom: 2px solid;
  border-color: rgb(29, 17, 17);
}
.table-header {
  background-color: rgb(221, 223, 223);
  height: 30px;
  border-radius: 4px;
  border: 1px solid;
  border-color: #fff;
}
.table-cell {
  width: 200px;
  height: 30px;
  text-align: center;
  padding-top: 7px;
  border: 1px solid;
  border-color: black;
}
</style>
