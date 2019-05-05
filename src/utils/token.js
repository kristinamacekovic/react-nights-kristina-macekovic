import { isBrowser } from './is-browser'

export const getToken = () => {
  return isBrowser() && window.localStorage.getItem('token')
}
export const setToken = token => {
  return isBrowser() && window.localStorage.setItem('token', token)
}
export const removeToken = () => {
  return isBrowser() && window.localStorage.removeItem('token')
}
