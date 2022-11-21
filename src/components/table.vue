<template class="h-full w-full">
  <div class="table-container">
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr
        @click="(companyData = d), (showModal = true)"
        v-for="d in dataArray"
        :key="d.id"
      >
        <td>{{ d.company }}</td>
        <td>{{ d.contact }}</td>
        <td>{{ d.country }}</td>
      </tr>
    </table>

    <Teleport to="body">
      <modal  :companyData="companyData" :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Company Details</h3>
        </template>
      </modal>
    </Teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Modal from './Modal.vue'

export default defineComponent({
  name: 'table',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      companyData:{},
      dataArray: [
        {
          id: 1,
          company: 'Alfreds Futterkiste',
          contact: 'Maria Anders',
          country: 'Germany'
        },
        {
          id: 2,
          company: 'Centro comercial Moctezuma',
          contact: 'Francisco Chang',
          country: 'Mexico'
        },
        {
          id: 3,
          company: 'Central Private Militia',
          contact: 'Shang Chi',
          country: 'China'
        },
        {
          id: 4,
          company: 'Western Saviour Ward',
          contact: 'Steve Rogers',
          country: 'America'
        },
        {
          id: 5,
          company: 'Strategic Homeland Security',
          contact: 'Margarret Carter',
          country: 'England'
        }
      ]
    }
  },
  methods: {
    // openModal(companyData: any) {
    //   this.showModal = true
    //   this.companyData = companyData.id
    //   console.log('--------', companyData)
    // }
  }
})
</script>
<style lang="scss" scoped>
@import '../scss/variables';

table {
  border-collapse: collapse;
  border: 1px solid grey;
}
tr {
  line-height: 30px;
  border-bottom: 1px solid grey;
}
th {
  background-color: rgb(193, 190, 190);
  width: 15rem;
}
</style>
