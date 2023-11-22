import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {getNavigationsValue} from '@ijl/cli'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import QuizDetail from '@/pages/QuizDetail'
import {applyMiddleware, createStore} from "redux";
import reducer from '@/__data__/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import * as Thunk from 'redux-thunk';
import {Provider} from "react-redux";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: '/login',
                    element: <Login/>,
                },
                {
                    path: '/quizzes/:quizSlug',
                    element: <QuizDetail/>,
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
                store={createStore(reducer, composeWithDevTools(applyMiddleware(Thunk.default)))}>
                <RouterProvider router={router}/>
            </Provider>
        </React.StrictMode>
    )
}

export default App
