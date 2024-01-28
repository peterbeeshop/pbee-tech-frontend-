
import Homepage from './pages/homepage';
import Login from './pages/login';
import SignUp from './pages/signup';
import Cart from './pages/cart';
import { createBrowserRouter } from 'react-router-dom'
import Root from './layout/root';
import ErrorPage from './error-page';
import Account from './pages/account';
import Address from './pages/account/address';
import Orders from './pages/account/orders';
import Security from './pages/account/security';
import Watchlist from './pages/account/watchlist';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Homepage />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            path: 'address',
            element: <Address />
          },
          {
            path: 'orders',
            element: <Orders />
          },
          {
            path: 'security',
            element: <Security />
          },
          {
            path: 'watchlist',
            element: <Watchlist />
          }
        ]
      },

    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

