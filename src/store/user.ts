import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { RootState } from '.'
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
    setNames: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>,
    ) => {
      state.user.firstName = action.payload.firstName
      state.user.lastName = action.payload.lastName
    },
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.user.email = action.payload.email
    },
    setLogout: (
      state,
      action: PayloadAction<{ user: Partial<AppUser>; token: TokenType }>,
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
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
    dispatch(userActions.setUser({ user: result.user, token: result.token }))
    userInfo.onSuccess()
    toast.success('Login was successful!')
  } catch (error) {
    handleApiError(error)
  }
})

const logoutUser = createAsyncThunk<void, { onSuccess: () => void }>(
  'user/logout',
  async (_, { dispatch }) => {
    try {
      const result = await logout()
      dispatch(userActions.setLogout({ user: {}, token: undefined }))
      toast.success(result)
      _.onSuccess()
    } catch (error) {
      toast.error('An unexpected error occured. Try again later...')
    }
  },
)

export const userActions = {
  ...userSlice.actions,
  createUser,
  loginUser,
  logoutUser,
}

export const userSelectors = {
  selectUser: (state: RootState) => state.user.user,
  selectToken: (state: RootState) => state.user.token,
  selectIsUserLoggedIn: (state: RootState) =>
    Boolean(state.user.token && state.user.user._id),
}

export default userSlice.reducer
