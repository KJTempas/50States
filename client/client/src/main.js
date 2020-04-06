import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import StateAPIService from '@/services/stateService'

//configure Bootstrap
Vue.use(BootstrapVue) //Vue should use bootstrap
import 'bootstrap/dist/css/bootstrap.css' //import bootstrap files
import 'bootstrap-vue/dist/bootstrap-vue.css'

//add API servicve to Vue prototype
Vue.prototype.$stateService = StateAPIService


new Vue({
  render: h => h(App),
}).$mount('#app')
