<template>
  <section id="projects" class="projects-section section-anchor">
    <div class="section-frame">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Selected builds</p>
        <h2>Case studies that show range, not just screenshots.</h2>
        <p>
          These are the projects that best explain what I can do: full-stack products, financial
          workflows, CRM operating systems and formal engineering documentation.
        </p>
      </div>
    </div>

    <div class="case-stack" aria-label="Project story panels">
      <article v-for="(project, index) in projectCases" :key="project.name" class="case-panel" :class="`accent-${project.accent}`" data-reveal>
        <div class="case-media" :class="{ 'has-image': project.image }">
          <img v-if="project.image" :src="project.image" :alt="project.imageAlt || project.name" loading="lazy" />
          <div class="case-media-pattern" aria-hidden="true"></div>
          <span class="case-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <p>{{ project.type }}</p>
        </div>

        <div class="case-content">
          <div class="case-meta">
            <span>{{ project.timeline }}</span>
            <span>{{ project.type }}</span>
          </div>
          <h3>{{ project.name }}</h3>
          <p class="case-headline">{{ project.headline }}</p>
          <p>{{ project.summary }}</p>
          <p class="case-role"><strong>My role:</strong> {{ project.role }}</p>

          <ul class="case-proof-list">
            <li v-for="highlight in project.highlights.slice(0, 2)" :key="highlight">{{ highlight }}</li>
          </ul>

          <ul class="tag-list case-stack-list" aria-label="Stack">
            <li v-for="tool in project.stack.slice(0, 7)" :key="tool">{{ tool }}</li>
          </ul>

          <p class="case-outcome">{{ project.outcome }}</p>

          <div v-if="project.links?.length" class="inline-actions">
            <a
              v-for="link in project.links"
              :key="link.href"
              class="text-link"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              {{ link.label }}
              <ArrowUpRight :size="16" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>

    <div class="section-frame public-labs">
      <div class="section-heading compact" data-reveal>
        <p class="eyebrow">Public live work</p>
        <h2>Small builds, shipped and reachable.</h2>
      </div>

      <div class="lab-grid">
        <article v-for="lab in publicLabs" :key="lab.name" class="lab-card" :class="`accent-${lab.accent}`" data-reveal>
          <p class="lab-type">{{ lab.type }} - {{ lab.timeline }}</p>
          <h3>{{ lab.name }}</h3>
          <p>{{ lab.summary }}</p>
          <ul class="tag-list">
            <li v-for="tool in lab.stack" :key="tool">{{ tool }}</li>
          </ul>
          <div class="inline-actions">
            <a
              v-for="link in lab.links"
              :key="link.href"
              class="text-link"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
              <ArrowUpRight :size="16" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

import { projectCases, publicLabs } from '@/data/portfolio'
</script>
