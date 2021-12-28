/*
 * @Date: 2020-08-06 10:11:48
 * @LastEditors: wg
 * @LastEditTime: 2020-08-06 11:05:54
 * @FilePath: \node-vue-bms\admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
