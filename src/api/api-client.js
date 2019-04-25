import config from '../config'
import { getGuestToken } from '../api/get-guest-token'
import { getToken, getRefreshToken } from '../utils/utils'
import { refreshCustomerToken } from './customers/refresh-customer-token'

export const api = async url => {
  let token = getToken() || (await getGuestToken())
  try {
    let response = await fetch(`${config.apiUrl}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response && response.status === 401) {
      const refreshToken = getRefreshToken()

      if (refreshToken) {
        token = await refreshCustomerToken()
      } else {
        token = await getGuestToken()
      }

      response = await fetch(`${config.apiUrl}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.api+json',
          Authorization: `Bearer ${token}`,
        },
      })
    }

    return response.json()
  } catch (err) {
    throw err
  }
}
