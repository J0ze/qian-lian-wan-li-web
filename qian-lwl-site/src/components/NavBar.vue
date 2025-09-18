<template>
  <nav class="w-full bg-white shadow-sm px-4 sm:px-8 py-4 flex flex-col md:flex-row justify-between items-center relative z-20">
    <div class="w-full flex justify-between items-center">
      <RouterLink to="/" class="flex-shrink-0">
        <img :src="logoUrl" alt="千连万理 Logo" class="h-10">
      </RouterLink>

      <button @click="toggleMenu" class="md:hidden text-gray-600 focus:outline-none">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <ul v-show="isMenuOpen" 
        class="w-full mt-4 md:mt-0 flex flex-col md:flex-row gap-4 md:gap-6 text-gray-600 font-medium items-center transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'">
      <li><RouterLink to="/" @click="closeMenu" class="block py-2 md:py-0">游戏简介</RouterLink></li>
      <li><RouterLink to="/characters" @click="closeMenu" class="block py-2 md:py-0">人物介绍</RouterLink></li>
      <li><RouterLink to="/world" @click="closeMenu" class="block py-2 md:py-0">背景介绍</RouterLink></li>
      <li><RouterLink to="/gallery" @click="closeMenu" class="block py-2 md:py-0">画廊</RouterLink></li>
      <li><RouterLink to="/about" @click="closeMenu" class="block py-2 md:py-0">关于</RouterLink></li>
    </ul>

    <ul class="hidden md:flex gap-6 text-gray-600 font-medium items-center">
        <li><RouterLink to="/" class="hover:text-blue-500 transition-colors whitespace-nowrap">游戏简介</RouterLink></li>
        <li><RouterLink to="/characters" class="hover:text-blue-500 transition-colors whitespace-nowrap">人物介绍</RouterLink></li>
        <li><RouterLink to="/world" class="hover:text-blue-500 transition-colors whitespace-nowrap">背景介绍</RouterLink></li>
        <li><RouterLink to="/gallery" class="hover:text-blue-500 transition-colors whitespace-nowrap">画廊</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-blue-500 transition-colors whitespace-nowrap">关于</RouterLink></li>
    </ul>

  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const logoUrl = new URL('/src/assets/logo.png', import.meta.url).href;

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 监听路由变化，自动关闭菜单
watch(() => route.path, () => {
  if (isMenuOpen.value) {
    closeMenu();
  }
});
</script>