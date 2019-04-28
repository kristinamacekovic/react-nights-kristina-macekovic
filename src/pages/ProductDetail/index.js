import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addProduct } from '../../store/cartItems/actions'
import { loadProduct } from '../../store/products/actions'
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

class ProductDetailPage extends Component {
  fetchProduct = async productId => {
    const product = await getProductDetail(productId)
    this.props.loadProduct(product)
  }

  componentDidMount() {
    const { productId } = this.props.match.params
    this.fetchProduct(productId)
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId)
    }
  }

  render() {
    const { product } = this.props
    return (
      <Layout>
        {product ? (
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
              <AddButton onClick={() => this.props.addProduct(product.id)}>
                Add to Cart
              </AddButton>
            </ProductDetailWrapper>
          </>
        ) : (
          <Loader />
        )}
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(
    product => product.id === ownProps.match.params.productId
  ),
})

const actionCreators = {
  loadProduct,
  addProduct,
}

export const ProductDetail = connect(
  mapStateToProps,
  actionCreators
)(ProductDetailPage)
