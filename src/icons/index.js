// 注册全局组件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
Vue.component('SvgIcon', SvgIcon)
// 需要单独引入svg太麻烦 用批量导入
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
