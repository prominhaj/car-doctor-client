import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Auth_Context from './Context/Auth_Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth_Context>
      <RouterProvider router={router} />
      
    </Auth_Context>
  </React.StrictMode>,
)
