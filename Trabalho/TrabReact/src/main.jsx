import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{ createBrowserRouter, RouterProvider } from "react-router-dom"

import home from './routes/home.jsx'
import editar from './routes/editar.jsx'

const Home = home
const Edit = editar

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "editar",
    element: <Edit />,
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
