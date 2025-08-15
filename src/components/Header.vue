<template>
  <header class="header">
    <nav class="nav-container">
      <router-link to="/" class="logo">
        Bosnian Club Windsor
      </router-link>

      <div class="nav-links">
        <router-link to="/" class="nav-link">
          {{ $t('nav.home') }} 
        </router-link>
        <router-link to="/about" class="nav-link">
          {{ $t('nav.about') }}
        </router-link>
        <router-link to="/contact" class="nav-link">
          {{ $t('nav.contact') }}
        </router-link>
        <router-link to="/donate" class="nav-link">
          {{ $t('nav.donate') }}
        </router-link>
        <router-link to="/events" class="nav-link">
          {{ $t('nav.events') }}
        </router-link>
        <router-link to="/gallery" class="nav-link">
          {{ $t('nav.gallery') }}
        </router-link>
        <router-link to="/membership" class="nav-link">
          {{ $t('nav.membership') }}
        </router-link>
        <router-link to="/resources" class="nav-link">
          {{ $t('nav.resources') }}
        </router-link>
      </div>

      <!-- <LanguageToggle /> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Georgia', serif;
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: none;
  color: #003897;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #003897;
  color: #fff;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
