import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from '~/pages/Layout'
import { LoginPage } from '~/pages/LoginPage'
import { ErrorPage } from '~/pages/ErrorPage'
import { QuizDetailPage } from '~/pages/QuizDetailPage'
import { QuizListPage } from '~/pages/QuizListPage'
import {store} from "~/store";
import {Provider} from "react-redux";

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
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}
