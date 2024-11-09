import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import home_img from '../../assets/home-img.jpg'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className = "welcome-container container" data-aos = "fade-up">
            
            <section className = "sections home" id = "section1">
                <div className = "home-text">
                    <h1 className = "home-title poppins-bold">Manage your business with ease</h1>
                    <div className = "home-btns">
                        <Link to = "/pricing" className = "btn btn-secondary">Buy Now</Link>
                        <Link to = "/pricing" className = "btn btn-outline-secondary">Try it for free for 7 days</Link>
                    </div>
                </div>
                <div className = "home-img">
                    <img src = {home_img} alt = "Home Image" />
                </div>
            </section>

            <section className = "sections about" id = "section2">
                <p className = "poppins-regular">Dataflow is a data/document management software</p>
                <p className = "poppins-regular">It is a simple and easy to use software that helps you manage your documents and data</p>
            </section>
            
            <section className = "sections docs" id = "section3">
                <h2 className = "poppins-medium">Getting started</h2>
                <p className = "poppins-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </section>
            
            <section className = "sections contact" id = "section4">
                <h2 className = "poppins-medium">Contact us</h2>
                <form>
                    <div className = "names-container">
                        <div className = "form-floating">
                            <input type = "text" className = "form-control" id = "floatingName" placeholder = "John"/>
                            <label htmlFor = "floatingName">First Name</label>
                        </div>
                        <div className = "form-floating">
                            <input type = "text" className = "form-control" id = "floatingLastName" placeholder = "Doe"/>
                            <label htmlFor = "floatingLastName">Last Name</label>
                        </div>
                    </div>
                    <div className = "form-floating">
                        <input type = "email" className = "form-control" id = "floatingEmail" placeholder = "name@example.com"/>
                        <label htmlFor = "floatingEmail">Email address</label>
                    </div>
                    <div className = "form-floating">
                        <textarea className = "form-control" id = "floatingMessage" placeholder = "Message"></textarea>
                        <label htmlFor = "floatingMessage">Message</label>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Welcome