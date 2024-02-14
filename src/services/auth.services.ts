import { AppUser } from '../types/user'
import { apiClient } from './config'

export const signup = async (email: string, password: string) => {
  return (await apiClient.post('/signup', { email, password })).data as {
    user: AppUser
    token: string
  }
}

export const login = async (email: string, password: string) => {
  return (await apiClient.post('/login', { email, password })).data as {
    user: AppUser
    token: string
  }
}

export const logout = async () => {
  return (await apiClient.get('/logout')).data
}
