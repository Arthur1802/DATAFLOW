import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <div className = "app-container container">
            <Navbar />
            <AppRoutes />
        </div>
    )
}

export default App