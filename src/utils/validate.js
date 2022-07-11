/**
 * 验证是不是手机号
 * @param {手机号} mobile
 * @returns
 */
export const validateMobile = (mobile) => {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/
  return reg.test(mobile)
}
