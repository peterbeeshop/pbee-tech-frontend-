import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { RootState } from '..'
import { handleApiError } from '../../errors/api-error'
import {
  createAddressService,
  deleteAddressService,
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
    setDeleteAddress: (state, action: PayloadAction<{ _id: string }>) => {
      state.address = state.address.filter(
        (address) => address._id !== action.payload._id,
      )
    },
  },
})

const getUserAddress = createAsyncThunk<void, void>(
  'address/set-address',
  async (_, { dispatch }) => {
    try {
      const address = await getUserAddressService()
      dispatch(addressActions.setAddress(address))
    } catch (error) {
      handleApiError(error)
    }
  },
)

const createAddress = createAsyncThunk<
  void,
  { address: AddressType; onSuccess?: () => void }
>('address/create', async ({ address, onSuccess }, { dispatch }) => {
  try {
    const { fullName, city, phoneNumber, province, street } = address
    const result = (await createAddressService({
      fullName,
      street,
      city,
      province,
      phoneNumber,
    })) as AddressType
    dispatch(addressActions.setCreateAddress(result))
    onSuccess?.()
  } catch (error) {
    handleApiError(error)
  }
})

const deleteAddress = createAsyncThunk<void, { _id: string }>(
  'address/delete',
  async ({ _id }, { dispatch, getState }) => {
    try {
      const { message } = (await deleteAddressService(_id)) as {
        message: string
      }
      const currentState = getState() as RootState

      // Use filter to exclude the address with the specified _id
      const updatedAddress = currentState.address.address.filter(
        (add) => add._id !== _id,
      )
      dispatch(addressActions.setAddress(updatedAddress))
      toast.success(message)
    } catch (error) {
      handleApiError(error)
    }
  },
)

export const addressActions = {
  ...addressSlice.actions,
  createAddress,
  getUserAddress,
  deleteAddress,
}

export const addressSelector = {
  getAllAddress: (state: RootState) => state.address.address,
}

export default addressSlice.reducer
