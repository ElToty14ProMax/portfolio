<template>
  <div class="app-shell">
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import AppHeader from '@/components/AppHeader.vue'

onMounted(() => {
  document.documentElement.classList.add('app-ready')
})
</script>
