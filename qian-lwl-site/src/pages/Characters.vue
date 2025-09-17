<template>
  <section class="min-h-screen relative p-12 overflow-hidden bg-white bg-opacity-70">
    <div class="absolute inset-0 bg-gray-100 -z-10"></div>
    
    <div class="flex flex-col md:flex-row items-center justify-center h-full pt-16 md:pt-0">
      
      <div class="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <img
          v-if="currentCharacter"
          :src="currentCharacter.image"
          :alt="currentCharacter.name"
          class="max-h-[70vh] md:max-h-[80vh] object-contain animate-fadeIn"
        />
      </div>

      <div
        v-if="currentCharacter"
        class="w-full md:w-1/2 md:pl-16 p-6 md:p-12 text-black text-center md:text-left
               bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-xl animate-fadeIn"
      >
        <h3 class="text-3xl md:text-4xl font-bold mb-2 text-pink-500">{{ currentCharacter.name }}</h3>
        
        <div class="my-4 h-0.5 w-1/4 md:w-1/3 bg-pink-500 mx-auto md:mx-0"></div>

        <p class="text-xl md:text-2xl font-medium mb-6 text-gray-700">{{ currentCharacter.role }}</p>

        <div class="my-4 h-0.5 w-1/4 md:w-1/3 bg-pink-500 mx-auto md:mx-0"></div>
        
        <p class="text-gray-800 leading-relaxed">{{ currentCharacter.description }}</p>
      </div>
      
    </div>

    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-6">
      <button 
        @click="prevCharacter" 
        :disabled="currentIndex === 0"
        class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
        PRVE
      </button>
      <button 
        @click="nextCharacter" 
        :disabled="currentIndex === characters.length - 1"
        class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
        NEXT
      </button>
    </div>
  </section>
  
  <p v-if="!currentCharacter" class="min-h-screen flex items-center justify-center text-gray-400">未找到该角色。</p>
</template>

<script setup lang="ts">
import { useCharacterStore } from '@/stores/characters'
import { ref, computed } from 'vue'

const store = useCharacterStore()
const characters = store.characters

const currentIndex = ref(0)

const currentCharacter = computed(() => {
  return characters[currentIndex.value]
})

const prevCharacter = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextCharacter = () => {
  if (currentIndex.value < characters.length - 1) {
    currentIndex.value++
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}
</style>