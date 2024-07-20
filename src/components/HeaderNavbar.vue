<script setup>
import { ref } from 'vue';

const isDarkMode = ref(document.documentElement.classList.contains('dark'));

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
  isDarkMode.value = document.documentElement.classList.contains('dark');
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <nav class="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">My Vue Starter</h1>
      <button @click="toggleTheme" class="relative inline-flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300 focus:outline-none">
        <span v-if="isDarkMode" class="w-4 h-4 bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 translate-x-6">🌜</span>
        <span v-else class="w-4 h-4 bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 translate-x-0">🌞</span>
      </button>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

  </header>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button span {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
