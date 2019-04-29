import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import Layout from '../../components/Layout'
import { Loader } from '../../components/Loader'
import { getSKUs } from '../../api/products/get-SKUs'
import { useApi } from '../../api/use-api'
import Product from './Product'
import { ProductsWrap } from './styled'
import { Pagination } from '../../components/Pagination'
import { addProduct } from '../../store/cartItems/actions'

const Products = ({ match, location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const { data: res, isLoading } = useApi(
    () => getSKUs({ page: { number: page } }),
    [page]
  )

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            activePage={match.params.page}
          />
          <ProductsWrap>
            {res.data.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsWrap>
        </>
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
