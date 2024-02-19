import { apiClient } from './config'

export const getAllProducts = async () => {
  return (await apiClient.get('/products')).data
}
