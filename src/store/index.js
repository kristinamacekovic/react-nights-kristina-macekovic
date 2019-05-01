import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cartItems from './cartItems/index'
import customer from './customer/index'

const reducer = combineReducers({
  cartItems,
  customer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    composeEnchancers(applyMiddleware(thunk))
  )
