// App.jsx
import './App.css'
import { RouterProvider, createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler.jsx'

function Layout({ setIsAuthenticated }) {
  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Outlet />
    </>
  )
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout setIsAuthenticated={setIsAuthenticated} />,
      children: [
        {
          index: true,
          element: <Navigate to="/login" />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'home',
          element: isAuthenticated ? <Home /> : <Navigate to="/login" />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
