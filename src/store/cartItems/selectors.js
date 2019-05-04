import toPairs from 'ramda/src/toPairs'
import prop from 'ramda/src/prop'
import map from 'ramda/src/map'
import compose from 'ramda/src/compose'

const getStateCart = prop('cartItems')
const createCartItem = ([productId, quantity]) => ({
  quantity,
  product: { id: productId },
})

export const getCartItems = compose(
  map(createCartItem),
  toPairs,
  getStateCart
)
