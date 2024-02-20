import { AddressType } from '../../types/address'
import { apiClient } from '../config'

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