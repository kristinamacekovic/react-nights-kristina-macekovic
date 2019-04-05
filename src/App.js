import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './GlobalStyles'
import { H1 } from './components/Typography'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import store from './store'


class App extends Component {
  render() {
    return (
       <Provider store={store}>
        <React.Fragment>
          <GlobalStyles />
          <H1>Welcome to the Purple Brand Store</H1>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/:productID" component={ProductDetail} />
          </Switch>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
