[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# vue3-img-uploader

Image loader for Vue 3, displays image previews and the ability to switch multiple modes.

## Install

```sh
npm install vue3-img-uploader
```

or:

```sh
pnpm install vue3-img-uploader
```

## Screenshots

![App Screenshot](https://i.ibb.co/N95Myy8/Untitled-1.png)

### Using

```sh
import { createApp } from 'vue'
import App from './App.vue'

import Vue3ImgUploader from 'vue3-img-uploader'
import 'vue3-img-uploader/style.css'

const app = createApp(App)
app.use(Vue3ImgUploader)
app.mount('#app')
```

Add component to page

```sh
<script lang="ts" setup>
   import {ref} from 'vue';
   const file = ref([]);
</script>

<template>
  <div id="app">
    <Vue3ImgUploader
      v-model="file"
      :isDraggingAble="true"
      :isMultiple="true"
      :showSize="true"
      :customClass="'custom-class'"
    />
  </div>
</template>
```

## Props

| Props          | Type      | Default |
|----------------|-----------|---------|
| isDraggingAble | `Boolean` | true    |
| isMultiple     | `Boolean` | false   |
| showSize       | `Boolean` | true    |
| customClass    | `String`  | ' '     |

## Global Options

you can use global options to set default values for all components

```sh
const app = createApp(App)
app.use(Vue3ImgUploader, {ShowSize: true, isDraggable: true})
```


## Author

- [Hamza Abo Aitah](https://github.com/hamza202)
- [FaceBook](https://www.facebook.com/profile.php?id=100083818615098)
- [Email](mailto:h.3@hotmail.it)
