import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/error/Errorpage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <Errorpage />,
            children: [
                { index: true, element: <Homepage /> }
            ]
        }
    ],
    {
        basename: "/quizzy"
    }
)

const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default App;
