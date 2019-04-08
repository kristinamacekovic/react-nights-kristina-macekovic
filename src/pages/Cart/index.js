import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { removeProduct } from '../../store/cartItems/actions'
import CartItem from './CartItem'

class CartView extends Component {

  handleRemoveFromCart = (productId, evt) => {
    evt.preventDefault()
    this.props.removeProduct(productId)
  }

  render() {
    return (
      <Layout>
        <H1>My cart</H1>
        <ul>
          {this.props.items.map(item => (
            <li key={item.product.id}>
              <CartItem
                key={item.product.id}
                node={item}
                onRemoveFromCart={this.handleRemoveFromCart} />
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const mapDispatchToProps = {
  removeProduct,
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView)

export { Cart }
