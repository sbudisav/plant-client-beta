import Vue from 'vue';
import Router from 'vue-router';

import PlantsIndex from './views/PlantsIndex.vue';
import PlantsNew from './views/PlantsNew.vue';
import PlantsShow from './views/PlantsShow.vue';
import UserPlants from './views/UserPlants.vue';

import Signup from './views/Signup.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'root', component: PlantsIndex },
    { path: '/plants', name: 'plants-index', component: PlantsIndex },
    { path: '/plants/new', name: 'plants-new', component: PlantsNew },
    { path: '/plants/:id', name: 'plants-show', component: PlantsShow },
    { path: '/userplants', name: 'user-plants', component: UserPlants},
    
    { path: '/signup', name: 'signup', component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
