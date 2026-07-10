<template>
  <header class="site-header">
    <a class="brand-lockup" href="#profile" aria-label="Go to profile">
      <span class="brand-mark">FG</span>
      <span class="brand-text">
        <strong>{{ profile.shortName }}</strong>
        <small>Full-stack + integrations</small>
      </span>
    </a>

    <button class="nav-toggle" type="button" :aria-expanded="isOpen" aria-controls="primary-nav" @click="isOpen = !isOpen">
      <Menu v-if="!isOpen" :size="22" aria-hidden="true" />
      <X v-else :size="22" aria-hidden="true" />
      <span class="sr-only">Toggle navigation</span>
    </button>

    <nav id="primary-nav" class="site-nav" :class="{ 'is-open': isOpen }" aria-label="Primary navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href" @click="isOpen = false">
        {{ item.label }}
      </a>
      <a class="nav-cta" :href="profile.cvHref" download @click="isOpen = false">
        <Download :size="16" aria-hidden="true" />
        CV
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Download, Menu, X } from '@lucide/vue'
import { ref } from 'vue'

import { navItems, profile } from '@/data/portfolio'

const isOpen = ref(false)
</script>
