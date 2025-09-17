<template>
  <section class="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center py-12 px-6">
    
    <div class="text-center mb-16 pt-8 animate-fadeIn">
      <h1 class="text-6xl font-bold text-gray-800 tracking-wider">ABOUT</h1>
      <p class="text-lg text-gray-600 mt-2 font-serif">关于我们</p>
    </div>

    <div class="max-w-4xl w-full p-8 bg-white rounded-lg shadow-xl animate-fadeIn delay-200">
      
      <h2 class="text-2xl font-bold mb-6 border-b pb-2">游戏信息</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b last:border-b-0">
        <div class="font-bold text-gray-600">游戏类型</div>
        <div class="text-gray-800">Visual Novel</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b last:border-b-0">
        <div class="font-bold text-gray-600">游戏语言</div>
        <div class="text-gray-800">简体中文</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b last:border-b-0">
        <div class="font-bold text-gray-600">限制年龄</div>
        <div class="text-gray-800">ALL</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b last:border-b-0">
        <div class="font-bold text-gray-600">平台</div>
        <div class="text-gray-800">Steam</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b last:border-b-0">
        <div class="font-bold text-gray-600">制作组</div>
        <div class="text-gray-800">千连万理开发组</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b last:border-b-0">
        <div class="font-bold text-gray-600">社交媒体</div>
        <div class="text-gray-800">QQ 群号：1020939651</div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// 这里不需要额外的 JS 逻辑
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

.animate-fadeIn.delay-200 {
  animation-delay: 0.2s;
}

/* 确保最后一行的下边框被隐藏 */
.border-b.last\:border-b-0:last-child {
  border-bottom-width: 0;
}
</style>