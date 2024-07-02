import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router';

Vue.config.productionTip = false

//应用vue-router插件
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
