import { api } from './api-client'
import { formatProduct } from './utils/format-product'

export const getSKUs = async () => {
  const { data, included } = await api('/api/skus?include=prices')

  return data.map(product => formatProduct(product, included))
}
