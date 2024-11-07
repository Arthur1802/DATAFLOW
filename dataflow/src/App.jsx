import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './AppRoutes'
import { authStatus } from './utils/auth'

const App = () => {
    const isLoggedIn = authStatus()

    useEffect(() => {
        const main = document.querySelector('.main')
    
        const setHeight = () => {
            const height = window.innerHeight * 0.8
            main.style.height = `${height}px`
        };
    
        setHeight();
    
        window.addEventListener('resize', setHeight)
    
        return () => {
            window.removeEventListener('resize', setHeight)
        };
    }, []);
    

    useEffect(() => {
        const app = document.querySelector('.App')
        if (!isLoggedIn) {
            app.style.flexDirection = 'column'
        } else {
            app.style.flexDirection = 'row'
        }
    }, [isLoggedIn])

    return (
        <div className = "App" data-aos = "">
            {isLoggedIn ? <Sidebar /> : <Navbar />}
            <div className = "app-container container" data-aos = "">
                <div className = "main" data-aos = "fade-up">
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}

export default App