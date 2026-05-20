<template>
  <section id="projects" class="projects-section">
    <h2>Featured Projects</h2>
    <div class="projects-container">
      <CardComponent 
        v-for="project in projects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </section>
</template>

<script setup>
import CardComponent from '@/components/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'La Pequeña Isla',
    description: 'Full-stack bilingual e-commerce platform (Spanish/English) for a Cuban SME. Features multi-currency pricing (USD, EUR, BRL), PayPal & Zelle payments, delivery/pickup options, and a complete admin dashboard.',
    technologies: ['Vue 3', 'TypeScript', 'Laravel 12', 'PostgreSQL', 'Pinia', 'Tailwind CSS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    demoLink: 'https://lapequena-isla.com',
    codeLink: 'https://github.com/ElToty14ProMax/la-pequena-isla',
    watermark: 'E-COMMERCE'
  },
  {
    id: 2,
    title: 'NEXORA',
    description: 'Community financial support platform with a reputation system based on levels and XP. Users can request and provide financial support via Pix transfers. Includes admin dashboard, Android app, and complete audit system.',
    technologies: ['Laravel', 'React 18', 'TypeScript', 'PostgreSQL', 'Kotlin', 'JWT', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoLink: 'https://nexora.app',
    codeLink: 'https://github.com/ElToty14ProMax/nexora',
    watermark: 'FINTECH'
  },
  {
    id: 3,
    title: 'Student Management System',
    description: 'Complete platform for managing students, courses, and enrollments with interactive dashboard and real-time reports.',
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'JavaScript', 'PHP'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    demoLink: '#',
    codeLink: '#',
    watermark: 'WEB APP'
  },
  {
    id: 4,
    title: 'Los Pérez Smoothie Shop',
    description: 'Discover prices, offers, services, and contact information for the best smoothie shop in Cuba. Responsive SPA with modern design.',
    technologies: ['Vue.js', 'Bootstrap', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    demoLink: 'https://poncheralosperez.netlify.app/',
    codeLink: 'https://github.com/ElToty14ProMax/poncheralosperez',
    watermark: 'SPA'
  },
  {
    id: 5,
    title: 'The Weather App',
    description: 'Check current weather and forecast for your city with a clean, responsive interface. Includes location search and details like temperature, humidity, and wind.',
    technologies: ['Vue.js', 'Pinia', 'Bootstrap', 'OpenWeatherMap API'],
    image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80',
    demoLink: 'https://theweatherbyfrankgattorno.netlify.app/',
    codeLink: 'https://github.com/ElToty14ProMax/theWeather',
    watermark: 'WEATHER'
  },
  {
    id: 6,
    title: 'BMI Calculator',
    description: 'Convert between weight units and calculate your body mass index. Practical tool with intuitive interface for BMI calculation and unit conversion.',
    technologies: ['Vue.js', 'Bootstrap', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    demoLink: 'https://calculatoricmbyfrankgattorno.netlify.app/',
    codeLink: 'https://github.com/ElToty14ProMax/calculatorIMC',
    watermark: 'TOOL'
  }
]
</script>

<style scoped>
.projects-section {
  padding: 100px 20px;
  background: #0f0f0f;
  color: white;
  text-align: center;
}

.projects-section h2 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
}

.projects-section h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #fff, #666);
  margin: 20px auto 0;
  border-radius: 2px;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>