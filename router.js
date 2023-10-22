// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/Index.vue';
import IndexTwo from '../components/IndexTwo.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/indextwo', component: IndexTwo }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
