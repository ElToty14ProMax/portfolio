<template>
  <section id="certifications" class="certification-section section-anchor">
    <div class="section-frame">
      <div class="section-heading compact" data-reveal>
        <p class="eyebrow">
          <BadgeCheck :size="18" aria-hidden="true" />
          Verified credentials
        </p>
        <h2>Certifications across code, automation and technical English.</h2>
        <p>
          A compact proof layer for the skills I use every day: frontend delivery, programming,
          integration workflows, enterprise automation and communication with remote teams.
        </p>
      </div>

      <div class="certification-grid">
        <article
          v-for="certificate in certifications"
          :key="`${certificate.issuer}-${certificate.title}`"
          class="certification-card"
          :class="`accent-${certificate.accent}`"
          data-reveal
        >
          <div class="certification-card-top">
            <span>{{ certificate.category }}</span>
            <span>{{ certificate.year }}</span>
          </div>

          <h3>{{ certificate.title }}</h3>
          <p class="certification-issuer">{{ certificate.issuer }}</p>
          <p>{{ certificate.detail }}</p>

          <a
            v-if="certificate.credentialHref"
            class="certification-link"
            :href="certificate.credentialHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            View credential
            <ExternalLink :size="15" aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BadgeCheck, ExternalLink } from '@lucide/vue'

import { certifications } from '@/data/portfolio'
</script>
