import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import Project from '../components/Project.vue';
import Profile from '../components/Profile.vue';
import Team from '../views/Team.vue';
import Like from '../views/Like.vue';
import login from '../components/login.vue';
import reg from '../components/reg.vue';
import firebase from 'firebase';
Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg,
      meta: {
        requiresGuest: true,
      },
    },

    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/like',
      name: 'like',
      component: Like,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  //check for requirementAuth guard
  // eslint-disable-next-line no-empty
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if not logged in
    if (!firebase.auth().currentUser) {
      //Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      //proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //check if not logged in
    if (firebase.auth().currentUser) {
      //Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      //proceed to route
      next();
    }
  } else {
    next();
  }
});

export default router;
