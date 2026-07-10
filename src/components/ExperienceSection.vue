<template>
  <section id="work" class="experience-section section-anchor">
    <div class="section-frame">
      <div class="section-heading compact" data-reveal>
        <p class="eyebrow">Work history</p>
        <h2>Hands-on delivery across software and operations.</h2>
      </div>

      <div class="timeline">
        <article v-for="job in experiences" :key="`${job.company}-${job.period}`" class="timeline-item" data-reveal>
          <div class="timeline-date">
            <span>{{ job.period }}</span>
          </div>
          <div class="timeline-body">
            <p class="job-location">{{ job.location }}</p>
            <h3>{{ job.role }}</h3>
            <p class="company">{{ job.company }}</p>
            <p class="job-summary">{{ job.summary }}</p>
            <ul class="check-list">
              <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
            <ul class="tag-list">
              <li v-for="tag in job.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '@/data/portfolio'
</script>
