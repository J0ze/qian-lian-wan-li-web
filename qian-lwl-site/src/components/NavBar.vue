<template>
  <nav class="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold text-gray-700">千连万理</h1>
    <ul class="flex gap-6 text-gray-600 font-medium">
      <li><RouterLink to="/">游戏简介</RouterLink></li>
      <li><RouterLink to="/characters">人物介绍</RouterLink></li>
      <li><RouterLink to="/world">背景介绍</RouterLink></li>
      <li><RouterLink to="/gallery">画廊</RouterLink></li>
      <li><RouterLink to="/about">关于</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>