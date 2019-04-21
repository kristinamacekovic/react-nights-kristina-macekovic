import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { getSKUs } from '../../api/get-SKUs'
import { addProduct } from '../../store/cartItems/actions'
//import { loadProducts } from '../../store/products/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

const Products = async () => {
  const { data: res, isLoading } = await getSKUs()

  const handleAddToCart = productId => {
    addProduct(productId)
  }

  return (
    <Layout>
      {isLoading && <Loader />}
      {res && (
        <ProductsWrap>
          {res.data.map(product => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </ProductsWrap>
      )}
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
