<template>
  <div
    class="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center"
  >
    <div
      v-for="(img, index) in images"
      :key="index"
      class="overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
    >
      <img
        :src="img"
        class="w-full h-auto object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>

<style scoped>
.grid {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
