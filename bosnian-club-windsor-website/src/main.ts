import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/global.css'; // <-- this line must exist


createApp(App)
  .use(router)
  .mount('#app');
