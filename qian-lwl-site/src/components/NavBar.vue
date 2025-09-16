<template>
  <nav class="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 flex justify-center gap-8 p-4 text-white font-bold text-lg">
    <RouterLink to="/" class="hover:text-pink-400 transition-colors">游戏简介</RouterLink>
    <RouterLink to="/characters" class="hover:text-pink-400 transition-colors">人物介绍</RouterLink>
    <RouterLink to="/world" class="hover:text-pink-400 transition-colors">背景介绍</RouterLink>
    <RouterLink to="/about" class="hover:text-pink-400 transition-colors">关于</RouterLink>
    <RouterLink to="/gallery" class="hover:text-pink-400 transition-colors">画廊</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
