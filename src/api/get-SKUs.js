import config from '../config'
import { getGuestToken } from './get-guest-token'

export const getSKUs = async () => {
  const token = await getGuestToken()

  const res = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error("Can't fetch list of products!")
  }

  const products = await res.json()

  return products.data.map(product => {
    const prices = products.included.find(
      price => price.id === product.relationships.prices.data[0].id
    )

    return {
      ...product.attributes,
      id: product.id,
      price: prices ? prices.attributes : null,
    }
  })
}
