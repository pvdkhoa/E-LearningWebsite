import { VueElement, createApp } from 'vue'
import './style.css'
import App from './App.vue'

 import { library } from '@fortawesome/fontawesome-svg-core'
 import {fas} from '@fortawesome/free-solid-svg-icons'
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 library.add(fas)
 const app = createApp(App)
 app.component('font-awesome-icon',FontAwesomeIcon)

createApp(App).mount('#app')
// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fas)

// const app = createApp(App)
// app.component('font-awesome-icon', FontAwesomeIcon)

// app.mount('#app')
