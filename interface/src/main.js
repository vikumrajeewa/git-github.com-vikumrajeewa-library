import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')



// Create the Vue instance and mount the root component to the DOM
createApp(App).use(router).mount('#app');

