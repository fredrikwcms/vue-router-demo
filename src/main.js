// Import Vue
import Vue from 'vue'
// Import the base component for Vue
import App from './App.vue'
// Import Bootstrap-Vue
import BootstrapVue from 'bootstrap-vue'
// Tell vue to use bootstrap
Vue.use(BootstrapVue)
// Import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)

// Import the HelloWorld component
import HelloWorld from './components/HelloWorld.vue'
// Import the Form component
import ContactForm from './components/ContactForm.vue'
//define your routes
const routes = [
  // define routes
  { path: '/', component: HelloWorld },
  { path: '/contact-us', component: ContactForm }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
