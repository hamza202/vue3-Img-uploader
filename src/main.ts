import { createApp } from 'vue'
import App from './App.vue'
import Vue3ImgUploader from "@/Vue3ImgUploader";
import './assets/style.scss'

const app = createApp(App);
app.use(Vue3ImgUploader, {ShowSize: true, isDraggable: true})
app.mount('#app')
