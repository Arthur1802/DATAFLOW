import React from 'react'
import HamburgerMenuButton from '../HamburgerMenuButton/HamburgerMenuButton'
import './Navbar.css'

const Navbar  = ()  => {
    return (
        <nav className = "navbar navbar-expand-lg bg-light">
            <div className = "container-fluid">
                <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
                    <HamburgerMenuButton />
                </button>
                <a className = "navbar-brand poppins-medium" href = "#">DATAFLOW</a>

                <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <a className = "nav-link active" aria-current = "page" href = "#"><i className = "fa-solid fa-house"></i>Home</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#"><i className = "fa-solid fa-info"></i>About</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#"><i className = "fa-solid fa-file"></i>Docs</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#"><i className = "fa-solid fa-envelope"></i>Contact</a>
                        </li>
                    </ul>
                    <ul className = "navbar-nav navbar-footer poppins-medium">
                        <li className = "nav-item">
                            <a href = "" className = "btn nav-link">Log In</a>
                        </li>
                        <li className = "nav-item">
                            <a href = "" className = "btn btn-outline-dark">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar