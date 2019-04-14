import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { getSKUs } from '../../api/get-SKUs'
import { addProduct } from '../../store/cartItems/actions'
import { loadProducts } from '../../store/products/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

class Products extends Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    const products = await getSKUs()
    this.props.loadProducts(products)

    this.setState({
      isLoading: false,
    })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    return (
      <Layout>
        {!this.props.products ? (
          <Loader />
        ) : (
          <ProductsWrap>
            {this.props.products.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={this.handleAddToCart}
              />
            ))}
          </ProductsWrap>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export { ProductList }
