// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex'
import {valid} from '@/router/before-each'
import Normalize from 'normalize.css'
import util from '@/util/util.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

//  进入 router 之前应该做什么
router.beforeEach(valid)

// ElementUI
Vue.use(ElementUI)

// 工具函数
Vue.use(util);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
