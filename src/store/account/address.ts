import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import {
  createAddressService,
  getUserAddressService,
} from '../../services/account/address'
import { AddressType } from '../../types/address'

interface IState {
  address: AddressType[]
}
const initialState: IState = {
  address: [],
}

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<AddressType[]>) => {
      state.address = action.payload
    },
    setCreateAddress: (state, action: PayloadAction<AddressType>) => {
      state.address = [...state.address, action.payload]
    },
    setClearAddress: (state) => {
      state.address = []
    },
  },
})

const getUserAddress = createAsyncThunk<void, void>(
  'address/set-address',
  async (_, { dispatch }) => {
    const address = await getUserAddressService()
    console.log('add', address)
    dispatch(addressActions.setAddress(address))
  },
)

const createAddress = createAsyncThunk<void, { address: AddressType }>(
  'address/create',
  async (argument, { dispatch }) => {
    const { fullName, city, phoneNumber, province, street } = argument.address
    const result = (await createAddressService({
      fullName,
      street,
      city,
      province,
      phoneNumber,
    })) as AddressType
    dispatch(addressActions.setCreateAddress(result))
  },
)

export const addressActions = {
  ...addressSlice.actions,
  createAddress,
  getUserAddress,
}

export const addressSelector = {
  getAllAddress: (state: RootState) => state.address.address,
}

export default addressSlice.reducer
