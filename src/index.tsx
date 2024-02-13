import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { router } from './App'
import store from './store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" />
    </Provider>
  </React.StrictMode>,
)
