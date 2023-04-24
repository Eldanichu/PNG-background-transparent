import Vue from './utils/imports';
import App from './App.vue';
import store from './store';
import router from './router';


Vue.config.productionTip = false;


export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
