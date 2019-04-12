import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './GlobalStyles'
import { H1 } from './components/Typography'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import store from './store'

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
          <Route path="/:productID" component={ProductDetail} />
        </Switch>
      </Provider>
    )
  }
}

export default App
