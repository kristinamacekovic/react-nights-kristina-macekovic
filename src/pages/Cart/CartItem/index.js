import React from 'react'
import flip from 'ramda/src/flip'
import propOr from 'ramda/src/propOr'

import { useApi } from '../../../api/use-api'
import { RemoveButton } from './styled'
import { getProductDetail } from '../../../api/products/getProductDetail'
import { Loader } from '../../../components/Loader'

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
      <RemoveButton onClick={() => removeProduct(productId)}>
        Remove
      </RemoveButton>
    </li>
  )
}

export { CartItem }
