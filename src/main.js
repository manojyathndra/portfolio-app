import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')