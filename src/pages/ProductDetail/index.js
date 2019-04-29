import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { useApi } from '../../api/use-api'
import { addProduct } from '../../store/cartItems/actions'
import { getProductDetail } from '../../api/products/getProductDetail'
import Layout from '../../components/Layout'
import { Loader } from '../../components/Loader'
import {
  ProductDetailWrapper,
  ProductDetailImgWrap,
  ProductDetailImg,
  TitleWrap,
  ProductDetailTitle,
  Description,
  Accent,
  AddButton,
} from './styled'
import * as routes from '../../routes'

const ProductView = ({ match, addProduct }) => {
  const { productId } = match.params

  const { data: product, isLoading } = useApi(
    () => getProductDetail(productId),
    [productId]
  )
  return (
    <Layout>
      {isLoading && <Loader />}
      {product && (
        <>
          <ProductDetailWrapper>
            <ProductDetailImgWrap>
              <ProductDetailImg
                src={product.image_url}
                alt={`${product.name} image`}
              />
            </ProductDetailImgWrap>
            <TitleWrap>
              <ProductDetailTitle>{product.name}</ProductDetailTitle>
            </TitleWrap>
            <Description>
              <Accent>Last Updated:</Accent> {product.updated_at}
            </Description>
            <Description>
              <Accent>Reference:</Accent> {product.reference}
            </Description>
            <Description>
              <Accent>Description:</Accent> {product.description}
            </Description>
            <Description>
              <Accent>Price:</Accent> {product.price.formatted_amount}
            </Description>
            <AddButton onClick={() => addProduct(product.id)}>
              Add to Cart
            </AddButton>
            <Link to={routes.PRODUCT_LIST}>Back</Link>
          </ProductDetailWrapper>
        </>
      )}
    </Layout>
  )
}

const actionCreators = {
  addProduct,
}

const ProductDetail = connect(
  null,
  actionCreators
)(ProductView)

export { ProductDetail }
