<template>
  <div class="language-toggle">
    <select v-model="currentLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="bs">Bosanski</option>
      <option value="fr">Français</option>
    </select>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageToggle',
  setup() {
    const { locale } = useI18n()
    const currentLanguage = ref(locale.value)

    const changeLanguage = () => {
      locale.value = currentLanguage.value
      localStorage.setItem('userLanguage', currentLanguage.value)
    }

    return {
      currentLanguage,
      changeLanguage
    }
  }
}
</script>

<style scoped>
.language-toggle {
  padding: 8px;
}

select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}

select:hover {
  border-color: #666;
}
</style>
