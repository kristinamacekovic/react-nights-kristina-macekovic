import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ProductDashboard } from './ProductDashboard'
import { addProduct } from '../../store/cartItems/actions'

class ProductDetailPage extends Component {

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

   render() {
    const { match } = this.props
    const id = match.params.productID
    return (
      <ProductDashboard id={id} onAddToCart={this.handleAddToCart}/>
    )
  }
}

const mapDispatchToProps = {
  addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductDetailPage)

export { ProductDetail }
