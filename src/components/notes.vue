<template>
  <div class="board">
    <header class="add-notes-header">
      <v-btn depressed color="primary" @click="addNote"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line></svg
        > Add Notes</v-btn
      >
    </header>
    <div
      class="notes-container"
      @dragend="onDropEvent"
      ondragover="{
    event.preventDefault()
    return false
  }"
    >
      <div
        v-for="note in notes"
        :key="`key_${note}`"
        draggable="true"
        @dragend="e => dragEnd(e, note.id)"
        class="draggable-box"
        :id="`draggable-${note.id}`"
        :style="{
          position: 'absolute',
          top: `${note.y}px`,
          left: `${note.x}px`
        }"
      >
        <textarea
          type="text"
          name="input"
          class="note-input"
          placeholder="Type something..."
          :value="note.text"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from '@/router'
import { NodeTypes } from '@vue/compiler-core'
import { defineComponent, reactive } from 'vue'

/* eslint-disable */
export default defineComponent({
  name: 'Login',
  components: {},
  data() {
    return { notes: [{ id: 0, text: '1', x: 100, y: 200 }], elementID: Number }
  },
  setup() {
    // var dm = document.getElementById(`draggable`)
    // if (localStorage.getItem('position_x') && localStorage.getItem('position_y')) {
    //   dm!.style.left = 500 + 'px'
    //   dm!.style.top = 100 + 'px'
    // }
    // function setPosition(event: any) {
    //   console.log('hit --- ')
    //   localStorage.setItem('position_x', JSON.stringify(event.clientX - 280))
    //   localStorage.setItem('position_y', JSON.stringify(event.clientY))
    //   return
    // }
  },
  // drag_start(event:any) {
  //               var style = window.getComputedStyle(event.target, null);
  //               var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
  //               event.dataTransfer.setData("Text", str);
  //           },

  // drop(event: any) {
  //   var offset = event.dataTransfer.getData('Text').split(',')
  //   var dm = document.getElementById(offset[2])
  //   dm!.style.left = event.clientX + parseInt(offset[0], 10) + 'px'
  //   dm!.style.top = event.clientY + parseInt(offset[1], 10) + 'px'
  //   event.preventDefault()
  //   return false
  // },

  // drag_over(event: any) {
  //   event.preventDefault()
  //   return false
  // },
  methods: {
    addNote() {
      console.log('hitt')
      this.notes.push({
        id: this.notes.length,
        text: `${this.notes.length + 1}`,
        x: 100,
        y: 200
      })
      console.log(this.notes)
    },
    onDropEvent(e: any) {
      console.log(e)
      console.log(this.elementID)
      this.editNote(this.elementID, e.clientX, e.clientY)
    },
    dragEnd(e: any, id: any) {
      this.editNote(id, e.clientX, e.clientY)
      console.log('--- dragEnd', id)
    },
    editNote(id: any, newX: any, newY: any) {
      this.notes[id].x = newX - 280
      this.notes[id].y = newY
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../scss/variables';

.board {
  height: 90vh;
  margin-top: 65px;
  width: 85vw;
  // border: 10px solid rgb(197, 197, 197);
  border-radius: 5px;
}
.add-notes-header {
  padding: 12px;
  height: 60px;
}
.notes-container {
  height: 100%;
  width: 100%;
  background-color: bisque;
  border-radius: 5px;
}
.draggable-box {
  height: 7rem;
  width: 12rem;
  background-color: rgb(194, 217, 236);
  border: 1px solid rgb(186, 183, 183);
  border-radius: 5px;
  position: absolute;
}
.note-input {
  height: 100%;
  width: 100%;
  border: none;
  background-color: transparent;
  line-height: 20px;
  padding: 10px;
  resize: none;
}

.note-input::-webkit-scrollbar {
  background-color: transparent;
  width: 5px;
}
.note-input::-webkit-scrollbar-thumb {
  background-color: rgb(190, 190, 190, 0.5);

  border-radius: 5px;
}
.mounted {
  background-color: gray;
}
</style>
