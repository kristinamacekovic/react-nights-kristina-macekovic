import React, { Component } from 'react'

import { ProductDashboard } from './components/ProductDashboard'

class ProductDetail extends Component {
  state = {}

   render() {
    const { match } = this.props
    const id = match.params.productID
    return (
      <div>
        <ProductDashboard id={id}/>
      </div>
    )
  }
}

export { ProductDetail }
