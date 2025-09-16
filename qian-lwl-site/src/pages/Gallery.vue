<template>
  <section class="min-h-screen p-8 bg-black text-white">
    <h2 class="text-4xl font-bold text-pink-400 mb-6">画廊</h2>
    <GalleryGrid :images="images"/>
  </section>
</template>

<script setup lang="ts">
import GalleryGrid from '@/components/GalleryGrid.vue'
import { ref } from 'vue'

const images = ref<string[]>([
  '/assets/gallery/scene1.jpg',
  '/assets/gallery/scene2.jpg',
  '/assets/gallery/scene3.jpg'
])
</script>
