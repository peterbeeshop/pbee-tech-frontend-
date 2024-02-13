import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { handleApiError } from '../errors/api-error'
import { signup } from '../services/auth.services'
import { AppUser } from '../types/user'

interface IUser {
  user: Partial<AppUser>
}

const initialState: IUser = {
  user: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<AppUser>>) => {
      state.user = action.payload
    },
  },
})

const createUser = createAsyncThunk<void, { email: string; password: string }>(
  'users/createUserStatus',
  async (userInfo, { dispatch }) => {
    try {
      const user = await signup(userInfo.email, userInfo.password)
      dispatch(userActions.setUser(user))
      toast.success('Account has successfully been created!')
    } catch (error) {
      handleApiError(error)
    }
  },
)

export const userActions = { ...userSlice.actions, createUser }

export default userSlice.reducer
