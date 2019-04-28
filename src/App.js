import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './GlobalStyles'
import { H1 } from './components/Typography'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { Account } from './pages/Account'
import { PrivateRoute } from './components/PrivateRoute'
import { configureStore } from './store'
import { getCustomer } from './utils/customer'

const store = configureStore({ customer: getCustomer() })

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyles />
        <H1>Welcome to the Purple Brand Store</H1>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/account" component={Account} />
          <Route path="/logout" component={Logout} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </Provider>
    )
  }
}

export default App
