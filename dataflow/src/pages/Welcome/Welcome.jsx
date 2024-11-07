import React from 'react'

const Welcome = () => {
    return (
        <div className = "welcome-container container" data-aos = "fade-up">
            <section className = "sections home">
                <h1 className = "home-title poppins-bold">Manage your business like with ease</h1>
                <div className = "home-btns">
                    <button className = "btn btn-secondary">Buy Now</button>
                    <button className = "btn btn-outline-secondary">Try it for free for 7 days</button>
                </div>
            </section>

            <section className = "sections about">
                <p className = "poppins-regular">Dataflow is a data/document management software</p>
                <p className = "poppins-regular">It is a simple and easy to use software that helps you manage your documents and data</p>
            </section>
            
            <section className = "sections docs">
                <h2 className = "poppins-medium">Getting started</h2>
                <p className = "poppins-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </section>
            
            <section className = "sections contact">
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