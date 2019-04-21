export const formatProduct = (product, included) => {
  const prices = included.find(
    price => price.id === product.relationships.prices.data[0].id
  )
  return {
    id: product.id,
    ...product.attributes,
    price: prices ? prices.attributes : null,
  }
}
