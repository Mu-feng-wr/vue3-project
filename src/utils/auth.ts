import Cookies from 'js-cookie'

const TOKEN: string = 'token'
// 获取token
export function getToken() {
  return Cookies.get(TOKEN)
}

// 设置token
export function setToken(token: string) {
  Cookies.set(TOKEN, token)
}

// 移除token
export function removeToken() {
  Cookies.remove(TOKEN)
}
