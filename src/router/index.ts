import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/TabsPage.vue';
import BmiPage from '../views/BmiPage.vue';
import MorsePage from '../views/MorsePage.vue';
import AlcoholPage from '../views/AlcoholPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/tabs/bmi',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      { path: '', redirect: '/tabs/bmi' },
      { path: 'bmi', component: BmiPage },
      { path: 'morse', component: MorsePage },
      { path: 'alcohol', component: AlcoholPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
