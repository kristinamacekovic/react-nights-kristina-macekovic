import React, { Component } from 'react'

import { getProductDetail } from '../../../api/getProductDetail'
import {
  ProductDetailWrapper,
  ProductDetailImgWrap,
  ProductDetailImg,
  TitleWrap,
  ProductDetailTitle,
  Description,
  Accent,
  Positive,
  Negative,
  AddButton,
} from './styled'

class ProductDashboard extends Component {
  state = {
    attributes: {
      inventory: {},
    },
  }

  async componentDidMount() {
    const productData = await getProductDetail(this.props.id)
    const attributes = productData.data.attributes
    this.setState({ attributes })
  }

  render() {
    return (
      <ProductDetailWrapper>
        <ProductDetailImgWrap>
          <ProductDetailImg
            src={this.state.attributes.image_url}
            alt={`${this.state.attributes.name} image`}
          />
        </ProductDetailImgWrap>
        <TitleWrap>
          <ProductDetailTitle>{this.state.attributes.name}</ProductDetailTitle>
        </TitleWrap>
        <Description>
          <Accent>Created:</Accent> {this.state.attributes.created_at}
        </Description>
        <Description>
          <Accent>Last Updated:</Accent> {this.state.attributes.updated_at}
        </Description>
        <Description>
          <Accent>Reference:</Accent> {this.state.attributes.reference}
        </Description>
        <Description>
          <Accent>Description:</Accent> {this.state.attributes.description}
        </Description>
        <Description>
          {this.state.attributes.inventory.available ? (
            <Positive>
              In Stock: {this.state.attributes.inventory.quantity}
            </Positive>
          ) : (
            <Negative>Not In Stock</Negative>
          )}
        </Description>
        <AddButton onClick={evt => this.props.onAddToCart(this.props.id, evt)}>
          Add to Cart
        </AddButton>
      </ProductDetailWrapper>
    )
  }
}

export { ProductDashboard }
