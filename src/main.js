import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import TheNavigation from './components/commons/TheNavigation.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: HomeComponent
        },
        {
            path: '/navigation',
            component: TheNavigation
        }
    ]
});

const app = createApp(App)

app.use(router);
app.mount('#app');
