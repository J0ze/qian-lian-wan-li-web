<template>
  <div class="min-h-screen bg-black text-white">
    <NavBar />
    
    <transition
      name="page"
      mode="out-in"
    >
      <router-view />
    </transition>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
/* 你的动画样式 */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>