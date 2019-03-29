import React from 'react'
import Product from './Product'
import { ListWrap } from './styled'

const List = ({ products }) => (
  <ListWrap>
    {products.map(product => (
      <Product key={product.id} node={product} />
    ))}
  </ListWrap>
)

export default List
