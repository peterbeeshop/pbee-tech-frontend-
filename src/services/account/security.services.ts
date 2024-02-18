import { apiClient } from '../config'

export const changeNames = async (firstName: string, lastName: string) => {
  return (await apiClient.post('/edit-name', { firstName, lastName })).data
}

export const changeEmail = async (email: string) => {
  return (await apiClient.post('/edit-email', { email })).data
}

export const changePassword = async (
  oldPassword: string,
  newPassword: string,
) => {
  return (await apiClient.post('/edit-password', { oldPassword, newPassword }))
    .data
}
