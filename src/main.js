// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/image/default.png'),
  preLoad: 1.3,
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
