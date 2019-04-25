export const getToken = () => {
  return window.localStorage.getItem('token')
}
export const setToken = token => {
  return window.localStorage.setItem('token', token)
}
export const removeToken = () => {
  return window.localStorage.removeItem('token')
}

export const getCustomer = () => {
  const customer = window.localStorage.getItem('customer')
  if (customer) {
    return JSON.parse(customer)
  }
  return {}
}
export const setCustomer = customer => {
  window.localStorage.setItem('customer', JSON.stringify(customer))
}

export const removeCustomer = () => {
  return window.localStorage.removeItem('customer')
}

export const getRefreshToken = () => {
  return window.localStorage.getItem('refreshtoken')
}

export const setRefreshToken = refreshToken => {
  window.localStorage.setItem('refreshtoken', refreshToken)
}

export const removeRefreshToken = () => {
  window.localStorage.removeItem('refreshtoken')
}
