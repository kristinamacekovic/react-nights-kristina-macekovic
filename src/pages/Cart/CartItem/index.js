import * as React from 'react'
import flip from 'ramda/src/flip'
import propOr from 'ramda/src/propOr'

import { getProductDetail } from '../../../api/products/getProductDetail'
import { useApi } from '../../../api/use-api'

import { Loader } from '../../../components/Loader'
import { RemoveButton } from './styled'

const getNameFallback = flip(propOr)('name')

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(
    () => getProductDetail(productId),
    [productId]
  )

  const getName = getNameFallback(productId)

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      <p>
        {getName(product)} - {quantity}
      </p>
      <RemoveButton type='button' onClick={() => removeProduct(productId)}>
        Remove
      </RemoveButton>
    </li>
  )
}

export { CartItem }
