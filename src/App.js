import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import config from './config'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Purple Brand Store</h1>
        <ProductList />
      </div>
    )
  }
}

export default App
