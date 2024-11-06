import React, { useEffect, useState } from 'react'
import HamburgerMenuButton from './HamburgerMenuButton/HamburgerMenuButton.jsx'
import './Sidebar.css'

const Sidebar = () => {
    const [isMobileView, setIsMobileView] = useState(window.matchMedia("(max-width: 425px)").matches)

    useEffect(() => {
        const mobileView = window.matchMedia("(max-width: 425px)")

        const handleViewChange = (e) => setIsMobileView(e.matches)

        mobileView.addEventListener("change", handleViewChange)

        return () => mobileView.removeEventListener("change", handleViewChange)
    }, [])

    const toggleMenu = () => {
        const sidebar = document.querySelector('#sidebar')
        if (isMobileView) {
            sidebar.classList.toggle('show')
        } else {
            sidebar.classList.toggle('expand')
        }
    }

    return (
        <div className = "sidebar-wrapper" data-aos = "fade-right">
            {isMobileView ? (
            <>
                <div className = "toggle-btn-container">
                    <HamburgerMenuButton id = "toggle-btn" onClick = {toggleMenu}/>
                </div>

                <aside id = "sidebar">
                    <div className = "sidebar-logo">
                        <span>DATAFLOW</span>
                    </div>

                    <ul className = "sidebar-nav">
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-arrow-right-arrow-left"></i><span>Convert PDF to Excel</span></a></li>
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-folder"></i><span>Saved files</span></a></li>
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-user"></i><span>Profile</span></a></li>
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-gear"></i><span>Settings</span></a></li>
                    </ul>

                    <div className = "sidebar-footer"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-right-from-bracket"></i><span>Log Out</span></a></div>
                </aside>
            </>
            ) : (
            <>
                <aside id = "sidebar">
                    <div className = "d-flex">              
                        <div id = "toggle-btn-container">
                            <HamburgerMenuButton id = "toggle-btn" onClick = {toggleMenu}/>
                        </div>
                        <div className = "sidebar-logo">
                            <span>DATAFLOW</span>
                        </div>
                    </div>

                    <ul className = "sidebar-nav">
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-arrow-right-arrow-left"></i><span>Convert PDF to Excel</span></a></li>
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-folder"></i><span>Saved files</span></a></li>
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-user"></i><span>Profile</span></a></li>
                        <li className = "sidebar-item"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-gear"></i><span>Settings</span></a></li>
                    </ul>

                    <div className = "sidebar-footer"><a href = "" className = "sidebar-link"><i className = "fa-solid fa-right-from-bracket"></i><span>Log Out</span></a></div>
                </aside>
            </>
            )}
        </div>
    )
}

export default Sidebar