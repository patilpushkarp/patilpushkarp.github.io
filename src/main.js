import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import TheNavigation from './components/commons/TheNavigation.vue'
import AboutComponent from  './components/AboutComponent.vue'

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
            path: '/navigation',
            component: TheNavigation
        },
        {
            path: '/about',
            component: AboutComponent
        }
    ]
});

const app = createApp(App)

app.use(router);
app.mount('#app');
