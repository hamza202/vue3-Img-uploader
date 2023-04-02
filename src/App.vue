<script lang="ts" setup>
 import {ref} from 'vue';
 const file = ref([]);
</script>

<template>
    <div class="container mt-8">

        <vue3-img-uploader v-model="file" :is-multiple="true" :show-size="true"
                        custom-class="custom-class"/>
    </div>
</template>

<style scoped>
</style>
