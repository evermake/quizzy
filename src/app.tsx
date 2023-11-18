import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/error/Errorpage";

const App = () => {
    return (
        <BrowserRouter basename="/quizzy">
            <Routes>
                <Route
                    path={'/'}
                    element={<Layout/>}
                >
                    <Route path='*' element={<Errorpage />} />
                    <Route
                        path={'/'}
                        element={<Homepage/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

