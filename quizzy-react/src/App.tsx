import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from '~/pages/Layout'
import { LoginPage } from '~/pages/LoginPage'
import { ErrorPage } from '~/pages/ErrorPage'
import { QuizDetailPage } from '~/pages/QuizDetailPage'
import { QuizListPage } from '~/pages/QuizListPage'
import {store} from "~/store";
import {Provider} from "react-redux";
import {AppRoute} from "~/constants";

const router = createBrowserRouter(
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
    basename: AppRoute.BASENAME,
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
