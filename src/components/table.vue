<template>
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

export default defineComponent({
  name: 'Table',
})
</script>
<style lang="scss" scoped>
@import '../scss/variables'; 


.table {
  margin: auto;
  margin-top: 250px;
  border-collapse: collapse;
  border: 1px solid;
  border-color: black;
}
tr {
  border-bottom: 1px solid;
  border-color: rgb(29, 17, 17);
}
.table-header {
  background-color: rgb(221, 223, 223);
  height: 30px;
  border-radius: 4px;
  border: 1px solid;
  border-color: black;
}
.table-cell {
  width: 200px;
  height: 30px;
  text-align: center;
  padding-top: 7px;
  // border: 1px solid;
  // border-color: black;
}
</style>
