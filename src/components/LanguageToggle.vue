<!-- LanguageToggle.vue -->
<template>
  <div>
    <img src="/path/to/english-flag.png" alt="English" @click="toggleLanguage('en')" />
    <img src="/path/to/bosnian-flag.png" alt="Bosnian" @click="toggleLanguage('bs')" />
  </div>
</template>

<script>
export default {
  name: 'LanguageToggle',
  methods: {
    toggleLanguage(language) {
      // Emit an event to notify the parent component about the language change
      this.$emit('language-change', language);
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
img {
  width: 30px; /* Adjust as needed */
  cursor: pointer;
  margin-right: 10px;
}
</style>
