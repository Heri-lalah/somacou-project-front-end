// Composables
import { createRouter, createWebHistory } from 'vue-router';
import LayoutInformatique from '@/layouts/fluxInformatique/Layout.vue';
import NotFound from '@/components/NotFound.vue';
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
    meta : {title : 'Flux informatique'},
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
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) =>{
  document.title = to.meta?.title ?? 'Somacou'
});

export default router
