<template class="h-full w-full">
  <div class="table-container">
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Central Private Militia</td>
        <td>Shang Chi</td>
        <td>China</td>
      </tr>
      <tr>
        <td>Western Saviour Ward</td>
        <td>Steve Rogers</td>
        <td>America</td>
      </tr>
      <tr>
        <td>Strategic Homeland Security</td>
        <td>Margarret Carter</td>
        <td>England</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'table'
})
</script>
<style lang="scss" scoped>
@import '../scss/variables';

table{
  border-collapse: collapse;
  border: 1px solid grey;
  }
  tr{
    line-height: 30px;
    border-bottom:1px solid grey ;
  }
  th{
    background-color: rgb(193, 190, 190);
    width: 15rem;
  }
</style>
