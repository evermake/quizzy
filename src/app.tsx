import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getNavigationsValue } from '@ijl/cli'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as Thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import QuizDetail from '@/pages/QuizDetail'
import reducer from '@/__data__/reducers'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
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
      <Provider
        store={createStore(reducer, composeWithDevTools(applyMiddleware(Thunk.default)))}
      >
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}

export default App
