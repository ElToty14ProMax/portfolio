<template>
  <div class="stats-section" :class="{ 'loaded': isLoaded }">
    <div class="stats-grid">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-card"
        :style="{ '--delay': `${index * 0.15}s` }"
      >
        <div class="stat-icon-wrapper">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="icon-glow"></div>
        </div>
        <div class="stat-number">
          <span>{{ animatedNumbers[index] || 0 }}</span>
          <span class="suffix">{{ stat.suffix || '' }}</span>
        </div>
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-bar">
          <div class="stat-progress" :style="{ '--progress': getProgress(stat.number) }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    required: true,
    default: () => [] // Valor por defecto
  },
  isLoaded: {
    type: Boolean,
    default: false
  }
})

// Inicializar animatedNumbers de forma segura
const animatedNumbers = ref([])

// Computed para asegurar que stats siempre sea un array
const safeStats = computed(() => props.stats || [])

// Inicializar animatedNumbers cuando stats cambie
watch(safeStats, (newStats) => {
  if (newStats && newStats.length > 0) {
    animatedNumbers.value = newStats.map(() => 0)
  }
}, { immediate: true })

onMounted(() => {
  // Animar números cuando el componente se carga
  watch(() => props.isLoaded, (newValue) => {
    if (newValue && safeStats.value.length > 0) {
      setTimeout(() => {
        animateNumbers()
      }, 500)
    }
  }, { immediate: true })
})

function animateNumbers() {
  safeStats.value.forEach((stat, statIndex) => {
    animateNumber(statIndex, stat.number)
  })
}

function animateNumber(index, target) {
  const duration = 2000 // 2 segundos
  const steps = 60 // 60 fps
  const increment = target / steps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    if (animatedNumbers.value[index] !== undefined) {
      animatedNumbers.value[index] = Math.floor(current)
    }
  }, duration / steps)
}

function getProgress(number) {
  // Calcular progreso basado en el número máximo (100 para porcentaje, o el valor más alto)
  if (!safeStats.value.length) return '0%'
  const maxValue = Math.max(...safeStats.value.map(s => s.number))
  return `${(number / maxValue) * 100}%`
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.stats-section {
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.stats-section.loaded {
  opacity: 1;
  transform: translateY(0);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: slideInUp 0.8s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(50px);
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, #ff6b6b, #4ecdc4);
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.stat-card:hover::before {
  transform: translateX(0);
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.stat-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.stat-icon {
  font-size: 3rem;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
  animation: iconBounce 2s ease-in-out infinite;
  animation-delay: var(--delay);
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: glowPulse 2s ease-in-out infinite;
  z-index: -1;
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 800;
  color: #FFD700;
  margin-bottom: 0.5rem;
  line-height: 1;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.suffix {
  font-size: 2rem;
  margin-left: 0.2rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.stat-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
}

.stat-progress {
  width: var(--progress);
  height: 100%;
  background: linear-gradient(90deg, #ffd700, #ff6b6b);
  border-radius: 2px;
  transition: width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: progressFill 2s ease-out forwards;
  animation-delay: calc(var(--delay) + 0.5s);
  transform: translateX(-100%);
}

/* Animaciones */
@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes iconBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes progressFill {
  to {
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-card {
    padding: 2rem 1rem;
  }

  .stat-icon {
    font-size: 2.5rem;
  }

  .stat-number {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .stat-icon {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .suffix {
    font-size: 1.5rem;
  }
}
</style>