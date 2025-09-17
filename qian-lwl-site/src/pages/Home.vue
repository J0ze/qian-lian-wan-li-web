<template>
  <section 
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50" 
  >
    <h1 class="text-6xl font-bold text-gray-800 mb-6 animate-fadeIn">
      {{ game.title }}
    </h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-200">
      {{ game.description }}
    </p>
    
    <p class="text-base text-gray-600 mt-10 animate-fadeIn delay-400">
      开发者: {{ developerName }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '@/stores/game';

// 获取 Store 实例
const game = useGameStore();

const props = defineProps({
  developerName: {
    type: String,
    default: '千连万理开发组'
  }
});

// 在组件挂载时调用 Store 中的 fetchData
onMounted(() => {
  game.fetchData();
});
</script>

<style scoped>
/* 你的动画样式 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }
.animate-fadeIn.delay-400 { animation-delay: 0.4s; }
</style>