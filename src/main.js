import 'normalize.css'
import "element-ui/lib/theme-chalk/index.css"
import Vue from 'vue'
import App from './App'
import Element from "element-ui"
import router from './router/'
import store from './store/'
import './filter' // 过滤器
import './utils/flexible'
import './permission'
import Utils from './utils/utils'
Vue.prototype.utils = Utils
// import VConsole from 'vconsole'
if (process.env.NODE_ENV === 'development') {
  require('./mock') // simulation data
  // let vConsole = new VConsole()
  // console.log('[system] 已启用 vconsole' + vConsole.version)
}
Vue.use(Element);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
