import { api } from '../api-client'
import config from '../../config'
import { setToken } from '../../utils/utils'

export const verifyCustomer = async ({ email, password }) => {
  // get the list of customers
  const response = await api('/oauth/token', {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'password',
      username: email,
      password: password,
      client_id: config.clientId,
    }),
  })

  if (!response.errors) {
    setToken(response.access_token)
    return {
      email: email,
      isAuth: true,
    }
  } else {
    const firstError = response.errors[0]
    switch (firstError.status) {
      case '422':
        throw new Error("You're not registered")
      case '401':
        throw new Error('Token expired')
      default:
        throw new Error('Unexpected error')
    }
  }
}
