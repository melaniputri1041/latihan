import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './pages/Dashboard'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Header from './Components/Header/index.jsx'
import About from './pages/About/index.jsx'
import Shop from './pages/Shop/index.jsx'
import DetailProduk from './pages/DetailProduk/index.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
      path: '/',
      element: <Dashboard/>
    },
    {
      path:'/detail-produk/:idproduk',
      element: <DetailProduk/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/shop',
      element: <Shop/>
    }
  ]
  },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
