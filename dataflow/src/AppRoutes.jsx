import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Signin from './pages/Signin/Signin'
import Login from './pages/Login/Login'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Signin />} />
                <Route path = "/login" element = {<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes