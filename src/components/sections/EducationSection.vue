<template>
  <section id="education" class="education-section">
    <!-- Partículas de fondo -->
    <div class="particles-bg">
      <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>

    <!-- Header con animación -->
    <div class="section-header" :class="{ 'loaded': isLoaded }">
      <div class="title-container">
        <div class="graduation-icon">🎓</div>
        <h2 class="section-title">
          <span class="title-word">Academic</span>
          <span class="title-word highlight">Background</span>
        </h2>
        <div class="title-underline"></div>
      </div>
      <p class="section-subtitle">
        My educational journey and professional certifications
      </p>
    </div>
    
    <!-- Timeline moderna -->
    <div class="timeline-container" :class="{ 'loaded': isLoaded }">
      <div class="timeline">
        <div 
          class="timeline-item" 
          v-for="(edu, index) in education" 
          :key="edu.id"
          :class="{ 'current': edu.isCurrent }"
          :style="{ '--delay': `${index * 0.2}s` }"
        >
          <div class="timeline-marker">
            <div class="marker-outer">
              <div class="marker-inner">
                <div class="marker-pulse" v-if="edu.isCurrent"></div>
              </div>
            </div>
            <div class="timeline-line" v-if="index !== education.length - 1"></div>
          </div>
          
          <div class="timeline-content">
            <div class="education-card">
              <!-- Efecto de brillo -->
              <div class="card-shine"></div>
              
              <!-- Header de la tarjeta -->
              <div class="card-header">
                <div class="date-container">
                  <span class="date-badge" :class="{ 'active': edu.isCurrent }">
                    <i class="date-icon">📅</i>
                    {{ edu.dateRange }}
                  </span>
                  <span v-if="edu.isCurrent" class="current-tag">
                    <span class="pulse-dot"></span>
                    In Progress
                  </span>
                </div>
              </div>
              
              <!-- Contenido principal -->
              <div class="card-body">
                <h3 class="program-title">
                  {{ edu.program }}
                </h3>
                
                <div class="institution-container">
                  <div class="institution-icon">🏫</div>
                  <p class="institution-name">
                    {{ edu.institution }}
                  </p>
                </div>
                
                <!-- Info adicional con iconos -->
                <div class="additional-info" v-if="edu.achievement || edu.location">
                  <div v-if="edu.achievement" class="info-item achievement">
                    <div class="info-icon">🏆</div>
                    <span class="info-text">{{ edu.achievement }}</span>
                  </div>
                  <div v-if="edu.location" class="info-item location">
                    <div class="info-icon">📍</div>
                    <span class="info-text">{{ edu.location }}</span>
                  </div>
                </div>

                <!-- Barra de progreso decorativa -->
                <div class="progress-container">
                  <div class="progress-bar" :class="{ 'completed': !edu.isCurrent }">
                    <div class="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

const education = [
  {
    id: 1,
    dateRange: '2022-2025',
    institution: "Universidad Central 'Marta Abreu' de Las Villas",
    program: 'Computer Engineering',
    achievement: 'Graduated',
    location: 'Villa Clara, Cuba',
    isCurrent: false
  },
  {
    id: 2,
    dateRange: '2025',
    institution: "Centro de idiomas de la Universidad Central 'Marta Abreu' de Las Villas",
    program: 'English Language Certification',
    achievement: 'Level B1',
    location: 'Villa Clara, Cuba',
    isCurrent: false
  },
  {
    id: 3,
    dateRange: '2017 - 2020',
    institution: "Instituto Preuniversitario 'Mariano Clemente Prado'",
    program: 'High School Diploma',
    achievement: 'Graduated',
    location: 'Villa Clara, Cuba',
    isCurrent: false
  }
]

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 300)
})

function getParticleStyle() {
  return {
    '--x': Math.random() * 100 + '%',
    '--y': Math.random() * 100 + '%',
    '--delay': Math.random() * 20 + 's',
    '--duration': (Math.random() * 10 + 10) + 's',
    '--size': (Math.random() * 4 + 2) + 'px'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap');

.education-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%);
  color: white;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

/* Partículas de fondo */
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: linear-gradient(45deg, #64ffda, #1de9b6);
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  animation: particleFloat var(--duration) infinite ease-in-out;
  animation-delay: var(--delay);
  opacity: 0.6;
  filter: blur(1px);
}

/* Header mejorado */
.section-header {
  text-align: center;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header.loaded {
  opacity: 1;
  transform: translateY(0);
}

.title-container {
  position: relative;
  display: inline-block;
}

.graduation-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 0 20px rgba(100, 255, 218, 0.5));
  animation: iconFloat 3s ease-in-out infinite;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  position: relative;
}

.title-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(100px);
  animation: titleReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.title-word:nth-child(1) { 
  animation-delay: 0.2s; 
  color: #e2e8f0;
}

.title-word:nth-child(2) { 
  animation-delay: 0.4s; 
  margin-left: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #64ffda 0%, #1de9b6 50%, #00bcd4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.title-underline {
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #64ffda, #1de9b6, #00bcd4);
  margin: 1rem auto;
  border-radius: 2px;
  animation: underlineExpand 1s ease forwards;
  animation-delay: 0.8s;
}

.section-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 400;
  opacity: 0;
  transform: translateY(20px);
  animation: subtitleAppear 0.6s ease forwards;
  animation-delay: 1.2s;
}

/* Timeline moderna */
.timeline-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--delay);
}

.timeline-container.loaded .timeline-item {
  animation-play-state: running;
}

/* Marcadores de timeline */
.timeline-marker {
  position: absolute;
  left: -3rem;
  top: 2rem;
  z-index: 2;
}

.marker-outer {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #0f0f23);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
}

.marker-inner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64ffda, #1de9b6);
  position: relative;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
}

.timeline-item.current .marker-inner {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  animation: currentPulse 2s infinite;
}

.marker-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
  animation: pulseRing 2s infinite;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 30px;
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, 
    rgba(100, 255, 218, 0.5) 0%, 
    rgba(100, 255, 218, 0.2) 50%, 
    transparent 100%);
  transform: translateX(-50%);
}

/* Tarjetas de educación */
.education-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.education-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(100, 255, 218, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(100, 255, 218, 0.1), 
    transparent);
  transition: left 0.6s;
}

.education-card:hover .card-shine {
  left: 100%;
}

.card-header {
  padding: 1.5rem 1.5rem 0;
}

.date-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.date-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64ffda;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.3s ease;
}

.date-badge.active {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.date-icon {
  font-size: 1rem;
}

.current-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: tagGlow 2s ease-in-out infinite alternate;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: currentColor;
  border-radius: 50%;
  animation: dotPulse 1.5s infinite;
}

.card-body {
  padding: 1.5rem;
}

.program-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
}

.institution-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.institution-icon {
  font-size: 1.5rem;
  margin-top: 0.2rem;
  filter: drop-shadow(0 0 5px rgba(100, 255, 218, 0.3));
}

.institution-name {
  color: #cbd5e1;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  flex: 1;
}

.additional-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(100, 255, 218, 0.1);
  border-color: rgba(100, 255, 218, 0.2);
}

.info-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px rgba(100, 255, 218, 0.3));
}

.info-text {
  color: #e2e8f0;
  font-weight: 500;
  font-size: 0.9rem;
}

.progress-container {
  margin-top: 1rem;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #64ffda, #1de9b6);
  width: 0;
  border-radius: 3px;
  animation: progressFill 2s ease forwards;
  animation-delay: calc(var(--delay) + 0.5s);
}

.progress-bar.completed .progress-fill {
  width: 100%;
}

/* Animaciones avanzadas */
@keyframes particleFloat {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-100px) rotate(180deg); 
    opacity: 1;
  }
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes titleReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underlineExpand {
  to { width: 120px; }
}

@keyframes subtitleAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes currentPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 107, 107, 0.8);
    transform: scale(1.1);
  }
}

@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

@keyframes tagGlow {
  from { box-shadow: 0 0 10px rgba(255, 107, 107, 0.5); }
  to { box-shadow: 0 0 20px rgba(255, 107, 107, 0.8); }
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes progressFill {
  to { width: 70%; }
}

/* Responsive */
@media (max-width: 768px) {
  .education-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: clamp(2rem, 6vw, 3rem);
  }
  
  .timeline {
    padding-left: 2rem;
  }
  
  .timeline-marker {
    left: -2rem;
  }
  
  .education-card {
    margin-left: 0;
  }
  
  .date-container {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .education-section {
    padding: 2rem 0.5rem;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .program-title {
    font-size: 1.5rem;
  }
}
</style>