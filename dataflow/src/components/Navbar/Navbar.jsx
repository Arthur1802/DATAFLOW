import React, { useEffect, useRef } from 'react'
import HamburgerMenuButton from '../HamburgerMenuButton/HamburgerMenuButton'
import { Link } from 'react-router-dom'
import Globals from '../../utils/Globals'
import './Navbar.css'

const Navbar  = ()  => {
    const navbarRef = useRef(null)

    useEffect(() => {
        const navbar = navbarRef.current
        let scrolled = Globals.scrolled
        let scrollPercentage = Globals.scrollPercentage
        let alpha = Globals.alpha
        let value = Globals.value
        
        console.log(scrollPercentage)
        
        if (scrolled) {
            if (value > 0) {
                navbar.style.width = "calc(100% - 5rem)"
                navbar.borderRadius = "0 0 0 0"
                navbar.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`
            }
        } else {
            navbar.style.width = "100%"
            navbar.style.backgroundColor = "#fff"
            navbar.borderRadius = "0"
        }
    }, [])

    return (
        <nav className = "navbar navbar-expand-lg bg-light" id = "navbar" ref = {navbarRef}>
            <div className = "container-fluid">
                <div className = "navbar-toggler" data-bs-toggle = "collapse" data-bs-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
                    <HamburgerMenuButton />
                </div>
                <Link className = "navbar-brand poppins-medium" to = "/">DATAFLOW</Link>

                <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <a className = "nav-link active" href = "#section1"><i className = "fa-solid fa-house"></i>Home</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#section2"><i className = "fa-solid fa-info"></i>About</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#section3"><i className = "fa-solid fa-file"></i>Docs</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#section4"><i className = "fa-solid fa-envelope"></i>Contact</a>
                        </li>
                    </ul>
                    <ul className = "navbar-nav navbar-footer poppins-medium">
                        <li className = "nav-item">
                            <Link to = "/login" className = "btn nav-link">Log In</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/signin" className = "btn btn-outline-dark">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar