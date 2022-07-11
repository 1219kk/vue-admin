import axios from 'axios'
const request = axios.create({
  // 地址不改
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})
export default request
