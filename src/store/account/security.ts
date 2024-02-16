import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { handleApiError } from '../../errors/api-error'
import { changeNames } from '../../services/account/security.services'
import { userActions } from '../user'

export const changeUserNames = createAsyncThunk<
  void,
  { firstName: string; lastName: string; onSuccess: () => void }
>('security/change-names', async (argument, { dispatch }) => {
  try {
    const result = (await changeNames(
      argument.firstName,
      argument.lastName,
    )) as { firstName: string; lastName: string }
    console.log(result)
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
