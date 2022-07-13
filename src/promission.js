import router from '@/router'
import store from '@/store'
// 路由守卫
// to.path
// 前置路由 from.. to获取
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (token) { // 有无门票
    if (to.path === '/login') { // 还想买
      next('/home')// 直接去电影院
    } else {
      next()// 放行
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
// router.afterEach(() => { })
