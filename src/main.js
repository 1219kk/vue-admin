import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons'
// 保持浏览器对同一个标签渲染一致性
import 'normalize.css'
// 重置margin padding 清浮动 处理行内块元素 margin 2px的问题
import '@/styles/reset.css'
import './promission'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
