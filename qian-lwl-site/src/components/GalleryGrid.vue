<template>
  <div class="grid w-full gap-4 px-4 mx-auto md:gap-6 lg:gap-8 max-w-7xl"
       :class="{'sm:grid-cols-2': images.length > 2, 'lg:grid-cols-3': images.length > 3}">
    <div v-for="(img, index) in images"
         :key="index"
         class="overflow-hidden rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
      <img :src="img"
           :alt="'Gallery image ' + (index + 1)"
           class="w-full h-auto object-cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  images: string[];
}>();
</script>

<style scoped>
</style>