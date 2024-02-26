import { AddressType } from '../../types/address'
import { apiClient } from '../config'

export const getUserAddressService = async () => {
  return (await apiClient.get('/address')).data
}
export const createAddressService = async (address: AddressType) => {
  const { fullName, city, phoneNumber, province, street } = address
  return (
    await apiClient.post('/address', {
      fullName,
      street,
      city,
      province,
      phoneNumber,
    })
  ).data
}

export const deleteAddressService = async (_id: string) => {
  return (await apiClient.post('/delete-address', { _id })).data
}
