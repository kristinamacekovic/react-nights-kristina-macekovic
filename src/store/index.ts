import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cartItems from './cartItems/index'
import customer from './customer/index'
import products from './products/index'
import { isBrowser } from '../utils/is-browser'
import { getCustomer } from '../utils/customer'

const reducer = combineReducers({
  products,
  cartItems,
  customer,
})

export type AppState = ReturnType<typeof reducer>

// @ts-ignore
const hasReduxDevTools = isBrowser() && window.__REDUX_DEVTOOLS_EXTENSION__

// @ts-ignore
const composeEnchancers = hasReduxDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    { ...preloadedState, customer: getCustomer() },
    composeEnchancers(applyMiddleware(thunk))
  )
