import React, { FC } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import * as cartActions from '../../store/cartItems/actions'
import * as productActions from '../../store/products/actions'
import { getProductDetail } from '../../api/products/getProductDetail'
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

type Props = typeof mapDispatchToProps
type InitialProps = UnPromisify<ReturnType<typeof getInitialProps>>
type EnchancedProps = Props & InitialProps

const ProductView: FC<EnchancedProps> = ({
  isLoading,
  product,
  addProduct,
}) => {
  return (
    <main>
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
              <Accent>Description:</Accent> {product.description}
            </Description>
            <Description>
              <Accent>Price:</Accent> {product.price.formatted_amount}
            </Description>
            <AddButton onClick={() => addProduct(product.id)}>
              Add to Cart
            </AddButton>
            <Link href={routes.PRODUCT_LIST}>
              <a>Back</a>
            </Link>
          </ProductDetailWrapper>
        </>
      )}
    </main>
  )
}

type IProps = { product: any; isLoading: boolean }
type CTX = NextContext<{ id: string }> & { store: ReduxStore }

const getInitialProps = async (ctx: CTX) => {
  const product = await getProductDetail(ctx.query.id)
  ctx.store.dispatch(productActions.loadProduct(product))
  return { product, isLoading: false }
}

const mapDispatchToProps = { addProduct: cartActions.addProduct }

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductView)

ProductDetail.getInitialProps = getInitialProps

export { ProductDetail }
