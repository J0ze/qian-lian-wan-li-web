<template>
  <section class="min-h-screen p-8 bg-gradient-to-r from-black via-purple-900 to-black text-white flex flex-col items-center">
    <img :src="character.image" class="w-64 h-64 object-cover rounded-lg mb-6"/>
    <h2 class="text-4xl font-bold text-pink-400 mb-4">{{ character.name }}</h2>
    <p class="text-lg text-gray-300">{{ character.role }}</p>
    <p class="mt-4 text-gray-400">{{ character.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

interface Character {
  id: number
  name: string
  role: string
  description: string
  image: string
}

const characterList: Character[] = [
  { id: 1, name: 'XX', role: 'XXX', description: 'XXXXXX。', image: '/assets/characters/hero.png' },
  { id: 2, name: 'XXX', role: 'XXX', description: 'XXXXXX。', image: '/assets/characters/mage.png' },
  { id: 3, name: 'XXXX', role: 'XXXX', description: 'XXXXXX。', image: '/assets/characters/villain.png' }
]

const character = ref(characterList.find(c => c.id === id)!)
</script>
