import { api } from '../api-client'
import { setCustomer } from '../../utils/utils'

export const getCustomer = async id => {
  const { customerData } = await api(`/api/customer/${id}`)
  setCustomer(customerData)
  return customerData
}
