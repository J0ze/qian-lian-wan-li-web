<template>
  <router-link :to="`/character/${character.id}`" class="block bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
    <img :src="character.image" alt="" class="w-full h-48 object-cover"/>
    <div class="p-4">
      <h3 class="text-xl font-bold text-pink-400">{{ character.name }}</h3>
      <p class="text-gray-300">{{ character.role }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">

interface Character {
  id: number
  name: string
  role: string
  image: string
}

const props = defineProps<{ character: Character }>()
</script>
