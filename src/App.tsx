import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/homepage'
import Login from './pages/login'
import SignUp from './pages/signup'
import Cart from './pages/cart'
import Root from './layout/root'
import ErrorPage from './errors/error-page'
import Account from './pages/account'
import Address from './pages/account/address'
import Orders from './pages/account/orders'
import Security from './pages/account/security'
import Watchlist from './pages/account/watchlist'
import CreateAddress from './pages/account/address/create-address'
import ChangeName from './pages/account/security/change-name'
import ChangeEmail from './pages/account/security/change-email'
import ChangePassword from './pages/account/security/change-password'
import AuthLayout from './layout/authLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/account',
        element: <AuthLayout child={<Account />} />,
        children: [
          {
            path: 'address',
            element: <Address />,
          },
          //child routes of address but to overide using 'outlet' we make them sibling routes
          {
            path: 'address/create-address',
            element: <CreateAddress />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
          {
            path: 'security',
            element: <Security />,
          },
          //child routes of security but to overide using 'outlet' we make them sibling routes
          {
            path: 'security/change-name',
            element: <ChangeName />,
          },
          {
            path: 'security/change-email',
            element: <ChangeEmail />,
          },
          {
            path: 'security/change-password',
            element: <ChangePassword />,
          },

          //watchlist routes
          {
            path: 'watchlist',
            element: <Watchlist />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])
