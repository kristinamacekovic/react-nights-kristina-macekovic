import { ADD_PRODUCT } from './actions'
import { REMOVE_PRODUCT } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case REMOVE_PRODUCT: {
      const newState = {
        ...state,
        [action.payload]: state[action.payload] - 1,
      }

      if (newState[action.payload] === 0) {
        delete newState[action.payload]
      }

      return newState
    }
    default:
      return state
  }
}

export default reducer
