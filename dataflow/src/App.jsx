import React, { useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './AppRoutes'
import { authStatus } from './utils/auth'
import { BrowserRouter } from 'react-router-dom'
import Globals from './utils/Globals'

const App = () => {
    const isLoggedIn = authStatus()

    useEffect(() => {
        const main = document.querySelector('.main')
    
        const setHeight = () => {
            const height = window.innerHeight * 0.8
            main.style.height = `${height}px`
        }
    
        setHeight()
    
        window.addEventListener('resize', setHeight)
    
        return () => {
            window.removeEventListener('resize', setHeight)
        }
    }, [])

    const main_container = useRef(null)
    
    useEffect(() => {
        const main = main_container.current
        const handleScroll = () => {
            const scrollPercentage = main.scrollY / (main.scrollHeight - main.clientHeight) * 100
            const alpha = scrollPercentage / 100
            const value = main.scrollY

            if (main.scrollY > 0) {
                Globals.scrolled = true
                Globals.scrollPercentage = scrollPercentage
                Globals.alpha = alpha
                Globals.value = value
            } else {
                Globals.scrolled = false
                Globals.scrollPercentage = 0
                Globals.alpha = 0
                Globals.value = 0
            }
        }

        main.addEventListener('scroll', handleScroll)

        return () => {
            main.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const app = document.querySelector('.App')
        if (!isLoggedIn) {
            app.style.flexDirection = 'column'
        } else {
            app.style.flexDirection = 'row'
        }
    }, [isLoggedIn])

    return (
        <BrowserRouter>
            <div className = "App" data-aos = "">
                {isLoggedIn ? <Sidebar /> : <Navbar />}
                <div className = "app-container container" data-aos = "">
                    <div className = "main" data-aos = "fade-up" ref = {main_container}>
                        <AppRoutes />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App