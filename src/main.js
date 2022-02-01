import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store/index.js'

import App from './App.vue'
import HomeComponent from './components/base/HomeComponent.vue'
import AboutComponent from './components/base/AboutComponent.vue'
import WorkComponent from './components/base/WorkComponent.vue'
import ScribbleComponent from './components/base/ScribbleComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeComponent
        },
        {
            path: '/about',
            component: AboutComponent
        },
        {
            path: '/work',
            component: WorkComponent
        },
        {
            path: '/scribble',
            component: ScribbleComponent
        }
    ]
});

const app = createApp(App)

app.use(router);
app.use(store);
app.mount('#app');
