import { apiClient } from '../config'

export const changeNames = async (firstName: string, lastName: string) => {
  return (await apiClient.post('/edit-name', { firstName, lastName })).data
}
