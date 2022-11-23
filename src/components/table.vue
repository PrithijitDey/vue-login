<template class="h-full w-full">
  <div class="table-container">
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Actions</th>
      </tr>
      <tr v-for="d in dataArray" :key="d.id" :id="`row-${d.id}`">
        <td @click=";(companyData = d), (showModal = true)">{{ d.company }}</td>
        <td @click=";(companyData = d), (showModal = true)">{{ d.contact }}</td>
        <td @click=";(companyData = d), (showModal = true)">{{ d.country }}</td>

        <td>
          <delete-icon @click="deleteData(d.id)" />
          <download-icon @click="exportToPDF(d)" />
        </td>
      </tr>
    </table>

    <Teleport to="body">
      <modal
        :companyData="companyData"
        :show="showModal"
        @close="showModal = false"
      >
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
import axios from 'axios'
import Vue3Html2pdf from 'vue3-html2pdf'
import { jsPDF } from 'jspdf'

export default defineComponent({
  name: 'table',
  components: {
    Modal,
    Vue3Html2pdf
  },
  data() {
    return {
      showModal: false,
      companyData: {},
      dataArray: <Record<string, any>>[]
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/dataArray`)
      this.dataArray = res.data
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteData(id: number) {
    try {
      const res = await axios.delete(`http://localhost:3000/dataArray/${id}`)
      this.dataArray = this.dataArray.filter(
        (dataArray: any) => dataArray.id !== id
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    // openModal(companyData: any) {
    //   this.showModal = true
    //   this.companyData = companyData.id
    //   console.log('--------', companyData)
    // }
    deleteData(id: number) {
      // window.alert("hi")
      console.log('id----', id)
      this.dataArray.splice(id - 1, 1)
      // delete(this.dataArray[id])
      console.log('---', this.dataArray)
    },

    exportToPDF(data: any) {
      var doc = new jsPDF()
      const row: any = []
      const cols = ['Amount', 'Description']
      const title = 'Sales details'

      var elementHTML = document.getElementById(`row-${data.id}`) as HTMLElement
      doc.setFont('times', 'bold')
      doc.text('Company', 20, 10)
      doc.text('Contact', 95, 10)
      doc.text('Country', 170, 10)

      doc.setFont('times', '')
      doc.setFontSize(10)
      doc.text(data.company, 15, 20)
      doc.text(data.contact, 95, 20)
      doc.text(data.country, 175, 20)
      doc.save(`row-${data.id}.pdf`)
      // doc.html(elementHTML, {
      //   callback: function (doc) {

      //   },
      //   x: 15,
      //   y: 15,
      //   width: 170,
      //   windowWidth: 650
      // })
    }
    // generateReport () {
    //         this.$refs.html2Pdf.generatePdf()
    //     }
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
