import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import Project from '../components/Project.vue';
import Profile from '../components/Profile.vue';
import Team from '../views/Team.vue';
import Like from '../views/Like.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //     import ( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/like',
    name: 'like',
    component: Like,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
