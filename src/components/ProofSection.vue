<template>
  <section id="proof" class="proof-section section-anchor">
    <div class="section-frame proof-layout">
      <div class="proof-copy" data-reveal>
        <p class="eyebrow">How I work</p>
        <h2>Clear thinking before code, clean handoff after code.</h2>
        <p>
          I do not treat a build as finished when the screen looks nice. I care about the data
          model, error paths, environment variables, deployment notes, test plans and the next
          person who has to maintain it.
        </p>

        <ol class="process-list">
          <li v-for="step in processSteps" :key="step.title">
            <span>{{ step.number }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.body }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="proof-panels">
        <article class="proof-panel" data-reveal>
          <h3>Core stack</h3>
          <div v-for="group in techClouds" :key="group.label" class="tech-cloud">
            <h4>{{ group.label }}</h4>
            <ul class="tag-list">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>

        <article class="proof-panel" data-reveal>
          <h3>Education</h3>
          <div v-for="item in education" :key="item.title" class="education-item">
            <p>{{ item.period }}</p>
            <h4>{{ item.title }}</h4>
            <span>{{ item.institution }}</span>
            <small>{{ item.detail }}</small>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, techClouds } from '@/data/portfolio'

const processSteps = [
  {
    number: '01',
    title: 'Map the business flow',
    body: 'I identify actors, data, states, ownership, edge cases and the real definition of done.'
  },
  {
    number: '02',
    title: 'Design the architecture',
    body: 'I choose the frontend, API, database and automation boundaries so the system can evolve.'
  },
  {
    number: '03',
    title: 'Build the product surface',
    body: 'I ship usable screens, reusable components, validation, auth, integrations and reporting views.'
  },
  {
    number: '04',
    title: 'Verify and hand off',
    body: 'I document deploys, tests, variables, workflows and support paths so the project is operational.'
  }
]
</script>
