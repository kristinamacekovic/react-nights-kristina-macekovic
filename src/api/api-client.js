import config from '../config'
import { getGuestToken } from '../api/get-guest-token'
import { getToken } from '../utils/utils'

export const api = async url => {
  const token = getToken() || (await getGuestToken())

  const response = await fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.json()
}
