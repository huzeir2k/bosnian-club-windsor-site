<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar },
});
</script>

<style>
#app {
  background-color: var(--color-background);
  min-height: 100vh;
  color: var(--color-letter);
}
</style>



