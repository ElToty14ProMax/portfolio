<template>
  <nav class="app-navbar navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <span class="brand-gradient">Portafolio</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home', hash: '#myself' }">Sobre mí</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home', hash: '#skills' }"> Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home', hash: '#projects' }">Proyectos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home', hash: '#education' }">Formación</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home', hash: '#contact' }">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.app-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(17, 24, 39, 0.7);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.container {
  max-width: 1200px;
}

.navbar-brand {
  font-weight: 800;
  letter-spacing: 0.5px;
}

.brand-gradient {
  background: linear-gradient(45deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link {
  color: #e5e7eb;
  font-weight: 600;
  padding: 0.75rem 1.1rem;
  border-radius: 8px;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 6px;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms ease;
  border-radius: 2px;
  opacity: 0.9;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  transform: scaleX(1);
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #fff;
}

/* Ajuste del icono del toggler en fondo oscuro */
.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.3);
}
.navbar-toggler-icon {
  filter: invert(1);
}
</style>
