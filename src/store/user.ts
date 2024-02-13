import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
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
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        toast.error(error.response?.data?.message)
      } else {
        toast.error(error)
      }
    }
  },
)

export const userActions = { ...userSlice.actions, createUser }

export default userSlice.reducer
