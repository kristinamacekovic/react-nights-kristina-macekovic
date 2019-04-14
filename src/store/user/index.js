import { LOGIN_USER } from './actions'
import { LOGOUT_USER } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        [action.payload.isAuth]: true,
      }
    case LOGOUT_USER: {
      const newState = {
        ...state,
        [action.payload.isAuth]: false,
      }
      localStorage.clear()
      return newState
    }
    default:
      return state
  }
}

export default reducer
