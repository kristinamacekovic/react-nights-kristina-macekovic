export const LOGIN_USER = 'user/LOGIN'
export const LOGOUT_USER = 'user/LOGOUT'

export const loginUser = user => ({
  type: LOGIN_USER,
  payload: { user },
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})
