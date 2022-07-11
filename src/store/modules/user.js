// 模块化vuex
import { Login } from '@/api/user'
import { Message } from 'element-ui'
import { setToken, getToken } from '@/utils/auth'
const state = {
  // 防止刷新页面token没了
  token: getToken() || ''
}
const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
const actions = {
  // context-->$store data --->外面传进来的数据
  async login (context, data) {
    try {
      const res = await Login(data)
      console.log(res)
      if (res.data.success) {
        context.commit('setToken', res.data.data)
        // 数据持久化
        setToken(res.data.data)
      } else {
        Message.error(res.data.message)
      }
    } catch (err) {
      Message.error('登录失败')
    }
  }
}
export default {
  // 开启命名空间 上锁
  namespaced: true,
  state,
  mutations,
  actions
}
// 数据持久化 原生麻烦
