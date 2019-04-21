import { createStore, combineReducers } from 'redux'

import products from './products/index'
import cartItems from './cartItems/index'
import user from './user/index'

const reducer = combineReducers({
  products,
  cartItems,
  user,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
