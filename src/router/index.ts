import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: () => import('@/views/ProductDetailsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
