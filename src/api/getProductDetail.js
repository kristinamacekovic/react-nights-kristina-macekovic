import config from '../config'
import { getToken } from './get-token'

export const getProductDetail = async (id) => {
  const token = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error("Can't fetch product detail")
  }

  return res.json()
}
