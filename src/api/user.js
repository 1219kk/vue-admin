import request from '@/utils/request'
/**
 *登录
 * @param {手机号} mobile
 * @param {密码} password
 * @returns
 */
export const Login = ({ mobile, password }) => {
  return request({
    method: 'POST',
    url: '/sys/login',
    data: {
      mobile,
      password
    }
  })
}
