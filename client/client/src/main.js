import Vue from 'vue'
import App from './App.vue'

//import VueRouter library, and this apps routes
import VueRouter from 'vue-router'
import router from './router' //import the routes created

import BootstrapVue from 'bootstrap-vue'

import StateAPIService from '@/services/stateService'

Vue.use(VueRouter)  //tells Vue to use the vueRouter
//configure Bootstrap
Vue.use(BootstrapVue) //Vue should use bootstrap
import 'bootstrap/dist/css/bootstrap.css' //import bootstrap files
import 'bootstrap-vue/dist/bootstrap-vue.css'

//add API servicve to Vue prototype
Vue.prototype.$stateService = StateAPIService


new Vue({
  render: h => h(App),
  router  /* include the routes in the new Vue instance*/
}).$mount('#app')
