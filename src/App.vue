<script setup>
import { RouterView } from 'vue-router'
import PWABadge from '@/components/PWABadge.vue'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

    <HeaderNavbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <FooterComponent />

    <PWABadge />
  </div>
</template>

<style scoped>

</style>
