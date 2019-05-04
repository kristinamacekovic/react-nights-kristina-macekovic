import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import * as cartActions from '../../store/cartItems/actions'
import * as cartSelectors from '../../store/cartItems/selectors'
import { CartItem } from './CartItem'

const CartView = ({ items, removeProduct }) => {
  return (
    <Layout>
      <H1>Your cart</H1>
      <ul>
        {items.map(item => (
          <CartItem
            key={item.product.id}
            productId={item.product.id}
            quantity={item.quantity}
            removeProduct={removeProduct}
            data-testid="product-in-cart"
          />
        ))}
      </ul>
    </Layout>
  )
}

const mapStateToProps = state => ({
  items: cartSelectors.getCartItems(state),
})

const mapDispatchToProps = {
  removeProduct: cartActions.removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export { Cart }
