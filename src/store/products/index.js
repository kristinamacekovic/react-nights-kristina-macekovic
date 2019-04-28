import { LOAD_PRODUCTS, LOAD_PRODUCT } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload
    case LOAD_PRODUCT: {
      const otherProducts = state.filter(p => p.id !== action.payload.id)
      return [...otherProducts, action.payload]
    }
    default:
      return state
  }
}

export default reducer
