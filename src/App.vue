<script setup>
import { RouterView } from 'vue-router'
import PWABadge from '@/components/PWABadge.vue'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-100">

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
