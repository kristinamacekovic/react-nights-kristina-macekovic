import { api } from './api-client'
import { formatProduct } from './utils/format-product'

export const getSKUs = async () => {
  const { data, included } = await api('/api/skus?include=prices')
  try {
    return {
      data: data.map(product => formatProduct(product, included)),
    }
  } catch (error) {
    throw new Error('could not fetch products')
  }
}
