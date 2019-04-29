import React from 'react'

import { useApi } from '../../../api/use-api'
import { RemoveButton } from './styled'
import { getProductDetail } from '../../../api/products/getProductDetail'
import { Loader } from '../../../components/Loader'

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(
    () => getProductDetail(productId),
    productId
  )

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      <p>
        {product ? product.name : productId} - {quantity}
      </p>
      <RemoveButton onClick={() => removeProduct(productId)}>
        Remove
      </RemoveButton>
    </li>
  )
}

export { CartItem }
