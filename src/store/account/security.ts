import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { handleApiError } from '../../errors/api-error'
import {
  changeEmail,
  changeNames,
} from '../../services/account/security.services'
import { userActions } from '../user'

const changeUserNames = createAsyncThunk<
  void,
  { firstName: string; lastName: string; onSuccess: () => void }
>('security/change-names', async (argument, { dispatch }) => {
  try {
    const result = (await changeNames(
      argument.firstName,
      argument.lastName,
    )) as { firstName: string; lastName: string }

    dispatch(
      userActions.setNames({
        firstName: result.firstName,
        lastName: result.lastName,
      }),
    )
    toast.success('Names successfully updated!')
    argument.onSuccess()
  } catch (error) {
    handleApiError(error)
  }
})

const changeUserEmail = createAsyncThunk<
  void,
  { email: string; onSuccess?: () => void }
>('security/edit-email', async (info, { dispatch }) => {
  try {
    const newEmail = (await changeEmail(info.email)) as string
    console.log('data', newEmail)
    dispatch(userActions.setEmail({ email: newEmail }))
    toast.success('Email successfully updated!')
    info.onSuccess?.()
  } catch (error) {
    handleApiError(error)
  }
})

export const editUserActions = {
  changeUserEmail,
  changeUserNames,
}
