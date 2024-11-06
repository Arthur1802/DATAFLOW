import React from 'react'

const Signin = () => {
    return (
        <div className = "signin-container container" data-aos = "fade-up">
           <div className = "form-floating">
                <input type = "text" className = "form-control" id = "floatingName" placeholder = "John" />
                <label data-bs-toggle = "tooltip" data-bs-title = "You can insert either only the first name or both first and last names" htmlFor = "floatingName">Name</label>
            </div>
           <div className = "form-floating">
                <input type = "email" className = "form-control" id = "floatingInput" placeholder = "name@example.com" />
                <label htmlFor = "floatingInput">Email address</label>
            </div>
            <div className = "form-floating">
                <input type = "password" className = "form-control" id = "floatingPassword" placeholder = "Password" />
                <label htmlFor = "floatingPassword">Password</label>
            </div> 
            <div className = "form-floating">
                <input type = "password" className = "form-control" id = "floatingConfirmation" placeholder = "Confirm Password" />
                <label htmlFor = "floatingConfirmation">Confirm Password</label>
            </div> 
        </div>
    )
}

export default Signin