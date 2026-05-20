<template>
  <section id="myself" class="myself-section">
    <div class="myself-container">
      <div class="myself-content">
        <!-- Profile Section -->
        <div class="profile-section" :class="{ 'loaded': isLoaded }">
          <div class="profile-image-wrapper">
            <div class="profile-glow"></div>
            <img
              src="@/assets/profile.jpg"
              alt="Frank Eduardo Gattorno Rodríguez"
              class="profile-img"
            />
          </div>

          <div class="intro-content">
            <div class="greeting">
              <span class="greeting-icon">👋</span>
              <span>Hi! I'm</span>
            </div>

            <h1 class="myself-name">
              <span class="name-part">Eng.</span>
              <span class="name-part">Frank Eduardo</span>
              <span class="name-part highlight">Gattorno Rodríguez</span>
            </h1>

            <div class="role-section">
              <p class="role-title">
                <span class="typing-effect">Integration Engineer & Full-Stack Developer</span>
                <span class="cursor">|</span>
              </p>
              <p class="role-description">
                Integration Engineer with proven experience in API-led integrations, workflow automation,
                and system connectivity. Building complete web solutions with modern technologies.
              </p>
            </div>

            <div class="myself-actions">
              <button class="btn btn-primary" @click="downloadCV">
                <i class="fas fa-download"></i>
                <span>Download CV</span>
                <div class="btn-ripple"></div>
              </button>
              <button class="btn btn-secondary" @click="scrollToProjects">
                <i class="fas fa-eye"></i>
                <span>View Projects</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Stats usando componente separado -->
        <StatsSection :stats="stats.value" :is-loaded="isLoaded" />
      </div>
    </div>

    <!-- Partículas de fondo -->
    <div class="particles-container">
      <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle()"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StatsSection from "./StatsSection.vue"

const isLoaded = ref(false)

const stats = [
  { number: 15, label: "Projects", icon: "🚀", suffix: "+" },
  { number: 12, label: "Technologies", icon: "💻", suffix: "+" },
  { number: 3, label: "Years Exp.", icon: "⭐", suffix: "+" },
  { number: 100, label: "Dedication", icon: "❤️", suffix: "%" }
]

onMounted(() => {
  // Activar animaciones después de que el componente se monte
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

function downloadCV() {
  // Para archivos en public, usa rutas absolutas desde la raíz
  const link = document.createElement('a')
  link.href = '/PortFolio.png' // Sin '../' ni 'public/' - directo desde la raíz
  link.download = 'Frank_Eduardo_Gattorno_CV.png' // Cambiar extensión si es PNG
  document.body.appendChild(link) // Añadir al DOM temporalmente
  link.click()
  document.body.removeChild(link) // Limpiar
}

function scrollToProjects() {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

function getParticleStyle() {
  return {
    '--random-x': Math.random(),
    '--random-y': Math.random(),
    '--random-delay': Math.random() * 2,
    '--random-duration': 3 + Math.random() * 4
  }
}
</script>

<style scoped>
/* Importar fuentes modernas */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

.myself-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.myself-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
}

.myself-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

/* Profile Section */
.profile-section {
  text-align: center;
  color: white;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.profile-section.loaded {
  opacity: 1;
  transform: translateY(0);
}

.profile-image-wrapper {
  margin-bottom: 2.5rem;
  display: inline-block;
  position: relative;
}

.profile-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  border-radius: 50%;
  filter: blur(20px);
  animation: glowRotate 4s ease-in-out infinite alternate;
  z-index: -1;
}

.profile-img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: profileFloat 6s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.05);
}

.intro-content {
  max-width: 700px;
  margin: 0 auto;
}

.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.greeting-icon {
  font-size: 1.8rem;
  animation: wave 2s ease-in-out infinite;
}

.myself-name {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
  font-family: 'Inter', sans-serif;
}

.name-part {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: nameReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.name-part:nth-child(1) { animation-delay: 0.2s; }
.name-part:nth-child(2) { animation-delay: 0.4s; }
.name-part:nth-child(3) { animation-delay: 0.6s; }

.highlight {
  background: linear-gradient(135deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role-section {
  margin-bottom: 3rem;
}

.role-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffd700;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
}

.typing-effect {
  border-right: 2px solid #ffd700;
  animation: typing 3s steps(20, end), blink 1s infinite;
}

.cursor {
  animation: blink 1s infinite;
  color: #ffd700;
}

.role-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

/* Botones mejorados */
.myself-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  transform: translateY(20px);
  opacity: 0;
  animation: buttonSlideIn 0.6s ease forwards;
}

.btn:nth-child(1) { animation-delay: 0.8s; }
.btn:nth-child(2) { animation-delay: 1s; }

.btn-primary {
  background: linear-gradient(135deg, #ffd700, #ffb347);
  color: #333;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.btn:active .btn-ripple {
  width: 200px;
  height: 200px;
}

/* Partículas de fondo */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  left: calc(var(--random-x) * 100%);
  top: calc(var(--random-y) * 100%);
  animation: particleFloat var(--random-duration, 4s) infinite ease-in-out;
  animation-delay: calc(var(--random-delay, 0) * 1s);
}

/* Animaciones */
@keyframes glowRotate {
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(180deg) scale(1.1); }
}

@keyframes profileFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-20deg); }
}

@keyframes nameReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes buttonSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .myself-container {
    padding: 0 1rem;
  }

  .profile-img {
    width: 180px;
    height: 180px;
  }

  .myself-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }

  .role-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .myself-content {
    gap: 2rem;
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
  }
}
</style>