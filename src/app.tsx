import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getNavigationsValue } from '@ijl/cli'
import { DEFAULT_THEME, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Provider } from 'react-redux'
import store from '@/store'
import { Layout } from '@/pages/Layout/Layout'
import { ErrorPage } from '@/pages/ErrorPage'
import { AppRoute } from '@/constants'
import { QuizListPage } from '@/pages/QuizListPage/QuizListPage'
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
      <MantineProvider theme={DEFAULT_THEME}>
        <Provider store={store}>

          <RouterProvider router={router} />

        </Provider>
      </MantineProvider>
    </React.StrictMode>
  )
}

export default App
