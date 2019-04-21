import config from '../config'
import { setToken } from '../utils/utils'

export const getGuestToken = async () => {
  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.clientId,
      scope: config.scope,
    }),
  })

  const { access_token } = await response.json()

  if (access_token) {
    setToken(access_token)
    return access_token
  } else {
    const responseRefresh = await fetch(`${config.apiUrl}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        client_id: config.clientId,
      }),
    })
    const { access_token_refresh } = await responseRefresh.json()
    setToken(access_token_refresh)
    return access_token_refresh
  }
}
