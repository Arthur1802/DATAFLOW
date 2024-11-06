import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <div className = "App" data-aos = "">
            <Sidebar />
            <div className = "app-container container" data-aos = "">
                <div className = "main" data-aos = "fade-up">
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}

export default App