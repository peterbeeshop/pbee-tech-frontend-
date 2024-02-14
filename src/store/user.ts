import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { handleApiError } from '../errors/api-error'
import { signup, logout, login } from '../services/auth.services'
import { AppUser } from '../types/user'

interface IUser {
  user: Partial<AppUser>
  token: string | undefined
}

type TokenType = string | undefined

const initialState: IUser = {
  user: {},
  token: undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        user: Partial<AppUser>
        token: TokenType
      }>,
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogin: (
      state,
      action: PayloadAction<{
        user: Partial<AppUser>
        token: TokenType
      }>,
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state, action) => {
      state.user = {}
      state.token = undefined
    },
  },
})

const createUser = createAsyncThunk<
  void,
  { email: string; password: string; onSuccess: () => void }
>('user/createUserStatus', async (userInfo, { dispatch }) => {
  try {
    const result = await signup(userInfo.email, userInfo.password)
    dispatch(userActions.setUser({ user: result.user, token: result.token }))
    toast.success('Account has successfully been created!')
    userInfo.onSuccess()
  } catch (error) {
    handleApiError(error)
  }
})

const loginUser = createAsyncThunk<
  void,
  { email: string; password: string; onSuccess: () => void }
>('user/login', async (userInfo, { dispatch }) => {
  try {
    const result = await login(userInfo.email, userInfo.password)
    dispatch(userActions.setLogin({ user: result.user, token: result.token }))
    toast.success('Login was successful!')
    userInfo.onSuccess()
  } catch (error) {
    handleApiError(error)
  }
})

const logoutUser = createAsyncThunk<void, void>(
  'user/logout',
  async (_, { dispatch }) => {
    try {
      const result = await logout()
      console.log(result)
      dispatch(userActions.setLogout)
    } catch (error) {}
  },
)

export const userActions = {
  ...userSlice.actions,
  createUser,
  loginUser,
  logoutUser,
}

export default userSlice.reducer
