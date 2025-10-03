<template>
  <section class="min-h-screen relative p-6 sm:p-12 overflow-hidden bg-gray-100 text-gray-800">
    <div class="flex flex-col items-center justify-center pt-24 sm:pt-24 md:pt-16">
      
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center relative mb-8 md:mb-0 select-none caret-transparent" 
             contenteditable="false">
          
          <img
            v-if="currentCharacter"
            :src="currentCharacter.outfits[currentCharacter.currentOutfitIndex]"
            :alt="currentCharacter.name"
            class="max-h-[60vh] md:max-h-[80vh] object-contain animate-fadeIn"
            draggable="false" />
        </div>

        <div class="w-full md:w-1/2">
            
            <div v-if="currentCharacter && currentCharacter.outfits.length > 1" 
                 class="flex flex-col items-center md:items-start mb-4 md:mb-6 select-none">
              
              <span class="emotion-pattern-text text-xl font-extrabold tracking-widest uppercase text-gray-800">EMOTION PATTERN</span>
              
              <div class="flex flex-row space-x-2 mt-2">
                <button v-for="(_, idx) in currentCharacter.outfits" :key="idx"
                        @click="updateOutfitIndex(idx)"
                        :class="['w-8 h-8 rounded-full text-base font-extrabold flex items-center justify-center transition-all duration-200', 
                                 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500', 
                                 'select-none cursor-pointer', 
                                 currentCharacter.currentOutfitIndex === idx 
                                   ? 'bg-pink-600 text-white border-pink-600 shadow-md'
                                   : 'bg-pink-400 text-white border-pink-400 hover:bg-pink-500 hover:border-pink-500']">
                  {{ idx + 1 }}
                </button>
              </div>
            </div>
            <div
                v-if="currentCharacter"
                class="md:pl-8 p-6 md:p-12 text-black text-center md:text-left
                    bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-xl animate-fadeIn"
            >
                <h3 class="text-3xl md:text-4xl font-bold mb-2 text-pink-500">{{ currentCharacter.name }}</h3>
                <div class="my-4 h-0.5 w-1/4 md:w-1/3 bg-pink-500 mx-auto md:mx-0"></div>
                <p class="text-xl md:text-2xl font-medium mb-6 text-gray-700">{{ currentCharacter.role }}</p>
                <div class="my-4 h-0.5 w-1/4 md:w-1/3 bg-pink-500 mx-auto md:mx-0"></div>
                <p class="text-gray-800 leading-relaxed">{{ currentCharacter.description }}</p>
            </div>
        </div>
        
      </div>

      <div class="flex space-x-4 sm:space-x-6 mt-8">
        <button 
          @click="prevCharacter" 
          :disabled="currentIndex === 0"
          class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          PREV
        </button>
        <button 
          @click="nextCharacter" 
          :disabled="currentIndex === characters.length - 1"
          class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          NEXT
        </button>
      </div>

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

const updateOutfitIndex = (index: number) => {
  if (currentCharacter.value) {
    currentCharacter.value.currentOutfitIndex = index;
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

.emotion-pattern-text {
  font-family: 'Impact', 'Arial Black', sans-serif; 
  line-height: 1; 
  user-select: none;
}

.caret-transparent {
    caret-color: transparent;
}
</style>