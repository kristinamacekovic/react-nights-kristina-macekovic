import { createStore, combineReducers } from 'redux'

import cartItems from './cartItems/index'
import customer from './customer/index'

const reducer = combineReducers({
  cartItems,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
