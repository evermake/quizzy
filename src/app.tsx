import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getNavigationsValue } from '@ijl/cli'
import Layout from './components/layout/Layout'
import Homepage from './pages/Homepage'
import Errorpage from './pages/error/Errorpage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <Errorpage />,
      children: [
        { index: true, element: <Homepage /> },
      ],
    },
  ],
  {
    basename: getNavigationsValue('quizzy.main'),
  },
)

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
