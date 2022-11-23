<template>
  <div class="board">
    <div
      class="notes-container"
      ondrop="{
                var dm = document.getElementById('draggable');
                dm.style.left = (event.clientX - 280 ) + 'px';
                dm.style.top = (event.clientY ) + 'px';
                setPosition(event)
                event.preventDefault();
                return false;
            }"
      ondragover="{
    event.preventDefault()
    return false
  }"
    >
      <div
        draggable="true"
        ondragstart="{
                var style = window.getComputedStyle(event.target, null);
                var str = (( event.clientX) +','+  event.clientY) + ',' + event.target.id;
                event.dataTransfer.setData('Text', str);
            }"
        class="draggable-box"
        id="draggable"
      >
        <textarea
          type="text"
          name="input"
          class="note-input"
          placeholder="Type something..."
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from '@/router'
import { defineComponent, reactive } from 'vue'

/* eslint-disable */
export default defineComponent({
  name: 'Login',
  components: {},

  setup() {
    var dm = document.getElementById('draggable')

    // if (localStorage.getItem('position_x') && localStorage.getItem('position_y')) {
    //   dm!.style.left = 500 + 'px'
    //   dm!.style.top = 100 + 'px'
    // }
    function setPosition(event: any) {
      console.log('hit --- ')
      localStorage.setItem('position_x', JSON.stringify(event.clientX - 280))
      localStorage.setItem('position_y', JSON.stringify(event.clientY))
      return;
    }
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
