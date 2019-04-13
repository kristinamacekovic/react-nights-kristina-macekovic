import config from '../config'
import { getGuestToken } from '../api/get-guest-token'
import { getToken } from '../utils/utils'

export const api = async (url, options) => {
  // get the current token
  let token = getToken()

  // check if the token exists; if not get one
  if (!token) {
    token = await getGuestToken()
  }

  const response = await fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`
    },
    ...options
  })

  return response.json()
}
