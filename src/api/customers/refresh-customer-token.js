import { getRefreshToken, setRefreshToken } from '../../utils/refresh-token'
import { getToken, setToken } from '../../utils/token'

import config from '../../config'

export const refreshCustomerToken = async () => {
  const refreshToken = getRefreshToken()
  const token = getToken()

  const res = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: config.clientId,
      client_secret: config.clientSecret
    })
  })

  switch (res.status) {
    case 200: {
      const { refresh_token, access_token } = await res.json()

      setToken(access_token)
      setRefreshToken(refresh_token)

      return access_token
    }
    default:
      throw new Error('Something went wrong, we cannot refresh your token')
  }
}
