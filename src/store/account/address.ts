import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAddressService } from '../../services/account/address'
import { AddressType } from '../../types/address'

interface IState {
  address: Partial<AddressType>
}
const initialState: IState = {
  address: {},
}

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<Partial<AddressType>>) => {
      state.address = action.payload
    },
    setCreateAddress: (state, action: PayloadAction<AddressType>) => {
      // state.address = {...state.address, action.payload}
    },
  },
})

const createAddress = createAsyncThunk<void, { address: AddressType }>(
  'address/create',
  async (argument, { dispatch }) => {
    const { fullName, city, phoneNumber, province, street } = argument.address
    const result = await createAddressService({
      fullName,
      street,
      city,
      province,
      phoneNumber,
    })
    console.log('address', result)
  },
)

export const addressActions = { ...addressSlice, createAddress }
