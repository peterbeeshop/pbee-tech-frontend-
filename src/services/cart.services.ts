import { apiClient } from './config'

export const getCartItemsService = async () => {
  return (await apiClient.get('/cart')).data
}

export const addToCartService = async (productId: string) => {
  return (await apiClient.post('/cart', { productId })).data
}
