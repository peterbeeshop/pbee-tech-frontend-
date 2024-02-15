import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppSelector } from '../store/hooks'
import { userSelectors } from '../store/user'

type props = {
  child: JSX.Element
}
const AuthLayout = ({ child }: props) => {
  console.log('hereeeee')
  const { pathname } = useLocation()

  const isUserLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn)

  if (isUserLoggedIn) {
    return child
  } else {
    toast.error('Login or create account to continue', {})
    return <Navigate to={'/login'} state={{ from: pathname }} replace /> //"replace" will cause the navigation to replace the current entry in the history stack instead of adding a new one.
  }
}

export default AuthLayout
