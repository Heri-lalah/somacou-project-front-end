// Composables
import { createRouter, createWebHistory } from 'vue-router';
import LayoutInformatique from '@/layouts/fluxInformatique/Layout.vue';
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path : '/informatique',
    component : LayoutInformatique,
    children : [
      {
        path : '',
        component : ()=> import('@/views/FluxInformatique/Home.vue')
      },
      {
        path : 'production',
        name : 'productionByInfoTeam',
        component : ()=> import('@/views/FluxInformatique/Production.vue')
      },
      {
        path : 'movement/increase',
        name : 'movementIncreaseByInfoTeam',
        component : ()=> import('@/views/FluxInformatique/Movement.vue')
      },
      {
        path : 'movement/decrease',
        name : 'movementDecreaseByInfoTeam',
        component : ()=> import('@/views/FluxInformatique/Movement.vue')
      },
      {
        path : 'movement/read',
        name : 'readMovementByInfoTeam',
        component : ()=> import('@/views/FluxInformatique/ReadMovement.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
