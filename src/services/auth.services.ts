import { apiClient } from './config'

export const signup = async (email: string, password: string) => {
  return await apiClient.post('/signup', { email, password })
}
