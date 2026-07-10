<template>
  <section id="profile" class="hero-section section-anchor" aria-labelledby="hero-title">
    <div class="hero-media" aria-hidden="true">
      <div class="hero-gradient-field"></div>
      <div class="hero-circuit-grid"></div>
      <div class="hero-tech-scene">
        <div class="hero-code-card hero-code-card-primary">
          <span>automation.pipeline.ts</span>
          <code>lead.crm.sync()</code>
          <code>webhook.map(payload)</code>
          <code>ai.agent.route(task)</code>
        </div>

        <div class="hero-code-card hero-code-card-secondary">
          <span>sales_ops.json</span>
          <code>Zoho -> Monday -> Slack</code>
          <code>HubSpot -> Sheets -> QA</code>
        </div>

        <div class="hero-node-map">
          <span>CRM</span>
          <span>API</span>
          <span>AI</span>
          <span>DATA</span>
          <span>OPS</span>
        </div>
      </div>
    </div>
    <div class="hero-scrim" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div class="hero-content">
      <p class="eyebrow" data-reveal>
        <Sparkles :size="18" aria-hidden="true" />
        Based in {{ profile.location }} - available for remote contracts
      </p>

      <h1 id="hero-title" data-reveal>{{ profile.shortName }}</h1>

      <p class="hero-kicker" data-reveal>
        I build production-ready web apps, APIs, CRM automations and AI-assisted workflows for
        teams that need speed, clarity and reliable integrations.
      </p>

      <div class="hero-actions" data-reveal>
        <a class="button button-primary" :href="`mailto:${profile.email}?subject=Project inquiry for Frank Gattorno`">
          <Mail :size="18" aria-hidden="true" />
          Work with me
        </a>
        <a class="button button-secondary" :href="profile.cvHref" download>
          <Download :size="18" aria-hidden="true" />
          Download CV
        </a>
        <a class="button button-ghost" href="#projects">
          <ArrowRight :size="18" aria-hidden="true" />
          Case studies
        </a>
      </div>

      <div class="hero-photo-strip" data-reveal aria-label="Professional photos">
        <figure>
          <img :src="profile.thesisImage" alt="Frank Gattorno presenting his CENDAAI thesis" />
          <figcaption>CENDAAI thesis defense</figcaption>
        </figure>
        <figure>
          <img :src="profile.graduationImage" alt="Frank Gattorno at UCLV graduation" />
          <figcaption>UCLV computer engineering</figcaption>
        </figure>
      </div>
    </div>

    <div class="scroll-signal" aria-hidden="true">
      <span></span>
      <p>Scroll</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Download, Mail, Sparkles } from '@lucide/vue'

import { profile } from '@/data/portfolio'
</script>
