import React from 'react'

import {
  Wrapper,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Link,
  AddButton,
} from './styled'
import * as routes from '../../../routes'

const Product = ({ node, onAddToCart }) => (
  <Wrapper>
    <Link to={routes.getProductDetailRoute(node.id)}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
      <AddButton
        onClick={evt => {
          evt.preventDefault()
          onAddToCart(node.id)
        }}
      >
        Add to Cart
      </AddButton>
    </Link>
  </Wrapper>
)
export default Product
