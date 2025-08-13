import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Import your translation files
import en from './assets/en.json'
import bs from './assets/bs.json'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: localStorage.getItem('userLanguage') || 'en', // Default to English if no saved preference
  messages: {
    en,
    bs,
    fr,
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
