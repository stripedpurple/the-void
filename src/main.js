import './assets/main.css'

import {createApp, nextTick} from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('focus', {
    mounted: async (el) => {
        await nextTick()
        return el.focus()
    },
})


app.mount('#app')