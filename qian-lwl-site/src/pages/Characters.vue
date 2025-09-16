<template>
  <section class="min-h-screen bg-black text-white p-8">
    <h2 class="text-4xl font-bold text-pink-400 mb-6">人物介绍</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import { ref } from 'vue'

interface Character {
  id: number
  name: string
  role: string
  image: string
}

const characters = ref<Character[]>([
  { id: 1, name: 'XXX', role: 'XX', image: '/assets/characters/hero.png' },
  { id: 2, name: 'XXXX', role: 'XXX', image: '/assets/characters/mage.png' },
  { id: 3, name: 'XX', role: 'XXXX', image: '/assets/characters/villain.png' }
])
</script>
