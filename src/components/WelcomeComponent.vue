<script setup>

import CounterComponent from '@/components/CounterComponent.vue'
import DescriptionComponent from '@/components/DescriptionComponent.vue'
import HelloComponent from '@/components/HelloComponent.vue'

</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <DescriptionComponent />
  </div>

  <div class="p-6 max-w-4xl mx-auto">
    <CounterComponent />
  </div>

  <div class="p-6 max-w-4xl mx-auto">
    <HelloComponent />
  </div>
</template>

<style scoped>

</style>