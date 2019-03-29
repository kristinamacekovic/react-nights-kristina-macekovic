import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import { H1 } from './components/Typography'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <H1 textAlign="center">Welcome to the Purple Brand Store</H1>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/:productID" component={ProductDetail} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
