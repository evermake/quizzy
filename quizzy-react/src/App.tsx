import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DEFAULT_THEME, MantineProvider } from '@mantine/core'
import { Layout } from '~/pages/Layout'
import { LoginPage } from '~/pages/LoginPage'
import { ErrorPage } from '~/pages/ErrorPage'
import { QuizDetailPage } from '~/pages/QuizDetailPage'
import { QuizListPage } from '~/pages/QuizListPage'
import '@mantine/core/styles.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <QuizListPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/quizzes/:slug',
          element: <QuizDetailPage />,
        },
      ],
    },
  ],
  {
    basename: '/',
  },
)

export default function App() {
  return (
    <MantineProvider theme={DEFAULT_THEME}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
