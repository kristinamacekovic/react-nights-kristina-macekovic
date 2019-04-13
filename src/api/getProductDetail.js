import { api } from './api-client'

export const getProductDetail = async id => {
  const { data } = await api(`/api/skus/${id}?include=prices`)

  return data
}
