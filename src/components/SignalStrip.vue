<template>
  <section class="signal-strip" aria-label="Professional highlights">
    <dl class="signal-stats" data-reveal>
      <div v-for="stat in heroStats" :key="stat.label" class="signal-stat">
        <dt>{{ stat.value }}</dt>
        <dd>{{ stat.label }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { heroStats } from '@/data/portfolio'
</script>
