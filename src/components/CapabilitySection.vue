<template>
  <section id="capabilities" class="capability-section section-anchor">
    <div class="section-frame">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">What contractors get</p>
        <h2>One engineer for product, data, automation and delivery.</h2>
        <p>
          I am strongest where code meets business operations: interfaces, APIs, CRM logic,
          databases, dashboards, deploys and the documentation that keeps the system usable.
        </p>
      </div>

      <div class="capability-grid">
        <article v-for="capability in capabilities" :key="capability.title" class="capability-card" data-reveal>
          <div class="capability-icon" :class="`tone-${capability.icon}`">
            <component :is="iconMap[capability.icon]" :size="24" aria-hidden="true" />
          </div>
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.summary }}</p>
          <strong>{{ capability.proof }}</strong>
          <ul class="tag-list" aria-label="Tools">
            <li v-for="tool in capability.tools" :key="tool">{{ tool }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BarChart3, BookOpen, Code2, Database, Rocket, Workflow } from '@lucide/vue'

import { capabilities, type Capability } from '@/data/portfolio'

const iconMap: Record<Capability['icon'], typeof Code2> = {
  code: Code2,
  workflow: Workflow,
  database: Database,
  rocket: Rocket,
  chart: BarChart3,
  book: BookOpen
}
</script>
