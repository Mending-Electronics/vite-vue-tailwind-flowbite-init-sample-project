import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/SignupView.vue'),
    meta: { title: 'Sign Up' }
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/views/FeaturesView.vue'),
    meta: { title: 'Features' }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: { title: 'Pricing' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | FlowVue App` : 'FlowVue App';
  next();
});

export default router;
