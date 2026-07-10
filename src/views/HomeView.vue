<template>
  <div class="home-view">
    <HeroSection />
    <SignalStrip />
    <CapabilitySection />
    <ExperienceSection />
    <ProjectShowcase />
    <ProofSection />
    <CertificationSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted } from 'vue'

import CertificationSection from '@/components/CertificationSection.vue'
import CapabilitySection from '@/components/CapabilitySection.vue'
import ContactSection from '@/components/ContactSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProjectShowcase from '@/components/ProjectShowcase.vue'
import ProofSection from '@/components/ProofSection.vue'
import SignalStrip from '@/components/SignalStrip.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

let hashScrollTimers: number[] = []

const scrollToCurrentHash = (behavior: ScrollBehavior = 'smooth') => {
  const targetId = decodeURIComponent(window.location.hash.replace('#', ''))
  if (!targetId) return

  const target = document.getElementById(targetId)
  target?.scrollIntoView({ block: 'start', behavior })
}

const scheduleHashScroll = (behavior: ScrollBehavior = 'smooth') => {
  hashScrollTimers.forEach((timer) => window.clearTimeout(timer))
  hashScrollTimers = []

  requestAnimationFrame(() => scrollToCurrentHash(behavior))
  hashScrollTimers = [180, 620].map((delay) => window.setTimeout(() => scrollToCurrentHash(behavior), delay))
}

const handleHashChange = () => scheduleHashScroll()

onMounted(async () => {
  await nextTick()
  scheduleHashScroll('auto')
  window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
  hashScrollTimers.forEach((timer) => window.clearTimeout(timer))
})
</script>
