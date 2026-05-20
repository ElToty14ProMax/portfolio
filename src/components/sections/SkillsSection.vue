<template>
    <section id="skills" class="skills-section">
      <div class="container">
        <!-- Header Section -->
        <div class="section-header">
          <div class="header-content">
            <span class="section-subtitle">Tecnologías & Herramientas</span>
            <h2 class="section-title">
              Mi Stack
              <span class="highlight-text">Tecnológico</span>
            </h2>
            <p class="section-description">
              Estas son las tecnologías con las que trabajo para crear diversas experiencias digitales
            </p>
          </div>
          <div class="floating-elements">
            <div class="floating-icon">💻</div>
            <div class="floating-icon">⚡</div>
            <div class="floating-icon">🚀</div>
          </div>
        </div>
  
        <!-- Skills Categories -->
        <div class="skills-categories">
          <div class="category-tabs">
            <button 
              v-for="category in categories" 
              :key="category.id"
              :class="['category-tab', { active: activeCategory === category.id }]"
              @click="activeCategory = category.id"
            >
              <span class="tab-icon">{{ category.emoji }}</span>
              <span class="tab-text">{{ category.name }}</span>
            </button>
          </div>
  
          <!-- Skills Grid -->
          <div class="skills-container">
            <div class="skills-grid">
              <div 
                v-for="(skill, index) in filteredSkills" 
                :key="skill.id"
                class="skill-card"
                :class="[`skill-level-${skill.level}`, `category-${skill.category}`]"
                :style="{ '--delay': `${index * 0.1}s` }"
              >
                <div class="skill-background">
                  <div class="skill-pattern"></div>
                </div>
                
                <div class="skill-content">
                  <div class="skill-header">
                    <div class="skill-icon" :style="{ backgroundColor: skill.color }">
                      <i :class="skill.icon"></i>
                    </div>
                    <div class="skill-level-indicator">
                      <div class="level-dots">
                        <span 
                          v-for="dot in 5" 
                          :key="dot" 
                          :class="['dot', { active: dot <= skill.level }]"
                        ></span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 class="skill-name">
                    {{ skill.name }}
                    <span v-if="skill.upcoming" class="soon-badge">Próximamente</span>
                  </h3>
                  <p class="skill-description">{{ skill.description }}</p>
                  
                  <div class="skill-stats">
                    <div class="experience-badge">
                      <i class="fas fa-calendar-alt"></i>
                      {{ skill.experience }}
                    </div>
                    <div class="project-count">
                      <i class="fas fa-project-diagram"></i>
                      {{ skill.projects }} proyectos
                    </div>
                  </div>
  
                  <div class="skill-progress">
                    <div 
                      class="progress-bar" 
                      :style="{ 
                        width: `${skill.proficiency}%`,
                        backgroundColor: skill.color 
                      }"
                    ></div>
                  </div>
                </div>
  
                <div class="skill-glow" :style="{ backgroundColor: skill.color }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Background Decoration -->
      <div class="bg-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'

  const activeCategory = ref('all')
  const categories = [
    { id: 'all', name: 'Todas', emoji: '🌟' },
    { id: 'frontend', name: 'Frontend', emoji: '🎨' },
    { id: 'backend', name: 'Backend', emoji: '⚙️' },
    { id: 'database', name: 'Bases de Datos', emoji: '💾' },
    { id: 'language', name: 'Lenguajes', emoji: '💻' }
  ]

  const skills = [
    {
      id: 1,
      name: 'Vue.js',
      icon: 'fab fa-vuejs',
      color: '#4FC08D',
      category: 'frontend',
      level: 5,
      proficiency: 85,
      experience: '2+ años',
      projects: 6,
      description: 'Framework progresivo para interfaces de usuario'
    },
    {
      id: 9,
      name: 'React',
      icon: 'fab fa-react',
      color: '#61DAFB',
      category: 'frontend',
      level: 3,
      proficiency: 70,
      experience: '1+ año',
      projects: 3,
      description: 'Librería para construir interfaces de usuario'
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: 'fab fa-js-square',
      color: '#F7DF1E',
      category: 'language',
      level: 5,
      proficiency: 90,
      experience: '2+ años',
      projects: 6,
      description: 'Lenguaje de programación dinámico y versátil'
    },
    {
      id: 3,
      name: 'PHP',
      icon: 'fab fa-php',
      color: '#777BB4',
      category: 'language',
      level: 5,
      proficiency: 80,
      experience: '2+ años',
      projects: 7,
      description: 'Lenguaje de servidor para desarrollo web'
    },
    {
      id: 4,
      name: 'Laravel',
      icon: 'fab fa-laravel',
      color: '#FF2D20',
      category: 'backend',
      level: 5,
      proficiency: 75,
      experience: '2+ año',
      projects: 4,
      description: 'Framework elegante y expresivo para PHP'
    },
    {
      id: 5,
      name: 'Python',
      icon: 'fab fa-python',
      color: '#3776AB',
      category: 'language',
      level: 3,
      proficiency: 70,
      experience: '1+ año',
      projects: 1,
      description: 'Lenguaje simple y poderoso para múltiples usos'
    },
    {
      id: 6,
      name: 'Java',
      icon: 'fab fa-java',
      color: '#ED8B00',
      category: 'language',
      level: 4,
      proficiency: 65,
      experience: '2+ año',
      projects: 2,
      description: 'Lenguaje robusto para aplicaciones empresariales'
    },
    {
      id: 7,
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      color: '#336791',
      category: 'database',
      level: 5,
      proficiency: 80,
      experience: '2+ años',
      projects: 7,
      description: 'Sistema de base de datos relacional avanzado'
    },
    {
      id: 8,
      name: 'MySQL',
      icon: 'fas fa-database',
      color: '#4479A1',
      category: 'database',
      level: 4,
      proficiency: 85,
      experience: '1+ años',
      projects: 1,
      description: 'Sistema de gestión de bases de datos popular'
    },
    {
      id: 10,
      name: 'Node.js',
      icon: 'fab fa-node-js',
      color: '#3C873A',
      category: 'backend',
      level: 2,
      proficiency: 35,
      experience: 'Aprendiendo',
      projects: 0,
      description: 'Plataforma de ejecución para JavaScript en el servidor',
      upcoming: true
    },
    {
      id: 11,
      name: 'Django',
      icon: 'fas fa-leaf',
      color: '#092E20',
      category: 'backend',
      level: 2,
      proficiency: 30,
      experience: 'Aprendiendo',
      projects: 0,
      description: 'Framework web de alto nivel para Python',
      upcoming: true
    }
  ]

  const filteredSkills = computed(() => {
    if (activeCategory.value === 'all') return skills
    return skills.filter(skill => skill.category === activeCategory.value)
  })

  function animateStats() {
    const stats = document.querySelectorAll('.stat-number')
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'))
      const increment = target / 100
      let current = 0
      const updateCount = () => {
        if (current < target) {
          current += increment
          stat.textContent = Math.ceil(current)
          requestAnimationFrame(updateCount)
        } else {
          stat.textContent = target
        }
      }
      updateCount()
    })
  }

  function observeSkills() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    })
    document.querySelectorAll('.skill-card').forEach(card => {
      observer.observe(card)
    })
  }

  onMounted(() => {
    animateStats()
    observeSkills()
  })
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  .skills-section {
    position: relative;
    padding: 5rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow: hidden;
    min-height: 100vh;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }
  
  /* Header Styles */
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
  }
  
  .header-content {
    position: relative;
    z-index: 2;
  }
  
  .section-subtitle {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .section-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: #fff;
    margin: 1rem 0;
    line-height: 1.2;
  }
  
  .highlight-text {
    background: linear-gradient(45deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
  
  .floating-icon {
    position: absolute;
    font-size: 2rem;
    animation: float 6s ease-in-out infinite;
  }
  
  .floating-icon:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .floating-icon:nth-child(2) {
    top: 30%;
    right: 15%;
    animation-delay: 2s;
  }
  
  .floating-icon:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }
  
  /* Category Tabs */
  .category-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
  
  .category-tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .category-tab:hover,
  .category-tab.active {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .tab-icon {
    font-size: 1.2rem;
  }
  
  /* Skills Grid */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .skill-card {
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
    opacity: 0;
    transform: translateY(50px) scale(0.9);
    animation: slideInUp 0.6s ease forwards;
    animation-delay: var(--delay);
  }
  
  .skill-card.animate {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  .skill-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
  
  .skill-card:hover .skill-glow {
    opacity: 0.3;
  }
  
  .skill-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.03;
    overflow: hidden;
  }
  
  .skill-pattern {
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20px 20px, currentColor 2px, transparent 2px);
    background-size: 40px 40px;
    animation: patternMove 20s linear infinite;
  }
  
  .skill-content {
    position: relative;
    z-index: 2;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .skill-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.8rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }
  
  .skill-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }
  
  .skill-card:hover .skill-icon::before {
    animation: shine 0.5s ease;
  }
  
  .skill-level-indicator .level-dots {
    display: flex;
    gap: 4px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e2e8f0;
    transition: all 0.3s ease;
  }
  
  .dot.active {
    background: linear-gradient(45deg, #667eea, #764ba2);
    transform: scale(1.2);
  }
  
  .skill-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
  }

  .soon-badge {
    display: inline-block;
    margin-left: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #1d4ed8;
    background: rgba(59, 130, 246, 0.12);
    border: 1px solid rgba(59, 130, 246, 0.35);
    padding: 2px 8px;
    border-radius: 999px;
    vertical-align: middle;
  }
  
  .skill-description {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  .skill-stats {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .experience-badge,
  .project-count {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #f8fafc;
    border-radius: 8px;
    color: #64748b;
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  .skill-progress {
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }
  
  .progress-bar {
    height: 100%;
    border-radius: 3px;
    position: relative;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: progressLoad 2s ease;
  }
  
  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: progressShine 2s ease infinite;
  }
  
  .skill-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    opacity: 0;
    border-radius: 50%;
    filter: blur(40px);
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  /* Stats Section */
  .skills-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
  }
  
  .stat-item {
    text-align: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    font-weight: 500;
  }
  
  /* Background Decoration */
  .bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
  }
  
  .decoration-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    animation: decorationFloat 20s ease-in-out infinite;
  }
  
  .circle-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: -5%;
    animation-delay: 0s;
  }
  
  .circle-2 {
    width: 300px;
    height: 300px;
    top: 50%;
    right: -10%;
    animation-delay: 7s;
  }
  
  .circle-3 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 20%;
    animation-delay: 14s;
  }
  
  /* Animations */
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
  
  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
  
  @keyframes progressLoad {
    0% {
      width: 0%;
    }
  }
  
  @keyframes progressShine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  @keyframes patternMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(40px, 40px);
    }
  }
  
  @keyframes decorationFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2.5rem;
    }
    
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .skill-card {
      padding: 1.5rem;
    }
    
    .category-tabs {
      gap: 0.5rem;
    }
    
    .category-tab {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
    
    .container {
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .skills-section {
      padding: 3rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .category-tabs {
      flex-direction: column;
      align-items: center;
    }
    
    .skill-stats {
      margin-bottom: 1rem;
    }
  }
  </style>
  