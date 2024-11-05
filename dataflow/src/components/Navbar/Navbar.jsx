import React from 'react'

const Navbar = () => {
    return (
        <nav className = "navbar-container">
            <span className = "toggle-btn-container"></span>
            <ul className = "tabs-container">
                <li className = "tabs">Convert PDF to Excel</li>
                <li className = "tabs">Saved files</li>
                <li className = "tabs">Contact</li>
            </ul>
            <ul>
                <li>Log Out</li>
            </ul>
        </nav>
    )
}

export default Navbar