import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getNavigationsValue } from '@ijl/cli'
import { Provider } from 'react-redux'
import store from '@/store'
import { Layout } from '@/pages/Layout/Layout'
import { ErrorPage } from '@/pages/ErrorPage'
import { AppRoute } from '@/constants'
import { QuizListPage } from '@/pages/QuizListPage/QuizListPage'
import { LoginPage } from '@/pages/LoginPage'
import { QuizDetailPage } from '@/pages/QuizDetailPage/QuizDetailPage'

export const router = createBrowserRouter(
  [
    {
      path: AppRoute.HOME,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <QuizListPage />,
        },
        {
          path: AppRoute.LOGIN,
          element: <LoginPage />,
        },
        {
          path: AppRoute.QUIZZES + AppRoute.SLUG,
          element: <QuizDetailPage />,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}

export default App
