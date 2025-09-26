<template>
  <section 
    class="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6"
  >
    <div class="text-center mb-10 sm:mb-16 pt-8 animate-fadeIn">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-blue-800">GALLERY</h1>
      <p class="text-base sm:text-lg text-blue-800 mt-2 font-serif">源于美术组</p>
    </div>

    <div v-if="showImages" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
      <div 
        v-for="(image, index) in imageUrls" 
        :key="index"
        class="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <img
          :src="image"
          alt="Gallery Image"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>

    <div v-else class="text-center p-4 sm:p-8">
      <p class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
        CG 正在筹办中，敬请期待！
      </p>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';

// 这行代码控制画作的显示。
// 只需要将 false 改为 true，下方的画作就会重新显示。
const showImages = ref(true);

const images = ref<string[]>([
  '/src/assets/gallery/ciallo1.png',
  '/src/assets/gallery/ciallo2.png',
  '/src/assets/gallery/ciallo3.png',
  '/src/assets/gallery/ciallo4.png',
  // 你可以根据需要添加更多图片
]);

const imageUrls = computed(() => {
  return images.value.map(image => new URL(image, import.meta.url).href);
});
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