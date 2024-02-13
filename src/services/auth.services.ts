import { AppUser } from '../types/user'
import { apiClient } from './config'

export const signup = async (email: string, password: string) => {
  return (await apiClient.post('/signup', { email, password })).data as AppUser
}
