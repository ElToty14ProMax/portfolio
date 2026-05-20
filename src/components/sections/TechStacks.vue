<template>
    <div class="tech-stack">
      <h3 v-if="title" class="tech-title">{{ title }}</h3>
      <div class="tech-grid">
        <div 
          v-for="(tech, index) in technologies" 
          :key="tech.id"
          class="tech-item"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="tech-icon" :style="{ backgroundColor: tech.color }">
            <i :class="tech.icon"></i>
          </div>
          <span class="tech-name">{{ tech.name }}</span>
          <div v-if="showLevel" class="tech-level">
            <div 
              class="level-bar" 
              :style="{ width: `${tech.level * 20}%`, backgroundColor: tech.color }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      default: ''
    },
    technologies: {
      type: Array,
      required: true
    },
    showLevel: {
      type: Boolean,
      default: false
    }
  })
  </script>
  
  <style scoped>
  .tech-stack {
    width: 100%;
  }
  
  .tech-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
    color: #333;
  }
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
  }
  
  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: var(--delay);
    opacity: 0;
    transform: translateY(20px);
  }
  
  .tech-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  .tech-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .tech-name {
    font-weight: 600;
    color: #333;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  
  .tech-level {
    width: 100%;
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 0.5rem;
  }
  
  .level-bar {
    height: 100%;
    border-radius: 2px;
    transition: width 1s ease 0.5s;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .tech-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
    }
    
    .tech-item {
      padding: 1rem;
    }
    
    .tech-icon {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }
  }
  </style>