import qs from 'qs'
import { api } from '../api-client'
import { formatProduct } from './utils/format-product'

export const getSKUs = async query => {
  const { data, meta, included } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...query })}`
  )

  return {
    data: data.map(product => formatProduct(product, included)),
    meta
  }
}
