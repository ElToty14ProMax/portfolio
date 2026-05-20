<template>
  <div class="home-view">
    <MyselfSection />
    <SkillsSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </div>
</template>

<script setup>
import MyselfSection from '@/components/sections/MyselfSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>