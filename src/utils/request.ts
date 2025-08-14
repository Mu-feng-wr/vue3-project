import axios from 'axios'
import { getToken } from '@/utils/auth'

let baseURL: string = process.env.VITE_BASE_URL
if (process.env.NODE_ENV === 'development') {
  baseURL = ''
}
const service = axios.create({
  baseURL,
  timeout: 30000 // 设置超时时间
})

service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers.Token = getToken()
    }
    delete config.headers.Cookie
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code && res.code !== 0 && res.code !== 200) {
      if (res.code === 401) {
        // store.dispatch('system/loginOutHandler')
        return Promise.reject(res)
      }

      ElMessage({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log(`err${error}`)
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
