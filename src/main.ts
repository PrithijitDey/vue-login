import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vue3Material from 'vue3-material'
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import DownloadIcon from 'vue-material-design-icons/Download.vue';

createApp(App).use(store).use(router).use(Vue3Material).component('delete-icon', DeleteIcon).component('download-icon', DownloadIcon).mount('#app')
