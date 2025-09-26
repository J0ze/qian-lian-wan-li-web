<template>
  <section 
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50" 
  >
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 animate-fadeIn">
      {{ game.title }}
    </h1>
    <p class="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 animate-fadeIn delay-200">
      {{ game.description }}
    </p>
    
    <p class="text-sm sm:text-base text-gray-600 mt-8 sm:mt-10 animate-fadeIn delay-400">
      开发者: {{ developerName }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '@/stores/game';

// 获取路由实例
const route = useRoute();
// 获取数据实例
const game = useGameStore();

defineProps({
  developerName: {
    type: String,
    default: '千连万理开发组'
  }
});

const initializeData = () => {
  game.fetchData();
  console.log("页面已初始化或路由已变化。");
};

// 1. 在组件第一次挂载时，初始化数据
onMounted(() => {
  initializeData();
});

// 2. 监听路由变化，以防组件被复用
// 传入两个参数：第一个是数据源，第二个是回调函数
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      initializeData();
    }
  }
);
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