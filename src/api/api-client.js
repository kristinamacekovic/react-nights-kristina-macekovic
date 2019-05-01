/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */

import config from '../config'
import { LOGOUT } from '../routes'
import { getGuestToken } from './get-guest-token'
import { refreshCustomerToken } from './customers/refresh-customer-token'
import { getToken } from '../utils/token'
import { getRefreshToken } from '../utils/refresh-token'

const makeRequest = (url, options, token) =>
  fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`
    },
    ...options
  })

export const api = async (url, options) => {
  let token = getToken() || (await getGuestToken())

  try {
    let response = await makeRequest(url, options, token)

    if (response && response.status === 401) {
      const refreshToken = getRefreshToken()

      if (refreshToken) {
        token = await refreshCustomerToken()
      } else {
        token = await getGuestToken()
      }

      response = await makeRequest(url, options, token)
    }

    if (response && response.status === 401) {
      window.location.assign(LOGOUT)
    }

    return response.json()
  } catch (e) {
    throw e
  }
}
