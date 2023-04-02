import type {App} from 'vue'
import {Vue3ImgUploader} from './components'

export  default  {
    // Add default options here
    install(app: App , options: {ShowSize: boolean, isDraggable: boolean} = {ShowSize: true, isDraggable: true}) {
        app.component('vue3-img-uploader', Vue3ImgUploader);
        app.provide('imgUploaderShowSize', options.ShowSize);
        app.provide('imgUploaderIsDraggable', options.isDraggable);

    }
}
 export {Vue3ImgUploader}
