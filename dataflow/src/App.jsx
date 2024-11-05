import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Signin from './pages/Signin/Signin'

const App = () => {
    return (
        <div className = "app-container">
            <Navbar />
            <Signin />
        </div>
    )
}

export default App