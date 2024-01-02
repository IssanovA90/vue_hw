import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Registr from './components/registr.vue';
import Avtor from './components/avtor.vue';
import Kino from './components/kino.vue';
import Basket from './components/basket.vue';

const routes = [
  { path: '/', component: Registr },
  { path: '/avtor', component: Avtor },
  { path: '/kino', component: Kino },
  { path: '/basket', component: Basket }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');
