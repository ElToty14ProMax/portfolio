<template>
    <div 
      class="project-card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ 'card-hover': hover }"
      :style="cardStyle"
    >
      <div class="watermark">{{ project.watermark }}</div>
      <div class="card-image">
        <img :src="project.image" :alt="project.title">
      </div>
      <div class="card-content">
        <h3>{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        
        <div class="tech-stack">
          <span 
            v-for="(tech, index) in project.technologies" 
            :key="index" 
            class="tech-tag"
            :style="{ backgroundColor: techColors[index % techColors.length] }"
          >
            {{ tech }}
          </span>
        </div>
        
        <div class="card-links">
          <a :href="project.demoLink" target="_blank" class="demo-btn">
            <i class="fas fa-external-link-alt"></i> Live
          </a>
          <a :href="project.codeLink" target="_blank" class="code-btn">
            <i class="fab fa-github"></i> Source
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'

  defineProps({
    project: {
      type: Object,
      required: true
    }
  })

  const hover = ref(false)
  const techColors = [
    'rgba(56, 178, 172, 0.15)', 
    'rgba(66, 153, 225, 0.15)', 
    'rgba(159, 122, 234, 0.15)',
    'rgba(236, 72, 153, 0.15)',
    'rgba(237, 137, 54, 0.15)'
  ]

  const rotateX = computed(() => Math.random() * 4 + 1)
  const rotateY = computed(() => Math.random() * 4 + 1)

  const cardStyle = computed(() => {
    if (hover.value) {
      return {
        transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) translateY(-15px) scale(1.03)`
      }
    }
    return { transform: 'perspective(1000px) rotateX(0) rotateY(0)' }
  })
  </script>
  
<style scoped>
.project-card {
    width: 100%;
    background: #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid #2a2a2a;
  }
  
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
    border-color: #404040;
  }
  
  .card-image {
    height: 180px;
    overflow: hidden;
    position: relative;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  .project-card:hover .card-image img {
    transform: scale(1.05);
  }
  
  .card-content {
    padding: 24px;
  }
  
  .card-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #f5f5f5;
  }
  
  .project-description {
    color: #888;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .tech-tag {
    color: #999;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    background: #252525;
    border: 1px solid #333;
    transition: all 0.2s;
  }
  
  .tech-tag:hover {
    background: #333;
    color: #fff;
  }
  
  .card-links {
    display: flex;
    gap: 12px;
    padding-top: 16px;
    border-top: 1px solid #2a2a2a;
  }
  
  .demo-btn, .code-btn {
    flex: 1;
    padding: 10px 0;
    text-align: center;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  
  .demo-btn {
    background: #fff;
    color: #000;
  }
  
  .demo-btn:hover {
    background: #e0e0e0;
  }
  
  .code-btn {
    background: transparent;
    color: #888;
    border: 1px solid #444;
  }
  
  .code-btn:hover {
    border-color: #666;
    color: #fff;
  }
  
  .watermark {
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0.04;
    font-size: 4rem;
    font-weight: 700;
    z-index: 0;
    pointer-events: none;
    transform: rotate(-10deg);
    color: #fff;
  }
</style>