import React from 'react'
import { RemoveButton } from './styled'

const CartItem = ({ node, onRemoveFromCart }) => (
  <div>
    {node.product.name} - {node.quantity}
    <RemoveButton onClick={evt => onRemoveFromCart(node.product.id, evt)}>
      Remove
    </RemoveButton>
  </div>
)

export default CartItem
