import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getNavigationsValue } from '@ijl/cli'
import Layout from '@/components/Layout/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import QuizDetail from '@/pages/QuizDetail'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/quizzes/:quizSlug',
          element: <QuizDetail />,
        },
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
