import { api } from '../api-client'
import { setCustomer } from '../../utils/customer'

export const getCustomer = async id => {
  const { customerData } = await api(`/api/customers/${id}`)
  setCustomer(customerData)
  return customerData
}
