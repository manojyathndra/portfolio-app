import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'

const app = createApp(App)

// Create a Vuetify instance
const vuetify = createVuetify()

// Use Vuetify
app.use(vuetify)

// Mount your app
app.mount('#app')