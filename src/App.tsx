
import Homepage from './pages/homepage';
import Login from './pages/login';
import SignUp from './pages/signup';
import Cart from './pages/cart';
import { createBrowserRouter } from 'react-router-dom'
import Root from './pages/layout/root';
import ErrorPage from './error-page';


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

