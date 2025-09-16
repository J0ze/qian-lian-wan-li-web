<template>
  <section class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white p-8">
    <h1 class="text-5xl font-bold text-pink-400 mb-6 animate-fadeIn">欢迎来到 {{ game.title }}</h1>
    <p class="text-lg text-gray-300 max-w-xl text-center animate-fadeIn delay-200">{{ game.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game'
const game = useGameStore()
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }
</style>
