<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      
      <div class="timeline">
        <div 
          v-for="job in experience" 
          :key="job.id"
          class="job-card"
          :class="{ 'current': job.isCurrent }"
        >
          <div class="job-header">
            <div class="job-title-container">
              <h3 class="job-title">{{ job.title }}</h3>
              <span class="company-name">{{ job.company }}</span>
            </div>
            <div class="job-meta">
              <span class="job-period">{{ job.period }}</span>
              <span class="job-location">{{ job.location }}</span>
            </div>
          </div>
          
          <ul class="job-description">
            <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    id: 1,
    title: 'Integration Engineer',
    company: 'NerdyBiz',
    period: '09/2025 - Present',
    location: 'U.S.A',
    isCurrent: true,
    tasks: [
      'Led CRM configuration and multi-platform integrations to support marketing and sales operations',
      'Designed and implemented seamless integrations between JustCall, Salesforce, Zoho, Monday, and Slack',
      'Configured and customized CRM systems to align with business requirements',
      'Developed and maintained automated workflows to orchestrate data exchange between systems',
      'Ensured reliable communication between CRM platforms and third-party tools'
    ]
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'XETID',
    period: '2024 - 2025',
    location: 'Santa Clara, Villa Clara, Cuba',
    isCurrent: false,
    tasks: [
      'Developed full-stack solutions for multiple projects using PostgreSQL, Laravel, and Vue.js',
      'Implemented responsive frontend interfaces and robust backend architectures',
      'Built and maintained e-commerce and financial platforms'
    ]
  }
]
</script>

<style scoped>
.experience-section {
  padding: 80px 20px;
  background: #0a0a0a;
  color: white;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: #fff;
  margin: 15px auto 0;
  border-radius: 2px;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.job-card {
  background: #141414;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
}

.job-card:hover {
  border-color: #444;
  transform: translateY(-2px);
}

.job-card.current {
  border-left: 3px solid #4ade80;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.job-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 5px 0;
}

.company-name {
  font-size: 1rem;
  color: #888;
}

.job-meta {
  text-align: right;
}

.job-period {
  display: block;
  font-size: 0.9rem;
  color: #666;
  font-family: monospace;
}

.job-location {
  display: block;
  font-size: 0.85rem;
  color: #555;
  margin-top: 4px;
}

.job-description {
  margin: 0;
  padding: 0 0 0 20px;
}

.job-description li {
  color: #999;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.job-description li:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
  }
  
  .job-meta {
    text-align: left;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>