import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'
import user from './user'

const reducer = combineReducers({
  products,
  cartItems,
  user,
})

const store = createStore(reducer)

export default store
