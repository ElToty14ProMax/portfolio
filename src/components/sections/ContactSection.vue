<template>
  <section id="contact" class="contact-footer">
    <div class="container">
      <div class="columns">
        <div class="col">
          <h4>Acerca de mí</h4>
          <ul>
            <li><router-link :to="{ name: 'home', hash: '#myself' }">¿Quién soy?</router-link></li>
            <li><router-link :to="{ name: 'home', hash: '#skills' }">Tecnologías</router-link></li>
            <li><router-link :to="{ name: 'home', hash: '#projects' }">Proyectos</router-link></li>
            <li><router-link :to="{ name: 'home', hash: '#education' }">Formación</router-link></li>
            <li><a :href="cvUrl" target="_blank" rel="noopener">Descargar CV</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Conecta conmigo</h4>
          <ul>
            <li><a href="mailto:frankegr14@gmail.com">Soporte / Email</a></li>
            <li><a href="tel:+5354567158">Teléfono</a></li>
            <li><a href="https://github.com/ElToty14ProMax" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/frank-eduardo-gattorno-rodr%C3%ADguez-b30bb5375/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://x.com/GattornoFrank" target="_blank" rel="noopener">X (Twitter)</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Servicios</h4>
          <ul>
            <li><router-link :to="{ name: 'home', hash: '#projects' }">Desarrollo Web</router-link></li>
            <li><router-link :to="{ name: 'home', hash: '#projects' }">APIs y Backend</router-link></li>
            <li><router-link :to="{ name: 'home', hash: '#projects' }">Dashboards</router-link></li>
            <li><router-link :to="{ name: 'home', hash: '#skills' }">Integraciones</router-link></li>
          </ul>
        </div>

        <div class="col">
          <h4>Recursos</h4>
          <ul>
            <li><a href="https://github.com/ElToty14ProMax?tab=repositories" target="_blank" rel="noopener">Repos públicos</a></li>
            <li><a href="https://drive.google.com/file/d/1IhX6uTravr5-7awPdSJJLEY53vzJ3aG_/view" target="_blank" rel="noopener">Certificados / CV</a></li>
            <li><a href="mailto:frankegr14@gmail.com">Consultas</a></li>
          </ul>
        </div>
      </div>

      <div class="divider"></div>

      <div class="bottom-bar">
        <div class="location">Santa Clara · Villa Clara · Cuba</div>
        <div class="social">
          <a class="social-btn" href="https://github.com/ElToty14ProMax" target="_blank" aria-label="GitHub" rel="noopener">
            <i class="fab fa-github"></i>
          </a>
          <a class="social-btn" href="https://www.linkedin.com/in/frank-eduardo-gattorno-rodr%C3%ADguez-b30bb5375/" target="_blank" aria-label="LinkedIn" rel="noopener">
            <i class="fab fa-linkedin"></i>
          </a>
          <a class="social-btn" href="https://x.com/GattornoFrank" target="_blank" aria-label="X" rel="noopener">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a class="social-btn" href="https://www.facebook.com/profile.php?id=100010057393781" target="_blank" aria-label="Facebook" rel="noopener">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="social-btn" href="https://www.instagram.com/frankeduardo14/" target="_blank" aria-label="Instagram" rel="noopener">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cvUrl = 'https://drive.google.com/file/d/1IhX6uTravr5-7awPdSJJLEY53vzJ3aG_/view?usp=drive_link'
</script>

<style scoped>
.contact-footer {
  background: #0b1220;
  color: #94a3b8;
  padding: 64px 0 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.columns {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2.5rem;
}

.col h4 {
  color: #e5e7eb;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.col a {
  color: #9aa6b2;
  text-decoration: none;
  transition: color 0.2s ease;
}

.col a:hover {
  color: #e5e7eb;
}

.divider {
  border-top: 1px solid rgba(148, 163, 184, 0.15);
  margin: 2.5rem 0 1rem;
}

.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.location {
  color: #9aa6b2;
}

.social {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #e5e7eb;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

@media (max-width: 992px) {
  .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .columns {
    grid-template-columns: 1fr;
  }
}
</style>
  