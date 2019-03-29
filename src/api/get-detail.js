import config from '../config'
import { getToken } from './get-token'

class getDetail  extends Component {

}

/*export const getDetail = async (props) => {
  const { token } = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus/${props.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return res.json()
}
 */
