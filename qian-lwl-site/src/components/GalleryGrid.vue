<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="(img, index) in images" :key="index" class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform">
      <img :src="img" alt="" class="w-full h-48 object-cover"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ images: string[] }>()
</script>
