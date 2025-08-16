<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link" exact>Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/contact" class="nav-link">Contact Us</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 30px;
  padding: 20px 40px;
  background-color: var(--color-primary);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.nav-link {
  color: var(--color-background);
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: var(--color-secondary);
}

.router-link-exact-active {
  color: var(--color-secondary);
}
</style>

