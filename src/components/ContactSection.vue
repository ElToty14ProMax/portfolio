<template>
  <section id="contact" class="contact-section section-anchor">
    <div class="contact-band" data-reveal>
      <div>
        <p class="eyebrow">Ready when the work is real</p>
        <h2>Bring me a product, a workflow, a messy CRM or an integration map.</h2>
        <p>
          I can help you ship the first version, rescue a fragile workflow, modernize a Vue/Laravel
          codebase, connect business tools or make your system easier to operate.
        </p>
      </div>

      <div class="contact-actions">
        <a class="button button-primary" :href="`mailto:${profile.email}?subject=Contract inquiry for Frank Gattorno`">
          <Mail :size="18" aria-hidden="true" />
          {{ profile.email }}
        </a>
        <a class="button button-secondary" :href="profile.phoneHref">
          <Phone :size="18" aria-hidden="true" />
          {{ profile.phone }}
        </a>
      </div>
    </div>

    <footer class="site-footer">
      <p>{{ profile.location }}</p>
      <div class="footer-links">
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">
          <Code2 :size="18" aria-hidden="true" />
          GitHub
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">
          <BriefcaseBusiness :size="18" aria-hidden="true" />
          LinkedIn
        </a>
        <a :href="profile.x" target="_blank" rel="noopener noreferrer">
          <ExternalLink :size="18" aria-hidden="true" />
          X
        </a>
        <a :href="profile.cvHref" download>
          <Download :size="18" aria-hidden="true" />
          CV
        </a>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { BriefcaseBusiness, Code2, Download, ExternalLink, Mail, Phone } from '@lucide/vue'

import { profile } from '@/data/portfolio'
</script>
