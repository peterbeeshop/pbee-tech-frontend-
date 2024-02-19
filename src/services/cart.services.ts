import { apiClient } from './config'

export const getCartItems = async () => {
  return (await apiClient.get('/cart')).data
}
