import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// style
import './index.css'

// pages
import Home from './pages/Home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
