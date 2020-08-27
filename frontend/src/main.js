import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router';
import filters from './utilities/filters';

Vue.config.productionTip = false

new Vue({
  filters,
  router,
  render: h => h(App),
}).$mount('#app')
