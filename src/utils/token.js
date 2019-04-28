export const getToken = () => {
  return window.localStorage.getItem('token')
}
export const setToken = token => {
  return window.localStorage.setItem('token', token)
}
export const removeToken = () => {
  return window.localStorage.removeItem('token')
}
