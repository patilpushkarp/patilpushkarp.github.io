import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import TheNavigation from './components/commons/TheNavigation.vue'
import AboutComponent from  './components/AboutComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

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
        },
        {
            path: '/contact',
            component: ContactComponent
        }
    ]
});

const app = createApp(App)

app.use(router);
app.mount('#app');
