import config from '../../config'
import { setToken } from '../../utils/utils'

export const getCustomerToken = async ({ username, password }) => {
  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'password',
      client_id: config.clientId,
      scope: config.scope,
      username,
      password,
    }),
  })

  switch (response.status) {
    case 200: {
      const { id, access_token } = await response.json()
      setToken(access_token)

      return { ownerId: id, access_token }
    }
    case 401:
      throw new Error('Authentication problems')
    default:
      throw new Error('Unexpected error')
  }
}
