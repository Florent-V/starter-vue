<script setup>
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-700 p-6 transition duration-300 transform hover:scale-105">
    <div class="flex items-center mb-4">
      <div class="mr-4">
        <slot name="icon"></slot>
      </div>
      <h2 class="text-2xl font-semibold">
        <slot name="title"></slot>
      </h2>
    </div>
    <p>
      <slot name="description"></slot>
    </p>
  </div>
</template>


<style scoped>
</style>
